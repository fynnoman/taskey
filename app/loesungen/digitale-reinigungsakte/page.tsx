import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Digitale Reinigungsakte – Alle Objektdaten an einem Ort | Taskey',
  description: 'Digitale Reinigungsakte für Gebäudereinigung: Vertraege, Reinigungspläne, Nachweise, Fotos – alles digital und zentral verfügbar.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/digitale-reinigungsakte' },
};

const data: LandingPageData = {
  badge: 'Reinigungsakte',
  headline: 'Digitale Reinigungsakte –',
  headlineHighlight: 'alles an einem Ort.',
  subheadline: 'Vertraege, Plaene, Nachweise, Fotos – die komplette Objekthistorie digital.',
  heroDescription: 'Papierordner pro Objekt gehören der Vergangenheit an. Taskey buendelt alle Informationen zu einem Reinigungsobjekt in einer digitalen Akte.',
  painPoints: [
    { text: 'Vertraege, Reinigungspläne und Nachweise liegen in verschiedenen Ordnern.' },
    { text: 'Bei Personalwechsel geht Objektwissen verloren.' },
    { text: 'Neue Mitarbeiter brauchen ewig, um sich in ein Objekt einzuarbeiten.' },
    { text: 'Auftraggeber fragen nach Dokumenten, die niemand finden kann.' },
  ],
  solutionTitle: 'Eine Akte. Alle Infos. Sofort verfügbar.',
  solutionDescription: 'Taskey erstellt für jedes Objekt eine digitale Akte mit allen relevanten Dokumenten und Historien.',
  solutionSteps: [
    { title: 'Objekt anlegen', description: 'Erfasse Standort, Ansprechpartner, Vertragsdetails und Reinigungsumfang.' },
    { title: 'Dokumente verknuepfen', description: 'Lade Vertraege, Grundrisse, Schluesselprotokolle und Fotos hoch.' },
    { title: 'Historie nutzen', description: 'Alle Reinigungseinsätze, Beschwerden und Änderungen chronologisch dokumentiert.' },
  ],
  ctaText: 'Reinigungsakten digitalisieren',
  featureHighlights: [
    { title: 'Objekt-Stammdaten', description: 'Alle Infos zum Objekt auf einen Blick.' },
    { title: 'Dokumenten-Upload', description: 'Vertraege, Grundrisse und Fotos hochladen.' },
    { title: 'Einsatz-Historie', description: 'Alle vergangenen Reinigungseinsätze abrufbar.' },
    { title: 'Beschwerde-Log', description: 'Reklamationen und Lösungen dokumentiert.' },
    { title: 'Schluessel-Verwaltung', description: 'Schluessel-Übergaben und -Rückgaben nachverfolgen.' },
    { title: 'Zugangsinfos', description: 'Zugangscodes, Oeffnungszeiten, Besonderheiten hinterlegt.' },
  ],
  closingHeadline: 'Reinigungsakte. Digital. Vollständig. Immer griffbereit.',
  closingText: 'Teste Taskey 14 Tage kostenlos und digitalisiere deine Objekt-Dokumentation.',
  relatedLinks: [
    { href: '/loesungen/objektverwaltung-gebäudereinigung', label: 'Objektverwaltung', description: 'Reinigungsobjekte zentral verwalten.' },
    { href: '/loesungen/stammkunden-verwalten-gebäudereinigung', label: 'Kundenverwaltung', description: 'Stammkunden und Vertraege verwalten.' },
    { href: '/loesungen/objektbegehung-reinigung-dokumentieren', label: 'Objektbegehung', description: 'Begehungen dokumentieren.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
