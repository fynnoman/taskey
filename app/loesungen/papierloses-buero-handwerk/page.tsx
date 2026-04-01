import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Papierloses Büro Handwerk | Taskey',
  description: 'Papierloses Büro im Handwerk: Alle Dokumente digital, alle Prozesse papierlos. Aufträge, Rechnungen, Stundenzettel – alles in einer App.',
  alternates: { canonical: 'https://taskey.de/loesungen/papierloses-buero-handwerk' },
};

const data: LandingPageData = {
  badge: 'Papierloses Büro',
  headline: 'Papierloses Büro –',
  headlineHighlight: 'endlich Realität.',
  subheadline: 'Kein Papier, keine Ordner, kein Suchen. Alles digital, alles sofort auffindbar.',
  heroDescription: 'Taskey macht dein Büro papierlos: Stundenzettel, Aufträge, Rechnungen, Fotos – alles digital erfasst, automatisch archiviert und in Sekunden auffindbar.',
  painPoints: [
    { icon: '📁', text: 'Ordner stapeln sich – niemand findet schnell, was er sucht.' },
    { icon: '📝', text: 'Stundenzettel, Lieferscheine, Rechnungen – alles wird gedruckt und abgeheftet.' },
    { icon: '💸', text: 'Papier, Drucker, Toner und Ablage kosten mehr als man denkt.' },
    { icon: '⏰', text: 'Das Abtippen von Papier-Dokumenten frisst jeden Tag Bürostunden.' },
  ],
  solutionTitle: 'Vom Papier zum Tap.',
  solutionDescription: 'Alles, was bisher auf Papier war, ist jetzt in Taskey – digital und durchsuchbar.',
  solutionSteps: [
    { icon: '📱', title: 'Digital erfassen', description: 'Stunden, Aufträge und Dokumente werden direkt digital erstellt – kein Papier nötig.' },
    { icon: '☁️', title: 'Automatisch archiviert', description: 'Alles wird automatisch gespeichert und ist jederzeit abrufbar.' },
    { icon: '🔍', title: 'Sofort finden', description: 'Suche nach Kunde, Datum oder Stichwort – finde alles in Sekunden.' },
  ],
  ctaText: 'Büro papierlos machen',
  featureHighlights: [
    { icon: '📄', title: 'Digitale Dokumente', description: 'Alle Dokumente digital erstellt und gespeichert.' },
    { icon: '✍️', title: 'Digitale Unterschrift', description: 'Kunden und Mitarbeiter unterschreiben auf dem Handy.' },
    { icon: '🔍', title: 'Volltextsuche', description: 'Finde jedes Dokument in Sekunden.' },
    { icon: '☁️', title: 'Cloud-Archiv', description: 'Alle Dokumente sicher in der Cloud – kein Ordner mehr nötig.' },
    { icon: '📤', title: 'PDF-Export', description: 'Dokumente als PDF exportieren und versenden.' },
    { icon: '🔒', title: 'DSGVO & GoBD', description: 'Revisionssichere Archivierung nach deutschen Standards.' },
  ],
  closingHeadline: 'Papier? Nie wieder.',
  closingText: 'Starte jetzt und mach dein Büro papierlos.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
