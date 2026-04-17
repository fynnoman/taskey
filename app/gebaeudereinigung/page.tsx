import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reinigungssoftware für Gebäudereiniger – Zeiterfassung, NFC-Nachweise & Einsatzplanung | Taskey',
  description: 'Taskey ist die führende Reinigungssoftware für Gebäudereiniger im DACH-Raum. NFC-Leistungsnachweise, automatische Zeiterfassung, Einsatzplanung, Qualitätskontrolle. DSGVO-konform. 14 Tage kostenlos testen!',
  keywords: ['Reinigungssoftware', 'Gebäudereinigung Software', 'Software für Gebäudereiniger', 'Zeiterfassung Reinigung', 'NFC Leistungsnachweis Reinigung', 'Einsatzplanung Gebäudereinigung', 'Reinigungssoftware DACH', 'Unterhaltsreinigung Software', 'Qualitätskontrolle Reinigung', 'Gebäudereinigung App'],
  alternates: { canonical: 'https://www.taskeyapp.com/gebaeudereinigung' },
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Section({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default function GebaeudereinigungPage() {
  const reinigungsarten = [
    'Unterhaltsreinigung', 'Glasreinigung', 'Industriereinigung', 'Klinik- & Hygienereinigung',
    'Grundreinigung', 'Baureinigung', 'Sonderreinigung', 'Hotelreinigung',
    'Schulreinigung', 'Fassadenreinigung',
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Taskey Reinigungssoftware",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "description": "14 Tage kostenlos testen" },
    "description": "Die führende Reinigungssoftware für Gebäudereiniger im DACH-Raum. NFC-Leistungsnachweise, Zeiterfassung, Einsatzplanung und Qualitätskontrolle.",
    "author": { "@type": "Organization", "name": "Taskey", "url": "https://taskeyapp.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-cyan-900 via-blue-900 to-blue-950 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-cyan-300 bg-cyan-300/10 border border-cyan-300/20 rounded-full mb-6">
              REINIGUNGSSOFTWARE FUER DEN DACH-RAUM
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Die Software, die<br className="hidden sm:block" /> Gebäudereiniger verdient haben.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Nie wieder Streit, ob Ihr Team vor Ort war. Nie wieder Stundenzettel-Chaos. Nie wieder Anrufe, wann endlich wer kommt. Taskey erledigt das – direkt vom Handy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="https://signup.taskeyapp.com" className="px-8 py-4 bg-cyan-400 text-gray-900 font-bold rounded-xl hover:bg-cyan-300 transition-colors text-base shadow-lg">
                14 Tage kostenlos testen
              </a>
              <Link href="/pricing?model=reinigung" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-base">
                Preise ansehen
              </Link>
            </div>
            <p className="text-sm text-gray-400">Keine Kreditkarte. Sofort loslegen.</p>
          </div>
        </section>

        {/* PAIN POINTS */}
        <Section className="bg-white">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Kennen Sie das?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '📋', text: 'Stundenzettel verschwinden. Am Monatsende fehlen Stunden.' },
              { emoji: '📞', text: 'Auftraggeber rufen an: "Wart ihr gestern überhaupt da?"' },
              { emoji: '🔑', text: 'Keiner weiß, wer welchen Schlüssel hat.' },
              { emoji: '📊', text: 'Sie sehen erst beim Steuerberater, ob ein Objekt Verlust macht.' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <p className="text-gray-700 text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-bold text-gray-900 mt-10">Damit ist jetzt Schluss.</p>
        </Section>

        {/* NFC */}
        <Section className="bg-gray-50">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              NFC-Leistungsnachweis: Handy dranhalten. Beweis fertig.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              An jedem Objekt klebt ein kleiner NFC-Aufkleber. Ihre Reinigungskraft hält das Handy dran – Taskey speichert automatisch: wer, wann, wo. Kein Auftraggeber kann mehr sagen: &quot;Ihr wart nicht da.&quot;
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Einsatz bewiesen', desc: 'Jeder Scan mit Uhrzeit und GPS. Rechtssicher und unmanipulierbar.' },
              { title: 'Alles am Objekt', desc: 'Reinigungsplan, Materialliste, Sonderaufträge – ein Scan zeigt alles.' },
              { title: 'Etage für Etage', desc: 'Mehrere Bereiche? Ihre Kraft scannt sich in jedem ein und aus.' },
              { title: 'Material & Geräte', desc: 'NFC am Putzwagen: "Mittel leer" oder "Gerät defekt" – sofort gemeldet.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ZEITERFASSUNG */}
        <Section className="bg-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-bold bg-green-100 text-green-800 rounded-full mb-4">ZEITERFASSUNG</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Kein Stundenzettel. Nie wieder.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ihre Reinigungskräfte scannen sich am Objekt ein und aus. Taskey erfasst Arbeitszeit, Pausen und Fahrtzeiten automatisch. Am Monatsende: fertige Zahlen für die Lohnabrechnung. Mindestlohn-konform.
              </p>
              <ul className="space-y-3">
                {['Automatische Zeiterfassung per NFC', 'Fahrtzeiten separat erfasst', 'Export für Lohnabrechnung', 'Mindestlohn-Dokumentation erfüllt'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckIcon /><span className="text-gray-700 text-sm">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="text-center">
                <p className="text-5xl font-extrabold text-green-700">25-30h</p>
                <p className="text-gray-600 mt-2">Zeitersparnis pro Monat</p>
              </div>
            </div>
          </div>
        </Section>

        {/* EINSATZPLANUNG */}
        <Section className="bg-gray-50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-6 border border-gray-200">
              <div className="space-y-3">
                {[
                  { obj: 'Bürokomplex Müller', kraft: 'Alina K.', status: '✅ Erledigt', color: 'text-green-600' },
                  { obj: 'Klinik Weststadt', kraft: 'Mehmet T.', status: '🔄 Läuft', color: 'text-blue-600' },
                  { obj: 'Schule Am Park', kraft: 'Offen', status: '⚠️ Vertretung nötig', color: 'text-orange-600' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div><p className="font-semibold text-gray-900 text-sm">{item.obj}</p><p className="text-xs text-gray-500">{item.kraft}</p></div>
                    <span className={`text-xs font-medium ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 text-xs font-bold bg-blue-100 text-blue-800 rounded-full mb-4">EINSATZPLANUNG</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Alle Objekte. Alle Teams. Ein Blick.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Wer reinigt wo? Wer ist krank? Wo fehlt eine Vertretung? Taskey zeigt Ihnen den Status aller Objekte und Teams in Echtzeit. Schichtplanung, Krankmeldungen, Vertretungen – alles in einer Übersicht.
              </p>
            </div>
          </div>
        </Section>

        {/* QUALITAETSKONTROLLE */}
        <Section className="bg-white">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Qualitätskontrolle, die sich selbst macht
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Checklisten, Foto-Dokumentation, digitale Unterschriften – alles automatisch protokolliert. Bei Reklamationen haben Sie sofort den Beweis.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Checklisten', desc: 'Digitale Reinigungschecklisten für jedes Objekt. Ihre Kraft hakt ab, Sie sehen den Status.' },
              { title: 'Foto-Nachweis', desc: 'Vorher/Nachher-Fotos direkt aus der App. Gespeichert und zugeordnet.' },
              { title: 'Digitale Unterschrift', desc: 'Auftraggeber unterschreibt auf dem Handy. Nachweis gespeichert und jederzeit abrufbar.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* REINIGUNGSARTEN */}
        <Section className="bg-gray-50">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Egal welche Art der Reinigung – Taskey passt.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {reinigungsarten.map((art, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                {art}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            <Link href="/loesungen" className="text-blue-900 font-semibold hover:underline">Alle 51 Lösungen ansehen &rarr;</Link>
          </p>
        </Section>

        {/* APP */}
        <Section className="bg-white">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Die App, die jede Reinigungskraft sofort versteht.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              So einfach wie WhatsApp. Mehrsprachig. Funktioniert auch offline im Keller.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Kinderleicht', desc: 'Große Symbole, klare Struktur. Keine Schulung nötig.' },
              { title: 'Mehrsprachig', desc: 'Deutsch, Türkisch, Russisch, Polnisch und 15+ weitere Sprachen.' },
              { title: 'Offline-fähig', desc: 'Keller, Tiefgarage, Funkloch – Taskey speichert lokal und synchronisiert später.' },
              { title: 'Push-Nachrichten', desc: 'Neuer Auftrag? Änderung? Ihr Team erfährt es sofort.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-blue-950 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Bereit?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              14 Tage kostenlos. Keine Kreditkarte. Kein Risiko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://signup.taskeyapp.com" className="px-8 py-4 bg-cyan-400 text-gray-900 font-bold rounded-xl hover:bg-cyan-300 transition-colors text-base shadow-lg">
                Jetzt starten
              </a>
              <Link href="/pricing?model=reinigung" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-base">
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-link */}
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Sie kommen aus Handwerk oder Bau?</span>
            <Link href="/handwerk" className="text-blue-900 font-semibold hover:underline">
              Zur Handwerker-Version &rarr;
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
