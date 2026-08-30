import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import ReinigungsappHero from "@/components/reinigungsapp/Hero";
import ReinigungsappFeatures from "@/components/reinigungsapp/Features";
import ReinigungsappCTA from "@/components/reinigungsapp/CTA";

const AufEinenBlick = dynamic(() => import("@/components/home/AufEinenBlick"));
const LiveMargen = dynamic(() => import("@/components/home/LiveMargen"));
const AblaufSection = dynamic(() => import("@/components/home/AblaufSection"));
const FAQ = dynamic(() => import("@/components/home/FAQ"));

const CANONICAL = "https://www.taskeyapp.com/reinigungsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") {
    return { robots: { index: false, follow: false } };
  }

  return {
    title: "Reinigungsapp | NFC Zeiterfassung, Einsatzplanung & Live-Margen | Taskey",
    description:
      "Die Reinigungsapp für Ihren Betrieb: NFC-Zeiterfassung, Einsatzplanung, Angebote, Rechnungen, DATEV-Export und Live-Margen. Alles in einer App. DSGVO-konform, Made in Germany. Kostenlos starten.",
    alternates: { canonical: CANONICAL },
    openGraph: {
      title: "Reinigungsapp – Die App für professionelle Reinigungsbetriebe",
      description:
        "Zeiterfassung per NFC, Einsatzplanung, Rechnungen und Live-Margen in einer Reinigungsapp. DSGVO-konform, Made in Germany.",
      url: CANONICAL,
      type: "website",
      locale: "de_DE",
      siteName: "Taskey",
    },
  };
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist eine Reinigungsapp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Reinigungsapp bündelt Einsatzplanung, mobile Zeiterfassung, Leistungsnachweis, Angebote, Rechnungen und Auftraggeber-Kommunikation in einer einzigen mobilen Anwendung. Taskey ist eine solche Reinigungsapp, entwickelt für Reinigungsbetriebe im DACH-Raum. Alles läuft auf dem Handy, offline-fähig, mehrsprachig, DSGVO-konform.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet die Reinigungsapp Taskey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taskey startet mit einem kostenlosen Account (ohne Kreditkarte). Die bezahlten Tarife beginnen ab 69 € pro Monat für Einzelunternehmer, 119 € pro Monat für Kleinbetriebe und gehen bis 429 € pro Monat für größere Betriebe. Alle Kernfunktionen sind in jedem Tarif enthalten, es gibt keine versteckten Zusatzkosten pro Reinigungskraft.",
      },
    },
    {
      "@type": "Question",
      name: "Funktioniert die Reinigungsapp auch offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Taskey funktioniert vollständig offline. Zeitbuchungen, NFC-Scans und Fotos werden lokal gespeichert und automatisch synchronisiert, sobald wieder Netz verfügbar ist. Damit läuft die App auch in Kellern, Tiefgaragen und Objekten ohne Empfang.",
      },
    },
    {
      "@type": "Question",
      name: "Ist die Reinigungsapp DSGVO-konform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Alle Daten liegen ausschließlich auf deutschen Servern, werden verschlüsselt übertragen und ein Auftragsverarbeitungsvertrag (AVV) wird bereitgestellt. Die NFC-Zeiterfassung erfüllt zusätzlich die Mindestlohn-Dokumentationspflicht nach §17 MiLoG.",
      },
    },
    {
      "@type": "Question",
      name: "Können neue Reinigungskräfte die App ohne Schulung nutzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Die Mitarbeiter-App ist bewusst so gestaltet, dass sie ohne Schulung funktioniert. Ein Antippen des NFC-Tags reicht, um Zeit und Standort zu erfassen. Die App ist mehrsprachig verfügbar (Deutsch, Türkisch, Russisch, Polnisch u.a.), so dass jede Kraft in der eigenen Sprache arbeitet.",
      },
    },
  ],
};

export default async function ReinigungsappPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "de") {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <main>
        <ReinigungsappHero />
        <AufEinenBlick />
        <ReinigungsappFeatures />
        <LiveMargen />
        <AblaufSection />
        <FAQ />
        <ReinigungsappCTA />
      </main>
    </>
  );
}
