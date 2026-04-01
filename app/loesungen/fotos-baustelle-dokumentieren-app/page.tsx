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
    { icon: '📸', text: 'Baustellenfotos liegen auf 10 verschiedenen Handys – keiner findet sie.' },
    { icon: '📅', text: 'Welches Foto ist von wann? Ohne Zeitstempel unmöglich zuzuordnen.' },
    { icon: '⚖️', text: 'Bei Streitigkeiten fehlen Beweisfotos – teure Konsequenzen.' },
    { icon: '🔄', text: 'Fotos müssen abends am PC sortiert und zugeordnet werden.' },
  ],
  solutionTitle: 'Foto machen. Fertig.',
  solutionDescription: 'Jedes Foto wird automatisch mit GPS, Zeitstempel und Projekt verknüpft.',
  solutionSteps: [
    { icon: '📱', title: 'Foto in der App machen', description: 'Öffne den Auftrag in der App und mache ein Foto – es wird automatisch zugeordnet.' },
    { icon: '📍', title: 'Automatische Metadaten', description: 'GPS-Position, Datum, Uhrzeit und Auftrags-ID werden automatisch gespeichert.' },
    { icon: '📤', title: 'Sofort verfügbar', description: 'Fotos sind sofort im Büro sichtbar und können in Berichte eingefügt werden.' },
  ],
  ctaText: 'Fotos digital dokumentieren',
  featureHighlights: [
    { icon: '📍', title: 'GPS-Stempel', description: 'Jedes Foto wird mit GPS-Koordinaten versehen.' },
    { icon: '📅', title: 'Zeitstempel', description: 'Datum und Uhrzeit automatisch im Foto.' },
    { icon: '📋', title: 'Projekt-Zuordnung', description: 'Fotos automatisch dem richtigen Projekt zugeordnet.' },
    { icon: '📝', title: 'Kommentare', description: 'Notizen und Beschreibungen zu jedem Foto hinzufügen.' },
    { icon: '📄', title: 'PDF-Bericht', description: 'Fotos in professionelle Berichte einbinden.' },
    { icon: '🔒', title: 'Manipulationssicher', description: 'Fotos können nachträglich nicht verändert werden.' },
  ],
  closingHeadline: 'Jedes Foto. Jeder Beweis.',
  closingText: 'Starte jetzt und dokumentiere deine Baustellen lückenlos.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
