import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/loesungen/hotel-housekeeping";

export const metadata: Metadata = {
  title:
    "Hotel Housekeeping Software | Zimmer, Touren, Live-Status | Taskey",
  description:
    "Hotel Housekeeping Software: Zimmer-Touren in Echtzeit zuweisen, Live-Status pro Zimmer, NFC-Nachweise, Wäsche- und Material-Logs. DSGVO und Made in Germany.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Hotel Housekeeping Software | Zimmer, Touren, Live-Status | Taskey",
    description:
      "Zimmer-Touren in Echtzeit zuweisen, Live-Status pro Zimmer, NFC-Nachweise und Material-Logs.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Hotel Housekeeping Software mit Taskey" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Housekeeping Software | Taskey",
    description: "Zimmer, Touren und Live-Status für das Housekeeping.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Hotel Housekeeping"
      eyebrow="Branche · Hotel"
      h1="Hotel Housekeeping Software —"
      h1Accent="Zimmer, Touren, Live-Status."
      lead="In der Hotellerie zählt jede Minute zwischen Check-out und Check-in. Taskey gibt Housekeeping-Teams einen Live-Plan auf dem Handy: welches Zimmer ist frei, welches dringend, was wurde bereits erledigt – und die Rezeption sieht in Echtzeit, ob das Zimmer für den nächsten Gast bereit ist."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/hotel-housekeeping" },
        { name: "Hotel Housekeeping", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Workflow",
          heading: "Zimmer-Status in Echtzeit.",
          body: [
            "Jedes Zimmer hat in Taskey einen Status: Belegt, Check-out, In Reinigung, Bereit, Defekt. Das Housekeeping-Team aktualisiert den Status durch einen NFC-Tap an der Tür – die Rezeption sieht jede Änderung sofort.",
            "Das bedeutet: kein Anruf mehr ans Stockwerk, kein 'ist Zimmer 412 schon fertig?' über Funk – die Rezeption checkt den Gast direkt ein, sobald das Zimmer den Status 'Bereit' hat.",
          ],
          bullets: [
            "Live-Status pro Zimmer auf jedem Endgerät",
            "NFC-Tap an der Tür für Statuswechsel",
            "Rezeption sieht Bereit-Zimmer in Echtzeit",
            "Defekte werden direkt aus der App gemeldet",
          ],
        },
        {
          eyebrow: "Touren",
          heading: "Routen pro Housekeeping-Mitarbeiter, optimiert nach Auslastung.",
          body: [
            "Statt einer Papier-Liste pro Etage bekommt jeder Mitarbeiter seine persönliche Tour auf das Handy. Taskey berücksichtigt Auslastung, Sonderwünsche (Allergiker, VIP-Gäste, Re-Stay) und Stockwerks-Reihenfolge.",
            "Wenn sich kurzfristig etwas ändert – etwa weil ein Gast länger bleibt oder ein Last-Minute-Check-in eintrifft – passt sich die Tour automatisch an und der Mitarbeiter sieht die Änderung per Push.",
          ],
        },
        {
          eyebrow: "Wäsche und Material",
          heading: "Wäsche, Minibar, Amenities – ohne Excel.",
          body: [
            "Pro Zimmer dokumentieren Sie eingesetzte Wäschemenge, Minibar-Verbrauch und ausgegebene Amenities. Aus diesen Logs entstehen automatisch monatliche Verbrauchsberichte – für Einkauf und Controlling.",
            "Bei Auffälligkeiten (Wäscheverlust, ungewöhnlich hoher Verbrauch) bekommt die Hausdame eine Übersicht – ohne in Excel suchen zu müssen.",
          ],
        },
        {
          eyebrow: "PMS-Integration",
          heading: "Verbindung zu Ihrem Property Management System.",
          body: [
            "Taskey kann im Enterprise-Tarif mit Ihrem PMS (z.B. Apaleo, Mews, Protel) verbunden werden, sodass Check-outs und Check-ins automatisch in der Housekeeping-Planung berücksichtigt werden – ohne manuelles Update.",
            "Sprechen Sie uns an, wenn Sie ein konkretes PMS einsetzen – wir klären gemeinsam, was möglich ist.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Wie schnell sehe ich, ob ein Zimmer bereit für den nächsten Gast ist?",
          answer: "In Echtzeit. Sobald der Mitarbeiter den Status 'Bereit' setzt, sieht die Rezeption das Zimmer als verfügbar – ohne Telefonat, ohne Funk.",
        },
        {
          question: "Können Defekte oder Wartungsbedarf direkt gemeldet werden?",
          answer:
            "Ja. Aus der Reinigung heraus dokumentieren Mitarbeiter Defekte mit Foto und Beschreibung. Die Hausdame oder Haustechnik bekommt automatisch eine Benachrichtigung.",
        },
        {
          question: "Wie wird mit VIP- oder Stay-Over-Gästen umgegangen?",
          answer: "Pro Zimmer hinterlegen Sie Sonderwünsche (z.B. 'nur ohne Eintreten' für Stay-Over). Die App zeigt das dem Housekeeping vor dem Klopfen an.",
        },
        {
          question: "Lässt sich das mit unserem PMS verbinden?",
          answer:
            "Im Enterprise-Tarif ist eine PMS-Anbindung über API möglich – etwa mit Apaleo, Mews oder Protel. Sprechen Sie uns an, wir prüfen Ihre konkrete Konstellation.",
        },
        {
          question: "Geht das auch für kleine Hotels mit 20 Zimmern?",
          answer:
            "Ja. Taskey rechnet sich schon ab dem ersten Housekeeping-Mitarbeiter. Sie sparen Anrufe, Funkverkehr und Übergabe-Zeit.",
        },
      ]}
      related={[
        {
          href: "/einsatzplanung-reinigung",
          label: "Einsatzplanung Reinigung",
          description: "Touren live planen – auch wenn sich die Belegung ändert.",
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: "Leistungsnachweis Gebäudereinigung",
          description: "Nachweis pro Zimmer und Reinigungszyklus.",
        },
        {
          href: "/loesungen/klinikreinigung",
          label: "Klinikreinigung",
          description: "Verwandte Hygiene-Anforderungen für medizinische Reinigung.",
        },
      ]}
    />
  );
}
