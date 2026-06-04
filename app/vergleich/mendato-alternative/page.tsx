import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/vergleich/mendato-alternative";

export const metadata: Metadata = {
  title: "Mendato Alternative | Taskey im direkten Vergleich | Taskey",
  description:
    "Mendato-Alternative: Taskey bietet NFC-Zeiterfassung, Live-Margen, Auftraggeber-Portal und DATEV-Export in einer App. Speziell für Gebäudereinigung im DACH-Raum.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Mendato Alternative | Taskey im direkten Vergleich | Taskey",
    description:
      "NFC, Live-Margen, Auftraggeber-Portal und DATEV-Export – speziell für Gebäudereinigung.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Vergleich Mendato vs. Taskey für Gebäudereinigung" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendato Alternative | Taskey im direkten Vergleich",
    description: "Speziell für Gebäudereinigung – mit nativer NFC-Zeiterfassung.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Mendato Alternative"
      eyebrow="Vergleich · Mendato"
      h1="Mendato Alternative —"
      h1Accent="Taskey im direkten Vergleich."
      lead="Mendato bietet solide Branchensoftware für die Gebäudereinigung. Taskey verfolgt einen moderneren, fokussierteren Ansatz: All-in-One in einer App, ohne Modul-Aufpreise, mit nativer NFC-Zeiterfassung, Live-Margen und Auftraggeber-Portal – ab 71 € pro Monat."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/mendato-alternative" },
        { name: "Mendato Alternative", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Was Inhaber typischerweise nervt",
          heading: "Was Sie an Mendato womöglich frustriert.",
          intro:
            "In Gesprächen mit Inhabern, die von Mendato zu uns wechseln, hören wir immer wieder dieselben Punkte.",
          bullets: [
            "Modulpreise summieren sich – schwer kalkulierbar",
            "Klassische Desktop-Optik, fühlt sich an wie 2010",
            "Mitarbeiter-App nicht selbsterklärend, Schulung nötig",
            "Auftraggeber-Portal nur kostenpflichtig",
            "Setup und Migration dauern oft Wochen",
          ],
        },
        {
          eyebrow: "Direkter Vergleich",
          heading: "Was Taskey anders macht.",
          bullets: [
            "All-in-One zum Festpreis – ohne Modul-Add-ons",
            "Modernes UI, mobile-first, intuitive Bedienung",
            "Native NFC-Zeiterfassung in jedem Tarif",
            "Auftraggeber-Portal (Taskey Share) ab Professional",
            "Done-for-You Setup in 48 Stunden",
            "Täglich kündbar – kein Jahresvertrag",
            "Mehrsprachige App: DE/TR/RU/PL/EN/FR",
          ],
        },
        {
          eyebrow: "Wann Mendato dennoch sinnvoll ist",
          heading: "Ehrliche Worte.",
          body: [
            "Mendato hat einen großen Funktionsumfang, der über die Reinigung hinausgeht – etwa für Industrie- und Handwerksbetriebe mit komplexen Lager- und Materialprozessen. Wer das tatsächlich braucht, ist mit Mendato gut bedient.",
            "Wer aber eine fokussierte Lösung für die Gebäudereinigung sucht, die das Team morgen früh um 5 Uhr ohne Schulung bedienen kann, fährt mit Taskey schneller und günstiger.",
          ],
        },
        {
          eyebrow: "Migration",
          heading: "Was beim Wechsel passiert.",
          body: [
            "Wir übernehmen Stammdaten, Objektzuordnungen und Verträge aus Ihrem Mendato-Export. Stundenkonten und Lohndaten können – je nach Mendato-Konfiguration – ebenfalls importiert werden.",
            "Parallel-Betrieb für 2–4 Wochen, dann sauberer Cut. Sie zahlen während dieser Phase nur Taskey – wir geben Ihnen einen Migrationsmonat als Übergang.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Kann ich Stundendaten aus Mendato übernehmen?",
          answer:
            "Ja, soweit ein Export aus Mendato möglich ist. Wir lesen die Daten ein und ordnen sie den neuen Taskey-Mitarbeitern und Objekten zu.",
        },
        {
          question: "Bietet Taskey wirklich alles, was ich aus Mendato kenne?",
          answer:
            "Die Kernfunktionen für Gebäudereinigung – Zeiterfassung, Einsatzplanung, Objektakte, Angebote, Rechnungen, DATEV-Export, Auftraggeber-Portal – ja. Sehr spezielle Industrie- oder Handwerksprozesse sind bewusst nicht abgebildet, weil Taskey auf Reinigung fokussiert ist.",
        },
        {
          question: "Was kostet ein Wechsel?",
          answer:
            "Das Done-for-You Setup ist im Tarif enthalten. Sie zahlen nur die Monatsgebühr ab 71 € – keine Setup-Pauschale.",
        },
        {
          question: "Habe ich Zugriff auf alte Daten, wenn ich Mendato kündige?",
          answer:
            "Wir empfehlen, eine vollständige Datensicherung aus Mendato zu ziehen, bevor Sie den Vertrag beenden. Den Import in Taskey übernehmen wir komplett.",
        },
        {
          question: "Wie schnell sind alle Mitarbeitenden produktiv?",
          answer:
            "Die meisten Teams sind nach einer 30-Minuten-Einführung produktiv. Die App ist so simpel gestaltet, dass keine Schulung im klassischen Sinne nötig ist.",
        },
      ]}
      related={[
        {
          href: "/software-gebaeudereinigung",
          label: "Software für Gebäudereinigung",
          description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
        },
        {
          href: "/vergleich/zvoove-alternative",
          label: "Zvoove Alternative",
          description: "Vergleich gegen die klassische ERP-Lösung im Branchenumfeld.",
        },
        {
          href: "/vergleich/fortytools-alternative",
          label: "Fortytools Alternative",
          description: "Wie Taskey gegen Fortytools für Reinigungsbetriebe abschneidet.",
        },
        {
          href: "/pricing",
          label: "Taskey-Preise",
          description: "Beginner ab 71 €, Professional ab 189 €, Business ab 257 € pro Monat.",
        },
      ]}
    />
  );
}
