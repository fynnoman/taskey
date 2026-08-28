import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

const path = "/rechner";
const BASE = "https://www.taskeyapp.com";

const COPY: PageCopy = {
  de: {
    title: "Rechner für die Gebäudereinigung | Taskey",
    description:
      "Kostenlose Rechner für die Gebäudereinigung: Reinigungskosten, Stundenverrechnungssatz, Personalbedarf. Transparente Formeln, keine Registrierung, direkt in Taskey übernehmbar.",
    ogTitle: "Rechner für die Gebäudereinigung | Taskey",
    ogDescription:
      "Reinigungskosten, Stundenverrechnungssatz, Personalbedarf. Kostenlose Rechner mit Übernahme in Taskey.",
    twitterTitle: "Rechner Gebäudereinigung | Taskey",
    twitterDescription:
      "Reinigungskosten, Stundenverrechnungssatz, Personalbedarf. Kostenlose Rechner.",
  },
  en: {
    title: "Calculators for cleaning companies | Taskey",
    description:
      "Free calculators for commercial cleaning: cost, hourly billing rate, staff requirement. Transparent formulas, no signup, hand off directly into Taskey.",
    ogTitle: "Calculators for cleaning companies | Taskey",
    ogDescription:
      "Cleaning cost, hourly billing rate, staff requirement. Free calculators with Taskey handoff.",
    twitterTitle: "Cleaning company calculators | Taskey",
    twitterDescription:
      "Free calculators for cleaning cost, hourly rate and staff requirement.",
  },
  fr: {
    title: "Calculateurs pour société de nettoyage | Taskey",
    description:
      "Calculateurs gratuits pour la propreté: coûts de nettoyage, taux horaire de facturation, effectif nécessaire. Formules transparentes, sans inscription, reprise directe dans Taskey.",
    ogTitle: "Calculateurs pour société de nettoyage | Taskey",
    ogDescription:
      "Coûts de nettoyage, taux horaire, effectif. Calculateurs gratuits avec reprise dans Taskey.",
    twitterTitle: "Calculateurs nettoyage | Taskey",
    twitterDescription:
      "Calculateurs gratuits: coûts, taux horaire, effectif.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path,
    type: "website",
  });
}

type Card = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
};

type Content = {
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  intro: string;
  cardsHeading: string;
  cards: Card[];
  approachHeading: string;
  approach: { title: string; body: string }[];
  breadcrumbs: { name: string; href: string }[];
};

