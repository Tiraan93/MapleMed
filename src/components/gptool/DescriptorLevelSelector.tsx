"use client";

import type { DescriptorLevel } from "@/lib/schema";
import { DESCRIPTOR_LEVEL_LABELS } from "@/lib/rcgp-descriptors";

const LEVELS: DescriptorLevel[] = [
  "needs_further_development",
  "competent",
  "excellent",
];

type DescriptorLevelSelectorProps = {
  value: DescriptorLevel[];
  onChange: (levels: DescriptorLevel[]) => void;
  longText: boolean;
  onLongTextChange: (value: boolean) => void;
  disabled?: boolean;
};

export function DescriptorLevelSelector({
  value,
  onChange,
  longText,
  onLongTextChange,
  disabled,
}: DescriptorLevelSelectorProps) {
  const toggle = (level: DescriptorLevel) => {
    if (value.includes(level)) {
      if (value.length === 1) return;
      onChange(value.filter((l) => l !== level));
    } else {
      onChange([...value, level]);
    }
  };

  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
        {LEVELS.map((level) => (
          <label
            key={level}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm has-[:checked]:border-accent has-[:checked]:bg-accent/5"
          >
            <input
              type="checkbox"
              checked={value.includes(level)}
              onChange={() => toggle(level)}
              className="h-4 w-4 rounded border-border text-navy focus:ring-accent/20"
            />
            <span>{DESCRIPTOR_LEVEL_LABELS[level].short}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-foreground">
          Longer text per capability
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={longText}
          aria-label="Use long capability text"
          onClick={() => onLongTextChange(!longText)}
          className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            longText ? "bg-accent" : "bg-muted-light"
          }`}
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none mt-0.5 inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
              longText ? "translate-x-5" : "translate-x-0.5"
            }`}
          />
        </button>
      </div>
    </fieldset>
  );
}
