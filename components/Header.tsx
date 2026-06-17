"use client";

import Link from "@/components/LocaleLink";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(!isHomepage);

  const navLinks = [
    { href: "/features",        label: t("nav.features") },
    { href: "/pricing",         label: t("nav.pricing") },
    { href: "/news",            label: "News" },
    { href: "/partnerschaften", label: "Partner werden" },
    { href: "/about",           label: t("nav.about") },
  ];

  const isActive = (href: string) => pathname === href;

  // Revolut-Business-Verhalten:
  // 1) Navbar bleibt ganz oben fixed sichtbar während des gesamten Hero
  // 2) Sobald man weit in den Hero scrollt (≈ "Feld & Büro" – Bereich), gleitet sie smooth nach oben weg
  // 3) Scrollt man zurück in den Hero, kommt sie wieder.
  useEffect(() => {
    if (!isHomepage) {
      setHidden(false);
      setSolid(true);
      return;
    }
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight || 800;
      // leicht eingedunkelter Hintergrund nach kurzem Scrollen für Lesbarkeit
      setSolid(y > 40);
      // einklappen sobald ~85% der Viewporthöhe gescrollt wurde (≈ Ende Hero)
      setHidden(y > vh * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, isHomepage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-slate-900 transition-[transform,background-color,backdrop-filter,border-color] duration-500 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        solid
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200"
          : "bg-transparent border-b border-transparent"
      }`}
      aria-hidden={isHomepage ? hidden : false}
    >
      <NavInner
        navLinks={navLinks}
        isActive={isActive}
        t={t}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        tone="onDark"
      />
    </header>
  );
}

/* ─── Inner Nav (wird in beiden Header-Layern wiederverwendet) ─── */
function NavInner({
  navLinks,
  isActive,
  t,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  navLinks: { href: string; label: string }[];
  isActive: (href: string) => boolean;
  t: (key: string) => string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  tone: "onDark";
}) {
  return (
    <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
      <div className="flex justify-between items-center h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Taskey Startseite">
          <Image
            src="/logo_transparent.png"
            alt="Taskey Logo - Reinigungssoftware"
            width={64}
            height={64}
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            priority
            sizes="64px"
          />
          <span className="text-xl font-bold text-slate-900">TASKEY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition font-medium ${
                isActive(link.href)
                  ? "text-blue-700 font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/support"
            className="text-slate-600 hover:text-slate-900 transition font-medium"
          >
            {t("nav.support")}
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <LanguageSwitcher />
          <Link
            href="https://dashboard.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-slate-300 hover:border-slate-400 text-slate-900 rounded-lg transition font-semibold hover:bg-blue-50"
          >
            Login
          </Link>
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 rounded-lg transition font-semibold shadow-lg shadow-cyan-500/20"
          >
            {t("nav.tryFree")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 py-4 bg-white/95 backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition ${
                  isActive(link.href)
                    ? "text-blue-700 bg-blue-50 font-bold"
                    : "text-slate-700 hover:bg-blue-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/support"
              className="px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-slate-900 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.support")}
            </Link>
            <div className="pt-4 px-4 space-y-2">
              <div className="flex justify-start pb-1">
                <LanguageSwitcher />
              </div>
              <Link
                href="https://dashboard.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-center text-slate-700 hover:bg-blue-50 hover:text-slate-900 rounded-lg transition font-medium border border-slate-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 rounded-lg transition font-semibold shadow-lg shadow-cyan-500/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.tryFree")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
