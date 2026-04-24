import React from "react";
import Link from "next/link";

/**
 * ReferralSection — Revolut-Style Geschenk-Bühne:
 * Zentrierte Komposition mit einem großen 3D-Ticket als Blickfang.
 * Kein Flat-Block, kein Split-Card — eher wie ein Gutschein, der durch die Seite schwebt.
 */
const ReferralSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white py-20 md:py-28 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Sparkle-Dots Deko */}
      <div className="absolute top-12 left-[12%] w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
      <div className="absolute top-24 right-[18%] w-1 h-1 rounded-full bg-cyan-300/60 animate-pulse" style={{ animationDelay: "0.6s" }} />
      <div className="absolute bottom-20 left-[20%] w-1 h-1 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: "1.2s" }} />
      <div className="absolute bottom-32 right-[10%] w-1.5 h-1.5 rounded-full bg-cyan-300/50 animate-pulse" style={{ animationDelay: "0.3s" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-5">
          Freundschaftsprogramm
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6">
          Jede Empfehlung.
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
            3 Monate geschenkt.
          </span>
        </h2>

        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-14">
          Kennen Sie einen Betrieb, dem Taskey helfen könnte? Für jede erfolgreiche Empfehlung
          bekommen Sie 3 Monate gratis. Kein Limit. Keine Bedingungen.
        </p>

        {/* Ticket — der Star */}
        <div className="relative max-w-lg mx-auto mb-12">
          {/* Rotations-Echo-Tickets dahinter */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1a2942] to-[#0d1a2e] border border-white/5 rotate-[-6deg] translate-y-3 opacity-40 hidden sm:block" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1a2942] to-[#0d1a2e] border border-white/10 rotate-[4deg] translate-y-1 opacity-60 hidden sm:block" />

          {/* Haupt-Ticket */}
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1.5px] shadow-2xl shadow-cyan-500/30">
            <div className="rounded-[calc(1.5rem-1.5px)] bg-gradient-to-br from-[#0d1a2e] via-[#13203a] to-[#0d1a2e] px-8 py-8 md:px-12 md:py-10 relative overflow-hidden">
              {/* Perforierte Notch links/rechts */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-950" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-950" />
              {/* Dashed Trennlinie */}
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 border-t border-dashed border-white/15" />

              {/* Oberer Teil */}
              <div className="pb-6 mb-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-300 mb-3">
                  Gutschein
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-7xl md:text-8xl font-black text-white leading-none">3</span>
                  <div className="text-left">
                    <p className="text-2xl md:text-3xl font-black text-white leading-none">Monate</p>
                    <p className="text-sm md:text-base text-cyan-300 font-bold">geschenkt</p>
                  </div>
                </div>
              </div>

              {/* Unterer Teil */}
              <div className="pt-6 flex items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/40 mb-1">Code</p>
                  <p className="font-mono text-sm md:text-base font-bold text-white tracking-wider">TASKEY-FRIEND</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/40 mb-1">Gültig</p>
                  <p className="text-sm md:text-base font-bold text-white">Unbegrenzt</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/referral"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/90 transition-colors shadow-2xl shadow-cyan-500/20"
          >
            Jetzt empfehlen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/referral"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/10 transition-colors"
          >
            So funktioniert&apos;s
          </Link>
        </div>

        {/* Mini-Stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-white/40">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-cyan-400" /> Keine Obergrenze
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-cyan-400" /> Automatisch gutgeschrieben
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-cyan-400" /> Für beide Seiten
          </span>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
