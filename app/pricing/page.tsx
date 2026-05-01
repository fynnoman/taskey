"use client";

import React, { useState, lazy, Suspense } from "react";
import Link from "next/link";

const EnterpriseApplicationModal = lazy(() => import("../../components/EnterpriseApplicationModal"));

// ───── Helpers ──────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ───── Wrapper für useSearchParams ──────────────────────────────────
export default function PricingPageWrapper() {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950" />}
    >
      <PricingPage />
    </Suspense>
  );
}

// ───── Pricing-Daten ────────────────────────────────────────────────
type Tier = {
  key: string;
  name: string;
  price: string;
  unit: string;
  perObject?: string;
  features: string[];
  cta: { label: string; href?: string; modal?: boolean };
  highlighted?: boolean;
};

const reinigungTiers: Tier[] = [
  {
    key: "beginner",
    name: "Beginner",
    price: "119",
    unit: "€ / Monat",
    perObject: "+ 4,40 € pro Objekt",
    features: [
      "Unbegrenzte Mitarbeiter",
      "NFC-Leistungsnachweis",
      "Automatische Zeiterfassung",
      "Einsatzplanung",
      "Bis 30 NFC-Tags",
      "50 GB Speicher",
      "E-Mail-Support",
      "DATEV-Export",
    ],
    cta: { label: "3 Monate kostenlos", href: "https://signup.taskeyapp.com" },
  },
  {
    key: "professional",
    name: "Professional",
    price: "229",
    unit: "€ / Monat",
    perObject: "+ 4,80 € pro Objekt",
    features: [
      "Alles aus Beginner",
      "Bis 75 NFC-Tags",
      "250 GB Speicher",
      "Routenoptimierung",
      "PDF-, CSV- & Excel-Export",
      "Chat-Support (24h)",
      "Kostenloses Setup",
    ],
    cta: { label: "3 Monate kostenlos", href: "https://signup.taskeyapp.com" },
    highlighted: true,
  },
  {
    key: "business",
    name: "Business",
    price: "389",
    unit: "€ / Monat",
    perObject: "+ 5,10 € pro Objekt",
    features: [
      "Alles aus Professional",
      "Bis 200 NFC-Tags",
      "1 TB Speicher",
      "Erweiterte Auswertungen",
      "Priority-Support",
      "Mehrere Standorte",
      "Onboarding-Session",
    ],
    cta: { label: "3 Monate kostenlos", href: "https://signup.taskeyapp.com" },
  },
];

