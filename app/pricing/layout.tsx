import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise – Taskey für Gebäudereinigung & Facility Management | Ab 11,79 € pro Mitarbeiter",
  description:
    "Transparente Preise für Taskey: Betriebssoftware für Gebäudereinigung & Facility Management ab 11,79 €/Mitarbeiter/Monat. 3 Monate kostenlos testen. Monatlich kündbar, ohne Setup-Kosten.",
  alternates: {
    canonical: "https://www.taskeyapp.com/pricing",
  },
  openGraph: {
    title: "Preise – Taskey für Gebäudereinigung & Facility Management",
    description:
      "Ab 11,79 €/Mitarbeiter/Monat. 3 Monate kostenlos testen. Monatlich kündbar.",
    url: "https://www.taskeyapp.com/pricing",
    type: "website",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
