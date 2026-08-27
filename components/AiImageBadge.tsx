"use client";

import { useLanguage } from "@/context/LanguageContext";

const LABELS: Record<"de" | "en" | "fr", { short: string; long: string }> = {
  de: {
    short: "KI-generiert",
    long: "KI-generiertes Bild gemäß EU AI Act",
  },
  en: {
    short: "AI-generated",
    long: "AI-generated image under the EU AI Act",
  },
  fr: {
    short: "Généré par IA",
    long: "Image générée par IA selon l’EU AI Act",
  },
};

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const POS: Record<Position, string> = {
  "top-left": "top-3 left-3",
  "top-right": "top-3 right-3",
  "bottom-left": "bottom-3 left-3",
  "bottom-right": "bottom-3 right-3",
};

export default function AiImageBadge({
  position = "top-right",
  variant = "solid",
  className = "",
}: {
  position?: Position;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const { language } = useLanguage();
  const labels = LABELS[language] ?? LABELS.de;

  const base =
    "pointer-events-none inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-semibold tracking-wide backdrop-blur-md";
  const tone =
    variant === "solid"
      ? "bg-slate-900/70 text-white ring-1 ring-white/10"
      : "bg-white/70 text-slate-900 ring-1 ring-slate-900/10";

  return (
    <span
      role="note"
      aria-label={labels.long}
      className={`absolute z-10 ${POS[position]} ${base} ${tone} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        width="10"
        height="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
        />
      </svg>
      {labels.short}
    </span>
  );
}
