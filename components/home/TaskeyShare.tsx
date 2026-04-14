'use client';

import Link from 'next/link';

export default function TaskeyShare() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              Auftraggeber-Portal
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-gray-900 leading-[1.1] mb-6">
              Ihr Telefon klingelt 15x am Tag:{' '}
              <span className="text-blue-700">&apos;Wie sieht es im Objekt aus?&apos;</span>
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-6">
              Ein Klick – und Ihr Auftraggeber sieht alles selbst. Ohne Sie anzurufen.
            </h3>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
              Sie erstellen fuer Ihren Auftraggeber einen Zugang. Dort sieht er: Reinigungsfortschritt, aktuelle Fotos, Nachweise – alles auf einer uebersichtlichen Seite, die sich von selbst aktualisiert. Ihr Team reinigt weiter, statt Statusupdates am Telefon durchzugeben.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://signup.vars-development.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-600 text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-700/25 text-base"
              >
                Jetzt kostenlos testen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Social Proof Nugget */}
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1 text-yellow-500">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span>&apos;Seit dem Auftraggeber-Portal ruft kein Kunde mehr an. Allein das spart mir 1 Stunde am Tag.&apos;</span>
            </div>
          </div>

          {/* iPhone Mockup */}
          <div className="relative flex items-center justify-center">
            {/* Phone Frame */}
            <div className="relative w-[280px] sm:w-[300px]">
              {/* Phone outer */}
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-gray-900/30">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />
                
                {/* Screen */}
                <div className="bg-white rounded-[2.25rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-blue-700 px-6 pt-8 pb-4">
                    <p className="text-white/60 text-[10px] font-medium mb-1">Auftraggeber-Portal</p>
                    <p className="text-white font-black text-lg">Ihr Reinigungsobjekt</p>
                    <p className="text-blue-200 text-xs">Buerogebaeude · Hausverwaltung Krause</p>
                  </div>

                  {/* Content */}
                  <div className="px-4 py-4 space-y-3">
                    {/* Progress */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-xs font-bold text-gray-900">Fortschritt</p>
                        <p className="text-xs font-black text-blue-700">67%</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-2.5 rounded-full" style={{ width: '67%' }} />
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1.5">Naechste Reinigung: Mo, 28. Maerz</p>
                    </div>

                    {/* Photos */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-bold text-gray-900 mb-2">Leistungsnachweise</p>
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1.5">Heute, 14:32 Uhr hochgeladen</p>
                    </div>

                    {/* Budget */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-bold text-gray-900 mb-2">Monatsvertrag</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-gray-900">4.200 EUR</span>
                        <span className="text-xs text-gray-500">von 4.800 EUR</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '89%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Label below */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                So sieht es Ihr Auftraggeber
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-8 bg-blue-500/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
