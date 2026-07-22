import { ensureLLMNetworking } from "@/lib/llm-fetch";
ensureLLMNetworking();
import { NextRequest, NextResponse } from "next/server";
import type OpenAI from "openai";
import {
  buildGenerateReviewSystemPrompt,
  buildGenerateReviewUserPrompt,
} from "@/lib/prompts";
import {
  formatLLMError,
  extractCompletionText,
  getLLMClient,
  getLLMModel,
  getLLMProvider,
  getLLMProviderLabel,
  getStructuredCompletionParams,
  hasLLMConfigured,
  parseJsonFromModel,
} from "@/lib/llm";
import { rateLimit, tooManyRequestsResponse } from "@/lib/rate-limit";
import { isAllowedOrigin } from "@/lib/security";
import {
  collectDuplicateDescriptorErrors,
  resolveLlmPortfolioReview,
} from "@/lib/resolve-portfolio-review";
import {
  collectDescriptorTexts,
  sanitizePortfolioReview,
} from "@/lib/sanitize-review";
import type { CapabilityMode, DescriptorLevel, PortfolioReview } from "@/lib/schema";
import { ZodError } from "zod";
import {
  buildDemoReview,
  deriveCapabilityMode,
  expectedCapabilityCount,
  generateReviewRequestSchema,
  llmPortfolioReviewSchema,
} from "@/lib/schema";

const MAX_ATTEMPTS = 2;

type CaseOptions = {
  capabilityMode: CapabilityMode;
  selectedCapabilities?: string[];
  letAiChoose: boolean;
  longText: boolean;
  expectedCount: number;
};

async function callModel(
  client: OpenAI,
  caseDescription: string,
  descriptorLevels: DescriptorLevel[],
  caseOptions: CaseOptions,
  usedDescriptors: string[],
  attempt = 0,
): Promise<PortfolioReview> {
  const {
    capabilityMode,
    selectedCapabilities,
    letAiChoose,
    longText,
    expectedCount,
  } = caseOptions;

  let review: PortfolioReview;
  try {
    const promptOptions = {
      capabilityMode,
      selectedCapabilities,
      longText,
      expectedCapabilityCount: expectedCount,
    };

    const completion = await client.chat.completions.create({
      model: getLLMModel(),
      temperature: 0.4,
      ...getStructuredCompletionParams(),
      messages: [
        {
          role: "system",
          content: buildGenerateReviewSystemPrompt(promptOptions),
        },
        {
          role: "user",
          content: buildGenerateReviewUserPrompt(
            caseDescription,
            descriptorLevels,
            usedDescriptors,
            attempt > 0,
            capabilityMode,
            selectedCapabilities,
            { longText },
          ),
        },
      ],
    });

    const content = extractCompletionText(completion.choices[0]?.message);
    if (!content) {
      throw new Error("Empty response from AI model.");
    }

    const llmReview = await parseJsonFromModel(content, (data) =>
      llmPortfolioReviewSchema.parse(data),
    );
    review = sanitizePortfolioReview(resolveLlmPortfolioReview(llmReview));
  } catch (error) {
    if (attempt < MAX_ATTEMPTS - 1) {
      return callModel(
        client,
        caseDescription,
        descriptorLevels,
        caseOptions,
        usedDescriptors,
        attempt + 1,
      );
    }
    throw error;
  }

  const validationErrors = collectDuplicateDescriptorErrors(
    review,
    usedDescriptors,
    selectedCapabilities && selectedCapabilities.length > 0
      ? selectedCapabilities
      : undefined,
    { letAiChoose, expectedCount },
  );
  if (validationErrors.length > 0 && attempt < MAX_ATTEMPTS - 1) {
    return callModel(
      client,
      caseDescription,
      descriptorLevels,
      caseOptions,
      usedDescriptors,
      attempt + 1,
    );
  }

  if (validationErrors.length > 0) {
    throw new Error(
      `${validationErrors[0]} Try generating again or use different case notes.`,
    );
  }

  return review;
}

