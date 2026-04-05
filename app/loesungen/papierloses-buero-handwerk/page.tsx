import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Papierloses Büro Handwerk | Taskey',
  description: 'Papierloses Büro im Handwerk: Alle Dokumente digital, alle Prozesse papierlos. Aufträge, Rechnungen, Stundenzettel – alles in einer App.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/papierloses-buero-handwerk' },
};

const data: LandingPageData = {
  badge: 'Papierloses Büro',
  headline: 'Papierloses Büro –',
  headlineHighlight: 'endlich Realität.',
  subheadline: 'Kein Papier, keine Ordner, kein Suchen. Alles digital, alles sofort auffindbar.',
  heroDescription: 'Taskey macht dein Büro papierlos: Stundenzettel, Aufträge, Rechnungen, Fotos – alles digital erfasst, automatisch archiviert und in Sekunden auffindbar.',
  painPoints: [
    { text: 'Ordner stapeln sich – niemand findet schnell, was er sucht.' },
    { text: 'Stundenzettel, Lieferscheine, Rechnungen – alles wird gedruckt und abgeheftet.' },
    { text: 'Papier, Drucker, Toner und Ablage kosten mehr als man denkt.' },
    { text: 'Das Abtippen von Papier-Dokumenten frisst jeden Tag Bürostunden.' },
  ],
  solutionTitle: 'Vom Papier zum Tap.',
  solutionDescription: 'Alles, was bisher auf Papier war, ist jetzt in Taskey – digital und durchsuchbar.',
  solutionSteps: [
    { title: 'Digital erfassen', description: 'Stunden, Aufträge und Dokumente werden direkt digital erstellt – kein Papier nötig.' },
    { title: 'Automatisch archiviert', description: 'Alles wird automatisch gespeichert und ist jederzeit abrufbar.' },
    { title: 'Sofort finden', description: 'Suche nach Kunde, Datum oder Stichwort – finde alles in Sekunden.' },
  ],
  ctaText: 'Büro papierlos machen',
  featureHighlights: [
    { title: 'Digitale Dokumente', description: 'Alle Dokumente digital erstellt und gespeichert.' },
    { title: 'Digitale Unterschrift', description: 'Kunden und Mitarbeiter unterschreiben auf dem Handy.' },
    { title: 'Volltextsuche', description: 'Finde jedes Dokument in Sekunden.' },
    { title: 'Cloud-Archiv', description: 'Alle Dokumente sicher in der Cloud – kein Ordner mehr nötig.' },
    { title: 'PDF-Export', description: 'Dokumente als PDF exportieren und versenden.' },
    { title: 'DSGVO & GoBD', description: 'Revisionssichere Archivierung nach deutschen Standards.' },
  ],
  closingHeadline: 'Papier? Nie wieder.',
  closingText: 'Starte jetzt und mach dein Büro papierlos.',
  relatedLinks: [
      {
          href: '/loesungen/digitalisierung-handwerksbetrieb',
          label: 'Digitalisierung Handwerk',
          description: 'Der Weg zum papierlosen Büro ist Teil der gesamten Digitalisierung.'
      },
      {
          href: '/loesungen/zettelwirtschaft-abschaffen-handwerk',
          label: 'Zettelwirtschaft abschaffen',
          description: 'Nicht nur im Büro – auch auf der Baustelle papierlos arbeiten.'
      },
      {
          href: '/loesungen/stundennachweise-digital',
          label: 'Stundennachweise digital',
          description: 'Stundennachweise digital statt auf Papier – ein großer Schritt.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
