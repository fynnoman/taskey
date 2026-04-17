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
      icon: "🏢",
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
      icon: "🔨",
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
      icon: "🏗️",
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
      icon: "🏥",
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
      icon: "🏨",
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
      icon: "🌿",
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
      icon: "☀️",
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
      icon: "🛡️",
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
            Jede <span className="text-blue-600">Branche</span> – eine Software
          </h2>
          <p className="text-sm sm:text-xl text-gray-500 max-w-3xl">
            Taskey passt sich Ihrem Betrieb an – egal ob Reinigung, Handwerk, Facility Management oder Dienstleistung.
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
              <div className="text-3xl mb-3">{category.icon}</div>
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
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                {branchenCategories.find(c => c.title === selectedCategory)?.icon}
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
                <span className="text-xl">💡</span>
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
