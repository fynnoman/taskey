import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'SLA Tracking Reinigungsfirma – Taskey',
  description: 'SLA Tracking für Reinigungsfirmen. Taskey überwacht Service Level Agreements und stellt sicher, dass Sie Ihre Vertragspflichten einhalten.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/sla-tracking-reinigungsfirma' },
};

const data: LandingPageData = {
  badge: 'SLA Tracking',
  headline: 'SLA Tracking für',
  headlineHighlight: 'Reinigungsfirmen',
  subheadline: 'Vertragliche Leistungen einhalten und nachweisen.',
  heroDescription: 'Ihre Kunden erwarten die vertraglich vereinbarte Reinigungsqualität. Taskey überwacht Ihre SLAs automatisch und warnt, bevor Vertragspflichten verletzt werden.',
  painPoints: [
    { text: 'SLA-Verletzungen werden erst bemerkt, wenn der Kunde sich beschwert.' },
    { text: 'Kein Überblick über vereinbarte Leistungen pro Vertrag.' },
    { text: 'Keine Daten, um die Einhaltung von SLAs nachzuweisen.' },
    { text: 'Vertragsstrafen wegen nicht eingehaltener Service Levels.' },
  ],
  solutionTitle: 'SLAs automatisch überwachen',
  solutionDescription: 'Taskey trackt Ihre Leistungen gegen die vereinbarten SLAs in Echtzeit.',
  solutionSteps: [
    { title: 'SLAs definieren', description: 'Vertragliche Service Levels pro Kunde und Objekt hinterlegen.' },
    { title: 'Einhaltung tracken', description: 'Erbrachte Leistungen automatisch gegen SLAs abgleichen.' },
    { title: 'Frühwarnungen', description: 'Benachrichtigungen, bevor ein SLA verletzt wird.' },
  ],
  ctaText: 'Jetzt SLAs im Griff haben',
  featureHighlights: [
    { title: 'SLA-Definition', description: 'Vertragliche Leistungen präzise digital definieren.' },
    { title: 'Echtzeit-Monitoring', description: 'Aktuelle SLA-Einhaltung pro Kunde und Objekt sehen.' },
    { title: 'Frühwarnsystem', description: 'Rechtzeitig gewarnt werden bei drohenden SLA-Verletzungen.' },
    { title: 'SLA-Reports', description: 'Regelmäßige Berichte über SLA-Einhaltung für Kunden.' },
    { title: 'Leistungsnachweis', description: 'Dokumentierte Leistungserbringung als Vertragsnachweis.' },
    { title: 'Vertragsstrafen vermeiden', description: 'Proaktiv handeln statt Vertragsstrafen zahlen.' },
  ],
  closingHeadline: 'SLAs – eingehalten und nachgewiesen.',
  closingText: 'Taskey hilft Ihnen, vertragliche Leistungen zuverlässig zu erbringen und nachzuweisen.',
  relatedLinks: [
      {
          href: '/loesungen/leistungsnachweis-gebaeudereinigung',
          label: 'Leistungsnachweise',
          description: 'SLA-Einhaltung durch Leistungsnachweise dokumentieren.'
      },
      {
          href: '/loesungen/qualitaetskontrolle-gebaeudereinigung',
          label: 'Qualitätskontrolle',
          description: 'SLA-Tracking und Qualitätskontrolle gehen Hand in Hand.'
      },
      {
          href: '/loesungen/kundendatenbank-reinigungsfirma',
          label: 'Kundendatenbank',
          description: 'SLAs pro Kunde verwalten und nachverfolgen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
