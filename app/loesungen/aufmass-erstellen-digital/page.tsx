import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Aufmaß erstellen digital – Taskey',
  description: 'Aufmaße digital erstellen und dokumentieren. Taskey macht Aufmaß-Erfassung auf der Baustelle einfach, schnell und fehlerfrei.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/aufmass-erstellen-digital' },
};

const data: LandingPageData = {
  badge: 'Digitales Aufmaß',
  headline: 'Aufmaße',
  headlineHighlight: 'digital erstellen',
  subheadline: 'Direkt auf der Baustelle – schnell, präzise, dokumentiert.',
  heroDescription: 'Schluss mit handschriftlichen Aufmaßblättern. Taskey ermöglicht die digitale Aufmaß-Erfassung direkt vor Ort – inklusive Fotos und automatischer Mengenberechnung.',
  painPoints: [
    { icon: '📝', text: 'Handschriftliche Aufmaße sind unleserlich und fehleranfällig.' },
    { icon: '🔢', text: 'Mengenberechnungen müssen im Büro nochmal nachgerechnet werden.' },
    { icon: '📂', text: 'Aufmaßblätter gehen auf der Baustelle verloren.' },
    { icon: '⏳', text: 'Doppelarbeit: Erst auf Papier, dann nochmal am Computer abtippen.' },
  ],
  solutionTitle: 'Aufmaß direkt auf dem Smartphone',
  solutionDescription: 'Taskey macht die Aufmaß-Erfassung zum Kinderspiel.',
  solutionSteps: [
    { icon: '📱', title: 'Maße eingeben', description: 'Länge, Breite, Höhe direkt auf der Baustelle in die App eingeben.' },
    { icon: '📸', title: 'Fotos hinzufügen', description: 'Relevante Bereiche fotografieren und dem Aufmaß zuordnen.' },
    { icon: '📤', title: 'Automatisch berechnen', description: 'Flächen und Mengen werden sofort berechnet und dem Projekt zugeordnet.' },
  ],
  ctaText: 'Jetzt Aufmaße digitalisieren',
  featureHighlights: [
    { icon: '📐', title: 'Mengenberechnung', description: 'Flächen, Volumen und Stückzahlen werden automatisch berechnet.' },
    { icon: '📸', title: 'Foto-Dokumentation', description: 'Jedes Aufmaß mit Fotos belegen – für eindeutige Nachweise.' },
    { icon: '📋', title: 'Projektverknüpfung', description: 'Aufmaße direkt dem richtigen Auftrag zuordnen.' },
    { icon: '📤', title: 'Sofort verfügbar', description: 'Aufmaße sind sofort im Büro verfügbar – kein Warten auf Zettel.' },
    { icon: '📊', title: 'Angebots-Grundlage', description: 'Aus Aufmaßen direkt Angebote und Rechnungen erstellen.' },
    { icon: '📁', title: 'Revisionssicher', description: 'Alle Aufmaße werden digital archiviert und sind jederzeit abrufbar.' },
  ],
  closingHeadline: 'Aufmaße – digital, präzise, sofort.',
  closingText: 'Taskey macht Ihre Aufmaß-Erfassung einfacher als je zuvor. Probieren Sie es aus.',
  relatedLinks: [
      {
          href: '/loesungen/bauabrechnung-software',
          label: 'Bauabrechnung',
          description: 'Das digitale Aufmaß als Basis für die korrekte Abrechnung.'
      },
      {
          href: '/loesungen/schlussrechnung-software-bau',
          label: 'Schlussrechnung',
          description: 'Aufmaße direkt in die Schlussrechnung übernehmen.'
      },
      {
          href: '/loesungen/baudokumentation-software',
          label: 'Baudokumentation',
          description: 'Aufmaße als Teil der vollständigen Projektdokumentation.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
