import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Winterdienst & Reinigung Software – Beides in einer App | Taskey',
  description: 'Winterdienst und Gebäudereinigung kombiniert: Einsatzplanung, Streudokumentation, Reinigungsnachweise. Für Reinigungsunternehmen mit Winterdienst.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/winterdienst-reinigung-software' },
};

const data: LandingPageData = {
  badge: 'Winterdienst',
  headline: 'Winterdienst + Reinigung –',
  headlineHighlight: 'eine App für beides.',
  subheadline: 'Viele Reinigungsunternehmen bieten Winterdienst an. Taskey vereint beides in einer Lösung.',
  heroDescription: 'Winterdienst ist für viele Gebäudereiniger ein wichtiges Zusatzgeschäft. Taskey hilft dir, Winterdienst-Einsätze genauso professionell zu planen und zu dokumentieren wie deine Reinigungsaufträge.',
  painPoints: [
    { text: 'Winterdienst und Reinigung laufen in separaten Systemen – doppelter Aufwand.' },
    { text: 'Streunachweise fehlen, wenn es zur Haftungsfrage kommt.' },
    { text: 'Wetterabhaengige Einsatzplanung ist ohne Tool chaotisch.' },
    { text: 'Mitarbeiter wissen nicht, ob sie morgens erst streuen oder reinigen sollen.' },
  ],
  solutionTitle: 'Winterdienst. Reinigung. Ein System.',
  solutionDescription: 'Taskey managed Winterdienst und Reinigung in einer Plattform – mit allen Nachweisen.',
  solutionSteps: [
    { title: 'Winterdienst-Objekte anlegen', description: 'Definiere Streu- und Raeumrouten als Objekte in Taskey.' },
    { title: 'Wetter-basiert planen', description: 'Plane Einsätze basierend auf Wettervorhersage und Streupflicht.' },
    { title: 'Streu-Nachweis per NFC', description: 'Mitarbeiter scannen NFC-Tags an Streupunkten – mit GPS und Zeitstempel.' },
  ],
  ctaText: 'Winterdienst digitalisieren',
  featureHighlights: [
    { title: 'Streu-Dokumentation', description: 'Streumittel, Menge, Zeitpunkt und GPS dokumentiert.' },
    { title: 'NFC an Streupunkten', description: 'NFC-Tags an jedem Streupunkt für lückenlose Nachweise.' },
    { title: 'Haftungsschutz', description: 'Digitale Nachweise bei Haftungsfragen.' },
    { title: 'Routen-Planung', description: 'Raeumrouten optimieren und Teams zuweisen.' },
    { title: 'Kombinierte Einsätze', description: 'Winterdienst und Reinigung in einem Einsatzplan.' },
    { title: 'Wetterintegration', description: 'Einsatzplanung basierend auf Wetterdaten.' },
  ],
  closingHeadline: 'Winterdienst. Reinigung. Alles digital. Alles nachgewiesen.',
  closingText: 'Teste Taskey 14 Tage kostenlos und manage Winterdienst und Reinigung in einer App.',
  relatedLinks: [
    { href: '/loesungen/tourenplanung-reinigungsteams', label: 'Tourenplanung', description: 'Routen und Touren effizient planen.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Nachweis', description: 'Leistungsnachweise per NFC.' },
    { href: '/loesungen/einsatzplanung-gebäudereinigung', label: 'Einsatzplanung', description: 'Einsätze intelligent planen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
