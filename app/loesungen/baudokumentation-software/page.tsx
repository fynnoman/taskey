import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Baudokumentation Software | Taskey',
  description: 'Baudokumentation Software: Fotos, Berichte, Mängel und Abnahmen digital dokumentieren. Rechtssicher, GPS-gestützt. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/baudokumentation-software' },
};

const data: LandingPageData = {
  badge: 'Baudokumentation',
  headline: 'Baudokumentation –',
  headlineHighlight: 'lückenlos & digital.',
  subheadline: 'Fotos, Berichte, Mängel – alles dokumentiert, alles auffindbar, alles rechtssicher.',
  heroDescription: 'Taskey macht Baudokumentation einfach: Fotografiere, notiere, dokumentiere – direkt auf der Baustelle. Alles wird automatisch dem richtigen Projekt zugeordnet.',
  painPoints: [
    { text: 'Fotos sind auf verschiedenen Handys verteilt – keiner findet das richtige Bild.' },
    { text: 'Berichte werden Tage später geschrieben – wichtige Details fehlen.' },
    { text: 'Bei Streitigkeiten fehlt die Dokumentation – teure Folgen.' },
    { text: 'Ordner voller Papier – nichts ist digital durchsuchbar.' },
  ],
  solutionTitle: 'Alles dokumentiert. Alles gefunden.',
  solutionDescription: 'Von der Baustelle direkt ins System – GPS, Zeitstempel, Projekt-Zuordnung inklusive.',
  solutionSteps: [
    { title: 'Fotografieren & notieren', description: 'Mache Fotos und füge Notizen hinzu – direkt auf der Baustelle.' },
    { title: 'Automatisch zugeordnet', description: 'Alles wird dem richtigen Projekt und dem richtigen Tag zugeordnet.' },
    { title: 'Teilen & exportieren', description: 'Erstelle Berichte als PDF oder teile sie mit dem Auftraggeber.' },
  ],
  ctaText: 'Baudokumentation starten',
  featureHighlights: [
    { title: 'Fotodokumentation', description: 'Fotos mit GPS, Zeitstempel und Projekt-Zuordnung.' },
    { title: 'Tagesberichte', description: 'Tagesberichte direkt in der App erstellen.' },
    { title: 'Mängeldokumentation', description: 'Mängel erfassen, Fotos anhängen, Status tracken.' },
    { title: 'Abnahmeprotokolle', description: 'Digitale Abnahmeprotokolle mit Unterschrift.' },
    { title: 'Volltextsuche', description: 'Finde jedes Dokument in Sekunden – nach Projekt, Datum oder Stichwort.' },
    { title: 'PDF-Berichte', description: 'Professionelle Berichte mit Firmenlogo generieren.' },
  ],
  closingHeadline: 'Dokumentiert. Gefunden. Bewiesen.',
  closingText: 'Starte jetzt und dokumentiere deine Baustellen lückenlos.',
  relatedLinks: [
      {
          href: '/loesungen/bautagebuch-digital',
          label: 'Bautagebuch digital',
          description: 'Tägliche Fortschritte als Teil der Baudokumentation festhalten.'
      },
      {
          href: '/loesungen/fotos-baustelle-dokumentieren-app',
          label: 'Fotos dokumentieren',
          description: 'Baustellenfotos als wichtiger Teil jeder Baudokumentation.'
      },
      {
          href: '/loesungen/protokolle-baustelle-erstellen',
          label: 'Protokolle erstellen',
          description: 'Baustellenprotokolle als Teil der vollständigen Dokumentation.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
