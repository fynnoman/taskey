"use client";

import Image from "next/image";
import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  de: {
    badge: "Neu",
    text:
      "Einzelunternehmer-Paket — 59 € pro Monat all inklusive: CRM, Subunternehmer-Portal, Finanzen, Kalkulationen und Kundenverwaltung.",
    cta: "Zum Paket",
  },
  en: {
    badge: "New",
    text:
      "Solo Operator Plan — €59 per month all-inclusive: CRM, subcontractor portal, financial management, cost calculations and customer management.",
    cta: "See the plan",
  },
  fr: {
    badge: "Nouveau",
    text:
      "Offre Auto-entrepreneur — 59 € par mois tout inclus : CRM, portail sous-traitants, gestion financière, calculs de coûts et gestion clients.",
    cta: "Voir l'offre",
  },
} as const;

export default function SoloPackageMention() {
  const { language } = useLanguage();
  const c = copy[language] ?? copy.de;

  return (
    <section className="relative py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/50 via-blue-500/50 to-purple-500/50 shadow-md">
          {/* Saubär – sitzt auf dem Kartenrand */}
          <div className="hidden md:block pointer-events-none absolute -top-16 -right-4 w-[92px] rotate-[8deg] z-10">
            <Image
              src="/Saub%C3%A4r/sitzend.png"
              alt=""
              width={220}
              height={220}
              className="w-full h-auto drop-shadow-[0_10px_18px_rgba(15,23,42,0.2)]"
            />
          </div>
          <div className="rounded-[calc(1rem-1px)] bg-white/95 backdrop-blur border border-blue-100 px-5 py-4 md:px-7 md:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <span className="inline-block px-2.5 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full flex-shrink-0">
              {c.badge}
            </span>
            <p className="text-sm md:text-base text-slate-700 leading-snug flex-1">
              {c.text}
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-600 whitespace-nowrap flex-shrink-0"
            >
              {c.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
