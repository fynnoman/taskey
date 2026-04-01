import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'SLA Tracking Reinigungsfirma – Taskey',
  description: 'SLA Tracking für Reinigungsfirmen. Taskey überwacht Service Level Agreements und stellt sicher, dass Sie Ihre Vertragspflichten einhalten.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/sla-tracking-reinigungsfirma' },
};

const data: LandingPageData = {
  badge: 'SLA Tracking',
  headline: 'SLA Tracking für',
  headlineHighlight: 'Reinigungsfirmen',
  subheadline: 'Vertragliche Leistungen einhalten und nachweisen.',
  heroDescription: 'Ihre Kunden erwarten die vertraglich vereinbarte Reinigungsqualität. Taskey überwacht Ihre SLAs automatisch und warnt, bevor Vertragspflichten verletzt werden.',
  painPoints: [
    { icon: '⚠️', text: 'SLA-Verletzungen werden erst bemerkt, wenn der Kunde sich beschwert.' },
    { icon: '📋', text: 'Kein Überblick über vereinbarte Leistungen pro Vertrag.' },
    { icon: '📊', text: 'Keine Daten, um die Einhaltung von SLAs nachzuweisen.' },
    { icon: '💸', text: 'Vertragsstrafen wegen nicht eingehaltener Service Levels.' },
  ],
  solutionTitle: 'SLAs automatisch überwachen',
  solutionDescription: 'Taskey trackt Ihre Leistungen gegen die vereinbarten SLAs in Echtzeit.',
  solutionSteps: [
    { icon: '📋', title: 'SLAs definieren', description: 'Vertragliche Service Levels pro Kunde und Objekt hinterlegen.' },
    { icon: '📊', title: 'Einhaltung tracken', description: 'Erbrachte Leistungen automatisch gegen SLAs abgleichen.' },
    { icon: '🔔', title: 'Frühwarnungen', description: 'Benachrichtigungen, bevor ein SLA verletzt wird.' },
  ],
  ctaText: 'Jetzt SLAs im Griff haben',
  featureHighlights: [
    { icon: '📋', title: 'SLA-Definition', description: 'Vertragliche Leistungen präzise digital definieren.' },
    { icon: '📊', title: 'Echtzeit-Monitoring', description: 'Aktuelle SLA-Einhaltung pro Kunde und Objekt sehen.' },
    { icon: '🔔', title: 'Frühwarnsystem', description: 'Rechtzeitig gewarnt werden bei drohenden SLA-Verletzungen.' },
    { icon: '📈', title: 'SLA-Reports', description: 'Regelmäßige Berichte über SLA-Einhaltung für Kunden.' },
    { icon: '✅', title: 'Leistungsnachweis', description: 'Dokumentierte Leistungserbringung als Vertragsnachweis.' },
    { icon: '💰', title: 'Vertragsstrafen vermeiden', description: 'Proaktiv handeln statt Vertragsstrafen zahlen.' },
  ],
  closingHeadline: 'SLAs – eingehalten und nachgewiesen.',
  closingText: 'Taskey hilft Ihnen, vertragliche Leistungen zuverlässig zu erbringen und nachzuweisen.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
