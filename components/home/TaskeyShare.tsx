"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * TaskeyShare — Revolut-Style: links Text, rechts horizontal scrollende Karten mit Klick-Nav.
 * Auto-Rotation + Dots + Manuelle Tabs.
 */

type Card = {
  tag: string;
  title: string;
  subtitle: string;
  visual: React.ReactNode;
};

const cards: Card[] = [
  {
    tag: "Live-Status",
    title: "Fortschritt live",
    subtitle: "Ihr Auftraggeber sieht jederzeit, was im Objekt passiert.",
    visual: (
      <div className="w-full max-w-[260px] rounded-2xl bg-white/[0.06] border border-white/10 p-5 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-bold text-white/80">Fortschritt</p>
          <p className="text-[11px] font-black text-cyan-300">67%</p>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2 mb-2 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full" style={{ width: "67%" }} />
        </div>
        <p className="text-[10px] text-white/40">Nächste Reinigung: Mo, 28.</p>
      </div>
    ),
  },
  {
    tag: "Nachweise",
    title: "Fotos & Protokolle",
    subtitle: "Bilder vom Einsatz — automatisch geteilt, nie wieder per E-Mail.",
    visual: (
      <div className="w-full max-w-[260px] rounded-2xl bg-white/[0.06] border border-white/10 p-5 backdrop-blur-sm">
        <p className="text-[11px] font-bold text-white/80 mb-3">Leistungsnachweise</p>
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md border border-white/10 ${
                ["bg-cyan-500/20", "bg-blue-500/15", "bg-emerald-500/15", "bg-purple-500/15", "bg-cyan-500/10", "bg-blue-500/10"][i]
              }`}
            />
          ))}
        </div>
        <p className="text-[10px] text-white/40">Heute 14:32 hochgeladen</p>
      </div>
    ),
  },
  {
    tag: "Budget",
    title: "Volle Transparenz",
    subtitle: "Monatsbudget, offene Posten, gelieferte Leistungen — in Echtzeit.",
    visual: (
      <div className="w-full max-w-[260px] rounded-2xl bg-white/[0.06] border border-white/10 p-5 backdrop-blur-sm">
        <p className="text-[11px] font-bold text-white/80 mb-2">Monatsvertrag</p>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-2xl font-black text-white">4.200 €</span>
          <span className="text-[10px] text-white/40">/ 4.800 €</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div className="bg-emerald-400 h-1.5" style={{ width: "89%" }} />
        </div>
        <p className="text-[10px] text-emerald-300 mt-2 font-semibold">Im Rahmen</p>
      </div>
    ),
  },
  {
    tag: "Kommunikation",
    title: "Ein Klick, keine Anrufe",
    subtitle: "Fragen werden direkt im Portal geklärt. Ihr Telefon bleibt ruhig.",
    visual: (
      <div className="w-full max-w-[260px] rounded-2xl bg-white/[0.06] border border-white/10 p-5 backdrop-blur-sm">
        <div className="flex items-start gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex-shrink-0" />
          <div className="flex-1">
            <div className="h-2 rounded-full bg-white/10 w-3/4 mb-1.5" />
            <div className="h-2 rounded-full bg-white/10 w-1/2" />
          </div>
        </div>
        <div className="flex items-start gap-2 justify-end">
          <div className="flex-1 max-w-[70%]">
            <div className="h-2 rounded-full bg-cyan-400/30 w-full mb-1.5 ml-auto" />
            <div className="h-2 rounded-full bg-cyan-400/30 w-2/3 ml-auto" />
          </div>
        </div>
        <p className="text-[10px] text-white/40 mt-3">Erledigt in 42 Sekunden</p>
      </div>
    ),
  },
];

export default function TaskeyShare() {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Auto-Rotation
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % cards.length), 4500);
    return () => clearInterval(id);
  }, []);

  // Sync horizontales Scrollen auf aktive Karte
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[active] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
    }
  }, [active]);

  return (
    <section className="bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: minimaler Text */}
          <div>
            <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-4">
              Auftraggeber-Portal
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-white">
              Ein Klick.
              <br />
              <span className="text-white/50">Alles sichtbar.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-md">
              Ihr Auftraggeber sieht alles selbst. Sie werden nicht mehr angerufen.
            </p>

            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-white/90 transition-colors text-base"
            >
              Kostenlos testen
            </Link>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-10">
              {cards.map((c, i) => (
                <button
                  key={c.tag}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={c.tag}
                />
              ))}
            </div>
          </div>

          {/* Rechte Spalte: horizontal scrollende Karten */}
          <div className="relative -mr-4 sm:-mr-6 lg:-mr-12">
            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pr-4 sm:pr-6 lg:pr-12 no-scrollbar"
              style={{ scrollbarWidth: "none" }}
            >
              {cards.map((c, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={c.tag}
                    onClick={() => setActive(i)}
                    className={`snap-start flex-shrink-0 w-[280px] sm:w-[340px] aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#1a2942] to-[#0d1a2e] border overflow-hidden relative text-left transition-all ${
                      isActive
                        ? "border-white/20 scale-[1.02] shadow-2xl shadow-cyan-500/10"
                        : "border-white/5 opacity-70 hover:opacity-90"
                    }`}
                  >
                    {/* Progress-Bar nur auf aktiver Karte */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden z-20">
                        <div
                          key={`p-${active}`}
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 origin-left"
                          style={{ animation: "share-progress 4.5s linear forwards" }}
                        />
                      </div>
                    )}

                    <div className="p-6 md:p-7 h-full flex flex-col">
                      <span className="inline-flex self-start text-[10px] font-black tracking-[0.25em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full mb-5">
                        {c.tag}
                      </span>
                      <h3 className="text-2xl font-black text-white leading-tight mb-2">
                        {c.title}
                      </h3>
                      <p className="text-sm text-white/50 mb-6">{c.subtitle}</p>
                      <div className="flex-1 flex items-end justify-center">{c.visual}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes share-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
