import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Übergabeprotokoll Reinigung – Taskey',
  description: 'Übergabeprotokolle für die Gebäudereinigung digital erstellen. Taskey dokumentiert Zustand, Mängel und Vereinbarungen bei der Objektübergabe.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/uebergabeprotokoll-reinigung' },
};

const data: LandingPageData = {
  badge: 'Übergabeprotokoll',
  headline: 'Übergabeprotokolle für die',
  headlineHighlight: 'Reinigung',
  subheadline: 'digital erstellen und unterschreiben.',
  heroDescription: 'Professionelle Übergabeprotokolle bei Objektwechsel, Vertragsbeginn oder Qualitätsabnahme – digital, mit Fotos und digitaler Unterschrift.',
  painPoints: [
    { icon: '📝', text: 'Handschriftliche Protokolle sind unleserlich und unvollständig.' },
    { icon: '📂', text: 'Protokolle gehen verloren – keine Nachweise bei Streitigkeiten.' },
    { icon: '📸', text: 'Zustand vor Reinigungsbeginn wird nicht dokumentiert.' },
    { icon: '⚖️', text: 'Bei Schäden fehlen Beweise für den Ausgangszustand.' },
  ],
  solutionTitle: 'Professionelle Übergabeprotokolle in Minuten',
  solutionDescription: 'Taskey erstellt Übergabeprotokolle digital – rechtssicher und vollständig.',
  solutionSteps: [
    { icon: '📋', title: 'Protokoll erstellen', description: 'Räume, Zustand und Besonderheiten systematisch erfassen.' },
    { icon: '📸', title: 'Fotos hinzufügen', description: 'Den Zustand mit Fotos dokumentieren – als Beweis.' },
    { icon: '✍️', title: 'Digital unterschreiben', description: 'Beide Parteien unterschreiben direkt auf dem Tablet oder Smartphone.' },
  ],
  ctaText: 'Jetzt Übergaben digital dokumentieren',
  featureHighlights: [
    { icon: '📋', title: 'Standardisierte Vorlagen', description: 'Professionelle Protokollvorlagen für verschiedene Übergabetypen.' },
    { icon: '📸', title: 'Fotodokumentation', description: 'Zustand jedes Raums mit Fotos festhalten.' },
    { icon: '✍️', title: 'Digitale Unterschrift', description: 'Rechtssichere digitale Unterschriften beider Parteien.' },
    { icon: '📤', title: 'Sofort verfügbar', description: 'Protokoll sofort als PDF per E-Mail an alle Beteiligten.' },
    { icon: '📁', title: 'Archivierung', description: 'Alle Protokolle digital archiviert und jederzeit abrufbar.' },
    { icon: '🔄', title: 'Vergleichbar', description: 'Übergabe- und Rücknahmeprotokoll vergleichen.' },
  ],
  closingHeadline: 'Übergaben – professionell dokumentiert.',
  closingText: 'Taskey macht Ihre Übergabeprotokolle rechtssicher und professionell.',
  relatedLinks: [
      {
          href: '/loesungen/reinigungsplaene-digital-erstellen',
          label: 'Reinigungspläne digital',
          description: 'Übergabeprotokolle basieren auf den vereinbarten Reinigungsplänen.'
      },
      {
          href: '/loesungen/qualitaetskontrolle-gebaeudereinigung',
          label: 'Qualitätskontrolle',
          description: 'Übergabeprotokolle als Teil der Qualitätssicherung.'
      },
      {
          href: '/loesungen/digitale-unterschrift-bauabnahme',
          label: 'Digitale Unterschrift',
          description: 'Übergabeprotokolle digital unterschreiben lassen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
