"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { href: "/features",        label: t("nav.features") },
    { href: "/pricing",         label: t("nav.pricing") },
    { href: "/news",            label: "News" },
    { href: "/partnerschaften", label: "Partner werden" },
    { href: "/about",           label: t("nav.about") },
  ];

  const isActive = (href: string) => pathname === href;

  // Erkennt ob die Hero-Sektion komplett weggescrollt ist.
  // Sobald wir IN der nächsten Section sind → Navbar smooth oben einklappen.
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>("[data-hero-section]");
      const triggerY = hero ? hero.offsetTop + hero.offsetHeight - 80 : 600;
      setScrolledPastHero(window.scrollY > triggerY);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      {/* ─── Top-Layer Header: über Hero schwebend (absolute, transparent) ─── */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-transparent text-white">
        <NavInner
          navLinks={navLinks}
          isActive={isActive}
          t={t}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          tone="onDark"
        />
      </header>

      {/* ─── Sticky Header: klappt smooth ein, sobald past Hero ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-950/85 backdrop-blur-xl border-b border-white/10 text-white transition-transform duration-500 ease-out ${
          scrolledPastHero ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!scrolledPastHero}
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
    </>
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
          <span className="text-xl font-bold text-white">TASKEY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition font-medium ${
                isActive(link.href)
                  ? "text-cyan-300 font-bold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://taskey.vars-development.com/support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition font-medium"
          >
            {t("nav.support")}
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <LanguageSwitcher />
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-white/80 hover:text-white transition font-medium"
          >
            Login
          </Link>
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition font-semibold shadow-lg shadow-cyan-500/20"
          >
            {t("nav.tryFree")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
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
        <div className="lg:hidden border-t border-white/10 py-4 bg-gray-950/95 backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition ${
                  isActive(link.href)
                    ? "text-cyan-300 bg-white/5 font-bold"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://taskey.vars-development.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.support")}
            </a>
            <div className="pt-4 px-4 space-y-2">
              <div className="flex justify-start pb-1">
                <LanguageSwitcher />
              </div>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-center text-white/80 hover:bg-white/5 hover:text-white rounded-lg transition font-medium border border-white/15"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition font-semibold shadow-lg shadow-cyan-500/20"
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
