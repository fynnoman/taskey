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
    { text: 'Abnahmeprotokolle werden auf Papier geschrieben und später abgetippt.' },
    { text: 'Mängelfotos sind auf dem Handy – nicht im Protokoll.' },
    { text: 'Kundenunterschriften fehlen – Streit bei Nachbesserungen.' },
    { text: 'Alte Abnahmeprotokolle? Irgendwo im Ordner.' },
  ],
  solutionTitle: 'Abnahme vor Ort. Digital.',
  solutionDescription: 'Protokoll erstellen, Mängel erfassen, Fotos machen, unterschreiben – ein Workflow.',
  solutionSteps: [
    { title: 'Protokoll erstellen', description: 'Starte das Abnahmeprotokoll direkt auf der Baustelle in der App.' },
    { title: 'Mängel + Fotos', description: 'Erfasse Mängel mit Beschreibung, Foto und Zuständigkeit.' },
    { title: 'Digital unterschreiben', description: 'Auftraggeber und Auftragnehmer unterschreiben auf dem Handy.' },
  ],
  ctaText: 'Abnahmen digitalisieren',
  featureHighlights: [
    { title: 'Strukturiertes Protokoll', description: 'Vorgefertigte Felder für alle relevanten Abnahme-Informationen.' },
    { title: 'Foto-Mängelliste', description: 'Mängel mit Foto, Beschreibung und Frist dokumentieren.' },
    { title: 'Digitale Unterschrift', description: 'Rechtssichere digitale Unterschriften beider Parteien.' },
    { title: 'PDF-Export', description: 'Fertiges Protokoll als professionelles PDF.' },
    { title: 'Mängel-Tracking', description: 'Offene Mängel nachverfolgen bis zur Beseitigung.' },
    { title: 'Manipulationssicher', description: 'Protokoll kann nachträglich nicht verändert werden.' },
  ],
  closingHeadline: 'Abnahme. Unterschrieben. Archiviert.',
  closingText: 'Starte jetzt und erstelle digitale Abnahmeprotokolle.',
  relatedLinks: [
      {
          href: '/loesungen/digitale-unterschrift-bauabnahme',
          label: 'Digitale Unterschrift',
          description: 'Abnahmeprotokolle digital unterschreiben – rechtssicher und sofort.'
      },
      {
          href: '/loesungen/maengeldokumentation-bau',
          label: 'Mängeldokumentation',
          description: 'Bei der Abnahme festgestellte Mängel direkt dokumentieren.'
      },
      {
          href: '/loesungen/protokolle-baustelle-erstellen',
          label: 'Baustellenprotokolle',
          description: 'Nicht nur Abnahmen – auch alle anderen Baustellenprotokolle digital.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
