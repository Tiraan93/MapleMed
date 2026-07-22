"use client";

import { useEffect, useState } from "react";
import { CapabilitySelector } from "@/components/gptool/CapabilitySelector";
import { DescriptorLevelSelector } from "@/components/gptool/DescriptorLevelSelector";
import type { DescriptorLevel } from "@/lib/schema";

export const CASES_DRAFT_STORAGE_KEY = "sca-portfolio-cases-draft";
const STORAGE_KEY = CASES_DRAFT_STORAGE_KEY;

export type CaseDraft = {
  id: string;
  caseDescription: string;
  letAiChoose: boolean;
  selectedCapabilities: string[];
};

type CaseInputProps = {
  cases: CaseDraft[];
  onChange: (cases: CaseDraft[]) => void;
  onSubmit: () => void;
  onClear: () => void;
  isLoading: boolean;
  disabled?: boolean;
  descriptorLevels: DescriptorLevel[];
  onDescriptorLevelsChange: (levels: DescriptorLevel[]) => void;
  longText: boolean;
  onLongTextChange: (value: boolean) => void;
};

function createCase(): CaseDraft {
  return {
    id: crypto.randomUUID(),
    caseDescription: "",
    letAiChoose: true,
    selectedCapabilities: [],
  };
}

function normalizeCaseDraft(caseItem: Partial<CaseDraft> & {
  capabilityMode?: string;
}): CaseDraft {
  const selected = Array.isArray(caseItem.selectedCapabilities)
    ? caseItem.selectedCapabilities.filter(Boolean).map(String).slice(0, 3)
    : [];

  let letAiChoose = true;
  if (typeof caseItem.letAiChoose === "boolean") {
    letAiChoose = caseItem.letAiChoose;
  } else if (caseItem.capabilityMode === "manual") {
    letAiChoose = false;
  } else if (caseItem.capabilityMode === "mixed") {
    letAiChoose = true;
  }

  // Keep total slots within 3 when restoring drafts.
  if (letAiChoose && selected.length > 2) {
    return {
      id: caseItem.id ?? crypto.randomUUID(),
      caseDescription: caseItem.caseDescription?.toString() ?? "",
      letAiChoose: true,
      selectedCapabilities: selected.slice(0, 2),
    };
  }

  return {
    id: caseItem.id ?? crypto.randomUUID(),
    caseDescription: caseItem.caseDescription?.toString() ?? "",
    letAiChoose,
    selectedCapabilities: selected,
  };
}

export function CaseInput({
  cases,
  onChange,
  onSubmit,
  onClear,
  isLoading,
  disabled,
  descriptorLevels,
  onDescriptorLevelsChange,
  longText,
  onLongTextChange,
}: CaseInputProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<CaseDraft>[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          onChange(parsed.map(normalizeCaseDraft));
        }
      } catch {
        /* ignore invalid draft */
      }
    }

    setHydrated(true);
  }, [onChange]);

  const persistDraft = (next: CaseDraft[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const updateCase = (id: string, caseDescription: string) => {
    const next = cases.map((c) => (c.id === id ? { ...c, caseDescription } : c));
    onChange(next);
    persistDraft(next);
  };

  const updateCaseCapabilities = (
    id: string,
    update: { letAiChoose: boolean; selected: string[] },
  ) => {
    const next = cases.map((c) =>
      c.id === id
        ? {
            ...c,
            letAiChoose: update.letAiChoose,
            selectedCapabilities: update.selected,
          }
        : c,
    );
    onChange(next);
    persistDraft(next);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  const activeCase = cases[0];
  const validCases =
    activeCase.caseDescription.trim().length >= 20 ? [activeCase] : [];
  const capabilitiesReady = validCases.every((c) => {
    const slots = c.selectedCapabilities.length + (c.letAiChoose ? 1 : 0);
    return slots >= 1 && slots <= 3;
  });
  const canSubmit = validCases.length > 0 && capabilitiesReady;

  if (!hydrated) {
    return (
      <div className="h-64 animate-pulse rounded-xl border border-border bg-card" />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col">
      <div className="mb-2 flex items-center justify-between gap-4">
        <label className="text-sm font-medium text-navy">Enter a case below</label>
        <button
          type="button"
          onClick={onClear}
          disabled={disabled || isLoading}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-muted shadow-sm transition-colors hover:bg-muted/10 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear
        </button>
      </div>

      <div className="rounded-xl border border-border bg-background/80 p-3">
        <textarea
          value={activeCase.caseDescription}
          onChange={(event) => updateCase(activeCase.id, event.target.value)}
          disabled={disabled || isLoading}
          placeholder="Presenting complaint, context, consultation summary..."
          className="min-h-[120px] w-full resize-y rounded-lg border border-border bg-card px-3 py-2 text-sm leading-relaxed text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
        />
        {activeCase.caseDescription.trim().length > 0 &&
          activeCase.caseDescription.trim().length < 20 && (
            <p className="mt-1 text-xs text-warning-text">
              At least 20 characters required.
            </p>
          )}
        <div className="mt-4">
          <CapabilitySelector
            key={activeCase.id}
            letAiChoose={activeCase.letAiChoose}
            selected={activeCase.selectedCapabilities}
            onChange={(update) => updateCaseCapabilities(activeCase.id, update)}
            disabled={disabled || isLoading}
          />
        </div>
      </div>

      <div className="mt-5">
        <DescriptorLevelSelector
          value={descriptorLevels}
          onChange={onDescriptorLevelsChange}
          longText={longText}
          onLongTextChange={onLongTextChange}
          disabled={disabled || isLoading}
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-xs text-muted">
          {validCases.length > 0
            ? ""
            : "Enter at least 20 characters for the case."}
          {!capabilitiesReady && (
            <span className="text-warning-text">
              {" "}
              Select up to 3 options (capabilities and/or Let AI choose).
            </span>
          )}
        </p>
        <button
          type="submit"
          disabled={disabled || isLoading || !canSubmit}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-cta-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Generating...
            </>
          ) : (
            "Generate Review"
          )}
        </button>
      </div>
      <div className="mt-3 text-xs text-muted">
        <p className="font-semibold">Disclaimer</p>
        <p className="mt-2">
          The generated reflection is a draft only. You are responsible for
          editing it to reflect your genuine thoughts and learning.
        </p>
      </div>
    </form>
  );
}

export function initialCases(): CaseDraft[] {
  return [createCase()];
}
