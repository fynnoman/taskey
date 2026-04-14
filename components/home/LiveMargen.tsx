'use client';

import Link from 'next/link';

export default function LiveMargen() {
  return (
    <section className="py-20 md:py-32 bg-gray-900 overflow-hidden relative">
      {/* Subtle gradient accents */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #1e40af 0%, transparent 50%), radial-gradient(circle at 20% 80%, #064e3b 0%, transparent 40%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Live-Übersicht
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.1] mb-6">
              Sie erfahren erst beim Steuerberater, dass ein Auftrag ein{' '}
              <span className="text-red-400">Verlust</span> war?
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-6">
              Die Live-Übersicht zeigt Ihnen sofort, welche Objekte sich lohnen – und wo Sie draufzahlen.
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              Für jeden Reinigungsvertrag sehen Sie auf einen Blick: Was haben Sie eingenommen, was hat es gekostet, was bleibt uebrig? Personalkosten, Materialverbrauch, Sondereinsätze – alles zusammengerechnet. Wenn ein Objekt ins Minus rutscht, merken Sie es sofort. Nicht erst beim Steuerberater.
            </p>

            <Link
              href="https://signup.vars-development.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/25 text-base"
            >
              Jetzt kostenlos testen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Ihre Objekte auf einen Blick</p>
                  <p className="text-sm text-gray-400 mt-1">3 aktive Vertraege</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* Auftrag 1 - Grün */}
              <div className="bg-gray-900/60 rounded-xl p-4 mb-3 border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-white font-bold text-sm">Buerogebäude Mueller GmbH</p>
                    <p className="text-gray-500 text-xs">Vertragssumme: 38.500 EUR</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-black text-xl">+12,4%</p>
                    <p className="text-emerald-400/60 text-xs">4.773 EUR Marge</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full" style={{ width: '68%' }} />
                </div>
                <div className="flex justify-between mt-1.5 text-[10px] text-gray-500">
                  <span>Kosten: 26.120 EUR</span>
                  <span>68% abgeschlossen</span>
                </div>
              </div>

              {/* Auftrag 2 - Grün */}
              <div className="bg-gray-900/60 rounded-xl p-4 mb-3 border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-white font-bold text-sm">Treppenhaus Hausverwaltung Krause</p>
                    <p className="text-gray-500 text-xs">Vertragssumme: 22.000 EUR</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-black text-xl">+8,2%</p>
                    <p className="text-emerald-400/60 text-xs">1.804 EUR Marge</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full" style={{ width: '45%' }} />
                </div>
                <div className="flex justify-between mt-1.5 text-[10px] text-gray-500">
                  <span>Kosten: 9.350 EUR</span>
                  <span>45% abgeschlossen</span>
                </div>
              </div>

              {/* Auftrag 3 - ROT */}
              <div className="bg-red-950/30 rounded-xl p-4 border border-red-500/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-500 animate-pulse" />
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-white font-bold text-sm">Klinikreinigung Waldklinik</p>
                    <p className="text-gray-500 text-xs">Vertragssumme: 51.200 EUR</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-400 font-black text-xl">−3,1%</p>
                    <p className="text-red-400/60 text-xs">-1.587 EUR Verlust</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full" style={{ width: '82%' }} />
                </div>
                <div className="flex justify-between mt-1.5 text-[10px] text-gray-500">
                  <span>Kosten: 43.280 EUR</span>
                  <span>82% abgeschlossen</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-red-400 text-xs font-bold">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                  Achtung: Personalkosten 18% über Plan
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-emerald-500/5 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
