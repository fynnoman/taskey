"use client";

export type ViewMode = "grundriss" | "karten";

export function ViewToggle({
  mode,
  onChange,
}: {
  mode: ViewMode;
  onChange: (m: ViewMode) => void;
}) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full bg-white border border-[color:var(--fp-border)] p-1"
      style={{ boxShadow: "0 2px 6px -1px rgba(15,23,42,0.06)" }}
      role="tablist"
      aria-label="Ansicht wechseln"
    >
      <Segment
        active={mode === "grundriss"}
        onClick={() => onChange("grundriss")}
        label="Grundriss"
        icon={
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <rect x="1.5" y="1.5" width="11" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <line x1="1.5" y1="7" x2="12.5" y2="7" stroke="currentColor" strokeWidth="1.2" />
            <line x1="7" y1="1.5" x2="7" y2="12.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        }
      />
      <Segment
        active={mode === "karten"}
        onClick={() => onChange("karten")}
        label="Karten"
        icon={
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M1.5 3.5L5 2v9l-3.5 1.5V3.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M5 2l4 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M5 11l4 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M9 3.5L12.5 2v9L9 12.5V3.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
        }
      />
    </div>
  );
}

function Segment({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="tab"
      aria-selected={active}
      className={`inline-flex items-center gap-2 rounded-full px-3.5 h-8 text-[13px] font-medium transition-colors ${
        active
          ? "bg-[#F1F3F5] text-[#202124]"
          : "text-[#8A8F98] hover:text-[#202124]"
      }`}
    >
      <span className={active ? "text-[#202124]" : "text-[#8A8F98]"}>{icon}</span>
      {label}
    </button>
  );
}
