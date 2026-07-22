"use client";

import { useState } from "react";
import type { PortfolioReview } from "@/lib/schema";
import { ReviewSection } from "./ReviewSection";
import { CapabilityEvidenceBlock } from "./CapabilityEvidenceBlock";

type ReviewPanelProps = {
  review: PortfolioReview | null;
  caseDescription: string;
  isDemo?: boolean;
  onUpdateReview: (review: PortfolioReview) => void;
  onClear?: () => void;
};

const DEFAULT_IMPROVE_INSTRUCTION = "Make more concise and portfolio ready";

export function ReviewPanel({
  review,
  caseDescription,
  isDemo = false,
  onUpdateReview,
  onClear,
}: ReviewPanelProps) {
  const [improvingSection, setImprovingSection] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showImproveAll, setShowImproveAll] = useState(false);
  const [improveAllInstruction, setImproveAllInstruction] = useState(
    DEFAULT_IMPROVE_INSTRUCTION,
  );

  if (!review) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
        <div className="mb-4 text-4xl opacity-40">📋</div>
        <h2 className="font-serif text-xl font-semibold text-navy">
          Your review will appear here
        </h2>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Enter case notes, choose descriptor columns, and generate. Each
          capability uses one exact RCGP word descriptor with evidence of how
          you achieved it.
        </p>
      </div>
    );
  }

  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  const improveSection = async (
    section: "briefDescription" | "reflection",
    currentText: string,
    instruction: string,
  ) => {
    setImprovingSection(section);
    setError(null);

    try {
      const response = await fetch("/api/improve-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section,
          currentText,
          instruction,
          caseDescription,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to improve section.");
      }

      onUpdateReview({
        ...review,
        [section]: data.improvedText,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to improve section.");
    } finally {
      setImprovingSection(null);
    }
  };

  const requestImprovedAchievement = async (
    descriptor: string,
    currentText: string,
    instruction: string,
  ) => {
    const response = await fetch("/api/improve-section", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section: "achievement",
        currentText,
        instruction,
        caseDescription,
        descriptor,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error ?? "Failed to improve section.");
    }
    return data.improvedText as string;
  };

  const improveEvidence = async (
    capabilityIndex: number,
    evidenceIndex: number,
    instruction: string,
  ) => {
    setImprovingSection(`cap-${capabilityIndex}-ev-${evidenceIndex}`);
    setError(null);

    try {
      const item = review.capabilities[capabilityIndex].evidence[evidenceIndex];
      const improved = await requestImprovedAchievement(
        item.descriptor,
        item.achievement,
        instruction,
      );

      const capabilities = review.capabilities.map((cap, ci) =>
        ci !== capabilityIndex
          ? cap
          : {
              ...cap,
              evidence: cap.evidence.map((ev, ei) =>
                ei !== evidenceIndex ? ev : { ...ev, achievement: improved },
              ),
            },
      );
      onUpdateReview({ ...review, capabilities });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to improve section.");
    } finally {
      setImprovingSection(null);
    }
  };

  const improveAllCapabilities = async () => {
    if (!improveAllInstruction.trim()) return;
    setImprovingSection("all-capabilities");
    setError(null);

    try {
      const capabilities = await Promise.all(
        review.capabilities.map(async (cap) => {
          const evidence = await Promise.all(
            cap.evidence.map(async (ev) => ({
              ...ev,
              achievement: await requestImprovedAchievement(
                ev.descriptor,
                ev.achievement,
                improveAllInstruction.trim(),
              ),
            })),
          );
          return { ...cap, evidence };
        }),
      );
      onUpdateReview({ ...review, capabilities });
      setShowImproveAll(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to improve capabilities.",
      );
    } finally {
      setImprovingSection(null);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-start justify-between gap-4">
        <h2 className="font-serif text-2xl font-semibold text-navy">
          {review.title}
        </h2>
        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted shadow-sm transition-colors hover:bg-muted/10 hover:text-foreground"
          >
            Clear
          </button>
        )}
      </div>

      {isDemo && (
        <div className="mb-4 rounded-lg border border-warning-border bg-warning-bg px-4 py-3 text-sm text-warning-text">
          Demo mode: set{" "}
          <code className="rounded bg-card-warm px-1">OPENROUTER_API_KEY</code>{" "}
          in <code className="rounded bg-card-warm px-1">.env.local</code> to
          generate real reviews with DeepSeek V4 Flash.
        </div>
      )}

      {error && (
        <div className="mb-4 rounded-lg border border-error-border bg-error-bg px-4 py-3 text-sm text-error-text">
          {error}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
        <ReviewSection
          title="Brief Description"
          icon="📝"
          content={review.briefDescription}
          onCopy={() => copyText(review.briefDescription)}
          canImprove
          onImprove={(instruction) =>
            improveSection("briefDescription", review.briefDescription, instruction)
          }
          isImproving={improvingSection === "briefDescription"}
        />

        <section className="rounded-xl border border-border-light bg-background-alt/50 p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-navy">
              <span aria-hidden>🎯</span>
              Capabilities
            </h3>
            <button
              type="button"
              onClick={() => {
                setShowImproveAll((prev) => !prev);
                setImproveAllInstruction(DEFAULT_IMPROVE_INSTRUCTION);
              }}
              disabled={improvingSection === "all-capabilities"}
              className="text-xs font-medium text-accent transition-colors hover:text-accent-dark disabled:opacity-50"
            >
              {improvingSection === "all-capabilities"
                ? "Improving..."
                : "Improve all"}
            </button>
          </div>

          {showImproveAll && (
            <div className="mb-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                value={improveAllInstruction}
                onChange={(event) => setImproveAllInstruction(event.target.value)}
                placeholder="How should all capabilities be improved?"
                className="flex-1 rounded-lg border border-border bg-card px-3 py-2 text-xs focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <button
                type="button"
                onClick={improveAllCapabilities}
                disabled={
                  improvingSection === "all-capabilities" ||
                  !improveAllInstruction.trim()
                }
                className="rounded-lg bg-accent px-4 py-2 text-xs font-medium text-white hover:bg-accent-dark disabled:opacity-50"
              >
                {improvingSection === "all-capabilities" ? "Improving..." : "Apply"}
              </button>
            </div>
          )}

          <div className="flex flex-col gap-5">
            {review.capabilities.map((cap, capIndex) => {
              const evidencePrefix = `cap-${capIndex}-ev-`;
              const improvingTarget =
                improvingSection?.startsWith(evidencePrefix)
                  ? Number(improvingSection.slice(evidencePrefix.length))
                  : null;
              return (
                <CapabilityEvidenceBlock
                  key={cap.name}
                  capability={cap}
                  onCopy={copyText}
                  onImproveEvidence={(evidenceIndex, instruction) =>
                    improveEvidence(capIndex, evidenceIndex, instruction)
                  }
                  improvingTarget={improvingTarget}
                />
              );
            })}
          </div>
        </section>

        <ReviewSection
          title="Reflection"
          icon="💭"
          content={review.reflection}
          onCopy={() => copyText(review.reflection)}
          canImprove
          onImprove={(instruction) =>
            improveSection("reflection", review.reflection, instruction)
          }
          isImproving={improvingSection === "reflection"}
        />

        <ReviewSection
          title="Learning Needs"
          icon="📚"
          content={review.learningNeeds
            .map((need, index) => `${index + 1}. ${need}`)
            .join("\n")}
          onCopy={() => copyText(review.learningNeeds.join("\n"))}
        />

        {onClear && (
          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={onClear}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-muted shadow-sm transition-colors hover:bg-muted/10 hover:text-foreground"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
