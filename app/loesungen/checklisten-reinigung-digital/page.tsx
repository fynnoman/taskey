import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Checklisten Reinigung digital | Taskey',
  description: 'Digitale Reinigungschecklisten: Aufgaben abhaken, Fotos machen, Qualität dokumentieren. Für Gebäudereinigungsfirmen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/checklisten-reinigung-digital' },
};

const data: LandingPageData = {
  badge: 'Reinigungschecklisten',
  headline: 'Checklisten für die Reinigung –',
  headlineHighlight: 'digital & nachweisbar.',
  subheadline: 'Was wurde gereinigt? Digitale Checklisten statt Zettel – nachvollziehbar für Kunden.',
  heroDescription: 'Taskey bietet digitale Reinigungschecklisten pro Objekt. Reinigungskräfte haken Aufgaben ab, machen Fotos und liefern so einen lückenlosen Qualitätsnachweis.',
  painPoints: [
    { text: 'Papier-Checklisten verschwinden oder werden pauschal abgehakt.' },
    { text: 'Kunden beschweren sich über Qualität – du hast keine Nachweise.' },
    { text: 'Objektleiter müssen vor Ort kontrollieren – kostet Zeit und Geld.' },
    { text: 'Welche Objekte haben Qualitätsprobleme? Keine Auswertung möglich.' },
  ],
  solutionTitle: 'Reinigungsqualität sichtbar machen.',
  solutionDescription: 'Digitale Checklisten mit Fotos – der Beweis, dass und wie gereinigt wurde.',
  solutionSteps: [
    { title: 'Checkliste anlegen', description: 'Erstelle individuelle Checklisten pro Objekt – Räume, Aufgaben, Häufigkeiten.' },
    { title: 'Abhaken & fotografieren', description: 'Reinigungskräfte haken Aufgaben ab und machen bei Bedarf Fotos.' },
    { title: 'Bericht automatisch', description: 'Automatischer Qualitätsbericht für den Kunden – als PDF oder in Echtzeit.' },
  ],
  ctaText: 'Checklisten digitalisieren',
  featureHighlights: [
    { title: 'Individuelle Checklisten', description: 'Erstelle Checklisten pro Objekt, Raum oder Reinigungsart.' },
    { title: 'Foto-Nachweise', description: 'Fotos direkt aus der Checkliste – mit Zeitstempel.' },
    { title: 'NFC-Start', description: 'Checkliste startet automatisch nach NFC-Scan am Objekt.' },
    { title: 'Qualitäts-Reports', description: 'Automatische Auswertung der Reinigungsqualität pro Objekt.' },
    { title: 'Mobil nutzbar', description: 'Funktioniert auf jedem Smartphone – auch offline.' },
    { title: 'Kunden-Reports', description: 'Automatische Berichte an Kunden per Mail.' },
  ],
  closingHeadline: 'Qualität nachweisen. Digital.',
  closingText: 'Starte jetzt und mach Reinigungsqualität sichtbar.',
  relatedLinks: [
      {
          href: '/loesungen/reinigungsplaene-digital-erstellen',
          label: 'Reinigungspläne digital',
          description: 'Checklisten als Teil umfassender Reinigungspläne.'
      },
      {
          href: '/loesungen/qualitaetskontrolle-gebaeudereinigung',
          label: 'Qualitätskontrolle',
          description: 'Checklisten als Werkzeug für die Qualitätskontrolle nutzen.'
      },
      {
          href: '/loesungen/leistungsnachweis-gebaeudereinigung',
          label: 'Leistungsnachweise',
          description: 'Abgehakte Checklisten als Leistungsnachweis verwenden.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
