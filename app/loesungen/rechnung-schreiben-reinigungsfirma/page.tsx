import type { Metadata } from 'next'
import LandingPageTemplate, { LandingPageData } from '@/components/landing/LandingPageTemplate'

export const metadata: Metadata = {
  title: 'Rechnung schreiben Reinigungsfirma – Taskey',
  description: 'Rechnungen für Reinigungsaufträge schnell und professionell erstellen. Taskey automatisiert Ihre Abrechnung – von Leistungsnachweis bis Rechnung in Sekunden.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/rechnung-schreiben-reinigungsfirma' },
}

const data: LandingPageData = {
  badge: 'Rechnungsstellung',
  headline: 'Rechnungen für Ihre',
  headlineHighlight: 'Reinigungsfirma',
  subheadline: 'in Sekunden erstellen',
  heroDescription: 'Schluss mit manueller Rechnungsstellung. Taskey erstellt professionelle Rechnungen direkt aus Ihren Leistungsnachweisen – automatisch, fehlerfrei und sofort versandbereit.',
  painPoints: [
    { text: 'Stundenlang Rechnungen tippen statt neue Aufträge zu gewinnen.' },
    { text: 'Leistungen werden vergessen oder falsch berechnet – das kostet Geld.' },
    { text: 'Rechnungen werden erst Wochen nach Auftragsabschluss geschrieben.' },
    { text: 'Kein Überblick über offene und bezahlte Rechnungen.' },
  ],
  solutionTitle: 'Professionelle Rechnungen per Knopfdruck',
  solutionDescription: 'Taskey verbindet Leistungserfassung und Rechnungsstellung nahtlos.',
  solutionSteps: [
    { title: 'Leistungen erfassen', description: 'Ihre Teams dokumentieren alle erbrachten Reinigungsleistungen digital in Taskey.' },
    { title: 'Rechnung generieren', description: 'Aus den erfassten Leistungen erstellt Taskey automatisch eine korrekte Rechnung.' },
    { title: 'Versenden & nachverfolgen', description: 'Rechnung per E-Mail versenden und Zahlungseingänge im Blick behalten.' },
  ],
  ctaText: 'Jetzt Rechnungen automatisieren',
  featureHighlights: [
    { title: 'Automatische Berechnung', description: 'Stunden, Flächen und Materialien werden automatisch korrekt berechnet.' },
    { title: 'Professionelles Layout', description: 'Ihre Rechnungen erscheinen im eigenen Firmendesign mit Logo.' },
    { title: 'Leistungsnachweis-Verknüpfung', description: 'Jede Rechnung ist mit den zugehörigen Leistungsnachweisen verknüpft.' },
    { title: 'Digitaler Versand', description: 'Rechnungen direkt per E-Mail oder als PDF exportieren.' },
    { title: 'Zahlungsverfolgung', description: 'Offene, bezahlte und überfällige Rechnungen auf einen Blick.' },
    { title: 'Wiederkehrende Rechnungen', description: 'Für Daueraufträge automatische monatliche Rechnungen erstellen.' },
  ],
  closingHeadline: 'Nie wieder Rechnungschaos',
  closingText: 'Taskey macht Ihre Rechnungsstellung so einfach wie nie. Mehr Umsatz, weniger Büroarbeit.',
  relatedLinks: [
    { href: '/loesungen/leistungsnachweis-gebaeudereinigung', label: 'Leistungsnachweise', description: 'Erbrachte Reinigungsleistungen dokumentieren – als Basis für die Rechnung.' },
    { href: '/loesungen/kundendatenbank-reinigungsfirma', label: 'Kundendatenbank Reinigung', description: 'Alle Kundendaten und Vertragsinformationen für schnelle Rechnungserstellung.' },
    { href: '/loesungen/sla-tracking-reinigungsfirma', label: 'SLA-Tracking', description: 'Service Level Agreements tracken und leistungsgerecht abrechnen.' },
  ],
}

export default function Page() {
  return <LandingPageTemplate data={data} />
}
