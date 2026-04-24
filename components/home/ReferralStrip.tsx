import React from "react";
import Link from "next/link";

/**
 * ReferralStrip — schmaler Top-Banner, der kurz auf das Empfehlungsprogramm hinweist.
 * Keine große Bühne, nur ein eleganter Hinweis-Streifen mit CTA.
 */
export default function ReferralStrip() {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-950 via-[#0a1628] to-gray-950 border-b border-white/5 overflow-hidden">
      {/* Sehr subtiles Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 py-2.5 text-center">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-cyan-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
            </span>
            Empfehlungsprogramm
          </span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span className="text-xs sm:text-sm text-white/70">
            Jede erfolgreiche Empfehlung ={" "}
            <span className="font-bold text-white">3 Monate Taskey geschenkt</span>. Kein Limit.
          </span>
          <Link
            href="/premium-manager"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            Mehr erfahren
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
