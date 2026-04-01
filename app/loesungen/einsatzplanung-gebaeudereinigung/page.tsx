import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Einsatzplanung Gebäudereinigung | Taskey',
  description: 'Einsatzplanung für Gebäudereinigung: Teams auf Objekte verteilen, Einsätze planen, Qualität dokumentieren. Digital & einfach. Jetzt testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/einsatzplanung-gebaeudereinigung' },
};

const data: LandingPageData = {
  badge: 'Einsatzplanung Reinigung',
  headline: 'Einsatzplanung für Gebäudereinigung –',
  headlineHighlight: 'smart & digital.',
  subheadline: 'Welches Team fährt wann zu welchem Objekt? Taskey plant es für dich.',
  heroDescription: 'Taskey ist die Einsatzplanungssoftware für Gebäudereiniger. Plane deine Teams, verwalte Objekte und dokumentiere Qualität – alles in einem System.',
  painPoints: [
    { icon: '📋', text: 'Einsatzpläne auf Papier sind morgens schon veraltet.' },
    { icon: '📞', text: 'Bei Krankheit musst du hektisch Ersatz suchen und alle informieren.' },
    { icon: '🏢', text: 'Kunden beschweren sich – du kannst nicht nachweisen, dass gereinigt wurde.' },
    { icon: '📊', text: 'Die Einsatzplanung frisst jeden Tag 2 Stunden Bürozeit.' },
  ],
  solutionTitle: 'Einsatzplanung in Minuten statt Stunden.',
  solutionDescription: 'Plane einmal, ändere bei Bedarf – alles wird automatisch kommuniziert.',
  solutionSteps: [
    { icon: '📅', title: 'Einsatzplan erstellen', description: 'Erstelle wiederkehrende Einsatzpläne für alle Objekte – einmal anlegen, dauerhaft nutzen.' },
    { icon: '🔄', title: 'Flexibel anpassen', description: 'Krankheit, Sondereinsatz, neues Objekt? Ändere den Plan – Teams werden sofort informiert.' },
    { icon: '✅', title: 'Qualität sichern', description: 'Checklisten, Fotos und NFC-Scans belegen, dass und wie gereinigt wurde.' },
  ],
  ctaText: 'Einsatzplanung testen',
  featureHighlights: [
    { icon: '📅', title: 'Wochenpläne', description: 'Übersichtliche Wochenpläne für jedes Team und jedes Objekt.' },
    { icon: '🏷️', title: 'NFC-Nachweise', description: 'NFC-Tags an Objekten belegen die Anwesenheit der Reinigungskraft.' },
    { icon: '📋', title: 'Checklisten', description: 'Was wurde gereinigt? Digitale Checklisten pro Objekt.' },
    { icon: '📸', title: 'Fotodokumentation', description: 'Fotos als Qualitätsnachweis – mit Zeitstempel.' },
    { icon: '🔔', title: 'Vertretungsmanagement', description: 'Schnell Ersatz finden bei Krankheit oder Ausfall.' },
    { icon: '📊', title: 'Auslastungsberichte', description: 'Wer arbeitet wie viel? Auslastung pro Team im Blick.' },
  ],
  closingHeadline: 'Einsatzplanung, die funktioniert.',
  closingText: 'Starte jetzt und spare täglich 2 Stunden bei der Einsatzplanung.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
