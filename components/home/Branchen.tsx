'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

export default function Branchen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t } = useLanguage();

  const reinigungsCategories = [
    {
      title: "Unterhaltsreinigung",
      icon: "🏢",
      description: "Tägliche und regelmäßige Reinigung von Buerogebäuden, Verwaltungen und Gewerbeimmobilien.",
      services: [
        "Buerogebäude-Reinigung",
        "Treppenhausreinigung",
        "Sanitaerreinigung",
        "Empfangs- & Foyerreinigung",
        "Muelltrennung & Entsorgung",
        "Teeekuechen-Reinigung",
      ],
    },
    {
      title: "Glasreinigung",
      icon: "🪟",
      description: "Professionelle Glas- und Fassadenreinigung für Gebäude jeder Größe.",
      services: [
        "Aussenglasreinigung",
        "Innenglasreinigung",
        "Schaufensterreinigung",
        "Wintergartenreinigung",
        "Glasfassadenreinigung",
        "Oberlichtreinigung",
      ],
    },
    {
      title: "Industriereinigung",
      icon: "🏭",
      description: "Spezialreinigung für Produktionshallen, Lager und industrielle Anlagen.",
      services: [
        "Hallenreinigung",
        "Maschinenreinigung",
        "Lagerreinigung",
        "Industriebodenreinigung",
        "Hochdruckreinigung",
        "Tankreinigung",
      ],
    },
    {
      title: "Klinik- & Hygienereinigung",
      icon: "🏥",
      description: "Höchste Hygienestandards für Krankenhaeuser, Praxen und Pflegeeinrichtungen.",
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
      title: "Grundreinigung",
      icon: "✨",
      description: "Intensive Tiefenreinigung als einmalige oder periodische Leistung.",
      services: [
        "Bodengrundeinigung",
        "Teppichgrundreinigung",
        "Steinbodensanierung",
        "PVC-Grundreinigung",
        "Parkettaufbereitung",
        "Fliesen-Intensivreinigung",
      ],
    },
    {
      title: "Baureinigung",
      icon: "🔨",
      description: "Bauschluss- und Feinreinigung nach Neubau, Umbau oder Renovierung.",
      services: [
        "Baugrobreinigung",
        "Baufeinreinigung",
        "Bauendreinigung",
        "Staubentfernung nach Bau",
        "Fensterreinigung Neubau",
        "Fassadenreinigung Neubau",
      ],
    },
    {
      title: "Sonderreinigung",
      icon: "⚡",
      description: "Spezialreinigungen für besondere Anforderungen und Situationen.",
      services: [
        "Tatortreinigung",
        "Brandsanierung",
        "Wasserschadenreinigung",
        "Graffitientfernung",
        "Schimmelsanierung",
        "Geruchsneutralisierung",
      ],
    },
    {
      title: "Teppich- & Polsterreinigung",
      icon: "🛋️",
      description: "Professionelle Textilreinigung für Teppiche, Polster und Vorhaenge.",
      services: [
        "Teppichreinigung",
        "Polstermoebelreinigung",
        "Vorhangreinigung",
        "Matratzenreinigung",
        "Stuhlreinigung",
        "Autositze-Reinigung",
      ],
    },
    {
      title: "Fassadenreinigung",
      icon: "🧱",
      description: "Professionelle Reinigung und Pflege von Gebäude-Aussenfassaden.",
      services: [
        "Klinkerfassaden",
        "Natursteinfassaden",
        "Putzfassaden",
        "Metallfassaden",
        "Betonfassaden",
        "Holzfassaden",
      ],
    },
    {
      title: "Hotelreinigung",
      icon: "🏨",
      description: "Housekeeping und Reinigungsservice für Hotels und Gastgewerbe.",
      services: [
        "Zimmerreinigung",
        "Lobby-Reinigung",
        "Konferenzraum-Reinigung",
        "Kuechenreinigung",
        "Wellnessbereich-Reinigung",
        "Wäsche-Management",
      ],
    },
    {
      title: "Verkehrsmittelreinigung",
      icon: "🚆",
      description: "Reinigung von Bussen, Bahnen, Flugzeugen und Schiffen.",
      services: [
        "Busreinigung",
        "Zugreinigung",
        "Flugzeugreinigung",
        "Schiffsreinigung",
        "Stationsreinigung",
        "Depot-Reinigung",
      ],
    },
    {
      title: "Photovoltaik-Reinigung",
      icon: "☀️",
      description: "Schonende und fachgerechte Reinigung von Solar- und PV-Anlagen.",
      services: [
        "Dachanlagen-Reinigung",
        "Freiflaechen-PV-Reinigung",
        "Fassaden-PV-Reinigung",
        "Carport-PV-Reinigung",
        "Moosprophylaxe",
        "Ertragsmessung nach Reinigung",
      ],
    },
  ];

  return (
    <section className="relative pt-16 sm:pt-32 md:pt-48 pb-14 sm:pb-24 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-8 sm:mb-14 md:mb-20">
          <p className="text-blue-600 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] mb-3 sm:mb-4">Reinigungsbereiche</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-5">
            Jede <span className="text-blue-600">Reinigungsart</span> – eine Software
          </h2>
          <p className="text-sm sm:text-xl text-gray-500 max-w-3xl">
            Taskey ist speziell für die Gebäudereinigung im DACH-Raum entwickelt. Egal welchen Bereich Sie abdecken.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {reinigungsCategories.map((category, index) => (
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
                {reinigungsCategories.find(c => c.title === selectedCategory)?.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCategory}</h3>
                <p className="text-gray-500">
                  {reinigungsCategories.find(c => c.title === selectedCategory)?.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {reinigungsCategories.find(c => c.title === selectedCategory)?.services.map((service, i) => (
                <div key={i} className="flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 rounded-xl p-4">
              <p className="text-gray-700 flex items-start gap-2">
                <span className="text-xl">💡</span>
                <span className="font-medium text-sm sm:text-base">Taskey bildet alle Prozesse für {selectedCategory} digital ab – von der Einsatzplanung über NFC-Leistungsnachweise bis zur Abrechnung.</span>
              </p>
            </div>
          </div>
        )}

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1">12+</div>
            <div className="text-xs sm:text-sm text-gray-500">Reinigungsbereiche</div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1">70+</div>
            <div className="text-xs sm:text-sm text-gray-500">Leistungsarten</div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1">DACH</div>
            <div className="text-xs sm:text-sm text-gray-500">Deutschland, Österreich, Schweiz</div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-500">Reinigungsfokus</div>
          </div>
        </div>

        {/* CTA Section */}
        <div data-scrollline-cta className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-3xl p-6 sm:p-12 text-left">
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-gray-900">
            Ihre Reinigungsart ist dabei?
          </h3>
          <p className="text-sm sm:text-xl mb-5 sm:mb-8 text-gray-500">
            Entdecken Sie, wie Taskey Ihren Reinigungsbetrieb effizienter macht
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
