import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/einsatzplanung-reinigung";

export const metadata: Metadata = {
  title:
    "Einsatzplanung Reinigung | Schichten, Touren, Vertretungen | Taskey",
  description:
    "Einsatzplanung für Reinigungsbetriebe: Schichten, Touren, Krankmeldungen und Vertretungen in Minuten umplanen. Live-Status pro Mitarbeiter und Objekt.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Einsatzplanung Reinigung | Schichten, Touren, Vertretungen | Taskey",
    description:
      "Schichten, Touren, Krankmeldungen und Vertretungen in Minuten umplanen. Live-Status pro Mitarbeiter und Objekt.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Einsatzplanung in der Gebäudereinigung mit Taskey" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Einsatzplanung Reinigung | Schichten, Touren, Vertretungen | Taskey",
    description: "Schichten, Touren und Vertretungen in Minuten umplanen.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Einsatzplanung Reinigung"
      eyebrow="Pillar · Einsatzplanung"
      h1="Einsatzplanung für Reinigungsbetriebe —"
      h1Accent="Schichten, Touren, Vertretungen."
      lead="Wer in der Gebäudereinigung mit Excel oder WhatsApp plant, verliert Zeit, Marge und Nerven. Taskey gibt Ihnen einen Live-Plan über alle Objekte, Schichten und Touren – mit automatischen Vertretungsvorschlägen, Mobil-Sync und integrierter Zeiterfassung."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Einsatzplanung Reinigung", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Problem",
          heading: "Excel, WhatsApp und Anrufe sind keine Einsatzplanung.",
          intro:
            "Die meisten Reinigungsbetriebe planen ihre Mitarbeitenden in einer Tabelle, kommunizieren Änderungen per WhatsApp und merken bei Krankheit erst dann, dass jemand fehlt, wenn der Auftraggeber sich beschwert.",
          body: [
            "Das Problem dabei: Niemand hat eine einzige verlässliche Quelle. Die Disposition pflegt Excel, der Vorarbeiter hat eine andere Version, das Team hat einen WhatsApp-Stand von gestern und der Auftraggeber bekommt – wenn überhaupt – einen Wochenplan per Mail. Spätestens bei der ersten Krankmeldung läuft alles auseinander.",
            "Hinzu kommt: Excel rechnet keine Fahrtzeiten, kein Mindestpausen, keine Doppelbesetzungen und keine Überstunden. Was auf dem Plan steht, hat oft wenig mit dem zu tun, was am Ende des Monats abgerechnet werden kann.",
          ],
        },
        {
          eyebrow: "Lösung",
          heading: "Ein Plan. Live. Für alle.",
          intro:
            "Taskey ist Ihre zentrale Disposition. Sie planen pro Objekt, pro Schicht oder pro Tour – die App spielt die jeweils relevanten Einsätze automatisch auf das Handy jedes Mitarbeiters.",
          subsections: [
            {
              heading: "Drag-and-drop pro Woche oder Tag",
              body:
                "Mitarbeiter, Objekt, Zeitfenster – per Maus oder Touch zuweisen. Konflikte (Doppelbelegung, Mindestpause unterschritten, Mitarbeiter krank) werden sofort markiert.",
            },
            {
              heading: "Wiederkehrende Touren",
              body:
                "Ein Reinigungsvertrag mit 3 × pro Woche, immer dienstags und donnerstags zwischen 6 und 9 Uhr? Einmal anlegen, monatelang automatisch planen. Änderungen bei Feiertagen oder Urlaub werden automatisch vorgeschlagen.",
            },
            {
              heading: "Vertretungs-Engine",
              body:
                "Krankmeldung um 5:00 Uhr? Taskey schlägt automatisch verfügbare Mitarbeiter vor, basierend auf Qualifikation, Wohnort und aktuellem Auslastungsgrad. Mit einem Klick anpingen, Vertretung bestätigen – fertig.",
            },
            {
              heading: "Live-Status der Einsätze",
              body:
                "Auf einem Blick: Wer ist eingecheckt, wer fehlt, wo läuft etwas aus dem Ruder? Ampelfarben pro Objekt und Mitarbeiter – inklusive automatischer Push-Benachrichtigung bei verspätetem Check-in.",
            },
          ],
        },
        {
          eyebrow: "Integration",
          heading: "Verbunden mit Zeiterfassung, Abrechnung und Auftraggeber.",
          body: [
            "Die Einsatzplanung in Taskey ist keine Insel. Aus jedem geplanten Einsatz wird automatisch eine Soll-Zeit, gegen die die Ist-Zeit über NFC abgeglichen wird. Abweichungen sehen Sie sofort – inklusive Marge pro Objekt.",
            "Wenn der Auftraggeber-Zugang (Taskey Share) aktiviert ist, sieht der Kunde nur seine eigenen Objekte und Einsätze – mit Live-Status, Nachweisen und Beanstandungs-Funktion. Das spart Anrufe und schafft Vertrauen.",
          ],
          bullets: [
            "Soll/Ist-Vergleich pro Objekt und Mitarbeiter",
            "Marge in Echtzeit pro Auftrag",
            "Auftraggeber-Zugang mit Live-Plan",
            "Automatische Stundenzettel und DATEV-Export",
            "Mobile-First: jeder Mitarbeiter sieht nur seine eigenen Einsätze",
            "Mehrsprachig – DE/TR/RU/PL/EN/FR",
          ],
        },
        {
          eyebrow: "Was Inhaber davon haben",
          heading: "Weniger Anrufe, höhere Marge, ruhigeres Wochenende.",
          body: [
            "Inhaber, die von Excel auf Taskey wechseln, berichten typischerweise: 60–80 % weniger Telefonate pro Woche, weil Mitarbeitende ihren Einsatzplan auf dem Handy sehen und automatisch Push-Erinnerungen bekommen.",
            "Zwischen 5 und 15 % höhere Marge pro Objekt, weil Stunden nicht mehr „verschwinden", Pausen korrekt erfasst werden und Über-/Unterbesetzungen sofort sichtbar sind.",
            "Und – das hört man besonders oft – das Wochenende gehört wieder der Familie statt Stundenzetteln.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Kann ich auch mehrere Kolonnen mit unterschiedlichen Tarifen planen?",
          answer:
            "Ja. Sie hinterlegen pro Mitarbeiter Qualifikation, Tarif und Verfügbarkeit. Die Planung berücksichtigt diese Faktoren automatisch und schlägt nur passende Personen vor.",
        },
        {
          question: "Wie kommen meine Mitarbeitenden an den aktuellen Plan?",
          answer:
            "Jeder Mitarbeitende hat die Taskey-App auf dem Handy und sieht nur seine eigenen Einsätze. Bei Änderungen kommt automatisch eine Push-Benachrichtigung. WhatsApp-Spam entfällt.",
        },
        {
          question: "Funktioniert das auch für 1-Mann-Betriebe oder erst ab einer bestimmten Größe?",
          answer:
            "Taskey lohnt sich ab dem ersten festen Mitarbeitenden. Auch Soloselbstständige nutzen die Planung als zentrale Übersicht für Touren, Auftraggeber und Termine.",
        },
        {
          question: "Wie schnell kann ich einen kompletten Plan auf Taskey umstellen?",
          answer:
            "Mit unserem Done-for-You Setup importieren wir Ihre Objekte, Mitarbeitenden und Schichten in 48 Stunden. Sie müssen keinen Plan abtippen.",
        },
        {
          question: "Gibt es eine Ansicht für Auftraggeber?",
          answer:
            "Ja, optional. Mit Taskey Share bekommt jeder Auftraggeber einen eigenen Login mit Live-Status der Einsätze für seine Objekte – ohne dass er andere Kunden sieht.",
        },
        {
          question: "Wie geht Taskey mit kurzfristigen Krankmeldungen um?",
          answer:
            "Die Krankmeldung wird im Chat oder über die App erfasst. Taskey schlägt automatisch verfügbare Vertretungen vor, sortiert nach Qualifikation und Nähe zum Objekt. Sie pingen mit einem Klick an.",
        },
      ]}
      related={[
        {
          href: "/zeiterfassung-gebaeudereinigung",
          label: "Zeiterfassung Gebäudereinigung",
          description: "Wie die geplante Soll-Zeit zur dokumentierten Ist-Zeit wird.",
        },
        {
          href: "/software-kleine-reinigungsfirma",
          label: "Software für kleine Reinigungsfirmen",
          description: "Auch ab 1 Mitarbeiter sinnvoll – nicht nur für Großbetriebe.",
        },
        {
          href: "/loesungen/unterhaltsreinigung",
          label: "Unterhaltsreinigung",
          description: "Wiederkehrende Touren sauber geplant – Woche für Woche.",
        },
      ]}
    />
  );
}
