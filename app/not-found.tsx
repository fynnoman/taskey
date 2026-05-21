import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Taskey",
  description:
    "Die gesuchte Seite wurde nicht gefunden. Hier geht es zur Startseite, zu den Funktionen, Preisen oder unseren Branchen-Lösungen.",
  robots: { index: false, follow: true },
  alternates: { canonical: undefined },
};

const quickLinks = [
  { href: "/", label: "Startseite", desc: "Zurück zur Übersicht von Taskey" },
  { href: "/features", label: "Funktionen", desc: "NFC, Einsatzplanung, DATEV-Export" },
  { href: "/pricing", label: "Preise", desc: "Ab 119 €/Monat – täglich kündbar" },
  { href: "/loesungen", label: "Branchen-Lösungen", desc: "Unterhalts-, Glas-, Klinikreinigung u.a." },
  { href: "/news", label: "Blog & News", desc: "Tipps für Reinigungsbetriebe" },
  { href: "/support", label: "Support", desc: "Direkter Draht zum Taskey-Team" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative pt-32 md:pt-40 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-5">
            Fehler 404
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6">
            Diese Seite gibt&apos;s nicht.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10">
            Vielleicht ein Tippfehler? Oder die Seite wurde verschoben. Wir bringen dich woanders hin:
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 text-base font-bold rounded-full hover:bg-white/90 transition-colors"
          >
            Zur Startseite
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 p-6 transition-colors"
            >
              <h2 className="text-lg font-bold mb-1.5 group-hover:text-cyan-200 transition-colors">
                {l.label}
              </h2>
              <p className="text-white/55 text-sm leading-relaxed">{l.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
