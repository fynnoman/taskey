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
    { text: 'Monteure rufen ständig im Büro an, um Infos zu bekommen.' },
    { text: 'Auftragszettel werden auf der Baustelle verloren oder vergessen.' },
    { text: 'Stundennachweise und Berichte müssen abends noch geschrieben werden.' },
    { text: 'Keine Pläne, Fotos oder Dokumente vor Ort verfügbar.' },
  ],
  solutionTitle: 'Das mobile Büro für Ihre Monteure',
  solutionDescription: 'Taskey macht das Smartphone zum Arbeitsgerät Ihrer Außendienstler.',
  solutionSteps: [
    { title: 'App öffnen', description: 'Alle heutigen Aufträge mit Details, Adresse und Kundeninfos sehen.' },
    { title: 'Arbeitszeit erfassen', description: 'Per Tap einstempeln, Pausen dokumentieren, ausstempeln.' },
    { title: 'Dokumentieren', description: 'Fotos machen, Berichte schreiben, Unterschrift einholen – alles in der App.' },
  ],
  ctaText: 'Jetzt Außendienst digitalisieren',
  featureHighlights: [
    { title: 'Auftragsübersicht', description: 'Alle heutigen Aufträge mit Details und Navigation.' },
    { title: 'Mobile Zeiterfassung', description: 'Stempeln per App, NFC oder GPS.' },
    { title: 'Fotodokumentation', description: 'Vorher-/Nachher-Fotos direkt dem Auftrag zuordnen.' },
    { title: 'Digitale Unterschrift', description: 'Kunden unterschreiben auf dem Smartphone.' },
    { title: 'Dokumente', description: 'Pläne, Anleitungen und Checklisten immer dabei.' },
    { title: 'Team-Chat', description: 'Direkt mit dem Büro oder anderen Teams kommunizieren.' },
  ],
  closingHeadline: 'Das Büro – immer in der Hosentasche.',
  closingText: 'Taskey gibt Ihren Außendienstlern alles, was sie brauchen – direkt auf dem Smartphone.',
  relatedLinks: [
      {
          href: '/loesungen/mobile-zeiterfassung-monteure',
          label: 'Mobile Zeiterfassung',
          description: 'Zeiten unterwegs erfassen – ein Kernfeature der Außendienst-App.'
      },
      {
          href: '/loesungen/handwerker-app-baustelle',
          label: 'App für die Baustelle',
          description: 'Die gleiche App auch auf der Baustelle nutzen.'
      },
      {
          href: '/loesungen/infos-an-monteure-senden',
          label: 'Infos an Monteure',
          description: 'Monteure unterwegs mit allen nötigen Infos versorgen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
