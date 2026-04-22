import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Mängeldokumentation Bau | Taskey',
  description: 'Mängeldokumentation am Bau: Mängel erfassen, Fotos anhängen, Verantwortliche zuweisen, Status tracken. Digital & rechtssicher. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/maengeldokumentation-bau' },
};

const data: LandingPageData = {
  badge: 'Mängeldokumentation',
  headline: 'Mängel dokumentieren –',
  headlineHighlight: 'lückenlos & digital.',
  subheadline: 'Mangel erfassen, Foto machen, Verantwortlichen zuweisen, Status tracken.',
  heroDescription: 'Taskey macht Mängeldokumentation am Bau einfach: Erfasse Mängel direkt auf der Baustelle per App – mit Foto, Beschreibung und Zuständigkeit.',
  painPoints: [
    { text: 'Mängel werden mündlich gemeldet und gehen unter.' },
    { text: 'Mängelfotos sind irgendwo auf dem Handy – nicht zugeordnet.' },
    { text: 'Mängel werden nicht nachverfolgt – Beseitigung verzögert sich.' },
    { text: 'Ohne dokumentierte Mängel keine rechtliche Handhabe.' },
  ],
  solutionTitle: 'Mängel erfassen. Zuweisen. Erledigen.',
  solutionDescription: 'Ein Workflow für alle Mängel – von der Erfassung bis zur Beseitigung.',
  solutionSteps: [
    { title: 'Mangel erfassen', description: 'Foto machen, Beschreibung eingeben, Ort markieren – direkt in der App.' },
    { title: 'Verantwortlichen zuweisen', description: 'Weise den Mangel dem zuständigen Gewerk oder Subunternehmer zu.' },
    { title: 'Beseitigung tracken', description: 'Verfolge den Status bis zur Beseitigung – mit Foto-Nachweis.' },
  ],
  ctaText: 'Mängel digital dokumentieren',
  featureHighlights: [
    { title: 'Foto + Beschreibung', description: 'Mängel mit Foto, Beschreibung und Standort erfassen.' },
    { title: 'Zuweisen', description: 'Mängel dem Verantwortlichen zuweisen – mit Frist.' },
    { title: 'Status-Tracking', description: 'Offen, In Bearbeitung, Erledigt – auf einen Blick.' },
    { title: 'Fristen', description: 'Automatische Erinnerung bei überfälligen Mängeln.' },
    { title: 'Mängelbericht', description: 'PDF-Bericht aller Mängel eines Projekts.' },
    { title: 'Rechtssicher', description: 'Manipulationssichere Dokumentation für Streitfälle.' },
  ],
  closingHeadline: 'Kein Mangel geht mehr unter.',
  closingText: 'Starte jetzt und dokumentiere Mängel lückenlos.',
  relatedLinks: [
      {
          href: '/loesungen/fotos-baustelle-dokumentieren-app',
          label: 'Fotos dokumentieren',
          description: 'Mängel mit Fotos klar und eindeutig dokumentieren.'
      },
      {
          href: '/loesungen/abnahmeprotokoll-digital',
          label: 'Abnahmeprotokoll',
          description: 'Mängel direkt im Abnahmeprotokoll festhalten.'
      },
      {
          href: '/loesungen/reklamationen-verwalten-handwerk',
          label: 'Reklamationen verwalten',
          description: 'Aus dokumentierten Mängeln Reklamationen ableiten und bearbeiten.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
