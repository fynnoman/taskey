import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Protokolle Baustelle erstellen – Taskey',
  description: 'Baustellenprotokolle digital erstellen. Taskey dokumentiert Baubesprechungen, Abnahmen und Zwischenstände – alles an einem Ort.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/protokolle-baustelle-erstellen' },
};

const data: LandingPageData = {
  badge: 'Baustellenprotokolle',
  headline: 'Protokolle für die',
  headlineHighlight: 'Baustelle',
  subheadline: 'digital erstellen und teilen.',
  heroDescription: 'Baubesprechung, Abnahme, Mängelrundgang – Taskey erstellt professionelle Protokolle direkt vor Ort und verteilt sie automatisch an alle Beteiligten.',
  painPoints: [
    { text: 'Protokolle werden Tage nach der Besprechung aus dem Gedächtnis geschrieben.' },
    { text: 'Wichtige Vereinbarungen gehen verloren oder werden vergessen.' },
    { text: 'Protokolle per E-Mail verteilen – nicht alle bekommen es.' },
    { text: 'Bei Streitigkeiten fehlen dokumentierte Vereinbarungen.' },
  ],
  solutionTitle: 'Protokolle direkt auf der Baustelle erstellen',
  solutionDescription: 'Taskey macht Protokollierung so einfach wie Notizen machen.',
  solutionSteps: [
    { title: 'Protokoll anlegen', description: 'Protokolltyp wählen und Teilnehmer, Datum und Themen erfassen.' },
    { title: 'Punkte dokumentieren', description: 'Vereinbarungen, Aufgaben und Fristen direkt vor Ort festhalten.' },
    { title: 'Automatisch verteilen', description: 'Protokoll wird sofort als PDF an alle Teilnehmer gesendet.' },
  ],
  ctaText: 'Jetzt Protokolle digitalisieren',
  featureHighlights: [
    { title: 'Protokoll-Vorlagen', description: 'Fertige Vorlagen für Baubesprechung, Abnahme, Mängelrundgang.' },
    { title: 'Foto-Integration', description: 'Fotos direkt in das Protokoll einfügen.' },
    { title: 'Aufgabenverfolgung', description: 'Vereinbarte Aufgaben mit Frist und Verantwortlichem nachverfolgen.' },
    { title: 'Automatischer Versand', description: 'Protokoll wird sofort an alle Teilnehmer verteilt.' },
    { title: 'Fortschreibung', description: 'Offene Punkte aus dem letzten Protokoll automatisch übernehmen.' },
    { title: 'Archiv', description: 'Alle Protokolle chronologisch im Projekt archiviert.' },
  ],
  closingHeadline: 'Nie wieder wichtige Absprachen vergessen.',
  closingText: 'Taskey dokumentiert Ihre Baubesprechungen professionell – direkt vor Ort, sofort verteilt.',
  relatedLinks: [
      {
          href: '/loesungen/baudokumentation-software',
          label: 'Baudokumentation',
          description: 'Protokolle als Teil einer umfassenden Baudokumentation.'
      },
      {
          href: '/loesungen/abnahmeprotokoll-digital',
          label: 'Abnahmeprotokoll digital',
          description: 'Speziell für Bauabnahmen: Digitale Abnahmeprotokolle erstellen.'
      },
      {
          href: '/loesungen/bautagebuch-digital',
          label: 'Bautagebuch digital',
          description: 'Tägliche Protokollierung im digitalen Bautagebuch.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
