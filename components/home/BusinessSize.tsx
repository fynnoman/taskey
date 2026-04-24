"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

/**
 * BusinessSize — Revolut-Style Split-Layout mit auto-rotierender Karte.
 * Kein ScrollLine, keine Scroll-Choreografie – nur 3 klickbare Größen-Tabs.
 */
export default function BusinessSize() {
  const { t } = useLanguage();

  const cards = [
    {
      id: 1,
      label: t("biz.card1.label"),
      headline: "Klein & schlank.",
      image: "/26473062-6363-4095-A9BD-AD2B2B404909.webp",
      text: t("biz.card1.text"),
    },
    {
      id: 2,
      label: t("biz.card2.label"),
      headline: "Wachsend.",
      image: "/629F1A67-7DB2-4895-B898-337BCB2EAE07.webp",
      text: t("biz.card2.text"),
    },
    {
      id: 3,
      label: t("biz.card3.label"),
      headline: "Skaliert beliebig.",
      image: "/A723E4B1-276B-4AC7-9BAB-63AEAF16EC1D.webp",
      text: t("biz.card3.text"),
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % cards.length), 5000);
    return () => clearInterval(id);
  }, [cards.length]);
  const current = cards[active];

  return (
    <section className="bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: viel Weißraum, wenig Text */}
          <div>
            <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-6">
              {t("biz.badge")}
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8 text-white">
              Taskey wächst
              <br />
              <span className="text-white/50">mit Ihnen.</span>
            </h2>

            <div className="space-y-2 mb-10">
              {cards.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center justify-between gap-4 px-5 py-4 rounded-xl border transition-all ${
                    i === active
                      ? "bg-white/10 border-white/20"
                      : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                        i === active ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "bg-white/20"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-white" : "text-white/60"}`}>
                      {c.label}
                    </span>
                  </span>
                  <span className={`text-sm ${i === active ? "text-white/80" : "text-white/30"}`}>
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-white/90 transition-colors text-base"
            >
              {t("biz.cta")}
            </Link>
          </div>

          {/* Rechte Spalte: große Bild-Karte */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] bg-gradient-to-br from-[#1a2942] to-[#0d1a2e] border border-white/5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden z-20">
                <div
                  key={active}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 origin-left"
                  style={{ animation: "biz-progress 5s linear forwards" }}
                />
              </div>

              <div key={`img-${active}`} className="absolute inset-0" style={{ animation: "biz-fade 0.7s ease-out" }}>
                <Image
                  src={current.image}
                  alt={current.headline}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  priority={active === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a2e] via-[#0d1a2e]/40 to-transparent" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                <div key={`txt-${active}`} style={{ animation: "biz-fade 0.6s ease-out" }}>
                  <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.25em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full mb-4">
                    {current.label}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
                    {current.headline}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                    {current.text}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-white" : "w-1.5 bg-white/30"
                  }`}
                  aria-label={`Größe ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes biz-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes biz-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