const CONTENT: Record<Locale, Content> = {
  de: {
    eyebrow: "Rechner",
    h1: "Rechner für die Gebäudereinigung",
    h1Accent: "kostenlos, transparent, direkt in Taskey.",
    lead: "Die wichtigsten Kalkulationen für Reinigungsunternehmen. Jede Formel ist offen, jedes Ergebnis lässt sich mit einem Klick nach Taskey übernehmen.",
    intro: "Die Rechner sind für den täglichen Einsatz in Angebotsphase, Kalkulation und Kapazitätsprüfung gedacht. Wer eine Kalkulation weiterverwenden möchte, öffnet nach dem Rechnen den Taskey-Signup mit vorbelegten Werten.",
    cardsHeading: "Verfügbare Rechner",
    cards: [
      {
        href: "/rechner/reinigungskosten",
        eyebrow: "Objektkalkulation",
        title: "Reinigungskosten-Rechner",
        description:
          "Personal, Material, Fahrt und Zielmarge pro Objekt. Ergebnis: Gesamtkosten, empfohlener Angebotspreis und Preis pro Quadratmeter.",
        bullets: [
          "Für Unterhaltsreinigung, Glasreinigung, Grundreinigung und mehr",
          "Startwerte je Reinigungsart, alle Felder überschreibbar",
          "Übernahme des Angebotspreises in Taskey",
        ],
        cta: "Zum Rechner",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        eyebrow: "Vollkostenrechnung",
        title: "Stundenverrechnungssatz-Rechner",
        description:
          "Bruttolohn, Lohnnebenkosten, Ausfallzeiten und Overhead ergeben den kostendeckenden und empfohlenen Satz pro produktiver Stunde.",
        bullets: [
          "Mindestsatz, Personalvollkosten, kostendeckender Satz, empfohlener Satz",
          "Realistische Startwerte für Deutschland",
          "Als Basis für jede Objektkalkulation nutzbar",
        ],
        cta: "Zum Rechner",
      },
      {
        href: "/rechner/personalbedarf",
        eyebrow: "Kapazitätsplanung",
        title: "Personalbedarf-Rechner",
        description:
          "Aus Fläche, Reinigungsart und Frequenz ergeben sich benötigte Arbeitsstunden, Vollzeitäquivalente und monatliche Personalkosten.",
        bullets: [
          "Für Angebote und Kapazitätsprüfung im Objekt",
          "Stunden pro Reinigung, Monat und Woche",
          "Vollzeitäquivalente auf Basis produktiver Stunden",
        ],
        cta: "Zum Rechner",
      },
      {
        href: "/rechner/lohnkosten-reinigung",
        eyebrow: "Personalkosten",
        title: "Lohnkosten-Rechner",
        description:
          "Was kostet eine Reinigungskraft pro Jahr? Vollkostensicht aus Bruttolohn, Lohnnebenkosten, Sonderzahlungen und weiteren Personalkosten.",
        bullets: [
          "Jahresvollkosten und Kosten pro Sollstunde",
          "Aufschlag auf den Bruttolohn sichtbar",
          "Ergebnis per E-Mail möglich",
        ],
        cta: "Zum Rechner",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        eyebrow: "Preisstrategie",
        title: "Marge-Rechner",
        description:
          "Aktuelle Marge aus Preis und Kosten, empfohlener Zielpreis und Sensitivität für Preisänderungen. Grundlage für Angebot und Verhandlung.",
        bullets: [
          "Marge in Euro und Prozent",
          "Zielpreis für gewünschte Marge",
          "Sensitivität plus und minus 10 Prozent",
        ],
        cta: "Zum Rechner",
      },
    ],
    approachHeading: "Warum die Rechner so aufgebaut sind",
    approach: [
      {
        title: "Offene Formeln, keine Blackbox",
        body: "Jede Rechnung ist auf der jeweiligen Seite dokumentiert. Startwerte spiegeln marktübliche Richtwerte, alle Felder sind veränderbar. Wer eine eigene Rechnung im Kopf hat, kann sie im Rechner abbilden.",
      },
      {
        title: "Konsistent zueinander",
        body: "Reinigungskosten und Personalbedarf nutzen dieselben Leistungswerte pro Reinigungsart. Wer den Stundenverrechnungssatz kalkuliert, kann ihn direkt als Stundensatz in den anderen Rechnern verwenden.",
      },
      {
        title: "Ergebnis in Taskey weiterverwenden",
        body: "Jeder Rechner endet mit einer Übernahme in Taskey. Die Werte fließen dann in Objektakte, Angebot, Einsatzplanung und Leistungsnachweis, ohne dass ein zweites System nötig wird.",
      },
    ],
    breadcrumbs: [
      { name: "Startseite", href: "/" },
      { name: "Rechner", href: "/rechner" },
    ],
  },
  en: {
    eyebrow: "Calculators",
    h1: "Calculators for cleaning companies",
    h1Accent: "free, transparent, straight into Taskey.",
    lead: "The core calculations for a cleaning company. Every formula is open, every result hands off to Taskey with one click.",
    intro: "The calculators are built for daily use in quoting, calculation and capacity planning. To continue with a calculation, open the Taskey signup after running the numbers; the values are pre-filled.",
    cardsHeading: "Available calculators",
    cards: [
      {
        href: "/rechner/reinigungskosten",
        eyebrow: "Site quote",
        title: "Cleaning cost calculator",
        description:
          "Labour, materials, travel and target margin per site. Result: total cost, recommended offer price and price per square metre.",
        bullets: [
          "For maintenance cleaning, glass, deep cleaning and more",
          "Starting values per cleaning type, every field editable",
          "Hand off the offer price to Taskey",
        ],
        cta: "Open calculator",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        eyebrow: "Full cost",
        title: "Hourly billing rate calculator",
        description:
          "Gross wage, social charges, downtime and overhead produce the break-even and recommended rate per productive hour.",
        bullets: [
          "Minimum rate, fully loaded personnel rate, break-even, recommended",
          "Realistic starting values for Germany",
          "Use as basis for every site quote",
        ],
        cta: "Open calculator",
      },
      {
        href: "/rechner/personalbedarf",
        eyebrow: "Capacity",
        title: "Cleaning staff requirement",
        description:
          "Area, cleaning type and frequency give required hours, full-time equivalents and monthly personnel cost.",
        bullets: [
          "For quoting and site capacity planning",
          "Hours per cleaning, month and week",
          "FTE derived from productive hours",
        ],
        cta: "Open calculator",
      },
      {
        href: "/rechner/lohnkosten-reinigung",
        eyebrow: "Labour cost",
        title: "Cleaning staff labour cost",
        description:
          "What does a cleaner cost per year? Full-cost view from gross wage, social charges, bonuses and other personnel positions.",
        bullets: [
          "Annual full cost and cost per target hour",
          "Markup on gross wage made visible",
          "Optional email delivery of the result",
        ],
        cta: "Open calculator",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        eyebrow: "Pricing",
        title: "Margin calculator",
        description:
          "Current margin from price and cost, recommended target price and sensitivity to price changes. Basis for quoting and negotiation.",
        bullets: [
          "Margin in EUR and percent",
          "Target price for desired margin",
          "Sensitivity plus and minus 10 percent",
        ],
        cta: "Open calculator",
      },
    ],
    approachHeading: "Why the calculators are built this way",
    approach: [
      {
        title: "Open formulas, no black box",
        body: "Every calculation is documented on its page. Starting values reflect market benchmarks; every field is editable. If you have your own logic, you can reproduce it in the calculator.",
      },
      {
        title: "Consistent with each other",
        body: "Cleaning cost and staff requirement share productivity values per cleaning type. Once the hourly billing rate is set, it feeds directly into the other calculators as hourly rate.",
      },
      {
        title: "Continue in Taskey",
        body: "Every calculator ends with a Taskey handoff. Values flow into the site record, quote, dispatching and proof of service without a second system.",
      },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Calculators", href: "/rechner" },
    ],
  },
  fr: {
    eyebrow: "Calculateurs",
    h1: "Calculateurs pour société de nettoyage",
    h1Accent: "gratuits, transparents, directement dans Taskey.",
    lead: "Les calculs essentiels pour une société de nettoyage. Chaque formule est ouverte, chaque résultat se reprend dans Taskey en un clic.",
    intro: "Les calculateurs sont conçus pour un usage quotidien en phase de devis, de calcul et de planification. Pour poursuivre une calculation, ouvrez l'inscription Taskey après le calcul; les valeurs sont préremplies.",
    cardsHeading: "Calculateurs disponibles",
    cards: [
      {
        href: "/rechner/reinigungskosten",
        eyebrow: "Devis par site",
        title: "Calculateur de coûts de nettoyage",
        description:
          "Personnel, matériel, déplacement et marge cible par site. Résultat: coût total, prix proposé recommandé et prix au mètre carré.",
        bullets: [
          "Entretien courant, vitrerie, remise en état et plus",
          "Valeurs de départ par type, tous champs modifiables",
          "Reprise du prix proposé dans Taskey",
        ],
        cta: "Ouvrir le calculateur",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        eyebrow: "Coût complet",
        title: "Calculateur de taux horaire",
        description:
          "Salaire brut, charges sociales, absences et frais généraux donnent le taux de couverture et le taux recommandé par heure productive.",
        bullets: [
          "Taux minimum, taux personnel complet, taux de couverture, recommandé",
          "Valeurs de départ réalistes pour l'Allemagne",
          "Utilisable comme base pour chaque devis par site",
        ],
        cta: "Ouvrir le calculateur",
      },
      {
        href: "/rechner/personalbedarf",
        eyebrow: "Capacité",
        title: "Calculateur d'effectif",
        description:
          "Surface, type de prestation et fréquence donnent heures nécessaires, ETP et coût personnel mensuel.",
        bullets: [
          "Pour devis et planification de capacité par site",
          "Heures par prestation, mois et semaine",
          "ETP dérivés des heures productives",
        ],
        cta: "Ouvrir le calculateur",
      },
      {
        href: "/rechner/lohnkosten-reinigung",
        eyebrow: "Coût salarial",
        title: "Coût salarial agent de nettoyage",
        description:
          "Combien coûte un agent par an? Vue coût complet du salaire brut, charges sociales, primes et autres postes personnel.",
        bullets: [
          "Coût annuel complet et par heure cible",
          "Majoration sur le brut rendue visible",
          "Envoi du résultat par e-mail possible",
        ],
        cta: "Ouvrir le calculateur",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        eyebrow: "Tarification",
        title: "Calculateur de marge",
        description:
          "Marge actuelle à partir du prix et du coût, prix cible recommandé et sensibilité aux variations. Base pour devis et négociation.",
        bullets: [
          "Marge en EUR et en pourcentage",
          "Prix cible pour marge souhaitée",
          "Sensibilité plus et moins 10 pour cent",
        ],
        cta: "Ouvrir le calculateur",
      },
    ],
    approachHeading: "Pourquoi ces calculateurs sont construits ainsi",
    approach: [
      {
        title: "Formules ouvertes, aucune boîte noire",
        body: "Chaque calcul est documenté sur sa page. Les valeurs de départ correspondent aux repères du marché, tous les champs sont modifiables. Si vous avez votre propre logique, vous pouvez la reproduire.",
      },
      {
        title: "Cohérents entre eux",
        body: "Coûts de nettoyage et effectif partagent les mêmes valeurs de rendement par type. Une fois le taux horaire calé, il alimente directement les autres calculateurs.",
      },
      {
        title: "Poursuivre dans Taskey",
        body: "Chaque calculateur se termine par une reprise vers Taskey. Les valeurs alimentent le dossier site, le devis, la planification et le justificatif sans second système.",
      },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Calculateurs", href: "/rechner" },
    ],
  },
};

