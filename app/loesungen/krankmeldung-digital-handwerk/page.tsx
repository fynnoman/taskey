import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Krankmeldung digital Handwerk – Taskey',
  description: 'Krankmeldungen im Handwerk digital verwalten. Taskey ermöglicht digitale Krankmeldungen und hilft bei der schnellen Ersatzplanung.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/krankmeldung-digital-handwerk' },
};

const data: LandingPageData = {
  badge: 'Digitale Krankmeldung',
  headline: 'Krankmeldungen im',
  headlineHighlight: 'Handwerk',
  subheadline: 'digital – schnell, einfach und mit Ersatzplanung.',
  heroDescription: 'Morgens um 6 ruft ein Mitarbeiter an: „Ich bin krank." Mit Taskey geht die Krankmeldung digital ein und die Umplanung startet sofort.',
  painPoints: [
    { icon: '📞', text: 'Morgens anrufen und hoffen, dass jemand abnimmt – stressig für beide Seiten.' },
    { icon: '⏳', text: 'Krankmeldung kommt zu spät – die Baustelle ist schon ohne Ersatz gestartet.' },
    { icon: '📋', text: 'Kein Überblick über Krankheitstage und Ausfallquoten.' },
    { icon: '🔄', text: 'Ersatzplanung per Telefon – ein morgendliches Chaos.' },
  ],
  solutionTitle: 'Krankmeldung per App – Ersatzplanung automatisch',
  solutionDescription: 'Taskey macht Krankmeldungen einfach und startet die Umplanung sofort.',
  solutionSteps: [
    { icon: '📱', title: 'Krankmeldung senden', description: 'Mitarbeiter meldet sich mit einem Tap in der App krank.' },
    { icon: '🔔', title: 'Sofortige Benachrichtigung', description: 'Vorgesetzter wird sofort informiert und kann reagieren.' },
    { icon: '🔄', title: 'Ersatz planen', description: 'Taskey schlägt verfügbare Mitarbeiter als Ersatz vor.' },
  ],
  ctaText: 'Jetzt Krankmeldung digitalisieren',
  featureHighlights: [
    { icon: '📱', title: 'Ein-Tap-Krankmeldung', description: 'Mitarbeiter melden sich mit einem Tap krank – kein Anruf nötig.' },
    { icon: '🔔', title: 'Sofort-Benachrichtigung', description: 'Vorgesetzte werden sofort per Push-Nachricht informiert.' },
    { icon: '👥', title: 'Ersatzvorschläge', description: 'Taskey zeigt verfügbare Mitarbeiter für die Umplanung.' },
    { icon: '📊', title: 'Ausfallstatistik', description: 'Krankheitstage pro Mitarbeiter und Zeitraum analysieren.' },
    { icon: '📅', title: 'Kalender-Integration', description: 'Krankmeldungen werden automatisch im Einsatzplan berücksichtigt.' },
    { icon: '📁', title: 'Dokumentation', description: 'Alle Krankmeldungen dokumentiert und archiviert.' },
  ],
  closingHeadline: 'Krankmeldung – digital statt Telefonkette.',
  closingText: 'Taskey macht Krankmeldungen einfach und startet die Ersatzplanung automatisch.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
