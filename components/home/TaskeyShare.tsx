"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RevealBlur from "./RevealBlur";

/**
 * TaskeyShare — Revolut-Style:
 * Linke Spalte: minimaler Text.
 * Rechte Spalte: "Deck" aus Karten — die aktive (links) ist groß, die anderen stehen
 * gestaffelt dahinter. Jede ~4.5s rotieren die Positionen automatisch weiter.
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
      <div className="w-full rounded-2xl bg-blue-50/80 border border-slate-200 p-5 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-bold text-slate-700">Fortschritt</p>
          <p className="text-[11px] font-black text-blue-700">67%</p>
        </div>
        <div className="w-full bg-blue-100 rounded-full h-2 mb-2 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full" style={{ width: "67%" }} />
        </div>
        <p className="text-[10px] text-slate-500">Nächste Reinigung: Mo, 28.</p>
      </div>
    ),
  },
  {
    tag: "Nachweise",
    title: "Fotos & Protokolle",
    subtitle: "Bilder vom Einsatz — automatisch geteilt, nie wieder per E-Mail.",
    visual: (
      <div className="w-full rounded-2xl bg-blue-50/80 border border-slate-200 p-5 backdrop-blur-sm">
        <p className="text-[11px] font-bold text-slate-700 mb-3">Leistungsnachweise</p>
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md border border-slate-200 ${
                ["bg-cyan-100", "bg-blue-100", "bg-emerald-100", "bg-purple-100", "bg-cyan-50", "bg-blue-50"][i]
              }`}
            />
          ))}
        </div>
        <p className="text-[10px] text-slate-500">Heute 14:32 hochgeladen</p>
      </div>
    ),
  },
  {
    tag: "Budget",
    title: "Volle Transparenz",
    subtitle: "Monatsbudget, offene Posten, gelieferte Leistungen — in Echtzeit.",
    visual: (
      <div className="w-full rounded-2xl bg-blue-50/80 border border-slate-200 p-5 backdrop-blur-sm">
        <p className="text-[11px] font-bold text-slate-700 mb-2">Monatsvertrag</p>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-2xl font-black text-slate-900">4.200 €</span>
          <span className="text-[10px] text-slate-500">/ 4.800 €</span>
        </div>
        <div className="w-full bg-blue-100 rounded-full h-1.5 overflow-hidden">
          <div className="bg-emerald-400 h-1.5" style={{ width: "89%" }} />
        </div>
        <p className="text-[10px] text-emerald-700 mt-2 font-semibold">Im Rahmen</p>
      </div>
    ),
  },
  {
    tag: "Kommunikation",
    title: "Ein Klick, keine Anrufe",
    subtitle: "Fragen werden direkt im Portal geklärt. Ihr Telefon bleibt ruhig.",
    visual: (
      <div className="w-full rounded-2xl bg-blue-50/80 border border-slate-200 p-5 backdrop-blur-sm">
        <div className="flex items-start gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-cyan-100 border border-cyan-300 flex-shrink-0" />
          <div className="flex-1">
            <div className="h-2 rounded-full bg-blue-100 w-3/4 mb-1.5" />
            <div className="h-2 rounded-full bg-blue-100 w-1/2" />
          </div>
        </div>
        <div className="flex items-start gap-2 justify-end">
          <div className="flex-1 max-w-[70%]">
            <div className="h-2 rounded-full bg-cyan-400/30 w-full mb-1.5 ml-auto" />
            <div className="h-2 rounded-full bg-cyan-400/30 w-2/3 ml-auto" />
          </div>
        </div>
        <p className="text-[10px] text-slate-500 mt-3">Erledigt in 42 Sekunden</p>
      </div>
    ),
  },
];

// Layout-Slots: 0 = Hero (groß, vorne links), 1-3 = "weight stack" nach rechts-hinten
// Apple-Style: weniger Rotation, ruhigere Staffelung, klarere Hierarchie.
const slotStyles = [
  // Slot 0 — Hero
  {
    x: "0%",
    y: "0%",
    scale: 1,
    rotate: 0,
    z: 40,
    opacity: 1,
    width: "clamp(260px, 30vw, 380px)",
    aspect: "aspect-[4/5]",
  },
  // Slot 1 — leicht versetzt, kaum gekippt
  {
    x: "58%",
    y: "-4%",
    scale: 0.84,
    rotate: 1.5,
    z: 30,
    opacity: 0.92,
    width: "clamp(220px, 25vw, 320px)",
    aspect: "aspect-[4/5]",
  },
  // Slot 2 — weiter hinten, gegenläufig
  {
    x: "82%",
    y: "10%",
    scale: 0.72,
    rotate: -1.5,
    z: 20,
    opacity: 0.7,
    width: "clamp(200px, 22vw, 280px)",
    aspect: "aspect-[4/5]",
  },
  // Slot 3 — ruhig hinten
  {
    x: "104%",
    y: "2%",
    scale: 0.6,
    rotate: 2,
    z: 10,
    opacity: 0.45,
    width: "clamp(180px, 20vw, 240px)",
    aspect: "aspect-[4/5]",
  },
];

export default function TaskeyShare() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % cards.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 py-24 md:py-32 relative overflow-hidden">
      {/* Ein einziger, ruhiger Color-Spot — statt zwei flacher Glow-Bubbles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
          {/* Linke Spalte */}
          <div>
            {/* Jetzt-live Eyebrow mit Pulse-Dot — Apple/Keynote-Stil */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.28em] uppercase text-blue-700 font-mono">
                Jetzt live · Taskey Share
              </span>
            </div>

            <h2 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.92] tracking-[-0.03em] mb-6 text-slate-900">
              Es ist da.
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Taskey Share.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-md">
              Das Portal, in dem Ihr Auftraggeber alles selbst sieht. Live. Ohne Anrufe. Ohne E-Mails.
            </p>

            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/20 text-base"
            >
              Kostenlos testen
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-10">
              {cards.map((c, i) => (
                <button
                  key={c.tag}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-slate-900" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={c.tag}
                />
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Kartendeck */}
          <div className="relative h-[520px] md:h-[560px] hidden lg:block">
            <RevealBlur offset={120} blur={24} duration={1300} className="absolute inset-0">
            {cards.map((c, i) => {
              // Slot berechnen: aktive Karte = Slot 0, dann im Kreis
              const slotIndex = (i - active + cards.length) % cards.length;
              const s = slotStyles[slotIndex];
              const isHero = slotIndex === 0;
              return (
                <button
                  key={c.tag}
                  onClick={() => setActive(i)}
                  className={`absolute top-1/2 left-0 rounded-[2rem] bg-white border overflow-hidden text-left transition-all duration-[900ms] ease-out ${
                    isHero
                      ? "border-slate-200 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.18)] ring-1 ring-blue-500/10"
                      : "border-slate-200/70 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.15)]"
                  }`}
                  style={{
                    width: s.width,
                    zIndex: s.z,
                    opacity: s.opacity,
                    transform: `translate(${s.x}, calc(-50% + ${s.y})) scale(${s.scale}) rotate(${s.rotate}deg)`,
                    transformOrigin: "left center",
                  }}
                >
                  <div className={`${s.aspect}`}>
                    {/* Progress-Bar nur auf aktiver Karte */}
                    {isHero && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-50 overflow-hidden z-20">
                        <div
                          key={`p-${active}`}
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 origin-left"
                          style={{ animation: "share-progress 4.5s linear forwards" }}
                        />
                      </div>
                    )}

                    <div className="p-6 md:p-7 h-full flex flex-col">
                      <span className="inline-flex self-start text-[10px] font-black tracking-[0.28em] uppercase text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full mb-5 font-mono">
                        {c.tag}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mb-2">
                        {c.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 mb-6">{c.subtitle}</p>
                      <div className="flex-1 flex items-end">{c.visual}</div>
                    </div>
                  </div>
                </button>
              );
            })}
            </RevealBlur>
          </div>

          {/* Mobile: nur aktive Karte als einfache Animation */}
          <div className="relative lg:hidden">
            <RevealBlur offset={100} blur={22} duration={1200}>
            <div className="relative rounded-[2rem] bg-white border border-slate-200 overflow-hidden aspect-[4/5] max-w-sm mx-auto shadow-[0_30px_60px_-15px_rgba(15,23,42,0.18)] ring-1 ring-blue-500/10">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-50 overflow-hidden z-20">
                <div
                  key={`m-p-${active}`}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 origin-left"
                  style={{ animation: "share-progress 4.5s linear forwards" }}
                />
              </div>
              <div key={`m-${active}`} className="p-6 h-full flex flex-col" style={{ animation: "share-fade 0.6s ease-out" }}>
                <span className="inline-flex self-start text-[10px] font-black tracking-[0.28em] uppercase text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full mb-5 font-mono">
                  {cards[active].tag}
                </span>
                <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2">
                  {cards[active].title}
                </h3>
                <p className="text-sm text-slate-500 mb-6">{cards[active].subtitle}</p>
                <div className="flex-1 flex items-end">{cards[active].visual}</div>
              </div>
            </div>
            </RevealBlur>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes share-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes share-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes share-lift {
          0% { transform: translate(0, calc(-50% + 0%)) scale(0.985); }
          100% { transform: translate(0, calc(-50% + 0%)) scale(1); }
        }
      `}</style>
    </section>
  );
}
