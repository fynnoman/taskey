"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import RevealBlur from "./RevealBlur";

/**
 * Hero — Revolut-Style Bühne ohne Video.
 * Dunkler Gradient, riesige Headline, ein ruhiges, elegantes visuelles Zentrum:
 * ein schwebendes App-Mockup mit animierten Live-Dots statt lauter Karten.
 */
export default function Hero() {
  const { t } = useLanguage();

  return (
    <section data-hero-section className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-blue-600/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-cyan-300 uppercase">
            Echtzeit · Feld ↔ Büro
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,9vw,7.5rem)] font-black leading-[0.9] tracking-tight mb-8 text-white">
          {t("homeHero.title1")}
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
            {t("homeHero.title2")}{" "}
            <span className="block sm:inline">{t("homeHero.title3")}</span>
          </span>
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-2xl text-white/60 font-medium mb-2 max-w-3xl mx-auto">
          {t("homeHero.features")}
        </p>
        <p className="text-lg md:text-2xl font-black text-white mb-12 max-w-3xl mx-auto">
          {t("homeHero.tagline")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white text-gray-900 text-base font-bold rounded-full hover:bg-white/90 transition-all shadow-2xl shadow-cyan-500/20"
          >
            {t("homeHero.cta.trial")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-white/20 text-white text-base font-bold rounded-full hover:bg-white/10 transition-colors"
          >
            Alle Funktionen
          </Link>
        </div>

        <p className="text-sm text-white/40 mb-16 md:mb-20">{t("homeHero.trust")}</p>

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
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a2942] to-[#0d1a2e] shadow-2xl shadow-black/60 backdrop-blur-sm">
            {/* Window Bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-black/20">
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <div className="ml-4 flex-1 h-6 rounded-md bg-white/5 border border-white/5 flex items-center px-3">
                <span className="text-[10px] text-white/40 font-mono">app.taskeyapp.com/dashboard</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-10 text-left">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.25em] font-bold">Heute</p>
                  <p className="text-white font-bold text-lg md:text-xl mt-1">Guten Morgen, Fynn 👋</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-bold">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <StatTile label="Aktive Aufträge" value="24" trend="+3" />
                <StatTile label="Offene Rechnungen" value="8.420 €" trend="+12%" />
                <StatTile label="Team im Feld" value="14" trend="live" pulse />
              </div>

              <div className="mt-5 h-28 md:h-32 rounded-2xl bg-white/[0.03] border border-white/5 flex items-end gap-1.5 p-4">
                {[40, 65, 35, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/80 to-cyan-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          </RevealBlur>

          {/* Glow unter Mockup */}
          <div className="absolute -inset-8 rounded-[3rem] bg-cyan-500/10 blur-3xl -z-10" />
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
    emerald: { ring: "border-emerald-400/30", val: "text-emerald-300", dot: "bg-emerald-400" },
    cyan: { ring: "border-cyan-400/30", val: "text-cyan-300", dot: "bg-cyan-400" },
    neutral: { ring: "border-white/15", val: "text-white", dot: "bg-white/60" },
  }[tone];
  return (
    <div className={`px-4 py-3 rounded-2xl bg-[#0d1a2e]/90 border ${colors.ring} backdrop-blur-md shadow-2xl shadow-black/60 min-w-[180px] text-left`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} ${pulse ? "animate-pulse" : ""}`} />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">{label}</span>
      </div>
      <div className={`text-lg font-black ${colors.val} leading-none mb-1`}>{value}</div>
      <div className="text-[11px] text-white/50">{sub}</div>
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
    <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-3 md:p-4">
      <p className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-1.5 md:mb-2">
        {label}
      </p>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-lg md:text-2xl font-black text-white truncate">{value}</span>
        <span className={`text-[10px] md:text-xs font-bold text-cyan-300 flex items-center gap-1 flex-shrink-0`}>
          {pulse && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
          {trend}
        </span>
      </div>
    </div>
  );
}
