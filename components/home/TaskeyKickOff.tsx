'use client';

import Link from 'next/link';

export default function TaskeyKickOff() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual - Excel → Taskey Transformation */}
          <div className="order-2 lg:order-1 relative">
            <div className="space-y-4">
              {/* Excel "Vorher" */}
              <div className="relative">
                <div className="absolute -top-3 left-4 bg-red-100 text-red-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-10">
                  Vorher: Dein Excel
                </div>
                <div className="bg-gray-100 rounded-xl border-2 border-red-200 p-4 opacity-80">
                  <div className="grid grid-cols-4 gap-1 text-[10px] font-mono">
                    {/* Header Row */}
                    <div className="bg-green-200 px-2 py-1.5 font-bold text-gray-700 border border-green-300">Kunde</div>
                    <div className="bg-green-200 px-2 py-1.5 font-bold text-gray-700 border border-green-300">Tel.</div>
                    <div className="bg-green-200 px-2 py-1.5 font-bold text-gray-700 border border-green-300">Adresse</div>
                    <div className="bg-green-200 px-2 py-1.5 font-bold text-gray-700 border border-green-300">Notizen</div>
                    {/* Data Rows - chaotic */}
                    <div className="bg-white px-2 py-1.5 border border-gray-200 text-gray-600">Müller Hans</div>
                    <div className="bg-white px-2 py-1.5 border border-gray-200 text-gray-600">0151/684...</div>
                    <div className="bg-yellow-50 px-2 py-1.5 border border-gray-200 text-gray-600">Hauptstr 12</div>
                    <div className="bg-red-50 px-2 py-1.5 border border-gray-200 text-gray-500 italic">dringend!!!</div>
                    <div className="bg-white px-2 py-1.5 border border-gray-200 text-gray-600">Schmidt GbR</div>
                    <div className="bg-white px-2 py-1.5 border border-gray-200 text-gray-600">???</div>
                    <div className="bg-white px-2 py-1.5 border border-gray-200 text-gray-600">Industriestr.</div>
                    <div className="bg-yellow-50 px-2 py-1.5 border border-gray-200 text-gray-500 italic">evtl. 2024</div>
                    <div className="bg-white px-2 py-1.5 border border-gray-200 text-gray-600">Weber + Sohn</div>
                    <div className="bg-white px-2 py-1.5 border border-gray-200 text-gray-600">06898 123</div>
                    <div className="bg-red-50 px-2 py-1.5 border border-gray-200 text-gray-500 line-through">alt??</div>
                    <div className="bg-white px-2 py-1.5 border border-gray-200 text-gray-500">Reklamation</div>
                  </div>
                </div>
              </div>

              {/* Arrow + KI */}
              <div className="flex items-center justify-center gap-3 py-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                <div className="bg-blue-900 text-white px-5 py-2.5 rounded-xl font-black text-sm flex items-center gap-2 shadow-lg shadow-blue-900/30">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  KI analysiert...
                  <svg className="w-4 h-4 animate-spin text-cyan-400" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
              </div>

              {/* Taskey "Nachher" */}
              <div className="relative">
                <div className="absolute -top-3 left-4 bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-10">
                  Nachher: Dein Taskey
                </div>
                <div className="bg-white rounded-xl border-2 border-emerald-300 p-4 shadow-lg shadow-emerald-500/10">
                  <div className="space-y-2.5">
                    {/* Kunde 1 */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-9 h-9 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">MH</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900">Hans Müller</p>
                        <p className="text-xs text-gray-500">+49 151 684... · Hauptstraße 12</p>
                      </div>
                      <div className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        Importiert
                      </div>
                    </div>
                    {/* Kunde 2 */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-9 h-9 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">SG</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900">Schmidt GbR</p>
                        <p className="text-xs text-gray-500">Industriestraße · 1 Projekt</p>
                      </div>
                      <div className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        Importiert
                      </div>
                    </div>
                    {/* Kunde 3 */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-9 h-9 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">WS</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900">Weber + Sohn</p>
                        <p className="text-xs text-gray-500">+49 6898 123... · 1 Reklamation</p>
                      </div>
                      <div className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        Importiert
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-xs text-emerald-600 font-bold">✓ 3 Kunden · 1 Projekt · 1 Reklamation erkannt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-blue-900/10 border border-blue-900/20 text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Taskey Kick-Off
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-gray-900 leading-[1.1] mb-6">
              Deine Kundendaten stecken in 47 Excel-Tabellen?{' '}
              <span className="text-blue-900">Gib uns 30 Sekunden.</span>
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-6">
              Lade dein Excel-Chaos hoch. Unsere KI baut dir dein Taskey – fertig eingerichtet.
            </h3>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
              Der häufigste Grund, warum Betriebe nicht wechseln: &bdquo;Ich hab ja alles in Excel.&ldquo; Genau deshalb gibt es Kick-Off. Du lädst deine alten Listen hoch – egal wie chaotisch – und unsere KI erkennt Kunden, Projekte und Kontakte automatisch. In unter einer Minute ist dein Taskey startklar.
            </p>

            <Link
              href="https://signup.vars-development.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/25 text-base"
            >
              Excel hochladen &amp; loslegen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
