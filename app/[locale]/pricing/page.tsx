import type { Metadata } from "next";
import PricingClient from "./pricing-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildMetadata, pickLocale, canonical, type PageCopy } from "@/lib/i18n-metadata";

type Locale = "de" | "en" | "fr";

const COPY: PageCopy = {
  de: {
    title: "Preise Gebäudereinigungssoftware | Ab 69€/Monat | Taskey",
    description:
      "Transparente Preise für Reinigungssoftware: Beginner ab 69€, Professional ab 179€, Business ab 249€/Monat. Unbegrenzte Mitarbeiter. Täglich kündbar.",
  },
  en: {
    title: "Cleaning software pricing | From €69/month | Taskey",
    description:
      "Transparent pricing for cleaning software: Beginner from €69, Professional from €179, Business from €249/month. Unlimited employees. Cancel anytime.",
  },
  fr: {
    title: "Tarifs logiciel de nettoyage | À partir de 69 €/mois | Taskey",
    description:
      "Tarifs transparents pour logiciel de nettoyage : Beginner dès 69 €, Professional dès 179 €, Business dès 249 €/mois. Employés illimités. Résiliable chaque jour.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path: "/pricing",
  });
}

const beginnerProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Taskey Beginner",
  "description": "Reinigungssoftware für kleine Betriebe: NFC-Zeiterfassung, Einsatzplanung, Nachweise – ab 69 € pro Monat.",
  "brand": { "@type": "Brand", "name": "Taskey" },
  "category": "Cleaning Management Software",
  "offers": { "@type": "Offer", "url": "https://www.taskeyapp.com/pricing", "price": "69", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "69", "priceCurrency": "EUR", "unitText": "MONTH", "referenceQuantity": { "@type": "QuantitativeValue", "value": 1, "unitText": "MONTH" } } },
};

const professionalProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Taskey Professional",
  "description": "Reinigungssoftware für wachsende Betriebe: zusätzlich Auftraggeber-Portal, Live-Margen und Reports – ab 179 € pro Monat.",
  "brand": { "@type": "Brand", "name": "Taskey" },
  "category": "Cleaning Management Software",
  "offers": { "@type": "Offer", "url": "https://www.taskeyapp.com/pricing", "price": "179", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "179", "priceCurrency": "EUR", "unitText": "MONTH" } },
};

const businessProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Taskey Business",
  "description": "Reinigungssoftware für mittelgroße Betriebe: zusätzlich DATEV-Export, erweiterte Rollen und priorisierten Support – ab 249 € pro Monat.",
  "brand": { "@type": "Brand", "name": "Taskey" },
  "category": "Cleaning Management Software",
  "offers": { "@type": "Offer", "url": "https://www.taskeyapp.com/pricing", "price": "249", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "249", "priceCurrency": "EUR", "unitText": "MONTH" } },
};

const FAQ_BY_LOCALE: Record<Locale, { q: string; a: string }[]> = {
  de: [
    { q: "Kann ich das Paket wechseln?", a: "Ja, Sie können jederzeit zwischen Beginner, Professional und Business upgraden oder downgraden – wirksam zum nächsten Monat." },
    { q: "Sind Updates und neue Funktionen inklusive?", a: "Ja. Alle Updates, Sicherheitsfixes und neuen Funktionen sind in jedem Tarif kostenlos enthalten und werden automatisch eingespielt." },
    { q: "Gibt es Setup- oder Onboarding-Kosten?", a: "Nein. Das Done-for-You Setup mit Import Ihrer Objekte, Mitarbeitenden und Verträge ist in jedem Tarif enthalten – ohne Aufpreis." },
    { q: "Ist die Anzahl der Mitarbeitenden begrenzt?", a: "Nein. In jedem Tarif sind unbegrenzt viele Mitarbeitende enthalten." },
  ],
  en: [
    { q: "Can I switch plans?", a: "Yes, you can upgrade or downgrade between Beginner, Professional and Business at any time – effective the next month." },
    { q: "Are updates and new features included?", a: "Yes. All updates, security fixes and new features are included in every plan at no extra cost and are rolled out automatically." },
    { q: "Are there setup or onboarding fees?", a: "No. The done-for-you setup with import of your properties, employees and contracts is included in every plan – no extra charge." },
    { q: "Is the number of employees limited?", a: "No. Every plan includes unlimited employees." },
  ],
  fr: [
    { q: "Puis-je changer de forfait ?", a: "Oui, vous pouvez passer entre Beginner, Professional et Business à tout moment – avec effet le mois suivant." },
    { q: "Les mises à jour et nouvelles fonctionnalités sont-elles incluses ?", a: "Oui. Toutes les mises à jour, correctifs de sécurité et nouvelles fonctionnalités sont inclus gratuitement dans chaque forfait et déployés automatiquement." },
    { q: "Y a-t-il des frais de mise en place ou d'onboarding ?", a: "Non. La mise en place clé en main avec import de vos sites, employés et contrats est incluse dans chaque forfait – sans supplément." },
    { q: "Le nombre d'employés est-il limité ?", a: "Non. Chaque forfait inclut un nombre illimité d'employés." },
  ],
};

const FAQ_SECTION_LABELS: Record<Locale, { kicker: string; title: string }> = {
  de: { kicker: "Häufige Fragen zu den Preisen", title: "Was Sie zu den Tarifen wissen sollten." },
  en: { kicker: "Frequently asked questions about pricing", title: "What you should know about the plans." },
  fr: { kicker: "Questions fréquentes sur les tarifs", title: "Ce qu'il faut savoir sur les forfaits." },
};

const CRUMB_LABELS: Record<Locale, { home: string; pricing: string }> = {
  de: { home: "Home", pricing: "Preise" },
  en: { home: "Home", pricing: "Pricing" },
  fr: { home: "Accueil", pricing: "Tarifs" },
};

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const faqItems = FAQ_BY_LOCALE[loc];
  const labels = FAQ_SECTION_LABELS[loc];
  const crumbs = CRUMB_LABELS[loc];

  const pricingFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: crumbs.home, url: canonical("/", loc) },
        { name: crumbs.pricing, url: canonical("/pricing", loc) },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(beginnerProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }} />
      <PricingClient />
      <PricingFaqSection items={faqItems} kicker={labels.kicker} title={labels.title} />
    </>
  );
}

function PricingFaqSection({
  items,
  kicker,
  title,
}: {
  items: { q: string; a: string }[];
  kicker: string;
  title: string;
}) {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-20 md:py-28">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[72px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
          {kicker}
        </p>
        <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-10">
          {title}
        </h2>
        <div className="space-y-4">
          {items.map((faq) => (
            <details key={faq.q} className="group rounded-2xl bg-blue-50/70 border border-slate-200 p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg font-bold">
                <span>{faq.q}</span>
                <span className="text-blue-700 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
