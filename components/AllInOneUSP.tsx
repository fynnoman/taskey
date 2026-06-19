"use client";

import Link from "@/components/LocaleLink";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * AllInOneUSP — Revolut-Style Split-Layout mit auto-rotierender Karte.
 */

type Variant = "full" | "compact" | "dark";

/* ASSETS — TODO: gegen finale Brand-Fotos austauschen.
   Quelle: pexels.com (kostenfrei). Bei eigenen Fotos: einfach Pfad ersetzen. */
const CONTENT = {
  de: {
    slides: [
      {
        label: "Zeiterfassung mit NFC",
        title: "Zeiterfassung mit NFC",
        subtitle: "Ein Tap am Objekt genügt. Zeit, Ort, Person – lückenlos belegt.",
        tag: "Zeiterfassung",
        image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Hand mit Smartphone scannt NFC-Tag am Objekt",
      },
      {
        label: "Einsatz- & Schichtplanung",
        title: "Einsatzplanung per Drag & Drop",
        subtitle: "Teams, Touren, Objekte – alles im selben Kalender. Statt in drei Tools.",
        tag: "Planung",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Disponentin plant Einsätze am Laptop",
      },
      {
        label: "Angebote & Rechnungen",
        title: "Angebote und Rechnungen raus in Minuten",
        subtitle: "Aus Auftrag wird Angebot wird Rechnung. Ohne Copy-Paste, ohne Excel.",
        tag: "Abrechnung",
        image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Person erstellt Rechnung am Laptop",
      },
      {
        label: "DATEV-Export inklusive",
        title: "DATEV-Export ohne Zusatzmodul",
        subtitle: "Zeiten, Rechnungen, Stammdaten – direkt zur Steuerkanzlei. Ein Klick.",
        tag: "Buchhaltung",
        image: "https://images.pexels.com/photos/3201735/pexels-photo-3201735.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Buchhalter prüft Zahlen am Bildschirm",
      },
      {
        label: "Dokumentation",
        title: "Nachweise, die Kunden überzeugen",
        subtitle: "Fotos, Protokolle, Unterschriften — alles an Auftrag und Objekt gebunden.",
        tag: "Dokumentation",
        image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Reinigungsteam dokumentiert Einsatz mit App",
      },
    ],
    COMPACT_BADGE: "Taskey-USP · All-in-One",
    COMPACT_LEAD: "Schluss mit",
    COMPACT_STRIKE: "5 Software-Abos",
    COMPACT_HIGHLIGHT: "eine Plattform, die wirklich alles abdeckt.",
    COMPACT_CTA: "So spart Taskey Kosten",
    HEADLINE_LINE_1: "Mehr als nur",
    HEADLINE_LINE_2: "das Wesentliche",
    INTRO: "Vom Tag 1 deckt Taskey alles ab, was ein moderner Betrieb vor Ort und im Büro braucht.",
    CTA_PRIMARY: "Kostenlos starten",
    CTA_SECONDARY: "Alle Funktionen",
    SLIDE_ARIA: "Slide",
  },
  en: {
    slides: [
      {
        label: "Time tracking with NFC",
        title: "Time tracking with NFC",
        subtitle: "One tap at the site is enough. Time, location, person — fully documented.",
        tag: "Time tracking",
        image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Hand with smartphone scanning NFC tag on site",
      },
      {
        label: "Job & shift planning",
        title: "Job planning by drag & drop",
        subtitle: "Teams, routes, sites — all in the same calendar. Instead of three tools.",
        tag: "Planning",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Dispatcher planning jobs on a laptop",
      },
      {
        label: "Quotes & invoices",
        title: "Quotes and invoices out in minutes",
        subtitle: "Job becomes quote becomes invoice. No copy-paste, no Excel.",
        tag: "Billing",
        image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Person creating an invoice on a laptop",
      },
      {
        label: "DATEV export included",
        title: "DATEV export without add-on module",
        subtitle: "Hours, invoices, master data — straight to the tax office. One click.",
        tag: "Accounting",
        image: "https://images.pexels.com/photos/3201735/pexels-photo-3201735.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Accountant reviewing figures on screen",
      },
      {
        label: "Documentation",
        title: "Proof that convinces your customers",
        subtitle: "Photos, reports, signatures — all tied to the job and the site.",
        tag: "Documentation",
        image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Cleaning team documenting a job with the app",
      },
    ],
    COMPACT_BADGE: "Taskey USP · All-in-One",
    COMPACT_LEAD: "End the era of",
    COMPACT_STRIKE: "5 software subscriptions",
    COMPACT_HIGHLIGHT: "one platform that truly covers everything.",
    COMPACT_CTA: "How Taskey saves costs",
    HEADLINE_LINE_1: "More than just",
    HEADLINE_LINE_2: "the essentials",
    INTRO: "From day one, Taskey covers everything a modern operation needs — on site and in the office.",
    CTA_PRIMARY: "Start for free",
    CTA_SECONDARY: "All features",
    SLIDE_ARIA: "Slide",
  },
  fr: {
    slides: [
      {
        label: "Pointage par NFC",
        title: "Pointage par NFC",
        subtitle: "Un tap sur le site suffit. Heure, lieu, personne – traçabilité totale.",
        tag: "Pointage",
        image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Main avec smartphone scannant un tag NFC sur le site",
      },
      {
        label: "Planning des missions & équipes",
        title: "Planning des missions en glisser-déposer",
        subtitle: "Équipes, tournées, sites – tout dans le même calendrier. Au lieu de trois outils.",
        tag: "Planning",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Planificatrice organisant les missions sur un ordinateur portable",
      },
      {
        label: "Devis & factures",
        title: "Devis et factures envoyés en quelques minutes",
        subtitle: "La mission devient devis, puis facture. Sans copier-coller, sans Excel.",
        tag: "Facturation",
        image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Personne créant une facture sur un ordinateur portable",
      },
      {
        label: "Export DATEV inclus",
        title: "Export DATEV sans module supplémentaire",
        subtitle: "Heures, factures, données de base – directement vers le cabinet comptable. En un clic.",
        tag: "Comptabilité",
        image: "https://images.pexels.com/photos/3201735/pexels-photo-3201735.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Comptable vérifiant les chiffres à l'écran",
      },
      {
        label: "Documentation",
        title: "Des preuves qui convainquent vos clients",
        subtitle: "Photos, comptes-rendus, signatures — tous reliés à la mission et au site.",
        tag: "Documentation",
        image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Équipe de nettoyage documentant une intervention avec l'application",
      },
    ],
    COMPACT_BADGE: "USP Taskey · Tout-en-un",
    COMPACT_LEAD: "Fini les",
    COMPACT_STRIKE: "5 abonnements logiciels",
    COMPACT_HIGHLIGHT: "une seule plateforme qui couvre vraiment tout.",
    COMPACT_CTA: "Comment Taskey réduit les coûts",
    HEADLINE_LINE_1: "Bien plus que",
    HEADLINE_LINE_2: "l'essentiel",
    INTRO: "Dès le premier jour, Taskey couvre tout ce dont une entreprise moderne a besoin – sur le terrain comme au bureau.",
    CTA_PRIMARY: "Commencer gratuitement",
    CTA_SECONDARY: "Toutes les fonctionnalités",
    SLIDE_ARIA: "Slide",
  },
} as const;

