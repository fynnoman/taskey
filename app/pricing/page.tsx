import type { Metadata } from "next";
import PricingClient from "./pricing-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Preise – Taskey Betriebssoftware",
  description:
    "Faire Tarife für Reinigung & Facility Management. 3 Monate kostenlos testen – keine Kreditkarte nötig.",
  alternates: { canonical: "https://www.taskeyapp.com/pricing" },
  openGraph: {
    title: "Preise – Taskey Betriebssoftware",
    description:
      "Faire Tarife für Reinigung & Facility Management. 3 Monate kostenlos testen – keine Kreditkarte nötig.",
    url: "https://www.taskeyapp.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Preise", url: "https://www.taskeyapp.com/pricing" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Taskey Betriebssoftware",
          "description": "All-in-One Betriebssoftware für Gebäudereinigung und Facility Management.",
          "brand": { "@type": "Brand", "name": "Taskey" },
          "offers": [
            { "@type": "Offer", "name": "Starter", "price": "0", "priceCurrency": "EUR", "description": "3 Monate kostenlos" },
            { "@type": "Offer", "name": "Pro", "price": "49", "priceCurrency": "EUR" },
          ],
        }) }}
      />
      <PricingClient />
    </>
  )
}
