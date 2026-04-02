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
    { text: 'Papier-Stundenzettel gehen verloren oder sind unleserlich.' },
    { text: 'Stundennachweise manuell erstellen kostet Stunden pro Woche.' },
    { text: 'Fehler in Nachweisen führen zu Streitigkeiten mit Auftraggebern.' },
    { text: 'Ordner voller Zettel – nichts ist schnell auffindbar.' },
  ],
  solutionTitle: 'Stundennachweise auf Knopfdruck.',
  solutionDescription: 'Zeiten erfassen, Nachweis generieren, fertig. So einfach ist das mit Taskey.',
  solutionSteps: [
    { title: 'Zeiten erfassen', description: 'Mitarbeiter stempeln per App, NFC oder GPS – ganz normal ihren Arbeitstag.' },
    { title: 'Nachweis generieren', description: 'Taskey erstellt automatisch tages-, wochen- oder monatsweise Stundennachweise.' },
    { title: 'Digital unterschreiben', description: 'Mitarbeiter unterschreiben direkt auf dem Handy – rechtssicher archiviert.' },
  ],
  ctaText: 'Stundennachweise digitalisieren',
  featureHighlights: [
    { title: 'PDF-Stundennachweise', description: 'Professionelle PDFs mit Firmenlogo, automatisch befüllt.' },
    { title: 'Digitale Unterschrift', description: 'Mitarbeiter und Vorarbeiter unterschreiben direkt auf dem Handy.' },
    { title: 'Stundenübersichten', description: 'Pro Mitarbeiter, pro Baustelle, pro Monat – jede Ansicht verfügbar.' },
    { title: 'Manipulationssicher', description: 'Zeitstempel können nachträglich nicht verändert werden.' },
    { title: 'Sofort versandbereit', description: 'Per Mail an Auftraggeber oder Steuerberater – ein Klick.' },
    { title: 'Automatisch archiviert', description: 'Alle Nachweise digital gespeichert und jederzeit abrufbar.' },
  ],
  closingHeadline: 'Stundenzettel? Nie wieder.',
  closingText: 'Starte jetzt und erstelle digitale Stundennachweise – automatisch, rechtssicher und in Sekunden.',
  relatedLinks: [
      {
          href: '/loesungen/zeiterfassung-handwerk',
          label: 'Zeiterfassung im Handwerk',
          description: 'Die Basis für automatische Stundennachweise – digitale Zeiterfassung per App.'
      },
      {
          href: '/loesungen/rapportzettel-digital-handwerk',
          label: 'Rapportzettel digital',
          description: 'Nicht nur Zeiten, auch Leistungen und Material direkt digital dokumentieren.'
      },
      {
          href: '/loesungen/vorbereitung-steuerberater-handwerk',
          label: 'Vorbereitung für den Steuerberater',
          description: 'Stundennachweise und Reports direkt exportfertig für Ihren Steuerberater.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
