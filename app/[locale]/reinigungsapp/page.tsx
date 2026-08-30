import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReinigungsappHero from "@/components/reinigungsapp/Hero";
import ReinigungsappFeatures from "@/components/reinigungsapp/Features";
import ReinigungsappCTA from "@/components/reinigungsapp/CTA";

const CANONICAL = "https://reinigungsapp.de/";

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
    title: "Reinigungsapp – Die App für professionelle Reinigungsbetriebe",
    description:
      "Reinigungsapp für Ihren Betrieb: NFC-Zeiterfassung, Einsatzplanung, Angebote, Rechnungen, DATEV und Live-Margen. In einer App. DSGVO-konform. Made in Germany. Kostenlos starten.",
    alternates: { canonical: CANONICAL },
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
    openGraph: {
      title: "Reinigungsapp – Die App für professionelle Reinigungsbetriebe",
      description:
        "Zeiterfassung, Objektnachweis per NFC, Einsatzplanung, Rechnungen und Live-Margen. Alles in einer Reinigungsapp.",
      url: CANONICAL,
      type: "website",
      locale: "de_DE",
      siteName: "Reinigungsapp",
    },
  };
}

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
    <main>
      <ReinigungsappHero />
      <ReinigungsappFeatures />
      <ReinigungsappCTA />
    </main>
  );
}
