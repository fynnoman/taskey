import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/loesungen/klinikreinigung";

export const metadata: Metadata = {
  title:
    "Software für Klinik- und Hygienereinigung | Lückenlos dokumentiert | Taskey",
  description:
    "Reinigungssoftware für Klinik- und Hygienereinigung: lückenlose Dokumentation, RKI-konforme Protokolle, Schichtbetrieb und Auftraggeber-Reports. DSGVO-konform.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Software für Klinik- und Hygienereinigung | Lückenlos dokumentiert | Taskey",
    description:
      "Lückenlose Dokumentation, RKI-konforme Protokolle, Schichtbetrieb und Auftraggeber-Reports.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Software für Klinik- und Hygienereinigung mit Taskey" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für Klinik- und Hygienereinigung | Taskey",
    description: "Lückenlos dokumentiert für Krankenhaus und Pflegeheim.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Klinik- und Hygienereinigung"
      eyebrow="Branche · Klinik & Hygiene"
      h1="Software für Klinik- und Hygienereinigung —"
      h1Accent="lückenlos dokumentiert."
      lead="In Krankenhäusern, Reha-Kliniken und Pflegeheimen ist Reinigung lebenswichtig – und Dokumentation streng. Taskey hilft Reinigungsdienstleistern, jeden Einsatz manipulationssicher zu erfassen, RKI-Vorgaben einzuhalten und Auftraggebern lückenlose Berichte zu liefern."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/klinikreinigung" },
        { name: "Klinik- und Hygienereinigung", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Anforderungen",
          heading: "Hygiene-Audits, RKI, Auftraggeber-Erwartungen.",
          body: [
            "Klinikreinigung steht unter doppelter Beobachtung: Auftraggeber (Klinik, Träger) und Behörden (Gesundheitsamt, Krankenkasse, MDK) erwarten lückenlose Dokumentation jedes Reinigungs-Einsatzes nach Zimmer, Bereich, Risikoklasse.",
            "Taskey strukturiert die Dokumentation nach Hygieneplan und ermöglicht es, pro Raum und Reinigungszyklus festzuhalten: wer, wann, mit welchem Mittel, in welcher Chargennummer, mit welchem PSA. Lückenlos, signiert, exportierbar.",
          ],
          bullets: [
            "Pro Raum: Reinigungszyklus, Risikoklasse, eingesetzte Mittel",
            "Schulungsstand pro Mitarbeiter inkl. Hygienebelehrung",
            "Automatische Sperre für Einsätze, wenn Schulung abgelaufen",
            "Audit-Trail jedes Eintrags, manipulationssicher",
          ],
        },
        {
          eyebrow: "Schichtbetrieb",
          heading: "Kontinuierliche Reinigung – nahtloser Übergabe.",
          body: [
            "Klinik-Reinigung läuft fast immer in Schichten, mit Übergabe zwischen Früh- und Spätdienst. Taskey hält die Übergabe-Liste pro Bereich digital vor: was wurde erledigt, was steht noch aus, gab es Auffälligkeiten?",
            "Übergaben werden mit Zeitstempel und ggf. Foto dokumentiert. Der ablösende Mitarbeiter sieht beim NFC-Tap im Bereich sofort den aktuellen Stand und übernimmt nahtlos.",
          ],
        },
        {
          eyebrow: "Auftraggeber-Reports",
          heading: "Monatsreport für Klinik-Hygienebeauftragte.",
          body: [
            "Der Hygienebeauftragte der Klinik will monatlich (oder bei Bedarf adhoc) sehen: welche Bereiche wurden in welcher Frequenz gereinigt, wo gab es Beanstandungen, welche Mitarbeitenden waren eingesetzt und welche Schulungen sind aktuell.",
            "Aus Taskey heraus generieren Sie diesen Report mit einem Klick – im Auftraggeber-Branding, als signiertes PDF, optional automatisiert per E-Mail.",
          ],
        },
        {
          eyebrow: "Compliance",
          heading: "RKI-Empfehlungen, IfSG, Datenschutz.",
          body: [
            "Taskey ist DSGVO-konform (Server in Deutschland, AVV bereitgestellt) und ermöglicht die Dokumentation entlang gängiger Hygiene-Anforderungen (RKI-Empfehlungen, IfSG §23). Die Daten bleiben revisionssicher in Ihrem Account – auch nach Vertragsende mit der jeweiligen Klinik.",
            "Bei Audits exportieren Sie alle relevanten Belege als signiertes PDF inklusive Audit-Log – fertig für die Prüfer.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Erfüllt Taskey die RKI-Anforderungen an Dokumentation?",
          answer:
            "Taskey strukturiert die Dokumentation entlang der relevanten Felder (Raum, Bereich, Risikoklasse, Mittel, Chargen, PSA, Mitarbeiter, Zeit). Die konkrete Umsetzung im RKI-Sinne hängt von Ihrem Hygieneplan ab – wir helfen bei der Einrichtung.",
        },
        {
          question: "Kann ich Schulungsstand inklusive Hygienebelehrung führen?",
          answer:
            "Ja. Pro Mitarbeiter hinterlegen Sie Schulungen mit Gültigkeitsdatum. Wird eine Schulung fällig, wird der Mitarbeiter automatisch erinnert – und ggf. aus relevanten Einsätzen ausgeplant.",
        },
        {
          question: "Funktioniert das auch in Pflegeheimen mit dezentralen Räumen?",
          answer:
            "Ja. Pro Bereich oder Etage NFC-Tag, pro Bewohnerzimmer optional ein separater Tag. Taskey strukturiert das hierarchisch und behält den Überblick.",
        },
        {
          question: "Wie sicher sind die sensiblen Daten in Taskey?",
          answer:
            "Alle Daten liegen verschlüsselt auf deutschen Servern. AVV ist im Account verfügbar. Zugriffsrechte sind feingranular pro Rolle steuerbar. Personenbezug auf Patientenebene besteht nicht – Taskey dokumentiert Räume und Bereiche, keine Patientendaten.",
        },
        {
          question: "Lassen sich Reinigungsmittel mit Chargennummern dokumentieren?",
          answer:
            "Ja. Pro Einsatz wählen Sie aus einer hinterlegten Mittel-Liste das verwendete Produkt mit Chargennummer aus. Für Audits ein wichtiger Beleg.",
        },
      ]}
      related={[
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: "Leistungsnachweis Gebäudereinigung",
          description: "Audit-fester Nachweis pro Einsatz und Bereich.",
        },
        {
          href: "/loesungen/industriereinigung",
          label: "Industriereinigung",
          description: "Ähnliche Anforderungen an Schichtbetrieb und Protokolle.",
        },
        {
          href: "/enterprise",
          label: "Enterprise für Kliniken",
          description: "SSO, API-Zugang und SLA für große Klinikverträge.",
        },
      ]}
    />
  );
}
