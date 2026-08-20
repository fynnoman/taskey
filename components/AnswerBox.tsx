import React from "react";

// Answer-first callout that renders BEFORE the hero on long-tail pages.
// Direct 40-60 word answer to the page's title question, positioned so
// answer-engine crawlers see it as the first content after the header.

export default function AnswerBox({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <section
      aria-label="Direkte Antwort"
      className="w-full bg-[var(--section-alt)] border-b border-[var(--border-soft)]"
    >
      <div className="mx-auto max-w-4xl px-5 pt-24 pb-8 sm:pt-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          {question}
        </p>
        <p className="mt-2 text-lg leading-relaxed text-[var(--foreground)]">
          {answer}
        </p>
      </div>
    </section>
  );
}
