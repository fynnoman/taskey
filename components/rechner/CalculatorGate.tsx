"use client";

import { useEffect, useRef, useState } from "react";
import type { EmailCaptureRow } from "./EmailCapture";

export type GateLabels = {
  computeButton: string;
  computeHint: string;
  loadingText: string;
  modalHeading: string;
  modalSubheading: string;
  emailPlaceholder: string;
  submitButton: string;
  submitting: string;
  errorGeneric: string;
  privacyNote: string;
  successHint: string;
  locale: "de" | "en" | "fr";
};

export type CalculatorGateProps = {
  labels: GateLabels;
  rechnerType:
    | "reinigungskosten"
    | "stundenverrechnungssatz"
    | "personalbedarf"
    | "lohnkosten"
    | "marge";
  headline: string;
  rows: EmailCaptureRow[];
  children: React.ReactNode;
};

type Phase = "idle" | "computing" | "locked" | "submitting" | "unlocked" | "error";

const LOADING_DURATION_MS = 8000;

export default function CalculatorGate({
  labels,
  rechnerType,
  headline,
  rows,
  children,
}: CalculatorGateProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  function startCompute() {
    setPhase("computing");
    setProgress(0);

    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, (elapsed / LOADING_DURATION_MS) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("locked");
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }

  useEffect(() => {
    if (phase === "locked" || phase === "submitting" || phase === "error") {
      const t = setTimeout(() => emailInputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "locked" || phase === "submitting" || phase === "error") {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [phase]);

  async function submitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (phase === "submitting") return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setPhase("error");
      setErrorMessage(labels.errorGeneric);
      return;
    }

    setPhase("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/rechner-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          rechnerType,
          locale: labels.locale,
          headline,
          rows,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? labels.errorGeneric);
      }

      setPhase("unlocked");
    } catch (err) {
      setPhase("error");
      setErrorMessage(err instanceof Error ? err.message : labels.errorGeneric);
    }
  }

  const isModalOpen = phase === "locked" || phase === "submitting" || phase === "error";
  const isResultVisible = phase === "unlocked";

  return (
    <>
      <div className="relative">
        {isResultVisible ? (
          <div className="animate-in fade-in duration-500">{children}</div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 min-h-[420px] flex flex-col items-center justify-center text-center">
            {phase === "idle" ? (
              <>
                <div className="mb-6 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <p className="mb-6 text-sm text-slate-600 max-w-xs">
                  {labels.computeHint}
                </p>
                <button
                  type="button"
                  onClick={startCompute}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {labels.computeButton}
                </button>
              </>
            ) : null}

            {phase === "computing" ? (
              <>
                <p className="mb-6 text-sm font-medium text-slate-700">
                  {labels.loadingText}
                </p>
                <div
                  className="w-full max-w-xs h-2 rounded-full bg-slate-200 overflow-hidden"
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={labels.loadingText}
                >
                  <div
                    className="h-full bg-blue-600 transition-[width] duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </>
            ) : null}

            {phase === "locked" || phase === "submitting" || phase === "error" ? (
              <div
                className="filter blur-md opacity-70 pointer-events-none w-full"
                aria-hidden
              >
                {children}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="rechner-gate-heading"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="h-5 w-5 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  id="rechner-gate-heading"
                  className="text-lg font-semibold text-slate-900"
                >
                  {labels.modalHeading}
                </h3>
              </div>
            </div>

            <p className="mb-5 text-sm text-slate-600">{labels.modalSubheading}</p>

            <form onSubmit={submitEmail}>
              <input
                ref={emailInputRef}
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (phase === "error") {
                    setPhase("locked");
                    setErrorMessage(null);
                  }
                }}
                placeholder={labels.emailPlaceholder}
                disabled={phase === "submitting"}
                className="mb-3 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-60"
                aria-label={labels.emailPlaceholder}
              />

              <button
                type="submit"
                disabled={phase === "submitting"}
                className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60"
              >
                {phase === "submitting" ? labels.submitting : labels.submitButton}
              </button>

              {phase === "error" && errorMessage ? (
                <p className="mt-3 text-sm text-red-700" role="alert">
                  {errorMessage}
                </p>
              ) : null}

              <p className="mt-4 text-xs text-slate-500 text-center">
                {labels.privacyNote}
              </p>
            </form>
          </div>
        </div>
      ) : null}

      {phase === "unlocked" ? (
        <p className="mt-4 text-xs text-emerald-700 text-center">
          {labels.successHint}
        </p>
      ) : null}
    </>
  );
}
