"use client";

import Link from "@/components/LocaleLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { useLanguage } from "@/context/LanguageContext";
import NewsletterForm, {
  type NewsletterLabels,
} from "@/components/newsletter/NewsletterForm";

const CONTENT = {
  de: {
    breadcrumbAriaLabel: "Breadcrumb",
    heroPrimaryCta: "Kostenlosen Account erstellen",
    heroSecondaryCta: "Alle Funktionen ansehen",
    faqEyebrow: "Häufige Fragen",
    faqHeading: "Was Inhaber jetzt wissen wollen.",
    relatedEyebrow: "Passende Themen",
    relatedHeading: "Weiterlesen.",
    relatedMore: "Mehr erfahren",
    ctaTitleDefault: "Kostenlosen Account erstellen.",
    ctaSubtitleDefault:
      "Keine Kreditkarte, kein Risiko. Einrichtung in 48 Stunden – Done-for-You durch unser Team.",
    bottomCta: "Jetzt starten",
  },
  en: {
    breadcrumbAriaLabel: "Breadcrumb",
    heroPrimaryCta: "Create free account",
    heroSecondaryCta: "See all features",
    faqEyebrow: "Frequently asked",
    faqHeading: "What owners want to know now.",
    relatedEyebrow: "Related topics",
    relatedHeading: "Keep reading.",
    relatedMore: "Learn more",
    ctaTitleDefault: "Create your free account.",
    ctaSubtitleDefault:
      "No credit card, no risk. Set up in 48 hours – Done-for-You by our team.",
    bottomCta: "Get started",
  },
  fr: {
    breadcrumbAriaLabel: "Fil d’Ariane",
    heroPrimaryCta: "Créer un compte gratuit",
    heroSecondaryCta: "Voir toutes les fonctionnalités",
    faqEyebrow: "Questions fréquentes",
    faqHeading: "Ce que les dirigeants veulent savoir maintenant.",
    relatedEyebrow: "Sujets connexes",
    relatedHeading: "Continuer la lecture.",
    relatedMore: "En savoir plus",
    ctaTitleDefault: "Créez votre compte gratuit.",
    ctaSubtitleDefault:
      "Sans carte bancaire, sans risque. Mise en place en 48 heures – Done-for-You par notre équipe.",
    bottomCta: "Démarrer maintenant",
  },
} as const;

export type LandingFaq = { question: string; answer: string };
export type LandingSection = {
  /** Eyebrow / Kategorie-Label oberhalb der Section-Überschrift */
  eyebrow?: string;
  /** H2 der Section */
  heading: string;
  /** Einleitungsabsatz unterhalb der H2 */
  intro?: string;
  /** Optionaler längerer Fließtext-Block */
  body?: string[];
  /** Optionale Bullet-Liste */
  bullets?: string[];
  /** Optionale H3-Subsections */
  subsections?: { heading: string; body: string; image?: string; imageAlt?: string }[];
};

export type LandingPageProps = {
  /** URL-Pfad inkl. führendem Slash, z.B. "/nfc-zeiterfassung" */
  path: string;
  /** Page Title (wird vom <head> in der jeweiligen page.tsx gesetzt – hier nur für CTAs) */
  title: string;
  /** H1 */
  h1: string;
  /** Hervorgehobener Teil der H1 (wird optisch akzentuiert) */
  h1Accent?: string;
  /** Lead-Absatz unter der H1 */
  lead: string;
  /** Eyebrow / Kategorie über der H1 */
  eyebrow: string;
  /** Hauptinhalte: zwei bis sechs Sections */
  sections: LandingSection[];
  /** FAQ-Block: erscheint als sichtbares Accordion + wird als FAQPage-Schema ausgegeben */
  faqs: LandingFaq[];
  /** Breadcrumbs für Schema + sichtbare Navigation */
  breadcrumbs: { name: string; url: string }[];
  /** Mind. 3 interne Links für Themen-Vernetzung */
  related: { href: string; label: string; description?: string }[];
  /** Schluss-CTA-Text. Default: "Kostenlosen Account erstellen" */
  ctaTitle?: string;
  ctaSubtitle?: string;
  /** Optional: Newsletter-Anmeldung vor dem Bottom-CTA */
  newsletter?: {
    source: string;
    sourceLabel: string;
    labels: NewsletterLabels;
  };
};

