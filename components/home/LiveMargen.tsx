'use client';

import Link from 'next/link';
import RevealBlur from './RevealBlur';

/**
 * LiveMargen — Revolut-Style Bühne:
 * Zentrierte Headline, großes Dashboard-Center-Piece, floating KPI-Chips drumherum.
 * Kein Split-Layout – ein Hero-Moment mit einem einzigen Dashboard als Star.
 */
export default function LiveMargen() {
  return (
    <section className="relative bg-[var(--background)] text-[var(--ink)] py-24 md:py-36 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[72px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-red-500/10 rounded-full blur-[72px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — zentriert */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[var(--background-deep)] border border-[var(--border-soft)] text-emerald-700 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Live-Übersicht
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.98] tracking-[-0.04em] mb-6 text-slate-900">
            Jeder Auftrag.
            <br />
            <span className="text-[var(--foreground-soft)]">Jede Marge. </span>
            <span className="text-emerald-600">Live.</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-2xl mx-auto">
            Sie erfahren erst beim Steuerberater, dass ein Auftrag ein Verlust war?
            Damit ist Schluss. Taskey zeigt Ihnen sofort, wo Sie verdienen – und wo Sie draufzahlen.
          </p>
        </div>

        {/* Dashboard Stage — großes Center-Piece */}
        <div className="relative max-w-5xl mx-auto">
          {/* Floating KPI Chips — desktop only */}
          <div className="hidden lg:block absolute -left-8 top-20 z-20 animate-[float_6s_ease-in-out_infinite]">
            <KpiChip tone="emerald" label="Gesamt-Marge" value="+9,8%" sub="Ø aus 3 Objekten" />
          </div>
          <div className="hidden lg:block absolute -right-8 top-8 z-20 animate-[float_7s_ease-in-out_infinite_reverse]">
            <KpiChip tone="red" label="Warnung" value="1 Objekt" sub="Personalkosten 18% ↑" pulse />
          </div>
          <div className="hidden lg:block absolute -right-4 bottom-16 z-20 animate-[float_8s_ease-in-out_infinite]">
            <KpiChip tone="neutral" label="In Echtzeit" value="0,3 s" sub="Update-Latenz" />
          </div>

          {/* Dashboard Card */}
          <RevealBlur offset={120} blur={24} duration={1300}>
          <div className="relative rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-[var(--border-soft)] shadow-2xl shadow-blue-900/15 p-6 md:p-8 backdrop-blur-sm">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 md:mb-8 pb-5 border-b border-[var(--border-soft)]/60">
              <div>
                <p className="text-[10px] text-[var(--foreground-soft)] uppercase tracking-[0.25em] font-bold">Objekt-Übersicht</p>
                <p className="text-sm md:text-base text-slate-900 font-bold mt-1">3 aktive Verträge · heute 14:07 Uhr</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                LIVE
              </div>
            </div>

            {/* Contracts */}
            <div className="space-y-3">
              <ContractRow
                name="Bürogebäude Müller GmbH"
                sum="38.500 €"
                margin="+12,4%"
                marginLabel="4.773 € Marge"
                tone="emerald"
                progress={68}
                cost="26.120 €"
              />
              <ContractRow
                name="Treppenhaus Hausverwaltung Krause"
                sum="22.000 €"
                margin="+8,2%"
                marginLabel="1.804 € Marge"
                tone="emerald"
                progress={45}
                cost="9.350 €"
              />
              <ContractRow
                name="Klinikreinigung Waldklinik"
                sum="51.200 €"
                margin="−3,1%"
                marginLabel="−1.587 € Verlust"
                tone="red"
                progress={82}
                cost="43.280 €"
                warning="Achtung: Personalkosten 18% über Plan"
              />
            </div>
          </div>
          </RevealBlur>

          {/* Shadow / Glow */}
          <div className="absolute -inset-8 rounded-[3rem] bg-emerald-500/5 blur-3xl -z-10" />
        </div>

        {/* CTA unter dem Dashboard */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-14">
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[var(--ink)] text-[var(--background)] px-8 py-3.5 rounded-full font-bold text-base hover:bg-blue-500 transition-colors"
          >
            Jetzt kostenlos testen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 border border-[var(--border-strong)] text-slate-900 px-8 py-3.5 rounded-full font-bold text-base hover:bg-blue-100 transition-colors"
          >
            Mehr erfahren
          </Link>
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

function KpiChip({
  tone,
  label,
  value,
  sub,
  pulse,
}: {
  tone: 'emerald' | 'red' | 'neutral';
  label: string;
  value: string;
  sub: string;
  pulse?: boolean;
}) {
  const colors = {
    emerald: { ring: 'border-emerald-300', val: 'text-emerald-700', dot: 'bg-emerald-400' },
    red: { ring: 'border-red-400/30', val: 'text-red-300', dot: 'bg-red-400' },
    neutral: { ring: 'border-[var(--border-soft)]', val: 'text-white', dot: 'bg-white/60' },
  }[tone];
  return (
    <div className={`relative px-4 py-3 rounded-2xl bg-white/95 border ${colors.ring} backdrop-blur-md shadow-2xl shadow-blue-900/18 min-w-[180px]`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} ${pulse ? 'animate-pulse' : ''}`} />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--foreground-soft)]">{label}</span>
      </div>
      <div className={`text-2xl font-black ${colors.val} leading-none mb-1`}>{value}</div>
      <div className="text-[11px] text-[var(--foreground-soft)]">{sub}</div>
    </div>
  );
}

function ContractRow({
  name,
  sum,
  margin,
  marginLabel,
  tone,
  progress,
  cost,
  warning,
}: {
  name: string;
  sum: string;
  margin: string;
  marginLabel: string;
  tone: 'emerald' | 'red';
  progress: number;
  cost: string;
  warning?: string;
}) {
  const isRed = tone === 'red';
  return (
    <div
      className={`rounded-2xl p-4 md:p-5 border ${
        isRed
          ? 'bg-red-950/30 border-red-500/20'
          : 'bg-[var(--background-deep)]/70 border-[var(--border-soft)]/60 hover:border-[var(--border-soft)]'
      } transition-colors relative overflow-hidden`}
    >
      {isRed && <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-500 animate-pulse" />}
      <div className="flex items-center justify-between mb-3 gap-3">
        <div className="min-w-0">
          <p className="text-slate-900 font-bold text-sm md:text-base truncate">{name}</p>
          <p className="text-[var(--foreground-soft)] text-xs mt-0.5">Vertragssumme: {sum}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className={`font-black text-xl md:text-2xl leading-none ${isRed ? 'text-red-400' : 'text-emerald-600'}`}>
            {margin}
          </p>
          <p className={`text-[11px] mt-1 ${isRed ? 'text-red-400/70' : 'text-emerald-600/70'}`}>{marginLabel}</p>
        </div>
      </div>
      <div className="w-full bg-[var(--background-deep)] rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-full rounded-full ${
            isRed ? 'bg-gradient-to-r from-red-500 to-red-400' : 'bg-gradient-to-r from-emerald-500 to-emerald-400'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-[10px] text-[var(--foreground-soft)]">
        <span>Kosten: {cost}</span>
        <span>{progress}% abgeschlossen</span>
      </div>
      {warning && (
        <div className="mt-3 flex items-center gap-2 text-red-400 text-xs font-bold">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {warning}
        </div>
      )}
    </div>
  );
}
