import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Fremdleistungen abrechnen Bau – Taskey',
  description: 'Fremdleistungen im Bau korrekt abrechnen. Taskey dokumentiert Leistungen von Subunternehmern und erstellt Abrechnungen automatisch.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/fremdleistungen-abrechnen-bau' },
};

const data: LandingPageData = {
  badge: 'Fremdleistungen',
  headline: 'Fremdleistungen im',
  headlineHighlight: 'Bau abrechnen',
  subheadline: 'Korrekt, transparent und ohne Streit.',
  heroDescription: 'Subunternehmer-Rechnungen prüfen, Leistungen abgleichen, Freigaben erteilen – Taskey macht die Abrechnung von Fremdleistungen transparent und effizient.',
  painPoints: [
    { text: 'Rechnungen von Subs ohne klare Leistungsnachweise.' },
    { text: 'Wurde die Leistung wirklich erbracht? Schwer nachzuprüfen.' },
    { text: 'Zu viel bezahlt, weil Leistungen nicht korrekt kontrolliert wurden.' },
    { text: 'Kein Überblick über Gesamtkosten aller Fremdleistungen pro Projekt.' },
  ],
  solutionTitle: 'Fremdleistungen lückenlos dokumentieren',
  solutionDescription: 'Taskey verknüpft Leistungsnachweise mit Rechnungen für transparente Abrechnung.',
  solutionSteps: [
    { title: 'Leistungen dokumentieren', description: 'Erbrachte Fremdleistungen mit Fotos und Mengen dokumentieren.' },
    { title: 'Rechnung prüfen', description: 'Eingehende Rechnungen mit dokumentierten Leistungen abgleichen.' },
    { title: 'Freigeben & bezahlen', description: 'Geprüfte Rechnungen freigeben und Zahlung veranlassen.' },
  ],
  ctaText: 'Jetzt Fremdleistungen kontrollieren',
  featureHighlights: [
    { title: 'Leistungsnachweise', description: 'Erbrachte Leistungen mit Fotos und Dokumentation belegen.' },
    { title: 'Rechnungsprüfung', description: 'Rechnungen automatisch mit Leistungsnachweisen abgleichen.' },
    { title: 'Freigabe-Workflow', description: 'Mehrstufiger Freigabeprozess für Subunternehmer-Rechnungen.' },
    { title: 'Kostenübersicht', description: 'Fremdleistungskosten pro Projekt und Gewerk analysieren.' },
    { title: 'Vertragsbezug', description: 'Abrechnungen immer im Kontext des Vertrags prüfen.' },
    { title: 'Revisionssicher', description: 'Alle Prüfungen und Freigaben dokumentiert und archiviert.' },
  ],
  closingHeadline: 'Fremdleistungen – transparent abgerechnet.',
  closingText: 'Taskey gibt Ihnen die Kontrolle über alle Fremdleistungskosten auf Ihren Baustellen.',
  relatedLinks: [
      {
          href: '/loesungen/subunternehmer-verwalten-bau',
          label: 'Subunternehmer verwalten',
          description: 'Subunternehmer und deren Leistungen zentral koordinieren.'
      },
      {
          href: '/loesungen/nachunternehmer-dokumentation',
          label: 'Nachunternehmer-Dokumentation',
          description: 'Leistungen von Nachunternehmern lückenlos dokumentieren.'
      },
      {
          href: '/loesungen/bauabrechnung-software',
          label: 'Bauabrechnung',
          description: 'Fremdleistungen nahtlos in die Gesamtabrechnung integrieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
