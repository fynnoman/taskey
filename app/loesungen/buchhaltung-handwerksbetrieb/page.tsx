import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Buchhaltung Handwerksbetrieb einfach | Taskey',
  description: 'Einfache Buchhaltungsvorbereitung für Handwerksbetriebe: Einnahmen, Ausgaben, Steuerberater-Export. Kein Abtippen mehr. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/buchhaltung-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Buchhaltung Handwerk',
  headline: 'Buchhaltung –',
  headlineHighlight: 'einfach statt Albtraum.',
  subheadline: 'Alle Einnahmen und Ausgaben im Blick. Steuerberater-Export mit einem Klick.',
  heroDescription: 'Taskey macht die Buchhaltungsvorbereitung für Handwerksbetriebe einfach: Rechnungen, Stunden, Material – alles automatisch erfasst und exportierbar.',
  painPoints: [
    { text: 'Die Buchhaltung bleibt liegen – der Steuerberater wartet auf Belege.' },
    { text: 'Einnahmen und Ausgaben werden aus verschiedenen Quellen zusammengesucht.' },
    { text: 'Du weißt nicht, ob der Monat profitabel war – erst nach dem Steuerberater.' },
    { text: 'Die monatliche Buchhaltungsvorbereitung dauert einen ganzen Tag.' },
  ],
  solutionTitle: 'Buchhaltung, die sich fast selbst macht.',
  solutionDescription: 'Alles wird automatisch erfasst – du exportierst nur noch an den Steuerberater.',
  solutionSteps: [
    { title: 'Automatisch erfasst', description: 'Rechnungen, Stunden und Materialkosten werden automatisch dokumentiert.' },
    { title: 'Gewinn pro Auftrag', description: 'Sieh in Echtzeit, welche Aufträge profitabel sind.' },
    { title: 'Steuerberater-Export', description: 'Kompatible Exporte mit einem Klick – kein Abtippen mehr.' },
  ],
  ctaText: 'Buchhaltung vereinfachen',
  featureHighlights: [
    { title: 'Einnahmen/Ausgaben', description: 'Automatische Übersicht aller Einnahmen und Ausgaben.' },
    { title: 'Gewinn pro Auftrag', description: 'Echtzeit-Marge für jeden einzelnen Auftrag.' },
    { title: 'Steuerberater-Export', description: 'Daten direkt für den Steuerberater exportieren.' },
    { title: 'Rechnungsarchiv', description: 'Alle Rechnungen revisionssicher gespeichert.' },
    { title: 'Umsatzübersicht', description: 'Monatliche und jährliche Umsatzentwicklung.' },
    { title: 'GoBD-konform', description: 'Alle Belege nach deutschen Standards archiviert.' },
  ],
  closingHeadline: 'Buchhaltung? Erledigt.',
  closingText: 'Starte jetzt und spar dir den Buchhaltungs-Albtraum.',
  relatedLinks: [
      {
          href: '/loesungen/einnahmen-ausgaben-handwerker',
          label: 'Einnahmen & Ausgaben',
          description: 'Alle Einnahmen und Ausgaben Ihres Betriebs digital im Blick.'
      },
      {
          href: '/loesungen/rechnungsprogramm-handwerker',
          label: 'Rechnungsprogramm',
          description: 'Rechnungen schreiben und direkt in die Buchhaltung übernehmen.'
      },
      {
          href: '/loesungen/vorbereitung-steuerberater-handwerk',
          label: 'Steuerberater-Vorbereitung',
          description: 'Alle Unterlagen fertig aufbereitet für Ihren Steuerberater.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
