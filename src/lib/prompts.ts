import type { CapabilityMode, DescriptorLevel } from "@/lib/schema";
import { BANNED_WORDS_LIST } from "@/lib/sanitize";
import {
  buildDescriptorPromptSection,
  formatRetrySection,
  formatUsedDescriptorsSection,
  RCGP_CAPABILITY_NAMES,
  SYSTEM_TEAM_GUIDANCE,
} from "@/lib/rcgp-descriptors";

const BANNED_WORDS = BANNED_WORDS_LIST.join(", ");

const WRITING_RULES = `
Writing rules (apply to ALL output fields except descriptor selection):
- Use British English spelling and terminology (e.g. oedema, dyspnoea, recognise, organisation, general practice).
- Do NOT use hyphens anywhere in generated prose (achievement sentences, brief description, reflection, learning needs). Write "non judgemental" not "non-judgemental", "follow up" not "follow-up", "person centred" not "person-centred", "work life" not "work-life", etc.
- Do NOT use any of these words: ${BANNED_WORDS}.
- Write in the first person as the GP trainee author (use I, me, my). Brief description, achievement sentences, learning needs, and reflection must all be first person.
- Do NOT invent clinical facts, investigations, diagnoses, or outcomes not supported by the input.
`;

const SAFETY_GUARDRAILS = `
Professional presentation guardrails (critical — apply to ALL prose):
- Never portray the trainee as incompetent, unsafe, negligent, careless, or unprofessional.
- Never describe actions that caused patient harm, near miss harm, serious error without remediation framed as learning from good practice, or reckless decision making.
- Frame challenges as normal developmental learning points for a competent trainee who acted safely and thoughtfully.
- Learning needs must be constructive growth areas, not admissions of inability or danger to patients.
- If the case notes mention a difficulty, reframe it as reflective insight while keeping the trainee competent and patient safety intact.
- Do not invent mistakes, omissions, or harm that are not in the notes; if notes describe an error, focus on safe escalation, supervision, and constructive learning without self incrimination.
`;

export type GeneratePromptOptions = {
  capabilityMode: CapabilityMode;
  selectedCapabilities?: string[];
  longText?: boolean;
  expectedCapabilityCount?: number;
};

function buildCapabilityInstruction(options: GeneratePromptOptions): string {
  const {
    capabilityMode,
    selectedCapabilities,
    expectedCapabilityCount = 3,
  } = options;
  const selected = selectedCapabilities ?? [];

  if (capabilityMode === "manual" && selected.length > 0) {
    return `Capabilities section (critical):
- You MUST use exactly these ${selected.length} RCGP capabilities (one capability object each, in any order): ${selected.join("; ")}.
- Do not substitute other capability names.
- Output exactly ${selected.length} capability object(s).`;
  }

  if (capabilityMode === "mixed" && selected.length > 0) {
    const aiSlots = Math.max(0, 3 - selected.length);
    return `Capabilities section (critical):
- You MUST include these user selected RCGP capabilities: ${selected.join("; ")}.
- Also choose ${aiSlots} additional most relevant RCGP capabilities from: ${RCGP_CAPABILITY_NAMES.join("; ")}.
- Output exactly 3 capability objects in total. Do not duplicate names.`;
  }

  return `Capabilities section (critical):
- Select exactly the ${expectedCapabilityCount} most relevant RCGP capabilities for this case from: ${RCGP_CAPABILITY_NAMES.join("; ")}.
- Output exactly ${expectedCapabilityCount} capability object(s).`;
}

function buildAchievementInstruction(longText: boolean): string {
  if (longText) {
    return `- "achievement": write exactly THREE first person sentences as one continuous paragraph. The first sentence must restate the selected word descriptor in the first person while preserving its meaning. The next two sentences must show specifically how I demonstrated it in THIS case. Vary sentence length. No bullet points or headings.`;
  }
  return `- "achievement": write exactly TWO first person sentences as one continuous paragraph. The first sentence must restate the selected word descriptor in the first person while preserving its meaning. The second sentence must show specifically how I demonstrated it in THIS case. No bullet points or headings.`;
}

function buildReflectionInstruction(): string {
  return `- Reflection: write a thoughtful first person reflection informed by the Gibbs Reflective Cycle.
- Select only the Gibbs elements that add value for this case; the final output does NOT need to include every stage.
- Prioritise meaningful evaluation and analysis: what went well, what was challenging, why it mattered, what I learned, and how this will influence my future practice.
- Include feelings only when they add genuine insight. End with a specific and credible development or action point.
- Aim for roughly 140 to 220 words. Write as natural, flowing prose with varied sentence length. Do NOT label Gibbs stages, use headings, or turn the reflection into a checklist.
- Avoid generic statements. Tie every reflective insight to the supplied case while maintaining the professional presentation guardrails.`;
}

