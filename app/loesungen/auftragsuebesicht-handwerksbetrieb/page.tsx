import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Auftragsübersicht Handwerksbetrieb | Taskey',
  description: 'Auftragsübersicht für Handwerksbetriebe: Alle Aufträge, Status und Termine auf einen Blick. Digital, übersichtlich, in Echtzeit. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/auftragsuebesicht-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Auftragsübersicht',
  headline: 'Alle Aufträge –',
  headlineHighlight: 'auf einen Blick.',
  subheadline: 'Offen, in Arbeit, abgeschlossen – sieh sofort, wo jeder Auftrag steht.',
  heroDescription: 'Taskey gibt dir eine zentrale Übersicht über alle Aufträge deines Handwerksbetriebs. Keine Zettel durchsuchen, kein Nachfragen – alles ist da.',
  painPoints: [
    { text: 'Du weißt nicht, welche Aufträge noch offen sind und welche fertig.' },
    { text: 'Wenn ein Kunde anruft, musst du erst den zuständigen Mitarbeiter fragen.' },
    { text: 'Welche Aufträge bringen Geld, welche kosten nur? Keine Ahnung.' },
    { text: 'Termine werden doppelt vergeben oder vergessen.' },
  ],
  solutionTitle: 'Dein Auftrags-Dashboard.',
  solutionDescription: 'Eine Ansicht, alle Aufträge, jeder Status – in Echtzeit.',
  solutionSteps: [
    { title: 'Dashboard öffnen', description: 'Sieh alle Aufträge nach Status sortiert: Offen, In Arbeit, Abgeschlossen, Abgerechnet.' },
    { title: 'Details per Klick', description: 'Tippe auf einen Auftrag und sieh: Zugewiesenes Team, Material, Stunden, Fotos, Notizen.' },
    { title: 'Immer aktuell', description: 'Das Dashboard aktualisiert sich in Echtzeit – Änderungen vom Team erscheinen sofort.' },
  ],
  ctaText: 'Auftragsübersicht testen',
  featureHighlights: [
    { title: 'Status-Board', description: 'Kanban-ähnliche Ansicht: Alle Aufträge nach Status sortiert.' },
    { title: 'Suche & Filter', description: 'Finde jeden Auftrag in Sekunden – nach Kunde, Datum oder Status.' },
    { title: 'Kalenderansicht', description: 'Alle Aufträge im Kalender – Termine auf einen Blick.' },
    { title: 'Mobil & Desktop', description: 'Nutze die Übersicht auf dem Handy, Tablet oder PC.' },
    { title: 'Benachrichtigungen', description: 'Automatische Alerts bei überfälligen Aufträgen.' },
    { title: 'Export', description: 'Auftragslisten als PDF oder CSV exportieren.' },
  ],
  closingHeadline: 'Jeder Auftrag im Blick.',
  closingText: 'Teste Taskey und erlebe die Übersicht, die dein Betrieb verdient.',
  relatedLinks: [
      {
          href: '/loesungen/auftragsverwaltung-handwerk',
          label: 'Auftragsverwaltung',
          description: 'Aufträge nicht nur sehen, sondern komplett digital verwalten.'
      },
      {
          href: '/loesungen/auftraege-digital-verwalten-handwerk',
          label: 'Aufträge digital verwalten',
          description: 'Von der Auftragsanlage bis zur Abrechnung – alles in einer App.'
      },
      {
          href: '/loesungen/terminplanung-handwerker',
          label: 'Terminplanung',
          description: 'Offene Aufträge direkt terminieren und Teams zuordnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
