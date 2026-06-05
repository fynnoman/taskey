import Link from "next/link";

/**
 * TaskeyShareDemo — Erklärt das Auftraggeber-Portal "Taskey Share"
 * und leitet zur Live-Demo unter demo.kunden.taskeyapp.com weiter.
 */
export default function TaskeyShareDemo() {
  const features = [
    {
      tag: "Live-Status",
      title: "Fortschritt in Echtzeit",
      desc: "Auftraggeber sehen jederzeit, wo gerade gearbeitet wird und wann der nächste Einsatz ansteht.",
    },
    {
      tag: "Nachweise",
      title: "Fotos & Protokolle",
      desc: "Bilder vom Einsatz landen automatisch im Portal — kein E-Mail-Anhang, kein Hinterherlaufen.",
    },
    {
      tag: "Budget",
      title: "Volle Transparenz",
      desc: "Monatsbudget, gelieferte Leistungen und offene Posten sind jederzeit einsehbar.",
    },
    {
      tag: "Kommunikation",
      title: "Direkt im Portal",
      desc: "Fragen, Freigaben und Reklamationen werden geklärt — mit einem Klick statt einem Anruf.",
    },
  ];

  return (
    <section className="relative bg-[var(--background)] text-[var(--ink)] py-24 md:py-36 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-cyan-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-blue-100 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <p className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.3em] uppercase text-[var(--signal-strong)] mb-5">
            Live-Demo · Taskey Share
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[0.98] tracking-[-0.04em] mb-6 text-slate-900">
            Sehen Sie Taskey Share
            <br />
            <span className="text-[var(--foreground-soft)]">aus Auftraggeber-Sicht.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Taskey Share ist das schlanke Portal, in dem Ihre Auftraggeber jederzeit selbst sehen,
            was im Objekt passiert. Live-Status, Fotos, Protokolle und Budget — ohne Anrufe,
            ohne E-Mails, ohne Wartezeit. Werfen Sie selbst einen Blick rein.
          </p>
        </div>

        {/* Feature-Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14 md:mb-20">
          {features.map((f) => (
            <div
              key={f.tag}
              className="relative rounded-2xl bg-[var(--background-deep)]/60 border border-[var(--border-soft)] backdrop-blur-sm p-6 md:p-7"
            >
              <span className="inline-flex text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-[var(--signal-soft)] border border-[var(--signal)]/30 text-[var(--signal-strong)] mb-5">
                {f.tag}
              </span>
              <h3 className="text-lg md:text-xl font-black text-[var(--ink)] tracking-[-0.025em] leading-tight mb-2">
                {f.title}
              </h3>
              <p className="text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://demo.kunden.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--ink)] text-[var(--background)] text-base md:text-lg font-bold rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            Live-Demo öffnen
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="text-sm text-[var(--foreground-soft)] mt-5">
            Direkt im Browser — kein Login, keine Anmeldung.
          </p>
        </div>
      </div>
    </section>
  );
}
