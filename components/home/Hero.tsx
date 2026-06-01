"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import RevealBlur from "./RevealBlur";

/**
 * Hero — Revolut-Style Bühne ohne Video.
 * Heller Gradient, riesige Headline, ein ruhiges, elegantes visuelles Zentrum:
 * ein schwebendes App-Mockup mit animierten Live-Dots statt lauter Karten.
 */
export default function Hero() {
  const { t } = useLanguage();

  return (
    <section data-hero-section className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-300/30 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-blue-400/25 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.06),transparent_60%)] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e3a8a 1px, transparent 1px), linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-200 backdrop-blur-md mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
            Echtzeit · Feld ↔ Büro
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,9vw,7.5rem)] font-black leading-[0.9] tracking-tight mb-8 text-slate-900">
          {t("homeHero.title1")}
          <br />
          <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
            {t("homeHero.title2")}{" "}
            <span className="block sm:inline">{t("homeHero.title3")}</span>
          </span>
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-2xl text-slate-600 font-medium mb-2 max-w-3xl mx-auto">
          {t("homeHero.features")}
        </p>
        <p className="text-lg md:text-2xl font-black text-slate-900 mb-12 max-w-3xl mx-auto">
          {t("homeHero.tagline")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-bold rounded-full hover:from-blue-500 hover:to-blue-600 transition-all shadow-2xl shadow-blue-500/30"
          >
            {t("homeHero.cta.trial")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-slate-300 text-slate-700 text-base font-bold rounded-full hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            Alle Funktionen
          </Link>
        </div>

        <p className="text-sm text-slate-500 mb-16 md:mb-20">{t("homeHero.trust")}</p>

        {/* Visual Stage — schwebendes Mockup */}
        <div className="relative max-w-4xl mx-auto">
          {/* Floating badges */}
          <div className="hidden md:block absolute -left-10 top-10 z-20 animate-[float_6s_ease-in-out_infinite]">
            <FloatingBadge
              tone="emerald"
              label="Auftrag #2847"
              value="Abgeschlossen"
              sub="Vor 2 Min · Müller GmbH"
            />
          </div>
          <div className="hidden md:block absolute -right-8 top-24 z-20 animate-[float_7s_ease-in-out_infinite_reverse]">
            <FloatingBadge tone="cyan" label="Live-Marge" value="+12,4 %" sub="Büro Müller" />
          </div>
          <div className="hidden md:block absolute right-8 -bottom-4 z-20 animate-[float_8s_ease-in-out_infinite]">
            <FloatingBadge tone="neutral" label="Team online" value="14 / 18" sub="Heute im Einsatz" pulse />
          </div>

          {/* Browser-Frame mit Dashboard-Andeutung */}
          <RevealBlur offset={140} blur={26} duration={1400}>
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-2xl shadow-blue-900/15 backdrop-blur-sm">
            {/* Window Bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-200 bg-slate-100">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <div className="ml-4 flex-1 h-6 rounded-md bg-white border border-slate-200 flex items-center px-3">
                <span className="text-[10px] text-slate-500 font-mono">app.taskeyapp.com/dashboard</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-10 text-left">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold">Heute</p>
                  <p className="text-slate-900 font-bold text-lg md:text-xl mt-1">Hi Herr Müller 👋</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <StatTile label="Aktive Aufträge" value="24" trend="+3" />
                <StatTile label="Offene Rechnungen" value="8.420 €" trend="+12%" />
                <StatTile label="Team im Feld" value="14" trend="live" pulse />
              </div>

              <div className="mt-5 h-28 md:h-32 rounded-2xl bg-blue-50 border border-blue-100 flex items-end gap-1.5 p-4">
                {[40, 65, 35, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          </RevealBlur>

          {/* Glow unter Mockup */}
          <div className="absolute -inset-8 rounded-[3rem] bg-blue-400/20 blur-3xl -z-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

function FloatingBadge({
  tone,
  label,
  value,
  sub,
  pulse,
}: {
  tone: "emerald" | "cyan" | "neutral";
  label: string;
  value: string;
  sub: string;
  pulse?: boolean;
}) {
  const colors = {
    emerald: { ring: "border-emerald-300", val: "text-emerald-700", dot: "bg-emerald-500" },
    cyan: { ring: "border-cyan-300", val: "text-blue-700", dot: "bg-cyan-500" },
    neutral: { ring: "border-slate-300", val: "text-slate-900", dot: "bg-slate-500" },
  }[tone];
  return (
    <div className={`px-4 py-3 rounded-2xl bg-white/95 border ${colors.ring} backdrop-blur-md shadow-2xl shadow-blue-900/15 min-w-[180px] text-left`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} ${pulse ? "animate-pulse" : ""}`} />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">{label}</span>
      </div>
      <div className={`text-lg font-black ${colors.val} leading-none mb-1`}>{value}</div>
      <div className="text-[11px] text-slate-500">{sub}</div>
    </div>
  );
}

function StatTile({
  label,
  value,
  trend,
  pulse,
}: {
  label: string;
  value: string;
  trend: string;
  pulse?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-blue-50 border border-blue-100 p-3 md:p-4">
      <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1.5 md:mb-2">
        {label}
      </p>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-lg md:text-2xl font-black text-slate-900 truncate">{value}</span>
        <span className={`text-[10px] md:text-xs font-bold text-blue-700 flex items-center gap-1 flex-shrink-0`}>
          {pulse && <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />}
          {trend}
        </span>
      </div>
    </div>
  );
}
