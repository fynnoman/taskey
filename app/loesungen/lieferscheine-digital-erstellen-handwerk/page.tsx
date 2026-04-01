import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Lieferscheine digital erstellen Handwerk – Taskey',
  description: 'Lieferscheine im Handwerk digital erstellen. Taskey generiert professionelle Lieferscheine und verknüpft sie mit Aufträgen und Rechnungen.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/lieferscheine-digital-erstellen-handwerk' },
};

const data: LandingPageData = {
  badge: 'Digitale Lieferscheine',
  headline: 'Lieferscheine im',
  headlineHighlight: 'Handwerk',
  subheadline: 'digital erstellen und verwalten.',
  heroDescription: 'Schluss mit handschriftlichen Lieferscheinen. Taskey erstellt professionelle Lieferscheine digital und verknüpft sie automatisch mit Aufträgen und Rechnungen.',
  painPoints: [
    { icon: '📝', text: 'Handschriftliche Lieferscheine – unleserlich und unprofessionell.' },
    { icon: '📂', text: 'Lieferscheine gehen auf dem Weg ins Büro verloren.' },
    { icon: '🔗', text: 'Keine Verknüpfung zwischen Lieferschein und Rechnung.' },
    { icon: '⏳', text: 'Lieferscheine nachträglich abtippen kostet Zeit.' },
  ],
  solutionTitle: 'Lieferscheine per Knopfdruck',
  solutionDescription: 'Taskey erstellt Lieferscheine digital – direkt auf der Baustelle oder im Büro.',
  solutionSteps: [
    { icon: '📋', title: 'Positionen erfassen', description: 'Material und Mengen für den Lieferschein eingeben.' },
    { icon: '✍️', title: 'Unterschrift einholen', description: 'Kunde unterschreibt digital auf dem Smartphone oder Tablet.' },
    { icon: '📤', title: 'Automatisch zuordnen', description: 'Lieferschein wird automatisch dem Auftrag und der Rechnung zugeordnet.' },
  ],
  ctaText: 'Jetzt Lieferscheine digitalisieren',
  featureHighlights: [
    { icon: '📋', title: 'Professionelles Format', description: 'Lieferscheine im eigenen Firmendesign mit allen Pflichtangaben.' },
    { icon: '✍️', title: 'Digitale Unterschrift', description: 'Kunden unterschreiben direkt auf dem Gerät.' },
    { icon: '🔗', title: 'Auftragverknüpfung', description: 'Jeder Lieferschein ist mit dem zugehörigen Auftrag verbunden.' },
    { icon: '📧', title: 'Sofortversand', description: 'Lieferschein direkt per E-Mail an den Kunden senden.' },
    { icon: '📊', title: 'Rechnungsgrundlage', description: 'Aus Lieferscheinen direkt Rechnungen erstellen.' },
    { icon: '📁', title: 'Digitales Archiv', description: 'Alle Lieferscheine revisionssicher digital archiviert.' },
  ],
  closingHeadline: 'Lieferscheine – digital, professionell, verknüpft.',
  closingText: 'Taskey macht Ihre Lieferscheine zum effizienten Teil Ihres digitalen Workflows.',
  relatedLinks: [
      {
          href: '/loesungen/materialverwaltung-handwerk',
          label: 'Materialverwaltung',
          description: 'Geliefertes Material direkt ins System übernehmen.'
      },
      {
          href: '/loesungen/bestellwesen-handwerksbetrieb',
          label: 'Bestellwesen',
          description: 'Lieferscheine mit Bestellungen abgleichen.'
      },
      {
          href: '/loesungen/rechnungsprogramm-handwerker',
          label: 'Rechnungsprogramm',
          description: 'Aus Lieferscheinen und Leistungen Rechnungen erstellen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
