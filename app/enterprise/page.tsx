"use client";

import React, { useState } from "react";
import Link from "next/link";
import EnterpriseApplicationModal from "@/components/EnterpriseApplicationModal";

/* ──────────────────────────────────────────────────────────────────
   ENTERPRISE — Mainpage-Stil
   Dunkler Gradient, Cyan/Blue Glows, klare Sections, keine bunte
   Lego-Optik wie vorher. Aufnahme ist selektiv (Pitch-Charakter).
   ────────────────────────────────────────────────────────────────── */

const benefits = [
  {
    title: "Dedizierter Account-Manager",
    desc: "Ein fester Ansprechpartner, der Ihren Betrieb kennt und proaktiv mitdenkt — kein Ticket-System.",
  },
  {
    title: "Priority-Support & SLA",
    desc: "Garantierte Reaktionszeiten, vorrangige Bearbeitung. Hotline statt Helpdesk.",
  },
  {
    title: "Custom-Integrationen",
    desc: "Maßgeschneiderte Schnittstellen zu Ihrer ERP-, Lohn- oder Asset-Management-Welt.",
  },
  {
    title: "Erweiterte Sicherheit",
    desc: "Dedizierte Infrastruktur, SSO/SAML, Audit-Logs, Pen-Test-Berichte auf Anfrage.",
  },
  {
    title: "Persönliches Onboarding",
    desc: "Workshops, Schulungen vor Ort, Train-the-Trainer — bis Ihr Team produktiv arbeitet.",
  },
  {
    title: "Flexible Verträge",
    desc: "Individuelle Laufzeiten, Volumenstaffeln, DPA & Konzernverträge — auf Ihre Realität zugeschnitten.",
  },
];

const features = [
  { feature: "Mitarbeiter & Standorte", value: "Unbegrenzt" },
  { feature: "NFC-Tags", value: "Unbegrenzt" },
  { feature: "Speicher", value: "Unbegrenzt" },
  { feature: "API-Zugang & Webhooks", value: "Inklusive" },
  { feature: "SSO / SAML", value: "Inklusive" },
  { feature: "Custom-Rollen & Rechte", value: "Inklusive" },
  { feature: "Custom-Features", value: "Auf Anfrage" },
  { feature: "Onboarding", value: "Persönlich + Workshops" },
  { feature: "Support", value: "Dediziert + SLA" },
  { feature: "Vertrag", value: "Individuell" },
];

const criteria = [
  {
    headline: "100+ Mitarbeitende",
    desc: "Skalierung auf Konzernebene. Wenn Standard-Pakete an die Grenzen stoßen.",
  },
  {
    headline: "Strategische Bedeutung",
    desc: "Marktführer oder Organisationen mit besonderen Anforderungen an Verlässlichkeit.",
  },
  {
    headline: "Kritische Compliance",
    desc: "Hohe Anforderungen an Sicherheit, Audits, SLA — wir bauen, was Sie brauchen.",
  },
];

export default function EnterprisePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <EnterpriseApplicationModal isOpen={open} onClose={() => setOpen(false)} />

      <main className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white min-h-screen overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-500/15 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* HERO */}
        <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-cyan-300 uppercase">
                Enterprise · Selektive Aufnahme
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-white">
              Für Betriebe, die
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
                den Standard sprengen.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8">
              Individuelle Verträge. Dedizierter Ansprechpartner. Eigenes Onboarding & SLA. Wir bauen Taskey
              auf Ihren Betrieb zu — nicht umgekehrt.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
              >
                Enterprise anfragen
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                Standard-Pakete ansehen
              </Link>
            </div>

            <p className="text-xs text-white/40 mt-5">
              Aufnahme erfolgt nach Prüfung — nicht jeder Antrag wird angenommen.
            </p>
          </div>
        </section>

        {/* CRITERIA */}
        <section className="relative pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
                Wann Enterprise?
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 text-white">
                Drei Indikatoren.
              </h2>
              <p className="text-base md:text-lg text-white/60">
                Wenn mindestens zwei davon zutreffen, lohnt sich ein Gespräch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
              {criteria.map((c, i) => (
                <div
                  key={c.headline}
                  className={`relative rounded-3xl p-[1.5px] ${
                    i === 1
                      ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20"
                      : "bg-white/10"
                  }`}
                >
                  <div className="rounded-[calc(1.5rem-1.5px)] bg-gradient-to-br from-[#13203a] to-[#0d1a2e] p-7 md:p-8 h-full flex flex-col">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 mb-4">
                      0{i + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                      {c.headline}
                    </h3>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="relative pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
                Exklusive Vorteile
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 text-white">
                Mehr als nur Software.
              </h2>
              <p className="text-base md:text-lg text-white/60">
                Eine echte Partnerschaft — kein Lizenzvertrag mit Hotline.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="rounded-3xl bg-gradient-to-br from-[#13203a] to-[#0d1a2e] border border-white/10 p-7 md:p-8"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-5">
                    <span className="text-cyan-300 font-black text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 leading-tight">{b.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE TABLE */}
        <section className="relative pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
                Was Sie bekommen
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 text-white">
                Enterprise-Leistungen.
              </h2>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#13203a] to-[#0d1a2e] border border-white/10 overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr] text-xs font-black tracking-[0.25em] uppercase text-white/40 px-6 py-4 border-b border-white/10">
                <span>Feature</span>
                <span className="text-right text-cyan-300">Enterprise</span>
              </div>
              {features.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1.4fr_1fr] px-6 py-4 ${
                    i !== features.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <span className="text-sm md:text-base text-white/80">{row.feature}</span>
                  <span className="text-sm md:text-base font-bold text-white text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMITMENT */}
        <section className="relative pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
                  Unser Versprechen
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-white">
                  Wir stehen mit unserem Namen für Ihren Erfolg.
                </h2>
                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-4">
                  Als Enterprise-Kunde sind Sie nicht „ein User mehr". Sie sind Partner. Wir verstehen Ihre
                  Prozesse, unterstützen Ihre Ziele und wachsen gemeinsam mit Ihnen.
                </p>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Ihre Herausforderungen werden zu unseren — mit einem dedizierten Team, das genau weiß,
                  was Ihr Betrieb braucht.
                </p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-[#13203a] to-[#0d1a2e] border border-white/10 p-8 md:p-10">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 mb-2">
                      Aufnahme
                    </p>
                    <p className="text-white text-base">Selektiv, nach Prüfung — nicht jeder Antrag wird angenommen.</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 mb-2">
                      Setup-Zeit
                    </p>
                    <p className="text-white text-base">2–6 Wochen, je nach Komplexität & Integrationen.</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 mb-2">
                      Preis
                    </p>
                    <p className="text-white text-base">Auf Anfrage — individuell auf Ihren Betrieb zugeschnitten.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#13203a] via-[#0d1a2e] to-[#13203a] border border-white/10 p-8 md:p-14 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white">
                  Bereit für Enterprise?
                </h2>
                <p className="text-white/60 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                  Lassen Sie uns prüfen, ob wir die richtige Wahl für Ihren Betrieb sind. Kostenlose
                  Erstberatung, kein Vertrieb-Druck.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
                  >
                    Enterprise anfragen
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <a
                    href="mailto:fynn@taskeyapp.com?subject=Enterprise-Anfrage%20Taskey"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-colors"
                  >
                    Direkt schreiben
                  </a>
                </div>
                <div className="mt-10 pt-10 border-t border-white/10">
                  <Link
                    href="/pricing"
                    className="text-white/40 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Zurück zu den Standard-Paketen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
