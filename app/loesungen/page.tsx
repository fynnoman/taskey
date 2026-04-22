import type { Metadata } from 'next';
import Link from 'next/link';
import CommunicationUSP from '@/components/CommunicationUSP';

export const metadata: Metadata = {
  title: 'Alle Lösungen – Taskey für Gebäudereinigung, Handwerk & Facility Management',
  description: 'Entdecken Sie alle Taskey-Lösungen: NFC-Leistungsnachweise, Zeiterfassung, Einsatzplanung, Qualitätskontrolle, Objektverwaltung, Live-Margen und mehr. Für Gebäudereiniger, Handwerker und Facility Manager.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen' },
};

const categories = [
  {
    title: 'Zeiterfassung & Personal',
    description: 'Arbeitszeiten digital erfassen, Schichten planen und Personal effizient steuern.',
    links: [
      { href: '/loesungen/arbeitszeiterfassung-reinigungsfirma', label: 'Arbeitszeiterfassung Reinigung' },
      { href: '/loesungen/digitale-stundenzettel-reinigung', label: 'Digitale Stundenzettel' },
      { href: '/loesungen/schichtplanung-reinigungsunternehmen', label: 'Schichtplanung Reinigung' },
      { href: '/loesungen/personalplanung-reinigung', label: 'Personalplanung Reinigung' },
      { href: '/loesungen/krankmeldung-reinigung-digital', label: 'Krankmeldung digital' },
      { href: '/loesungen/tagesplanung-reinigungskräfte', label: 'Tagesplanung Reinigungskräfte' },
    ],
  },
  {
    title: 'Einsatzplanung & Aufträge',
    description: 'Aufträge planen, Teams koordinieren und Touren optimieren.',
    links: [
      { href: '/loesungen/auftragsplanung-reinigungsfirma', label: 'Auftragsplanung Reinigung' },
      { href: '/loesungen/einsatzplanung-gebäudereinigung', label: 'Einsatzplanung Reinigung' },
      { href: '/loesungen/tourenplanung-reinigungsteams', label: 'Tourenplanung Reinigungsteams' },
      { href: '/loesungen/objektverwaltung-gebäudereinigung', label: 'Objektverwaltung' },
      { href: '/loesungen/vertragsverwaltung-reinigung', label: 'Vertragsverwaltung Reinigung' },
    ],
  },
  {
    title: 'NFC & Leistungsnachweise',
    description: 'NFC-basierte Nachweise, Protokolle und digitale Reinigungsakten.',
    links: [
      { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC-Leistungsnachweis' },
      { href: '/loesungen/leistungsnachweis-gebäudereinigung', label: 'Leistungsnachweis Reinigung' },
      { href: '/loesungen/digitale-reinigungsakte', label: 'Digitale Reinigungsakte' },
      { href: '/loesungen/uebergabeprotokoll-reinigung', label: 'Übergabeprotokoll Reinigung' },
      { href: '/loesungen/objektbegehung-reinigung-dokumentieren', label: 'Objektbegehung dokumentieren' },
    ],
  },
  {
    title: 'Checklisten & Qualität',
    description: 'Reinigungspläne erstellen, Qualität sichern und SLAs überwachen.',
    links: [
      { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung' },
      { href: '/loesungen/reinigungspläne-digital-erstellen', label: 'Reinigungspläne digital' },
      { href: '/loesungen/qualitaetskontrolle-gebäudereinigung', label: 'Qualitätskontrolle' },
      { href: '/loesungen/sla-tracking-reinigungsfirma', label: 'SLA-Tracking Reinigung' },
    ],
  },
  {
    title: 'Finanzen & Buchhaltung',
    description: 'Rechnungen, Lohnabrechnungen und Nachkalkulationen für Reinigungsbetriebe.',
    links: [
      { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnungen Reinigung' },
      { href: '/loesungen/lohnabrechnung-reinigungsfirma', label: 'Lohnabrechnung Reinigung' },
      { href: '/loesungen/nachkalkulation-reinigungsaufträge', label: 'Nachkalkulation Reinigung' },
      { href: '/loesungen/reinigung-buchhaltung-lexoffice', label: 'Buchhaltung mit LexOffice' },
    ],
  },
  {
    title: 'Kunden & CRM',
    description: 'Kundendaten, Feedback und Stammkundenbeziehungen zentral verwalten.',
    links: [
      { href: '/loesungen/kundendatenbank-reinigungsfirma', label: 'Kundendatenbank Reinigung' },
      { href: '/loesungen/kundenfeedback-reinigung', label: 'Kundenfeedback Reinigung' },
      { href: '/loesungen/stammkunden-verwalten-gebäudereinigung', label: 'Stammkunden verwalten' },
      { href: '/loesungen/auftraggeber-portal-reinigung', label: 'Auftraggeber-Portal' },
    ],
  },
  {
    title: 'Material & Inventar',
    description: 'Reinigungsmittel, Geräte und Lagerbestaende effizient verwalten.',
    links: [
      { href: '/loesungen/reinigungsmittel-verwaltung', label: 'Reinigungsmittel-Verwaltung' },
      { href: '/loesungen/inventar-verwalten-reinigungsfirma', label: 'Inventar Reinigung' },
    ],
  },
  {
    title: 'Branchenlösungen Reinigung',
    description: 'Spezialisierte Software für verschiedene Reinigungsbereiche.',
    links: [
      { href: '/loesungen/gebäudereinigung-app', label: 'Gebäudereinigung App' },
      { href: '/loesungen/reinigungssoftware-dach', label: 'Reinigungssoftware DACH' },
      { href: '/loesungen/reinigungskräfte-app', label: 'Reinigungskräfte App' },
      { href: '/loesungen/reinigungsfirma-gründen-software', label: 'Reinigungsfirma gründen' },
      { href: '/loesungen/unterhaltsreinigung-software', label: 'Unterhaltsreinigung' },
      { href: '/loesungen/grundreinigung-software', label: 'Grundreinigung' },
      { href: '/loesungen/büroreinigung-software', label: 'Büroreinigung' },
      { href: '/loesungen/glasreinigung-software', label: 'Glasreinigung' },
      { href: '/loesungen/fassadenreinigung-software', label: 'Fassadenreinigung' },
      { href: '/loesungen/industriereinigung-software', label: 'Industriereinigung' },
      { href: '/loesungen/hotelreinigung-software', label: 'Hotelreinigung' },
      { href: '/loesungen/klinik-reinigung-software', label: 'Klinik-Reinigung' },
      { href: '/loesungen/krankenhaus-reinigung-software', label: 'Krankenhaus-Reinigung' },
      { href: '/loesungen/praxisreinigung-software', label: 'Praxisreinigung' },
      { href: '/loesungen/schulreinigung-software', label: 'Schulreinigung' },
      { href: '/loesungen/treppenhausreinigung-software', label: 'Treppenhausreinigung' },
      { href: '/loesungen/baureinigung-software', label: 'Baureinigung' },
      { href: '/loesungen/sonderreinigung-software', label: 'Sonderreinigung' },
      { href: '/loesungen/teppichreinigung-software', label: 'Teppichreinigung' },
      { href: '/loesungen/photovoltaik-reinigung-software', label: 'Photovoltaik-Reinigung' },
      { href: '/loesungen/winterdienst-reinigung-software', label: 'Winterdienst & Reinigung' },
    ],
  },
];

export default function LösungenPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-950 pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, #1e40af 0%, transparent 50%), radial-gradient(circle at 30% 80%, #1e3a8a 0%, transparent 40%)' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Lösungen
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] mb-6">
            Alle Lösungen <span className="text-blue-400">im Überblick.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Von Zeiterfassung über Einsatzplanung bis zur Qualitätskontrolle – finden Sie die passende Lösung für Ihren Reinigungsbetrieb.
          </p>
        </div>
      </section>

      <CommunicationUSP variant="compact" />

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{cat.title}</h2>
                  <p className="text-gray-500">{cat.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {cat.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center gap-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl px-4 py-3.5 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-900 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-900 transition-colors">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Testen Sie Taskey 3 Monate kostenlos – alle Funktionen, kein Risiko.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg text-lg"
            >
              Jetzt kostenlos starten
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