export default function LandingPageTemplate({
  path,
  h1,
  h1Accent,
  lead,
  eyebrow,
  sections,
  faqs,
  breadcrumbs,
  related,
  ctaTitle,
  ctaSubtitle,
  newsletter,
}: LandingPageProps) {
  const { language } = useLanguage();
  const c = CONTENT[language];
  const resolvedCtaTitle = ctaTitle ?? c.ctaTitleDefault;
  const resolvedCtaSubtitle = ctaSubtitle ?? c.ctaSubtitleDefault;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };

  // Build-Datum als Default für datePublished/dateModified —
  // beim Re-Build aktualisiert sich dateModified automatisch (Frische-Signal).
  const buildDate = new Date().toISOString().split("T")[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": h1,
    "url": `https://www.taskeyapp.com${path}`,
    "description": lead,
    "inLanguage": "de-DE",
    "datePublished": "2026-05-21",
    "dateModified": buildDate,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Taskey",
      "url": "https://www.taskeyapp.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Schulz & Stosse GbR",
      "url": "https://www.taskeyapp.com",
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `https://www.taskeyapp.com/opengraph-image`,
      "width": 1200,
      "height": 630,
    },
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
      <BreadcrumbSchema crumbs={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Ambient glows – konsistent mit Home/News/Support */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-cyan-500/12 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sichtbare Breadcrumbs */}
          <nav aria-label={c.breadcrumbAriaLabel} className="mb-8 text-xs sm:text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((b, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={b.url} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="text-slate-600">{b.name}</span>
                    ) : (
                      <Link
                        href={b.url.replace("https://www.taskeyapp.com", "") || "/"}
                        className="hover:text-blue-700 transition-colors"
                      >
                        {b.name}
                      </Link>
                    )}
                    {!isLast && <span className="text-slate-400">/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
              {eyebrow}
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6">
            {h1Accent ? (
              <>
                {h1}{" "}
                <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                  {h1Accent}
                </span>
              </>
            ) : (
              h1
            )}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10">
            {lead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors whitespace-nowrap"
            >
              {c.heroPrimaryCta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center px-8 py-4 text-slate-900 border border-slate-300 hover:border-slate-400 text-base font-bold rounded-full transition-colors whitespace-nowrap"
            >
              {c.heroSecondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Sections ─────────────────────────────────────── */}
      {sections.map((section, idx) => (
        <section
          key={`${section.heading}-${idx}`}
          className={`relative py-16 md:py-24 ${idx % 2 === 1 ? "bg-white/[0.015]" : ""}`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {section.eyebrow && (
              <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
                {section.eyebrow}
              </p>
            )}
            <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-tight mb-6 max-w-3xl">
              {section.heading}
            </h2>
            {section.intro && (
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                {section.intro}
              </p>
            )}
            {section.body?.map((p, pi) => (
              <p
                key={pi}
                className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mb-5"
              >
                {p}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="grid sm:grid-cols-2 gap-3 mt-6 max-w-3xl">
                {section.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex items-start gap-3 rounded-2xl bg-blue-50/70 border border-slate-200 p-4"
                  >
                    <span className="inline-flex shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-400/20 text-blue-700 items-center justify-center text-xs font-black">
                      ✓
                    </span>
                    <span className="text-slate-700 text-sm md:text-base leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.subsections && section.subsections.length > 0 && (
              <div className="grid md:grid-cols-2 gap-5 mt-8">
                {section.subsections.map((s) => (
                  <div
                    key={s.heading}
                    className="rounded-2xl bg-blue-50/70 border border-slate-200 p-6"
                  >
                    {s.image && (
                      <div className="relative aspect-[4/3] mb-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.image}
                          alt={s.imageAlt ?? s.heading}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">{s.heading}</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
            {c.faqEyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-10">
            {c.faqHeading}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-blue-50/70 border border-slate-200 p-6"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg font-bold">
                  <span>{faq.question}</span>
                  <span className="text-blue-700 transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related / interne Verlinkung ─────────────────── */}
      {related.length > 0 && (
        <section className="relative py-20 md:py-24 bg-blue-50/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
              {c.relatedEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-10">
              {c.relatedHeading}
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group rounded-2xl bg-blue-50/70 border border-slate-200 hover:border-cyan-400 p-6 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-700 transition-colors">
                    {r.label}
                  </h3>
                  {r.description && (
                    <p className="text-slate-600 text-sm leading-relaxed">{r.description}</p>
                  )}
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-blue-700">
                    {c.relatedMore}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Newsletter (optional) ────────────────────────── */}
      {newsletter ? (
        <section className="relative pt-16 md:pt-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterForm
              source={newsletter.source}
              sourceLabel={newsletter.sourceLabel}
              labels={newsletter.labels}
            />
          </div>
        </section>
      ) : null}

      {/* ─── Bottom CTA ───────────────────────────────────── */}
      <section className="relative pb-24 md:pb-32 pt-20 md:pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
                  {resolvedCtaTitle}
                </h2>
                <p className="text-slate-600 text-base md:text-lg">{resolvedCtaSubtitle}</p>
              </div>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors whitespace-nowrap"
              >
                {c.bottomCta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
