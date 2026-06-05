'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-20 bg-[var(--ink)] text-[var(--background)] overflow-hidden isolate">
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw]"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 0%, rgba(234,88,12,0.16), transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
            backgroundSize: '220px 220px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* USP block #1 — Feld ↔ Büro */}
        <div className="pt-20 sm:pt-24 pb-12 border-b border-white/8">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--signal-soft)] mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[var(--signal)]" />
            <span>§01 · Taskey-USP</span>
          </div>
          <h3 className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] max-w-4xl mb-6">
            Die beste Kommunikation zwischen{" "}
            <span className="text-[var(--signal)]">Einsatzort</span> und{" "}
            <span className="text-[var(--signal)]">Büro</span>.
          </h3>
          <p className="text-stone-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Taskey ist nicht nur eine Software — Taskey ist der Vermittler für Infos, die Ihr Team
            vor Ort sammelt. Defekte, Einsatzstunden, Probleme, Material. Das Büro bekommt alles in
            Echtzeit und kann sofort entscheiden.
          </p>
        </div>

        {/* USP block #2 — Alles in einem System */}
        <div className="pt-12 pb-12 border-b border-white/8">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--signal-soft)] mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[var(--signal)]" />
            <span>§02 · Alles in einem System</span>
          </div>
          <h3 className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] max-w-4xl mb-6">
            Eine <span className="text-[var(--signal)]">Software</span> statt{" "}
            <span className="line-through text-stone-500">fünf Abos</span>.
          </h3>
          <p className="text-stone-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Zeiterfassung, Einsatzplanung, Auftragsverwaltung, Objektdokumentation, Angebote,
            Rechnungen und DATEV-Export — in einer Plattform. Ein Login, ein Datenmodell, eine
            Rechnung. Schluss mit dem Tool-Zoo und Excel als Klammer dazwischen.
          </p>
        </div>

        {/* Top section — big branding */}
        <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 border-b border-white/8">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/843B6B8E-CED8-4FF8-8C63-B354140A7BC5e5e1f940b1a8d4df34c43ec444a293f3116e09c2a98dcecd8e8882d3099b7c2d.png"
              alt="Taskey – Gebäudereinigungssoftware Made in Germany"
              width={120}
              height={40}
              sizes="120px"
              loading="lazy"
              quality={75}
            />
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em]">Taskey</h2>
            <span className="hidden sm:inline din-stamp text-[var(--signal-soft)] -rotate-2">
              Made in Germany
            </span>
          </div>
          <p className="text-stone-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10 md:gap-8 py-16 sm:py-20">
          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--signal-soft)] mb-5">{t("footer.col.product")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/features" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  {t("footer.link.features")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  {t("footer.link.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/ios" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  iOS App
                </Link>
              </li>
              <li>
                <Link href="/nfc" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  NFC-Objektnachweis
                </Link>
              </li>
              <li>
                <Link href="/pricing#enterprise" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--signal-soft)] mb-5">{t("footer.col.company")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  {t("footer.link.about")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/partnerschaften" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Partnerschaften
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors"
                >
                  {t("footer.link.support")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--signal-soft)] mb-5">{t("footer.col.legal")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/impressum" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  {t("footer.link.imprint")}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  {t("footer.link.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  {t("footer.link.agb")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--signal-soft)] mb-5">Software für Gebäudereinigung</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/software-gebaeudereinigung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Software für Gebäudereinigung
                </Link>
              </li>
              <li>
                <Link href="/zeiterfassung-gebaeudereinigung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Zeiterfassung Gebäudereinigung
                </Link>
              </li>
              <li>
                <Link href="/nfc-zeiterfassung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  NFC Zeiterfassung
                </Link>
              </li>
              <li>
                <Link href="/einsatzplanung-reinigung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Einsatzplanung Reinigung
                </Link>
              </li>
              <li>
                <Link href="/leistungsnachweis-gebaeudereinigung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Leistungsnachweis Gebäudereinigung
                </Link>
              </li>
              <li>
                <Link href="/software-kleine-reinigungsfirma" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Software für kleine Reinigungsfirmen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--signal-soft)] mb-5">Branchen</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/loesungen" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Alle Branchenlösungen
                </Link>
              </li>
              <li>
                <Link href="/loesungen/unterhaltsreinigung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Unterhaltsreinigung
                </Link>
              </li>
              <li>
                <Link href="/loesungen/glasreinigung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Glasreinigung
                </Link>
              </li>
              <li>
                <Link href="/loesungen/industriereinigung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Industriereinigung
                </Link>
              </li>
              <li>
                <Link href="/loesungen/klinikreinigung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Klinikreinigung
                </Link>
              </li>
              <li>
                <Link href="/loesungen/hotel-housekeeping" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Hotel Housekeeping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--signal-soft)] mb-5">Vergleiche</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/vergleich/software-gebaeudereinigung" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Anbietervergleich 2026
                </Link>
              </li>
              <li>
                <Link href="/vergleich/zvoove-alternative" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Zvoove Alternative
                </Link>
              </li>
              <li>
                <Link href="/vergleich/blink-alternative" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Blink Alternative
                </Link>
              </li>
              <li>
                <Link href="/vergleich/mendato-alternative" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Mendato Alternative
                </Link>
              </li>
              <li>
                <Link href="/vergleich/fortytools-alternative" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  fortytools Alternative
                </Link>
              </li>
              <li>
                <Link href="/vergleich/plan-d-alternative" className="text-stone-300 hover:text-[var(--signal-soft)] transition-colors">
                  Plan-D Alternative
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--signal-soft)] mb-5">{t("footer.col.contact")}</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <Link
                  href="/support"
                  className="hover:text-white transition"
                >
                  {t("footer.link.supportContact")}
                </Link>
              </li>
              <li>fynn@taskeyapp.com</li>
              <li>+49 151 68488999</li>
              <li>In der Acht 44</li>
              <li>66333 Völklingen</li>
            </ul>
          </div>
        </div>

        {/* Wordmark watermark */}
        <div className="border-t border-white/8 py-10 sm:py-14 overflow-hidden">
          <div className="font-mono text-[14vw] sm:text-[12vw] md:text-[10vw] leading-[0.85] text-white/[0.04] select-none whitespace-nowrap tracking-tight uppercase">
            taskey · ops
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-7 flex flex-col md:flex-row justify-between items-center gap-3 text-stone-500 text-xs">
          <p className="font-mono">&copy; {new Date().getFullYear()} Taskey. {t("footer.rights")}</p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
            <Link href="/sitemap.xml" className="hover:text-[var(--signal-soft)] transition-colors">
              Sitemap
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('taskey-cookie-consent');
                window.location.reload();
              }}
              className="hover:text-[var(--signal-soft)] transition-colors cursor-pointer"
            >
              {t("footer.cookie")}
            </button>
            <span className="font-mono uppercase tracking-[0.18em]">{t("footer.madeIn")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
