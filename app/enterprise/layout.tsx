import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskey Enterprise – Betriebssoftware für 100+ Mitarbeiter | Individuell skalierbar",
  description:
    "Taskey Enterprise für große Handwerks-, Bau- und Reinigungsbetriebe ab 100 Mitarbeitern. Individuelle Konfiguration, dediziertes Onboarding, SLA & API-Zugang.",
  keywords: [
    "Enterprise Software Handwerk",
    "Betriebssoftware große Firmen",
    "Software Reinigungsfirma 200 Mitarbeiter",
    "Enterprise Software Bau",
    "API Handwerkersoftware",
    "Individuelle Betriebssoftware",
  ],
  alternates: {
    canonical: "https://www.taskeyapp.com/enterprise",
  },
  openGraph: {
    title: "Taskey Enterprise – Betriebssoftware für 100+ Mitarbeiter",
    description: "Individuell skalierbar, dediziertes Onboarding, SLA & API-Zugang.",
    url: "https://www.taskeyapp.com/enterprise",
    type: "website",
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
