import type { Metadata } from "next";
import PricingClient from "./pricing-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Preise Gebäudereinigungssoftware | Ab 119€/Monat | Taskey",
    description:
      "Transparente Preise für Reinigungssoftware: Beginner ab 71€, Professional ab 189€, Business ab 257€/Monat. Unbegrenzte Mitarbeiter. Täglich kündbar.",
  },
  en: {
    title: "Cleaning software pricing | From €119/month | Taskey",
    description:
      "Transparent pricing for cleaning software: Beginner from €71, Professional from €189, Business from €257/month. Unlimited employees. Cancel anytime.",
  },
  fr: {
    title: "Tarifs logiciel de nettoyage | À partir de 119 €/mois | Taskey",
    description:
      "Tarifs transparents pour logiciel de nettoyage : Beginner dès 71 €, Professional dès 189 €, Business dès 257 €/mois. Employés illimités. Résiliable chaque jour.",
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
  "description": "Reinigungssoftware für kleine Betriebe: NFC-Zeiterfassung, Einsatzplanung, Nachweise – ab 71 € pro Monat plus 4,40 € pro Objekt.",
  "brand": { "@type": "Brand", "name": "Taskey" },
  "category": "Cleaning Management Software",
  "offers": { "@type": "Offer", "url": "https://www.taskeyapp.com/pricing", "price": "71", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "71", "priceCurrency": "EUR", "unitText": "MONTH", "referenceQuantity": { "@type": "QuantitativeValue", "value": 1, "unitText": "MONTH" } } },
};

const professionalProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Taskey Professional",
  "description": "Reinigungssoftware für wachsende Betriebe: zusätzlich Auftraggeber-Portal, Live-Margen und Reports – ab 189 € pro Monat plus 4,80 € pro Objekt.",
  "brand": { "@type": "Brand", "name": "Taskey" },
  "category": "Cleaning Management Software",
  "offers": { "@type": "Offer", "url": "https://www.taskeyapp.com/pricing", "price": "189", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "189", "priceCurrency": "EUR", "unitText": "MONTH" } },
};

const businessProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Taskey Business",
  "description": "Reinigungssoftware für mittelgroße Betriebe: zusätzlich DATEV-Export, erweiterte Rollen und priorisierten Support – ab 257 € pro Monat plus 5,10 € pro Objekt.",
  "brand": { "@type": "Brand", "name": "Taskey" },
  "category": "Cleaning Management Software",
  "offers": { "@type": "Offer", "url": "https://www.taskeyapp.com/pricing", "price": "257", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "257", "priceCurrency": "EUR", "unitText": "MONTH" } },
};

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Gibt es eine kostenlose Testphase?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Sie können Taskey 3 Monate lang kostenlos testen – ohne Kreditkarte und ohne automatische Verlängerung." } },
    { "@type": "Question", "name": "Kann ich das Paket wechseln?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Sie können jederzeit zwischen Beginner, Professional und Business upgraden oder downgraden – wirksam zum nächsten Monat." } },
    { "@type": "Question", "name": "Was passiert nach der 3-monatigen Testphase?", "acceptedAnswer": { "@type": "Answer", "text": "Nach drei Monaten wählen Sie ein Paket aktiv aus oder das Konto wird pausiert. Es gibt keine automatische Abbuchung ohne Ihre Zustimmung." } },
    { "@type": "Question", "name": "Sind Updates und neue Funktionen inklusive?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Alle Updates, Sicherheitsfixes und neuen Funktionen sind in jedem Tarif kostenlos enthalten und werden automatisch eingespielt." } },
    { "@type": "Question", "name": "Was kosten zusätzliche Objekte?", "acceptedAnswer": { "@type": "Answer", "text": "Pro aktivem Objekt kostet Beginner 4,40 €, Professional 4,80 € und Business 5,10 € im Monat. Inaktive Objekte zählen nicht." } },
    { "@type": "Question", "name": "Gibt es Setup- oder Onboarding-Kosten?", "acceptedAnswer": { "@type": "Answer", "text": "Nein. Das Done-for-You Setup mit Import Ihrer Objekte, Mitarbeitenden und Verträge ist in jedem Tarif enthalten – ohne Aufpreis." } },
    { "@type": "Question", "name": "Ist die Anzahl der Mitarbeitenden begrenzt?", "acceptedAnswer": { "@type": "Answer", "text": "Nein. In jedem Tarif sind unbegrenzt viele Mitarbeitende enthalten. Sie zahlen ausschließlich nach aktivem Objekt – nicht pro User." } },
  ],
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Preise", url: "https://www.taskeyapp.com/pricing" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(beginnerProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }} />
      <PricingClient />
      <PricingFaqSection />
    </>
  );
}

function PricingFaqSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-20 md:py-28">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[72px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
          Häufige Fragen zu den Preisen
        </p>
        <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-10">
          Was Sie zu den Tarifen wissen sollten.
        </h2>
        <div className="space-y-4">
          {pricingFaqSchema.mainEntity.map((faq) => (
            <details key={faq.name} className="group rounded-2xl bg-blue-50/70 border border-slate-200 p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg font-bold">
                <span>{faq.name}</span>
                <span className="text-blue-700 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
