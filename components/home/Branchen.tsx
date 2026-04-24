'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

export default function Branchen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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
    <section className="relative pt-16 sm:pt-32 md:pt-48 pb-14 sm:pb-24 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-8 sm:mb-14 md:mb-20">
          <p className="text-blue-600 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] mb-3 sm:mb-4">Branchen</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-5">
            Eine Software. <span className="text-blue-600">Jede Branche.</span>
          </h2>
          <p className="text-sm sm:text-xl text-gray-500 max-w-2xl">
            Reinigung, Handwerk, Facility, Dienstleistung – Taskey passt sich an.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {branchenCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
              className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 group ${
                selectedCategory === category.title
                  ? 'bg-blue-50 border-blue-300 shadow-lg shadow-blue-100'
                  : 'bg-gray-50 border-gray-200 hover:border-blue-200 hover:shadow-md'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                selectedCategory === category.title ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-gray-200'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={category.iconPath} />
                </svg>
              </div>
              <h3 className={`font-bold text-lg mb-2 ${
                selectedCategory === category.title ? 'text-blue-700' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{category.description}</p>
              <div className={`mt-3 text-xs font-semibold ${
                selectedCategory === category.title ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'
              }`}>
                {selectedCategory === category.title ? 'Weniger anzeigen ↑' : 'Details anzeigen →'}
              </div>
            </button>
          ))}
        </div>

        {/* Expanded Category Detail */}
        {selectedCategory && (
          <div className="mb-8 sm:mb-12 bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 animate-fadeIn">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={branchenCategories.find(c => c.title === selectedCategory)?.iconPath || ''} />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCategory}</h3>
                <p className="text-gray-500">
                  {branchenCategories.find(c => c.title === selectedCategory)?.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {branchenCategories.find(c => c.title === selectedCategory)?.services.map((service, i) => (
                <div key={i} className="flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 rounded-xl p-4">
              <p className="text-gray-700 flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-sm sm:text-base">Taskey bildet alle Prozesse fuer {selectedCategory} digital ab – von der Einsatzplanung ueber NFC-Leistungsnachweise bis zur Abrechnung.</span>
              </p>
            </div>
          </div>
        )}

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1">8+</div>
            <div className="text-xs sm:text-sm text-gray-500">Branchen</div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1">50+</div>
            <div className="text-xs sm:text-sm text-gray-500">Einsatzbereiche</div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1">DACH</div>
            <div className="text-xs sm:text-sm text-gray-500">Deutschland, Österreich, Schweiz</div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-500">Branchenflexibel</div>
          </div>
        </div>

        {/* CTA Section */}
        <div data-scrollline-cta className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-3xl p-6 sm:p-12 text-left">
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-gray-900">
            Ihre Branche ist dabei?
          </h3>
          <p className="text-sm sm:text-xl mb-5 sm:mb-8 text-gray-500">
            Entdecken Sie, wie Taskey Ihren Betrieb effizienter macht
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-lg font-semibold rounded-xl text-center"
            >
              {t("hero.cta.trial")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
