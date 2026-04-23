import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise – Taskey für Handwerk & Gebäudereinigung | Ab 11,79 € pro Mitarbeiter",
  description:
    "Transparente Preise für Taskey: Betriebssoftware für Handwerk, Bau & Gebäudereinigung ab 11,79 €/Mitarbeiter/Monat. 3 Monate kostenlos testen. Monatlich kündbar, ohne Setup-Kosten.",
  keywords: [
    "Taskey Preise",
    "Handwerkersoftware Kosten",
    "Reinigungssoftware Preise",
    "Betriebssoftware Preise",
    "Software Handwerk günstig",
    "Zeiterfassung Software Kosten",
  ],
  alternates: {
    canonical: "https://www.taskeyapp.com/pricing",
  },
  openGraph: {
    title: "Preise – Taskey für Handwerk & Gebäudereinigung",
    description:
      "Ab 11,79 €/Mitarbeiter/Monat. 3 Monate kostenlos testen. Monatlich kündbar.",
    url: "https://www.taskeyapp.com/pricing",
    type: "website",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
