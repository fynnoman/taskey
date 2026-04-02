import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Fotos Baustelle dokumentieren App | Taskey',
  description: 'Baustellenfotos dokumentieren per App: GPS-Stempel, Zeitstempel, Projektzuordnung. Rechtssicher und lückenlos. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/fotos-baustelle-dokumentieren-app' },
};

const data: LandingPageData = {
  badge: 'Fotodokumentation',
  headline: 'Baustellenfotos –',
  headlineHighlight: 'dokumentiert statt irgendwo.',
  subheadline: 'Fotos mit GPS, Zeitstempel und Projekt-Zuordnung – automatisch archiviert.',
  heroDescription: 'Taskey macht Fotodokumentation auf der Baustelle einfach: Fotografieren, dem Auftrag zuordnen, fertig. GPS und Zeitstempel werden automatisch hinzugefügt.',
  painPoints: [
    { text: 'Baustellenfotos liegen auf 10 verschiedenen Handys – keiner findet sie.' },
    { text: 'Welches Foto ist von wann? Ohne Zeitstempel unmöglich zuzuordnen.' },
    { text: 'Bei Streitigkeiten fehlen Beweisfotos – teure Konsequenzen.' },
    { text: 'Fotos müssen abends am PC sortiert und zugeordnet werden.' },
  ],
  solutionTitle: 'Foto machen. Fertig.',
  solutionDescription: 'Jedes Foto wird automatisch mit GPS, Zeitstempel und Projekt verknüpft.',
  solutionSteps: [
    { title: 'Foto in der App machen', description: 'Öffne den Auftrag in der App und mache ein Foto – es wird automatisch zugeordnet.' },
    { title: 'Automatische Metadaten', description: 'GPS-Position, Datum, Uhrzeit und Auftrags-ID werden automatisch gespeichert.' },
    { title: 'Sofort verfügbar', description: 'Fotos sind sofort im Büro sichtbar und können in Berichte eingefügt werden.' },
  ],
  ctaText: 'Fotos digital dokumentieren',
  featureHighlights: [
    { title: 'GPS-Stempel', description: 'Jedes Foto wird mit GPS-Koordinaten versehen.' },
    { title: 'Zeitstempel', description: 'Datum und Uhrzeit automatisch im Foto.' },
    { title: 'Projekt-Zuordnung', description: 'Fotos automatisch dem richtigen Projekt zugeordnet.' },
    { title: 'Kommentare', description: 'Notizen und Beschreibungen zu jedem Foto hinzufügen.' },
    { title: 'PDF-Bericht', description: 'Fotos in professionelle Berichte einbinden.' },
    { title: 'Manipulationssicher', description: 'Fotos können nachträglich nicht verändert werden.' },
  ],
  closingHeadline: 'Jedes Foto. Jeder Beweis.',
  closingText: 'Starte jetzt und dokumentiere deine Baustellen lückenlos.',
  relatedLinks: [
      {
          href: '/loesungen/baudokumentation-software',
          label: 'Baudokumentation',
          description: 'Fotos als Teil einer umfassenden digitalen Baudokumentation.'
      },
      {
          href: '/loesungen/maengeldokumentation-bau',
          label: 'Mängeldokumentation',
          description: 'Mängel mit Fotos dokumentieren – eindeutig und nachvollziehbar.'
      },
      {
          href: '/loesungen/bautagebuch-digital',
          label: 'Bautagebuch digital',
          description: 'Fotos direkt ins digitale Bautagebuch einfügen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
