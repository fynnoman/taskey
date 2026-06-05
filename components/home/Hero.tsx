"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import RevealBlur from "./RevealBlur";

/**
 * Hero — "Operations Manual" Bühne.
 * Paper-cream background, graph-paper grid, signal-orange accents,
 * blueprint-style dashboard mockup with mono timestamps and dimension callouts.
 * Preserves all conversion elements: live badge, headline, subline, dual CTAs,
 * trust line, and the floating-badge composition over a browser-chrome mockup.
 */
export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      data-hero-section
      className="relative bg-[var(--background)] text-[var(--ink)] pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden isolate"
    >
      {/* Atmospheric layers */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Graph paper — engineer's notebook feel */}
        <div
          className="absolute inset-0 graph-paper-fine"
          style={{
            maskImage:
              'radial-gradient(ellipse 90% 70% at 50% 40%, black 35%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 70% at 50% 40%, black 35%, transparent 80%)',
          }}
        />
        {/* Signal-orange bloom — top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[35vw]"
          style={{
            background:
              'radial-gradient(50% 60% at 50% 0%, rgba(234,88,12,0.10), transparent 75%)',
          }}
        />
        {/* Steel-blue bloom — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-[40vw] h-[40vw]"
          style={{
            background:
              'radial-gradient(50% 50% at 70% 70%, rgba(30,64,175,0.08), transparent 75%)',
          }}
        />
        <div className="paper-grain" />
        {/* Fade bottom edge to deep paper */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, var(--background) 100%)',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live Badge — refined with mono label + signal orange dot */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--background)]/85 border border-[var(--border-strong)] backdrop-blur-sm mb-9 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--signal)] opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--signal)]" />
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[var(--ink-soft)] uppercase">
            Echtzeit · Feld ↔ Büro
          </span>
        </div>

        {/* Headline — pure sans, tighter tracking */}
        <h1 className="text-[clamp(2.6rem,8.5vw,7rem)] font-semibold leading-[0.95] tracking-[-0.035em] mb-8 text-[var(--ink)]">
          {t("homeHero.title1")}
          <br />
          <span className="text-[var(--signal-strong)]">
            {t("homeHero.title2")}{" "}
            <span className="block sm:inline">{t("homeHero.title3")}</span>
          </span>
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-2xl text-[var(--foreground-muted)] font-medium mb-2 max-w-3xl mx-auto">
          {t("homeHero.features")}
        </p>
        <p className="text-lg md:text-2xl font-semibold text-[var(--ink)] tracking-[-0.015em] mb-12 max-w-3xl mx-auto">
          {t("homeHero.tagline")}
        </p>

        {/* CTAs — ink primary + ghost outline secondary */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--ink)] text-[var(--background)] text-[15px] font-semibold rounded-full hover:bg-[var(--ink-soft)] transition-all duration-300 shadow-[0_10px_30px_-12px_rgba(12,14,16,0.55)] hover:shadow-[0_20px_45px_-12px_rgba(12,14,16,0.65)] hover:-translate-y-[1px]"
          >
            <span>{t("homeHero.cta.trial")}</span>
            <span className="text-[var(--signal-soft)] transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[var(--border-strong)] bg-[var(--background)]/60 hover:bg-[var(--background)] text-[var(--ink)] text-[15px] font-semibold rounded-full backdrop-blur-sm transition-colors"
          >
            <span>Alle Funktionen</span>
            <span className="text-[var(--foreground-soft)]">↗</span>
          </Link>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--foreground-soft)] mb-16 md:mb-20">
          {t("homeHero.trust")}
        </p>

        {/* Visual Stage — blueprint-framed dashboard mockup */}
        <div className="relative max-w-4xl mx-auto">
          {/* Dimension callout — top */}
          <div className="hidden lg:flex absolute -top-7 left-1/2 -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--foreground-soft)] z-20">
            <span className="h-px w-12 bg-[var(--border-strong)]" />
            <span>app.taskeyapp.com</span>
            <span className="h-px w-12 bg-[var(--border-strong)]" />
          </div>

          {/* Floating badges */}
          <div className="hidden md:block absolute -left-10 top-10 z-20 animate-[float_6s_ease-in-out_infinite]">
            <FloatingBadge
              tone="emerald"
              label="AUFTRAG #2847"
              value="Abgeschlossen"
              sub="Vor 2 Min · Müller GmbH"
            />
          </div>
          <div className="hidden md:block absolute -right-8 top-24 z-20 animate-[float_7s_ease-in-out_infinite_reverse]">
            <FloatingBadge tone="signal" label="LIVE-MARGE" value="+12,4 %" sub="Büro Müller" />
          </div>
          <div className="hidden md:block absolute right-8 -bottom-4 z-20 animate-[float_8s_ease-in-out_infinite]">
            <FloatingBadge tone="ink" label="TEAM ONLINE" value="14 / 18" sub="Heute im Einsatz" pulse />
          </div>

          {/* Browser-Frame mit Dashboard-Andeutung */}
          <RevealBlur offset={140} blur={26} duration={1400}>
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--background)] shadow-[0_40px_100px_-30px_rgba(12,14,16,0.35),0_8px_24px_-8px_rgba(12,14,16,0.15)]">
              {/* Window Bar */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--border-soft)] bg-[var(--background-deep)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fc625d]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fdbc40]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#35cd4b]" />
                <div className="ml-3 flex-1 h-5 rounded-md bg-[var(--background)] border border-[var(--border-soft)] flex items-center px-2.5">
                  <span className="font-mono text-[10px] text-[var(--foreground-soft)]">app.taskeyapp.com/dashboard</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-10 text-left">
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <p className="font-mono text-[10px] text-[var(--foreground-soft)] uppercase tracking-[0.25em] font-semibold">
                      Heute · {new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" })}
                    </p>
                    <p className="text-[var(--ink)] font-semibold text-lg md:text-xl mt-1 tracking-[-0.015em]">
                      Hi Herr Müller 👋
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-[var(--signal-soft)] border border-[var(--signal)]/30 text-[var(--signal-strong)] px-3 py-1.5 rounded-full font-mono text-[10px] font-semibold tracking-[0.18em]">
                    <span className="w-1.5 h-1.5 bg-[var(--signal)] rounded-full animate-pulse" />
                    LIVE
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  <StatTile label="AKTIVE AUFTRÄGE" value="24" trend="+3" />
                  <StatTile label="OFFENE RECHNUNGEN" value="8.420 €" trend="+12%" />
                  <StatTile label="TEAM IM FELD" value="14" trend="live" pulse />
                </div>

                <div className="mt-5 h-28 md:h-32 rounded-2xl bg-[var(--background-deep)] border border-[var(--border-soft)] flex items-end gap-1.5 p-4 relative overflow-hidden">
                  {/* Subtle baseline */}
                  <span className="absolute inset-x-4 bottom-4 h-px bg-[var(--border-strong)]/60" />
                  {[40, 65, 35, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-[var(--ink)] to-[var(--signal)]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                  <div className="absolute top-3 right-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--foreground-soft)]">
                    12W · TREND ↗
                  </div>
                </div>
              </div>
            </div>
          </RevealBlur>

          {/* Glow under mockup */}
          <div className="absolute -inset-8 rounded-[3rem] bg-[var(--signal)]/10 blur-3xl -z-10" />

          {/* Dimension callout — bottom */}
          <div className="hidden lg:flex absolute -bottom-7 left-1/2 -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--foreground-soft)] z-20">
            <span className="h-px w-12 bg-[var(--border-strong)]" />
            <span>1280 × 800 · LIVE</span>
            <span className="h-px w-12 bg-[var(--border-strong)]" />
          </div>
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
  tone: "emerald" | "signal" | "ink";
  label: string;
  value: string;
  sub: string;
  pulse?: boolean;
}) {
  const colors = {
    emerald: {
      ring: "border-emerald-300",
      val: "text-emerald-700",
      dot: "bg-emerald-500",
      bg: "bg-[var(--background)]/95",
      labelColor: "text-[var(--foreground-soft)]",
    },
    signal: {
      ring: "border-[var(--signal)]/30",
      val: "text-[var(--signal-strong)]",
      dot: "bg-[var(--signal)]",
      bg: "bg-[var(--background)]/95",
      labelColor: "text-[var(--foreground-soft)]",
    },
    ink: {
      ring: "border-[var(--ink)]",
      val: "text-[var(--background)]",
      dot: "bg-[var(--signal)]",
      bg: "bg-[var(--ink)]",
      labelColor: "text-stone-400",
    },
  }[tone];
  return (
    <div className={`px-4 py-3 rounded-2xl border ${colors.ring} ${colors.bg} backdrop-blur-md shadow-[0_20px_50px_-15px_rgba(12,14,16,0.3)] min-w-[180px] text-left`}>
      <div className="flex items-center gap-2 mb-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} ${pulse ? "animate-pulse" : ""}`} />
        <span className={`font-mono text-[9px] uppercase tracking-[0.22em] font-semibold ${colors.labelColor}`}>
          {label}
        </span>
      </div>
      <div className={`text-lg font-semibold ${colors.val} leading-none mb-1 tracking-[-0.02em]`}>{value}</div>
      <div className={`text-[11px] ${tone === "ink" ? "text-stone-400" : "text-[var(--foreground-soft)]"}`}>{sub}</div>
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
    <div className="rounded-2xl bg-[var(--background-deep)] border border-[var(--border-soft)] p-3 md:p-4">
      <p className="font-mono text-[9px] md:text-[10px] text-[var(--foreground-soft)] uppercase tracking-[0.22em] font-semibold mb-2">
        {label}
      </p>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-lg md:text-2xl font-semibold text-[var(--ink)] truncate tracking-[-0.025em]">
          {value}
        </span>
        <span className="font-mono text-[10px] md:text-[11px] font-semibold text-[var(--signal-strong)] flex items-center gap-1 flex-shrink-0">
          {pulse && <span className="w-1.5 h-1.5 rounded-full bg-[var(--signal)] animate-pulse" />}
          {trend}
        </span>
      </div>
    </div>
  );
}
