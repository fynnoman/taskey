"use client";

import NextLink, { type LinkProps } from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = Omit<LinkProps, "href"> &
  Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps | "href"> & {
    href: string;
    children?: ReactNode;
  };

/**
 * Drop-in replacement for next/link that prefixes internal hrefs with the
 * active locale (no prefix for the default locale "de").
 *
 *   /en/<active> → href="/features"     → /en/features
 *   /fr/<active> → href="/features"     → /fr/features
 *   /<active>    → href="/features"     → /features
 *
 * External hrefs (http(s), mailto, tel, anchors, protocol-relative) pass
 * through unchanged.
 */
export default function LocaleLink({ href, ...rest }: Props) {
  const { language } = useLanguage();

  const isExternal =
    typeof href !== "string" ||
    /^(https?:)?\/\//.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  let resolved = href;
  if (!isExternal && language !== "de") {
    const normalized = href.startsWith("/") ? href : `/${href}`;
    resolved = `/${language}${normalized}`;
  }

  return <NextLink href={resolved} {...rest} />;
}
