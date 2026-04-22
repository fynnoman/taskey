import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'NFC Leistungsnachweis Reinigung – Automatisch & Faelschungssicher | Taskey',
  description: 'NFC-basierte Leistungsnachweise für Gebäudereiniger: Mitarbeiter scannt NFC-Tag am Objekt, Nachweis wird automatisch erstellt. DSGVO-konform. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/nfc-leistungsnachweis-reinigung' },
};

const data: LandingPageData = {
  badge: 'NFC Leistungsnachweis',
  headline: 'Leistungsnachweise per NFC –',
  headlineHighlight: 'faelschungssicher & automatisch.',
  subheadline: 'Kein Papier, kein Streit. Der NFC-Tag beweist: gereinigt, wann, wo und von wem.',
  heroDescription: 'Klebe einen NFC-Tag an jedes Reinigungsobjekt. Deine Mitarbeiter scannen beim Kommen und Gehen – der Leistungsnachweis erstellt sich automatisch.',
  painPoints: [
    { text: 'Auftraggeber bezweifeln, dass gereinigt wurde – du hast keinen Beweis.' },
    { text: 'Papier-Leistungsnachweise gehen verloren oder werden falsch ausgefüllt.' },
    { text: 'Nachweispflicht gegenueber Kunden kostet Stunden an Bueroarbeit.' },
    { text: 'Bei Reklamationen stehst du ohne Dokumentation da.' },
  ],
  solutionTitle: 'Ein Scan. Ein Nachweis. Fertig.',
  solutionDescription: 'NFC-Tags an jedem Objekt – dein Team scannt, Taskey dokumentiert alles automatisch.',
  solutionSteps: [
    { title: 'NFC-Tag am Objekt anbringen', description: 'Ein kleiner Aufkleber am Eingang oder in der Putzschleuse – einmal kleben, dauerhaft nutzen.' },
    { title: 'Mitarbeiter scannt mit dem Handy', description: 'Beim Kommen und Gehen einfach das Handy an den Tag halten – Zeitstempel + GPS werden erfasst.' },
    { title: 'Nachweis wird automatisch erstellt', description: 'Taskey generiert den Leistungsnachweis mit Uhrzeit, Standort und optional Foto – bereit für den Kunden.' },
  ],
  ctaText: 'NFC-Nachweise starten',
  featureHighlights: [
    { title: 'GPS-Verifizierung', description: 'Jeder NFC-Scan wird mit GPS-Position dokumentiert.' },
    { title: 'Fotodokumentation', description: 'Vorher/Nachher-Fotos mit Zeitstempel als Qualitätsnachweis.' },
    { title: 'PDF-Export', description: 'Leistungsnachweise als PDF für Auftraggeber exportieren.' },
    { title: 'Echtzeit-Dashboard', description: 'Sieh live, welche Objekte bereits gereinigt wurden.' },
    { title: 'Manipulationssicher', description: 'NFC-Tags können nicht kopiert oder gefaelscht werden.' },
    { title: 'Mehrsprachig', description: 'Die App funktioniert in 3 Sprachen – perfekt für internationale Teams.' },
  ],
  closingHeadline: 'NFC scannen. Nachweis fertig. Kunde zufrieden.',
  closingText: 'Teste Taskey 3 Monate kostenlos und erlebe, wie einfach Leistungsnachweise in der Reinigung sein können.',
  relatedLinks: [
    { href: '/loesungen/leistungsnachweis-gebäudereinigung', label: 'Leistungsnachweis Gebäudereinigung', description: 'Alle Leistungsnachweise digital an einem Ort.' },
    { href: '/loesungen/qualitaetskontrolle-gebäudereinigung', label: 'Qualitätskontrolle Reinigung', description: 'Qualität prüfen und dokumentieren – direkt nach der Reinigung.' },
    { href: '/loesungen/arbeitszeiterfassung-reinigungsfirma', label: 'Zeiterfassung Reinigung', description: 'Arbeitszeiten automatisch mit NFC-Tags erfassen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
