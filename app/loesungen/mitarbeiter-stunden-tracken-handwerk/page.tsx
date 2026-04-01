import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Mitarbeiter Stunden tracken im Handwerk | Taskey',
  description: 'Mitarbeiter-Stunden im Handwerk tracken: Per App, GPS und NFC. Automatische Stundenübersichten, Überstundenberechnung. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/mitarbeiter-stunden-tracken-handwerk' },
};

const data: LandingPageData = {
  badge: 'Stunden tracken',
  headline: 'Mitarbeiter-Stunden tracken –',
  headlineHighlight: 'in Echtzeit, nicht im Nachhinein.',
  subheadline: 'Sieh live, wer arbeitet, wer Pause macht und wer Überstunden aufbaut.',
  heroDescription: 'Mit Taskey trackst du die Arbeitszeiten aller Mitarbeiter automatisch. Kein Hinterhertelefonieren, kein Rätselraten – klare Zahlen, sofort verfügbar.',
  painPoints: [
    { icon: '📞', text: 'Du rufst Monteure an, um zu fragen, wie lange sie gearbeitet haben.' },
    { icon: '🤷', text: 'Überstundenkonten sind unklar – jeder hat eine andere Zahl im Kopf.' },
    { icon: '📝', text: 'Stundenzettel werden erst am Freitag abgegeben – mit geschätzten Zeiten.' },
    { icon: '💸', text: 'Du bezahlst Stunden, die nie gearbeitet wurden – ohne es zu merken.' },
  ],
  solutionTitle: 'Echtzeit-Tracking. Null Aufwand.',
  solutionDescription: 'Deine Mitarbeiter stempeln sich per App ein – du siehst alles live.',
  solutionSteps: [
    { icon: '📱', title: 'Ein Tap zum Stempeln', description: 'Mitarbeiter öffnen die App und tippen auf „Einstempeln". Fertig. Keine Zettel, keine Formulare.' },
    { icon: '📍', title: 'Live-Übersicht', description: 'Du siehst in Echtzeit, wer gerade arbeitet, wo er ist und seit wann.' },
    { icon: '📊', title: 'Automatische Reports', description: 'Wöchentliche und monatliche Übersichten – automatisch generiert.' },
  ],
  ctaText: 'Stunden jetzt digital tracken',
  featureHighlights: [
    { icon: '⏱️', title: 'Live-Zeitübersicht', description: 'Sieh auf einen Blick, welcher Mitarbeiter gerade arbeitet.' },
    { icon: '📊', title: 'Überstundenkonten', description: 'Automatische Berechnung von Überstunden pro Mitarbeiter.' },
    { icon: '🔔', title: 'Erinnerungen', description: 'Automatische Erinnerung an Mitarbeiter, die vergessen haben zu stempeln.' },
    { icon: '📋', title: 'Fehlzeitenmanagement', description: 'Urlaub, Krankheit, Feiertage – alles an einem Ort.' },
    { icon: '📱', title: 'Offline-fähig', description: 'Die App funktioniert auch ohne Internet – Daten werden synchronisiert.' },
    { icon: '🔒', title: 'Manipulationsschutz', description: 'Zeiten können nicht nachträglich verändert werden.' },
  ],
  closingHeadline: 'Jede Stunde zählt. Jetzt auch bei dir.',
  closingText: 'Starte jetzt mit automatischem Stunden-Tracking – für deinen gesamten Betrieb.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
