import { z } from "zod";

export const descriptorLevelSchema = z.enum([
  "needs_further_development",
  "competent",
  "excellent",
]);

export type DescriptorLevel = z.infer<typeof descriptorLevelSchema>;

/** @deprecated Prefer letAiChoose + selectedCapabilities */
export const capabilityModeSchema = z.enum(["auto", "manual", "mixed"]);
export type CapabilityMode = z.infer<typeof capabilityModeSchema>;

export const capabilityDescriptorEvidenceSchema = z.object({
  descriptor: z.string().min(10, "Descriptor text is required."),
  level: descriptorLevelSchema,
  achievement: z
    .string()
    .min(20, "Write how this was achieved in the case."),
});

export const capabilitySchema = z.object({
  name: z.string().min(1),
  evidence: z.array(capabilityDescriptorEvidenceSchema).length(1),
});

export const portfolioReviewSchema = z.object({
  title: z.string().min(1),
  briefDescription: z.string().min(1),
  capabilities: z
    .array(capabilitySchema)
    .min(1, "Provide at least 1 RCGP capability.")
    .max(3, "Provide at most 3 RCGP capabilities."),
  learningNeeds: z.array(z.string().min(1)).min(1),
  reflection: z.string().min(1),
});

export type CapabilityDescriptorEvidence = z.infer<
  typeof capabilityDescriptorEvidenceSchema
>;
export type PortfolioReview = z.infer<typeof portfolioReviewSchema>;

/** Evidence item as returned by the LLM (descriptor chosen by index). */
export const llmCapabilityDescriptorEvidenceSchema = z.object({
  level: descriptorLevelSchema,
  descriptorIndex: z.number().int().min(0),
  achievement: z.string().min(20, "Write how this was achieved in the case."),
});

export const llmCapabilitySchema = z.object({
  name: z.string().min(1),
  evidence: z.array(llmCapabilityDescriptorEvidenceSchema).min(1).max(1),
});

export const llmPortfolioReviewSchema = z.object({
  title: z.string().min(1),
  briefDescription: z.string().min(1),
  capabilities: z
    .array(llmCapabilitySchema)
    .min(1, "Provide at least 1 RCGP capability.")
    .max(3, "Provide at most 3 RCGP capabilities."),
  learningNeeds: z.array(z.string().min(1)).min(1),
  reflection: z.string().min(1),
});

export type LlmPortfolioReview = z.infer<typeof llmPortfolioReviewSchema>;

export function buildDemoReview(
  caseIndex: number,
  totalCases: number,
  longText = false,
): PortfolioReview {
  const review: PortfolioReview = {
    ...DEMO_REVIEW,
    title:
      totalCases <= 1
        ? DEMO_REVIEW.title
        : `Case ${caseIndex + 1} — ${DEMO_REVIEW.title}`,
    capabilities: DEMO_REVIEW.capabilities.map((capability) => ({
      ...capability,
      evidence: capability.evidence.map((item) => ({
        ...item,
        achievement: longText
          ? `${item.achievement} This approach helped me provide clear, coordinated care while maintaining patient safety.`
          : item.achievement,
      })),
    })),
  };

  return review;
}

export function deriveCapabilityMode(
  letAiChoose: boolean,
  selectedCapabilities: string[] | undefined,
): CapabilityMode {
  const selected = selectedCapabilities ?? [];
  if (letAiChoose && selected.length === 0) return "auto";
  if (letAiChoose && selected.length > 0) return "mixed";
  return "manual";
}

export function expectedCapabilityCount(
  letAiChoose: boolean,
  selectedCapabilities: string[] | undefined,
): number {
  const selected = selectedCapabilities ?? [];
  if (letAiChoose) return 3;
  return Math.max(1, Math.min(3, selected.length));
}

export const caseInputSchema = z.object({
  id: z.string().optional(),
  caseDescription: z
    .string()
    .min(20, "Each case needs at least 20 characters of notes.")
    .max(7000, "Case notes must be 7000 characters or fewer."),
  /** Kept for older clients; derived from letAiChoose + selected when omitted. */
  capabilityMode: capabilityModeSchema.optional(),
  selectedCapabilities: z.array(z.string().min(1)).max(3).optional(),
  letAiChoose: z.boolean().optional(),
  longText: z.boolean().optional().default(false),
});

