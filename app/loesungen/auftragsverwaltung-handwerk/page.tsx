import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Auftragsverwaltung Handwerk – Digital & übersichtlich | Taskey',
  description: 'Auftragsverwaltung für Handwerksbetriebe: Aufträge anlegen, zuweisen, tracken und abrechnen – alles in einer App. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/auftragsverwaltung-handwerk' },
};

const data: LandingPageData = {
  badge: 'Auftragsverwaltung',
  headline: 'Aufträge im Handwerk –',
  headlineHighlight: 'endlich übersichtlich.',
  subheadline: 'Vom Angebot bis zur Rechnung: Alle Aufträge in einer Ansicht, jeder Status auf einen Blick.',
  heroDescription: 'Taskey gibt dir die Kontrolle über jeden Auftrag. Anlegen, Mitarbeiter zuweisen, Fortschritt tracken, abrechnen – ohne Zettel, ohne Excel, ohne Chaos.',
  painPoints: [
    { icon: '📋', text: 'Aufträge liegen auf verschiedenen Zetteln, in Mails und im Kopf.' },
    { icon: '🤷', text: 'Keiner weiß, welcher Auftrag welchen Status hat.' },
    { icon: '📞', text: 'Kunden fragen nach dem Stand – du musst erst den Monteur anrufen.' },
    { icon: '💸', text: 'Aufträge gehen unter – verpasste Umsätze und verärgerte Kunden.' },
  ],
  solutionTitle: 'Jeder Auftrag. Jeder Status. Sofort.',
  solutionDescription: 'Von der Anfrage bis zur Rechnung – alles in Taskey.',
  solutionSteps: [
    { icon: '➕', title: 'Auftrag anlegen', description: 'Neuer Auftrag in Sekunden – Kunde, Adresse, Beschreibung, Termin. Fertig.' },
    { icon: '👥', title: 'Team zuweisen', description: 'Weise Mitarbeiter zu, setze Deadlines und füge Material hinzu.' },
    { icon: '📊', title: 'Status tracken', description: 'Sieh in Echtzeit: Offen, In Bearbeitung, Abgeschlossen – mit allen Details.' },
  ],
  ctaText: 'Aufträge digital verwalten',
  featureHighlights: [
    { icon: '📋', title: 'Auftragsübersicht', description: 'Alle Aufträge mit Status, Frist und zugewiesenem Team auf einen Blick.' },
    { icon: '📱', title: 'Mobile Auftragsannahme', description: 'Erstelle Aufträge direkt vor Ort beim Kunden – per Handy.' },
    { icon: '📸', title: 'Fotodokumentation', description: 'Fotos zum Auftrag hinzufügen – automatisch mit Zeitstempel.' },
    { icon: '📄', title: 'Angebot → Auftrag', description: 'Aus einem Angebot mit einem Klick einen Auftrag erstellen.' },
    { icon: '🔔', title: 'Erinnerungen', description: 'Automatische Erinnerungen an anstehende Termine und Fristen.' },
    { icon: '📊', title: 'Nachkalkulation', description: 'Vergleiche geplante vs. tatsächliche Kosten pro Auftrag.' },
  ],
  closingHeadline: 'Kein Auftrag geht mehr unter.',
  closingText: 'Starte jetzt und erlebe, wie einfach Auftragsverwaltung sein kann.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
