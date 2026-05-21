import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/vergleich/zvoove-alternative";

export const metadata: Metadata = {
  title: "Zvoove Alternative | Warum Reinigungsfirmen zu Taskey wechseln | Taskey",
  description:
    "Zvoove-Alternative für Reinigungsbetriebe: Taskey kombiniert NFC-Zeiterfassung, Einsatzplanung und Live-Margen in einer App – ohne Komplexität, ab 119 €.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Zvoove Alternative | Warum Reinigungsfirmen zu Taskey wechseln | Taskey",
    description:
      "Taskey vs. Zvoove: einfacher, günstiger, mit NFC und Auftraggeber-Portal. Speziell für Gebäudereinigung.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Vergleich Zvoove vs. Taskey für Reinigungsbetriebe" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zvoove Alternative | Warum Reinigungsfirmen zu Taskey wechseln | Taskey",
    description: "Einfacher, günstiger, mit NFC und Auftraggeber-Portal.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Zvoove Alternative"
      eyebrow="Vergleich · Zvoove"
      h1="Zvoove Alternative:"
      h1Accent="warum Reinigungsfirmen zu Taskey wechseln."
      lead="Zvoove ist eine etablierte ERP-Lösung – aber für viele Reinigungsbetriebe zu komplex, zu teuer und zu langsam in der Einführung. Taskey bietet eine fokussierte, moderne All-in-One-Plattform speziell für Gebäudereinigung – mit NFC-Zeiterfassung, Live-Margen und Auftraggeber-Portal."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/zvoove-alternative" },
        { name: "Zvoove Alternative", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Wann Sie wechseln sollten",
          heading: "Drei typische Wechsel-Auslöser.",
          intro:
            "Reinigungsbetriebe, die von Zvoove zu Taskey wechseln, nennen meist eine dieser drei Gründe.",
          subsections: [
            {
              heading: "1. Zu lange Einarbeitung",
              body:
                "Bei Zvoove dauert die Einführung mit Schulung, Customizing und Datenmigration oft Monate. Taskey ist nach 48 Stunden produktiv – mit Done-for-You Setup durch unser Team.",
            },
            {
              heading: "2. Keine echte NFC-Zeiterfassung",
              body:
                "Taskey ist von Grund auf für NFC-Workflows gebaut: wetterfeste Tags am Objekt, Smartphone-Tap, GPS-Verifikation. Kein Add-on, kein separates Modul.",
            },
            {
              heading: "3. Zu hohe Fixkosten",
              body:
                "ERP-Systeme der Zvoove-Kategorie haben oft hohe Setup-Kosten, Modulpreise und User-Lizenzen. Taskey startet bei 119 € pro Monat inkl. unbegrenzter Mitarbeiterzahl.",
            },
          ],
        },
        {
          eyebrow: "Direkter Vergleich",
          heading: "Taskey vs. Zvoove – die wichtigsten Unterschiede.",
          bullets: [
            "Fokus: Taskey speziell für Gebäudereinigung – Zvoove deckt viele Branchen ab",
            "Einführung: 48 Stunden mit Done-for-You vs. mehrere Monate Customizing",
            "Preis: ab 119 €/Monat vs. mehrtausend Euro Setup + Modulkosten",
            "NFC: nativ integriert vs. optionales Modul oder Eigenbau",
            "Auftraggeber-Portal: in jedem Tarif vs. kostenpflichtige Erweiterung",
            "Mobile App: einfach, mehrsprachig, ohne Schulung – vs. Schulungsbedarf",
            "Kündbarkeit: täglich vs. Jahresverträge",
          ],
        },
        {
          eyebrow: "Was Zvoove besser kann",
          heading: "Ehrliche Worte: wann Zvoove sinnvoller ist.",
          body: [
            "Zvoove ist ein vollwertiges ERP. Wenn Sie ein Großunternehmen mit komplexen Buchhaltungs-Workflows, internationalen Standorten und sehr individuellen Geschäftsprozessen sind, kann Zvoove die richtige Wahl sein – mit dem entsprechenden Preisschild und Schulungsaufwand.",
            "Taskey ist bewusst fokussiert: All-in-One für die Gebäudereinigung im DACH-Raum. Wenn Sie keine 30-seitige Anforderungsliste haben, sondern einfach „eine Software, die endlich funktioniert", liegen Sie bei uns richtiger.",
          ],
        },
        {
          eyebrow: "Migration",
          heading: "Wie der Umstieg konkret abläuft.",
          body: [
            "Wir nehmen Ihren Datenexport aus Zvoove (Objekte, Mitarbeitende, Verträge, offene Rechnungen) entgegen und importieren ihn in Ihren Taskey-Account. Die Migration übernimmt unser Team – Sie müssen nichts abtippen.",
            "Parallel-Betrieb: Sie können beide Systeme in den ersten 2–4 Wochen parallel nutzen, bis alle Kolonnen umgestellt sind. Erst dann beenden Sie den Zvoove-Vertrag.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Kann ich meine Daten aus Zvoove zu Taskey migrieren?",
          answer:
            "Ja. Unser Team importiert Objekte, Mitarbeitende, Verträge und offene Rechnungen aus Ihrem Zvoove-Export für Sie – kostenfrei beim Done-for-You Setup.",
        },
        {
          question: "Ist Taskey wirklich günstiger als Zvoove?",
          answer:
            "In der Regel ja, deutlich. Taskey startet bei 119 € pro Monat ohne Setup-Kosten. Zvoove-Setups liegen oft im fünfstelligen Bereich. Im Detail kommt es auf Ihre Anforderungen an – ein Vergleichsangebot machen wir Ihnen gerne.",
        },
        {
          question: "Was, wenn Taskey wider Erwarten doch nicht passt?",
          answer:
            "Taskey ist täglich kündbar. Sie bekommen Ihre Daten als Export jederzeit zurück. Kein Lock-in, keine Strafgebühr.",
        },
        {
          question: "Bietet Taskey auch eine API wie Zvoove?",
          answer:
            "Ja, im Enterprise-Tarif. Schnittstellen zu DATEV, Lexware, sevDesk und weiteren sind möglich – ebenso individuelle Integrationen.",
        },
        {
          question: "Wie lange dauert der Wechsel von Zvoove zu Taskey realistisch?",
          answer:
            "Mit Done-for-You Setup ist Ihr Betrieb in 48 Stunden auf Taskey live. Den Parallelbetrieb können Sie 2–4 Wochen laufen lassen, um sicherzustellen, dass nichts vergessen wurde.",
        },
      ]}
      related={[
        {
          href: "/vergleich/blink-alternative",
          label: "Blink Alternative",
          description: "Wie Taskey im Vergleich zu Blink für Gebäudereinigung abschneidet.",
        },
        {
          href: "/vergleich/mendato-alternative",
          label: "Mendato Alternative",
          description: "Direkter Vergleich Taskey vs. Mendato für Reinigungsbetriebe.",
        },
        {
          href: "/features",
          label: "Alle Taskey-Funktionen",
          description: "NFC, Einsatzplanung, Margen, DATEV – im Detail.",
        },
      ]}
    />
  );
}
