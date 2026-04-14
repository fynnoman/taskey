"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Icons ─────────────────────────────────────────────────────────
function CheckIcon({ className = "w-5 h-5 text-green-500" }: { className?: string }) {
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
export default function HandwerkClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* ────────────────────────────────────────────────────────────
          1. HERO
      ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-white overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-yellow-300 bg-yellow-300/10 border border-yellow-300/20 rounded-full mb-6">
            FUER HANDWERK &amp; BAU IM DACH-RAUM
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Schluss mit Zettelwirtschaft<br className="hidden sm:block" /> auf der Baustelle.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Taskey bringt Ordnung in Arbeitszeiten, Auftraege, Werkzeug und Abrechnung. Direkt vom Handy. Fuer Handwerksbetriebe in Deutschland, Oesterreich und der Schweiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://app.taskey.de/register"
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors text-base shadow-lg"
            >
              14 Tage kostenlos testen
            </a>
          </div>
          <p className="text-sm text-gray-400">Keine Kreditkarte. Kein Risiko. Sofort loslegen.</p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. NFC-AUFKLEBER (Herzstueck)
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-900 bg-blue-100 rounded-full mb-4">
            <NfcIcon /> NFC-WERKZEUG-ERFASSUNG
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Nie wieder Werkzeug auf der Baustelle suchen.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Kleben Sie einen NFC-Aufkleber an Ihre Bohrmaschine, Ihre Leiter, Ihren Anhaenger oder Ihre Werkzeugkiste. Ihr Geselle haelt das Handy kurz dran &ndash; und Taskey speichert automatisch, wo sich das Werkzeug zuletzt befand. Kein Suchen mehr. Kein Zoff, wer was mitgenommen hat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Werkzeug wiederfinden",
              desc: "Die Karte zeigt den letzten Standort jedes Werkzeugs. Sofort sehen, wo die Flex geblieben ist.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              ),
            },
            {
              title: "Maschinen-Historie am Objekt",
              desc: "Wartungen, Prueftermine, Reparaturen &ndash; alles per Scan abrufbar. Direkt am Geraet.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              ),
            },
            {
              title: "Rechtssicherer Einsatz-Nachweis",
              desc: "Jeder Scan mit Uhrzeit und GPS &ndash; perfekt fuer Versicherung und Gewaehrleistung.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              ),
            },
            {
              title: "Wissen bleibt im Betrieb",
              desc: "Ihr bester Geselle geht in Rente? Sein Wissen bleibt am Werkzeug und am Objekt &ndash; nicht in seinem Kopf.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              ),
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          3. DREI KERNSAEULEN
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Drei Funktionen, die Ihren Alltag veraendern
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Weniger Verwaltung, mehr Ueberblick, zufriedenere Kunden.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              badge: "ZEITERFASSUNG",
              title: "Automatische Zeiterfassung",
              desc: "Keine Stundenzettel mehr. Ihre Mitarbeiter starten den Auftrag, Taskey erfasst Zeit, Pausen und Fahrt automatisch. Am Monatsende stehen fertige Zahlen fuer die Lohnabrechnung bereit.",
              color: "bg-green-100 text-green-800",
              iconPath: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              badge: "LIVE-MARGEN",
              title: "Live-Uebersicht der Margen",
              desc: "Sehen Sie sofort, ob eine Baustelle Gewinn macht. Personalkosten, Material und Sondereinsaetze werden automatisch gegen Ihren Angebotspreis gerechnet. Sie sehen, wenn eine Baustelle kippt, bevor es zu spaet ist.",
              color: "bg-blue-100 text-blue-800",
              iconPath: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
            },
            {
              badge: "AUFTRAGGEBER-PORTAL",
              title: "Auftraggeber-Portal",
              desc: "Ihr Bauherr ruft dreimal taeglich an und fragt nach dem Stand? Damit ist Schluss. Ein Link &ndash; er sieht selbst Fotos, Fortschritt, Kosten. Unsere Kunden sparen damit 45 Minuten pro Tag pro Bauleiter.",
              color: "bg-purple-100 text-purple-800",
              iconPath: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.813a4.5 4.5 0 00-6.364-6.364L4.5 8.25",
            },
          ].map((pillar, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${pillar.color}`}>
                {pillar.badge}
              </span>
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={pillar.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: pillar.desc }} />
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          4. LIVE-MARGEN DETAIL
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-gray-900 text-white" id="live-margen">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold bg-red-500/20 text-red-300 rounded-full mb-4">ECHTZEIT-RENTABILITAET</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Sie erfahren erst beim Steuerberater, dass die Baustelle Verlust war?
            </h2>
            <p className="text-xl text-gray-300 mb-4">Damit ist Schluss.</p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Jede laufende Baustelle hat eine Live-Uebersicht: Materialkosten, Stunden, Nachtraege &ndash; alles gegen Ihre Angebotssumme gerechnet. Sie sehen sofort, wenn eine Baustelle kippt, und koennen gegensteuern. Kein Warten auf den Monatsabschluss, keine boesen Ueberraschungen.
            </p>
            <a href="https://app.taskey.de/register" className="inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors text-sm">
              Jetzt kostenlos testen
            </a>
          </div>

          {/* Simulated project cards */}
          <div className="space-y-4">
            {[
              { name: "Elektroinstallation Mueller GmbH", margin: "+12,4 %", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", status: "Im Plan" },
              { name: "Dachsanierung Schmidt", margin: "+8,2 %", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", status: "Im Plan" },
              { name: "SHK Neubau Weber", margin: "-3,1 %", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", status: "Materialkosten 18 % ueber Plan", warn: true },
            ].map((project, i) => (
              <div key={i} className={`rounded-xl border p-5 ${project.bg}`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">{project.name}</h4>
                  <span className={`font-bold text-lg ${project.color}`}>{project.margin}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {project.warn ? (
                    <>
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <span className="text-red-300">{project.status}</span>
                    </>
                  ) : (
                    <>
                      <CheckIcon className="w-4 h-4 text-green-400" />
                      <span className="text-green-300">{project.status}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          5. TASKEY SHARE (Auftraggeber-Portal)
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.813a4.5 4.5 0 00-6.364-6.364L4.5 8.25" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">AUFTRAGGEBER-PORTAL</p>
                  <p className="text-sm font-semibold text-gray-900">Dachsanierung Schmidt</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Fortschritt", value: "68 %", bar: 68 },
                  { label: "Budget verbraucht", value: "54 %", bar: 54 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{item.label}</span>
                      <span className="font-semibold text-gray-900">{item.value}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full transition-all" style={{ width: `${item.bar}%` }} />
                    </div>
                  </div>
                ))}
                <div className="flex gap-2 mt-3">
                  <div className="flex-1 bg-gray-100 rounded-lg h-16 flex items-center justify-center text-xs text-gray-400">Foto 1</div>
                  <div className="flex-1 bg-gray-100 rounded-lg h-16 flex items-center justify-center text-xs text-gray-400">Foto 2</div>
                  <div className="flex-1 bg-gray-100 rounded-lg h-16 flex items-center justify-center text-xs text-gray-400">Foto 3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 text-xs font-bold bg-purple-100 text-purple-800 rounded-full mb-4">TASKEY SHARE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Der Bauherr ruft 15-mal am Tag: &bdquo;Wie weit seid ihr?&ldquo;
            </h2>
            <p className="text-xl text-gray-700 mb-4">Ein Link. Er sieht alles selbst. Und ruft nie wieder an.</p>
            <p className="text-gray-600 leading-relaxed">
              Sie schicken Ihrem Bauherrn einmal einen Link. Darin sieht er jederzeit: aktuelle Baustellenfotos, Fortschritt in Prozent, Restbudget, geplante naechste Schritte. Ihr Team arbeitet weiter, statt Statusupdates am Telefon durchzugeben.
            </p>
          </div>
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          6. HANDY-APP FUER DAS TEAM
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-bold bg-green-100 text-green-800 rounded-full mb-4">MOBILE APP</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Die Handy-App fuer Ihre Mitarbeiter
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            So einfach wie WhatsApp. Auch fuer Mitarbeiter ohne perfekte Deutschkenntnisse.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Kinderleichte Bedienung",
              desc: "Keine Schulung noetig. Ihre Mitarbeiter koennen sofort loslegen.",
              iconPath: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
            },
            {
              title: "Offline-faehig",
              desc: "Funktioniert auch im Rohbau ohne Empfang. Daten werden spaeter synchronisiert.",
              iconPath: "M3 3l8.735 8.735m0 0a.374.374 0 11.53.53m-.53-.53l.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 010 5.304m2.121-7.425a6.75 6.75 0 010 9.546m2.122-11.667a9.75 9.75 0 010 13.788",
            },
            {
              title: "Sofort-Nachrichten",
              desc: "Bei neuen Auftraegen und Aenderungen erhaelt Ihr Team sofort eine Benachrichtigung.",
              iconPath: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
            },
            {
              title: "Anmelden per Fingerabdruck",
              desc: "Oder per Gesichtserkennung. Kein Passwort-Chaos auf der Baustelle.",
              iconPath: "M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33",
            },
          ].map((item, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-14 h-14 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          7. FUER JEDE BETRIEBSGROESSE
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Fuer jeden Handwerksbetrieb die richtige Loesung
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              size: "1 - 5 Mitarbeiter",
              title: "Einstieg & Aufbau",
              desc: "Sie sind gerade dabei, Ihren Betrieb aufzubauen, oder arbeiten als kleiner Handwerksbetrieb? Taskey bringt Struktur ab Tag 1.",
              tier: "START",
              price: "11,79",
            },
            {
              size: "6 - 20 Mitarbeiter",
              title: "Wachstum & Kontrolle",
              desc: "Ihr Betrieb waechst, mehrere Baustellen gleichzeitig, immer mehr Verwaltung? Taskey gibt Ihnen die Uebersicht ueber alle Teams und Projekte.",
              tier: "GROW",
              price: "21,78",
              highlight: true,
            },
            {
              size: "21+ Mitarbeiter",
              title: "Skalierung & Effizienz",
              desc: "Sie leiten einen grossen Handwerksbetrieb mit mehreren Teams und komplexen Baustellen? Taskey waechst mit Ihnen.",
              tier: "SCALE",
              price: "29,77",
            },
          ].map((card, i) => (
            <div key={i} className={`rounded-2xl p-8 ${card.highlight ? "bg-blue-900 text-white border-2 border-blue-700 shadow-xl" : "bg-white border border-gray-200"}`}>
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${card.highlight ? "bg-yellow-400 text-gray-900" : "bg-gray-100 text-gray-700"}`}>
                {card.size}
              </span>
              <h3 className={`text-xl font-bold mb-2 ${card.highlight ? "text-white" : "text-gray-900"}`}>{card.title}</h3>
              <p className={`text-sm mb-6 leading-relaxed ${card.highlight ? "text-blue-100" : "text-gray-600"}`}>{card.desc}</p>
              <div className="mb-4">
                <span className={`text-3xl font-extrabold ${card.highlight ? "text-yellow-300" : "text-gray-900"}`}>{card.price} &euro;</span>
                <span className={`text-sm ml-1 ${card.highlight ? "text-blue-200" : "text-gray-500"}`}>/ Mitarbeiter / Monat</span>
              </div>
              <Link
                href="/pricing?model=handwerk"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${card.highlight ? "bg-white text-blue-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"}`}
              >
                {card.tier} entdecken
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">Alle Preise zzgl. MwSt. &middot; Taeglich kuendbar &middot; 14 Tage kostenlos testen</p>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          8. BRANCHEN-UEBERBLICK
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Fuer alle Gewerke im Handwerk
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Taskey passt sich an Ihren Betrieb an &ndash; egal ob Elektro, SHK oder Garten- und Landschaftsbau.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: "Elektrobetriebe", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
            { name: "SHK-Betriebe", icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" },
            { name: "Maler & Lackierer", icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" },
            { name: "Dachdecker", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
            { name: "Tischler & Schreiner", icon: "M11.42 15.17l-5.648 3.14a.75.75 0 01-1.088-.791l.88-6.31L.18 6.07a.75.75 0 01.416-1.28l6.335-.922L9.81.39a.75.75 0 011.38 0l2.879 5.478 6.335.922a.75.75 0 01.416 1.28l-5.384 5.138.88 6.31a.75.75 0 01-1.088.791L12 15.17z" },
            { name: "Maurer & Betonbauer", icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" },
            { name: "Bauunternehmen", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
            { name: "GaLaBau", icon: "M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" },
            { name: "Metallbau", icon: "M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" },
            { name: "Bodenleger", icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" },
          ].map((trade, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={trade.icon} />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-900">{trade.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          9. FAQ
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-gray-50" id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Haeufige Fragen fuer Handwerksbetriebe
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            {
              q: "Wie funktioniert die automatische Zeiterfassung auf der Baustelle?",
              a: "Ihre Mitarbeiter oeffnen die Taskey-App und starten den Auftrag mit einem Tipp. Die App erfasst automatisch Arbeitszeit, Pausen und Fahrtzeiten. Am Monatsende exportieren Sie die fertigen Daten fuer Ihre Lohnabrechnung.",
            },
            {
              q: "Funktioniert Taskey auch ohne Internet im Rohbau?",
              a: "Ja. Die App speichert alle Daten lokal auf dem Handy und synchronisiert automatisch, sobald wieder eine Verbindung besteht. Kein einziger Eintrag geht verloren.",
            },
            {
              q: "Erfasst Taskey auch Fahrtzeiten zwischen Baustellen?",
              a: "Ja. Ihre Mitarbeiter koennen Fahrtzeiten separat erfassen. So sehen Sie genau, wie viel Zeit auf der Strasse und wie viel auf der Baustelle verbracht wird.",
            },
            {
              q: "Kann ich das Werkzeug meines Betriebs mit NFC erfassen?",
              a: "Ja. Kleben Sie einen NFC-Aufkleber an jedes Werkzeug oder jede Maschine. Per Handy-Scan wird der Standort, die letzte Nutzung und die Wartungshistorie gespeichert.",
            },
            {
              q: "Wie dokumentiere ich Nachtraege und Zusatzleistungen?",
              a: "Direkt in der App. Ihr Mitarbeiter fotografiert die Zusatzarbeit, traegt Material und Stunden ein. Sie haben sofort den Nachweis fuer Ihren Kunden oder Auftraggeber.",
            },
            {
              q: "Gibt es eine Verbindung zu LexOffice, Sage oder DATEV?",
              a: "Ja, ab dem GROW-Paket bieten wir Anbindungen an gaengige Buchhaltungssoftware. Zeitdaten und Abrechnungen fliessen automatisch in Ihr System.",
            },
            {
              q: "Was kostet Taskey fuer meinen Handwerksbetrieb?",
              a: "Ab 11,79 Euro pro Mitarbeiter und Monat (START). Das beliebteste Paket GROW kostet 21,78 Euro. Alle Preise sind taeglich kuendbar, und Sie koennen 14 Tage lang kostenlos testen.",
            },
            {
              q: "Wie schnell kann ich starten?",
              a: "In unter 5 Minuten. Konto anlegen, Mitarbeiter einladen, loslegen. Optional richten wir alles fuer Sie ein - schluesselfertig.",
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
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          10. KONTAKT / CTA-BLOCK
      ──────────────────────────────────────────────────────────── */}
      <Section className="bg-white" id="kontakt">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Fragen zu Taskey fuer Ihren Handwerksbetrieb?
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
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-gray-900 hover:text-blue-900 transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-semibold text-gray-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jetzt kostenlos starten</h3>
              <p className="text-sm text-gray-600 mb-6">Testen Sie Taskey 14 Tage lang kostenlos &ndash; ohne Risiko, ohne Kreditkarte.</p>
              <a
                href="https://app.taskey.de/register"
                className="block w-full py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors text-sm"
              >
                Kostenlos testen
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          11. ABSCHLUSS-CTA
      ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Bereit, Ihren Handwerksbetrieb zu vereinfachen?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            14 Tage kostenlos testen &ndash; keine Kreditkarte, keine Verpflichtung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://app.taskey.de/register"
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors text-base shadow-lg"
            >
              Jetzt kostenlos starten
            </a>
            <Link
              href="/pricing?model=handwerk"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Alle Preise ansehen
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>Keine Kreditkarte</span>
            <span>14 Tage kostenlos</span>
            <span>Taeglich kuendbar</span>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          Cross-link to Reinigung
      ──────────────────────────────────────────────────────────── */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>Sie sind ein Reinigungsbetrieb?</span>
          <Link href="/" className="text-blue-900 font-semibold hover:underline">
            Zur Version fuer Gebaeudereiniger &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
