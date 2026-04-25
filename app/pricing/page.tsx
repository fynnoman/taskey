"use client";

import React, { useState, lazy, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
    key: "professional",
    name: "Professional",
    price: "119",
    unit: "€ / Monat",
    perObject: "+ 6,90 € pro Objekt",
    features: [
      "Unbegrenzte Mitarbeiter",
      "NFC-Leistungsnachweis",
      "Automatische Zeiterfassung",
      "Einsatzplanung",
      "Bis 30 NFC-Tags",
      "E-Mail-Support",
      "DATEV-Export",
    ],
    cta: { label: "3 Monate kostenlos", href: "https://signup.taskeyapp.com" },
  },
  {
    key: "business",
    name: "Business",
    price: "229",
    unit: "€ / Monat",
    perObject: "+ 5,90 € pro Objekt",
    features: [
      "Alles aus Professional",
      "Bis 75 NFC-Tags",
      "Routenoptimierung",
      "PDF-, CSV- & Excel-Export",
      "Chat-Support (24h)",
      "Kostenloses Setup",
      "DATEV-Export",
    ],
    cta: { label: "3 Monate kostenlos", href: "https://signup.taskeyapp.com" },
    highlighted: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: "489",
    unit: "€ / Monat",
    perObject: "+ 4,90 € pro Objekt",
    features: [
      "Alles aus Business",
      "Bis 200 NFC-Tags",
      "Priority-Support & SLA",
      "Individuelle Anpassungen",
      "Dedizierter Ansprechpartner",
      "API-Zugang",
      "DATEV-Export",
    ],
    cta: { label: "Kontakt aufnehmen", modal: true },
  },
];

const handwerkTiers: Tier[] = [
  {
    key: "start",
    name: "Start",
    price: "11,79",
    unit: "€ / Mitarbeiter / Monat",
    features: [
      "Zeiterfassung",
      "Auftragsplanung",
      "3 NFC-Tags",
      "50 GB Speicher",
      "E-Mail-Support",
      "DATEV-Export",
    ],
    cta: { label: "3 Monate kostenlos", href: "https://signup.taskeyapp.com" },
  },
  {
    key: "grow",
    name: "Grow",
    price: "21,78",
    unit: "€ / Mitarbeiter / Monat",
    features: [
      "Alles aus Start",
      "15 NFC-Tags",
      "250 GB Speicher",
      "Margen-Rechner",
      "PDF- & Excel-Export",
      "Chat-Support",
      "DATEV-Export",
    ],
    cta: { label: "3 Monate kostenlos", href: "https://signup.taskeyapp.com" },
    highlighted: true,
  },
  {
    key: "scale",
    name: "Scale",
    price: "29,77",
    unit: "€ / Mitarbeiter / Monat",
    features: [
      "Alles aus Grow",
      "45 NFC-Tags",
      "1 TB Speicher",
      "Taskey Share",
      "Priority-Support",
      "API-Zugang",
      "DATEV-Export",
    ],
    cta: { label: "3 Monate kostenlos", href: "https://signup.taskeyapp.com" },
  },
];

// ───── Page ─────────────────────────────────────────────────────────
function PricingPage() {
  const searchParams = useSearchParams();
  const initialModel = searchParams.get("model");
  const [activeModel, setActiveModel] = useState<"reinigung" | "handwerk">(
    initialModel === "handwerk" ? "handwerk" : "reinigung"
  );
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);

  const tiers = activeModel === "reinigung" ? reinigungTiers : handwerkTiers;

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

      {/* ─── MODEL TOGGLE ───────────────────────────────────── */}
      <section className="relative pb-8">
        <div className="max-w-md mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.3em] font-bold text-white/40 mb-4">
            Wählen Sie Ihre Branche
          </p>
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
            <button
              onClick={() => setActiveModel("reinigung")}
              className={`flex-1 py-3 px-4 rounded-full text-sm font-bold transition-all ${
                activeModel === "reinigung"
                  ? "bg-white text-gray-900 shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Gebäudereinigung
            </button>
            <button
              onClick={() => setActiveModel("handwerk")}
              className={`flex-1 py-3 px-4 rounded-full text-sm font-bold transition-all ${
                activeModel === "handwerk"
                  ? "bg-white text-gray-900 shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Handwerk
            </button>
          </div>
          <p className="text-center text-[11px] text-white/40 mt-4">
            {activeModel === "reinigung"
              ? "Abrechnung pro Objekt — ideal für Reinigungsbetriebe."
              : "Abrechnung pro Mitarbeiter — ideal für Handwerksbetriebe."}
          </p>
        </div>
      </section>

      {/* ─── PRICING CARDS ──────────────────────────────────── */}
      <section className="relative pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <PricingCard
                key={`${activeModel}-${tier.key}`}
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

      {/* ─── ENTERPRISE STREIFEN ────────────────────────────── */}
      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#13203a] via-[#0d1a2e] to-[#13203a] border border-white/10 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-4">
                  Enterprise
                </span>
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3 text-white">
                  Für Teams ab 50 Mitarbeitern.
                </h2>
                <p className="text-white/60 text-base md:text-lg">
                  Individuelle Verträge, dedizierter Ansprechpartner, eigenes Onboarding & SLA.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <Link
                  href="/enterprise"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  Mehr erfahren
                </Link>
                <button
                  onClick={() => setEnterpriseModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-bold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
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
