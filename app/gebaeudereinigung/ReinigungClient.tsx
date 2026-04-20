"use client";

import React, { useState } from "react";
import Link from "next/link";

// ─── Icons ─────────────────────────────────────────────────────────
function CheckIcon({ className = "w-5 h-5 text-cyan-500" }: { className?: string }) {
  return (
    <svg className={`${className} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function NfcIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  );
}

// ─── Section wrapper ───────────────────────────────────────────────
function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function ReinigungClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* ────────────────────────────────────────────────────────────
          1. HERO – MEGA PLAKATIV
      ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-36 bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 text-white overflow-hidden">
        {/* Animated glow orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[200px]" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-5 py-2 text-xs font-bold tracking-[0.25em] text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-8 backdrop-blur-sm">
            REINIGUNGSSOFTWARE NR. 1 IM DACH-RAUM
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-8 tracking-tight">
            <span className="block">Ihr Team war da.</span>
            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Hier ist der Beweis.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            NFC-Leistungsnachweis. Automatische Zeiterfassung. Einsatzplanung.
            <span className="text-white font-medium"> Alles in einer App, die jede Reinigungskraft sofort versteht.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://signup.taskeyapp.com"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-extrabold rounded-2xl hover:from-cyan-300 hover:to-cyan-400 transition-all text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02]"
            >
              14 Tage kostenlos testen
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <Link
              href="/pricing?model=reinigung"
              className="px-10 py-5 border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all text-lg"
            >
              Preise ansehen
            </Link>
          </div>

          <p className="text-sm text-gray-500">Keine Kreditkarte &middot; Sofort loslegen &middot; DSGVO-konform</p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { number: "25-30h", label: "Zeitersparnis / Monat" },
              { number: "100%", label: "DSGVO-konform" },
              { number: "51+", label: "Reinigungsloesungen" },
              { number: "DACH", label: "Deutschland, AT, CH" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-cyan-300">{item.number}</p>
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. PROBLEM / PAIN POINTS – Emotional & direkt
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-red-600 bg-red-50 border border-red-100 rounded-full mb-6">
            KENNEN SIE DAS?
          </span>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                emoji: "📞",
                title: "&bdquo;Wart ihr gestern ueberhaupt da?&ldquo;",
                desc: "Ihr Auftraggeber zweifelt. Sie haben keinen Beweis. Er kuerzt die Rechnung.",
              },
              {
                emoji: "📋",
                title: "Stundenzettel verschwinden",
                desc: "Am Monatsende fehlen Zeiten. Ihre Reinigungskraefte erinnern sich nicht. Lohnabrechnung wird zum Albtraum.",
              },
              {
                emoji: "🔑",
                title: "Schluessel-Chaos",
                desc: "Wer hat den Schluessel fuer welches Objekt? Keiner weiss es. Bis ein Schluessel weg ist.",
              },
              {
                emoji: "📊",
                title: "Objekt macht Verlust &ndash; und Sie merken es zu spaet",
                desc: "Erst beim Steuerberater sehen Sie: Dieses Objekt hat 6 Monate Geld verbrannt.",
              },
            ].map((item, i) => (
              <div key={i} className="relative bg-red-50/50 border border-red-100 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  ❌
                </div>
                <span className="text-4xl block mb-3">{item.emoji}</span>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl px-8 py-5">
              <p className="text-2xl md:text-3xl font-black text-gray-900">
                Damit ist <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">jetzt Schluss.</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          3. NFC-LEISTUNGSNACHWEIS – Das Herzstueck
      ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-6">
              <NfcIcon /> NFC-LEISTUNGSNACHWEIS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              Handy dranhalten.<br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Beweis fertig.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              An jedem Objekt klebt ein kleiner NFC-Aufkleber. Ihre Reinigungskraft haelt das Handy dran &ndash; Taskey speichert automatisch: <span className="text-white font-semibold">wer, wann, wo.</span> Kein Auftraggeber kann mehr sagen: &bdquo;Ihr wart nicht da.&ldquo;
            </p>
          </div>

          {/* NFC Process visualization */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { step: "01", title: "Ankommen", desc: "Ihre Reinigungskraft kommt am Objekt an", icon: "🏢" },
              { step: "02", title: "Handy dranhalten", desc: "NFC-Sticker scannen &ndash; 1 Sekunde", icon: "📱" },
              { step: "03", title: "Beweis gespeichert", desc: "Zeit, Ort, Person &ndash; manipulationssicher", icon: "✅" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all hover:scale-[1.02]">
                  <span className="text-5xl block mb-4">{item.icon}</span>
                  <span className="text-cyan-400 text-xs font-bold tracking-widest block mb-2">SCHRITT {item.step}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
                {i < 2 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 z-10 text-cyan-500 text-2xl">&rarr;</div>
                )}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Rechtssicherer Beweis", desc: "Jeder Scan mit Uhrzeit, GPS und Mitarbeiter-ID. Unmanipulierbar.", icon: "🛡️" },
              { title: "Alles am Objekt", desc: "Reinigungsplan, Checkliste, Materialliste &ndash; ein Scan zeigt alles.", icon: "📋" },
              { title: "Etage fuer Etage", desc: "Mehrere Bereiche? Ihre Kraft scannt sich in jedem Bereich ein und aus.", icon: "🏗️" },
              { title: "Material & Geraete", desc: "NFC am Putzwagen: &bdquo;Mittel leer&ldquo; oder &bdquo;Geraet defekt&ldquo; &ndash; sofort gemeldet.", icon: "🧹" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/Taskey_Mitarbeiter_Anleitung.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" /></svg>
              NFC-Anleitung herunterladen (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          4. DREI KERNSAEULEN
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Drei Dinge, die <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">jede Woche</span> Stunden sparen.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              badge: "ZEITERFASSUNG",
              title: "Kein Stundenzettel. Nie wieder.",
              desc: "Ihre Reinigungskraefte scannen sich am Objekt ein und aus. Arbeitszeit, Pausen, Fahrtzeiten &ndash; alles automatisch. Am Monatsende: fertige Zahlen fuer die Lohnabrechnung. Mindestlohn-konform.",
              stat: "25-30h",
              statLabel: "Ersparnis / Monat",
              color: "from-green-500 to-emerald-600",
              bgColor: "bg-green-50",
              borderColor: "border-green-200",
              items: ["Automatische Erfassung per NFC", "Fahrtzeiten separat", "Export fuer Lohnabrechnung", "Mindestlohn-Doku erfuellt"],
            },
            {
              badge: "EINSATZPLANUNG",
              title: "Alle Objekte. Alle Teams. Ein Blick.",
              desc: "Wer reinigt wo? Wer ist krank? Wo fehlt Vertretung? Taskey zeigt den Status aller Objekte und Teams in Echtzeit. Schichtplanung, Krankmeldungen, Vertretungen &ndash; alles an einem Ort.",
              stat: "100%",
              statLabel: "Ueberblick in Echtzeit",
              color: "from-blue-500 to-indigo-600",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200",
              items: ["Drag-and-Drop Schichtplanung", "Automatische Vertretungslogik", "Objekt-Status live", "Krankmeldung per App"],
            },
            {
              badge: "QUALITAETSKONTROLLE",
              title: "Reklamation? Hier ist Ihr Beweis.",
              desc: "Checklisten, Foto-Dokumentation, digitale Unterschriften &ndash; automatisch protokolliert. Wenn der Kunde reklamiert, zeigen Sie schwarz auf weiss, was geleistet wurde.",
              stat: "0",
              statLabel: "Unbewiesene Reklamationen",
              color: "from-purple-500 to-violet-600",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-200",
              items: ["Digitale Checklisten pro Objekt", "Vorher/Nachher-Fotos", "Digitale Unterschrift", "PDF-Export fuer Kunden"],
            },
          ].map((pillar, i) => (
            <div key={i} className={`${pillar.bgColor} border ${pillar.borderColor} rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1`}>
              <span className={`inline-block px-3 py-1 text-xs font-black tracking-widest text-white bg-gradient-to-r ${pillar.color} rounded-full mb-5`}>
                {pillar.badge}
              </span>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: pillar.desc }} />

              <div className="bg-white rounded-2xl p-5 mb-6 text-center border border-gray-100">
                <p className={`text-4xl font-black bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>{pillar.stat}</p>
                <p className="text-xs text-gray-500 mt-1">{pillar.statLabel}</p>
              </div>

              <ul className="space-y-2">
                {pillar.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          5. LIVE-DEMO SIMULATION – Einsatzplanung
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Simulated dashboard */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="bg-gray-900 px-6 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-gray-500 ml-3">taskey &mdash; Einsatzplanung</span>
              </div>
              <div className="p-6 space-y-3">
                {[
                  { obj: "Buerokomplex Mueller GmbH", kraft: "Alina K.", zeit: "06:00 - 09:30", status: "Erledigt", statusColor: "bg-green-100 text-green-700", emoji: "✅" },
                  { obj: "Klinik Weststadt", kraft: "Mehmet T.", zeit: "07:00 - 12:00", status: "Laeuft gerade", statusColor: "bg-blue-100 text-blue-700", emoji: "🔄" },
                  { obj: "Einkaufszentrum City", kraft: "Iwona P.", zeit: "13:00 - 17:00", status: "Geplant", statusColor: "bg-gray-100 text-gray-600", emoji: "📅" },
                  { obj: "Schule Am Park", kraft: "Offen", zeit: "14:00 - 18:00", status: "Vertretung noetig", statusColor: "bg-orange-100 text-orange-700", emoji: "⚠️" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.emoji}</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{item.obj}</p>
                        <p className="text-xs text-gray-500">{item.kraft} &middot; {item.zeit}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.statusColor}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 text-xs font-bold bg-blue-100 text-blue-800 rounded-full mb-4">LIVE-UEBERBLICK</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
              Sie sehen <span className="text-cyan-600">jedes Objekt</span> in Echtzeit.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wer reinigt gerade wo? Wo fehlt noch jemand? Welches Objekt ist fertig? Alles auf einen Blick &ndash; ohne ein einziges Telefonat.
            </p>
            <div className="space-y-4">
              {[
                "Alle Objekte und Teams in einer Uebersicht",
                "Automatische Benachrichtigung bei Ausfaellen",
                "Drag-and-Drop Vertretungsplanung",
                "Auftraggeber-Portal: Ihr Kunde sieht den Status selbst",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          6. MEGA-ZAHL SECTION – Plakativ
      ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "70%", label: "Weniger Verwaltungsaufwand", desc: "Durchschnitt unserer Kunden" },
              { number: "0", label: "Verlorene Stundenzettel", desc: "Alles digital. Alles da." },
              { number: "3 Min", label: "Pro Objekt-Nachweis", desc: "Statt 20 Min. mit Papier" },
              { number: "24/7", label: "Ueberblick", desc: "Von ueberall. Jederzeit." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">{item.number}</p>
                <p className="text-sm font-bold text-cyan-100 mb-1">{item.label}</p>
                <p className="text-xs text-cyan-200/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          7. DIE APP – Fuer jede Reinigungskraft
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-green-700 bg-green-50 border border-green-100 rounded-full mb-6">
            MOBILE APP
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Die App, die <span className="text-cyan-600">jede</span> Reinigungskraft<br className="hidden md:block" /> sofort versteht.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            So einfach wie WhatsApp. Keine Schulung. Kein Handbuch. Einfach loslegen.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "So einfach wie WhatsApp", desc: "Grosse Symbole, klare Struktur. Auch fuer Mitarbeiter ohne Deutschkenntnisse.", icon: "📱", highlight: "20+ Sprachen" },
            { title: "Funktioniert ohne Netz", desc: "Keller, Tiefgarage, Funkloch &ndash; alles wird lokal gespeichert und spaeter synchronisiert.", icon: "📶", highlight: "100% Offline" },
            { title: "Sofort Bescheid", desc: "Neuer Auftrag, Aenderung, Vertretung &ndash; Ihr Team erfaehrt es sofort per Push.", icon: "🔔", highlight: "Echtzeit" },
            { title: "Finger drauf, drin", desc: "Anmeldung per Face ID oder Fingerabdruck. Kein Passwort-Chaos.", icon: "👆", highlight: "Sicher & schnell" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 text-center group">
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-cyan-100 text-cyan-700 rounded-full mb-3">{item.highlight}</span>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          8. REINIGUNGSARTEN – Wir decken alles ab
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Egal welche Reinigungsart &ndash; <span className="text-cyan-600">Taskey passt.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Von Unterhaltsreinigung bis Industriereinigung. Taskey bildet jeden Reinigungsprozess digital ab.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { name: "Unterhaltsreinigung", icon: "🏢" },
            { name: "Glasreinigung", icon: "🪟" },
            { name: "Industriereinigung", icon: "🏭" },
            { name: "Klinik-Reinigung", icon: "🏥" },
            { name: "Grundreinigung", icon: "✨" },
            { name: "Baureinigung", icon: "🔨" },
            { name: "Sonderreinigung", icon: "⚡" },
            { name: "Hotelreinigung", icon: "🏨" },
            { name: "Schulreinigung", icon: "🏫" },
            { name: "Fassadenreinigung", icon: "🧱" },
            { name: "Teppichreinigung", icon: "🛋️" },
            { name: "PV-Reinigung", icon: "☀️" },
          ].map((art, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-cyan-300 hover:shadow-md transition-all hover:-translate-y-0.5 group cursor-default">
              <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">{art.icon}</span>
              <p className="text-xs font-bold text-gray-700">{art.name}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          <Link href="/loesungen" className="text-cyan-700 font-bold hover:underline">Alle 51 Loesungen ansehen &rarr;</Link>
        </p>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          9. FUER JEDE BETRIEBSGROESSE
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Von 2 bis 200+ Reinigungskraefte
          </h2>
          <p className="text-gray-600">Taskey waechst mit Ihrem Betrieb. Ohne Zusatz-IT.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              size: "1 - 10 Mitarbeiter",
              title: "Klein, aber digital",
              desc: "Sie reinigen mit einem kleinen Team? Taskey bringt Struktur &ndash; ab Tag 1.",
              tier: "PROFESSIONAL",
              price: "Ab 12,90 &euro;",
              priceUnit: "/ Objekt / Monat",
            },
            {
              size: "11 - 50 Mitarbeiter",
              title: "Wachsen ohne Chaos",
              desc: "Mehrere Objekte, mehrere Teams? Taskey gibt Ihnen die Uebersicht.",
              tier: "BUSINESS",
              price: "Ab 16,90 &euro;",
              priceUnit: "/ Objekt / Monat",
              highlight: true,
            },
            {
              size: "50+ Mitarbeiter",
              title: "Gross und trotzdem einfach",
              desc: "Kliniken, Hotels, Industrieanlagen? Taskey skaliert mit. Keine Grenzen.",
              tier: "ENTERPRISE",
              price: "Individuell",
              priceUnit: "Auf Anfrage",
            },
          ].map((card, i) => (
            <div key={i} className={`rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${card.highlight ? "bg-gradient-to-br from-cyan-900 to-blue-950 text-white border-2 border-cyan-700 shadow-xl" : "bg-gray-50 border border-gray-200"}`}>
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${card.highlight ? "bg-cyan-400 text-gray-900" : "bg-gray-200 text-gray-700"}`}>
                {card.size}
              </span>
              <h3 className={`text-xl font-extrabold mb-2 ${card.highlight ? "text-white" : "text-gray-900"}`}>{card.title}</h3>
              <p className={`text-sm mb-6 leading-relaxed ${card.highlight ? "text-cyan-100" : "text-gray-600"}`} dangerouslySetInnerHTML={{ __html: card.desc }} />
              <div className="mb-4">
                <span className={`text-2xl font-black ${card.highlight ? "text-cyan-300" : "text-gray-900"}`} dangerouslySetInnerHTML={{ __html: card.price }} />
                <span className={`text-xs ml-1 ${card.highlight ? "text-cyan-200" : "text-gray-500"}`}>{card.priceUnit}</span>
              </div>
              <Link
                href="/pricing?model=reinigung"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${card.highlight ? "bg-white text-cyan-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"}`}
              >
                {card.tier} entdecken
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">Unbegrenzte Mitarbeiter &middot; 14 Tage kostenlos &middot; Taeglich kuendbar</p>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          10. FAQ
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-gray-50" id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Haeufige Fragen fuer Reinigungsbetriebe
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            {
              q: "Wie funktioniert der NFC-Leistungsnachweis?",
              a: "An jedem Objekt klebt ein kleiner NFC-Aufkleber. Ihre Reinigungskraft haelt das Handy dran &ndash; Taskey speichert automatisch Zeit, Ort und Person. Das Ganze dauert 1 Sekunde und ist manipulationssicher.",
            },
            {
              q: "Verstehen meine Reinigungskraefte die App?",
              a: "Ja. Die App ist so einfach wie WhatsApp. Grosse Symbole, klare Struktur, 20+ Sprachen. Keine Schulung noetig. Selbst Mitarbeiter ohne Smartphone-Erfahrung kommen sofort klar.",
            },
            {
              q: "Funktioniert Taskey auch in Kellern und Tiefgaragen?",
              a: "Ja. Die App arbeitet komplett offline. Alle Daten werden lokal gespeichert und automatisch synchronisiert, sobald wieder Empfang da ist. Kein einziger Scan geht verloren.",
            },
            {
              q: "Ist die Zeiterfassung mindestlohn-konform?",
              a: "Ja. Taskey erfasst alle Arbeitszeiten lueckenlos und digital. Die Daten genuegen den Anforderungen des Mindestlohngesetzes und sind pruefungssicher.",
            },
            {
              q: "Kann ich bestehende Objekt-Daten importieren?",
              a: "Ja. Wir unterstuetzen Excel-, CSV- und gaengige Formate. Optional richten wir alles fuer Sie ein &ndash; schluesselfertig.",
            },
            {
              q: "Kann ich Daten exportieren?",
              a: "Ja, ab dem BUSINESS-Paket. Zeitdaten und Abrechnungen koennen als PDF, CSV oder Excel exportiert werden.",
            },
            {
              q: "Was kostet Taskey fuer meinen Reinigungsbetrieb?",
              a: "Ab 12,90 Euro pro Objekt und Monat (PROFESSIONAL). Unbegrenzte Mitarbeiter. 14 Tage kostenlos testen. Taeglich kuendbar.",
            },
            {
              q: "Wie schnell kann ich starten?",
              a: "In unter 5 Minuten. Konto anlegen, Objekte erfassen, Mitarbeiter einladen, loslegen. Optional richten wir alles fuer Sie ein.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.a }} />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          11. KONTAKT
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-white" id="kontakt">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Fragen? Melden Sie sich.
            </h2>
            <p className="text-gray-600">Fynn Schulz &ndash; Gruender und persoenlicher Ansprechpartner</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                { label: "Telefon", value: "+49 151 68488999", href: "tel:+4915168488999", iconPath: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
                { label: "E-Mail", value: "fynn@taskeyapp.com", href: "mailto:fynn@taskeyapp.com", iconPath: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
                { label: "Adresse", value: "In der Acht 44, 66333 Voelklingen", href: null, iconPath: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-gray-900 hover:text-cyan-700 transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-semibold text-gray-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jetzt kostenlos starten</h3>
              <p className="text-sm text-gray-600 mb-6">Testen Sie Taskey 14 Tage lang kostenlos &ndash; ohne Risiko, ohne Kreditkarte.</p>
              <a
                href="https://signup.taskeyapp.com"
                className="block w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all text-sm shadow-lg"
              >
                Kostenlos testen &rarr;
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          12. MEGA CTA – Abschluss
      ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 text-white overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Bereit?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            14 Tage kostenlos. Keine Kreditkarte. Kein Risiko.<br />
            <span className="text-cyan-300 font-semibold">Einfach starten.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://signup.taskeyapp.com"
              className="px-10 py-5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-extrabold rounded-2xl hover:from-cyan-300 hover:to-cyan-400 transition-all text-lg shadow-2xl shadow-cyan-500/25 hover:scale-[1.02]"
            >
              Jetzt starten &rarr;
            </a>
            <Link
              href="/pricing?model=reinigung"
              className="px-10 py-5 border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all text-lg"
            >
              Preise ansehen
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>Keine Kreditkarte</span>
            <span>&middot;</span>
            <span>14 Tage kostenlos</span>
            <span>&middot;</span>
            <span>Taeglich kuendbar</span>
            <span>&middot;</span>
            <span>DSGVO-konform</span>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          Cross-link to Handwerk
      ──────────────────────────────────────────────────────────── */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>Sie kommen aus Handwerk oder Bau?</span>
          <Link href="/handwerk" className="text-blue-900 font-semibold hover:underline">
            Zur Handwerker-Version &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