export function buildGenerateReviewSystemPrompt(
  capabilityModeOrOptions: CapabilityMode | GeneratePromptOptions,
  selectedCapabilities?: string[],
): string {
  const options: GeneratePromptOptions =
    typeof capabilityModeOrOptions === "string"
      ? {
          capabilityMode: capabilityModeOrOptions,
          selectedCapabilities,
          longText: false,
          expectedCapabilityCount: 3,
        }
      : {
          longText: false,
          expectedCapabilityCount: 3,
          ...capabilityModeOrOptions,
        };

  const longText = Boolean(options.longText);
  const capabilityBlock = buildCapabilityInstruction(options);
  const achievementBlock = buildAchievementInstruction(longText);
  const reflectionBlock = buildReflectionInstruction();

  return `You are an expert GP trainer helping UK GP trainees write portfolio case reviews for the RCGP training programme and SCA preparation.

Your task is to transform raw case notes into a structured portfolio review suitable for submission.
${WRITING_RULES}
${SAFETY_GUARDRAILS}

${capabilityBlock}
- For each capability, include exactly ONE item in the "evidence" array (never more than one).
- Choose the single most appropriate RCGP word descriptor for that capability and case.
- Each evidence item has:
  - "name": exact RCGP capability name (on the capability object)
  - "level": one of needs_further_development, competent, or excellent (must match the column for descriptorIndex)
  - "descriptorIndex": non-negative integer picking ONE descriptor from the numbered list for that capability and level (0-based). Do NOT output descriptor text.
  ${achievementBlock}
- ${SYSTEM_TEAM_GUIDANCE}
- When generating multiple cases in a batch, each case must use different word descriptors from all previous cases in that batch.

Other sections:
- Brief description: write a clinically coherent first person account of the case that is a MINIMUM of 4 lines (roughly 4 to 6 sentences, about 100 to 180 words). Cover the presentation, the relevant background and context, my assessment and reasoning, and what I did, so it reads as a complete short narrative rather than one or two sentences.
- Provide 2 to 4 learning needs that are specific and actionable, written in first person where natural.
${reflectionBlock}

Respond ONLY with valid JSON matching this exact schema:
{
  "title": "Short case title",
  "briefDescription": "Polished clinical narrative",
  "capabilities": [{
    "name": "RCGP capability name",
    "evidence": [{
      "level": "competent",
      "descriptorIndex": 0,
      "achievement": "${longText ? "Three first person sentences: descriptor restatement followed by two case specific demonstration sentences." : "Two first person sentences: descriptor restatement followed by one case specific demonstration sentence."}"
    }]
  }],
  "learningNeeds": ["Specific learning need"],
  "reflection": "Reflective paragraph"
}`;
}

export function buildGenerateReviewUserPrompt(
  caseDescription: string,
  descriptorLevels: DescriptorLevel[],
  usedDescriptors: string[] = [],
  isRetry = false,
  capabilityMode: CapabilityMode = "auto",
  selectedCapabilities?: string[],
  options?: { longText?: boolean },
): string {
  const descriptorSection = buildDescriptorPromptSection(descriptorLevels);
  const usedSection = formatUsedDescriptorsSection(usedDescriptors);
  const retrySection = isRetry ? formatRetrySection(usedDescriptors) : "";

  const teamNote =
    descriptorLevels.includes("competent") ||
    descriptorLevels.includes("excellent")
      ? `\n${SYSTEM_TEAM_GUIDANCE}\n`
      : "";

  let capabilityNote = "";
  if (capabilityMode === "manual" && selectedCapabilities?.length) {
    capabilityNote = `\nUse only these capabilities: ${selectedCapabilities.join("; ")}\n`;
  } else if (capabilityMode === "mixed" && selectedCapabilities?.length) {
    capabilityNote = `\nYou must include these capabilities and fill remaining slots with AI chosen ones to total 3: ${selectedCapabilities.join("; ")}\n`;
  }

  const styleNote = `\nAchievement length: ${options?.longText ? "exactly 3 varied sentences per capability" : "exactly 2 sentences per capability"}.\nReflection style: use the most relevant elements of Gibbs to deepen the reflection, without forcing every stage or labelling the structure.\n`;

  return `Transform the following GP case notes into a structured portfolio review.

${descriptorSection}
${usedSection}${retrySection}${capabilityNote}${teamNote}${styleNote}
Case notes:
---
${caseDescription}
---`;
}

export const IMPROVE_SECTION_SYSTEM_PROMPT = `You are an expert GP trainer helping UK GP trainees refine portfolio case review sections.
${WRITING_RULES}
${SAFETY_GUARDRAILS}
- Preserve clinical accuracy; do not invent new clinical facts.
- Follow the user's improvement instruction.
- Return ONLY the improved section text, with no JSON wrapping, no markdown fences, and no commentary.`;

export function buildImproveSectionUserPrompt(
  section: "briefDescription" | "reflection" | "achievement",
  currentText: string,
  instruction: string,
  caseDescription?: string,
  descriptor?: string,
): string {
  if (section === "achievement") {
    return `Improve the following "how achieved" evidence text from a GP portfolio case review.

This text must show how I personally demonstrated the following fixed RCGP capability descriptor in this case:
${descriptor ?? "Not provided"}

Original case notes (for context):
${caseDescription ?? "Not provided"}

Current text:
${currentText}

Improvement instruction:
${instruction}

Return ONLY the improved first person achievement text as one paragraph. Preserve the current number of sentences (two or three). The first sentence must restate the descriptor in the first person while preserving its meaning. The remaining sentence or sentences must demonstrate how I achieved it in this case. No labels or preamble. Apply the professional presentation guardrails.`;
  }

  const sectionLabel = section === "briefDescription" ? "Brief Description" : "Reflection";

  const reflectionGuidance =
    section === "reflection"
      ? `\nUse the most relevant elements of the Gibbs Reflective Cycle to deepen the reflection, but do not force every stage or label the structure. Prioritise case specific evaluation, analysis, learning, and a credible action point. Remove generic or repetitive statements.\n`
      : "";

  return `Improve the following ${sectionLabel} section of a GP portfolio case review.

Original case notes (for context):
${caseDescription ?? "Not provided"}

Current ${sectionLabel}:
${currentText}

Improvement instruction:
${instruction}
${reflectionGuidance}

Return only the improved ${sectionLabel} text in first person. Apply the professional presentation guardrails.`;
}
