import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Industriereinigung Software – Auftraege & Dokumentation | Taskey',
  description: 'Software fuer Industriereinigung: Hallenreinigung, Maschinenreinigung, Tankreinigung – Auftraege planen, Teams koordinieren, Nachweise erstellen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/industriereinigung-software' },
};

const data: LandingPageData = {
  badge: 'Industriereinigung',
  headline: 'Industriereinigung –',
  headlineHighlight: 'komplexe Auftraege, einfach verwaltet.',
  subheadline: 'Hallen, Maschinen, Tanks – jeder Auftrag dokumentiert und abgerechnet.',
  heroDescription: 'Industriereinigung ist komplex: verschiedene Reinigungsverfahren, Sicherheitsvorschriften, grosse Teams. Taskey bringt Struktur in jeden Auftrag.',
  painPoints: [
    { text: 'Grosse Auftraege mit vielen Reinigungskraeften sind schwer zu koordinieren.' },
    { text: 'Sicherheitsvorschriften muessen dokumentiert und eingehalten werden.' },
    { text: 'Verschiedene Reinigungsverfahren pro Auftrag erfordern genaue Planung.' },
    { text: 'Nachweise fuer Industriekunden muessen lueckenlos und professionell sein.' },
  ],
  solutionTitle: 'Industriereinigung. Strukturiert. Sicher. Dokumentiert.',
  solutionDescription: 'Jeder Auftrag mit Checkliste, Sicherheitsprotokoll und Nachweis.',
  solutionSteps: [
    { title: 'Auftrag planen', description: 'Definiere Reinigungsverfahren, benoetigtes Personal und Sicherheitsanforderungen pro Auftrag.' },
    { title: 'Team koordinieren', description: 'Weise qualifizierte Reinigungskraefte zu und teile Sicherheitsunterweisungen digital.' },
    { title: 'Lueckenlos dokumentieren', description: 'Checklisten, Fotos, Zeitstempel und Sicherheitsprotokolle – alles in einer Akte.' },
  ],
  ctaText: 'Industriereinigung digitalisieren',
  featureHighlights: [
    { title: 'Sicherheitschecklisten', description: 'Digitale Sicherheitsunterweisungen vor jedem Einsatz.' },
    { title: 'Verfahrensdokumentation', description: 'Reinigungsverfahren pro Objekt hinterlegen und abrufen.' },
    { title: 'Grossauftrags-Management', description: 'Mehrere Teams auf einem Auftrag koordinieren.' },
    { title: 'Compliance-Nachweise', description: 'Lueckenlose Dokumentation fuer Audits und Zertifizierungen.' },
    { title: 'Materialverwaltung', description: 'Reinigungsmittel und Spezialgeraete pro Auftrag tracken.' },
    { title: 'Kundenberichte', description: 'Professionelle Berichte mit Fotos und Protokollen erstellen.' },
  ],
  closingHeadline: 'Industriereinigung. Professionell. Nachweisbar.',
  closingText: 'Teste Taskey 14 Tage kostenlos und bringe System in deine Industriereinigung.',
  relatedLinks: [
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung', description: 'Digitale Checklisten fuer jeden Reinigungsauftrag.' },
    { href: '/loesungen/qualitaetskontrolle-gebaeudereinigung', label: 'Qualitaetskontrolle', description: 'Qualitaet pruefen und dokumentieren.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'Jeden Einsatz per NFC nachweisen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
