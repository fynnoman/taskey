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
    { icon: '📋', text: 'Wochenpläne werden freitags handschriftlich erstellt und abfotografiert.' },
    { icon: '🔄', text: 'Montags ist der Plan schon überholt – kurzfristige Änderungen.' },
    { icon: '📱', text: 'Mitarbeiter kennen nur den nächsten Tag, nicht die ganze Woche.' },
    { icon: '⏳', text: 'Planung kostet jeden Freitag Stunden – Zeit, die fehlt.' },
  ],
  solutionTitle: 'Wochenplanung in Minuten statt Stunden',
  solutionDescription: 'Taskey macht die Wochenplanung einfach und flexibel.',
  solutionSteps: [
    { icon: '📅', title: 'Woche planen', description: 'Aufträge und Baustellen per Drag & Drop auf die Wochentage verteilen.' },
    { icon: '👥', title: 'Teams zuweisen', description: 'Mitarbeiter und Fahrzeuge den einzelnen Einsätzen zuordnen.' },
    { icon: '📱', title: 'Plan verteilen', description: 'Mit einem Klick den Wochenplan an alle Mitarbeiter senden.' },
  ],
  ctaText: 'Jetzt Wochenplanung vereinfachen',
  featureHighlights: [
    { icon: '📅', title: 'Wochenübersicht', description: 'Alle Aufträge und Teams für die gesamte Woche auf einen Blick.' },
    { icon: '🔄', title: 'Flexible Anpassung', description: 'Änderungen jederzeit vornehmen – alle werden sofort informiert.' },
    { icon: '📱', title: 'Mobiler Wochenplan', description: 'Jeder Mitarbeiter sieht seinen Plan für die ganze Woche.' },
    { icon: '📋', title: 'Vorlagen', description: 'Wiederkehrende Wochenpläne als Vorlage speichern und wiederverwenden.' },
    { icon: '📊', title: 'Auslastungscheck', description: 'Sehen, ob alle Mitarbeiter gleichmäßig eingeplant sind.' },
    { icon: '📤', title: 'PDF-Export', description: 'Wochenplan als PDF für Aushang oder E-Mail-Versand exportieren.' },
  ],
  closingHeadline: 'Die ganze Woche – perfekt geplant.',
  closingText: 'Taskey macht Ihre Wochenplanung schneller, flexibler und transparenter.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
