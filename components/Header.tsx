"use client";

import Link from "next/link";
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
    { href: "/features", label: t("nav.features") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/news", label: "News" },
    { href: "/partnerschaften", label: "Partner werden" },
    { href: "/about", label: t("nav.about") },
  ];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    if (!isHomepage) {
      setHidden(false);
      setSolid(true);
      return;
    }
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight || 800;
      setSolid(y > 40);
      setHidden(y > vh * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, isHomepage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-[var(--ink)] transition-[transform,background-color,backdrop-filter,border-color] duration-500 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        solid
          ? "bg-[var(--background)]/85 backdrop-blur-xl border-b border-[var(--border-soft)]"
          : "bg-transparent border-b border-transparent"
      }`}
      aria-hidden={isHomepage ? hidden : false}
    >
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Wordmark + DIN-stamp tagline */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Taskey Startseite">
            <Image
              src="/logo_transparent.png"
              alt="Taskey Logo - Reinigungssoftware"
              width={64}
              height={64}
              className="h-11 w-11 sm:h-12 sm:w-12 object-contain"
              priority
              sizes="64px"
            />
            <div className="flex items-baseline gap-2">
              <span className="text-[1.15rem] sm:text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                TASKEY
              </span>
              <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--foreground-soft)] border-l border-[var(--border-strong)] pl-2 ml-1">
                DE · DACH
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group px-3 py-2 text-[13.5px] font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--ink)]"
                    : "text-[var(--foreground-muted)] hover:text-[var(--ink)]"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute inset-x-3 bottom-1 h-px transition-transform duration-300 origin-left ${
                    isActive(link.href)
                      ? "bg-[var(--signal)] scale-x-100"
                      : "bg-[var(--signal)] scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/support"
              className={`relative group px-3 py-2 text-[13.5px] font-medium transition-colors ${
                isActive("/support")
                  ? "text-[var(--ink)]"
                  : "text-[var(--foreground-muted)] hover:text-[var(--ink)]"
              }`}
            >
              <span className="relative z-10">{t("nav.support")}</span>
              <span
                className={`absolute inset-x-3 bottom-1 h-px transition-transform duration-300 origin-left ${
                  isActive("/support")
                    ? "bg-[var(--signal)] scale-x-100"
                    : "bg-[var(--signal)] scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <LanguageSwitcher />
            <Link
              href="https://dashboard.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[13px] font-medium text-[var(--foreground-muted)] hover:text-[var(--ink)] transition-colors"
            >
              Login
            </Link>
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--ink)] hover:bg-[var(--ink-soft)] text-[var(--background)] text-[13px] font-semibold shadow-[0_4px_14px_-4px_rgba(12,14,16,0.4)] hover:shadow-[0_8px_22px_-6px_rgba(12,14,16,0.5)] hover:-translate-y-[1px] transition-all duration-300"
            >
              <span>{t("nav.tryFree")}</span>
              <span className="text-[var(--signal-soft)] transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-[var(--ink)] rounded-md hover:bg-[var(--background-deep)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--border-soft)] py-3 bg-[var(--background)]/95 backdrop-blur-xl">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors text-[15px] font-medium flex items-center justify-between ${
                    isActive(link.href)
                      ? "text-[var(--ink)] bg-[var(--background-deep)]"
                      : "text-[var(--foreground-muted)] hover:bg-[var(--background-deep)] hover:text-[var(--ink)]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[var(--foreground-soft)] text-sm">↗</span>
                </Link>
              ))}
              <Link
                href="/support"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[var(--foreground-muted)] hover:bg-[var(--background-deep)] hover:text-[var(--ink)] transition-colors text-[15px] font-medium flex items-center justify-between"
              >
                <span>{t("nav.support")}</span>
                <span className="text-[var(--foreground-soft)] text-sm">↗</span>
              </Link>
              <div className="pt-3 px-2 mt-2 border-t border-[var(--border-soft)] space-y-2">
                <div className="flex justify-start py-1">
                  <LanguageSwitcher />
                </div>
                <Link
                  href="https://dashboard.taskeyapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 text-center text-[var(--ink)] rounded-xl border border-[var(--border-strong)] hover:bg-[var(--background-deep)] transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="https://signup.taskeyapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 text-center bg-[var(--ink)] text-[var(--background)] rounded-xl font-semibold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.tryFree")} →
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
