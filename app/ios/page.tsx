import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskey für iOS – iPhone & iPad App",
  description:
    "Taskey für iOS: Aufträge verwalten, Zeiten erfassen und Ihr Team koordinieren – direkt von Ihrem iPhone oder iPad. Jetzt im App Store laden.",
};

export default function IOSPage() {
  return (
    <main className="bg-white">

      {/* ══════════════════════════════════════════════
          HERO SECTION
          Mobile: einfaches zentriertes Layout, kein Mockup
          Desktop (lg+): Side-by-side mit iPhone Mockup
      ══════════════════════════════════════════════ */}
      <section className="pt-24 pb-14 lg:pt-36 lg:pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          {/* ── Mobile Hero (bis lg) ── */}
          <div className="lg:hidden text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-5">
              <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-xs font-bold text-gray-700">Jetzt für iOS verfügbar</span>
            </div>

            <h1 className="text-4xl font-black text-gray-900 leading-tight tracking-tight mb-4">
              Taskey für <span className="text-blue-900">iOS</span>
            </h1>

            <p className="text-base text-gray-500 mb-8 px-2">
              Aufträge verwalten, Zeiten erfassen und Ihr Team koordinieren – alles direkt von Ihrem iPhone oder iPad.
            </p>

            <div className="flex flex-col gap-3 px-2">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gray-900 text-white text-base font-bold rounded-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Im App Store laden
              </a>
              <Link
                href="/features"
                className="flex items-center justify-center px-6 py-3.5 text-gray-900 border-2 border-gray-200 text-base font-bold rounded-xl"
              >
                Alle Features entdecken
              </Link>
            </div>

            <p className="mt-4 text-xs text-gray-400 font-medium">
              Genutzt von 600+ Betrieben in Deutschland
            </p>
          </div>

          {/* ── Desktop Hero (ab lg) ── */}
          <div className="hidden lg:flex items-center gap-16">
            {/* Text */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-sm font-bold text-gray-700">Jetzt für iOS verfügbar</span>
              </div>

              <h1 className="text-6xl font-black text-gray-900 leading-[0.95] tracking-tight mb-6">
                Taskey für<br />
                <span className="text-blue-900">iOS</span>
              </h1>

              <p className="text-xl text-gray-500 font-medium mb-10 max-w-lg">
                Aufträge verwalten, Zeiten erfassen und Ihr Team koordinieren – alles direkt von Ihrem iPhone oder iPad.
              </p>

              <div className="flex flex-row gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-2xl hover:bg-gray-800 transition-colors shadow-lg"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Im App Store laden
                </a>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center px-8 py-4 text-gray-900 border-2 border-gray-200 text-lg font-bold rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  Alle Features entdecken
                </Link>
              </div>

              <p className="mt-5 text-sm text-gray-400 font-medium">
                Genutzt von 600+ Betrieben in Deutschland
              </p>
            </div>

            {/* iPhone Mockup – nur Desktop */}
            <div className="flex-shrink-0">
              <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 rounded-[2.3rem] flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl" />
                  <div className="text-center px-6 mt-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <p className="text-white text-lg font-bold mb-1">TASKEY</p>
                    <p className="text-blue-200 text-xs mb-6">Dein Betrieb. Im Griff.</p>
                    <div className="space-y-2.5">
                      <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-left">
                        <p className="text-white/60 text-[10px] uppercase tracking-wider">Aufträge heute</p>
                        <p className="text-white text-xl font-black">12</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-left">
                        <p className="text-white/60 text-[10px] uppercase tracking-wider">Team online</p>
                        <p className="text-white text-xl font-black">8/10</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-left">
                        <p className="text-white/60 text-[10px] uppercase tracking-wider">Erfasste Std.</p>
                        <p className="text-white text-xl font-black">64,5h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURES SECTION
          Mobile: einfache gestackte Liste, kein Hover
          Desktop (lg+): 2x2 Grid mit Hover-Effekten
      ══════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          {/* Headline */}
          <div className="text-center mb-8 lg:mb-16">
            <p className="text-xs lg:text-sm font-black uppercase tracking-widest text-blue-900 mb-2 lg:mb-3">Warum Taskey für iOS?</p>
            <h2 className="text-2xl lg:text-5xl font-black text-gray-900">
              Alles, was Ihr Betrieb braucht.{" "}
              <span className="text-blue-900">In Ihrer Tasche.</span>
            </h2>
          </div>

          {/* ── Mobile Features (bis lg): Einfache Liste ── */}
          <div className="lg:hidden space-y-3">
            {[
              {
                title: "Intuitive Oberfläche",
                desc: "Klare Struktur, die sofort verständlich ist – ohne Schulung.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                ),
              },
              {
                title: "Offline-fähig",
                desc: "Arbeiten Sie auch ohne Netz – Daten synchronisieren sich automatisch.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 11-12.728 0M12 9v6m0 0l-3-3m3 3l3-3" />
                ),
              },
              {
                title: "Push-Benachrichtigungen",
                desc: "Echtzeit-Updates zu Aufträgen, Zeiten und Teamänderungen.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                ),
              },
              {
                title: "Face ID & Touch ID",
                desc: "Sicherer Zugriff in Sekunden – ohne Passwort-Eingabe.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                ),
              },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 mb-0.5">{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Desktop Features (ab lg): 2x2 Grid mit Hover ── */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-colors hover:shadow-lg group">
              <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Intuitive Oberfläche</h3>
              <p className="text-base text-gray-500 leading-relaxed">Klare Struktur, die sofort verständlich ist – ohne Schulung.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-colors hover:shadow-lg group">
              <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 11-12.728 0M12 9v6m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Offline-fähig</h3>
              <p className="text-base text-gray-500 leading-relaxed">Arbeiten Sie auch ohne Netz – Daten synchronisieren sich automatisch.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-colors hover:shadow-lg group">
              <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Push-Benachrichtigungen</h3>
              <p className="text-base text-gray-500 leading-relaxed">Echtzeit-Updates zu Aufträgen, Zeiten und Teamänderungen.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-colors hover:shadow-lg group">
              <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Face ID & Touch ID</h3>
              <p className="text-base text-gray-500 leading-relaxed">Sicherer Zugriff in Sekunden – ohne Passwort-Eingabe.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BRANCHEN SECTION
          Mobile: einfaches Layout, keine Hover-Effekte
          Desktop (lg+): 4-Spalten Grid mit Hover
      ══════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          {/* Headline */}
          <div className="text-center mb-8 lg:mb-14">
            <p className="text-xs lg:text-sm font-black uppercase tracking-widest text-blue-900 mb-2 lg:mb-3">Branchenabdeckung</p>
            <h2 className="text-2xl lg:text-5xl font-black text-gray-900 mb-3 lg:mb-4">
              Über 600 Branchen vertrauen auf Taskey
            </h2>
            <p className="text-sm lg:text-xl text-gray-500">
              Passt Taskey zu Ihnen? Finden Sie es raus!
            </p>
          </div>

          {/* ── Mobile Branchen (bis lg): Kompakte 2-Spalten ── */}
          <div className="lg:hidden grid grid-cols-2 gap-2.5 mb-8">
            {[
              { icon: "🔧", name: "Handwerk" },
              { icon: "🏢", name: "Facility Mgmt." },
              { icon: "⚡", name: "Elektrotechnik" },
              { icon: "🔩", name: "Sanitär & Heizung" },
              { icon: "🏗️", name: "Baugewerbe" },
              { icon: "🌿", name: "Gartenbau" },
              { icon: "🧹", name: "Reinigung" },
              { icon: "🚗", name: "KFZ-Service" },
            ].map((b) => (
              <div key={b.name} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                <span className="text-xl block mb-1">{b.icon}</span>
                <p className="text-[11px] font-bold text-gray-700">{b.name}</p>
              </div>
            ))}
          </div>

          {/* ── Desktop Branchen (ab lg): 4-Spalten Grid ── */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mb-16">
            {[
              { icon: "🔧", name: "Handwerk" },
              { icon: "🏢", name: "Facility Management" },
              { icon: "⚡", name: "Elektrotechnik" },
              { icon: "🔩", name: "Sanitär & Heizung" },
              { icon: "🏗️", name: "Baugewerbe" },
              { icon: "🌿", name: "Garten- & Landschaftsbau" },
              { icon: "🧹", name: "Reinigungsdienste" },
              { icon: "🚗", name: "KFZ-Service" },
            ].map((b) => (
              <div
                key={b.name}
                className="bg-gray-50 rounded-2xl p-5 text-center hover:bg-blue-50 hover:border-blue-200 border border-gray-100 transition-colors cursor-default"
              >
                <span className="text-3xl block mb-2">{b.icon}</span>
                <p className="text-sm font-bold text-gray-700">{b.name}</p>
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div className="bg-gray-900 rounded-xl lg:rounded-3xl p-6 lg:p-12 text-center">
            <h3 className="text-xl lg:text-3xl font-black text-white mb-2 lg:mb-3">
              Ist Ihre Branche dabei?
            </h3>
            <p className="text-sm lg:text-lg text-gray-400 mb-6 lg:mb-8 max-w-xl mx-auto">
              Entdecken Sie, wie Taskey Ihren Betrieb effizienter macht
            </p>

            {/* Mobile CTAs */}
            <div className="lg:hidden flex flex-col gap-3">
              <Link
                href="https://signup.vars-development.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3.5 bg-blue-900 text-white text-sm font-bold rounded-xl"
              >
                14 Tage kostenlos testen
              </Link>
              <Link
                href="/demo"
                className="flex items-center justify-center px-6 py-3.5 text-white border-2 border-gray-600 text-sm font-bold rounded-xl"
              >
                Live Demo ansehen
              </Link>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex flex-row gap-4 justify-center">
              <Link
                href="https://signup.vars-development.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white text-lg font-bold rounded-2xl hover:bg-blue-800 transition-colors shadow-lg"
              >
                14 Tage kostenlos testen
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-white border-2 border-gray-600 text-lg font-bold rounded-2xl hover:border-gray-400 hover:bg-gray-800 transition-colors"
              >
                Live Demo ansehen
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
