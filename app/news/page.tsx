import type { Metadata } from "next";
import Link from "next/link";
import { posts, type PostCategory } from "./posts";

export const metadata: Metadata = {
  title: "Blog & News | Tipps für Reinigungsbetriebe | Taskey",
  description:
    "Aktuelle Beiträge zu Gebäudereinigungssoftware, NFC-Zeiterfassung, Einsatzplanung und Digitalisierung für Reinigungsbetriebe im DACH-Raum.",
  alternates: { canonical: "https://www.taskeyapp.com/news" },
  openGraph: {
    title: "Blog & News | Tipps für Reinigungsbetriebe | Taskey",
    description:
      "Aktuelle Beiträge zu Gebäudereinigungssoftware, NFC-Zeiterfassung, Einsatzplanung und Digitalisierung für Reinigungsbetriebe.",
    url: "https://www.taskeyapp.com/news",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey Blog – Tipps für Reinigungsbetriebe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & News | Tipps für Reinigungsbetriebe | Taskey",
    description:
      "Beiträge zu Gebäudereinigungssoftware, NFC-Zeiterfassung, Einsatzplanung und Digitalisierung.",
    images: ["/opengraph-image"],
  },
};

const categoryStyle: Record<PostCategory, { label: string; tone: string }> = {
  Update:      { label: "Update",      tone: "bg-cyan-50 border-cyan-300 text-blue-700" },
  Feature:     { label: "Feature",     tone: "bg-violet-500/10 border-violet-400/30 text-violet-300" },
  Release:     { label: "Release",     tone: "bg-emerald-50 border-emerald-300 text-emerald-700" },
  Unternehmen: { label: "Unternehmen", tone: "bg-blue-50 border-slate-200 text-slate-600" },
  Geplant:     { label: "Geplant",     tone: "bg-amber-500/10 border-amber-400/30 text-amber-300" },
  Blog:        { label: "Blog",        tone: "bg-emerald-50 border-emerald-300 text-emerald-700" },
};

export default function NewsPage() {
  const live    = posts.filter((p) => !p.planned);
  const planned = posts.filter((p) => p.planned);
  const [hero, ...rest] = live;

  return (
    <main className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 min-h-screen overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.06),transparent_60%)] pointer-events-none" />

      {/* Subtiles Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e3a8a 1px, transparent 1px), linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── HERO HEADER ───────────────────────────────────── */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
                News &amp; Updates
              </span>
            </div>

            <h1 className="text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
              Was läuft
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                bei uns.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto">
              Posts alle zwei Wochen. Direkt vom Team — keine Marketing-Floskeln.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HERO POST ─────────────────────────────────────── */}
      {hero && (
        <section className="relative pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/news/${hero.slug}`}
              className="group block relative rounded-3xl p-[1.5px] bg-gradient-to-br from-cyan-400/40 via-blue-500/20 to-purple-500/40 hover:from-cyan-400/70 hover:to-purple-500/70 transition-all"
            >
              <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-8 md:p-12 lg:p-16 overflow-hidden relative">
                {/* deko glow */}
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[64px] pointer-events-none" />

                <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
                  <div>
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                      <span
                        className={`inline-flex text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border ${categoryStyle[hero.category].tone}`}
                      >
                        {categoryStyle[hero.category].label}
                      </span>
                      <span className="text-slate-500 text-xs sm:text-sm">{hero.date}</span>
                    </div>
                    <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black text-slate-900 leading-[0.95] tracking-tight mb-6 group-hover:text-blue-700 transition-colors duration-300">
                      {hero.title}
                    </h2>
                    <p className="text-base md:text-xl text-slate-600 max-w-3xl leading-relaxed">
                      {hero.summary}
                    </p>
                  </div>

                  <div className="hidden lg:flex items-center self-end pb-2">
                    <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white text-sm font-bold group-hover:scale-[1.03] transition-transform">
                      Lesen
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ─── POSTS LIST ────────────────────────────────────── */}
      <section className="relative pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            {rest.map((post, i) => {
              const cs = categoryStyle[post.category];
              return (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group relative rounded-2xl bg-blue-50/60 hover:bg-blue-50 border border-slate-200/60 hover:border-slate-200 backdrop-blur-sm transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 p-6 md:p-8">
                    <span className="text-3xl md:text-5xl font-black text-slate-300 group-hover:text-blue-600/40 transition-colors w-16 shrink-0 leading-none select-none">
                      {String(i + 2).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2.5">
                        <span
                          className={`inline-flex text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded-full border ${cs.tone}`}
                        >
                          {cs.label}
                        </span>
                        <span className="text-slate-500 text-xs">{post.date}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-700 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed line-clamp-2">
                        {post.summary}
                      </p>
                    </div>

                    <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 border border-slate-200 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-300 transition-all shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ROADMAP / GEPLANT ─────────────────────────────── */}
      {planned.length > 0 && (
        <section className="relative pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-amber-300 mb-5">
                Roadmap
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4">
                Was als nächstes
                <br />
                <span className="text-amber-300">kommt.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-2xl mx-auto">
              {planned.map((post) => (
                <div
                  key={post.slug}
                  className="relative rounded-2xl bg-blue-50/60 border border-amber-400/15 backdrop-blur-sm p-7 md:p-8 flex flex-col gap-5"
                >
                  <span className="inline-flex self-start text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300">
                    Geplant
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── BOTTOM CTA ────────────────────────────────────── */}
      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3 text-slate-900">
                  Selbst ausprobieren.
                </h2>
                <p className="text-slate-600 text-base md:text-lg">
                  3 Monate kostenlos — kein Risiko, keine Kreditkarte.
                </p>
              </div>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0"
              >
                Jetzt starten
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