export default function AllInOneUSP({ variant = "full" }: { variant?: Variant }) {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const c = CONTENT[language];
  const slides = c.slides;

  useEffect(() => {
    if (variant === "compact") return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [variant]);

  if (variant === "compact") {
    return (
      <section className="bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50 py-8 border-y border-emerald-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-emerald-700 uppercase">
              {c.COMPACT_BADGE}
            </span>
          </div>
          <p className="text-slate-900 text-base md:text-lg font-semibold leading-snug flex-1">
            {c.COMPACT_LEAD} <span className="line-through text-slate-500">{c.COMPACT_STRIKE}</span> —{" "}
            <span className="text-emerald-700">{c.COMPACT_HIGHLIGHT}</span>
          </p>
          <Link
            href="/#alles-in-einem"
            className="text-sm font-bold text-emerald-700 hover:text-emerald-700 whitespace-nowrap inline-flex items-center gap-1"
          >
            {c.COMPACT_CTA}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  const current = slides[active];

  return (
    <section
      id="alles-in-einem"
      className="bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[64px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: Text + Bullets */}
          <div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
              {c.HEADLINE_LINE_1}
              <br />
              <span className="text-slate-500">{c.HEADLINE_LINE_2}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              {c.INTRO}
            </p>

            <ul className="space-y-2 mb-10">
              {slides.map((s, i) => (
                <li key={s.label}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      i === active
                        ? "bg-blue-100 border-slate-300"
                        : "bg-transparent border-transparent hover:bg-blue-50"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                        i === active ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" : "bg-blue-200/60"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-slate-900" : "text-slate-600"}`}>
                      {s.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base text-center"
              >
                {c.CTA_PRIMARY}
              </Link>
              <Link
                href="/features"
                className="px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base text-center"
              >
                {c.CTA_SECONDARY}
              </Link>
            </div>
          </div>

          {/* Rechte Spalte: große rotierende Karte mit Foto-Hintergrund */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-slate-900/15 border border-slate-200/60">
              {/* Foto-Background */}
              <div key={`img-${active}`} className="absolute inset-0" style={{ animation: "allinone-fade 0.7s ease-out" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.image}
                  alt={current.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-slate-950/30" />
              </div>

              {/* Progress-Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/15 overflow-hidden z-10">
                <div
                  key={active}
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left"
                  style={{ animation: "allinone-progress 4.5s linear forwards" }}
                />
              </div>

              {/* Text-Overlay */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full text-white">
                <span className="inline-flex self-start text-[10px] font-black tracking-[0.25em] uppercase text-emerald-200 bg-emerald-500/15 border border-emerald-400/40 backdrop-blur-md px-3 py-1 rounded-full mb-5">
                  {current.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                  {current.title}
                </h3>
                <p className="text-sm md:text-base text-white/85 max-w-md">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Dots für Mobile */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-blue-600" : "w-1.5 bg-blue-200/70"
                  }`}
                  aria-label={`${c.SLIDE_ARIA} ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes allinone-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes allinone-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
