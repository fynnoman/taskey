import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Abnahmeprotokoll digital erstellen | Taskey',
  description: 'Digitale Abnahmeprotokolle: Mängel erfassen, Fotos anhängen, digital unterschreiben. Rechtssicher & automatisch. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/abnahmeprotokoll-digital' },
};

const data: LandingPageData = {
  badge: 'Abnahmeprotokoll',
  headline: 'Abnahmeprotokoll –',
  headlineHighlight: 'digital & rechtssicher.',
  subheadline: 'Mängel erfassen, Fotos anhängen, Unterschrift holen – alles auf dem Handy.',
  heroDescription: 'Taskey digitalisiert die Bauabnahme: Erstelle Abnahmeprotokolle direkt vor Ort. Mängel dokumentieren, Fotos machen, Kunde unterschreiben lassen – alles in einer App.',
  painPoints: [
    { icon: '📝', text: 'Abnahmeprotokolle werden auf Papier geschrieben und später abgetippt.' },
    { icon: '📸', text: 'Mängelfotos sind auf dem Handy – nicht im Protokoll.' },
    { icon: '✍️', text: 'Kundenunterschriften fehlen – Streit bei Nachbesserungen.' },
    { icon: '📁', text: 'Alte Abnahmeprotokolle? Irgendwo im Ordner.' },
  ],
  solutionTitle: 'Abnahme vor Ort. Digital.',
  solutionDescription: 'Protokoll erstellen, Mängel erfassen, Fotos machen, unterschreiben – ein Workflow.',
  solutionSteps: [
    { icon: '📋', title: 'Protokoll erstellen', description: 'Starte das Abnahmeprotokoll direkt auf der Baustelle in der App.' },
    { icon: '📸', title: 'Mängel + Fotos', description: 'Erfasse Mängel mit Beschreibung, Foto und Zuständigkeit.' },
    { icon: '✍️', title: 'Digital unterschreiben', description: 'Auftraggeber und Auftragnehmer unterschreiben auf dem Handy.' },
  ],
  ctaText: 'Abnahmen digitalisieren',
  featureHighlights: [
    { icon: '📋', title: 'Strukturiertes Protokoll', description: 'Vorgefertigte Felder für alle relevanten Abnahme-Informationen.' },
    { icon: '📸', title: 'Foto-Mängelliste', description: 'Mängel mit Foto, Beschreibung und Frist dokumentieren.' },
    { icon: '✍️', title: 'Digitale Unterschrift', description: 'Rechtssichere digitale Unterschriften beider Parteien.' },
    { icon: '📄', title: 'PDF-Export', description: 'Fertiges Protokoll als professionelles PDF.' },
    { icon: '🔔', title: 'Mängel-Tracking', description: 'Offene Mängel nachverfolgen bis zur Beseitigung.' },
    { icon: '🔒', title: 'Manipulationssicher', description: 'Protokoll kann nachträglich nicht verändert werden.' },
  ],
  closingHeadline: 'Abnahme. Unterschrieben. Archiviert.',
  closingText: 'Starte jetzt und erstelle digitale Abnahmeprotokolle.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
