"use client";

import { useBackground } from "./background-context";

const OPTIONS = [
  { value: "grid", label: "grid" },
  { value: "webgl", label: "field" },
] as const;

export function BackgroundToggle() {
  const { variant, setVariant } = useBackground();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 border border-line bg-bg/80 px-1.5 py-1 font-mono text-[11px] backdrop-blur-sm">
      <span className="px-1 text-faint" aria-hidden="true">
        bg
      </span>
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setVariant(opt.value)}
          aria-pressed={variant === opt.value}
          aria-label={`Background: ${opt.label}`}
          className={`px-2 py-0.5 transition-colors ${
            variant === opt.value
              ? "bg-accent text-bg"
              : "text-muted hover:text-ink"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
