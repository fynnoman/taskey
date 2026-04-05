import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Subunternehmer Einsatzplanung – Taskey',
  description: 'Einsatzplanung für Subunternehmer digitalisieren. Taskey koordiniert die Einsätze aller Nachunternehmer auf Ihren Baustellen.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/subunternehmer-einsatzplanung' },
};

const data: LandingPageData = {
  badge: 'Sub-Einsatzplanung',
  headline: 'Einsatzplanung für',
  headlineHighlight: 'Subunternehmer',
  subheadline: 'Alle Subs zur richtigen Zeit am richtigen Ort.',
  heroDescription: 'Wenn mehrere Subunternehmer auf einer Baustelle arbeiten, ist Timing alles. Taskey koordiniert die Einsätze aller Subs – damit keine Wartezeiten entstehen.',
  painPoints: [
    { text: 'Subs warten aufeinander – teure Leerlaufzeiten.' },
    { text: 'Koordination per Telefon ist aufwändig und fehleranfällig.' },
    { text: 'Terminüberschneidungen auf der Baustelle.' },
    { text: 'Kein Überblick, welcher Sub wann auf welcher Baustelle ist.' },
  ],
  solutionTitle: 'Sub-Einsätze digital koordinieren',
  solutionDescription: 'Taskey gibt Ihnen den Überblick über alle Subunternehmer-Einsätze.',
  solutionSteps: [
    { title: 'Einsätze planen', description: 'Subunternehmer den Baustellen und Zeiträumen zuordnen.' },
    { title: 'Subs informieren', description: 'Alle Subs erhalten ihre Einsatzpläne automatisch.' },
    { title: 'Flexibel umplanen', description: 'Bei Änderungen sofort umplanen und alle informieren.' },
  ],
  ctaText: 'Jetzt Sub-Einsätze koordinieren',
  featureHighlights: [
    { title: 'Einsatzkalender', description: 'Alle Sub-Einsätze in einem übersichtlichen Kalender.' },
    { title: 'Abhängigkeiten', description: 'Gewerke-Reihenfolgen berücksichtigen bei der Planung.' },
    { title: 'Automatische Benachrichtigung', description: 'Subs werden automatisch über ihre Einsätze informiert.' },
    { title: 'Konflikt-Warnung', description: 'Automatisch gewarnt bei Terminüberschneidungen.' },
    { title: 'Auslastungsübersicht', description: 'Einsatztage pro Sub und Baustelle auf einen Blick.' },
    { title: 'Einsatzbestätigung', description: 'Subs bestätigen ihre Einsätze digital.' },
  ],
  closingHeadline: 'Perfekte Koordination – auch mit Subs.',
  closingText: 'Taskey macht die Einsatzplanung Ihrer Subunternehmer reibungslos.',
  relatedLinks: [
      {
          href: '/loesungen/subunternehmer-verwalten-bau',
          label: 'Subunternehmer verwalten',
          description: 'Alle Subunternehmer zentral verwalten und koordinieren.'
      },
      {
          href: '/loesungen/nachunternehmer-koordinieren-software',
          label: 'Nachunternehmer koordinieren',
          description: 'Mehrere Nachunternehmer effizient auf Projekten koordinieren.'
      },
      {
          href: '/loesungen/fremdleistungen-abrechnen-bau',
          label: 'Fremdleistungen abrechnen',
          description: 'Eingeplante Subunternehmerleistungen korrekt abrechnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
