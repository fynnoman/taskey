import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/nfc-zeiterfassung";

export const metadata: Metadata = {
  title: "NFC Zeiterfassung für Reinigungsfirmen | Ein Tap, alles dokumentiert | Taskey",
  description:
    "NFC Zeiterfassung speziell für Reinigungsfirmen: wetterfeste Tags am Objekt, automatischer Check-in per Smartphone, GPS und Offline-Sync. DSGVO-konform.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "NFC Zeiterfassung für Reinigungsfirmen | Ein Tap, alles dokumentiert | Taskey",
    description:
      "Wetterfeste NFC-Tags am Objekt, automatischer Check-in, GPS und Offline-Sync. DSGVO-konform.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/taskeycard.webp",
        width: 1200,
        height: 630,
        alt: "NFC-Tag von Taskey für die Zeiterfassung in Reinigungsbetrieben",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NFC Zeiterfassung für Reinigungsfirmen | Taskey",
    description: "Ein Tap am NFC-Tag, alles dokumentiert. DSGVO-konform, Made in Germany.",
    images: ["/taskeycard.webp"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="NFC Zeiterfassung"
      eyebrow="Pillar · NFC"
      h1="NFC Zeiterfassung für Reinigungsfirmen —"
      h1Accent="ein Tap, alles dokumentiert."
      lead="Stundenzettel sind tot. Mit NFC-Tags von Taskey halten Ihre Reinigungskräfte einfach das Smartphone an den Aufkleber am Objekt – Zeit, Standort, Mitarbeiter und Leistung werden automatisch protokolliert. Ohne App-Bedienung, ohne Passwort, ohne Schulung."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "NFC Zeiterfassung", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Wie es funktioniert",
          heading: "Drei Sekunden vom Tap zum Nachweis.",
          intro:
            "NFC (Near Field Communication) ist die gleiche Technik, die in jeder Bezahlkarte steckt. Ihr Mitarbeiter muss nicht einmal die App öffnen – das Handy erkennt den Tag automatisch und Taskey nimmt die Buchung vor.",
          subsections: [
            {
              heading: "1. Tag am Objekt anbringen",
              body:
                "Wetterfeste, manipulationssichere NFC-Aufkleber werden am Eingang, im Treppenhaus oder am Schlüsselkasten angebracht. Größe: ca. 3×5 cm. Hält über 5 Jahre, auch im Außenbereich.",
            },
            {
              heading: "2. Mitarbeiter hält Handy daran",
              body:
                "Ein kurzer Tap – das Smartphone erkennt den Tag, öffnet Taskey im Hintergrund und bucht die Zeit. Kein Passwort, keine App-Suche, keine Fingerabdruck-Eingabe nötig.",
            },
            {
              heading: "3. Taskey dokumentiert alles",
              body:
                "Zeitstempel, GPS-Standort, Mitarbeiter-ID, Objekt und Auftrag werden in einem manipulationssicheren Datensatz festgehalten. Sichtbar für Sie als Inhaber – nicht für die Konkurrenz.",
            },
            {
              heading: "4. Beim Verlassen erneut tappen",
              body:
                "Check-out mit demselben Tag. Die Differenz ist die abrechenbare Arbeitszeit. Pausen werden automatisch nach hinterlegtem Modell abgezogen.",
            },
          ],
        },
        {
          eyebrow: "Was ein NFC-Tag mehr kann",
          heading: "Nicht nur Zeit – auch Schlüssel, Touren und Räume.",
          intro:
            "Ein Tag am Eingang erfasst die Anwesenheit am Objekt. Mit mehreren Tags differenzieren Sie auf Raum-, Etagen- oder Schlüsselebene – ohne Mehraufwand für Ihr Team.",
          bullets: [
            "Tag pro Etage: lückenloser Rundgang-Beleg",
            "Tag am Schlüsselkasten: dokumentierte Schlüsselübergabe",
            "Tag am Werkzeug oder Wagen: Inventarkontrolle",
            "Tag am Sanitärbereich: separater Reinigungsnachweis für Auftraggeber",
            "Tag am Mülltonnenraum: Entsorgungsprotokoll",
            "Tag am Lagerraum: dokumentierter Materialverbrauch",
          ],
        },
        {
          eyebrow: "Hardware",
          heading: "Wetterfest, manipulationssicher, Made for Cleaning.",
          body: [
            "Taskey-NFC-Tags sind speziell für die Reinigungsbranche entwickelt. Sie überstehen Hochdruckreiniger, Frost, UV-Strahlung und Reinigungsmittel über Jahre. Beim Versuch, einen Tag abzulösen, wird der Sicherheitskleber zerstört – jede Manipulation ist sichtbar.",
            "Die Tags sind weltweit eindeutig codiert und werden bei Auslieferung in Ihrem Taskey-Account vorregistriert. Sie kleben sie nur noch am Objekt fest – fertig. Pro Objekt brauchen Sie in der Regel zwischen einem und fünf Tags, je nach Größe und Detailgrad der Dokumentation.",
            "Verloren oder beschädigt? Über den Account sperren Sie alte Tags und ordnen neue zu – in Minuten. Kein Hardware-Risiko, keine Lock-in-Falle.",
          ],
          bullets: [
            "ISO 14443 / NTAG 213/215 kompatibel",
            "Funktioniert mit jedem aktuellen iPhone und Android-Smartphone",
            "Lieferzeit 3–5 Werktage innerhalb DACH",
            "Kein Stromanschluss, keine Wartung",
          ],
        },
        {
          eyebrow: "Datenschutz",
          heading: "DSGVO-konform: kein heimliches Tracking.",
          body: [
            "Taskey erfasst Standortdaten nur im Moment des Taps – nicht dauerhaft im Hintergrund. Ihre Mitarbeitenden werden nicht permanent geortet. Der GPS-Punkt dient ausschließlich dazu, zu bestätigen, dass die Buchung tatsächlich am hinterlegten Objekt stattfand.",
            "Alle Daten liegen auf deutschen Servern, sind verschlüsselt übertragen und gespeichert, und der Auftragsverarbeitungsvertrag (AVV) liegt im Account zum Download bereit. Betriebsräte und Datenschutzbeauftragte erhalten ein vollständiges Konzept-Whitepaper auf Anfrage.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Welche Smartphones unterstützen die NFC-Zeiterfassung von Taskey?",
          answer:
            "Alle iPhones ab iPhone 7 und nahezu alle Android-Smartphones der letzten 8 Jahre haben NFC eingebaut. Taskey läuft auf iOS 14+ und Android 9+.",
        },
        {
          question: "Was kosten die NFC-Tags?",
          answer:
            "Die ersten Tags pro Objekt sind in jedem Tarif inklusive. Weitere Tags sind günstig nachbestellbar – konkret abhängig von der Menge. Sprechen Sie uns für ein individuelles Angebot an.",
        },
        {
          question: "Können Mitarbeitende den Tag von zuhause aus tappen und sich so Stunden ergaunern?",
          answer:
            "Nein. Jeder Tap wird zusätzlich mit dem GPS-Standort des Smartphones verifiziert. Wenn der Tap nicht am hinterlegten Objekt-Standort erfolgt, wird der Eintrag automatisch markiert und Ihnen als Verdachtsfall angezeigt.",
        },
        {
          question: "Was passiert, wenn ein NFC-Tag beschädigt oder gestohlen wird?",
          answer:
            "Sie sperren den alten Tag in Ihrem Taskey-Account und ordnen einen neuen zu. Der alte Tag liefert keine gültigen Buchungen mehr. Die Historie bleibt vollständig erhalten.",
        },
        {
          question: "Brauche ich pro Mitarbeiter einen eigenen Tag?",
          answer:
            "Nein. Die NFC-Tags sind am Objekt angebracht, nicht am Mitarbeiter. Der Mitarbeiter wird über sein Smartphone identifiziert. Das ist günstiger und kommt mit Personalwechsel besser zurecht.",
        },
        {
          question: "Was unterscheidet NFC-Zeiterfassung von QR-Code-Scans?",
          answer:
            "NFC ist schneller (kein App-Öffnen, keine Kamera nötig), funktioniert auch bei Dunkelheit, Schmutz oder Kondenswasser und ist deutlich manipulationssicherer. QR-Codes können fotografiert und nachträglich gescannt werden – NFC-Tags physisch nicht.",
        },
      ]}
      related={[
        {
          href: "/zeiterfassung-gebaeudereinigung",
          label: "Zeiterfassung Gebäudereinigung (Übersicht)",
          description: "Alle Wege, Arbeitszeit in der Reinigungsbranche rechtssicher zu erfassen.",
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: "Leistungsnachweis Gebäudereinigung",
          description: "Aus jedem NFC-Tap wird automatisch ein Nachweis für den Auftraggeber.",
        },
        {
          href: "/loesungen/unterhaltsreinigung",
          label: "Unterhaltsreinigung mit NFC",
          description: "Wie NFC in wiederkehrenden Reinigungsverträgen den Alltag verändert.",
        },
      ]}
    />
  );
}
