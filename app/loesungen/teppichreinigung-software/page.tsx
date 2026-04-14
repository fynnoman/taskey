import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Teppichreinigung Software – Aufträge & Dokumentation | Taskey',
  description: 'Software für Teppichreinigung: Aufträge verwalten, Vorher/Nachher dokumentieren, Kunden benachrichtigen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/teppichreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Teppichreinigung',
  headline: 'Teppichreinigung –',
  headlineHighlight: 'jeden Auftrag sauber dokumentiert.',
  subheadline: 'Teppiche, Polster, Vorhaenge – Reinigung planen, dokumentieren, abrechnen.',
  heroDescription: 'Taskey hilft dir, Teppichreinigungsaufträge effizient zu verwalten – von der Aufnahme über die Dokumentation bis zur Rechnung.',
  painPoints: [
    { text: 'Vorher-Zustand nicht dokumentiert – Reklamationen sind schwer zu entkraeften.' },
    { text: 'Verschiedene Materialien erfordern unterschiedliche Verfahren und Preise.' },
    { text: 'Kundenbenachrichtigung bei Fertigstellung ist manuell und zeitaufwendig.' },
    { text: 'Übersicht über laufende Aufträge geht bei vielen Kunden verloren.' },
  ],
  solutionTitle: 'Aufnahme. Reinigung. Rückgabe. Digital.',
  solutionDescription: 'Jeder Auftrag von Anfang bis Ende digital begleitet.',
  solutionSteps: [
    { title: 'Aufnahme dokumentieren', description: 'Material, Verschmutzungsgrad und Flecken mit Fotos festhalten.' },
    { title: 'Reinigung zuweisen', description: 'Verfahren und Mitarbeiter zuweisen – Checkliste abarbeiten.' },
    { title: 'Fertigmeldung & Rechnung', description: 'Kunde automatisch benachrichtigen und Rechnung erstellen.' },
  ],
  ctaText: 'Teppichreinigung digitalisieren',
  featureHighlights: [
    { title: 'Materialerkennung', description: 'Verfahren je nach Material automatisch vorschlagen.' },
    { title: 'Vorher/Nachher-Fotos', description: 'Dokumentation des Reinigungsergebnisses.' },
    { title: 'Auftrags-Tracking', description: 'Kunden sehen den Status ihres Auftrags live.' },
    { title: 'Automatische Benachrichtigung', description: 'Kunde wird bei Fertigstellung benachrichtigt.' },
    { title: 'Preiskalkulation', description: 'Preise nach Material und Flaeche automatisch berechnen.' },
    { title: 'Wiederkehrende Kunden', description: 'Stammkundenverwaltung mit Auftragshistorie.' },
  ],
  closingHeadline: 'Teppichreinigung. Dokumentiert. Professionell.',
  closingText: 'Teste Taskey 14 Tage kostenlos und verwalte deine Teppichreinigung digital.',
  relatedLinks: [
    { href: '/loesungen/kundendatenbank-reinigungsfirma', label: 'Kundendatenbank', description: 'Alle Kunden und Auftragshistorie an einem Ort.' },
    { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnung Reinigung', description: 'Rechnungen direkt aus Aufträgen erstellen.' },
    { href: '/loesungen/stammkunden-verwalten-gebäudereinigung', label: 'Stammkunden verwalten', description: 'Wiederkehrende Kunden effizient betreuen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
