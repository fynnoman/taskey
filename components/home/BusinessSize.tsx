"use client";

import { useEffect, useState } from "react";
import Link from "@/components/LocaleLink";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useParallax } from "./useParallax";

/**
 * BusinessSize — Revolut-Style:
 * Links Text + Bullet-Navigation.
 * Rechts: große PNGs als Hintergrund in den dunklen Section-Bg verblendet
 * (gleicher Stil wie FeaturePreview). Leichter Parallax (15% langsamer).
 */
export default function BusinessSize() {
  const { t } = useLanguage();

  const cards = [
    {
      id: 1,
      label: t("biz.card1.label"),
      headline: "Klein & schlank.",
      image: "/reinigungklein.webp",
      text: t("biz.card1.text"),
    },
    {
      id: 2,
      label: t("biz.card2.label"),
      headline: "Wachsend.",
      image: "/reinigungmittel.webp",
      text: t("biz.card2.text"),
    },
    {
      id: 3,
      label: t("biz.card3.label"),
      headline: "Skaliert beliebig.",
      image: "/reinigunggross.webp",
      text: t("biz.card3.text"),
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % cards.length), 5500);
    return () => clearInterval(id);
  }, [cards.length]);
  const current = cards[active];

  const parallaxRef = useParallax<HTMLDivElement>(0.15);

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[64px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      {/* Großes verblendetes Bild rechts — full-bleed, keine Card (Desktop) */}
      <div ref={parallaxRef} className="hidden lg:block absolute top-0 right-0 bottom-0 w-[62%] pointer-events-none will-change-transform">
        {cards.map((c, i) => (
          <div
            key={c.image}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={c.image}
              alt={c.headline}
              fill
              sizes="62vw"
              className="object-cover object-center"
              priority={i === 0}
            />
            {/* Blend-Masken */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.9) 12%, rgba(255,255,255,0.5) 38%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0.7) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.45) 15%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.7) 85%, #ffffff 100%)",
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte */}
          <div className="relative z-10">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-6">
              {t("biz.badge")}
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8 text-slate-900">
              {t("biz.title")}
              <br />
              <span className="text-slate-500">{t("biz.title.highlight")}.</span>
            </h2>

            <div className="space-y-2 mb-10">
              {cards.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center justify-between gap-4 px-5 py-4 rounded-xl border transition-all ${
                    i === active
                      ? "bg-blue-100 border-slate-300"
                      : "bg-transparent border-slate-200/60 hover:bg-blue-50 hover:border-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                        i === active ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "bg-blue-200/60"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-slate-900" : "text-slate-600"}`}>
                      {c.label}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    {i === active && (
                      <span className="hidden sm:block h-0.5 w-12 bg-blue-100 rounded-full overflow-hidden">
                        <span
                          key={`prog-${active}`}
                          className="block h-full bg-gradient-to-r from-cyan-400 to-blue-400 origin-left"
                          style={{ animation: "biz-progress 5.5s linear forwards" }}
                        />
                      </span>
                    )}
                    <span className={`text-sm ${i === active ? "text-slate-700" : "text-slate-400"}`}>
                      0{i + 1}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base"
            >
              {t("biz.cta")}
            </Link>
          </div>

          {/* Rechte Spalte: schwebende Text-Legende zum Bild (Desktop) + inline Bild (Mobile) */}
          <div className="relative lg:min-h-[520px] flex lg:items-end">
            {/* Mobile: Bild inline */}
            <div className="lg:hidden w-full">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white">
                {cards.map((c, i) => (
                  <div
                    key={c.image}
                    className="absolute inset-0 transition-opacity duration-[1000ms]"
                    style={{ opacity: i === active ? 1 : 0 }}
                  >
                    <Image src={c.image} alt={c.headline} fill sizes="100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  </div>
                ))}
                <div key={`m-txt-${active}`} className="absolute bottom-0 left-0 right-0 p-6" style={{ animation: "biz-fade 0.7s ease-out" }}>
                  <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 px-3 py-1 rounded-full mb-3">
                    {current.label}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2">{current.headline}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{current.text}</p>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active ? "w-6 bg-blue-600" : "w-1.5 bg-blue-200/70"
                    }`}
                    aria-label={`Größe ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Text schwebt frei über dem Hintergrund-Bild */}
            <div key={`d-txt-${active}`} className="hidden lg:block ml-auto max-w-md relative z-10" style={{ animation: "biz-fade 0.7s ease-out" }}>
              <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 backdrop-blur-md px-3 py-1 rounded-full mb-5">
                {current.label}
              </span>
              <h3 className="text-3xl xl:text-4xl font-black text-slate-900 leading-[1.1] mb-4 ">
                {current.headline}
              </h3>
              <p className="text-base xl:text-lg text-slate-700 leading-relaxed ">
                {current.text}
              </p>
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
