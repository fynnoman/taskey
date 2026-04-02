import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Bautagebuch digital führen | Taskey',
  description: 'Digitales Bautagebuch: Wetter, Fortschritt, Fotos, Material und Mängel täglich dokumentieren. Rechtssicher & DSGVO-konform. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/bautagebuch-digital' },
};

const data: LandingPageData = {
  badge: 'Bautagebuch',
  headline: 'Bautagebuch –',
  headlineHighlight: 'digital statt Papier.',
  subheadline: 'Tägliche Baudokumentation direkt von der Baustelle – mit Fotos, Wetter und GPS.',
  heroDescription: 'Taskey macht das Bautagebuch digital: Wetter, Anwesenheit, Fortschritt, Fotos, Mängel – alles in der App erfasst, automatisch archiviert.',
  painPoints: [
    { text: 'Das Bautagebuch wird abends aus dem Gedächtnis geschrieben.' },
    { text: 'Fotos vom Baufortschritt sind irgendwo auf 5 verschiedenen Handys.' },
    { text: 'Wettereinflüsse werden nicht dokumentiert – bei Streitigkeiten fehlen Belege.' },
    { text: 'Papierne Bautagebücher gehen verloren oder sind unleserlich.' },
  ],
  solutionTitle: 'Das digitale Bautagebuch.',
  solutionDescription: 'Täglich in 5 Minuten ausgefüllt – automatisch archiviert und teilbar.',
  solutionSteps: [
    { title: 'Tageseintrag erstellen', description: 'Öffne die App auf der Baustelle. Wetter, Anwesenheit und Arbeiten werden vorausgefüllt.' },
    { title: 'Fotos hinzufügen', description: 'Mache Fotos direkt in der App – sie werden mit GPS und Zeitstempel versehen.' },
    { title: 'Teilen & archivieren', description: 'Exportiere das Bautagebuch als PDF oder teile es mit dem Auftraggeber.' },
  ],
  ctaText: 'Bautagebuch digitalisieren',
  featureHighlights: [
    { title: 'Wetter-Dokumentation', description: 'Wetterdaten werden automatisch für den Standort erfasst.' },
    { title: 'Fotodokumentation', description: 'Fotos mit GPS-Stempel direkt im Bautagebuch.' },
    { title: 'Anwesenheit', description: 'Automatische Erfassung, wer heute auf der Baustelle war.' },
    { title: 'Mängel erfassen', description: 'Mängel dokumentieren, Fotos anhängen, Verantwortliche zuweisen.' },
    { title: 'PDF-Export', description: 'Professionelles PDF-Bautagebuch auf Knopfdruck.' },
    { title: 'Rechtssicher', description: 'Digitale Bautagebücher sind rechtlich anerkannt und manipulationssicher.' },
  ],
  closingHeadline: 'Bautagebuch in 5 Minuten.',
  closingText: 'Starte jetzt und dokumentiere deine Baustellen digital.',
  relatedLinks: [
      {
          href: '/loesungen/baudokumentation-software',
          label: 'Baudokumentation',
          description: 'Das Bautagebuch als Kern einer vollständigen Baudokumentation.'
      },
      {
          href: '/loesungen/fotos-baustelle-dokumentieren-app',
          label: 'Fotos dokumentieren',
          description: 'Tägliche Fotos direkt ins Bautagebuch einfügen.'
      },
      {
          href: '/loesungen/protokolle-baustelle-erstellen',
          label: 'Protokolle erstellen',
          description: 'Bauprotokolle ergänzend zum Bautagebuch führen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
