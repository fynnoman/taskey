"use client";

import { useLanguage } from "@/context/LanguageContext";

/**
 * AufEinenBlick
 *
 * Emotionale End-State-Sektion: verkauft das Gefühl, den Betrieb ruhig im
 * Griff zu haben, nicht die Software dahinter. Kurzer Blick aufs Handy →
 * alles im grünen Bereich → Handy weglegen.
 *
 * Wird auf der Startseite direkt nach dem Hero eingebunden.
 */
export default function AufEinenBlick() {
  const { t } = useLanguage();

  const rows = [
    {
      label: t("atAGlance.phone.row1.label"),
      value: t("atAGlance.phone.row1.value"),
      delay: "0s",
    },
    {
      label: t("atAGlance.phone.row2.label"),
      value: t("atAGlance.phone.row2.value"),
      delay: "0.4s",
    },
    {
      label: t("atAGlance.phone.row3.label"),
      value: t("atAGlance.phone.row3.value"),
      delay: "0.8s",
    },
    {
      label: t("atAGlance.phone.row4.label"),
      value: t("atAGlance.phone.row4.value"),
      delay: "1.2s",
    },
  ];

  return (
    <section
      id="auf-einen-blick"
      className="relative overflow-hidden bg-slate-950 text-white py-20 md:py-32"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* === Copy =========================================================== */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-3 text-[10px] font-black tracking-[0.28em] uppercase text-emerald-300/90 mb-6">
              <span className="w-8 h-px bg-emerald-300/60" aria-hidden="true" />
              {t("atAGlance.tag")}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight mb-6">
              {t("atAGlance.title1")}
              <br />
              <span className="text-white/55">{t("atAGlance.title2")}</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl">
              {t("atAGlance.body")}
            </p>
            <p className="text-base text-white/55 italic leading-relaxed max-w-xl">
              {t("atAGlance.persona")}
            </p>
          </div>

          {/* === Handy-Mock ===================================================== */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Ambient glow behind the phone */}
            <div className="absolute -inset-10 -z-10 rounded-[4rem] bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 blur-3xl" aria-hidden="true" />

            <div className="relative w-full max-w-[320px]">
              {/* Frame */}
              <div className="relative rounded-[3rem] bg-slate-950 border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] p-3">
                {/* Dynamic Island / Notch */}
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"
                  aria-hidden="true"
                />

                {/* Screen */}
                <div className="relative rounded-[2.4rem] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 pt-14 pb-6 px-5">
                  {/* Header */}
                  <div className="mb-6 text-center">
                    <p className="text-[10px] font-black tracking-[0.28em] uppercase text-emerald-300/80 mb-1.5">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        Live
                      </span>
                    </p>
                    <p className="text-sm font-bold text-white/90">
                      {t("atAGlance.phone.header")}
                    </p>
                  </div>

                  {/* Rows */}
                  <div className="space-y-3">
                    {rows.map((r) => (
                      <div
                        key={r.label}
                        className="flex items-center gap-3 rounded-xl border border-emerald-400/15 bg-emerald-500/[0.06] px-3.5 py-3"
                      >
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                          <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"
                            style={{ animationDelay: r.delay }}
                          />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-black tracking-[0.22em] uppercase text-emerald-200/70 leading-none mb-1">
                            {r.label}
                          </p>
                          <p className="text-[13px] font-bold text-white leading-tight truncate">
                            {r.value}
                          </p>
                        </div>
                        <svg
                          className="w-3.5 h-3.5 text-emerald-400/80 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
