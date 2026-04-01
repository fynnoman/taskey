import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Überstunden verwalten Handwerksbetrieb | Taskey',
  description: 'Überstunden im Handwerksbetrieb automatisch verwalten: Echtzeitkonten, gesetzeskonforme Berechnung, transparente Übersichten. Jetzt testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/ueberstunden-verwalten-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Überstunden verwalten',
  headline: 'Überstunden im Griff –',
  headlineHighlight: 'automatisch, fair, transparent.',
  subheadline: 'Jeder Mitarbeiter sieht sein Stundenkonto. Du behältst den Überblick.',
  heroDescription: 'Taskey berechnet Überstunden automatisch auf Basis der erfassten Arbeitszeiten. Kein manuelles Zählen, keine Streitigkeiten, volle Transparenz.',
  painPoints: [
    { icon: '🤷', text: 'Keiner weiß genau, wie viele Überstunden auf dem Konto sind.' },
    { icon: '😤', text: 'Mitarbeiter beschweren sich über falsche Überstundenabrechnung.' },
    { icon: '📊', text: 'Excel-Listen sind fehleranfällig und immer veraltet.' },
    { icon: '⚖️', text: 'Bei Kündigung gibt es Streit über Überstunden-Ansprüche.' },
  ],
  solutionTitle: 'Überstunden? Berechnet sich von allein.',
  solutionDescription: 'Arbeitszeit erfassen → Soll/Ist-Abgleich → Überstundenkonto aktuell.',
  solutionSteps: [
    { icon: '⏰', title: 'Sollzeiten definieren', description: 'Lege die reguläre Arbeitszeit pro Mitarbeiter fest – Taskey erledigt den Rest.' },
    { icon: '📊', title: 'Automatischer Abgleich', description: 'Erfasste Zeiten werden mit Sollzeiten verglichen. Überstunden werden automatisch berechnet.' },
    { icon: '📱', title: 'Transparente Konten', description: 'Jeder Mitarbeiter sieht sein aktuelles Überstundenkonto in der App.' },
  ],
  ctaText: 'Überstunden automatisieren',
  featureHighlights: [
    { icon: '📊', title: 'Live-Konten', description: 'Überstundenkonten werden in Echtzeit aktualisiert.' },
    { icon: '⚖️', title: 'Gesetzeskonform', description: 'Berücksichtigung von Pausenregelungen und Maximalarbeitszeiten.' },
    { icon: '📱', title: 'Mitarbeiter-Zugang', description: 'Jeder Mitarbeiter sieht sein Konto in der App.' },
    { icon: '🔔', title: 'Warnungen', description: 'Automatische Warnung bei Überschreitung von Höchstarbeitszeiten.' },
    { icon: '📤', title: 'Export', description: 'Überstundenübersichten als CSV für die Lohnbuchhaltung.' },
    { icon: '📅', title: 'Abbau planen', description: 'Überstundenabbau durch Freizeitausgleich planen und dokumentieren.' },
  ],
  closingHeadline: 'Überstunden? Automatisch im Griff.',
  closingText: 'Starte jetzt und beende den Überstunden-Streit in deinem Betrieb.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
