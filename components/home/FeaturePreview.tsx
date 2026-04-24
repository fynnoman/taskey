"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturePreview() {
  const { t } = useLanguage();

  const features = [
    {
      label: "Lückenlose Nachweise",
      title: t("features.1.title"),
      description: t("features.1.desc"),
      image: "/BA2B10E7-7DE2-41AD-B48D-EE39BC2E52E6.webp",
      tag: "Nachweis",
    },
    {
      label: "Zeiten automatisch",
      title: t("features.2.title"),
      description: t("features.2.desc"),
      image: "/B899021B-1AAA-40FD-9668-5DBB4E23D5D2.webp",
      tag: "Zeiterfassung",
    },
    {
      label: "Belege bei Reklamationen",
      title: t("features.3.title"),
      description: t("features.3.desc"),
      image: "/54F369FF-6D74-4695-B8D3-44E54D16098B.webp",
      tag: "Dokumentation",
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % features.length), 4500);
    return () => clearInterval(id);
  }, [features.length]);
  const current = features[active];

  return (
    <section className="bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: Text + Bullet-Liste */}
          <div>
            <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-4">
              {t("features.badge")}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight mb-6 text-white">
              Sie sparen Zeit,
              <br />
              sparen Ärger –
              <br />
              <span className="text-white/50">und haben alles schwarz auf weiss.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
              {t("features.subtitle")}
            </p>

            <ul className="space-y-2 mb-10">
              {features.map((f, i) => (
                <li key={f.label}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      i === active
                        ? "bg-white/10 border-white/20"
                        : "bg-transparent border-transparent hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                        i === active
                          ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                          : "bg-white/20"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-white" : "text-white/60"}`}>
                      {f.label}
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
                className="px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-white/90 transition-colors text-base text-center"
              >
                Kostenlos starten
              </Link>
              <Link
                href="/features"
                className="px-8 py-3.5 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-base text-center"
              >
                Alle Funktionen
              </Link>
            </div>
          </div>

          {/* Rechte Spalte: große rotierende Karte */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] bg-gradient-to-br from-[#1a2942] to-[#0d1a2e] border border-white/5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden z-20">
                <div
                  key={active}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 origin-left"
                  style={{ animation: "featurepreview-progress 4.5s linear forwards" }}
                />
              </div>

              {/* Bild-Hintergrund */}
              <div key={`img-${active}`} className="absolute inset-0" style={{ animation: "featurepreview-fade 0.7s ease-out" }}>
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover opacity-40"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a2e] via-[#0d1a2e]/60 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                <span className="inline-flex self-start text-[10px] font-black tracking-[0.25em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full mb-6">
                  {current.tag} · {String(active + 1).padStart(2, "0")}/{String(features.length).padStart(2, "0")}
                </span>

                <div key={`txt-${active}`} className="mt-auto" style={{ animation: "featurepreview-fade 0.6s ease-out" }}>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
                    {current.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots für Mobile */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-white" : "w-1.5 bg-white/30"
                  }`}
                  aria-label={`Feature ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes featurepreview-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes featurepreview-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
