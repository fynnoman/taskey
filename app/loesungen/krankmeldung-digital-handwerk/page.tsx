import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Krankmeldung digital Handwerk – Taskey',
  description: 'Krankmeldungen im Handwerk digital verwalten. Taskey ermöglicht digitale Krankmeldungen und hilft bei der schnellen Ersatzplanung.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/krankmeldung-digital-handwerk' },
};

const data: LandingPageData = {
  badge: 'Digitale Krankmeldung',
  headline: 'Krankmeldungen im',
  headlineHighlight: 'Handwerk',
  subheadline: 'digital – schnell, einfach und mit Ersatzplanung.',
  heroDescription: 'Morgens um 6 ruft ein Mitarbeiter an: „Ich bin krank." Mit Taskey geht die Krankmeldung digital ein und die Umplanung startet sofort.',
  painPoints: [
    { text: 'Morgens anrufen und hoffen, dass jemand abnimmt – stressig für beide Seiten.' },
    { text: 'Krankmeldung kommt zu spät – die Baustelle ist schon ohne Ersatz gestartet.' },
    { text: 'Kein Überblick über Krankheitstage und Ausfallquoten.' },
    { text: 'Ersatzplanung per Telefon – ein morgendliches Chaos.' },
  ],
  solutionTitle: 'Krankmeldung per App – Ersatzplanung automatisch',
  solutionDescription: 'Taskey macht Krankmeldungen einfach und startet die Umplanung sofort.',
  solutionSteps: [
    { title: 'Krankmeldung senden', description: 'Mitarbeiter meldet sich mit einem Tap in der App krank.' },
    { title: 'Sofortige Benachrichtigung', description: 'Vorgesetzter wird sofort informiert und kann reagieren.' },
    { title: 'Ersatz planen', description: 'Taskey schlägt verfügbare Mitarbeiter als Ersatz vor.' },
  ],
  ctaText: 'Jetzt Krankmeldung digitalisieren',
  featureHighlights: [
    { title: 'Ein-Tap-Krankmeldung', description: 'Mitarbeiter melden sich mit einem Tap krank – kein Anruf nötig.' },
    { title: 'Sofort-Benachrichtigung', description: 'Vorgesetzte werden sofort per Push-Nachricht informiert.' },
    { title: 'Ersatzvorschläge', description: 'Taskey zeigt verfügbare Mitarbeiter für die Umplanung.' },
    { title: 'Ausfallstatistik', description: 'Krankheitstage pro Mitarbeiter und Zeitraum analysieren.' },
    { title: 'Kalender-Integration', description: 'Krankmeldungen werden automatisch im Einsatzplan berücksichtigt.' },
    { title: 'Dokumentation', description: 'Alle Krankmeldungen dokumentiert und archiviert.' },
  ],
  closingHeadline: 'Krankmeldung – digital statt Telefonkette.',
  closingText: 'Taskey macht Krankmeldungen einfach und startet die Ersatzplanung automatisch.',
  relatedLinks: [
      {
          href: '/loesungen/personalplanung-baufirma',
          label: 'Personalplanung',
          description: 'Bei Krankmeldungen sofort die Personalplanung anpassen.'
      },
      {
          href: '/loesungen/schichtplanung-reinigungsunternehmen',
          label: 'Schichtplanung',
          description: 'Krankmeldungen direkt in der Schichtplanung berücksichtigen.'
      },
      {
          href: '/loesungen/disposition-handwerk-software',
          label: 'Disposition',
          description: 'Ausfälle in der Disposition sofort kompensieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
