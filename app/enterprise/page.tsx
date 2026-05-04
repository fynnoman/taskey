"use client";import React, { useState } from "react";import Link from "next/link";import EnterpriseApplicationModal from "@/components/EnterpriseApplicationModal";import { useLanguage } from "@/context/LanguageContext";type Content = {  hero: {    badge: string;    title1: string;    title2: string;    subtitle: string;    ctaApply: string;    ctaPricing: string;    note: string;  };  criteria: {    badge: string;    title: string;    intro: string;    items: { headline: string; desc: string }[];  };  benefits: {    badge: string;    title: string;    intro: string;    items: { title: string; desc: string }[];  };  table: {    badge: string;    title: string;    colFeature: string;    colValue: string;    rows: { feature: string; value: string }[];  };  commit: {    badge: string;    title: string;    p1: string;    p2: string;    intakeLabel: string;    intakeValue: string;    setupLabel: string;    setupValue: string;    priceLabel: string;    priceValue: string;  };  cta: {    title: string;    subtitle: string;    apply: string;    write: string;    back: string;  };};const content: Record<"de" | "en" | "fr", Content> = {  de: {    hero: {      badge: "Enterprise · Selektive Aufnahme",      title1: "Für Betriebe, die",      title2: "den Standard sprengen.",      subtitle:        "Individuelle Verträge. Dedizierter Ansprechpartner. Eigenes Onboarding & SLA. Wir bauen Taskey auf Ihren Betrieb zu — nicht umgekehrt.",      ctaApply: "Enterprise anfragen",      ctaPricing: "Standard-Pakete ansehen",      note: "Aufnahme erfolgt nach Prüfung — nicht jeder Antrag wird angenommen.",    },    criteria: {      badge: "Wann Enterprise?",      title: "Drei Indikatoren.",      intro: "Wenn mindestens zwei davon zutreffen, lohnt sich ein Gespräch.",      items: [        { headline: "100+ Mitarbeitende", desc: "Skalierung auf Konzernebene. Wenn Standard-Pakete an die Grenzen stoßen." },        { headline: "Strategische Bedeutung", desc: "Marktführer oder Organisationen mit besonderen Anforderungen an Verlässlichkeit." },        { headline: "Kritische Compliance", desc: "Hohe Anforderungen an Sicherheit, Audits, SLA — wir bauen, was Sie brauchen." },      ],    },    benefits: {      badge: "Exklusive Vorteile",      title: "Mehr als nur Software.",      intro: "Eine echte Partnerschaft — kein Lizenzvertrag mit Hotline.",      items: [        { title: "Dedizierter Account-Manager", desc: "Ein fester Ansprechpartner, der Ihren Betrieb kennt und proaktiv mitdenkt — kein Ticket-System." },        { title: "Priority-Support & SLA", desc: "Garantierte Reaktionszeiten, vorrangige Bearbeitung. Hotline statt Helpdesk." },        { title: "Custom-Integrationen", desc: "Maßgeschneiderte Schnittstellen zu Ihrer ERP-, Lohn- oder Asset-Management-Welt." },        { title: "Erweiterte Sicherheit", desc: "Dedizierte Infrastruktur, SSO/SAML, Audit-Logs, Pen-Test-Berichte auf Anfrage." },        { title: "Persönliches Onboarding", desc: "Workshops, Schulungen vor Ort, Train-the-Trainer — bis Ihr Team produktiv arbeitet." },        { title: "Flexible Verträge", desc: "Individuelle Laufzeiten, Volumenstaffeln, DPA & Konzernverträge — auf Ihre Realität zugeschnitten." },      ],    },    table: {      badge: "Was Sie bekommen",      title: "Enterprise-Leistungen.",      colFeature: "Feature",      colValue: "Enterprise",      rows: [        { feature: "Mitarbeiter & Standorte", value: "Unbegrenzt" },        { feature: "NFC-Tags", value: "Unbegrenzt" },        { feature: "Speicher", value: "Unbegrenzt" },        { feature: "API-Zugang & Webhooks", value: "Inklusive" },        { feature: "SSO / SAML", value: "Inklusive" },        { feature: "Custom-Rollen & Rechte", value: "Inklusive" },        { feature: "Custom-Features", value: "Auf Anfrage" },        { feature: "Onboarding", value: "Persönlich + Workshops" },        { feature: "Support", value: "Dediziert + SLA" },        { feature: "Vertrag", value: "Individuell" },      ],    },    commit: {      badge: "Unser Versprechen",      title: "Wir stehen mit unserem Namen für Ihren Erfolg.",      p1: "Als Enterprise-Kunde sind Sie nicht „ein User mehr\". Sie sind Partner. Wir verstehen Ihre Prozesse, unterstützen Ihre Ziele und wachsen gemeinsam mit Ihnen.",      p2: "Ihre Herausforderungen werden zu unseren — mit einem dedizierten Team, das genau weiß, was Ihr Betrieb braucht.",      intakeLabel: "Aufnahme",      intakeValue: "Selektiv, nach Prüfung — nicht jeder Antrag wird angenommen.",      setupLabel: "Setup-Zeit",      setupValue: "2–6 Wochen, je nach Komplexität & Integrationen.",      priceLabel: "Preis",      priceValue: "Auf Anfrage — individuell auf Ihren Betrieb zugeschnitten.",    },    cta: {      title: "Bereit für Enterprise?",      subtitle: "Lassen Sie uns prüfen, ob wir die richtige Wahl für Ihren Betrieb sind. Kostenlose Erstberatung, kein Vertrieb-Druck.",      apply: "Enterprise anfragen",      write: "Direkt schreiben",      back: "Zurück zu den Standard-Paketen",    },  },  en: {    hero: {      badge: "Enterprise · Selective intake",      title1: "For businesses that",      title2: "go beyond the standard.",      subtitle:        "Custom contracts. Dedicated contact. Personal onboarding & SLA. We build Taskey around your business — not the other way around.",      ctaApply: "Apply for Enterprise",      ctaPricing: "View standard plans",      note: "Intake after review — not every application is accepted.",    },    criteria: {      badge: "When Enterprise?",      title: "Three indicators.",      intro: "If at least two apply, it's worth talking.",      items: [        { headline: "100+ employees", desc: "Group-level scaling. When standard plans hit their limits." },        { headline: "Strategic relevance", desc: "Market leaders or organisations with high reliability needs." },        { headline: "Critical compliance", desc: "High demands on security, audits, SLA — we build what you need." },      ],    },    benefits: {      badge: "Exclusive benefits",      title: "More than software.",      intro: "A real partnership — not a license with a hotline.",      items: [        { title: "Dedicated account manager", desc: "A fixed contact who knows your business and thinks ahead — no ticketing system." },        { title: "Priority support & SLA", desc: "Guaranteed response times, priority handling. Hotline instead of helpdesk." },        { title: "Custom integrations", desc: "Tailored interfaces to your ERP, payroll or asset-management world." },        { title: "Advanced security", desc: "Dedicated infrastructure, SSO/SAML, audit logs, pen-test reports on request." },        { title: "Personal onboarding", desc: "Workshops, on-site training, train-the-trainer — until your team is productive." },        { title: "Flexible contracts", desc: "Custom terms, volume tiers, DPA & group agreements — built for your reality." },      ],    },    table: {      badge: "What you get",      title: "Enterprise services.",      colFeature: "Feature",      colValue: "Enterprise",      rows: [        { feature: "Employees & sites", value: "Unlimited" },        { feature: "NFC tags", value: "Unlimited" },        { feature: "Storage", value: "Unlimited" },        { feature: "API access & webhooks", value: "Included" },        { feature: "SSO / SAML", value: "Included" },        { feature: "Custom roles & permissions", value: "Included" },        { feature: "Custom features", value: "On request" },        { feature: "Onboarding", value: "Personal + workshops" },        { feature: "Support", value: "Dedicated + SLA" },        { feature: "Contract", value: "Custom" },      ],    },    commit: {      badge: "Our promise",      title: "We stand by our name for your success.",      p1: "As an Enterprise customer you're not \"one more user\". You're a partner. We understand your processes, support your goals and grow with you.",      p2: "Your challenges become ours — with a dedicated team that knows exactly what your business needs.",      intakeLabel: "Intake",      intakeValue: "Selective, after review — not every application is accepted.",      setupLabel: "Setup time",      setupValue: "2–6 weeks, depending on complexity & integrations.",      priceLabel: "Price",      priceValue: "On request — individually tailored to your business.",    },    cta: {      title: "Ready for Enterprise?",      subtitle: "Let's check if we're the right choice. Free first consultation, no sales pressure.",      apply: "Apply for Enterprise",      write: "Email us directly",      back: "Back to standard plans",    },  },  fr: {    hero: {      badge: "Enterprise · Admission sélective",      title1: "Pour les entreprises qui",      title2: "dépassent le standard.",      subtitle:        "Contrats sur mesure. Interlocuteur dédié. Onboarding personnel & SLA. Nous adaptons Taskey à votre entreprise — pas l'inverse.",      ctaApply: "Demander Enterprise",      ctaPricing: "Voir les offres standard",      note: "Admission après examen — toutes les demandes ne sont pas acceptées.",    },    criteria: {      badge: "Quand Enterprise ?",      title: "Trois indicateurs.",      intro: "Si au moins deux s'appliquent, parlons-en.",      items: [        { headline: "100+ collaborateurs", desc: "Échelle groupe. Quand les offres standard atteignent leurs limites." },        { headline: "Importance stratégique", desc: "Leaders du marché ou organisations avec exigences élevées de fiabilité." },        { headline: "Conformité critique", desc: "Fortes exigences de sécurité, audits, SLA — nous construisons ce qu'il vous faut." },      ],    },    benefits: {      badge: "Avantages exclusifs",      title: "Plus qu'un logiciel.",      intro: "Un vrai partenariat — pas une licence avec une hotline.",      items: [        { title: "Account manager dédié", desc: "Un interlocuteur fixe qui connaît votre activité et anticipe — pas de système de tickets." },        { title: "Support prioritaire & SLA", desc: "Délais de réponse garantis, traitement prioritaire. Hotline plutôt que helpdesk." },        { title: "Intégrations sur mesure", desc: "Interfaces personnalisées vers votre ERP, paie ou gestion d'actifs." },        { title: "Sécurité avancée", desc: "Infrastructure dédiée, SSO/SAML, journaux d'audit, rapports de pen-test sur demande." },        { title: "Onboarding personnel", desc: "Ateliers, formation sur site, train-the-trainer — jusqu'à ce que votre équipe soit productive." },        { title: "Contrats flexibles", desc: "Durées sur mesure, paliers de volume, DPA & contrats groupe — adaptés à votre réalité." },      ],    },    table: {      badge: "Ce que vous obtenez",      title: "Prestations Enterprise.",      colFeature: "Fonctionnalité",      colValue: "Enterprise",      rows: [        { feature: "Employés & sites", value: "Illimité" },        { feature: "Étiquettes NFC", value: "Illimité" },        { feature: "Stockage", value: "Illimité" },        { feature: "Accès API & webhooks", value: "Inclus" },        { feature: "SSO / SAML", value: "Inclus" },        { feature: "Rôles & droits sur mesure", value: "Inclus" },        { feature: "Fonctionnalités sur mesure", value: "Sur demande" },        { feature: "Onboarding", value: "Personnel + ateliers" },        { feature: "Support", value: "Dédié + SLA" },        { feature: "Contrat", value: "Sur mesure" },      ],    },    commit: {      badge: "Notre engagement",      title: "Nous engageons notre nom pour votre succès.",      p1: "En tant que client Enterprise, vous n'êtes pas « un utilisateur de plus ». Vous êtes un partenaire. Nous comprenons vos processus, soutenons vos objectifs et grandissons avec vous.",      p2: "Vos défis deviennent les nôtres — avec une équipe dédiée qui sait exactement ce dont votre entreprise a besoin.",      intakeLabel: "Admission",      intakeValue: "Sélective, après examen — toutes les demandes ne sont pas acceptées.",      setupLabel: "Mise en place",      setupValue: "2–6 semaines, selon la complexité & les intégrations.",      priceLabel: "Prix",      priceValue: "Sur demande — adapté individuellement à votre entreprise.",    },    cta: {      title: "Prêt pour Enterprise ?",      subtitle: "Vérifions si nous sommes le bon choix pour vous. Premier entretien gratuit, sans pression commerciale.",      apply: "Demander Enterprise",      write: "Nous écrire directement",      back: "Retour aux offres standard",    },  },};export default function EnterprisePage() {  const [open, setOpen] = useState(false);  const { language } = useLanguage();  const c = content[language] ?? content.de;  return (    <>      <EnterpriseApplicationModal isOpen={open} onClose={() => setOpen(false)} />      <main className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white min-h-screen overflow-hidden">        <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-500/15 rounded-full blur-[180px] pointer-events-none" />        <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />        <div          className="absolute inset-0 opacity-[0.04] pointer-events-none"          style={{            backgroundImage:              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",            backgroundSize: "60px 60px",          }}        />        <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">              <span className="relative flex h-2 w-2">                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />              </span>              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-cyan-300 uppercase">                {c.hero.badge}              </span>            </div>            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-white">              {c.hero.title1}              <br />              <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">                {c.hero.title2}              </span>            </h1>            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8">{c.hero.subtitle}</p>            <div className="flex flex-col sm:flex-row gap-3 justify-center">              <button                onClick={() => setOpen(true)}                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 text-sm font-bold rounded-full hover:bg-white/90 transition-colors"              >                {c.hero.ctaApply}                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />                </svg>              </button>              <Link                href="/pricing"                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-colors"              >                {c.hero.ctaPricing}              </Link>            </div>            <p className="text-xs text-white/40 mt-5">{c.hero.note}</p>
          </div>
        </section>

        <section className="relative pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
                {c.criteria.badge}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 text-white">
                {c.criteria.title}
              </h2>
              <p className="text-base md:text-lg text-white/60">{c.criteria.intro}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
              {c.criteria.items.map((it, i) => (
                <div
                  key={it.headline}
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
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">{it.headline}</h3>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
                {c.benefits.badge}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 text-white">
                {c.benefits.title}
              </h2>
              <p className="text-base md:text-lg text-white/60">{c.benefits.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {c.benefits.items.map((b, i) => (
                <div key={b.title} className="rounded-3xl bg-gradient-to-br from-[#13203a] to-[#0d1a2e] border border-white/10 p-7 md:p-8">
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

        <section className="relative pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
                {c.table.badge}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 text-white">
                {c.table.title}
              </h2>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#13203a] to-[#0d1a2e] border border-white/10 overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr] text-xs font-black tracking-[0.25em] uppercase text-white/40 px-6 py-4 border-b border-white/10">
                <span>{c.table.colFeature}</span>
                <span className="text-right text-cyan-300">{c.table.colValue}</span>
              </div>
              {c.table.rows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1.4fr_1fr] px-6 py-4 ${
                    i !== c.table.rows.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <span className="text-sm md:text-base text-white/80">{row.feature}</span>
                  <span className="text-sm md:text-base font-bold text-white text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
                  {c.commit.badge}
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-white">{c.commit.title}</h2>
                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-4">{c.commit.p1}</p>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">{c.commit.p2}</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-[#13203a] to-[#0d1a2e] border border-white/10 p-8 md:p-10">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 mb-2">{c.commit.intakeLabel}</p>
                    <p className="text-white text-base">{c.commit.intakeValue}</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 mb-2">{c.commit.setupLabel}</p>
                    <p className="text-white text-base">{c.commit.setupValue}</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 mb-2">{c.commit.priceLabel}</p>
                    <p className="text-white text-base">{c.commit.priceValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#13203a] via-[#0d1a2e] to-[#13203a] border border-white/10 p-8 md:p-14 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white">{c.cta.title}</h2>
                <p className="text-white/60 text-base md:text-lg mb-8 max-w-2xl mx-auto">{c.cta.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
                  >
                    {c.cta.apply}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <a
                    href="mailto:fynn@taskeyapp.com?subject=Enterprise-Anfrage%20Taskey"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-colors"
                  >
                    {c.cta.write}
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
                    {c.cta.back}
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
