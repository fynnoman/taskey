import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Bueroreinigung Software – Bueroreinigung effizient planen | Taskey',
  description: 'Software fuer Bueroreinigung: Reinigungsplaene, Einsatzplanung, Qualitaetskontrolle und NFC-Nachweise. Fuer Reinigungsunternehmen im DACH-Raum.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/bueroreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Bueroreinigung',
  headline: 'Bueroreinigung –',
  headlineHighlight: 'sauber geplant. digital dokumentiert.',
  subheadline: 'Buerogebaeude reinigen, Teams koordinieren, Qualitaet sichern – alles in einer App.',
  heroDescription: 'Bueroreinigung ist dein Kerngeschaeft? Dann weisst du: Kundenansprueche sind hoch, Margen duenn und die Planung komplex. Taskey macht deine Bueroreinigung profitabel.',
  painPoints: [
    { text: 'Kunden beschweren sich ueber ungleichmaessige Reinigungsqualitaet.' },
    { text: 'Reinigungskraefte wissen nicht, welche Raeume heute dran sind.' },
    { text: 'Keine Nachweise, dass tatsaechlich gereinigt wurde.' },
    { text: 'Wechselnde Bueronutzungen erfordern flexible Reinigungsplaene.' },
  ],
  solutionTitle: 'Dein Bueroreinigung-Cockpit.',
  solutionDescription: 'Taskey hilft dir, Bueroreinigung effizient zu planen, lueckenlos zu dokumentieren und Kunden zu begeistern.',
  solutionSteps: [
    { title: 'Reinigungsplaene erstellen', description: 'Lege fest, welche Raeume wann gereinigt werden – mit Sonder- und Regelreinigung.' },
    { title: 'Teams einteilen', description: 'Weise Reinigungskraefte den richtigen Gebaeuden und Etagen zu.' },
    { title: 'NFC-Nachweis beim Kunden', description: 'Mitarbeiter scannen NFC-Tags vor Ort – der Auftraggeber sieht den Nachweis digital.' },
  ],
  ctaText: 'Bueroreinigung optimieren',
  featureHighlights: [
    { title: 'Raum-basierte Plaene', description: 'Reinigungsplaene pro Etage, Raum oder Gebaeude.' },
    { title: 'Flexible Intervalle', description: 'Taeglich, woechentlich, monatlich – individuell pro Raum.' },
    { title: 'Kundenzugang', description: 'Auftraggeber sehen Reinigungsnachweise in Echtzeit.' },
    { title: 'Qualitaetschecklisten', description: 'Mitarbeiter arbeiten Checklisten ab und dokumentieren.' },
    { title: 'Beschwerdemanagement', description: 'Reklamationen erfassen und nachverfolgen.' },
    { title: 'Mehrsprachige App', description: 'Reinigungskraefte nutzen die App in ihrer Sprache.' },
  ],
  closingHeadline: 'Bueroreinigung. Professionell. Transparent. Digital.',
  closingText: 'Teste Taskey 14 Tage kostenlos und bringe deine Bueroreinigung auf ein neues Level.',
  relatedLinks: [
    { href: '/loesungen/unterhaltsreinigung-software', label: 'Unterhaltsreinigung', description: 'Regelmaessige Reinigung digital planen.' },
    { href: '/loesungen/reinigungsplaene-digital-erstellen', label: 'Reinigungsplaene', description: 'Digitale Reinigungsplaene erstellen.' },
    { href: '/loesungen/kundenfeedback-reinigung', label: 'Kundenfeedback', description: 'Feedback von Auftraggebern einholen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
