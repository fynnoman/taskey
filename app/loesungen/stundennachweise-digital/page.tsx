import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Stundennachweise digital erstellen – Handwerk & Bau | Taskey',
  description: 'Digitale Stundennachweise für Handwerk und Bau. Automatisch, rechtssicher, DSGVO-konform. Schluss mit Papier-Stundenzetteln. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/stundennachweise-digital' },
};

const data: LandingPageData = {
  badge: 'Stundennachweise digital',
  headline: 'Stundennachweise –',
  headlineHighlight: 'digital statt Papier.',
  subheadline: 'Automatisch generierte, rechtssichere Stundennachweise – ohne Zettelwirtschaft.',
  heroDescription: 'Taskey erstellt aus den erfassten Arbeitszeiten automatisch fertige Stundennachweise. Kein Abtippen, kein Zusammensuchen, kein Fehlerrisiko.',
  painPoints: [
    { icon: '📝', text: 'Papier-Stundenzettel gehen verloren oder sind unleserlich.' },
    { icon: '⏰', text: 'Stundennachweise manuell erstellen kostet Stunden pro Woche.' },
    { icon: '❌', text: 'Fehler in Nachweisen führen zu Streitigkeiten mit Auftraggebern.' },
    { icon: '📁', text: 'Ordner voller Zettel – nichts ist schnell auffindbar.' },
  ],
  solutionTitle: 'Stundennachweise auf Knopfdruck.',
  solutionDescription: 'Zeiten erfassen, Nachweis generieren, fertig. So einfach ist das mit Taskey.',
  solutionSteps: [
    { icon: '📱', title: 'Zeiten erfassen', description: 'Mitarbeiter stempeln per App, NFC oder GPS – ganz normal ihren Arbeitstag.' },
    { icon: '📄', title: 'Nachweis generieren', description: 'Taskey erstellt automatisch tages-, wochen- oder monatsweise Stundennachweise.' },
    { icon: '✍️', title: 'Digital unterschreiben', description: 'Mitarbeiter unterschreiben direkt auf dem Handy – rechtssicher archiviert.' },
  ],
  ctaText: 'Stundennachweise digitalisieren',
  featureHighlights: [
    { icon: '📄', title: 'PDF-Stundennachweise', description: 'Professionelle PDFs mit Firmenlogo, automatisch befüllt.' },
    { icon: '✍️', title: 'Digitale Unterschrift', description: 'Mitarbeiter und Vorarbeiter unterschreiben direkt auf dem Handy.' },
    { icon: '📊', title: 'Stundenübersichten', description: 'Pro Mitarbeiter, pro Baustelle, pro Monat – jede Ansicht verfügbar.' },
    { icon: '🔒', title: 'Manipulationssicher', description: 'Zeitstempel können nachträglich nicht verändert werden.' },
    { icon: '📤', title: 'Sofort versandbereit', description: 'Per Mail an Auftraggeber oder Steuerberater – ein Klick.' },
    { icon: '📁', title: 'Automatisch archiviert', description: 'Alle Nachweise digital gespeichert und jederzeit abrufbar.' },
  ],
  closingHeadline: 'Stundenzettel? Nie wieder.',
  closingText: 'Starte jetzt und erstelle digitale Stundennachweise – automatisch, rechtssicher und in Sekunden.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
