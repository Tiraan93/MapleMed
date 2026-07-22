"use client";

import { useEffect, useRef, useState } from "react";
import { RCGP_CAPABILITY_NAMES } from "@/lib/rcgp-descriptors";

export const AI_CHOICE_TOKEN = "__ai__";

type CapabilitySelectorProps = {
  letAiChoose: boolean;
  selected: string[];
  onChange: (update: { letAiChoose: boolean; selected: string[] }) => void;
  disabled?: boolean;
};

export function CapabilitySelector({
  letAiChoose,
  selected,
  onChange,
  disabled,
}: CapabilitySelectorProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const slotsUsed = selected.length + (letAiChoose ? 1 : 0);
  const atLimit = slotsUsed >= 3;

  const toggleAi = () => {
    if (letAiChoose) {
      onChange({ letAiChoose: false, selected });
      return;
    }
    if (atLimit) return;
    onChange({ letAiChoose: true, selected });
  };

  const toggleCapability = (name: string) => {
    if (selected.includes(name)) {
      onChange({
        letAiChoose,
        selected: selected.filter((n) => n !== name),
      });
      return;
    }
    if (atLimit) return;
    const next = [...selected, name];
    onChange({ letAiChoose, selected: next });
    if (next.length + (letAiChoose ? 1 : 0) >= 3) setOpen(false);
  };

  const placeholder =
    !letAiChoose && selected.length === 0
      ? "Select capabilities"
      : null;

  return (
    <div ref={ref} className="relative" aria-disabled={disabled}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        disabled={disabled}
        className="flex w-full items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-left text-sm disabled:opacity-60"
        aria-expanded={open}
      >
        <div className="flex min-w-0 flex-1 flex-wrap gap-2">
          {placeholder ? (
            <span className="text-muted">Select capabilities</span>
          ) : (
            <>
              {letAiChoose && (
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                  Let AI choose
                </span>
              )}
              {selected.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                >
                  {capability}
                </span>
              ))}
            </>
          )}
        </div>
        <span className="ml-auto shrink-0 text-xs text-muted">{slotsUsed}/3</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-72 w-full overflow-auto rounded-md border border-border bg-card p-2 shadow-lg">
          <div className="grid gap-1">
            <button
              type="button"
              onClick={toggleAi}
              disabled={!letAiChoose && atLimit}
              className={`w-full rounded px-2 py-1.5 text-left text-sm ${
                letAiChoose
                  ? "bg-accent/10 font-medium text-navy"
                  : "hover:bg-background"
              } ${!letAiChoose && atLimit ? "opacity-50" : ""}`}
            >
              Let AI choose
            </button>
            {RCGP_CAPABILITY_NAMES.map((name) => {
              const isSelected = selected.includes(name);
              const blocked = !isSelected && atLimit;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => toggleCapability(name)}
                  disabled={blocked}
                  className={`w-full truncate rounded px-2 py-1 text-left text-sm ${
                    isSelected
                      ? "bg-accent/10 font-medium text-navy"
                      : "hover:bg-background"
                  } ${blocked ? "opacity-50" : ""}`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
