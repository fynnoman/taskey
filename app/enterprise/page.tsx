import type { Metadata } from "next";
import EnterpriseClient from "./enterprise-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Enterprise – Taskey für große Betriebe",
  description:
    "Individuelle Lösung für Unternehmen ab 50 Mitarbeitern. Dedizierter Support, SLA und maßgeschneiderte Onboarding-Pakete.",
  alternates: { canonical: "https://www.taskeyapp.com/enterprise" },
  openGraph: {
    title: "Enterprise – Taskey für große Betriebe",
    description:
      "Individuelle Lösung für Unternehmen ab 50 Mitarbeitern. Dedizierter Support, SLA und maßgeschneiderte Onboarding-Pakete.",
    url: "https://www.taskeyapp.com/enterprise",
  },
};

export default function EnterprisePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Enterprise", url: "https://www.taskeyapp.com/enterprise" },
      ]} />
      <EnterpriseClient />
    </>
  )
}
