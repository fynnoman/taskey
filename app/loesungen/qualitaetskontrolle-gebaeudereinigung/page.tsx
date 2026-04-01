import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Qualitätskontrolle Gebäudereinigung App | Taskey',
  description: 'Qualitätskontrolle für Gebäudereinigung per App: Checklisten, Fotodokumentation, Bewertungen. Objektbegehungen digital. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/qualitaetskontrolle-gebaeudereinigung' },
};

const data: LandingPageData = {
  badge: 'Qualitätskontrolle',
  headline: 'Reinigungsqualität –',
  headlineHighlight: 'messbar & nachweisbar.',
  subheadline: 'Digitale Objektbegehungen, Checklisten und Fotodokumentation – Qualität sichtbar machen.',
  heroDescription: 'Taskey digitalisiert die Qualitätskontrolle in der Gebäudereinigung: Objektbegehungen per App, Bewertungen pro Raum, Fotodokumentation und automatische Reports.',
  painPoints: [
    { icon: '📋', text: 'Qualitätskontrollen auf Papier sind zeitaufwändig und landen im Ordner.' },
    { icon: '📊', text: 'Keine Auswertungen möglich – Qualitätstrends bleiben unsichtbar.' },
    { icon: '📞', text: 'Kunden melden Mängel – du hast keine strukturierte Reaktion.' },
    { icon: '👀', text: 'Objektleiter müssen jeden Tag vor Ort kontrollieren – unpraktisch.' },
  ],
  solutionTitle: 'Qualität digital kontrollieren.',
  solutionDescription: 'Begehungen per App, Bewertungen pro Raum, Reports an Kunden.',
  solutionSteps: [
    { icon: '📱', title: 'Begehung starten', description: 'Öffne das Objekt in der App und starte eine Qualitätsbegehung.' },
    { icon: '⭐', title: 'Räume bewerten', description: 'Bewerte jeden Raum nach Kriterien, mache Fotos bei Mängeln.' },
    { icon: '📤', title: 'Report generieren', description: 'Automatischer Qualitätsbericht als PDF – für den Kunden oder intern.' },
  ],
  ctaText: 'Qualitätskontrolle digitalisieren',
  featureHighlights: [
    { icon: '📱', title: 'Mobile Begehungen', description: 'Qualitätsbegehungen direkt auf dem Smartphone durchführen.' },
    { icon: '⭐', title: 'Bewertungssystem', description: 'Bewerte Räume nach definierten Qualitätskriterien.' },
    { icon: '📸', title: 'Mangel-Fotos', description: 'Mängel fotografieren und sofort zuordnen.' },
    { icon: '📊', title: 'Qualitäts-Trends', description: 'Sieh, wie sich die Qualität pro Objekt entwickelt.' },
    { icon: '📄', title: 'Kunden-Reports', description: 'Automatische Qualitätsberichte für Kunden.' },
    { icon: '🔔', title: 'Mangel-Nachverfolgung', description: 'Mängel tracken bis zur Beseitigung.' },
  ],
  closingHeadline: 'Qualität steuern. Digital.',
  closingText: 'Starte jetzt und mach Reinigungsqualität messbar.',
  relatedLinks: [
      {
          href: '/loesungen/checklisten-reinigung-digital',
          label: 'Checklisten Reinigung',
          description: 'Digitale Checklisten als Basis für jede Qualitätskontrolle.'
      },
      {
          href: '/loesungen/objektbegehung-reinigung-dokumentieren',
          label: 'Objektbegehung dokumentieren',
          description: 'Begehungen als Teil der Qualitätssicherung dokumentieren.'
      },
      {
          href: '/loesungen/kundenfeedback-reinigung',
          label: 'Kundenfeedback',
          description: 'Qualitätskontrolle durch Feedback Ihrer Kunden ergänzen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
