import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alle Loesungen – Taskey fuer Gebaeudereinigung im DACH-Raum',
  description: 'Entdecken Sie alle Taskey-Loesungen fuer Gebaeudereiniger: NFC-Leistungsnachweise, Zeiterfassung, Einsatzplanung, Qualitaetskontrolle, Objektverwaltung und mehr.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen' },
};

const categories = [
  {
    title: 'Zeiterfassung & Personal',
    description: 'Arbeitszeiten digital erfassen, Schichten planen und Überstunden im Blick behalten.',
    links: [
      { href: '/loesungen/zeiterfassung-handwerk', label: 'Zeiterfassung Reinigungsbetrieb' },
      { href: '/loesungen/zeiterfassung-baustelle', label: 'Zeiterfassung vor Ort' },
      { href: '/loesungen/mobile-zeiterfassung-monteure', label: 'Mobile Zeiterfassung' },
      { href: '/loesungen/zeiterfassung-app-aussendienst', label: 'Zeiterfassung App Aussendienst' },
      { href: '/loesungen/arbeitszeiterfassung-reinigungsfirma', label: 'Arbeitszeiterfassung Reinigung' },
      { href: '/loesungen/stundennachweise-digital', label: 'Stundennachweise digital' },
      { href: '/loesungen/mitarbeiter-stunden-tracken-handwerk', label: 'Stunden tracken' },
      { href: '/loesungen/ueberstunden-verwalten-handwerksbetrieb', label: 'Ueberstunden verwalten' },
      { href: '/loesungen/schichtplanung-reinigungsunternehmen', label: 'Schichtplanung Reinigung' },
      { href: '/loesungen/personalplanung-baufirma', label: 'Personalplanung' },
      { href: '/loesungen/krankmeldung-digital-handwerk', label: 'Krankmeldung digital' },
    ],
  },
  {
    title: 'Aufträge & Planung',
    description: 'Aufträge verwalten, Termine planen und Ressourcen optimal einsetzen.',
    links: [
      { href: '/loesungen/auftragsverwaltung-handwerk', label: 'Auftragsverwaltung' },
      { href: '/loesungen/auftraege-digital-verwalten-handwerk', label: 'Auftraege digital verwalten' },
      { href: '/loesungen/auftraege-organisieren-malerbetrieb', label: 'Auftraege organisieren' },
      { href: '/loesungen/auftragsplanung-reinigungsfirma', label: 'Auftragsplanung Reinigung' },
      { href: '/loesungen/auftragsuebesicht-handwerksbetrieb', label: 'Auftragsuebersicht' },
      { href: '/loesungen/terminplanung-handwerker', label: 'Terminplanung' },
      { href: '/loesungen/disposition-handwerk-software', label: 'Disposition Software' },
      { href: '/loesungen/einsatzplanung-monteure', label: 'Einsatzplanung Teams' },
      { href: '/loesungen/einsatzplanung-gebaeudereinigung', label: 'Einsatzplanung Reinigung' },
      { href: '/loesungen/kapazitaetsplanung-handwerk', label: 'Kapazitätsplanung' },
      { href: '/loesungen/wochenplan-handwerker-erstellen', label: 'Wochenplan erstellen' },
      { href: '/loesungen/tagesplanung-reinigungskraefte', label: 'Tagesplanung Reinigung' },
      { href: '/loesungen/tourenplanung-reinigungsteams', label: 'Tourenplanung Reinigung' },
    ],
  },
  {
    title: 'Objekte & Einsatzkoordination',
    description: 'Reinigungsobjekte planen, Teams vor Ort koordinieren und Einsaetze steuern.',
    links: [
      { href: '/loesungen/bauprojekte-planen-software', label: 'Objekte planen' },
      { href: '/loesungen/baustellen-koordinieren-tool', label: 'Einsaetze koordinieren' },
      { href: '/loesungen/projektmanagement-kleine-baufirma', label: 'Projektmanagement' },
      { href: '/loesungen/mitarbeiter-auf-baustellen-einteilen', label: 'Mitarbeiter einteilen' },
      { href: '/loesungen/kolonnenplanung-bau', label: 'Kolonnenplanung' },
      { href: '/loesungen/ressourcenplanung-baufirma', label: 'Ressourcenplanung' },
      { href: '/loesungen/handwerker-app-baustelle', label: 'Mobile App vor Ort' },
      { href: '/loesungen/fahrzeugplanung-handwerksbetrieb', label: 'Fahrzeugplanung' },
    ],
  },
  {
    title: 'Angebote, Rechnungen & Finanzen',
    description: 'Von der Kalkulation über Angebote bis zur Schlussrechnung – alles digital.',
    links: [
      { href: '/loesungen/angebote-schreiben-handwerk', label: 'Angebote schreiben' },
      { href: '/loesungen/angebotskalkulation-bau', label: 'Angebotskalkulation' },
      { href: '/loesungen/kostenvoranschlag-erstellen-software', label: 'Kostenvoranschlag erstellen' },
      { href: '/loesungen/rechnungsprogramm-handwerker', label: 'Rechnungsprogramm' },
      { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnung Reinigung' },
      { href: '/loesungen/abschlagsrechnung-erstellen-handwerk', label: 'Abschlagsrechnung' },
      { href: '/loesungen/schlussrechnung-software-bau', label: 'Schlussrechnung' },
      { href: '/loesungen/aufmass-erstellen-digital', label: 'Aufmaß digital' },
      { href: '/loesungen/rechnungen-nachverfolgen-handwerksbetrieb', label: 'Rechnungen nachverfolgen' },
      { href: '/loesungen/mahnwesen-handwerk', label: 'Mahnwesen' },
      { href: '/loesungen/lieferscheine-digital-erstellen-handwerk', label: 'Lieferscheine digital' },
    ],
  },
  {
    title: 'Buchhaltung & Kalkulation',
    description: 'Finanzen im Griff – von Einnahmen/Ausgaben bis zur Steuerberater-Vorbereitung.',
    links: [
      { href: '/loesungen/buchhaltung-handwerksbetrieb', label: 'Buchhaltung' },
      { href: '/loesungen/nachkalkulation-handwerk', label: 'Nachkalkulation' },
      { href: '/loesungen/gewinn-pro-auftrag-berechnen', label: 'Gewinn pro Auftrag' },
      { href: '/loesungen/einnahmen-ausgaben-handwerker', label: 'Einnahmen & Ausgaben' },
      { href: '/loesungen/stundensaetze-kalkulieren-handwerk', label: 'Stundensaetze kalkulieren' },
      { href: '/loesungen/vorbereitung-steuerberater-handwerk', label: 'Steuerberater-Vorbereitung' },
      { href: '/loesungen/liquiditaetsplanung-baufirma', label: 'Liquiditaetsplanung' },
      { href: '/loesungen/bauabrechnung-software', label: 'Abrechnung' },
      { href: '/loesungen/lohnabrechnung-reinigungsfirma', label: 'Lohnabrechnung Reinigung' },
      { href: '/loesungen/fremdleistungen-abrechnen-bau', label: 'Fremdleistungen abrechnen' },
    ],
  },
  {
    title: 'Dokumentation & Nachweise',
    description: 'Leistungsnachweise, Protokolle und Fotodokumentation – rechtssicher und digital.',
    links: [
      { href: '/loesungen/bautagebuch-digital', label: 'Digitales Objekttagebuch' },
      { href: '/loesungen/baudokumentation-software', label: 'Dokumentation Software' },
      { href: '/loesungen/fotos-baustelle-dokumentieren-app', label: 'Fotos dokumentieren' },
      { href: '/loesungen/rapportzettel-digital-handwerk', label: 'Rapportzettel digital' },
      { href: '/loesungen/abnahmeprotokoll-digital', label: 'Abnahmeprotokoll' },
      { href: '/loesungen/leistungsnachweis-gebaeudereinigung', label: 'Leistungsnachweis Reinigung' },
      { href: '/loesungen/maengeldokumentation-bau', label: 'Maengeldokumentation' },
      { href: '/loesungen/bauakte-digital-erstellen', label: 'Objektakte digital' },
      { href: '/loesungen/uebergabeprotokoll-reinigung', label: 'Uebergabeprotokoll' },
      { href: '/loesungen/protokolle-baustelle-erstellen', label: 'Protokolle erstellen' },
      { href: '/loesungen/digitale-unterschrift-bauabnahme', label: 'Digitale Unterschrift' },
    ],
  },
  {
    title: 'Material & Inventar',
    description: 'Reinigungsmittel, Geraete und Lagerbestaende effizient verwalten.',
    links: [
      { href: '/loesungen/materialverwaltung-handwerk', label: 'Materialverwaltung' },
      { href: '/loesungen/werkzeugverwaltung-handwerk', label: 'Geraeteverwaltung' },
      { href: '/loesungen/lagerverwaltung-handwerksbetrieb', label: 'Lagerverwaltung' },
      { href: '/loesungen/materialliste-baustelle-erstellen', label: 'Materialliste erstellen' },
      { href: '/loesungen/bestellwesen-handwerksbetrieb', label: 'Bestellwesen' },
      { href: '/loesungen/materialverbrauch-tracken-baustelle', label: 'Verbrauch tracken' },
      { href: '/loesungen/inventar-verwalten-reinigungsfirma', label: 'Inventar Reinigung' },
    ],
  },
  {
    title: 'Kunden & CRM',
    description: 'Kundendaten, Kommunikation und Feedback zentral verwalten.',
    links: [
      { href: '/loesungen/crm-fuer-handwerker', label: 'CRM fuer Reinigungsbetriebe' },
      { href: '/loesungen/kundenverwaltung-handwerksbetrieb', label: 'Kundenverwaltung' },
      { href: '/loesungen/kundendatenbank-reinigungsfirma', label: 'Kundendatenbank Reinigung' },
      { href: '/loesungen/kundenhistorie-verwalten-handwerk', label: 'Kundenhistorie' },
      { href: '/loesungen/kundenkommunikation-baufirma', label: 'Kundenkommunikation' },
      { href: '/loesungen/reklamationen-verwalten-handwerk', label: 'Reklamationen verwalten' },
      { href: '/loesungen/kundenfeedback-reinigung', label: 'Kundenfeedback Reinigung' },
      { href: '/loesungen/stammkunden-verwalten-gebaeudereinigung', label: 'Stammkunden Reinigung' },
    ],
  },
  {
    title: 'Subunternehmer',
    description: 'Nachunternehmer koordinieren, dokumentieren und abrechnen.',
    links: [
      { href: '/loesungen/subunternehmer-verwalten-bau', label: 'Subunternehmer verwalten' },
      { href: '/loesungen/nachunternehmer-koordinieren-software', label: 'Nachunternehmer koordinieren' },
      { href: '/loesungen/subunternehmer-einsatzplanung', label: 'Subunternehmer Einsatzplanung' },
      { href: '/loesungen/nachunternehmer-dokumentation', label: 'Nachunternehmer Dokumentation' },
    ],
  },
  {
    title: 'Checklisten & Qualität',
    description: 'Checklisten, Sicherheitsprüfungen und Qualitätskontrollen digital abwickeln.',
    links: [
      { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung' },
      { href: '/loesungen/wartungschecklisten-handwerk', label: 'Wartungschecklisten' },
      { href: '/loesungen/sicherheitschecklisten-baustelle', label: 'Sicherheitschecklisten' },
      { href: '/loesungen/reinigungsplaene-digital-erstellen', label: 'Reinigungsplaene digital' },
      { href: '/loesungen/objektbegehung-reinigung-dokumentieren', label: 'Objektbegehung dokumentieren' },
      { href: '/loesungen/sla-tracking-reinigungsfirma', label: 'SLA-Tracking Reinigung' },
      { href: '/loesungen/qualitaetskontrolle-gebaeudereinigung', label: 'Qualitaetskontrolle' },
    ],
  },
  {
    title: 'Kommunikation & Team',
    description: 'Reinigungsteams verbinden und Informationen in Echtzeit teilen.',
    links: [
      { href: '/loesungen/team-kommunikation-baustelle', label: 'Team-Kommunikation' },
      { href: '/loesungen/chat-app-handwerksbetrieb', label: 'Chat App' },
      { href: '/loesungen/infos-an-monteure-senden', label: 'Infos an Teams senden' },
      { href: '/loesungen/baustelleninfos-teilen-app', label: 'Objektinfos teilen' },
    ],
  },
  {
    title: 'Digitalisierung & Allgemein',
    description: 'Den gesamten Reinigungsbetrieb digitalisieren – weg von Papier, hin zu einer App.',
    links: [
      { href: '/loesungen/digitalisierung-handwerksbetrieb', label: 'Digitalisierung Reinigungsbetrieb' },
      { href: '/loesungen/papierloses-buero-handwerk', label: 'Papierloses Buero' },
      { href: '/loesungen/handwerk-software-einfach', label: 'Einfache Reinigungssoftware' },
      { href: '/loesungen/app-fuer-handwerker-aussendienst', label: 'App fuer Aussendienst' },
      { href: '/loesungen/bueroarbeit-reduzieren-handwerk', label: 'Bueroarbeit reduzieren' },
      { href: '/loesungen/zettelwirtschaft-abschaffen-handwerk', label: 'Zettelwirtschaft abschaffen' },
      { href: '/loesungen/alles-in-einer-app-handwerksbetrieb', label: 'Alles in einer App' },
    ],
  },
];

export default function LoesungenPage() {
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
            Von Zeiterfassung ueber Einsatzplanung bis zur Qualitaetskontrolle – finden Sie die passende Loesung fuer Ihren Reinigungsbetrieb.
          </p>
        </div>
      </section>

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
            Testen Sie Taskey 14 Tage kostenlos – alle Funktionen, kein Risiko.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://signup.vars-development.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg text-lg"
            >
              Jetzt kostenlos starten
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all border border-gray-200 text-lg"
            >
              Demo ansehen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
