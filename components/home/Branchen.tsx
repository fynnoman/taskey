'use client';

import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

const CONTENT = {
  de: {
    KICKER: "Frisch am Markt. Mit voller Energie.",
    H2_LINE1: "Seit Februar 2026 live.",
    H2_LINE2: "Mit klarer Mission.",
    INTRO: "Wir sind seit Februar 2026 am Markt. Unser Anspruch: eine Software bauen, die Reinigungsbetriebe im Alltag wirklich weiterbringt – und sie professionell, ehrlich und mit voller Energie an den Betrieb bringen. Hier ein paar erste Stimmen aus Pilotgesprächen mit Reinigungsfirmen.",
    STAT_RATING_LABEL: "Markteintritt",
    STAT_COMPANIES_LABEL: "Entwickelt in Deutschland",
    STAT_REGION_LABEL: "DE · AT · CH",
    STAT_NPS_LABEL: "DSGVO-konform",
    CTA_TITLE: "Starten Sie Ihre Erfolgsgeschichte mit Taskey.",
    CTA_BODY: "Testen Sie Taskey 30 Tage gratis. Kein Setup-Aufwand, keine Vertragsbindung, voller Funktionsumfang.",
    CTA_SECONDARY: "Alle Funktionen",
    T1_QUOTE: "Seit Taskey wissen wir auf die Minute genau, wer wo geputzt hat – und unsere Auftraggeber bekommen den Nachweis automatisch.",
    T1_ROLE: "Geschäftsführer",
    T1_LOCATION: "Stuttgart",
    T1_EMPLOYEES: "42 Mitarbeitende",
    T1_TAG: "Unterhaltsreinigung",
    T2_QUOTE: "Die NFC-Tags an den Objekten haben uns die Diskussionen über Stundenzettel komplett erspart. Jede Minute revisionssicher dokumentiert.",
    T2_ROLE: "Objektleiterin",
    T2_LOCATION: "München",
    T2_EMPLOYEES: "120 Mitarbeitende",
    T2_TAG: "Industriereinigung",
    T3_QUOTE: "Vorher 4 Tools, jetzt eines. Allein bei den Lizenzen sparen wir über 600 € im Monat – und das Team kommt endlich klar.",
    T3_ROLE: "Inhaber",
    T3_LOCATION: "Köln",
    T3_EMPLOYEES: "18 Mitarbeitende",
    T3_TAG: "Glas- & Fassadenreinigung",
    T4_QUOTE: "Unsere Reinigungskräfte erfassen Mängel direkt mit Foto in der App. Das Büro reagiert sofort statt am Monatsende.",
    T4_ROLE: "Betriebsleitung",
    T4_LOCATION: "Hamburg",
    T4_EMPLOYEES: "67 Mitarbeitende",
    T4_TAG: "Klinik- & Hygienereinigung",
    T5_QUOTE: "Die Auftraggeber-Freigabe per Link ist ein echter Gamechanger. Hotels und Verwalter sehen den Status live – ohne Mail-Pingpong.",
    T5_ROLE: "Geschäftsführer",
    T5_LOCATION: "Frankfurt",
    T5_EMPLOYEES: "210 Mitarbeitende",
    T5_TAG: "Hotel-Housekeeping",
    T6_QUOTE: "Wir haben uns jahrelang vor der Digitalisierung gedrückt. Mit Taskey waren wir nach 2 Wochen produktiv – und das Team liebt es.",
    T6_ROLE: "Inhaberin",
    T6_LOCATION: "Wien",
    T6_EMPLOYEES: "9 Mitarbeitende",
    T6_TAG: "Sonder- & Baureinigung",
    T7_QUOTE: "Live-Margen pro Objekt – das hatten wir vorher nirgendwo. Jetzt sehen wir sofort, welcher Auftrag rechnet und welcher nicht.",
    T7_ROLE: "Operations Manager",
    T7_LOCATION: "Berlin",
    T7_EMPLOYEES: "85 Mitarbeitende",
    T7_TAG: "Großobjekt-Reinigung",
    T8_QUOTE: "Schichtplanung für 30 Reinigungskräfte ging vorher per Excel und WhatsApp. Heute klicke ich 10 Minuten und der Plan steht.",
    T8_ROLE: "Disposition",
    T8_LOCATION: "Innsbruck",
    T8_EMPLOYEES: "34 Mitarbeitende",
    T8_TAG: "Unterhaltsreinigung",
  },
  en: {
    KICKER: "New on the market. Full energy.",
    H2_LINE1: "Live since February 2026.",
    H2_LINE2: "With a clear mission.",
    INTRO: "We launched in February 2026. Our ambition: build software that genuinely moves cleaning businesses forward in their daily operations – and bring it to market professionally, honestly and with full energy. Here are some early voices from pilot conversations with cleaning companies.",
    STAT_RATING_LABEL: "Market launch",
    STAT_COMPANIES_LABEL: "Built in Germany",
    STAT_REGION_LABEL: "DE · AT · CH",
    STAT_NPS_LABEL: "GDPR-compliant",
    CTA_TITLE: "Start your success story with Taskey.",
    CTA_BODY: "Try Taskey free for 30 days. No setup effort, no contract lock-in, full feature set.",
    CTA_SECONDARY: "All features",
    T1_QUOTE: "Thanks to Taskey, we know to the minute who cleaned where – and our clients receive the proof automatically.",
    T1_ROLE: "Managing Director",
    T1_LOCATION: "Stuttgart",
    T1_EMPLOYEES: "42 employees",
    T1_TAG: "Maintenance cleaning",
    T2_QUOTE: "The NFC tags on site have completely eliminated discussions about timesheets. Every minute documented audit-proof.",
    T2_ROLE: "Site Manager",
    T2_LOCATION: "Munich",
    T2_EMPLOYEES: "120 employees",
    T2_TAG: "Industrial cleaning",
    T3_QUOTE: "Previously 4 tools, now just one. On licenses alone we save over €600 a month – and the team finally gets on top of things.",
    T3_ROLE: "Owner",
    T3_LOCATION: "Cologne",
    T3_EMPLOYEES: "18 employees",
    T3_TAG: "Glass & facade cleaning",
    T4_QUOTE: "Our cleaners log issues directly with a photo in the app. The office reacts immediately instead of at month-end.",
    T4_ROLE: "Operations Manager",
    T4_LOCATION: "Hamburg",
    T4_EMPLOYEES: "67 employees",
    T4_TAG: "Clinical & hygiene cleaning",
    T5_QUOTE: "Client sign-off via link is a real game-changer. Hotels and property managers see the status live – no email ping-pong.",
    T5_ROLE: "Managing Director",
    T5_LOCATION: "Frankfurt",
    T5_EMPLOYEES: "210 employees",
    T5_TAG: "Hotel housekeeping",
    T6_QUOTE: "We avoided going digital for years. With Taskey we were productive in 2 weeks – and the team loves it.",
    T6_ROLE: "Owner",
    T6_LOCATION: "Vienna",
    T6_EMPLOYEES: "9 employees",
    T6_TAG: "Special & post-construction cleaning",
    T7_QUOTE: "Live margins per site – we had that nowhere before. Now we see instantly which contract pays off and which doesn't.",
    T7_ROLE: "Operations Manager",
    T7_LOCATION: "Berlin",
    T7_EMPLOYEES: "85 employees",
    T7_TAG: "Large-site cleaning",
    T8_QUOTE: "Shift planning for 30 cleaners used to run on Excel and WhatsApp. Today I click 10 minutes and the plan is done.",
    T8_ROLE: "Scheduling",
    T8_LOCATION: "Innsbruck",
    T8_EMPLOYEES: "34 employees",
    T8_TAG: "Maintenance cleaning",
  },
  fr: {
    KICKER: "Nouveau sur le marché. Pleine énergie.",
    H2_LINE1: "Live depuis février 2026.",
    H2_LINE2: "Avec une mission claire.",
    INTRO: "Nous sommes sur le marché depuis février 2026. Notre ambition : bâtir un logiciel qui fait réellement avancer les entreprises de nettoyage au quotidien – et le porter sur le marché de façon professionnelle, honnête et avec une énergie totale. Voici quelques premières voix issues d'échanges pilotes avec des entreprises de nettoyage.",
    STAT_RATING_LABEL: "Lancement",
    STAT_COMPANIES_LABEL: "Conçu en Allemagne",
    STAT_REGION_LABEL: "DE · AT · CH",
    STAT_NPS_LABEL: "Conforme RGPD",
    CTA_TITLE: "Lancez votre histoire de succès avec Taskey.",
    CTA_BODY: "Essayez Taskey gratuitement pendant 30 jours. Sans frais de mise en place, sans engagement, fonctionnalités complètes.",
    CTA_SECONDARY: "Toutes les fonctionnalités",
    T1_QUOTE: "Depuis Taskey, nous savons à la minute près qui a nettoyé où – et nos clients reçoivent la preuve automatiquement.",
    T1_ROLE: "Directeur général",
    T1_LOCATION: "Stuttgart",
    T1_EMPLOYEES: "42 collaborateurs",
    T1_TAG: "Nettoyage d'entretien",
    T2_QUOTE: "Les tags NFC sur les sites nous ont totalement épargné les discussions sur les feuilles d'heures. Chaque minute documentée de façon infalsifiable.",
    T2_ROLE: "Responsable de site",
    T2_LOCATION: "Munich",
    T2_EMPLOYEES: "120 collaborateurs",
    T2_TAG: "Nettoyage industriel",
    T3_QUOTE: "Avant 4 outils, aujourd'hui un seul. Rien que sur les licences nous économisons plus de 600 € par mois – et l'équipe s'y retrouve enfin.",
    T3_ROLE: "Gérant",
    T3_LOCATION: "Cologne",
    T3_EMPLOYEES: "18 collaborateurs",
    T3_TAG: "Nettoyage de vitres & façades",
    T4_QUOTE: "Nos agents de nettoyage signalent les défauts directement avec photo dans l'app. Le bureau réagit immédiatement, plus en fin de mois.",
    T4_ROLE: "Direction d'exploitation",
    T4_LOCATION: "Hambourg",
    T4_EMPLOYEES: "67 collaborateurs",
    T4_TAG: "Nettoyage clinique & hygiène",
    T5_QUOTE: "La validation client par lien est un vrai changement. Hôtels et gestionnaires voient le statut en direct – sans ping-pong d'e-mails.",
    T5_ROLE: "Directeur général",
    T5_LOCATION: "Francfort",
    T5_EMPLOYEES: "210 collaborateurs",
    T5_TAG: "Housekeeping hôtelier",
    T6_QUOTE: "Nous avons repoussé la digitalisation pendant des années. Avec Taskey nous étions productifs en 2 semaines – et l'équipe adore.",
    T6_ROLE: "Gérante",
    T6_LOCATION: "Vienne",
    T6_EMPLOYEES: "9 collaborateurs",
    T6_TAG: "Nettoyage spécial & après chantier",
    T7_QUOTE: "Des marges en direct par site – nous n'avions cela nulle part avant. Nous voyons aussitôt quel contrat est rentable et lequel ne l'est pas.",
    T7_ROLE: "Operations Manager",
    T7_LOCATION: "Berlin",
    T7_EMPLOYEES: "85 collaborateurs",
    T7_TAG: "Nettoyage de grands sites",
    T8_QUOTE: "La planification des plannings pour 30 agents passait par Excel et WhatsApp. Aujourd'hui je clique 10 minutes et le planning est prêt.",
    T8_ROLE: "Planification",
    T8_LOCATION: "Innsbruck",
    T8_EMPLOYEES: "34 collaborateurs",
    T8_TAG: "Nettoyage d'entretien",
  },
} as const;

