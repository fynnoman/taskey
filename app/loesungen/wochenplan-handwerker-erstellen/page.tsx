import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Wochenplan Handwerker erstellen – Taskey',
  description: 'Wochenpläne für Handwerker digital erstellen und verteilen. Taskey plant Aufträge, Termine und Teams für die gesamte Woche.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/wochenplan-handwerker-erstellen' },
};

const data: LandingPageData = {
  badge: 'Wochenplanung',
  headline: 'Wochenpläne für',
  headlineHighlight: 'Handwerker',
  subheadline: 'Die ganze Woche im Griff – digital geplant.',
  heroDescription: 'Montag bis Freitag durchgeplant: Taskey erstellt Wochenpläne für Ihre Teams mit allen Aufträgen, Baustellen und Terminen – übersichtlich und jederzeit anpassbar.',
  painPoints: [
    { text: 'Wochenpläne werden freitags handschriftlich erstellt und abfotografiert.' },
    { text: 'Montags ist der Plan schon überholt – kurzfristige Änderungen.' },
    { text: 'Mitarbeiter kennen nur den nächsten Tag, nicht die ganze Woche.' },
    { text: 'Planung kostet jeden Freitag Stunden – Zeit, die fehlt.' },
  ],
  solutionTitle: 'Wochenplanung in Minuten statt Stunden',
  solutionDescription: 'Taskey macht die Wochenplanung einfach und flexibel.',
  solutionSteps: [
    { title: 'Woche planen', description: 'Aufträge und Baustellen per Drag & Drop auf die Wochentage verteilen.' },
    { title: 'Teams zuweisen', description: 'Mitarbeiter und Fahrzeuge den einzelnen Einsätzen zuordnen.' },
    { title: 'Plan verteilen', description: 'Mit einem Klick den Wochenplan an alle Mitarbeiter senden.' },
  ],
  ctaText: 'Jetzt Wochenplanung vereinfachen',
  featureHighlights: [
    { title: 'Wochenübersicht', description: 'Alle Aufträge und Teams für die gesamte Woche auf einen Blick.' },
    { title: 'Flexible Anpassung', description: 'Änderungen jederzeit vornehmen – alle werden sofort informiert.' },
    { title: 'Mobiler Wochenplan', description: 'Jeder Mitarbeiter sieht seinen Plan für die ganze Woche.' },
    { title: 'Vorlagen', description: 'Wiederkehrende Wochenpläne als Vorlage speichern und wiederverwenden.' },
    { title: 'Auslastungscheck', description: 'Sehen, ob alle Mitarbeiter gleichmäßig eingeplant sind.' },
    { title: 'PDF-Export', description: 'Wochenplan als PDF für Aushang oder E-Mail-Versand exportieren.' },
  ],
  closingHeadline: 'Die ganze Woche – perfekt geplant.',
  closingText: 'Taskey macht Ihre Wochenplanung schneller, flexibler und transparenter.',
  relatedLinks: [
      {
          href: '/loesungen/terminplanung-handwerker',
          label: 'Terminplanung',
          description: 'Termine als Grundlage für den perfekten Wochenplan.'
      },
      {
          href: '/loesungen/disposition-handwerk-software',
          label: 'Disposition',
          description: 'Disponierte Aufträge automatisch in den Wochenplan übernehmen.'
      },
      {
          href: '/loesungen/einsatzplanung-monteure',
          label: 'Einsatzplanung',
          description: 'Monteure im Wochenplan den richtigen Einsätzen zuordnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
