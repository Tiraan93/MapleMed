import OpenAI from "openai";
import { ZodError } from "zod";
import { allowInsecureLLMSSL, ensureLLMNetworking } from "@/lib/llm-fetch";

/** Locked model for MapleMedic GPTool — do not change without product approval. */
export const LOCKED_LLM_MODEL = "deepseek/deepseek-v4-flash";
export const LOCKED_LLM_PROVIDER = "openrouter" as const;

export type LLMProvider = "openrouter";

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export function getLLMProvider(): LLMProvider {
  return LOCKED_LLM_PROVIDER;
}

export function getLLMProviderLabel(): string {
  return "OpenRouter (DeepSeek V4 Flash)";
}

export function getSetupMessage(): string {
  return "Add a free OPENROUTER_API_KEY from https://openrouter.ai/keys to .env.local, then restart the dev server.";
}

export function hasLLMConfigured(): boolean {
  return Boolean(process.env.OPENROUTER_API_KEY?.trim());
}

export function getLLMClient(): OpenAI | null {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) return null;

  ensureLLMNetworking();
  return new OpenAI({
    apiKey,
    baseURL: OPENROUTER_BASE_URL,
    defaultHeaders: {
      "HTTP-Referer":
        process.env.OPENROUTER_SITE_URL?.trim() || "https://maplemed.co.uk",
      "X-Title":
        process.env.OPENROUTER_SITE_NAME?.trim() || "MapleMedic GPTool",
    },
  });
}

export function getLLMModel(): string {
  return LOCKED_LLM_MODEL;
}

export function supportsJsonResponseFormat(): boolean {
  return true;
}

/** Portfolio reviews include long prose (reflection, brief description); avoid truncated JSON. */
export const STRUCTURED_COMPLETION_MAX_TOKENS = 8192;

type CompletionMessage = {
  content?: string | null | Array<{ type?: string; text?: string }>;
  reasoning?: string | null;
  reasoning_content?: string | null;
};

export function extractCompletionText(
  message: CompletionMessage | null | undefined,
): string {
  if (!message) return "";

  const { content } = message;
  if (typeof content === "string" && content.trim()) {
    return content.trim();
  }

  if (Array.isArray(content)) {
    const text = content
      .map((part) => (typeof part?.text === "string" ? part.text : ""))
      .join("")
      .trim();
    if (text) return text;
  }

  return "";
}

export function getStructuredCompletionParams(): Record<string, unknown> {
  return {
    max_tokens: STRUCTURED_COMPLETION_MAX_TOKENS,
    response_format: { type: "json_object" },
    // DeepSeek defaults to thinking mode; disable it so JSON lands in message.content.
    reasoning: { enabled: false },
  };
}

function extractJsonString(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return trimmed;

  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenceMatch?.[1]) return fenceMatch[1].trim();

  if (trimmed.startsWith("{") && trimmed.endsWith("}")) return trimmed;

  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start !== -1 && end > start) return trimmed.slice(start, end + 1);

  return trimmed;
}

export function formatLLMError(error: unknown): string {
  const e = error as Record<string, unknown>;

  const isString = (value: unknown): value is string => typeof value === "string";

  const isConnectionError =
    e?.name === "APIConnectionError" ||
    e?.type === "connection_error" ||
    e?.code === "ECONNREFUSED" ||
    e?.code === "ENOTFOUND" ||
    (isString(e?.message) &&
      /ECONNREFUSED|ENOTFOUND|ENETUNREACH|fetch failed/i.test(e.message));

  if (isConnectionError) {
    const sslHint = allowInsecureLLMSSL()
      ? ""
      : " If you are on Windows with antivirus SSL scanning, add LLM_INSECURE_SSL=true to .env.local and restart.";
    return `Could not reach the AI provider (connection error). Check your internet, VPN, or firewall.${sslHint}`;
  }

  const status = e?.status ?? e?.statusCode ?? e?.httpStatus;
  if (typeof status === "number") {
    if (status === 401) {
      return `Invalid API key for ${getLLMProviderLabel()}. Check your .env.local and restart the dev server.`;
    }
    if (status === 403) {
      return "API access denied. Check billing or model access for your provider.";
    }
    if (status === 429) {
      return "Rate limit reached. Wait a moment and try again.";
    }
    if (status === 404) {
      return `Model not found (${getLLMModel()}).`;
    }
    const message = e?.message;
    return (isString(message) && message) || `API error (${status}).`;
  }

  if (e instanceof Error && e.message) return e.message;

  return "Unexpected error calling the AI provider.";
}

export async function parseJsonFromModel<T>(
  content: string,
  parse: (data: unknown) => T,
): Promise<T> {
  const jsonString = extractJsonString(content);
  let data: unknown;

  try {
    data = JSON.parse(jsonString);
  } catch {
    throw new Error("Failed to parse AI response as JSON.");
  }

  try {
    return parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      const first = error.errors[0];
      throw new Error(
        first?.message ??
          "AI response did not match the expected portfolio format.",
      );
    }
    throw error;
  }
}
