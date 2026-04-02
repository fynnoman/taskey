import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Zettelwirtschaft abschaffen Handwerk – Taskey',
  description: 'Zettelwirtschaft im Handwerk abschaffen. Taskey digitalisiert Stundenzettel, Auftragszettel und Rapportzettel – alles in einer App.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/zettelwirtschaft-abschaffen-handwerk' },
};

const data: LandingPageData = {
  badge: 'Zettelwirtschaft adé',
  headline: 'Zettelwirtschaft im',
  headlineHighlight: 'Handwerk abschaffen',
  subheadline: 'Digital statt Papier – endgültig.',
  heroDescription: 'Stundenzettel, Rapportzettel, Auftragszettel, Bestellzettel – Schluss damit. Taskey ersetzt jeden Zettel durch eine digitale Lösung, die schneller, sicherer und übersichtlicher ist.',
  painPoints: [
    { text: 'Zettel gehen verloren, werden nass, sind unleserlich.' },
    { text: 'Im Büro stapeln sich die Zettel – keiner blickt mehr durch.' },
    { text: 'Zettel abtippen kostet jeden Tag wertvolle Zeit.' },
    { text: 'Wichtige Informationen fehlen, weil der Zettel weg ist.' },
  ],
  solutionTitle: 'Jeder Zettel – jetzt digital',
  solutionDescription: 'Taskey ersetzt jeden Zettel in Ihrem Betrieb durch eine einfache digitale Lösung.',
  solutionSteps: [
    { title: 'App statt Zettel', description: 'Stunden, Aufträge und Berichte direkt in der App erfassen.' },
    { title: 'Sofort verfügbar', description: 'Alle Daten sind sofort im Büro sichtbar – kein Warten auf Zettel.' },
    { title: 'Automatisch archiviert', description: 'Alles wird digital gespeichert – nichts geht mehr verloren.' },
  ],
  ctaText: 'Jetzt Zettelwirtschaft beenden',
  featureHighlights: [
    { title: 'Digitale Stundenzettel', description: 'Arbeitszeiten per App erfassen statt auf Papier.' },
    { title: 'Digitale Aufträge', description: 'Auftragsdetails digital verteilen und bearbeiten.' },
    { title: 'Foto statt Zettel', description: 'Dokumentation per Foto statt handschriftlicher Notizen.' },
    { title: 'Digitale Unterschrift', description: 'Kunden unterschreiben auf dem Smartphone – kein Papier nötig.' },
    { title: 'Sofort im Büro', description: 'Alle Daten sind sofort verfügbar – kein Einsammeln und Abtippen.' },
    { title: 'Umweltfreundlich', description: 'Weniger Papier, weniger Drucker – gut für die Umwelt und den Geldbeutel.' },
  ],
  closingHeadline: 'Der letzte Zettel ist geschrieben.',
  closingText: 'Taskey macht Ihren Betrieb papierlos – einfach, schnell und endgültig.',
  relatedLinks: [
      {
          href: '/loesungen/papierloses-buero-handwerk',
          label: 'Papierloses Büro',
          description: 'Vom Zettel zum papierlosen Büro – der nächste Schritt.'
      },
      {
          href: '/loesungen/digitalisierung-handwerksbetrieb',
          label: 'Digitalisierung Handwerk',
          description: 'Zettelwirtschaft abschaffen ist der erste Schritt zur Digitalisierung.'
      },
      {
          href: '/loesungen/rapportzettel-digital-handwerk',
          label: 'Rapportzettel digital',
          description: 'Auch Rapportzettel – digital statt auf Papier.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