/**
 * Testimonials — ehemals "Branchen"-Section.
 * Reine Reinigungs-Stimmen, gleicher dunkler Stil wie zuvor.
 * Datei-Name bleibt absichtlich `Branchen.tsx`, damit dynamische Imports/SSR-Cache stabil bleiben.
 */
export default function Branchen() {
  const { t, language } = useLanguage();
  const c = CONTENT[language];

  const ANON_COMPANY =
    language === "en"
      ? "Cleaning company (anonymised)"
      : language === "fr"
      ? "Entreprise de nettoyage (anonymisée)"
      : "Reinigungsbetrieb (anonymisiert)";

  const testimonials = [
    {
      quote: c.T1_QUOTE,
      name: "M. W.",
      role: c.T1_ROLE,
      company: ANON_COMPANY,
      location: c.T1_LOCATION,
      employees: c.T1_EMPLOYEES,
      rating: 5,
      tag: c.T1_TAG,
    },
    {
      quote: c.T2_QUOTE,
      name: "S. K.",
      role: c.T2_ROLE,
      company: ANON_COMPANY,
      location: c.T2_LOCATION,
      employees: c.T2_EMPLOYEES,
      rating: 5,
      tag: c.T2_TAG,
    },
    {
      quote: c.T3_QUOTE,
      name: "T. R.",
      role: c.T3_ROLE,
      company: ANON_COMPANY,
      location: c.T3_LOCATION,
      employees: c.T3_EMPLOYEES,
      rating: 5,
      tag: c.T3_TAG,
    },
    {
      quote: c.T4_QUOTE,
      name: "A. H.",
      role: c.T4_ROLE,
      company: ANON_COMPANY,
      location: c.T4_LOCATION,
      employees: c.T4_EMPLOYEES,
      rating: 5,
      tag: c.T4_TAG,
    },
    {
      quote: c.T5_QUOTE,
      name: "D. B.",
      role: c.T5_ROLE,
      company: ANON_COMPANY,
      location: c.T5_LOCATION,
      employees: c.T5_EMPLOYEES,
      rating: 5,
      tag: c.T5_TAG,
    },
    {
      quote: c.T6_QUOTE,
      name: "P. L.",
      role: c.T6_ROLE,
      company: ANON_COMPANY,
      location: c.T6_LOCATION,
      employees: c.T6_EMPLOYEES,
      rating: 5,
      tag: c.T6_TAG,
    },
    {
      quote: c.T7_QUOTE,
      name: "M. Y.",
      role: c.T7_ROLE,
      company: ANON_COMPANY,
      location: c.T7_LOCATION,
      employees: c.T7_EMPLOYEES,
      rating: 5,
      tag: c.T7_TAG,
    },
    {
      quote: c.T8_QUOTE,
      name: "L. M.",
      role: c.T8_ROLE,
      company: ANON_COMPANY,
      location: c.T8_LOCATION,
      employees: c.T8_EMPLOYEES,
      rating: 5,
      tag: c.T8_TAG,
    },
  ];

  const initials = (name: string) =>
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[64px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
            {c.KICKER}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight mb-6 text-slate-900">
            {c.H2_LINE1}
            <br />
            <span className="text-slate-500">{c.H2_LINE2}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            {c.INTRO}
          </p>
        </div>

        {/* Grid — Testimonial-Karten im selben Stil wie zuvor die Branchen-Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 p-6 transition-all hover:border-slate-300 overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative flex flex-col h-full">
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-blue-700"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 flex-1">
                  „{t.quote}“
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-slate-200 flex items-center justify-center text-xs font-black text-blue-700 flex-shrink-0">
                    {initials(t.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-black text-slate-900 leading-tight truncate">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-slate-500 leading-tight truncate">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>

                {/* Meta-Chips */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-200 bg-blue-50 text-slate-600 font-medium">
                    {t.tag}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-200 bg-blue-50 text-slate-600 font-medium">
                    {t.location}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-200 bg-blue-50 text-slate-500 font-medium">
                    {t.employees}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 rounded-2xl border border-slate-200/60 bg-blue-50/60 p-6 md:p-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">02/2026</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{c.STAT_RATING_LABEL}</div>
          </div>
          <div className="text-center border-l border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">DE</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{c.STAT_COMPANIES_LABEL}</div>
          </div>
          <div className="text-center border-l border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">DACH</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{c.STAT_REGION_LABEL}</div>
          </div>
          <div className="text-center border-l border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">100%</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{c.STAT_NPS_LABEL}</div>
          </div>
        </div>

        {/* CTA */}
        <div
          data-scrollline-cta
          className="relative rounded-[2rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-cyan-50 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-2xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight mb-4">
              {c.CTA_TITLE}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              {c.CTA_BODY}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base text-center"
              >
                {t("hero.cta.trial")}
              </Link>
              <Link
                href="/features"
                className="px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base text-center"
              >
                {c.CTA_SECONDARY}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
