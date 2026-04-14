import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Büroreinigung Software – Büroreinigung effizient planen | Taskey',
  description: 'Software für Büroreinigung: Reinigungspläne, Einsatzplanung, Qualitätskontrolle und NFC-Nachweise. Für Reinigungsunternehmen im DACH-Raum.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/bueroreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Büroreinigung',
  headline: 'Büroreinigung –',
  headlineHighlight: 'sauber geplant. digital dokumentiert.',
  subheadline: 'Buerogebäude reinigen, Teams koordinieren, Qualität sichern – alles in einer App.',
  heroDescription: 'Büroreinigung ist dein Kerngeschäft? Dann weißt du: Kundenansprüche sind hoch, Margen dünn und die Planung komplex. Taskey macht deine Büroreinigung profitabel.',
  painPoints: [
    { text: 'Kunden beschweren sich über ungleichmaessige Reinigungsqualität.' },
    { text: 'Reinigungskräfte wissen nicht, welche Räume heute dran sind.' },
    { text: 'Keine Nachweise, dass tatsaechlich gereinigt wurde.' },
    { text: 'Wechselnde Bueronutzungen erfordern flexible Reinigungspläne.' },
  ],
  solutionTitle: 'Dein Büroreinigung-Cockpit.',
  solutionDescription: 'Taskey hilft dir, Büroreinigung effizient zu planen, lückenlos zu dokumentieren und Kunden zu begeistern.',
  solutionSteps: [
    { title: 'Reinigungspläne erstellen', description: 'Lege fest, welche Räume wann gereinigt werden – mit Sonder- und Regelreinigung.' },
    { title: 'Teams einteilen', description: 'Weise Reinigungskräfte den richtigen Gebäuden und Etagen zu.' },
    { title: 'NFC-Nachweis beim Kunden', description: 'Mitarbeiter scannen NFC-Tags vor Ort – der Auftraggeber sieht den Nachweis digital.' },
  ],
  ctaText: 'Büroreinigung optimieren',
  featureHighlights: [
    { title: 'Raum-basierte Plaene', description: 'Reinigungspläne pro Etage, Raum oder Gebäude.' },
    { title: 'Flexible Intervalle', description: 'Täglich, woechentlich, monatlich – individuell pro Raum.' },
    { title: 'Kundenzugang', description: 'Auftraggeber sehen Reinigungsnachweise in Echtzeit.' },
    { title: 'Qualitätschecklisten', description: 'Mitarbeiter arbeiten Checklisten ab und dokumentieren.' },
    { title: 'Beschwerdemanagement', description: 'Reklamationen erfassen und nachverfolgen.' },
    { title: 'Mehrsprachige App', description: 'Reinigungskräfte nutzen die App in ihrer Sprache.' },
  ],
  closingHeadline: 'Büroreinigung. Professionell. Transparent. Digital.',
  closingText: 'Teste Taskey 14 Tage kostenlos und bringe deine Büroreinigung auf ein neues Level.',
  relatedLinks: [
    { href: '/loesungen/unterhaltsreinigung-software', label: 'Unterhaltsreinigung', description: 'Regelmäßige Reinigung digital planen.' },
    { href: '/loesungen/reinigungspläne-digital-erstellen', label: 'Reinigungspläne', description: 'Digitale Reinigungspläne erstellen.' },
    { href: '/loesungen/kundenfeedback-reinigung', label: 'Kundenfeedback', description: 'Feedback von Auftraggebern einholen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