function normalizeCaseOptions(caseItem: {
  caseDescription: string;
  capabilityMode?: CapabilityMode;
  selectedCapabilities?: string[];
  letAiChoose?: boolean;
  longText?: boolean;
}): CaseOptions & { caseDescription: string } {
  const selected = caseItem.selectedCapabilities ?? [];
  const letAiChoose =
    caseItem.letAiChoose !== undefined
      ? caseItem.letAiChoose
      : caseItem.capabilityMode === "auto" ||
        caseItem.capabilityMode === "mixed" ||
        ((!caseItem.capabilityMode || caseItem.capabilityMode !== "manual") &&
          selected.length === 0);

  const capabilityMode =
    caseItem.capabilityMode ?? deriveCapabilityMode(letAiChoose, selected);

  return {
    caseDescription: caseItem.caseDescription,
    capabilityMode,
    selectedCapabilities: selected.length > 0 ? selected : undefined,
    letAiChoose,
    longText: Boolean(caseItem.longText),
    expectedCount: expectedCapabilityCount(letAiChoose, selected),
  };
}

async function generateReviews(
  cases: {
    caseDescription: string;
    capabilityMode?: CapabilityMode;
    selectedCapabilities?: string[];
    letAiChoose?: boolean;
    longText?: boolean;
  }[],
  descriptorLevels: DescriptorLevel[],
) {
  const client = getLLMClient();
  if (!client) {
    const reviews = cases.map((caseItem, index) =>
      buildDemoReview(index, cases.length, Boolean(caseItem.longText)),
    );
    return { reviews, demo: true, provider: getLLMProvider() };
  }

  const usedDescriptors: string[] = [];
  const reviews: PortfolioReview[] = [];

  for (const caseItem of cases) {
    const options = normalizeCaseOptions(caseItem);
    const review = await callModel(
      client,
      options.caseDescription,
      descriptorLevels,
      options,
      usedDescriptors,
    );
    reviews.push(review);
    usedDescriptors.push(...collectDescriptorTexts(review));
  }

  return { reviews, demo: false, provider: getLLMProvider() };
}

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json(
        { error: "Request blocked: invalid origin." },
        { status: 403 },
      );
    }

    const limit = await rateLimit(request, "generate-review");
    if (!limit.success) {
      return tooManyRequestsResponse(limit.resetMs);
    }

    const body = await request.json();
    const parsed = generateReviewRequestSchema.parse(body);
    const { cases, descriptorLevels } = parsed;

    const { reviews, demo, provider } = await generateReviews(
      cases,
      descriptorLevels,
    );

    if (reviews.length !== cases.length) {
      return NextResponse.json(
        { error: "Review count did not match the number of cases submitted." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      reviews,
      review: reviews[0],
      demo,
      provider,
      providerLabel: getLLMProviderLabel(),
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: error.errors[0]?.message ?? "Invalid request.",
          demo: !hasLLMConfigured(),
          provider: getLLMProvider(),
        },
        { status: 400 },
      );
    }
    const message = formatLLMError(error);
    const status =
      message.includes("at least 20 characters") ||
      message.includes("Select at least one") ||
      message.includes("Add at least one") ||
      message.includes("exactly") ||
      message.includes("Unknown RCGP capability") ||
      message.includes("Invalid descriptorIndex") ||
      message.includes("already used") ||
      message.includes("Duplicate descriptor") ||
      message.includes("was not in your selected") ||
      message.includes("Missing required capability") ||
      message.includes("expected portfolio format") ||
      message.includes("Provide exactly") ||
      message.includes("must have exactly one") ||
      message.includes("Write how this was achieved")
        ? 400
        : message.includes("Invalid API key") || message.includes("access denied")
          ? 401
          : 500;
    return NextResponse.json(
      {
        error: message,
        demo: !hasLLMConfigured(),
        provider: getLLMProvider(),
      },
      { status },
    );
  }
}
