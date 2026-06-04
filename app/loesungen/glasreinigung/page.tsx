import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/loesungen/glasreinigung";

export const metadata: Metadata = {
  title: "Software für Glasreinigung | Touren, Nachweise, Rechnungen | Taskey",
  description:
    "Reinigungssoftware für Glasreinigung: Tourenplanung, NFC-Nachweise pro Objekt, Rechnungen und Auftraggeber-Portal. DSGVO-konform, Made in Germany.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Software für Glasreinigung | Touren, Nachweise, Rechnungen | Taskey",
    description:
      "Tourenplanung, NFC-Nachweise pro Objekt, Rechnungen und Auftraggeber-Portal für Glasreinigung.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Software für Glasreinigung mit Taskey" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für Glasreinigung | Taskey",
    description: "Touren, Nachweise und Rechnungen für die Glasreinigung.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Glasreinigung"
      eyebrow="Branche · Glasreinigung"
      h1="Software für Glasreinigung —"
      h1Accent="Touren, Nachweise, Rechnungen."
      lead="Glasreinigung ist Tourengeschäft: viele kleine Objekte, enge Zeitfenster, oft mehrere Kolonnen parallel. Taskey gibt Ihnen die Werkzeuge, um Touren effizient zu planen, jeden Glasfassaden-Einsatz nachweissicher zu dokumentieren und sofort abzurechnen."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/glasreinigung" },
        { name: "Glasreinigung", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Tourenplanung",
          heading: "Die richtige Reihenfolge, der richtige Mitarbeiter, das richtige Werkzeug.",
          body: [
            "In der Glasreinigung entscheidet die Tourenplanung über die Marge. Wer pro Tag 12 Objekte schafft statt 8, verdient ein Drittel mehr – ohne Mehrarbeit. Taskey hilft Ihnen, Touren nach Postleitzahl, Höhenstufe und Werkzeug-Bedarf optimal zu schneiden.",
            "Jeder Mitarbeiter sieht seine Tour live auf dem Handy – inklusive Anfahrt, Sonderausrüstung (Leiter, Teleskopstange, Hubsteiger), Schlüsselregelung und individueller Aufgaben pro Objekt.",
          ],
          bullets: [
            "Tourenoptimierung nach PLZ und Höhe",
            "Werkzeug- und Materialliste pro Tour",
            "Mobile-First für unterwegs",
            "Live-Statusupdate jedes Stopps",
          ],
        },
        {
          eyebrow: "Nachweis",
          heading: "Vorher/Nachher-Foto pro Fassade.",
          body: [
            "Bei der Glasreinigung ist der visuelle Nachweis besonders wichtig. Taskey ermöglicht pro Einsatz Vorher-Nachher-Fotos, die direkt im Objekt-Datensatz hinterlegt werden – signiert mit Zeitstempel, GPS und Mitarbeiter.",
            "Plus: NFC-Tag am Hauseingang erfasst Ankunft und Abreise – mit Pausen, Material- und Werkzeug-Logs. So entsteht ein lückenloser Nachweis, der auch bei Streit über Reinigungs-Intervalle vor Gericht hält.",
          ],
        },
        {
          eyebrow: "Sicherheitsdokumentation",
          heading: "Arbeitsschutz und Höhe – sauber dokumentiert.",
          body: [
            "Reinigung in Höhe ist Arbeitsschutz-Thema. Taskey dokumentiert pro Einsatz, welche PSA verwendet wurde, ob die Sicherheits-Checkliste durchlaufen wurde und welche Höhenklassen betroffen waren.",
            "Im Fall einer BG-Prüfung haben Sie jeden Einsatz lückenlos dokumentiert – inklusive Schulungsstand der eingesetzten Mitarbeitenden.",
          ],
        },
        {
          eyebrow: "Abrechnung",
          heading: "Sofort-Rechnung am Objekt – kein Papier mehr.",
          body: [
            "Wenn Sie etwa bei privaten Kunden direkt nach dem Einsatz kassieren möchten, erzeugt Taskey vor Ort eine Rechnung als PDF und versendet sie per E-Mail oder Druck-PDF. Zahlungseingänge können automatisch verbucht werden.",
            "Bei größeren Auftraggebern erzeugen Sie Monats- oder Quartalsabrechnungen mit Sammelposten – ebenfalls automatisch aus den Einsatzdaten heraus.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Kann Taskey auch Höhenklassen und Arbeitsschutz-Dokumentation abbilden?",
          answer:
            "Ja. Pro Einsatz oder pro Objekt hinterlegen Sie die relevante Höhenklasse, PSA-Anforderungen und Sicherheits-Checklisten. Die Dokumentation läuft mit jedem NFC-Tap automatisch mit.",
        },
        {
          question: "Geht das auch für Spezialaufträge wie Wintergärten oder Solarmodule?",
          answer:
            "Ja. Sie hinterlegen pro Objekt einen Reinigungstyp (Glasfassade, Wintergarten, Photovoltaik etc.) mit eigenen Vorgaben, Werkzeugen und Abrechnungsmodalitäten.",
        },
        {
          question: "Wie schaut die Tourenoptimierung aus?",
          answer:
            "Taskey schlägt eine sinnvolle Reihenfolge nach Postleitzahl, Höhenklasse und Werkzeug-Bedarf vor. Sie können die Tour per Drag-and-Drop manuell anpassen – die App berechnet Fahrtzeiten und Pausen.",
        },
        {
          question: "Können Privatkunden direkt am Objekt zahlen?",
          answer:
            "Mit der Sofort-Rechnung erzeugen Sie ein PDF, das der Kunde per E-Mail erhält. Zahlungseingänge per Überweisung können automatisch zugeordnet werden – Karten- oder Bargeldzahlung dokumentieren Sie als Vermerk.",
        },
        {
          question: "Sind Vorher-Nachher-Fotos manipulationssicher?",
          answer:
            "Ja. Fotos werden mit Zeitstempel, GPS-Position und Mitarbeiter-ID signiert und im Objekt-Datensatz versioniert abgelegt. Nachträgliche Änderungen sind nicht möglich.",
        },
      ]}
      related={[
        {
          href: "/software-gebaeudereinigung",
          label: "Software für Gebäudereinigung",
          description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
        },
        {
          href: "/einsatzplanung-reinigung",
          label: "Einsatzplanung Reinigung",
          description: "Touren in der Glasreinigung professionell planen und umplanen.",
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: "Leistungsnachweis Gebäudereinigung",
          description: "Vorher-Nachher-Fotos rechtssicher dokumentieren.",
        },
        {
          href: "/loesungen/industriereinigung",
          label: "Industriereinigung",
          description: "Wenn Höhe und Sicherheit besonders streng dokumentiert werden müssen.",
        },
      ]}
    />
  );
}
