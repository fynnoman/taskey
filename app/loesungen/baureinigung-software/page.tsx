import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Baureinigung Software – Baugrob- & Baufeinreinigung planen | Taskey',
  description: 'Software fuer Baureinigung: Baugrobreinigung, Baufeinreinigung und Bauendreinigung planen, dokumentieren und abrechnen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/baureinigung-software' },
};

const data: LandingPageData = {
  badge: 'Baureinigung',
  headline: 'Baureinigung –',
  headlineHighlight: 'vom Rohbau bis zur Uebergabe.',
  subheadline: 'Baugrob, Baufein, Bauend – jede Phase dokumentiert und abgerechnet.',
  heroDescription: 'Baureinigung ist termingebunden und muss perfekt koordiniert sein. Taskey plant jede Phase, dokumentiert den Fortschritt und erstellt den Nachweis fuer den Bautraeger.',
  painPoints: [
    { text: 'Enge Terminvorgaben vom Bautraeger – Verzoegerungen kosten Geld.' },
    { text: 'Verschiedene Reinigungsphasen muessen praezise aufeinander folgen.' },
    { text: 'Maengelreklamationen nach Uebergabe ohne Fotodokumentation nicht widerlegbar.' },
    { text: 'Kalkulation pro Quadratmeter ist ohne System ungenau.' },
  ],
  solutionTitle: 'Baureinigung. Phase fuer Phase. Dokumentiert.',
  solutionDescription: 'Jede Reinigungsphase geplant, fotografiert und abgenommen.',
  solutionSteps: [
    { title: 'Phasen definieren', description: 'Baugrob, Baufein, Bauend – definiere Reinigungsphasen mit Terminen und Anforderungen.' },
    { title: 'Fortschritt tracken', description: 'Dein Team dokumentiert jede Phase mit Fotos und Checklisten.' },
    { title: 'Abnahme digital', description: 'Digitale Abnahme mit Unterschrift – der Bautraeger bestaetigt die Leistung.' },
  ],
  ctaText: 'Baureinigung digitalisieren',
  featureHighlights: [
    { title: 'Phasenplanung', description: 'Baugrob, Baufein, Bauend als separate Phasen planen.' },
    { title: 'Terminueberwachung', description: 'Deadlines im Blick – Warnungen bei Verzoegerungen.' },
    { title: 'Flaechenaufmass', description: 'Quadratmeter erfassen und automatisch kalkulieren.' },
    { title: 'Maengeldokumentation', description: 'Maengel fotografieren und dem Verursacher zuweisen.' },
    { title: 'Digitale Abnahme', description: 'Uebergabeprotokoll mit digitaler Unterschrift.' },
    { title: 'Bautraeger-Berichte', description: 'Professionelle Berichte fuer Bautraeger generieren.' },
  ],
  closingHeadline: 'Baureinigung. Termingerecht. Maengelfrei.',
  closingText: 'Teste Taskey 14 Tage kostenlos und koordiniere deine Baureinigung perfekt.',
  relatedLinks: [
    { href: '/loesungen/uebergabeprotokoll-reinigung', label: 'Uebergabeprotokoll', description: 'Digitale Abnahme mit Unterschrift und Fotodokumentation.' },
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung', description: 'Digitale Checklisten fuer jede Reinigungsphase.' },
    { href: '/loesungen/qualitaetskontrolle-gebaeudereinigung', label: 'Qualitaetskontrolle', description: 'Qualitaet vor der Uebergabe pruefen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
