import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Überstunden verwalten Handwerksbetrieb | Taskey',
  description: 'Überstunden im Handwerksbetrieb automatisch verwalten: Echtzeitkonten, gesetzeskonforme Berechnung, transparente Übersichten. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/ueberstunden-verwalten-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Überstunden verwalten',
  headline: 'Überstunden im Griff –',
  headlineHighlight: 'automatisch, fair, transparent.',
  subheadline: 'Jeder Mitarbeiter sieht sein Stundenkonto. Du behältst den Überblick.',
  heroDescription: 'Taskey berechnet Überstunden automatisch auf Basis der erfassten Arbeitszeiten. Kein manuelles Zählen, keine Streitigkeiten, volle Transparenz.',
  painPoints: [
    { text: 'Keiner weiß genau, wie viele Überstunden auf dem Konto sind.' },
    { text: 'Mitarbeiter beschweren sich über falsche Überstundenabrechnung.' },
    { text: 'Excel-Listen sind fehleranfällig und immer veraltet.' },
    { text: 'Bei Kündigung gibt es Streit über Überstunden-Ansprüche.' },
  ],
  solutionTitle: 'Überstunden? Berechnet sich von allein.',
  solutionDescription: 'Arbeitszeit erfassen → Soll/Ist-Abgleich → Überstundenkonto aktuell.',
  solutionSteps: [
    { title: 'Sollzeiten definieren', description: 'Lege die reguläre Arbeitszeit pro Mitarbeiter fest – Taskey erledigt den Rest.' },
    { title: 'Automatischer Abgleich', description: 'Erfasste Zeiten werden mit Sollzeiten verglichen. Überstunden werden automatisch berechnet.' },
    { title: 'Transparente Konten', description: 'Jeder Mitarbeiter sieht sein aktuelles Überstundenkonto in der App.' },
  ],
  ctaText: 'Überstunden automatisieren',
  featureHighlights: [
    { title: 'Live-Konten', description: 'Überstundenkonten werden in Echtzeit aktualisiert.' },
    { title: 'Gesetzeskonform', description: 'Berücksichtigung von Pausenregelungen und Maximalarbeitszeiten.' },
    { title: 'Mitarbeiter-Zugang', description: 'Jeder Mitarbeiter sieht sein Konto in der App.' },
    { title: 'Warnungen', description: 'Automatische Warnung bei Überschreitung von Höchstarbeitszeiten.' },
    { title: 'Export', description: 'Überstundenübersichten als CSV für die Lohnbuchhaltung.' },
    { title: 'Abbau planen', description: 'Überstundenabbau durch Freizeitausgleich planen und dokumentieren.' },
  ],
  closingHeadline: 'Überstunden? Automatisch im Griff.',
  closingText: 'Starte jetzt und beende den Überstunden-Streit in deinem Betrieb.',
  relatedLinks: [
      {
          href: '/loesungen/zeiterfassung-handwerk',
          label: 'Zeiterfassung im Handwerk',
          description: 'Die Basis: Erst Zeiten erfassen, dann Überstunden automatisch berechnen.'
      },
      {
          href: '/loesungen/lohnabrechnung-reinigungsfirma',
          label: 'Lohnabrechnung',
          description: 'Überstunden direkt in die Lohnvorbereitung übernehmen.'
      },
      {
          href: '/loesungen/mitarbeiter-stunden-tracken-handwerk',
          label: 'Mitarbeiter-Stunden tracken',
          description: 'Alle Stunden pro Mitarbeiter im Überblick – inklusive Überstundenkonten.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
