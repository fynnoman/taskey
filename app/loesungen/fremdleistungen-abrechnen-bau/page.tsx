import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Fremdleistungen abrechnen Bau – Taskey',
  description: 'Fremdleistungen im Bau korrekt abrechnen. Taskey dokumentiert Leistungen von Subunternehmern und erstellt Abrechnungen automatisch.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/fremdleistungen-abrechnen-bau' },
};

const data: LandingPageData = {
  badge: 'Fremdleistungen',
  headline: 'Fremdleistungen im',
  headlineHighlight: 'Bau abrechnen',
  subheadline: 'Korrekt, transparent und ohne Streit.',
  heroDescription: 'Subunternehmer-Rechnungen prüfen, Leistungen abgleichen, Freigaben erteilen – Taskey macht die Abrechnung von Fremdleistungen transparent und effizient.',
  painPoints: [
    { icon: '🧾', text: 'Rechnungen von Subs ohne klare Leistungsnachweise.' },
    { icon: '❓', text: 'Wurde die Leistung wirklich erbracht? Schwer nachzuprüfen.' },
    { icon: '💸', text: 'Zu viel bezahlt, weil Leistungen nicht korrekt kontrolliert wurden.' },
    { icon: '📊', text: 'Kein Überblick über Gesamtkosten aller Fremdleistungen pro Projekt.' },
  ],
  solutionTitle: 'Fremdleistungen lückenlos dokumentieren',
  solutionDescription: 'Taskey verknüpft Leistungsnachweise mit Rechnungen für transparente Abrechnung.',
  solutionSteps: [
    { icon: '📋', title: 'Leistungen dokumentieren', description: 'Erbrachte Fremdleistungen mit Fotos und Mengen dokumentieren.' },
    { icon: '🧾', title: 'Rechnung prüfen', description: 'Eingehende Rechnungen mit dokumentierten Leistungen abgleichen.' },
    { icon: '✅', title: 'Freigeben & bezahlen', description: 'Geprüfte Rechnungen freigeben und Zahlung veranlassen.' },
  ],
  ctaText: 'Jetzt Fremdleistungen kontrollieren',
  featureHighlights: [
    { icon: '📸', title: 'Leistungsnachweise', description: 'Erbrachte Leistungen mit Fotos und Dokumentation belegen.' },
    { icon: '🧾', title: 'Rechnungsprüfung', description: 'Rechnungen automatisch mit Leistungsnachweisen abgleichen.' },
    { icon: '✅', title: 'Freigabe-Workflow', description: 'Mehrstufiger Freigabeprozess für Subunternehmer-Rechnungen.' },
    { icon: '📊', title: 'Kostenübersicht', description: 'Fremdleistungskosten pro Projekt und Gewerk analysieren.' },
    { icon: '📋', title: 'Vertragsbezug', description: 'Abrechnungen immer im Kontext des Vertrags prüfen.' },
    { icon: '📁', title: 'Revisionssicher', description: 'Alle Prüfungen und Freigaben dokumentiert und archiviert.' },
  ],
  closingHeadline: 'Fremdleistungen – transparent abgerechnet.',
  closingText: 'Taskey gibt Ihnen die Kontrolle über alle Fremdleistungskosten auf Ihren Baustellen.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
