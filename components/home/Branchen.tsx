'use client';

import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

const CONTENT = {
  de: {
    KICKER: "Chefs, die das Handy wieder weglegen.",
    H2_LINE1: "Ruhige Betriebe.",
    H2_LINE2: "Und deren Chefs.",
    INTRO: "Wir sind seit Februar 2026 am Markt. Das Ziel: Software bauen, die Chefs im Feierabend lässt — und den Betrieb trotzdem im grünen Bereich hält. Hier ein paar erste Stimmen aus Pilotgesprächen mit Reinigungsbetrieben.",
    STAT_RATING_LABEL: "Markteintritt",
    STAT_COMPANIES_LABEL: "Entwickelt in Deutschland",
    STAT_REGION_LABEL: "DE · AT · CH",
    STAT_NPS_LABEL: "DSGVO-konform",
    CTA_TITLE: "Sehen Sie selbst, wie Ruhe im Betrieb aussieht.",
    CTA_BODY: "Testen Sie Taskey 30 Tage gratis. Kein Setup-Aufwand, keine Vertragsbindung, voller Funktionsumfang.",
    CTA_SECONDARY: "Alle Funktionen",
    T1_QUOTE: "Ich rufe niemanden mehr an. Ich mache die App auf, sehe alles im grünen Bereich und leg das Handy weg. So habe ich noch nie gearbeitet — endlich.",
    T1_ROLE: "Geschäftsführer",
    T1_LOCATION: "Stuttgart",
    T1_EMPLOYEES: "42 Mitarbeitende",
    T1_TAG: "Unterhaltsreinigung",
    T2_QUOTE: "Ich habe aufgehört, mir Sorgen um Nachweise zu machen. Die stehen längst da, bevor ich sie brauche. Zum ersten Mal seit Jahren atme ich montags durch.",
    T2_ROLE: "Objektleiterin",
    T2_LOCATION: "München",
    T2_EMPLOYEES: "120 Mitarbeitende",
    T2_TAG: "Industriereinigung",
    T3_QUOTE: "Vorher hatte ich vier Tools nebeneinander offen. Heute schaue ich einmal am Vormittag hinein — und weiß Bescheid. Der Rest der Zeit gehört mir wieder.",
    T3_ROLE: "Inhaber",
    T3_LOCATION: "Köln",
    T3_EMPLOYEES: "18 Mitarbeitende",
    T3_TAG: "Glas- & Fassadenreinigung",
    T4_QUOTE: "Wenn draußen etwas nicht passt, sehe ich es sofort — nicht am Monatsende. Reklamationen kommen kaum noch. Der Ton mit unseren Kunden hat sich komplett gedreht.",
    T4_ROLE: "Betriebsleitung",
    T4_LOCATION: "Hamburg",
    T4_EMPLOYEES: "67 Mitarbeitende",
    T4_TAG: "Klinik- & Hygienereinigung",
    T5_QUOTE: "Meine Hotels und Verwalter fragen nicht mehr, ob wer da war. Sie sehen es selbst. Mein Postfach war noch nie so leer.",
    T5_ROLE: "Geschäftsführer",
    T5_LOCATION: "Frankfurt",
    T5_EMPLOYEES: "210 Mitarbeitende",
    T5_TAG: "Hotel-Housekeeping",
    T6_QUOTE: "Ich habe mich jahrelang davor gedrückt. Nach zwei Wochen war ich drin — und mein Team feiert es. Ich muss nicht mehr überall gleichzeitig sein.",
    T6_ROLE: "Inhaberin",
    T6_LOCATION: "Wien",
    T6_EMPLOYEES: "9 Mitarbeitende",
    T6_TAG: "Sonder- & Baureinigung",
    T7_QUOTE: "Ich sehe jetzt jeden Morgen, welcher Auftrag Geld bringt. Und schlafe deutlich besser, weil ich weiß, wo Handeln nötig ist — bevor der Steuerberater es mir sagt.",
    T7_ROLE: "Operations Manager",
    T7_LOCATION: "Berlin",
    T7_EMPLOYEES: "85 Mitarbeitende",
    T7_TAG: "Großobjekt-Reinigung",
    T8_QUOTE: "Der Wochenplan steht in zehn Minuten. Vorher war das mein halber Sonntag. Meine Familie hat den Unterschied gemerkt, bevor ich es tat.",
    T8_ROLE: "Disposition",
    T8_LOCATION: "Innsbruck",
    T8_EMPLOYEES: "34 Mitarbeitende",
    T8_TAG: "Unterhaltsreinigung",
  },
  en: {
    KICKER: "Bosses who put the phone down again.",
    H2_LINE1: "Calm operations.",
    H2_LINE2: "And their bosses.",
    INTRO: "We launched in February 2026. The goal: build software that lets the boss actually clock off — and still keeps the business in the green. Here are some early voices from pilot conversations with cleaning companies.",
    STAT_RATING_LABEL: "Market launch",
    STAT_COMPANIES_LABEL: "Built in Germany",
    STAT_REGION_LABEL: "DE · AT · CH",
    STAT_NPS_LABEL: "GDPR-compliant",
    CTA_TITLE: "See for yourself what calm operations look like.",
    CTA_BODY: "Try Taskey free for 30 days. No setup effort, no contract lock-in, full feature set.",
    CTA_SECONDARY: "All features",
    T1_QUOTE: "I don't call anyone anymore. I open the app, see everything in the green, and put the phone down. I've never worked this way — finally.",
    T1_ROLE: "Managing Director",
    T1_LOCATION: "Stuttgart",
    T1_EMPLOYEES: "42 employees",
    T1_TAG: "Maintenance cleaning",
    T2_QUOTE: "I stopped worrying about proof of service. It's there before I need it. For the first time in years I actually breathe on a Monday.",
    T2_ROLE: "Site Manager",
    T2_LOCATION: "Munich",
    T2_EMPLOYEES: "120 employees",
    T2_TAG: "Industrial cleaning",
    T3_QUOTE: "I used to have four tools open side by side. Now I check in once in the morning — and I know. The rest of the day belongs to me again.",
    T3_ROLE: "Owner",
    T3_LOCATION: "Cologne",
    T3_EMPLOYEES: "18 employees",
    T3_TAG: "Glass & facade cleaning",
    T4_QUOTE: "If something's off on site, I see it instantly — not at month-end. Complaints have almost stopped. The tone with our clients has completely turned.",
    T4_ROLE: "Operations Manager",
    T4_LOCATION: "Hamburg",
    T4_EMPLOYEES: "67 employees",
    T4_TAG: "Clinical & hygiene cleaning",
    T5_QUOTE: "My hotels and property managers don't ask anymore if someone showed up. They see for themselves. My inbox has never been this quiet.",
    T5_ROLE: "Managing Director",
    T5_LOCATION: "Frankfurt",
    T5_EMPLOYEES: "210 employees",
    T5_TAG: "Hotel housekeeping",
    T6_QUOTE: "I avoided this for years. After two weeks I was in — and my team is celebrating. I don't have to be everywhere at once anymore.",
    T6_ROLE: "Owner",
    T6_LOCATION: "Vienna",
    T6_EMPLOYEES: "9 employees",
    T6_TAG: "Special & post-construction cleaning",
    T7_QUOTE: "Every morning I see which contract makes money. And I sleep significantly better, because I know where to act — before my tax advisor tells me.",
    T7_ROLE: "Operations Manager",
    T7_LOCATION: "Berlin",
    T7_EMPLOYEES: "85 employees",
    T7_TAG: "Large-site cleaning",
    T8_QUOTE: "The weekly plan takes ten minutes. It used to eat half my Sunday. My family noticed the difference before I did.",
    T8_ROLE: "Scheduling",
    T8_LOCATION: "Innsbruck",
    T8_EMPLOYEES: "34 employees",
    T8_TAG: "Maintenance cleaning",
  },
  fr: {
    KICKER: "Des dirigeants qui reposent le téléphone.",
    H2_LINE1: "Des entreprises calmes.",
    H2_LINE2: "Et leurs dirigeants.",
    INTRO: "Nous sommes sur le marché depuis février 2026. L'objectif : bâtir un logiciel qui laisse enfin le dirigeant décrocher — tout en gardant l'entreprise au vert. Voici quelques premières voix issues d'échanges pilotes avec des entreprises de nettoyage.",
    STAT_RATING_LABEL: "Lancement",
    STAT_COMPANIES_LABEL: "Conçu en Allemagne",
    STAT_REGION_LABEL: "DE · AT · CH",
    STAT_NPS_LABEL: "Conforme RGPD",
    CTA_TITLE: "Voyez par vous-même à quoi ressemble une entreprise calme.",
    CTA_BODY: "Essayez Taskey gratuitement pendant 30 jours. Sans frais de mise en place, sans engagement, fonctionnalités complètes.",
    CTA_SECONDARY: "Toutes les fonctionnalités",
    T1_QUOTE: "Je n'appelle plus personne. J'ouvre l'app, je vois tout au vert et je repose le téléphone. Je n'ai jamais travaillé comme ça — enfin.",
    T1_ROLE: "Directeur général",
    T1_LOCATION: "Stuttgart",
    T1_EMPLOYEES: "42 collaborateurs",
    T1_TAG: "Nettoyage d'entretien",
    T2_QUOTE: "J'ai arrêté de m'inquiéter pour les preuves de service. Elles sont là avant que j'en aie besoin. Pour la première fois depuis des années, je respire le lundi matin.",
    T2_ROLE: "Responsable de site",
    T2_LOCATION: "Munich",
    T2_EMPLOYEES: "120 collaborateurs",
    T2_TAG: "Nettoyage industriel",
    T3_QUOTE: "Avant j'avais quatre outils ouverts côte à côte. Aujourd'hui je regarde une fois le matin — et je sais. Le reste de la journée m'appartient à nouveau.",
    T3_ROLE: "Gérant",
    T3_LOCATION: "Cologne",
    T3_EMPLOYEES: "18 collaborateurs",
    T3_TAG: "Nettoyage de vitres & façades",
    T4_QUOTE: "Si quelque chose cloche sur le terrain, je le vois tout de suite — plus en fin de mois. Les réclamations ont quasi disparu. Le ton avec nos clients a complètement changé.",
    T4_ROLE: "Direction d'exploitation",
    T4_LOCATION: "Hambourg",
    T4_EMPLOYEES: "67 collaborateurs",
    T4_TAG: "Nettoyage clinique & hygiène",
    T5_QUOTE: "Mes hôtels et gestionnaires ne demandent plus si quelqu'un est passé. Ils voient eux-mêmes. Ma boîte mail n'a jamais été aussi calme.",
    T5_ROLE: "Directeur général",
    T5_LOCATION: "Francfort",
    T5_EMPLOYEES: "210 collaborateurs",
    T5_TAG: "Housekeeping hôtelier",
    T6_QUOTE: "Je l'ai repoussé pendant des années. Après deux semaines j'étais dedans — et mon équipe applaudit. Je n'ai plus besoin d'être partout à la fois.",
    T6_ROLE: "Gérante",
    T6_LOCATION: "Vienne",
    T6_EMPLOYEES: "9 collaborateurs",
    T6_TAG: "Nettoyage spécial & après chantier",
    T7_QUOTE: "Chaque matin je vois quel contrat rapporte. Et je dors nettement mieux, parce que je sais où agir — avant que mon comptable ne me le dise.",
    T7_ROLE: "Operations Manager",
    T7_LOCATION: "Berlin",
    T7_EMPLOYEES: "85 collaborateurs",
    T7_TAG: "Nettoyage de grands sites",
    T8_QUOTE: "Le planning de la semaine est prêt en dix minutes. Avant ça me prenait la moitié du dimanche. Ma famille a remarqué la différence avant moi.",
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
  ];

  const initials = (name: string) =>
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-16 sm:py-20 md:py-32 overflow-hidden">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 rounded-2xl border border-slate-200/60 bg-blue-50/60 p-4 sm:p-6 md:p-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-1">02/2026</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{c.STAT_RATING_LABEL}</div>
          </div>
          <div className="text-center sm:border-l sm:border-slate-200">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-1">DE</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{c.STAT_COMPANIES_LABEL}</div>
          </div>
          <div className="text-center sm:border-l sm:border-slate-200">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-1">DACH</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{c.STAT_REGION_LABEL}</div>
          </div>
          <div className="text-center sm:border-l sm:border-slate-200">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-1">100%</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{c.STAT_NPS_LABEL}</div>
          </div>
        </div>

        {/* CTA */}
        <div
          data-scrollline-cta
          className="relative rounded-[2rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 p-6 sm:p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-cyan-50 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight mb-4">
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
