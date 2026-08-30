import Link from "next/link";

const TASKEY_HOME = "https://www.taskeyapp.com";
const TASKEY_PRICING = "https://www.taskeyapp.com/pricing";

export default function ReinigungsappCTA() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[520px] h-[520px] rounded-full bg-cyan-500/[0.08] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-blue-500/[0.10] blur-[110px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-cyan-300/60" aria-hidden="true" />
          <span className="text-[10px] font-black tracking-[0.28em] uppercase text-cyan-300/90">
            Jetzt einsteigen
          </span>
          <span className="w-8 h-px bg-cyan-300/60" aria-hidden="true" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] mb-6 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
          Die Reinigungsapp, mit der
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
            Ihr Betrieb einfach läuft.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/75 leading-relaxed mb-10">
          Kein Vertrieb, kein Termin, kein Verkaufsgespräch. Legen Sie einen kostenlosen Account an und sehen Sie in wenigen Minuten, wie sich Ihr Alltag mit Taskey anfühlt.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <Link
            href={TASKEY_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-slate-900 text-base font-bold rounded-full hover:bg-cyan-50 transition-all shadow-2xl shadow-cyan-500/20 hover:scale-[1.02]"
          >
            Zur Reinigungsapp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={TASKEY_PRICING}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white text-base font-bold rounded-full hover:bg-white/10 transition-colors"
          >
            Preise ansehen
          </Link>
        </div>

        <p className="text-sm text-white/60">
          Kostenlos starten. DSGVO-konform. Made in Germany.
        </p>
      </div>
    </section>
  );
}
