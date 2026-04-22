import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Nachkalkulation Reinigungsaufträge – Kosten & Margen im Blick | Taskey',
  description: 'Nachkalkulation für Reinigungsaufträge: Soll-Ist-Vergleich, Stunden- und Materialkosten, Margenanalyse. Für Gebäudereiniger im DACH-Raum.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/nachkalkulation-reinigungsauftraege' },
};

const data: LandingPageData = {
  badge: 'Nachkalkulation',
  headline: 'Nachkalkulation –',
  headlineHighlight: 'weißt du, was ein Auftrag wirklich kostet?',
  subheadline: 'Soll-Ist-Vergleich für jeden Auftrag. Erfahre, wo du Geld verdienst – und wo du draufzahlst.',
  heroDescription: 'Viele Reinigungsunternehmen wissen nicht, ob ein Auftrag profitabel ist. Taskey vergleicht kalkulierte mit tatsaechlichen Kosten und zeigt dir deine wahren Margen.',
  painPoints: [
    { text: 'Du weißt nicht, welche Objekte profitabel sind und welche nicht.' },
    { text: 'Mehraufwand durch Sonderreinigungen wird nicht erfasst.' },
    { text: 'Materialkosten werden nicht pro Auftrag zugeordnet.' },
    { text: 'Fehlende Nachkalkulation fuehrt zu systematisch falschen Angeboten.' },
  ],
  solutionTitle: 'Jeder Auftrag. Transparent kalkuliert.',
  solutionDescription: 'Taskey erfasst alle Kosten automatisch und gibt dir pro Auftrag einen klaren Soll-Ist-Vergleich.',
  solutionSteps: [
    { title: 'Sollwerte hinterlegen', description: 'Kalkulierte Stunden, Materialkosten und Marge pro Objekt definieren.' },
    { title: 'Ist-Werte automatisch', description: 'Tatsaechliche Arbeitszeiten und Materialeinsatz werden automatisch erfasst.' },
    { title: 'Abweichungen analysieren', description: 'Dashboard zeigt Abweichungen, Trends und Handlungsbedarf.' },
  ],
  ctaText: 'Nachkalkulation starten',
  featureHighlights: [
    { title: 'Soll-Ist-Vergleich', description: 'Kalkulierte vs. tatsaechliche Kosten pro Auftrag.' },
    { title: 'Margenanalyse', description: 'Marge pro Objekt, Team oder Zeitraum.' },
    { title: 'Stunden-Tracking', description: 'Tatsaechliche Arbeitsstunden automatisch aus NFC-Scans.' },
    { title: 'Materialkosten', description: 'Verbrauchte Materialien pro Objekt zugeordnet.' },
    { title: 'Trend-Analyse', description: 'Kostentwicklung über Monate hinweg verfolgen.' },
    { title: 'Export für Angebote', description: 'Reale Kosten als Basis für zukuenftige Kalkulationen.' },
  ],
  closingHeadline: 'Nachkalkulation. Ehrlich. Automatisch. Profitabel.',
  closingText: 'Teste Taskey 3 Monate kostenlos und erfahre, was deine Aufträge wirklich kosten.',
  relatedLinks: [
    { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnungen', description: 'Rechnungen auf Basis realer Kosten.' },
    { href: '/loesungen/arbeitszeiterfassung-reinigungsfirma', label: 'Zeiterfassung', description: 'Arbeitszeiten als Basis für Kalkulation.' },
    { href: '/loesungen/reinigungsmittel-verwaltung', label: 'Materialverwaltung', description: 'Materialkosten pro Objekt tracken.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
