import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'App für Handwerker Außendienst – Taskey',
  description: 'Die App für Handwerker im Außendienst. Taskey gibt Ihren Monteuren alle Infos auf das Smartphone – Aufträge, Zeiten, Dokumente.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/app-fuer-handwerker-aussendienst' },
};

const data: LandingPageData = {
  badge: 'Außendienst-App',
  headline: 'Die App für',
  headlineHighlight: 'Handwerker im Außendienst',
  subheadline: 'Alles auf dem Smartphone – statt im Büro anrufen.',
  heroDescription: 'Ihre Monteure brauchen Auftragsdetails, Kundenadressen und Dokumentvorlagen – und zwar auf der Baustelle, nicht im Büro. Taskey gibt ihnen alles auf das Smartphone.',
  painPoints: [
    { icon: '📞', text: 'Monteure rufen ständig im Büro an, um Infos zu bekommen.' },
    { icon: '📋', text: 'Auftragszettel werden auf der Baustelle verloren oder vergessen.' },
    { icon: '📝', text: 'Stundennachweise und Berichte müssen abends noch geschrieben werden.' },
    { icon: '📂', text: 'Keine Pläne, Fotos oder Dokumente vor Ort verfügbar.' },
  ],
  solutionTitle: 'Das mobile Büro für Ihre Monteure',
  solutionDescription: 'Taskey macht das Smartphone zum Arbeitsgerät Ihrer Außendienstler.',
  solutionSteps: [
    { icon: '📱', title: 'App öffnen', description: 'Alle heutigen Aufträge mit Details, Adresse und Kundeninfos sehen.' },
    { icon: '⏱️', title: 'Arbeitszeit erfassen', description: 'Per Tap einstempeln, Pausen dokumentieren, ausstempeln.' },
    { icon: '📸', title: 'Dokumentieren', description: 'Fotos machen, Berichte schreiben, Unterschrift einholen – alles in der App.' },
  ],
  ctaText: 'Jetzt Außendienst digitalisieren',
  featureHighlights: [
    { icon: '📋', title: 'Auftragsübersicht', description: 'Alle heutigen Aufträge mit Details und Navigation.' },
    { icon: '⏱️', title: 'Mobile Zeiterfassung', description: 'Stempeln per App, NFC oder GPS.' },
    { icon: '📸', title: 'Fotodokumentation', description: 'Vorher-/Nachher-Fotos direkt dem Auftrag zuordnen.' },
    { icon: '✍️', title: 'Digitale Unterschrift', description: 'Kunden unterschreiben auf dem Smartphone.' },
    { icon: '📄', title: 'Dokumente', description: 'Pläne, Anleitungen und Checklisten immer dabei.' },
    { icon: '💬', title: 'Team-Chat', description: 'Direkt mit dem Büro oder anderen Teams kommunizieren.' },
  ],
  closingHeadline: 'Das Büro – immer in der Hosentasche.',
  closingText: 'Taskey gibt Ihren Außendienstlern alles, was sie brauchen – direkt auf dem Smartphone.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
