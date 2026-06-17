"use client";

import React, { useState, lazy, Suspense } from "react";
import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";

const EnterpriseApplicationModal = lazy(() => import("@/components/EnterpriseApplicationModal"));

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

type Tier = {
  key: string;
  name: string;
  price: string;
  unit: string;
  perObject?: string;
  features: string[];
  ctaLabel: string;
  ctaHref?: string;
  highlighted?: boolean;
};

type NfcOffer = {
  key: string;
  name: string;
  tags: string;
  price: string;
  shipping: string;
  cta: string;
  recommended?: boolean;
};

type Content = {
  hero: { badge: string; title1: string; title2: string; subtitle: string };
  trustBar: { unlimited: string; cancel: string; noHidden: string; vat: string };
  popular: string;
  tiers: Tier[];
  nfc: {
    badge: string;
    title: string;
    intro: string;
    offers: NfcOffer[];
    recommended: string;
    lossTitle: string;
    lossDesc: string;
  };
  ent: {
    addon: string;
    badge: string;
    title: string;
    desc: string;
    features: string[];
    priceLabel: string;
    priceValue: string;
    more: string;
    apply: string;
  };
};

const content: Record<"de" | "en" | "fr", Content> = {
  de: {
    hero: {
      badge: "Preise · Transparent · Täglich kündbar",
      title1: "Preise, die mit",
      title2: "Ihrem Betrieb wachsen.",
      subtitle:
        "Keine Setup-Tricks. Keine Mindestlaufzeit. 3 Monate gratis testen — danach täglich kündbar.",
    },
    trustBar: {
      unlimited: "Unbegrenzte Mitarbeiter",
      cancel: "Täglich kündbar",
      noHidden: "Keine versteckten Kosten",
      vat: "Alle Preise zzgl. MwSt.",
    },
    popular: "Beliebteste Wahl",
    tiers: [
      {
        key: "beginner",
        name: "Beginner",
        price: "71",
        unit: "€ / Monat",
        perObject: "+ 4,40 € pro Objekt",
        features: [
          "Unbegrenzte Mitarbeiter",
          "NFC-Leistungsnachweis",
          "Automatische Zeiterfassung",
          "Einsatzplanung",
          "30 NFC-Tags inklusive",
          "50 GB Speicher",
          "E-Mail-Support",
          "DATEV-Export",
        ],
        ctaLabel: "3 Monate kostenlos",
        ctaHref: "https://signup.taskeyapp.com",
      },
      {
        key: "professional",
        name: "Professional",
        price: "189",
        unit: "€ / Monat",
        perObject: "+ 4,80 € pro Objekt",
        features: [
          "Alles aus Beginner",
          "75 NFC-Tags inklusive",
          "250 GB Speicher",
          "PDF-, CSV- & Excel-Export",
          "Chat-Support (24h)",
          "Kostenloses Setup",
        ],
        ctaLabel: "3 Monate kostenlos",
        ctaHref: "https://signup.taskeyapp.com",
        highlighted: true,
      },
      {
        key: "business",
        name: "Business",
        price: "257",
        unit: "€ / Monat",
        perObject: "+ 5,10 € pro Objekt",
        features: [
          "Alles aus Professional",
          "200 NFC-Tags inklusive",
          "1 TB Speicher",
          "Erweiterte Auswertungen",
          "Priority-Support",
          "Mehrere Standorte",
          "Onboarding-Session",
        ],
        ctaLabel: "3 Monate kostenlos",
        ctaHref: "https://signup.taskeyapp.com",
      },
    ],
    nfc: {
      badge: "NFC-Tags",
      title: "Hardware nachbestellen.",
      intro: "Mehr Objekte, mehr Räume, mehr Tags. Bestellen Sie jederzeit nach.",
      offers: [
        { key: "starter", name: "Starter", tags: "10 NFC-Tags", price: "6,30", shipping: "Inkl. Versand · Lieferung in 2–3 Tagen", cta: "Bestellen" },
        { key: "pro", name: "Pro", tags: "50 NFC-Tags", price: "16,10", shipping: "Inkl. Versand · Lieferung in 2–3 Tagen", cta: "Bestellen", recommended: true },
        { key: "business", name: "Business", tags: "150 NFC-Tags", price: "30,80", shipping: "Inkl. Versand · Lieferung in 2–3 Tagen", cta: "Bestellen" },
      ],
      recommended: "Empfohlen",
      lossTitle: "Verlustersatz inklusive",
      lossDesc:
        "Tag verloren oder beschädigt? Wir ersetzen ihn kostenlos — bis zu 5 % der bestellten Menge pro Jahr.",
    },
    ent: {
      addon: "Wenn Standard nicht genügt",
      badge: "Enterprise",
      title: "Skalieren mit Features, die nur Sie haben.",
      desc:
        "Individuelle Preise. Spezifisch entwickelte, innovative und unabhängige Funktionen — auf Ihren Betrieb zugeschnitten. Für Unternehmen, die mit Standard-Paketen nicht weiterkommen.",
      features: [
        "Custom-Features für Ihren Betrieb",
        "Dedizierter Account-Manager",
        "Priority-Support & SLA",
        "Unbegrenzte NFC-Tags & Speicher",
        "API-Zugang & Webhooks",
        "SSO / SAML",
        "Custom-Integrationen (ERP, Lohn, Asset)",
        "Persönliches Onboarding & Schulungen",
      ],
      priceLabel: "Preis",
      priceValue: "Individuell — angepasst an Größe, Anforderungen und Integrationen.",
      more: "Mehr erfahren",
      apply: "Enterprise anfragen",
    },
  },

  en: {
    hero: {
      badge: "Pricing · Transparent · Cancel daily",
      title1: "Pricing that grows",
      title2: "with your business.",
      subtitle:
        "No setup tricks. No minimum term. Try free for 3 months — then cancel daily.",
    },
    trustBar: {
      unlimited: "Unlimited employees",
      cancel: "Cancel daily",
      noHidden: "No hidden costs",
      vat: "All prices excl. VAT",
    },
    popular: "Most popular",
    tiers: [
      {
        key: "beginner",
        name: "Beginner",
        price: "71",
        unit: "€ / month",
        perObject: "+ €4.40 per property",
        features: [
          "Unlimited employees",
          "NFC service proof",
          "Automatic time tracking",
          "Shift planning",
          "30 NFC tags included",
          "50 GB storage",
          "Email support",
          "DATEV export",
        ],
        ctaLabel: "3 months free",
        ctaHref: "https://signup.taskeyapp.com",
      },
      {
        key: "professional",
        name: "Professional",
        price: "189",
        unit: "€ / month",
        perObject: "+ €4.80 per property",
        features: [
          "Everything in Beginner",
          "75 NFC tags included",
          "250 GB storage",
          "PDF, CSV & Excel export",
          "Chat support (24h)",
          "Free setup",
        ],
        ctaLabel: "3 months free",
        ctaHref: "https://signup.taskeyapp.com",
        highlighted: true,
      },
      {
        key: "business",
        name: "Business",
        price: "257",
        unit: "€ / month",
        perObject: "+ €5.10 per property",
        features: [
          "Everything in Professional",
          "200 NFC tags included",
          "1 TB storage",
          "Advanced analytics",
          "Priority support",
          "Multiple sites",
          "Onboarding session",
        ],
        ctaLabel: "3 months free",
        ctaHref: "https://signup.taskeyapp.com",
      },
    ],
    nfc: {
      badge: "NFC tags",
      title: "Reorder hardware.",
      intro: "More properties, more rooms, more tags. Reorder anytime.",
      offers: [
        { key: "starter", name: "Starter", tags: "10 NFC tags", price: "6.30", shipping: "Shipping incl. · Delivery in 2–3 days", cta: "Order" },
        { key: "pro", name: "Pro", tags: "50 NFC tags", price: "16.10", shipping: "Shipping incl. · Delivery in 2–3 days", cta: "Order", recommended: true },
        { key: "business", name: "Business", tags: "150 NFC tags", price: "30.80", shipping: "Shipping incl. · Delivery in 2–3 days", cta: "Order" },
      ],
      recommended: "Recommended",
      lossTitle: "Loss replacement included",
      lossDesc:
        "Tag lost or damaged? We replace it free of charge — up to 5% of the ordered amount per year.",
    },
    ent: {
      addon: "When standard isn't enough",
      badge: "Enterprise",
      title: "Scale with features only you have.",
      desc:
        "Custom pricing. Specifically built, innovative and independent features — tailored to your business. For companies that hit the limits of standard plans.",
      features: [
        "Custom features built for your business",
        "Dedicated account manager",
        "Priority support & SLA",
        "Unlimited NFC tags & storage",
        "API access & webhooks",
        "SSO / SAML",
        "Custom integrations (ERP, payroll, asset)",
        "Personal onboarding & training",
      ],
      priceLabel: "Price",
      priceValue: "Custom — aligned with size, requirements and integrations.",
      more: "Learn more",
      apply: "Apply for Enterprise",
    },
  },

  fr: {
    hero: {
      badge: "Tarifs · Transparent · Résiliable au jour le jour",
      title1: "Des tarifs qui grandissent",
      title2: "avec votre entreprise.",
      subtitle:
        "Pas d'astuces de mise en place. Pas de durée minimale. 3 mois gratuits — résiliable au jour le jour.",
    },
    trustBar: {
      unlimited: "Employés illimités",
      cancel: "Résiliable au jour le jour",
      noHidden: "Pas de coûts cachés",
      vat: "Tous les prix HT",
    },
    popular: "Le plus populaire",
    tiers: [
      {
        key: "beginner",
        name: "Beginner",
        price: "71",
        unit: "€ / mois",
        perObject: "+ 4,40 € par site",
        features: [
          "Employés illimités",
          "Preuve d'intervention NFC",
          "Suivi du temps automatique",
          "Planning d'intervention",
          "30 étiquettes NFC incluses",
          "50 Go de stockage",
          "Support e-mail",
          "Export DATEV",
        ],
        ctaLabel: "3 mois gratuits",
        ctaHref: "https://signup.taskeyapp.com",
      },
      {
        key: "professional",
        name: "Professional",
        price: "189",
        unit: "€ / mois",
        perObject: "+ 4,80 € par site",
        features: [
          "Tout de Beginner",
          "75 étiquettes NFC incluses",
          "250 Go de stockage",
          "Export PDF, CSV & Excel",
          "Support chat (24h)",
          "Mise en place gratuite",
        ],
        ctaLabel: "3 mois gratuits",
        ctaHref: "https://signup.taskeyapp.com",
        highlighted: true,
      },
      {
        key: "business",
        name: "Business",
        price: "257",
        unit: "€ / mois",
        perObject: "+ 5,10 € par site",
        features: [
          "Tout de Professional",
          "200 étiquettes NFC incluses",
          "1 To de stockage",
          "Analyses avancées",
          "Support prioritaire",
          "Plusieurs sites",
          "Session d'onboarding",
        ],
        ctaLabel: "3 mois gratuits",
        ctaHref: "https://signup.taskeyapp.com",
      },
    ],
    nfc: {
      badge: "Étiquettes NFC",
      title: "Recommander du matériel.",
      intro: "Plus de sites, plus de pièces, plus d'étiquettes. Recommandez à tout moment.",
      offers: [
        { key: "starter", name: "Starter", tags: "10 étiquettes NFC", price: "6,30", shipping: "Livraison incluse · 2–3 jours", cta: "Commander" },
        { key: "pro", name: "Pro", tags: "50 étiquettes NFC", price: "16,10", shipping: "Livraison incluse · 2–3 jours", cta: "Commander", recommended: true },
        { key: "business", name: "Business", tags: "150 étiquettes NFC", price: "30,80", shipping: "Livraison incluse · 2–3 jours", cta: "Commander" },
      ],
      recommended: "Recommandé",
      lossTitle: "Remplacement en cas de perte inclus",
      lossDesc:
        "Étiquette perdue ou endommagée ? Nous la remplaçons gratuitement — jusqu'à 5 % de la quantité commandée par an.",
    },
    ent: {
      addon: "Quand le standard ne suffit pas",
      badge: "Enterprise",
      title: "Évoluer avec des fonctionnalités uniques.",
      desc:
        "Prix sur mesure. Fonctionnalités spécifiquement développées, innovantes et indépendantes — adaptées à votre entreprise. Pour les sociétés qui dépassent les limites des offres standard.",
      features: [
        "Fonctionnalités sur mesure pour votre entreprise",
        "Account manager dédié",
        "Support prioritaire & SLA",
        "Étiquettes NFC & stockage illimités",
        "Accès API & webhooks",
        "SSO / SAML",
        "Intégrations sur mesure (ERP, paie, asset)",
        "Onboarding personnel & formations",
      ],
      priceLabel: "Prix",
      priceValue: "Sur mesure — aligné sur la taille, les exigences et les intégrations.",
      more: "En savoir plus",
      apply: "Demander Enterprise",
    },
  },
};

