import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Terminplanung Handwerker – Digital & einfach | Taskey',
  description: 'Terminplanung für Handwerker: Kundentermine, Baustelleneinsätze und Mitarbeiter digital planen. Keine Doppelbuchungen mehr. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/terminplanung-handwerker' },
};

const data: LandingPageData = {
  badge: 'Terminplanung',
  headline: 'Termine planen –',
  headlineHighlight: 'ohne Doppelbuchung.',
  subheadline: 'Kundentermine, Baustelleneinsätze und Mitarbeiter – alles in einem Kalender.',
  heroDescription: 'Taskey macht Terminplanung einfach: Plane Einsätze, vermeide Konflikte und informiere dein Team automatisch – per App.',
  painPoints: [
    { text: 'Termine stehen im Papierkalender – bei Änderungen wird es unübersichtlich.' },
    { text: 'Doppelbuchungen passieren regelmäßig – Kunden sind sauer.' },
    { text: 'Mitarbeiter wissen morgens nicht, wohin sie müssen.' },
    { text: 'Vergessene Termine kosten dich Aufträge und Reputation.' },
  ],
  solutionTitle: 'Der digitale Terminplaner.',
  solutionDescription: 'Plane, ändere und informiere – alles automatisch, alles in Echtzeit.',
  solutionSteps: [
    { title: 'Termin erstellen', description: 'Neuer Termin in Sekunden – Kunde, Ort, Mitarbeiter, Dauer. Fertig.' },
    { title: 'Konflikte erkennen', description: 'Taskey warnt automatisch bei Doppelbuchungen oder Überlastung.' },
    { title: 'Team informieren', description: 'Mitarbeiter sehen ihre Termine in der App – Änderungen kommen sofort.' },
  ],
  ctaText: 'Terminplanung starten',
  featureHighlights: [
    { title: 'Kalenderansicht', description: 'Tages-, Wochen- und Monatsansicht für alle Mitarbeiter.' },
    { title: 'Konflikterkennung', description: 'Automatische Warnung bei Überschneidungen.' },
    { title: 'Push-Benachrichtigungen', description: 'Mitarbeiter werden sofort über neue Termine informiert.' },
    { title: 'Drag & Drop', description: 'Termine verschieben per Drag & Drop – schnell und intuitiv.' },
    { title: 'Routenoptimierung', description: 'Plane Termine in der richtigen Reihenfolge nach Entfernung.' },
    { title: 'Tagesplan versenden', description: 'Schicke den Tagesplan per Mail oder WhatsApp an dein Team.' },
  ],
  closingHeadline: 'Termine im Griff. Kunden zufrieden.',
  closingText: 'Starte jetzt und plane deine Termine digital.',
  relatedLinks: [
      {
          href: '/loesungen/wochenplan-handwerker-erstellen',
          label: 'Wochenplan erstellen',
          description: 'Termine zu Wochenplänen zusammenfassen und ans Team verteilen.'
      },
      {
          href: '/loesungen/disposition-handwerk-software',
          label: 'Disposition im Handwerk',
          description: 'Aufträge, Termine und Mitarbeiter effizient disponieren.'
      },
      {
          href: '/loesungen/einsatzplanung-monteure',
          label: 'Einsatzplanung Monteure',
          description: 'Monteure termingenau auf Aufträge und Baustellen einplanen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