export const generateReviewRequestSchema = z
  .object({
    cases: z.array(caseInputSchema).min(1, "Add at least one case.").max(8),
    descriptorLevels: z
      .array(descriptorLevelSchema)
      .min(1, "Select at least one descriptor level."),
  })
  .superRefine((data, ctx) => {
    data.cases.forEach((caseItem, index) => {
      const selected = caseItem.selectedCapabilities ?? [];
      const letAi =
        caseItem.letAiChoose !== undefined
          ? caseItem.letAiChoose
          : caseItem.capabilityMode === "auto" ||
            caseItem.capabilityMode === "mixed" ||
            ((!caseItem.capabilityMode || caseItem.capabilityMode !== "manual") &&
              selected.length === 0);

      const slots = selected.length + (letAi ? 1 : 0);

      if (selected.length > 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Select at most 3 capabilities.",
          path: ["cases", index, "selectedCapabilities"],
        });
      }

      if (!letAi && selected.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Select at least one capability, or enable Let AI choose.",
          path: ["cases", index, "selectedCapabilities"],
        });
      }

      if (slots > 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "You can select up to 3 options in total, including Let AI choose.",
          path: ["cases", index, "selectedCapabilities"],
        });
      }
    });
  });

export type GenerateReviewRequest = z.infer<typeof generateReviewRequestSchema>;

export const improveSectionRequestSchema = z.object({
  section: z.enum(["briefDescription", "reflection", "achievement"]),
  currentText: z.string().min(1).max(7000),
  instruction: z.string().min(1).max(500),
  caseDescription: z.string().max(7000).optional(),
  descriptor: z.string().max(2000).optional(),
});

export const improveSectionResponseSchema = z.object({
  improvedText: z.string().min(1),
});

export type ImproveSectionRequest = z.infer<typeof improveSectionRequestSchema>;

export const DEMO_REVIEW: PortfolioReview = {
  title: "Acute Heart Failure Presentation",
  briefDescription:
    "I saw a middle aged gentleman with classic features of new onset heart failure. He had progressive exertional dyspnoea with peripheral oedema over three weeks on a background of hypertension and type 2 diabetes. Examination revealed bibasal crackles and pitting oedema to the mid shin. NT proBNP was markedly elevated. I diagnosed heart failure with reduced ejection fraction and initiated ACE inhibitor therapy with appropriate safety netting and follow up.",
  capabilities: [
    {
      name: "Decision-making and Diagnosis",
      evidence: [
        {
          level: "competent",
          descriptor:
            "Makes diagnoses in a structured way using a problem-solving method.",
          achievement:
            "I make diagnoses in a structured way by using a clear problem solving method. In this case, I combined a stepwise history, focused examination, and targeted investigations to reach the diagnosis of heart failure with reduced ejection fraction.",
        },
      ],
    },
    {
      name: "Clinical management",
      evidence: [
        {
          level: "competent",
          descriptor:
            "Co-ordinates care both within the practice team and with other services.",
          achievement:
            "I coordinate care within the practice team and with other services. I arranged same day bloods and an ECG with the practice nurse, liaised with cardiology about rapid assessment, and documented a clear handover.",
        },
      ],
    },
    {
      name: "Team working",
      evidence: [
        {
          level: "competent",
          descriptor: "Uses the skills of the wider team to enhance patient care.",
          achievement:
            "I use the skills of the wider team to enhance patient care. I involved the practice nurse in the investigations, discussed my plan with my supervising GP, and requested cardiology input to support safe onward care.",
        },
      ],
    },
  ],
  learningNeeds: [
    "Deepen knowledge of heart failure pharmacotherapy titration schedules and monitoring requirements.",
    "Practice explaining prognostic uncertainty and lifestyle modification in heart failure consultations.",
    "Review NICE NG106 guidance on diagnosing and managing chronic heart failure in adults.",
  ],
  reflection:
    "This case reinforced the importance of a systematic cardiovascular assessment when a patient presents with progressive breathlessness. I recognised that combining clinical examination findings with targeted investigations allowed a timely diagnosis. I would benefit from further experience discussing long term prognosis and self management strategies with patients newly diagnosed with heart failure.",
};
