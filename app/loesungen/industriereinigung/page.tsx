import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/loesungen/industriereinigung";

export const metadata: Metadata = {
  title: "Software für Industriereinigung | Protokolle, Schichten, DATEV | Taskey",
  description:
    "Reinigungssoftware für Industriereinigung: Schichtbetrieb, Sicherheitsprotokolle, Stundenlisten und DATEV-Export. DSGVO-konform und Made in Germany.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Software für Industriereinigung | Protokolle, Schichten, DATEV | Taskey",
    description:
      "Schichtbetrieb, Sicherheitsprotokolle und DATEV-Export für Industriereinigungsbetriebe.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Software für Industriereinigung mit Taskey" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für Industriereinigung | Taskey",
    description: "Protokolle, Schichten und DATEV-Export für die Industriereinigung.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Industriereinigung"
      eyebrow="Branche · Industrie"
      h1="Software für Industriereinigung —"
      h1Accent="Protokolle, Schichten, DATEV."
      lead="Industriereinigung läuft anders: 24/7-Schichten, strenge Sicherheits- und Hygieneprotokolle, hohe Dokumentationspflichten gegenüber Auftraggebern und Behörden. Taskey strukturiert Schichtbetrieb, dokumentiert Protokolle revisionssicher und übergibt Stunden direkt an DATEV."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/industriereinigung" },
        { name: "Industriereinigung", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Schichtbetrieb",
          heading: "Drei Schichten, 50 Mitarbeitende, keine Lücke.",
          body: [
            "Industriereinigung in Produktionsbetrieben läuft oft im 3-Schicht-Modell mit Wechsel zur Hauptzeit. Taskey plant Früh-, Spät- und Nachtschicht parallel, berücksichtigt automatisch Mindestruhezeiten und meldet Konflikte sofort.",
            "Krankmeldungen mitten in der Nacht? Die Vertretungs-Engine schlägt verfügbare Mitarbeiter mit passender Qualifikation und kurzer Anfahrtszeit vor – Sie pingen sie direkt aus der App an.",
          ],
          bullets: [
            "Schichten Früh / Spät / Nacht parallel",
            "Mindestruhezeiten automatisch geprüft",
            "Vertretungs-Engine mit Qualifikations-Matching",
            "Push-Benachrichtigung an Mitarbeiter ohne WhatsApp-Spam",
          ],
        },
        {
          eyebrow: "Sicherheitsprotokolle",
          heading: "Schulungsstand, PSA, Hygiene-Check – alles nachweisbar.",
          body: [
            "Bei der Industriereinigung – etwa in Lebensmittelproduktion, Pharma oder Chemie – gibt es strenge Vorgaben zu PSA, Schulung, Reinigungsmittel und Hygiene. Taskey hinterlegt pro Mitarbeiter den aktuellen Schulungsstand und blockiert automatisch Einsätze, für die der Mitarbeiter nicht qualifiziert ist.",
            "Pro Einsatz dokumentieren Sie die verwendete PSA, das eingesetzte Reinigungsmittel inklusive Chargennummer und ggf. Temperaturmessungen. Auf Wunsch mit digitaler Unterschrift des Schichtleiters.",
          ],
        },
        {
          eyebrow: "Auftraggeber-Reporting",
          heading: "Monatsbericht ohne Wochenend-Marathon.",
          body: [
            "Industrie-Auftraggeber wollen Monatsberichte mit Stundenlisten, Reinigungsprotokollen, eingesetzten Materialien und Beanstandungen. Aus Taskey heraus generieren Sie diesen Bericht mit zwei Klicks – inklusive Branding und Unterschriften.",
            "Auf Wunsch automatisch am Monatsersten als signiertes PDF per E-Mail an den Auftraggeber. Sie sparen Stunden manueller Arbeit jeden Monat.",
          ],
        },
        {
          eyebrow: "Lohnbuchhaltung",
          heading: "Komplexe Tarife – einfach abgerechnet.",
          body: [
            "Industriereinigung hat oft komplexe Tarifstrukturen: Schichtzuschläge, Sonntags- und Feiertagszuschläge, Nachtarbeit, Erschwerniszulagen. Taskey berechnet diese automatisch nach Ihrem hinterlegten Tarifmodell und exportiert die Lohndaten DATEV-fertig.",
            "Ihr Steuerberater bekommt eine Datei pro Monat, die direkt importiert wird – keine Excel-Listen, keine Rückfragen.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Kann Taskey komplexe Schichttarife abbilden?",
          answer:
            "Ja. Sie hinterlegen pro Mitarbeiter oder Mitarbeitergruppe Tarif, Zuschläge und Zulagen. Taskey berechnet automatisch beim Lohnexport.",
        },
        {
          question: "Wie wird der Schulungsstand jedes Mitarbeiters gepflegt?",
          answer:
            "Pro Mitarbeiter pflegen Sie Schulungen mit Gültigkeitsdaten. Läuft eine Schulung ab, wird der Mitarbeiter automatisch aus entsprechenden Einsätzen herausgeplant und Sie bekommen eine Erinnerung zur Nachschulung.",
        },
        {
          question: "Lassen sich Reinigungsmittel-Chargen pro Einsatz dokumentieren?",
          answer:
            "Ja. Pro Einsatz wählen Sie das verwendete Mittel und ggf. die Chargennummer aus einer Liste. Bei Lebensmittel- oder Pharmaproduktion ist das oft Audit-Voraussetzung.",
        },
        {
          question: "Können externe Auditoren ein Read-Only-Login bekommen?",
          answer:
            "Ja. Sie geben einem Auditor zeitlich begrenzten Lesezugriff auf relevante Objekte und Zeiträume – ohne ihm Ihr System zu öffnen.",
        },
        {
          question: "Was, wenn ich 24/7 in mehreren Werken parallel reinige?",
          answer:
            "Taskey skaliert auf beliebig viele Werke und Schichten. Sie können Werke nach Standort, Auftraggeber oder Kostenstelle organisieren und separate Auswertungen fahren.",
        },
      ]}
      related={[
        {
          href: "/einsatzplanung-reinigung",
          label: "Einsatzplanung Reinigung",
          description: "Schichten im 3-Schicht-Betrieb professionell planen.",
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: "Leistungsnachweis Gebäudereinigung",
          description: "Audit-fester Nachweis pro Einsatz.",
        },
        {
          href: "/enterprise",
          label: "Enterprise-Tarif",
          description: "Für Industriebetriebe mit 50+ Mitarbeitenden und API-Bedarf.",
        },
      ]}
    />
  );
}
