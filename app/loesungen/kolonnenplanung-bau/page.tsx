import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Kolonnenplanung Bau – Taskey',
  description: 'Kolonnenplanung im Bau digitalisieren. Taskey hilft bei der optimalen Zusammenstellung und Einteilung Ihrer Baukolonnen.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/kolonnenplanung-bau' },
};

const data: LandingPageData = {
  badge: 'Kolonnenplanung',
  headline: 'Kolonnenplanung im',
  headlineHighlight: 'Bau',
  subheadline: 'Teams zusammenstellen, einteilen, koordinieren.',
  heroDescription: 'Die richtige Kolonne auf der richtigen Baustelle – das entscheidet über Produktivität und Qualität. Taskey macht Ihre Kolonnenplanung digital und effizient.',
  painPoints: [
    { text: 'Kolonnen werden nach Bauchgefühl zusammengestellt statt nach Qualifikation.' },
    { text: 'Bei Ausfällen dauert die Umplanung ewig.' },
    { text: 'Keine Übersicht, welche Kolonne wo im Einsatz ist.' },
    { text: 'Unerfahrene und erfahrene Mitarbeiter werden schlecht verteilt.' },
  ],
  solutionTitle: 'Kolonnen digital zusammenstellen',
  solutionDescription: 'Taskey kennt die Fähigkeiten Ihrer Mitarbeiter und hilft bei der optimalen Zusammenstellung.',
  solutionSteps: [
    { title: 'Teams bilden', description: 'Kolonnen nach Qualifikation, Erfahrung und Verfügbarkeit zusammenstellen.' },
    { title: 'Baustellen zuweisen', description: 'Kolonnen den Baustellen zuordnen – mit allen Details zum Einsatz.' },
    { title: 'Team informieren', description: 'Jedes Kolonnenmitglied erhält seine Einteilung auf das Smartphone.' },
  ],
  ctaText: 'Jetzt Kolonnen optimal planen',
  featureHighlights: [
    { title: 'Teamzusammenstellung', description: 'Qualifikationen und Erfahrungen bei der Einteilung berücksichtigen.' },
    { title: 'Einsatzübersicht', description: 'Alle Kolonnen und ihre aktuellen Einsatzorte auf einen Blick.' },
    { title: 'Flexible Umplanung', description: 'Bei Ausfällen schnell umplanen und das Team informieren.' },
    { title: 'Mobile Einsatzpläne', description: 'Jeder Mitarbeiter sieht seinen Einsatzplan auf dem Handy.' },
    { title: 'Leistungsvergleich', description: 'Produktivität der Kolonnen vergleichen und optimieren.' },
    { title: 'Kolonnenleiter', description: 'Verantwortlichkeiten klar zuweisen und kommunizieren.' },
  ],
  closingHeadline: 'Die richtige Kolonne. Die richtige Baustelle.',
  closingText: 'Taskey macht Ihre Kolonnenplanung effizienter – für mehr Produktivität auf jeder Baustelle.',
  relatedLinks: [
      {
          href: '/loesungen/mitarbeiter-auf-baustellen-einteilen',
          label: 'Mitarbeiter einteilen',
          description: 'Einzelne Mitarbeiter flexibel zwischen Kolonnen und Baustellen verschieben.'
      },
      {
          href: '/loesungen/personalplanung-baufirma',
          label: 'Personalplanung',
          description: 'Die übergeordnete Personalplanung für alle Kolonnen.'
      },
      {
          href: '/loesungen/kapazitaetsplanung-handwerk',
          label: 'Kapazitätsplanung',
          description: 'Kolonnenkapazitäten planen und Engpässe vermeiden.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
