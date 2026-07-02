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

          {/* === iPhone-Mock ==================================================== */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Ambient glow behind the phone */}
            <div className="absolute -inset-10 -z-10 rounded-[4rem] bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 blur-3xl" aria-hidden="true" />

            {/* Realistic iPhone frame — echtes iPhone-Seitenverhältnis (9/19.5) */}
            <div
              className="relative mx-auto w-full max-w-[300px]"
              style={{ aspectRatio: "9 / 19.5" }}
            >
              {/* Physical body (Titanium-Feel) */}
              <div className="absolute inset-0 rounded-[2.75rem] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-700 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.06)_inset] p-[3px]">
                {/* Inner black bezel */}
                <div className="w-full h-full rounded-[2.55rem] bg-black p-[9px]">
                  {/* Screen */}
                  <div className="relative w-full h-full rounded-[2.15rem] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
                    {/* Dynamic Island */}
                    <div
                      className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-black rounded-full z-20 shadow-[0_2px_6px_rgba(0,0,0,0.4)_inset]"
                      aria-hidden="true"
                    />

                    {/* Status-Bar: Uhrzeit + Signal/WiFi/Battery */}
                    <div className="absolute top-[14px] left-0 right-0 flex items-center justify-between px-6 z-30 text-[11px] font-semibold text-white pointer-events-none">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        {/* Signal bars */}
                        <svg className="w-[15px] h-[10px]" viewBox="0 0 15 10" fill="currentColor" aria-hidden="true">
                          <rect x="0" y="7" width="2.5" height="3" rx="0.4" />
                          <rect x="3.5" y="5" width="2.5" height="5" rx="0.4" />
                          <rect x="7" y="2.5" width="2.5" height="7.5" rx="0.4" />
                          <rect x="10.5" y="0" width="2.5" height="10" rx="0.4" />
                        </svg>
                        {/* WiFi */}
                        <svg className="w-[14px] h-[10px]" viewBox="0 0 14 10" fill="currentColor" aria-hidden="true">
                          <path d="M7 9.4a1 1 0 100-1.9 1 1 0 000 1.9zM4.3 7l.9-.9a2.5 2.5 0 013.6 0l.9.9-.9.9a1.4 1.4 0 00-1.8 0L7 8.7 5.2 7.9a1.4 1.4 0 00-.9-.9zM2.1 4.7l.9-.9a5.7 5.7 0 018 0l.9.9-.9.9a4.4 4.4 0 00-6.1 0l-.9-.9zM.1 2.6l.9-.9a8.4 8.4 0 0111.9 0l.9.9-.9.9a7 7 0 00-9.9 0L1 3.5.1 2.6z" />
                        </svg>
                        {/* Battery */}
                        <div className="flex items-center">
                          <div className="w-[22px] h-[11px] rounded-[3px] border border-white/70 relative p-[1.5px]">
                            <div className="h-full w-full bg-white rounded-[1px]" />
                          </div>
                          <div className="w-[1.5px] h-[4px] bg-white/70 rounded-r-sm ml-[0.5px]" />
                        </div>
                      </div>
                    </div>

                    {/* Screen content */}
                    <div className="absolute inset-0 pt-[54px] pb-[26px] px-4 flex flex-col overflow-hidden">
                      {/* Header */}
                      <div className="mb-4 text-center">
                        <p className="text-[9px] font-black tracking-[0.28em] uppercase text-emerald-300/80 mb-1">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                            </span>
                            Live
                          </span>
                        </p>
                        <p className="text-[13px] font-bold text-white/90 leading-tight px-2">
                          {t("atAGlance.phone.header")}
                        </p>
                      </div>

                      {/* Rows */}
                      <div className="flex-1 space-y-2 min-h-0">
                        {rows.map((r) => (
                          <div
                            key={r.label}
                            className="flex items-center gap-2.5 rounded-xl border border-emerald-400/15 bg-emerald-500/[0.07] px-3 py-2.5"
                          >
                            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                              <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"
                                style={{ animationDelay: r.delay }}
                              />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-[8px] font-black tracking-[0.2em] uppercase text-emerald-200/70 leading-none mb-0.5">
                                {r.label}
                              </p>
                              <p className="text-[11px] font-bold text-white leading-tight truncate">
                                {r.value}
                              </p>
                            </div>
                            <svg
                              className="w-3 h-3 text-emerald-400/80 flex-shrink-0"
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

                      {/* Home indicator */}
                      <div className="pt-3 flex justify-center">
                        <div className="w-[100px] h-[3px] rounded-full bg-white/40" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical side buttons */}
              {/* Left: silent switch */}
              <div className="absolute -left-[3px] top-[13%] w-[3px] h-[26px] bg-slate-800 rounded-l-sm" aria-hidden="true" />
              {/* Left: volume up */}
              <div className="absolute -left-[3px] top-[21%] w-[3px] h-[36px] bg-slate-800 rounded-l-sm" aria-hidden="true" />
              {/* Left: volume down */}
              <div className="absolute -left-[3px] top-[29%] w-[3px] h-[36px] bg-slate-800 rounded-l-sm" aria-hidden="true" />
              {/* Right: side button (power) */}
              <div className="absolute -right-[3px] top-[22%] w-[3px] h-[52px] bg-slate-800 rounded-r-sm" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
