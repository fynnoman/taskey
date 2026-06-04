'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-20 bg-slate-900 text-white overflow-hidden">
      {/* Background PNG */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/hero-app-mockup.webp"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.1 }}
          loading="lazy"
          quality={75}
          sizes="100vw"
        />
      </div>

      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1" fill="white" opacity="0.07" />
            </pattern>
            <linearGradient id="footer-dot-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="footer-dot-mask">
              <rect width="100%" height="100%" fill="url(#footer-dot-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)" mask="url(#footer-dot-mask)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* USP Hero im Footer */}
        <div className="pt-16 sm:pt-20 pb-10 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-blue-400 uppercase">
              Taskey-USP
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight max-w-4xl mb-5">
            Die beste Kommunikation zwischen{" "}
            <span className="text-blue-400">Einsatzort</span> und{" "}
            <span className="text-blue-400">Büro</span>.
          </h3>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Taskey ist nicht nur eine Software — Taskey ist der Vermittler für Infos, die Ihr Team
            vor Ort sammelt. Defekte, Einsatzstunden, Probleme, Material. Das Büro bekommt alles in
            Echtzeit und kann sofort entscheiden.
          </p>
        </div>

        {/* Zweiter USP-Block: Alles in einem System */}
        <div className="pt-10 pb-10 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-emerald-400 uppercase">
              Taskey-USP · Alles in einem System
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight max-w-4xl mb-5">
            Eine <span className="text-emerald-400">Software</span> statt{" "}
            <span className="line-through text-slate-400">fünf Abos</span>.
          </h3>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Zeiterfassung, Einsatzplanung, Auftragsverwaltung, Objektdokumentation, Angebote,
            Rechnungen und DATEV-Export — in einer Plattform. Ein Login, ein Datenmodell, eine
            Rechnung. Schluss mit dem Tool-Zoo und Excel als Klammer dazwischen.
          </p>
        </div>

        {/* Top section — big branding */}
        <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 border-b border-slate-800">
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
            <h2 className="text-3xl sm:text-4xl font-bold">Taskey</h2>
          </div>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10 md:gap-8 py-16 sm:py-20">
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">{t("footer.col.product")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/features" className="text-slate-300 hover:text-white transition">
                  {t("footer.link.features")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-300 hover:text-white transition">
                  {t("footer.link.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/ios" className="text-slate-300 hover:text-white transition">
                  iOS App
                </Link>
              </li>
              <li>
                <Link href="/nfc" className="text-slate-300 hover:text-white transition">
                  NFC-Objektnachweis
                </Link>
              </li>
              <li>
                <Link href="/pricing#enterprise" className="text-slate-300 hover:text-white transition">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">{t("footer.col.company")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition">
                  {t("footer.link.about")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-white transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="/partnerschaften" className="text-slate-300 hover:text-white transition">
                  Partnerschaften
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-slate-300 hover:text-white transition"
                >
                  {t("footer.link.support")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">{t("footer.col.legal")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/impressum" className="text-slate-300 hover:text-white transition">
                  {t("footer.link.imprint")}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-slate-300 hover:text-white transition">
                  {t("footer.link.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-slate-300 hover:text-white transition">
                  {t("footer.link.agb")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">Software für Gebäudereinigung</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/software-gebaeudereinigung" className="text-slate-300 hover:text-white transition">
                  Software für Gebäudereinigung
                </Link>
              </li>
              <li>
                <Link href="/zeiterfassung-gebaeudereinigung" className="text-slate-300 hover:text-white transition">
                  Zeiterfassung Gebäudereinigung
                </Link>
              </li>
              <li>
                <Link href="/nfc-zeiterfassung" className="text-slate-300 hover:text-white transition">
                  NFC Zeiterfassung
                </Link>
              </li>
              <li>
                <Link href="/einsatzplanung-reinigung" className="text-slate-300 hover:text-white transition">
                  Einsatzplanung Reinigung
                </Link>
              </li>
              <li>
                <Link href="/leistungsnachweis-gebaeudereinigung" className="text-slate-300 hover:text-white transition">
                  Leistungsnachweis Gebäudereinigung
                </Link>
              </li>
              <li>
                <Link href="/software-kleine-reinigungsfirma" className="text-slate-300 hover:text-white transition">
                  Software für kleine Reinigungsfirmen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">Branchen</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/loesungen" className="text-slate-300 hover:text-white transition">
                  Alle Branchenlösungen
                </Link>
              </li>
              <li>
                <Link href="/loesungen/unterhaltsreinigung" className="text-slate-300 hover:text-white transition">
                  Unterhaltsreinigung
                </Link>
              </li>
              <li>
                <Link href="/loesungen/glasreinigung" className="text-slate-300 hover:text-white transition">
                  Glasreinigung
                </Link>
              </li>
              <li>
                <Link href="/loesungen/industriereinigung" className="text-slate-300 hover:text-white transition">
                  Industriereinigung
                </Link>
              </li>
              <li>
                <Link href="/loesungen/klinikreinigung" className="text-slate-300 hover:text-white transition">
                  Klinikreinigung
                </Link>
              </li>
              <li>
                <Link href="/loesungen/hotel-housekeeping" className="text-slate-300 hover:text-white transition">
                  Hotel Housekeeping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">Vergleiche</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/vergleich/zvoove-alternative" className="text-slate-300 hover:text-white transition">
                  Zvoove Alternative
                </Link>
              </li>
              <li>
                <Link href="/vergleich/blink-alternative" className="text-slate-300 hover:text-white transition">
                  Blink Alternative
                </Link>
              </li>
              <li>
                <Link href="/vergleich/mendato-alternative" className="text-slate-300 hover:text-white transition">
                  Mendato Alternative
                </Link>
              </li>
              <li>
                <Link href="/vergleich/fortytools-alternative" className="text-slate-300 hover:text-white transition">
                  fortytools Alternative
                </Link>
              </li>
              <li>
                <Link href="/vergleich/plan-d-alternative" className="text-slate-300 hover:text-white transition">
                  Plan-D Alternative
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">{t("footer.col.contact")}</h4>
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

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Taskey. {t("footer.rights")}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link href="/sitemap.xml" className="hover:text-white transition text-xs">
              Sitemap
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('taskey-cookie-consent');
                window.location.reload();
              }}
              className="hover:text-white transition cursor-pointer"
            >
              {t("footer.cookie")}
            </button>
            <span className="text-slate-400">{t("footer.madeIn")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
