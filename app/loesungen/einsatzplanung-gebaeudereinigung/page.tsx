import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Einsatzplanung Gebäudereinigung | Taskey',
  description: 'Einsatzplanung für Gebäudereinigung: Teams auf Objekte verteilen, Einsätze planen, Qualität dokumentieren. Digital & einfach. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/einsatzplanung-gebaeudereinigung' },
};

const data: LandingPageData = {
  badge: 'Einsatzplanung Reinigung',
  headline: 'Einsatzplanung für Gebäudereinigung –',
  headlineHighlight: 'smart & digital.',
  subheadline: 'Welches Team fährt wann zu welchem Objekt? Taskey plant es für dich.',
  heroDescription: 'Taskey ist die Einsatzplanungssoftware für Gebäudereiniger. Plane deine Teams, verwalte Objekte und dokumentiere Qualität – alles in einem System.',
  painPoints: [
    { text: 'Einsatzpläne auf Papier sind morgens schon veraltet.' },
    { text: 'Bei Krankheit musst du hektisch Ersatz suchen und alle informieren.' },
    { text: 'Kunden beschweren sich – du kannst nicht nachweisen, dass gereinigt wurde.' },
    { text: 'Die Einsatzplanung frisst jeden Tag 2 Stunden Bürozeit.' },
  ],
  solutionTitle: 'Einsatzplanung in Minuten statt Stunden.',
  solutionDescription: 'Plane einmal, ändere bei Bedarf – alles wird automatisch kommuniziert.',
  solutionSteps: [
    { title: 'Einsatzplan erstellen', description: 'Erstelle wiederkehrende Einsatzpläne für alle Objekte – einmal anlegen, dauerhaft nutzen.' },
    { title: 'Flexibel anpassen', description: 'Krankheit, Sondereinsatz, neues Objekt? Ändere den Plan – Teams werden sofort informiert.' },
    { title: 'Qualität sichern', description: 'Checklisten, Fotos und NFC-Scans belegen, dass und wie gereinigt wurde.' },
  ],
  ctaText: 'Einsatzplanung testen',
  featureHighlights: [
    { title: 'Wochenpläne', description: 'Übersichtliche Wochenpläne für jedes Team und jedes Objekt.' },
    { title: 'NFC-Nachweise', description: 'NFC-Tags an Objekten belegen die Anwesenheit der Reinigungskraft.' },
    { title: 'Checklisten', description: 'Was wurde gereinigt? Digitale Checklisten pro Objekt.' },
    { title: 'Fotodokumentation', description: 'Fotos als Qualitätsnachweis – mit Zeitstempel.' },
    { title: 'Vertretungsmanagement', description: 'Schnell Ersatz finden bei Krankheit oder Ausfall.' },
    { title: 'Auslastungsberichte', description: 'Wer arbeitet wie viel? Auslastung pro Team im Blick.' },
  ],
  closingHeadline: 'Einsatzplanung, die funktioniert.',
  closingText: 'Starte jetzt und spare täglich 2 Stunden bei der Einsatzplanung.',
  relatedLinks: [
      {
          href: '/loesungen/schichtplanung-reinigungsunternehmen',
          label: 'Schichtplanung Reinigung',
          description: 'Einsätze in Schichtpläne überführen und Teams einteilen.'
      },
      {
          href: '/loesungen/tagesplanung-reinigungskraefte',
          label: 'Tagesplanung Reinigung',
          description: 'Den täglichen Einsatz Ihrer Reinigungskräfte optimal planen.'
      },
      {
          href: '/loesungen/tourenplanung-reinigungsteams',
          label: 'Tourenplanung',
          description: 'Reinigungsteams auf effiziente Touren zwischen Objekten schicken.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
