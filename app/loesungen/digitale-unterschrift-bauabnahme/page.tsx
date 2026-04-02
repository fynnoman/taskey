import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Digitale Unterschrift Bauabnahme | Taskey',
  description: 'Digitale Unterschrift bei der Bauabnahme: Kunde unterschreibt auf dem Handy. Rechtssicher, sofort als PDF. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/digitale-unterschrift-bauabnahme' },
};

const data: LandingPageData = {
  badge: 'Digitale Unterschrift',
  headline: 'Digital unterschreiben –',
  headlineHighlight: 'auf der Baustelle.',
  subheadline: 'Abnahmen, Rapporte und Protokolle – der Kunde unterschreibt direkt auf dem Handy.',
  heroDescription: 'Taskey ermöglicht digitale Unterschriften direkt auf der Baustelle. Abnahmeprotokolle, Stundenrapporte und Leistungsnachweise werden sofort rechtssicher signiert.',
  painPoints: [
    { text: 'Unterschriften fehlen – Papier wurde vergessen oder verloren.' },
    { text: 'Der Kunde muss nochmal extra kommen, um zu unterschreiben.' },
    { text: 'Unterschriebene Dokumente müssen eingescannt und zugeordnet werden.' },
    { text: 'Ohne Unterschrift keine rechtliche Absicherung bei Mängeln.' },
  ],
  solutionTitle: 'Unterschrift? Ein Finger auf dem Display.',
  solutionDescription: 'Der Kunde unterschreibt auf deinem Handy – das PDF ist sofort fertig.',
  solutionSteps: [
    { title: 'Dokument erstellen', description: 'Erstelle das Abnahmeprotokoll, den Rapport oder den Nachweis in der App.' },
    { title: 'Unterschreiben lassen', description: 'Drehe das Handy zum Kunden – er unterschreibt mit dem Finger auf dem Display.' },
    { title: 'Sofort als PDF', description: 'Das unterschriebene Dokument ist sofort als PDF verfügbar und archiviert.' },
  ],
  ctaText: 'Digital unterschreiben lassen',
  featureHighlights: [
    { title: 'Finger-Unterschrift', description: 'Unterschrift direkt auf dem Smartphone-Display.' },
    { title: 'Sofort-PDF', description: 'Unterschriebenes Dokument sofort als PDF verfügbar.' },
    { title: 'Auto-Versand', description: 'PDF geht sofort an alle Beteiligten per Mail.' },
    { title: 'Rechtssicher', description: 'Digitale Unterschriften sind rechtlich anerkannt.' },
    { title: 'Offline möglich', description: 'Unterschrift auch ohne Internetverbindung einholen.' },
    { title: 'Automatisch archiviert', description: 'Alle unterschriebenen Dokumente digital gespeichert.' },
  ],
  closingHeadline: 'Unterschrieben. Gespeichert. Bewiesen.',
  closingText: 'Starte jetzt und hol digitale Unterschriften direkt vor Ort.',
  relatedLinks: [
      {
          href: '/loesungen/abnahmeprotokoll-digital',
          label: 'Abnahmeprotokoll digital',
          description: 'Abnahmeprotokolle erstellen und direkt digital unterschreiben.'
      },
      {
          href: '/loesungen/stundennachweise-digital',
          label: 'Stundennachweise digital',
          description: 'Auch Stundennachweise mit digitaler Unterschrift versehen.'
      },
      {
          href: '/loesungen/uebergabeprotokoll-reinigung',
          label: 'Übergabeprotokoll Reinigung',
          description: 'Auch Übergabeprotokolle digital unterschreiben lassen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
