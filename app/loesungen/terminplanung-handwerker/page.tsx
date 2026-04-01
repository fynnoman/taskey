import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Terminplanung Handwerker – Digital & einfach | Taskey',
  description: 'Terminplanung für Handwerker: Kundentermine, Baustelleneinsätze und Mitarbeiter digital planen. Keine Doppelbuchungen mehr. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/terminplanung-handwerker' },
};

const data: LandingPageData = {
  badge: 'Terminplanung',
  headline: 'Termine planen –',
  headlineHighlight: 'ohne Doppelbuchung.',
  subheadline: 'Kundentermine, Baustelleneinsätze und Mitarbeiter – alles in einem Kalender.',
  heroDescription: 'Taskey macht Terminplanung einfach: Plane Einsätze, vermeide Konflikte und informiere dein Team automatisch – per App.',
  painPoints: [
    { icon: '📅', text: 'Termine stehen im Papierkalender – bei Änderungen wird es unübersichtlich.' },
    { icon: '🔄', text: 'Doppelbuchungen passieren regelmäßig – Kunden sind sauer.' },
    { icon: '📞', text: 'Mitarbeiter wissen morgens nicht, wohin sie müssen.' },
    { icon: '❌', text: 'Vergessene Termine kosten dich Aufträge und Reputation.' },
  ],
  solutionTitle: 'Der digitale Terminplaner.',
  solutionDescription: 'Plane, ändere und informiere – alles automatisch, alles in Echtzeit.',
  solutionSteps: [
    { icon: '📅', title: 'Termin erstellen', description: 'Neuer Termin in Sekunden – Kunde, Ort, Mitarbeiter, Dauer. Fertig.' },
    { icon: '⚠️', title: 'Konflikte erkennen', description: 'Taskey warnt automatisch bei Doppelbuchungen oder Überlastung.' },
    { icon: '📱', title: 'Team informieren', description: 'Mitarbeiter sehen ihre Termine in der App – Änderungen kommen sofort.' },
  ],
  ctaText: 'Terminplanung starten',
  featureHighlights: [
    { icon: '📅', title: 'Kalenderansicht', description: 'Tages-, Wochen- und Monatsansicht für alle Mitarbeiter.' },
    { icon: '⚠️', title: 'Konflikterkennung', description: 'Automatische Warnung bei Überschneidungen.' },
    { icon: '📱', title: 'Push-Benachrichtigungen', description: 'Mitarbeiter werden sofort über neue Termine informiert.' },
    { icon: '🔄', title: 'Drag & Drop', description: 'Termine verschieben per Drag & Drop – schnell und intuitiv.' },
    { icon: '🗺️', title: 'Routenoptimierung', description: 'Plane Termine in der richtigen Reihenfolge nach Entfernung.' },
    { icon: '📤', title: 'Tagesplan versenden', description: 'Schicke den Tagesplan per Mail oder WhatsApp an dein Team.' },
  ],
  closingHeadline: 'Termine im Griff. Kunden zufrieden.',
  closingText: 'Starte jetzt und plane deine Termine digital.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
