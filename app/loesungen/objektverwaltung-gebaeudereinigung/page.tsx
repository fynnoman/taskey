import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Objektverwaltung Gebäudereinigung – Alle Objekte im Blick | Taskey',
  description: 'Objektverwaltung für Gebäudereiniger: Objekte, Vertraege, Leistungsverzeichnisse und Ansprechpartner zentral verwalten. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/objektverwaltung-gebaeudereinigung' },
};

const data: LandingPageData = {
  badge: 'Objektverwaltung',
  headline: 'Alle Objekte –',
  headlineHighlight: 'zentral verwaltet.',
  subheadline: 'Vertraege, Leistungsverzeichnisse, Ansprechpartner – alles an einem Ort.',
  heroDescription: 'Je mehr Objekte, desto größer das Chaos. Taskey bringt Ordnung: jedes Objekt mit Vertrag, Leistungsverzeichnis, Reinigungsplan und Kontaktdaten.',
  painPoints: [
    { text: 'Objektinformationen sind über Excel, E-Mails und Papier verstreut.' },
    { text: 'Bei Personalwechsel gehen Objektinfos verloren.' },
    { text: 'Vertragsänderungen werden nicht zuverlässig kommuniziert.' },
    { text: 'Neue Mitarbeiter brauchen lange, um sich in Objekte einzuarbeiten.' },
  ],
  solutionTitle: 'Jedes Objekt. Alle Infos. Ein System.',
  solutionDescription: 'Zentrale Objektverwaltung mit allem, was dein Team braucht.',
  solutionSteps: [
    { title: 'Objekt anlegen', description: 'Adresse, Flaeche, Etagen, Räume, Ansprechpartner – alles hinterlegen.' },
    { title: 'Vertrag & Leistungen', description: 'Vertragsdaten, Leistungsverzeichnis und Reinigungsintervalle verknuepfen.' },
    { title: 'Team informieren', description: 'Reinigungskräfte sehen in der App alle Infos zum Objekt – sofort einsatzbereit.' },
  ],
  ctaText: 'Objektverwaltung starten',
  featureHighlights: [
    { title: 'Objektstammdaten', description: 'Alle Infos pro Objekt: Flaeche, Räume, Etagen, Besonderheiten.' },
    { title: 'Vertragsverwaltung', description: 'Vertragslaufzeiten, Kündigungsfristen und Preise im Blick.' },
    { title: 'Leistungsverzeichnis', description: 'Was wird wann wie oft gereinigt – digital hinterlegt.' },
    { title: 'Ansprechpartner', description: 'Kontaktdaten von Hausverwaltung, Hausmeister, Schluessel-Depot.' },
    { title: 'Schluesselmanagement', description: 'Wer hat welchen Schluessel für welches Objekt?' },
    { title: 'Objekthistorie', description: 'Alle Einsätze, Reklamationen und Änderungen chronologisch.' },
  ],
  closingHeadline: 'Objektverwaltung. Zentral. Vollständig.',
  closingText: 'Teste Taskey 3 Monate kostenlos und verwalte alle Objekte an einem Ort.',
  relatedLinks: [
    { href: '/loesungen/einsatzplanung-gebäudereinigung', label: 'Einsatzplanung', description: 'Teams auf Objekte verteilen.' },
    { href: '/loesungen/reinigungspläne-digital-erstellen', label: 'Reinigungspläne', description: 'Reinigungspläne pro Objekt erstellen.' },
    { href: '/loesungen/stammkunden-verwalten-gebäudereinigung', label: 'Stammkunden', description: 'Auftraggeber und ihre Objekte verwalten.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
