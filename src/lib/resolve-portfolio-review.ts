import {
  findCapability,
  isExactDescriptor,
  normalizeCapabilityName,
  resolveDescriptor,
} from "@/lib/rcgp-descriptors";
import type { LlmPortfolioReview, PortfolioReview } from "@/lib/schema";

export function resolveLlmPortfolioReview(llm: LlmPortfolioReview): PortfolioReview {
  return {
    title: llm.title,
    briefDescription: llm.briefDescription,
    learningNeeds: llm.learningNeeds,
    reflection: llm.reflection,
    capabilities: llm.capabilities.map((cap) => {
      const name = normalizeCapabilityName(cap.name);
      const first = cap.evidence[0];
      return {
        name,
        evidence: first
          ? [
              {
                level: first.level,
                descriptor: resolveDescriptor(name, first.level, first.descriptorIndex),
                achievement: first.achievement,
              },
            ]
          : [],
      };
    }),
  };
}

export function collectManualCapabilityErrors(
  review: PortfolioReview,
  selectedCapabilities: string[],
  options?: { letAiChoose?: boolean; expectedCount?: number },
): string[] {
  const expected = new Set(
    selectedCapabilities.map((n) => normalizeCapabilityName(n)),
  );
  const actual = review.capabilities.map((c) => c.name);
  const errors: string[] = [];
  const letAiChoose = Boolean(options?.letAiChoose);
  const expectedCount =
    options?.expectedCount ?? (letAiChoose ? 3 : selectedCapabilities.length);

  if (actual.length !== expectedCount) {
    errors.push(`Review must include exactly ${expectedCount} capabilities.`);
    return errors;
  }

  for (const name of expected) {
    if (!actual.includes(name)) {
      errors.push(`Missing required capability "${name}".`);
    }
  }

  if (!letAiChoose) {
    for (const name of actual) {
      if (!expected.has(name)) {
        errors.push(`Capability "${name}" was not in your selected list.`);
      }
    }
  }

  const unique = new Set(actual);
  if (unique.size !== actual.length) {
    errors.push("Each capability must appear exactly once.");
  }

  return errors;
}

export function collectDuplicateDescriptorErrors(
  review: PortfolioReview,
  usedDescriptors: string[],
  selectedCapabilities?: string[],
  options?: { letAiChoose?: boolean; expectedCount?: number },
): string[] {
  const errors: string[] = [];

  if (selectedCapabilities && selectedCapabilities.length > 0) {
    errors.push(
      ...collectManualCapabilityErrors(review, selectedCapabilities, options),
    );
  }

  const usedSet = new Set(usedDescriptors.map((d) => d.trim()));
  const inReview = new Set<string>();

  for (const cap of review.capabilities) {
    if (!findCapability(cap.name)) {
      errors.push(`Unknown capability: ${cap.name}`);
    }

    if (cap.evidence.length !== 1) {
      errors.push(`Capability "${cap.name}" must have exactly one evidence item.`);
    }

    for (const item of cap.evidence) {
      const text = item.descriptor.trim();

      if (!isExactDescriptor(text)) {
        errors.push(`Descriptor is not from the RCGP list (${cap.name}).`);
      }
      if (usedSet.has(text)) {
        errors.push(
          `Descriptor already used in another case in this batch (${cap.name}, ${item.level}).`,
        );
      }
      if (inReview.has(text)) {
        errors.push(`Duplicate descriptor within this review (${cap.name}).`);
      }
      inReview.add(text);
    }
  }

  return errors;
}