// ───── Page ─────────────────────────────────────────────────────────
function PricingPage() {
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);

  const tiers = reinigungTiers;

  return (
    <main className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white min-h-screen overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-500/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />

      {/* Subtiles Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-cyan-300 uppercase">
              Preise · Transparent · Täglich kündbar
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-white">
            Preise, die mit
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Ihrem Betrieb wachsen.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Keine Setup-Tricks. Keine Mindestlaufzeit. 3 Monate gratis testen — danach täglich kündbar.
          </p>
        </div>
      </section>

      {/* ─── PRICING CARDS ──────────────────────────────────── */}
      <section className="relative pt-4 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <PricingCard
                key={tier.key}
                tier={tier}
                onEnterpriseClick={() => setEnterpriseModalOpen(true)}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-xs text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <CheckIcon /> Unbegrenzte Mitarbeiter
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckIcon /> Täglich kündbar
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckIcon /> Keine versteckten Kosten
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckIcon /> Alle Preise zzgl. MwSt.
            </span>
          </div>
        </div>
      </section>

      {/* ─── NFC TAGS ───────────────────────────────────────── */}
      <section className="relative pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
              NFC-Tags
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 text-white">
              Hardware nachbestellen.
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
              Mehr Objekte, mehr Räume, mehr Tags. Bestellen Sie jederzeit nach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {[
              { name: "Starter",  tags: "10 NFC-Tags",  price: "6,30",  key: "starter" },
              { name: "Pro",      tags: "50 NFC-Tags",  price: "16,10", key: "pro", recommended: true },
              { name: "Business", tags: "150 NFC-Tags", price: "30,80", key: "business" },
            ].map((tier) => {
              const isRec = tier.recommended;
              return (
                <div
                  key={tier.key}
                  className={`relative rounded-3xl p-[1.5px] ${
                    isRec
                      ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20"
                      : "bg-white/10"
                  }`}
                >
                  {isRec && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-lg">
                        Empfohlen
                      </span>
                    </div>
                  )}
                  <div className="rounded-[calc(1.5rem-1.5px)] bg-gradient-to-br from-[#13203a] to-[#0d1a2e] p-7 md:p-8 h-full flex flex-col text-center">
                    <span
                      className={`text-[10px] font-black tracking-[0.3em] uppercase mb-4 ${
                        isRec ? "text-cyan-300" : "text-white/40"
                      }`}
                    >
                      {tier.name}
                    </span>
                    <p className="text-sm text-white/50 mb-5">{tier.tags}</p>
                    <div className="mb-2 flex items-baseline justify-center gap-1.5">
                      <span className="text-5xl md:text-6xl font-black leading-none text-white">
                        {tier.price}
                      </span>
                      <span className="text-2xl text-white/60 font-bold">€</span>
                    </div>
                    <p className="text-xs text-white/40 mb-7">Inkl. Versand · Lieferung in 2–3 Tagen</p>

                    <a
                      href="mailto:kontakt@taskeyapp.com?subject=NFC-Tag%20Bestellung"
                      className={`block w-full text-center py-3.5 rounded-full font-bold text-sm transition-colors mt-auto ${
                        isRec
                          ? "bg-white text-gray-900 hover:bg-white/90"
                          : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                      }`}
                    >
                      Bestellen
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 max-w-2xl mx-auto rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-1">Verlustersatz inklusive</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Tag verloren oder beschädigt? Wir ersetzen ihn kostenlos — bis zu 5 % der bestellten Menge pro Jahr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE STREIFEN ────────────────────────────── */}
      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full">
              Zusatzoption
            </span>
          </div>
          <div className="relative rounded-3xl bg-gradient-to-br from-[#13203a] via-[#0d1a2e] to-[#13203a] border border-white/10 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-4">
                  Enterprise
                </span>
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3 text-white">
                  Für Teams ab 50 Mitarbeitern.
                </h2>
                <p className="text-white/60 text-base md:text-lg mb-6">
                  Individuelle Verträge, dedizierter Ansprechpartner, eigenes Onboarding & SLA — plus exklusive Features, die nur Enterprise-Kunden erhalten.
                </p>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/80 mb-8">
                  {[
                    "Unbegrenzte NFC-Tags",
                    "Unbegrenzter Speicher",
                    "API-Zugang & Webhooks",
                    "SSO / SAML",
                    "Custom-Integrationen",
                    "Dedizierter Account-Manager",
                    "Priority-Support & SLA",
                    "Individuelle Anpassungen",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 mb-2">Preis</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Auf Anfrage — individuell auf Ihren Betrieb zugeschnitten.
                  </p>
                </div>
                <Link
                  href="/enterprise"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-colors"
                >
                  Mehr erfahren
                </Link>
                <button
                  onClick={() => setEnterpriseModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-900 text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                  Enterprise anfragen
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        {enterpriseModalOpen && (
          <EnterpriseApplicationModal
            isOpen={enterpriseModalOpen}
            onClose={() => setEnterpriseModalOpen(false)}
          />
        )}
      </Suspense>
    </main>
  );
}

// ───── Pricing-Card Komponente ──────────────────────────────────────
function PricingCard({
  tier,
  onEnterpriseClick,
}: {
  tier: Tier;
  onEnterpriseClick: () => void;
}) {
  const highlighted = tier.highlighted;

  return (
    <div
      className={`relative rounded-3xl p-[1.5px] ${
        highlighted
          ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20"
          : "bg-white/10"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-lg">
            Beliebteste Wahl
          </span>
        </div>
      )}

      <div className="rounded-[calc(1.5rem-1.5px)] bg-gradient-to-br from-[#13203a] to-[#0d1a2e] p-7 md:p-8 h-full flex flex-col">
        <span
          className={`text-[10px] font-black tracking-[0.3em] uppercase mb-5 ${
            highlighted ? "text-cyan-300" : "text-white/40"
          }`}
        >
          {tier.name}
        </span>

        <div className="mb-1 flex items-baseline gap-2">
          <span className="text-5xl md:text-6xl font-black leading-none text-white">
            {tier.price}
          </span>
          <span className="text-sm text-white/40 font-medium">{tier.unit}</span>
        </div>

        {tier.perObject ? (
          <p className="text-sm text-cyan-300 font-semibold mb-7 mt-1">{tier.perObject}</p>
        ) : (
          <div className="mb-7" />
        )}

        {tier.cta.modal ? (
          <button
            onClick={onEnterpriseClick}
            className={`block w-full text-center py-3.5 rounded-full font-bold text-sm transition-colors mb-7 ${
              highlighted
                ? "bg-white text-gray-900 hover:bg-white/90"
                : "border border-white/20 text-white hover:bg-white/10"
            }`}
          >
            {tier.cta.label}
          </button>
        ) : (
          <a
            href={tier.cta.href}
            className={`block w-full text-center py-3.5 rounded-full font-bold text-sm transition-colors mb-7 ${
              highlighted
                ? "bg-white text-gray-900 hover:bg-white/90"
                : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
            }`}
          >
            {tier.cta.label}
          </a>
        )}

        <ul className="space-y-3 text-sm text-white/70">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckIcon />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
