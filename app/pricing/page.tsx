"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<
    "monthly" | "quarterly" | "yearly"
  >("monthly");

  const packages = [
    {
      name: "Taskey Easy",
      description: "Basisfunktionen",
      prices: {
        monthly: "29€",
        quarterly: "79€",
        yearly: "299€",
      },
      features: [
        "Bis zu 2 Benutzer",
        "Zeiterfassung",
        "Auftragsplanung",
        "Mobile App",
        "Kundenverwaltung",
        "E-Mail Support",
      ],
    },
    {
      name: "Taskey Professional",
      description: "Mehr Funktionen für wachsende Betriebe",
      prices: {
        monthly: "79€",
        quarterly: "219€",
        yearly: "849€",
      },
      popular: true,
      features: [
        "Bis zu 10 Benutzer",
        "Alle Easy Features",
        "Rechnungsstellung",
        "Dokumentenverwaltung",
        "Reporting & Analytics",
        "Zahlungsabwicklung",
        "Telefon Support",
        "Team-Chat",
      ],
    },
    {
      name: "Taskey Expert",
      description: "Voller Funktionsumfang für große Unternehmen",
      prices: {
        monthly: "149€",
        quarterly: "419€",
        yearly: "1.599€",
      },
      features: [
        "Unbegrenzte Benutzer",
        "Alle Professional Features",
        "Multi-Standort-Verwaltung",
        "Erweiterte Berichte",
        "API-Zugang",
        "Dedizierter Account Manager",
        "Priority Support",
        "Individuelle Anpassungen",
      ],
    },
  ];

  const allFeatures = [
    {
      category: "Basis",
      features: [
        { name: "Zeiterfassung", easy: true, pro: true, expert: true },
        { name: "Auftragsplanung", easy: true, pro: true, expert: true },
        { name: "Mobile App (iOS & Android)", easy: true, pro: true, expert: true },
        { name: "Kundenverwaltung", easy: true, pro: true, expert: true },
        { name: "Kalenderintegration", easy: true, pro: true, expert: true },
      ],
    },
    {
      category: "Erweitert",
      features: [
        { name: "Rechnungsstellung", easy: false, pro: true, expert: true },
        { name: "Dokumentenverwaltung", easy: false, pro: true, expert: true },
        { name: "Reporting & Analytics", easy: false, pro: true, expert: true },
        { name: "Zahlungsabwicklung", easy: false, pro: true, expert: true },
        { name: "Team-Chat", easy: false, pro: true, expert: true },
        { name: "Automatische Erinnerungen", easy: false, pro: true, expert: true },
      ],
    },
    {
      category: "Premium",
      features: [
        { name: "Multi-Standort-Verwaltung", easy: false, pro: false, expert: true },
        { name: "API-Zugang", easy: false, pro: false, expert: true },
        { name: "Erweiterte Berichte", easy: false, pro: false, expert: true },
        { name: "Individuelle Anpassungen", easy: false, pro: false, expert: true },
        { name: "Priority Support", easy: false, pro: false, expert: true },
        { name: "Dedizierter Account Manager", easy: false, pro: false, expert: true },
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Faire Preise, die du bestimmst
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wählen Sie den Abrechnungszeitraum, der zu Ihnen passt
            </p>

            {/* Billing Cycle Toggle */}
            <div className="inline-flex bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  billingCycle === "monthly"
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Monatlich
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  billingCycle === "quarterly"
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Quartal
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  billingCycle === "yearly"
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Jährlich
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 ${
                  pkg.popular
                    ? "bg-blue-900 text-white shadow-2xl scale-105"
                    : "bg-white shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full">
                      BELIEBT
                    </span>
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mb-6 ${
                    pkg.popular ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">
                    {pkg.prices[billingCycle].replace("€", "")}
                  </span>
                  <span className="text-xl">€</span>
                  <span
                    className={`text-sm ${
                      pkg.popular ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {billingCycle === "monthly"
                      ? " / Monat"
                      : billingCycle === "quarterly"
                      ? " / Quartal"
                      : " / Jahr"}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                          pkg.popular ? "text-yellow-400" : "text-blue-900"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${
                    pkg.popular
                      ? "bg-white text-blue-900 hover:bg-gray-100"
                      : "bg-blue-900 text-white hover:bg-blue-800"
                  }`}
                >
                  Jetzt starten
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detaillierter Feature-Vergleich
            </h2>
            <p className="text-xl text-gray-600">
              Finden Sie das perfekte Paket für Ihre Anforderungen
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">
                      Easy
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900 bg-blue-50">
                      Professional
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">
                      Expert
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((category, catIndex) => (
                    <React.Fragment key={`cat-${catIndex}`}>
                      <tr className="bg-gray-50">
                        <td
                          colSpan={4}
                          className="px-6 py-3 font-bold text-gray-900"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, fIndex) => (
                        <tr
                          key={`feature-${catIndex}-${fIndex}`}
                          className="border-t border-gray-200"
                        >
                          <td className="px-6 py-4 text-gray-700">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.easy ? (
                              <svg
                                className="w-6 h-6 text-green-600 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-6 h-6 text-gray-300 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center bg-blue-50">
                            {feature.pro ? (
                              <svg
                                className="w-6 h-6 text-green-600 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-6 h-6 text-gray-300 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.expert ? (
                              <svg
                                className="w-6 h-6 text-green-600 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-6 h-6 text-gray-300 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fragen zu Gebrauch oder Preispaketen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Unser Team hilft Ihnen gerne weiter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+498001234567"
              className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
            >
              +49 (0) 800 123 4567
            </a>
            <a
              href="mailto:kontakt@taskey.de"
              className="px-8 py-4 text-blue-900 border-2 border-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              kontakt@taskey.de
            </a>
          </div>
          <p className="mt-8 text-gray-600">
            In der Acht 44, 66333 Völklingen, Deutschland
          </p>
        </div>
      </section>
    </main>
  );
}
