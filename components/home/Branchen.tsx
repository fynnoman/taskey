'use client';

import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

export default function Branchen() {
  const { t } = useLanguage();

  const branchenCategories = [
    {
      title: "Gebäudereinigung",
      iconPath: "M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
      description: "Unterhaltsreinigung, Glasreinigung, Industriereinigung und alle weiteren Reinigungsarten.",
      services: [
        "Unterhaltsreinigung",
        "Glasreinigung",
        "Industriereinigung",
        "Grundreinigung",
        "Sonderreinigung",
        "Baureinigung",
      ],
    },
    {
      title: "Handwerk & Bau",
      iconPath: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
      description: "SHK, Elektro, Maler, Schreiner und alle Handwerksbetriebe mit Ausseneinsaetzen.",
      services: [
        "SHK-Betriebe",
        "Elektrobetriebe",
        "Malerbetriebe",
        "Schreinereien",
        "Dachdeckereien",
        "Bauunternehmen",
      ],
    },
    {
      title: "Facility Management",
      iconPath: "M3 21h18M5 21V11l7-5 7 5v10M9 21v-6h6v6",
      description: "Gebaeudebewirtschaftung, Haustechnik und infrastrukturelles Management.",
      services: [
        "Gebaeudetechnik",
        "Haustechnik",
        "Objektbetreuung",
        "Aussenanlagenpflege",
        "Winterdienst",
        "Sicherheitsdienste",
      ],
    },
    {
      title: "Klinik & Hygiene",
      iconPath: "M12 4v16M4 12h16M8 8h8v8H8z",
      description: "Hoechste Hygienestandards fuer Krankenhaeuser, Praxen und Pflegeeinrichtungen.",
      services: [
        "OP-Reinigung",
        "Stationsreinigung",
        "Desinfektionsreinigung",
        "Praxisreinigung",
        "Pflegeheim-Reinigung",
        "Labor-Reinigung",
      ],
    },
    {
      title: "Hotellerie & Gastgewerbe",
      iconPath: "M3 21V10h18v11M3 10V7a2 2 0 012-2h14a2 2 0 012 2v3M7 14h10",
      description: "Housekeeping, Zimmerservice und Reinigung fuer Hotels und Gastronomie.",
      services: [
        "Zimmerreinigung",
        "Lobby-Reinigung",
        "Kuechenreinigung",
        "Konferenzraum-Reinigung",
        "Wellnessbereich",
        "Waesche-Management",
      ],
    },
    {
      title: "Garten- & Landschaftsbau",
      iconPath: "M12 2v20M5 10c3 0 5-2 7-8 2 6 4 8 7 8M5 16c3 0 5-2 7-4 2 2 4 4 7 4",
      description: "Gruenpflege, Landschaftsgestaltung und Aussenanlagen-Management.",
      services: [
        "Gruenpflege",
        "Baumschnitt",
        "Pflasterarbeiten",
        "Zaunbau",
        "Bewässerungssysteme",
        "Spielplatzbau",
      ],
    },
    {
      title: "Photovoltaik & Solar",
      iconPath: "M12 3v2M12 19v2M5 12H3M21 12h-2M7 7L5.5 5.5M18.5 5.5L17 7M7 17l-1.5 1.5M17 17l1.5 1.5M12 8a4 4 0 100 8 4 4 0 000-8z",
      description: "Installation, Wartung und Reinigung von Solar- und PV-Anlagen.",
      services: [
        "PV-Installation",
        "Anlagenwartung",
        "Panelreinigung",
        "Monitoring",
        "Ertragsmessung",
        "Speichersysteme",
      ],
    },
    {
      title: "Sicherheitsdienste",
      iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      description: "Objektschutz, Empfangsdienste und Sicherheitsdienstleistungen.",
      services: [
        "Objektschutz",
        "Empfangsdienst",
        "Streifendienst",
        "Veranstaltungsschutz",
        "Werkschutz",
        "Alarmverfolgung",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-4">
            Branchen
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight mb-6 text-white">
            Eine Software.
            <br />
            <span className="text-white/50">Jede Branche.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
            Reinigung, Handwerk, Facility, Dienstleistung – Taskey passt sich an Ihren Betrieb an.
            Nicht umgekehrt.
          </p>
        </div>

        {/* Grid — edle dunkle Karten mit Hover-Reveal der Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {branchenCategories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-gradient-to-br from-[#1a2942] to-[#0d1a2e] border border-white/5 p-6 transition-all hover:border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-cyan-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={category.iconPath} />
                  </svg>
                </div>

                <h3 className="text-lg font-black text-white leading-tight mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Services als Chips, sichtbar auf Mobile, beim Hover auf Desktop hervorgehoben */}
                <div className="flex flex-wrap gap-1.5">
                  {category.services.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-white/60 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                  {category.services.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-white/40 font-medium">
                      +{category.services.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">8+</div>
            <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Branchen</div>
          </div>
          <div className="text-center border-l border-white/10">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">50+</div>
            <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Einsatzbereiche</div>
          </div>
          <div className="text-center border-l border-white/10">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">DACH</div>
            <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">DE · AT · CH</div>
          </div>
          <div className="text-center border-l border-white/10">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">100%</div>
            <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Branchenflexibel</div>
          </div>
        </div>

        {/* CTA */}
        <div
          data-scrollline-cta
          className="relative rounded-[2rem] bg-gradient-to-br from-[#1a2942] to-[#0d1a2e] border border-white/5 p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-2xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
              Ihre Branche ist dabei?
            </h3>
            <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed">
              Entdecken Sie, wie Taskey Ihren Betrieb effizienter macht – ohne Setup-Aufwand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-white/90 transition-colors text-base text-center"
              >
                {t("hero.cta.trial")}
              </Link>
              <Link
                href="/features"
                className="px-8 py-3.5 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-base text-center"
              >
                Alle Funktionen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
