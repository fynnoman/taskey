"use client";

import Link from "@/components/LocaleLink";

/**
 * CommunicationUSP
 *
 * Taskeys Kern-USP: Die beste Kommunikation zwischen Einsatzort und Büro.
 * Wird auf allen wichtigen Seiten eingebunden (Home, Gebäudereinigung,
 * Features, Pricing, Lösungen).
 *
 * Varianten:
 *  - "full"    : große Sektion mit 4 Säulen (Standard)
 *  - "compact" : schlanker Banner-Streifen für Unterseiten
 *  - "dark"    : dunkle Variante für helle Hintergründe
 */

type Variant = "full" | "compact" | "dark";

export default function CommunicationUSP({ variant = "full" }: { variant?: Variant }) {
  if (variant === "compact") {
    return (
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-8 border-y border-blue-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-blue-700 uppercase">
              Taskey-USP · Live-Verbindung
            </span>
          </div>
          <p className="text-slate-900 text-base md:text-lg font-semibold leading-snug flex-1">
            Die beste Kommunikation zwischen{" "}
            <span className="text-blue-700">Einsatzort</span> und{" "}
            <span className="text-blue-700">Büro</span> — in Echtzeit.
          </p>
          <Link
            href="/#echtzeit-kommunikation"
            className="text-sm font-bold text-blue-700 hover:text-blue-700 whitespace-nowrap inline-flex items-center gap-1"
          >
            Mehr erfahren
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  const isDark = variant === "dark";

  /* ASSETS — TODO: gegen finale Brand-Fotos austauschen.
     Quelle Platzhalter: pexels.com (kostenfrei). Empfohlen final: eigene Fotos der Teams. */
  const cards = [
    {
      title: "Echtzeit zwischen Feld & Büro",
      subtitle: "Live-Standorte, Scans und Statusänderungen — ohne WhatsApp-Rückfragen.",
      image: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Reinigungskraft im Einsatz – sichtbar dokumentiert per App",
    },
    {
      title: "Transparenz für den Kunden",
      subtitle: "Auftraggeber sehen Leistungen und Protokolle live — statt nur am Monatsende.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Auftraggeberin prüft Berichte am Laptop",
    },
    {
      title: "Nachweisbar statt nur geplant",
      subtitle: "NFC-Scan, Zeit, Ort, Foto — jede Leistung lückenlos belegt.",
      image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Hand mit Smartphone scannt NFC-Tag",
    },
    {
      title: "Einfach im Außendienst",
      subtitle: "Wenige Taps, große Symbole, Offline-Sync. Jedes Team kommt klar.",
      image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Reinigungsteam koordiniert Einsatz mit App",
    },
  ];

  const bgFull = isDark
    ? "bg-gradient-to-b from-white via-blue-50 to-white text-slate-900"
    : "bg-gradient-to-b from-white via-blue-50 to-white text-slate-900";

  return (
    <section id="echtzeit-kommunikation" className={`${bgFull} py-24 md:py-32 relative overflow-hidden`}>
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[72px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header – Revolut-Style: zentral, groß, knapp */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
            Feld trifft Büro.
            <br />
            <span className="text-slate-500">In Echtzeit.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Infos vom Einsatzort landen sofort im Büro. Entscheiden statt raten.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base"
            >
              Kostenlos starten
            </Link>
            <Link
              href="/features"
              className="px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base"
            >
              Funktionen ansehen
            </Link>
          </div>
        </div>

        {/* Karten-Grid – Bild-First, klare Boxen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white border border-slate-200/70 overflow-hidden flex flex-col shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)] transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Image-Block */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/40 to-transparent" />
              </div>

              {/* Text-Block */}
              <div className="p-6 md:p-7 -mt-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {c.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