function absoluteUrl(pathPart: string, locale: Locale): string {
  const clean = pathPart === "/" ? "" : pathPart;
  if (locale === "de") return clean ? `${BASE}${clean}` : BASE;
  return `${BASE}/${locale}${clean}`;
}

function localizedHref(pathPart: string, locale: Locale): string {
  const clean = pathPart === "/" ? "" : pathPart;
  if (locale === "de") return clean === "" ? "/" : clean;
  return `/${locale}${clean === "" ? "" : clean}`;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  const crumbs = c.breadcrumbs.map((crumb) => ({
    name: crumb.name,
    url: absoluteUrl(crumb.href, l),
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-breadcrumb-rechner-hub" />

      <header className="mb-12 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
          {c.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {c.h1}{" "}
          <span className="text-blue-700">{c.h1Accent}</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-700">{c.lead}</p>
        <p className="mt-3 text-sm text-slate-500">{c.intro}</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900">{c.cardsHeading}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {c.cards.map((card) => (
            <Link
              key={card.href}
              href={localizedHref(card.href, l)}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-blue-700">
                {card.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-blue-700">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {card.description}
              </p>
              <ul className="mt-4 space-y-2">
                {card.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm text-slate-600"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-blue-600"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-blue-700">
                {card.cta}
                <span
                  aria-hidden
                  className="ml-1 transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-slate-900">
          {c.approachHeading}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {c.approach.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
