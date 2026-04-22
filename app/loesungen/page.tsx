import type { Metadata } from 'next';
import Link from 'next/link';
import CommunicationUSP from '@/components/CommunicationUSP';

export const metadata: Metadata = {
  title: 'Alle Lösungen – Taskey für Handwerk, Bau & Gebäudereinigung',
  description: 'Entdecken Sie alle Taskey-Lösungen: Zeiterfassung, Einsatzplanung, Baustellendokumentation, Angebote & Rechnungen, Qualitätskontrolle, CRM und mehr. Für Handwerker, Bauunternehmen und Gebäudereiniger.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen' },
};

const categories = [
  {
    title: 'Zeiterfassung & Stunden',
    description: 'Arbeitszeiten digital erfassen – auf Baustelle, im Außendienst oder im Reinigungsobjekt.',
    links: [
      { href: '/loesungen/zeiterfassung-handwerk', label: 'Zeiterfassung Handwerk' },
      { href: '/loesungen/zeiterfassung-baustelle', label: 'Zeiterfassung Baustelle' },
      { href: '/loesungen/zeiterfassung-app-aussendienst', label: 'Zeiterfassung Außendienst' },
      { href: '/loesungen/mobile-zeiterfassung-monteure', label: 'Mobile Zeiterfassung Monteure' },
      { href: '/loesungen/mitarbeiter-stunden-tracken-handwerk', label: 'Mitarbeiterstunden tracken' },
      { href: '/loesungen/stundennachweise-digital', label: 'Stundennachweise digital' },
      { href: '/loesungen/rapportzettel-digital-handwerk', label: 'Rapportzettel digital' },
      { href: '/loesungen/ueberstunden-verwalten-handwerksbetrieb', label: 'Überstunden verwalten' },
      { href: '/loesungen/arbeitszeiterfassung-reinigungsfirma', label: 'Arbeitszeiterfassung Reinigung' },
    ],
  },
  {
    title: 'Personal & Schichtplanung',
    description: 'Teams einteilen, Schichten planen und Krankmeldungen digital verwalten.',
    links: [
      { href: '/loesungen/mitarbeiter-auf-baustellen-einteilen', label: 'Mitarbeiter einteilen' },
      { href: '/loesungen/personalplanung-baufirma', label: 'Personalplanung Bau' },
      { href: '/loesungen/kolonnenplanung-bau', label: 'Kolonnenplanung Bau' },
      { href: '/loesungen/kapazitaetsplanung-handwerk', label: 'Kapazitätsplanung Handwerk' },
      { href: '/loesungen/krankmeldung-digital-handwerk', label: 'Krankmeldung digital' },
      { href: '/loesungen/schichtplanung-reinigungsunternehmen', label: 'Schichtplanung Reinigung' },
      { href: '/loesungen/tagesplanung-reinigungskraefte', label: 'Tagesplanung Reinigungskräfte' },
    ],
  },
  {
    title: 'Einsatz- & Auftragsplanung',
    description: 'Aufträge planen, Monteure disponieren, Fahrzeuge koordinieren.',
    links: [
      { href: '/loesungen/auftragsverwaltung-handwerk', label: 'Auftragsverwaltung Handwerk' },
      { href: '/loesungen/auftraege-digital-verwalten-handwerk', label: 'Aufträge digital verwalten' },
      { href: '/loesungen/auftraege-organisieren-malerbetrieb', label: 'Aufträge Maler' },
      { href: '/loesungen/auftragsuebesicht-handwerksbetrieb', label: 'Auftragsübersicht' },
      { href: '/loesungen/disposition-handwerk-software', label: 'Disposition Handwerk' },
      { href: '/loesungen/einsatzplanung-monteure', label: 'Einsatzplanung Monteure' },
      { href: '/loesungen/terminplanung-handwerker', label: 'Terminplanung Handwerker' },
      { href: '/loesungen/wochenplan-handwerker-erstellen', label: 'Wochenplan Handwerker' },
      { href: '/loesungen/fahrzeugplanung-handwerksbetrieb', label: 'Fahrzeugplanung' },
      { href: '/loesungen/auftragsplanung-reinigungsfirma', label: 'Auftragsplanung Reinigung' },
      { href: '/loesungen/einsatzplanung-gebaeudereinigung', label: 'Einsatzplanung Reinigung' },
      { href: '/loesungen/tourenplanung-reinigungsteams', label: 'Tourenplanung Reinigung' },
    ],
  },
  {
    title: 'Baustellen & Projekte',
    description: 'Baustellen koordinieren, dokumentieren und Projekte steuern.',
    links: [
      { href: '/loesungen/baustellen-koordinieren-tool', label: 'Baustellen koordinieren' },
      { href: '/loesungen/baustelleninfos-teilen-app', label: 'Baustelleninfos teilen' },
      { href: '/loesungen/bautagebuch-digital', label: 'Bautagebuch digital' },
      { href: '/loesungen/baudokumentation-software', label: 'Baudokumentation' },
      { href: '/loesungen/bauakte-digital-erstellen', label: 'Bauakte digital' },
      { href: '/loesungen/bauprojekte-planen-software', label: 'Bauprojekte planen' },
      { href: '/loesungen/projektmanagement-kleine-baufirma', label: 'Projektmanagement Baufirma' },
      { href: '/loesungen/fotos-baustelle-dokumentieren-app', label: 'Baustellen-Fotos' },
      { href: '/loesungen/protokolle-baustelle-erstellen', label: 'Protokolle Baustelle' },
      { href: '/loesungen/maengeldokumentation-bau', label: 'Mängeldokumentation' },
      { href: '/loesungen/abnahmeprotokoll-digital', label: 'Abnahmeprotokoll digital' },
      { href: '/loesungen/digitale-unterschrift-bauabnahme', label: 'Digitale Unterschrift' },
      { href: '/loesungen/sicherheitschecklisten-baustelle', label: 'Sicherheitschecklisten' },
    ],
  },
  {
    title: 'Angebote, Rechnungen & Buchhaltung',
    description: 'Angebote schreiben, Rechnungen stellen und Buchhaltung im Griff behalten.',
    links: [
      { href: '/loesungen/angebote-schreiben-handwerk', label: 'Angebote schreiben' },
      { href: '/loesungen/angebotskalkulation-bau', label: 'Angebotskalkulation Bau' },
      { href: '/loesungen/kostenvoranschlag-erstellen-software', label: 'Kostenvoranschlag' },
      { href: '/loesungen/abschlagsrechnung-erstellen-handwerk', label: 'Abschlagsrechnung' },
      { href: '/loesungen/schlussrechnung-software-bau', label: 'Schlussrechnung Bau' },
      { href: '/loesungen/rechnungsprogramm-handwerker', label: 'Rechnungsprogramm' },
      { href: '/loesungen/rechnungen-nachverfolgen-handwerksbetrieb', label: 'Rechnungen nachverfolgen' },
      { href: '/loesungen/mahnwesen-handwerk', label: 'Mahnwesen' },
      { href: '/loesungen/bauabrechnung-software', label: 'Bauabrechnung' },
      { href: '/loesungen/lieferscheine-digital-erstellen-handwerk', label: 'Lieferscheine digital' },
      { href: '/loesungen/buchhaltung-handwerksbetrieb', label: 'Buchhaltung Handwerk' },
      { href: '/loesungen/einnahmen-ausgaben-handwerker', label: 'Einnahmen & Ausgaben' },
      { href: '/loesungen/liquiditaetsplanung-baufirma', label: 'Liquiditätsplanung Bau' },
      { href: '/loesungen/vorbereitung-steuerberater-handwerk', label: 'Vorbereitung Steuerberater' },
      { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnung Reinigung' },
      { href: '/loesungen/lohnabrechnung-reinigungsfirma', label: 'Lohnabrechnung Reinigung' },
    ],
  },
  {
    title: 'Kalkulation & Controlling',
    description: 'Stundensätze, Margen und Nachkalkulation transparent im Blick.',
    links: [
      { href: '/loesungen/stundensaetze-kalkulieren-handwerk', label: 'Stundensätze kalkulieren' },
      { href: '/loesungen/nachkalkulation-handwerk', label: 'Nachkalkulation Handwerk' },
      { href: '/loesungen/gewinn-pro-auftrag-berechnen', label: 'Gewinn pro Auftrag' },
      { href: '/loesungen/aufmass-erstellen-digital', label: 'Aufmaß digital' },
    ],
  },
  {
    title: 'Kunden, CRM & Kommunikation',
    description: 'Kundendaten, Historie und Kommunikation zentral an einem Ort.',
    links: [
      { href: '/loesungen/crm-fuer-handwerker', label: 'CRM Handwerk' },
      { href: '/loesungen/kundenverwaltung-handwerksbetrieb', label: 'Kundenverwaltung' },
      { href: '/loesungen/kundenhistorie-verwalten-handwerk', label: 'Kundenhistorie' },
      { href: '/loesungen/kundenkommunikation-baufirma', label: 'Kundenkommunikation Bau' },
      { href: '/loesungen/reklamationen-verwalten-handwerk', label: 'Reklamationen verwalten' },
      { href: '/loesungen/chat-app-handwerksbetrieb', label: 'Chat-App Handwerk' },
      { href: '/loesungen/team-kommunikation-baustelle', label: 'Team-Kommunikation' },
      { href: '/loesungen/infos-an-monteure-senden', label: 'Infos an Monteure' },
      { href: '/loesungen/kundendatenbank-reinigungsfirma', label: 'Kundendatenbank Reinigung' },
      { href: '/loesungen/kundenfeedback-reinigung', label: 'Kundenfeedback Reinigung' },
      { href: '/loesungen/stammkunden-verwalten-gebaeudereinigung', label: 'Stammkunden Reinigung' },
    ],
  },
  {
    title: 'Material, Werkzeug & Lager',
    description: 'Werkzeug wiederfinden, Material verwalten, Lager im Griff behalten.',
    links: [
      { href: '/loesungen/werkzeugverwaltung-handwerk', label: 'Werkzeugverwaltung' },
      { href: '/loesungen/materialverwaltung-handwerk', label: 'Materialverwaltung' },
      { href: '/loesungen/materialliste-baustelle-erstellen', label: 'Materialliste Baustelle' },
      { href: '/loesungen/materialverbrauch-tracken-baustelle', label: 'Materialverbrauch tracken' },
      { href: '/loesungen/lagerverwaltung-handwerksbetrieb', label: 'Lagerverwaltung' },
      { href: '/loesungen/bestellwesen-handwerksbetrieb', label: 'Bestellwesen' },
      { href: '/loesungen/inventar-verwalten-reinigungsfirma', label: 'Inventar Reinigung' },
      { href: '/loesungen/wartungschecklisten-handwerk', label: 'Wartungschecklisten' },
    ],
  },
  {
    title: 'Subunternehmer & Nachunternehmer',
    description: 'Fremdleistungen koordinieren, dokumentieren und abrechnen.',
    links: [
      { href: '/loesungen/subunternehmer-verwalten-bau', label: 'Subunternehmer verwalten' },
      { href: '/loesungen/subunternehmer-einsatzplanung', label: 'Subunternehmer Einsatzplanung' },
      { href: '/loesungen/nachunternehmer-koordinieren-software', label: 'Nachunternehmer koordinieren' },
      { href: '/loesungen/nachunternehmer-dokumentation', label: 'Nachunternehmer-Doku' },
      { href: '/loesungen/fremdleistungen-abrechnen-bau', label: 'Fremdleistungen abrechnen' },
      { href: '/loesungen/ressourcenplanung-baufirma', label: 'Ressourcenplanung' },
    ],
  },
  {
    title: 'Reinigung – Qualität & Nachweise',
    description: 'Checklisten, Leistungsnachweise und Qualitätssicherung in der Gebäudereinigung.',
    links: [
      { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung' },
      { href: '/loesungen/reinigungsplaene-digital-erstellen', label: 'Reinigungspläne digital' },
      { href: '/loesungen/qualitaetskontrolle-gebaeudereinigung', label: 'Qualitätskontrolle' },
      { href: '/loesungen/leistungsnachweis-gebaeudereinigung', label: 'Leistungsnachweis' },
      { href: '/loesungen/sla-tracking-reinigungsfirma', label: 'SLA-Tracking' },
      { href: '/loesungen/uebergabeprotokoll-reinigung', label: 'Übergabeprotokoll' },
      { href: '/loesungen/objektbegehung-reinigung-dokumentieren', label: 'Objektbegehung' },
    ],
  },
  {
    title: 'Digitalisierung & All-in-One',
    description: 'Papierkram abschaffen und alle Prozesse in einer App vereinen.',
    links: [
      { href: '/loesungen/digitalisierung-handwerksbetrieb', label: 'Digitalisierung Handwerk' },
      { href: '/loesungen/alles-in-einer-app-handwerksbetrieb', label: 'Alles in einer App' },
      { href: '/loesungen/papierloses-buero-handwerk', label: 'Papierloses Büro' },
      { href: '/loesungen/zettelwirtschaft-abschaffen-handwerk', label: 'Zettelwirtschaft abschaffen' },
      { href: '/loesungen/bueroarbeit-reduzieren-handwerk', label: 'Büroarbeit reduzieren' },
      { href: '/loesungen/handwerk-software-einfach', label: 'Handwerker-Software einfach' },
      { href: '/loesungen/handwerker-app-baustelle', label: 'Handwerker-App Baustelle' },
      { href: '/loesungen/app-fuer-handwerker-aussendienst', label: 'App für Außendienst' },
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
            Von Zeiterfassung über Baustellenplanung bis zur Qualitätskontrolle – die passende Lösung für Handwerk, Bau und Gebäudereinigung.
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
