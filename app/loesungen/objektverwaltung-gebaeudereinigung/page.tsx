import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Objektverwaltung Gebaeudereinigung – Alle Objekte im Blick | Taskey',
  description: 'Objektverwaltung fuer Gebaeudereiniger: Objekte, Vertraege, Leistungsverzeichnisse und Ansprechpartner zentral verwalten. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/objektverwaltung-gebaeudereinigung' },
};

const data: LandingPageData = {
  badge: 'Objektverwaltung',
  headline: 'Alle Objekte –',
  headlineHighlight: 'zentral verwaltet.',
  subheadline: 'Vertraege, Leistungsverzeichnisse, Ansprechpartner – alles an einem Ort.',
  heroDescription: 'Je mehr Objekte, desto groesser das Chaos. Taskey bringt Ordnung: jedes Objekt mit Vertrag, Leistungsverzeichnis, Reinigungsplan und Kontaktdaten.',
  painPoints: [
    { text: 'Objektinformationen sind ueber Excel, E-Mails und Papier verstreut.' },
    { text: 'Bei Personalwechsel gehen Objektinfos verloren.' },
    { text: 'Vertragsaenderungen werden nicht zuverlaessig kommuniziert.' },
    { text: 'Neue Mitarbeiter brauchen lange, um sich in Objekte einzuarbeiten.' },
  ],
  solutionTitle: 'Jedes Objekt. Alle Infos. Ein System.',
  solutionDescription: 'Zentrale Objektverwaltung mit allem, was dein Team braucht.',
  solutionSteps: [
    { title: 'Objekt anlegen', description: 'Adresse, Flaeche, Etagen, Raeume, Ansprechpartner – alles hinterlegen.' },
    { title: 'Vertrag & Leistungen', description: 'Vertragsdaten, Leistungsverzeichnis und Reinigungsintervalle verknuepfen.' },
    { title: 'Team informieren', description: 'Reinigungskraefte sehen in der App alle Infos zum Objekt – sofort einsatzbereit.' },
  ],
  ctaText: 'Objektverwaltung starten',
  featureHighlights: [
    { title: 'Objektstammdaten', description: 'Alle Infos pro Objekt: Flaeche, Raeume, Etagen, Besonderheiten.' },
    { title: 'Vertragsverwaltung', description: 'Vertragslaufzeiten, Kuendigungsfristen und Preise im Blick.' },
    { title: 'Leistungsverzeichnis', description: 'Was wird wann wie oft gereinigt – digital hinterlegt.' },
    { title: 'Ansprechpartner', description: 'Kontaktdaten von Hausverwaltung, Hausmeister, Schluessel-Depot.' },
    { title: 'Schluesselmanagement', description: 'Wer hat welchen Schluessel fuer welches Objekt?' },
    { title: 'Objekthistorie', description: 'Alle Einsaetze, Reklamationen und Aenderungen chronologisch.' },
  ],
  closingHeadline: 'Objektverwaltung. Zentral. Vollstaendig.',
  closingText: 'Teste Taskey 14 Tage kostenlos und verwalte alle Objekte an einem Ort.',
  relatedLinks: [
    { href: '/loesungen/einsatzplanung-gebaeudereinigung', label: 'Einsatzplanung', description: 'Teams auf Objekte verteilen.' },
    { href: '/loesungen/reinigungsplaene-digital-erstellen', label: 'Reinigungsplaene', description: 'Reinigungsplaene pro Objekt erstellen.' },
    { href: '/loesungen/stammkunden-verwalten-gebaeudereinigung', label: 'Stammkunden', description: 'Auftraggeber und ihre Objekte verwalten.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
