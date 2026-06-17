import type { Post, Locale } from "./posts";
import { getPostTranslation } from "./translations";

export function getLocalizedPost(post: Post, locale: Locale): {
  title: string;
  summary: string;
  body: string;
  metaTitle?: string;
  metaDescription?: string;
  date: string;
} {
  if (locale === "de") {
    return {
      title: post.title,
      summary: post.summary,
      body: post.body,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      date: post.date,
    };
  }
  const t = getPostTranslation(post.slug, locale);
  return {
    title: t?.title ?? post.title,
    summary: t?.summary ?? post.summary,
    body: t?.body ?? post.body,
    metaTitle: t?.metaTitle ?? post.metaTitle,
    metaDescription: t?.metaDescription ?? post.metaDescription,
    date: t?.date ?? post.date,
  };
}

/** Returns true if the body shown is the original German fallback (not yet translated). */
export function isBodyFallback(post: Post, locale: Locale): boolean {
  if (locale === "de") return false;
  return getPostTranslation(post.slug, locale)?.body === undefined;
}
