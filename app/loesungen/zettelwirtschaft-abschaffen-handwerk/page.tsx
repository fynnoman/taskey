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
    { icon: '📝', text: 'Zettel gehen verloren, werden nass, sind unleserlich.' },
    { icon: '📂', text: 'Im Büro stapeln sich die Zettel – keiner blickt mehr durch.' },
    { icon: '⏳', text: 'Zettel abtippen kostet jeden Tag wertvolle Zeit.' },
    { icon: '❌', text: 'Wichtige Informationen fehlen, weil der Zettel weg ist.' },
  ],
  solutionTitle: 'Jeder Zettel – jetzt digital',
  solutionDescription: 'Taskey ersetzt jeden Zettel in Ihrem Betrieb durch eine einfache digitale Lösung.',
  solutionSteps: [
    { icon: '📱', title: 'App statt Zettel', description: 'Stunden, Aufträge und Berichte direkt in der App erfassen.' },
    { icon: '☁️', title: 'Sofort verfügbar', description: 'Alle Daten sind sofort im Büro sichtbar – kein Warten auf Zettel.' },
    { icon: '📁', title: 'Automatisch archiviert', description: 'Alles wird digital gespeichert – nichts geht mehr verloren.' },
  ],
  ctaText: 'Jetzt Zettelwirtschaft beenden',
  featureHighlights: [
    { icon: '⏱️', title: 'Digitale Stundenzettel', description: 'Arbeitszeiten per App erfassen statt auf Papier.' },
    { icon: '📋', title: 'Digitale Aufträge', description: 'Auftragsdetails digital verteilen und bearbeiten.' },
    { icon: '📸', title: 'Foto statt Zettel', description: 'Dokumentation per Foto statt handschriftlicher Notizen.' },
    { icon: '✍️', title: 'Digitale Unterschrift', description: 'Kunden unterschreiben auf dem Smartphone – kein Papier nötig.' },
    { icon: '📤', title: 'Sofort im Büro', description: 'Alle Daten sind sofort verfügbar – kein Einsammeln und Abtippen.' },
    { icon: '🌍', title: 'Umweltfreundlich', description: 'Weniger Papier, weniger Drucker – gut für die Umwelt und den Geldbeutel.' },
  ],
  closingHeadline: 'Der letzte Zettel ist geschrieben.',
  closingText: 'Taskey macht Ihren Betrieb papierlos – einfach, schnell und endgültig.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