export default function PricingPageWrapper() {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white" />}
    >
      <PricingPage />
    </Suspense>
  );
}

function PricingPage() {
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);
  const { language } = useLanguage();
  const c = content[language] ?? content.de;

  return (
    <main className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 min-h-screen overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-blue-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.06),transparent_60%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e3a8a 1px, transparent 1px), linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
              {c.hero.badge}
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
            {c.hero.title1}
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              {c.hero.title2}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">{c.hero.subtitle}</p>
        </div>
      </section>

      <section className="relative pt-4 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {c.tiers.map((tier) => (
              <PricingCard key={tier.key} tier={tier} popularLabel={c.popular} />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5"><CheckIcon /> {c.trustBar.unlimited}</span>
            <span className="inline-flex items-center gap-1.5"><CheckIcon /> {c.trustBar.cancel}</span>
            <span className="inline-flex items-center gap-1.5"><CheckIcon /> {c.trustBar.noHidden}</span>
            <span className="inline-flex items-center gap-1.5"><CheckIcon /> {c.trustBar.vat}</span>
          </div>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full mb-5">
              {c.nfc.badge}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 text-slate-900">
              {c.nfc.title}
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">{c.nfc.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {c.nfc.offers.map((tier) => {
              const isRec = tier.recommended;
              return (
                <div
                  key={tier.key}
                  className={`relative rounded-3xl p-[1.5px] ${
                    isRec
                      ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20"
                      : "bg-blue-100"
                  }`}
                >
                  {isRec && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-lg">
                        {c.nfc.recommended}
                      </span>
                    </div>
                  )}
                  <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-7 md:p-8 h-full flex flex-col text-center">
                    <span
                      className={`text-[10px] font-black tracking-[0.3em] uppercase mb-4 ${
                        isRec ? "text-blue-700" : "text-slate-500"
                      }`}
                    >
                      {tier.name}
                    </span>
                    <p className="text-sm text-slate-500 mb-5">{tier.tags}</p>
                    <div className="mb-2 flex items-baseline justify-center gap-1.5">
                      <span className="text-5xl md:text-6xl font-black leading-none text-slate-900">
                        {tier.price}
                      </span>
                      <span className="text-2xl text-slate-600 font-bold">€</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-7">{tier.shipping}</p>

                    <a
                      href="mailto:kontakt@taskeyapp.com?subject=NFC-Tag%20Bestellung"
                      className={`block w-full text-center py-3.5 rounded-full font-bold text-sm transition-colors mt-auto ${
                        isRec
                          ? "bg-blue-600 text-white hover:bg-blue-500"
                          : "bg-blue-100 text-slate-900 hover:bg-blue-100 border border-slate-200"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 max-w-2xl mx-auto rounded-2xl bg-blue-50/70 border border-slate-200 p-5 flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-300 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{c.nfc.lossTitle}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{c.nfc.lossDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="enterprise" className="relative pb-24 md:pb-32 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full">
              {c.ent.addon}
            </span>
          </div>

          {/* Outer gradient frame for premium feel */}
          <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-blue-500/20">
            <div className="relative rounded-[calc(2rem-2px)] bg-gradient-to-br from-white via-blue-50/60 to-white p-8 md:p-14 overflow-hidden">
              {/* Ambient glows */}
              <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[72px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[72px] pointer-events-none" />
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #1e3a8a 1px, transparent 1px), linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-start">
                {/* Left: Title + features */}
                <div>
                  <div className="inline-flex items-center gap-2 mb-5">
                    <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-white bg-gradient-to-r from-blue-700 to-cyan-500 rounded-full shadow-md">
                      {c.ent.badge}
                    </span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-5 text-slate-900">
                    <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                      {c.ent.title}
                    </span>
                  </h2>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                    {c.ent.desc}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 text-sm md:text-base text-slate-700">
                    {c.ent.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Price + CTA */}
                <div className="flex flex-col gap-4 lg:pt-2">
                  <div className="rounded-2xl bg-white border border-blue-200 shadow-lg shadow-blue-500/10 p-6">
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 mb-3">
                      {c.ent.priceLabel}
                    </p>
                    <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                      Individuell
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">{c.ent.priceValue}</p>
                  </div>

                  <button
                    onClick={() => setEnterpriseModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-bold rounded-full hover:from-blue-500 hover:to-blue-600 transition-all shadow-2xl shadow-blue-500/30"
                  >
                    {c.ent.apply}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    Selektive Aufnahme · Wir prüfen jeden Antrag persönlich.
                  </p>
                </div>
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

function PricingCard({ tier, popularLabel }: { tier: Tier; popularLabel: string }) {
  const highlighted = tier.highlighted;

  return (
    <div
      className={`relative rounded-3xl p-[1.5px] ${
        highlighted
          ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20"
          : "bg-blue-100"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-lg">
            {popularLabel}
          </span>
        </div>
      )}

      <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-7 md:p-8 h-full flex flex-col">
        <span
          className={`text-[10px] font-black tracking-[0.3em] uppercase mb-5 ${
            highlighted ? "text-blue-700" : "text-slate-500"
          }`}
        >
          {tier.name}
        </span>

        <div className="mb-1 flex items-baseline gap-2">
          <span className="text-5xl md:text-6xl font-black leading-none text-slate-900">{tier.price}</span>
          <span className="text-sm text-slate-500 font-medium">{tier.unit}</span>
        </div>

        {tier.perObject ? (
          <p className="text-sm text-blue-700 font-semibold mb-7 mt-1">{tier.perObject}</p>
        ) : (
          <div className="mb-7" />
        )}

        <a
          href={tier.ctaHref}
          className={`block w-full text-center py-3.5 rounded-full font-bold text-sm transition-colors mb-7 ${
            highlighted
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "bg-blue-100 text-slate-900 hover:bg-blue-100 border border-slate-200"
          }`}
        >
          {tier.ctaLabel}
        </a>

        <ul className="space-y-3 text-sm text-slate-600">
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
