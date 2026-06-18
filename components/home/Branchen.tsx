'use client';

import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

/**
 * Testimonials — ehemals "Branchen"-Section.
 * Reine Reinigungs-Stimmen, gleicher dunkler Stil wie zuvor.
 * Datei-Name bleibt absichtlich `Branchen.tsx`, damit dynamische Imports/SSR-Cache stabil bleiben.
 */
export default function Branchen() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote:
        "Seit Taskey wissen wir auf die Minute genau, wer wo geputzt hat – und unsere Auftraggeber bekommen den Nachweis automatisch.",
      name: "Markus Weber",
      role: "Geschäftsführer",
      company: "Weber Gebäudereinigung GmbH",
      location: "Stuttgart",
      employees: "42 Mitarbeitende",
      rating: 5,
      tag: "Unterhaltsreinigung",
    },
    {
      quote:
        "Die NFC-Tags an den Objekten haben uns die Diskussionen über Stundenzettel komplett erspart. Jede Minute revisionssicher dokumentiert.",
      name: "Sandra Klein",
      role: "Objektleiterin",
      company: "ProClean Service",
      location: "München",
      employees: "120 Mitarbeitende",
      rating: 5,
      tag: "Industriereinigung",
    },
    {
      quote:
        "Vorher 4 Tools, jetzt eines. Allein bei den Lizenzen sparen wir über 600 € im Monat – und das Team kommt endlich klar.",
      name: "Tobias Reuter",
      role: "Inhaber",
      company: "Reuter Reinigungsservice",
      location: "Köln",
      employees: "18 Mitarbeitende",
      rating: 5,
      tag: "Glas- & Fassadenreinigung",
    },
    {
      quote:
        "Unsere Reinigungskräfte erfassen Mängel direkt mit Foto in der App. Das Büro reagiert sofort statt am Monatsende.",
      name: "Anja Hoffmann",
      role: "Betriebsleitung",
      company: "Hoffmann Hygieneservice",
      location: "Hamburg",
      employees: "67 Mitarbeitende",
      rating: 5,
      tag: "Klinik- & Hygienereinigung",
    },
    {
      quote:
        "Die Auftraggeber-Freigabe per Link ist ein echter Gamechanger. Hotels und Verwalter sehen den Status live – ohne Mail-Pingpong.",
      name: "Daniel Brandt",
      role: "Geschäftsführer",
      company: "Brandt Cleaning Group",
      location: "Frankfurt",
      employees: "210 Mitarbeitende",
      rating: 5,
      tag: "Hotel-Housekeeping",
    },
    {
      quote:
        "Wir haben uns jahrelang vor der Digitalisierung gedrückt. Mit Taskey waren wir nach 2 Wochen produktiv – und das Team liebt es.",
      name: "Petra Lindner",
      role: "Inhaberin",
      company: "Lindner Reinigungsmanufaktur",
      location: "Wien",
      employees: "9 Mitarbeitende",
      rating: 5,
      tag: "Sonder- & Baureinigung",
    },
    {
      quote:
        "Live-Margen pro Objekt – das hatten wir vorher nirgendwo. Jetzt sehen wir sofort, welcher Auftrag rechnet und welcher nicht.",
      name: "Murat Yılmaz",
      role: "Operations Manager",
      company: "Clean & Smart Services",
      location: "Berlin",
      employees: "85 Mitarbeitende",
      rating: 5,
      tag: "Großobjekt-Reinigung",
    },
    {
      quote:
        "Schichtplanung für 30 Reinigungskräfte ging vorher per Excel und WhatsApp. Heute klicke ich 10 Minuten und der Plan steht.",
      name: "Lisa Maier",
      role: "Disposition",
      company: "Alpenglanz Reinigung",
      location: "Innsbruck",
      employees: "34 Mitarbeitende",
      rating: 5,
      tag: "Unterhaltsreinigung",
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
            Stimmen aus der Reinigungsbranche
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight mb-6 text-slate-900">
            Reinigungsfirmen.
            <br />
            <span className="text-slate-500">Die uns vertrauen.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            Vom 9-Personen-Betrieb bis zur Reinigungs-Gruppe mit 200+ Mitarbeitenden –
            Taskey läuft im Alltag. Hier sprechen die, die jeden Tag damit arbeiten.
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
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">4,9</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Ø Bewertung</div>
          </div>
          <div className="text-center border-l border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">250+</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Reinigungsfirmen</div>
          </div>
          <div className="text-center border-l border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">DACH</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">DE · AT · CH</div>
          </div>
          <div className="text-center border-l border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">98%</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Weiterempfehlung</div>
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
              Werden Sie der nächste Erfolgsfall.
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Testen Sie Taskey 30 Tage gratis. Kein Setup-Aufwand, keine Vertragsbindung,
              voller Funktionsumfang.
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
                Alle Funktionen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
