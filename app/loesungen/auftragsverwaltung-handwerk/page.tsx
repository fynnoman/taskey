import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Auftragsverwaltung Handwerk – Digital & übersichtlich | Taskey',
  description: 'Auftragsverwaltung für Handwerksbetriebe: Aufträge anlegen, zuweisen, tracken und abrechnen – alles in einer App. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/auftragsverwaltung-handwerk' },
};

const data: LandingPageData = {
  badge: 'Auftragsverwaltung',
  headline: 'Aufträge im Handwerk –',
  headlineHighlight: 'endlich übersichtlich.',
  subheadline: 'Vom Angebot bis zur Rechnung: Alle Aufträge in einer Ansicht, jeder Status auf einen Blick.',
  heroDescription: 'Taskey gibt dir die Kontrolle über jeden Auftrag. Anlegen, Mitarbeiter zuweisen, Fortschritt tracken, abrechnen – ohne Zettel, ohne Excel, ohne Chaos.',
  painPoints: [
    { text: 'Aufträge liegen auf verschiedenen Zetteln, in Mails und im Kopf.' },
    { text: 'Keiner weiß, welcher Auftrag welchen Status hat.' },
    { text: 'Kunden fragen nach dem Stand – du musst erst den Monteur anrufen.' },
    { text: 'Aufträge gehen unter – verpasste Umsätze und verärgerte Kunden.' },
  ],
  solutionTitle: 'Jeder Auftrag. Jeder Status. Sofort.',
  solutionDescription: 'Von der Anfrage bis zur Rechnung – alles in Taskey.',
  solutionSteps: [
    { title: 'Auftrag anlegen', description: 'Neuer Auftrag in Sekunden – Kunde, Adresse, Beschreibung, Termin. Fertig.' },
    { title: 'Team zuweisen', description: 'Weise Mitarbeiter zu, setze Deadlines und füge Material hinzu.' },
    { title: 'Status tracken', description: 'Sieh in Echtzeit: Offen, In Bearbeitung, Abgeschlossen – mit allen Details.' },
  ],
  ctaText: 'Aufträge digital verwalten',
  featureHighlights: [
    { title: 'Auftragsübersicht', description: 'Alle Aufträge mit Status, Frist und zugewiesenem Team auf einen Blick.' },
    { title: 'Mobile Auftragsannahme', description: 'Erstelle Aufträge direkt vor Ort beim Kunden – per Handy.' },
    { title: 'Fotodokumentation', description: 'Fotos zum Auftrag hinzufügen – automatisch mit Zeitstempel.' },
    { title: 'Angebot → Auftrag', description: 'Aus einem Angebot mit einem Klick einen Auftrag erstellen.' },
    { title: 'Erinnerungen', description: 'Automatische Erinnerungen an anstehende Termine und Fristen.' },
    { title: 'Nachkalkulation', description: 'Vergleiche geplante vs. tatsächliche Kosten pro Auftrag.' },
  ],
  closingHeadline: 'Kein Auftrag geht mehr unter.',
  closingText: 'Starte jetzt und erlebe, wie einfach Auftragsverwaltung sein kann.',
  relatedLinks: [
      {
          href: '/loesungen/auftraege-digital-verwalten-handwerk',
          label: 'Aufträge digital verwalten',
          description: 'Alle Aufträge an einem Ort – vom Angebot bis zur Rechnung.'
      },
      {
          href: '/loesungen/auftragsuebesicht-handwerksbetrieb',
          label: 'Auftragsübersicht Handwerk',
          description: 'Auf einen Blick sehen, welche Aufträge laufen, welche offen sind und was ansteht.'
      },
      {
          href: '/loesungen/terminplanung-handwerker',
          label: 'Terminplanung Handwerker',
          description: 'Aufträge terminieren und Mitarbeiter automatisch zuordnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
