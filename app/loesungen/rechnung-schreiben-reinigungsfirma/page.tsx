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
    { icon: '✍️', text: 'Stundenlang Rechnungen tippen statt neue Aufträge zu gewinnen.' },
    { icon: '❌', text: 'Leistungen werden vergessen oder falsch berechnet – das kostet Geld.' },
    { icon: '🐌', text: 'Rechnungen werden erst Wochen nach Auftragsabschluss geschrieben.' },
    { icon: '📂', text: 'Kein Überblick über offene und bezahlte Rechnungen.' },
  ],
  solutionTitle: 'Professionelle Rechnungen per Knopfdruck',
  solutionDescription: 'Taskey verbindet Leistungserfassung und Rechnungsstellung nahtlos.',
  solutionSteps: [
    { icon: '📋', title: 'Leistungen erfassen', description: 'Ihre Teams dokumentieren alle erbrachten Reinigungsleistungen digital in Taskey.' },
    { icon: '🧾', title: 'Rechnung generieren', description: 'Aus den erfassten Leistungen erstellt Taskey automatisch eine korrekte Rechnung.' },
    { icon: '📤', title: 'Versenden & nachverfolgen', description: 'Rechnung per E-Mail versenden und Zahlungseingänge im Blick behalten.' },
  ],
  ctaText: 'Jetzt Rechnungen automatisieren',
  featureHighlights: [
    { icon: '🔢', title: 'Automatische Berechnung', description: 'Stunden, Flächen und Materialien werden automatisch korrekt berechnet.' },
    { icon: '🎨', title: 'Professionelles Layout', description: 'Ihre Rechnungen erscheinen im eigenen Firmendesign mit Logo.' },
    { icon: '🔗', title: 'Leistungsnachweis-Verknüpfung', description: 'Jede Rechnung ist mit den zugehörigen Leistungsnachweisen verknüpft.' },
    { icon: '📧', title: 'Digitaler Versand', description: 'Rechnungen direkt per E-Mail oder als PDF exportieren.' },
    { icon: '💰', title: 'Zahlungsverfolgung', description: 'Offene, bezahlte und überfällige Rechnungen auf einen Blick.' },
    { icon: '🔄', title: 'Wiederkehrende Rechnungen', description: 'Für Daueraufträge automatische monatliche Rechnungen erstellen.' },
  ],
  closingHeadline: 'Nie wieder Rechnungschaos',
  closingText: 'Taskey macht Ihre Rechnungsstellung so einfach wie nie. Mehr Umsatz, weniger Büroarbeit.',
}

export default function Page() {
  return <LandingPageTemplate data={data} />
}
