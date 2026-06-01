import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { posts, type PostCategory } from "../posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.filter((p) => !p.planned).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "News" };
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.summary,
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.metaDescription ?? post.summary,
      type: "article",
      publishedTime: post.isoDate,
      images: post.heroImage ? [{ url: post.heroImage }] : undefined,
    },
  };
}

const categoryStyle: Record<PostCategory, { label: string; tone: string }> = {
  Update:      { label: "Update",      tone: "bg-cyan-50 border-cyan-300 text-blue-700" },
  Feature:     { label: "Feature",     tone: "bg-violet-500/10 border-violet-400/30 text-violet-300" },
  Release:     { label: "Release",     tone: "bg-emerald-50 border-emerald-300 text-emerald-700" },
  Unternehmen: { label: "Unternehmen", tone: "bg-blue-50 border-slate-200 text-slate-600" },
  Geplant:     { label: "Geplant",     tone: "bg-amber-500/10 border-amber-400/30 text-amber-300" },
  Blog:        { label: "Blog",        tone: "bg-emerald-50 border-emerald-300 text-emerald-700" },
};

// ──────────────────────────────────────────────────────────────
// Inline-Formatierung: **bold**, *italic*, deutsche „Anführung"
// ──────────────────────────────────────────────────────────────
function renderFormattedText(text: string): React.ReactNode[] {
  // Replace ASCII " quotes around words with German „..." typographic quotes (only on segments without already-typed)
  const out: React.ReactNode[] = [];
  // Split on **bold** first
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  parts.forEach((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      out.push(
        <strong key={`b-${i}`} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    } else {
      out.push(<span key={`t-${i}`}>{part}</span>);
    }
  });
  return out;
}

function isHeading(line: string) {
  return /^#{1,3}\s/.test(line);
}
function isBlockquote(line: string) {
  return /^>\s/.test(line);
}
function isTableLine(line: string) {
  return /^\|.+\|$/.test(line.trim());
}
function isOrderedListItem(line: string) {
  return /^\d+\.\s/.test(line);
}
function isUnorderedListItem(line: string) {
  return /^[-*]\s/.test(line);
}

function renderTable(lines: string[], keyBase: string) {
  // lines: each line "| col | col |"
  const rows = lines.map((l) =>
    l
      .trim()
      .replace(/^\||\|$/g, "")
      .split("|")
      .map((c) => c.trim())
  );
  // Skip alignment row like | --- | --- |
  const filtered = rows.filter((r) => !r.every((c) => /^:?-{2,}:?$/.test(c)));
  if (filtered.length === 0) return null;
  const [header, ...body] = filtered;

  return (
    <div key={keyBase} className="my-8 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-cyan-50">
            {header.map((cell, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 font-bold text-blue-700 border-b border-slate-200"
              >
                {renderFormattedText(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rIdx) => (
            <tr
              key={rIdx}
              className={rIdx % 2 === 0 ? "bg-blue-50/60" : "bg-blue-50/60"}
            >
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className="px-4 py-3 text-slate-600 border-b border-slate-200/60 align-top"
                >
                  {renderFormattedText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBody(body: string) {
  // Split on blank lines to get logical blocks, but tables span multiple consecutive lines
  const lines = body.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Table
    if (isTableLine(line)) {
      const tableLines: string[] = [];
      while (i < lines.length && isTableLine(lines[i])) {
        tableLines.push(lines[i]);
        i++;
      }
      const t = renderTable(tableLines, `tbl-${key++}`);
      if (t) blocks.push(t);
      continue;
    }

    // Heading
    if (isHeading(line)) {
      const m = line.match(/^(#{1,3})\s+(.*)$/);
      if (m) {
        const level = m[1].length;
        const text = m[2];
        if (level === 1) {
          blocks.push(
            <h2 key={`h-${key++}`} className="text-3xl md:text-4xl font-black text-slate-900 mt-14 mb-5 leading-tight">
              {renderFormattedText(text)}
            </h2>
          );
        } else if (level === 2) {
          blocks.push(
            <h3 key={`h-${key++}`} className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-4 leading-tight">
              {renderFormattedText(text)}
            </h3>
          );
        } else {
          blocks.push(
            <h4 key={`h-${key++}`} className="text-xl md:text-2xl font-bold text-blue-700 mt-10 mb-3">
              {renderFormattedText(text)}
            </h4>
          );
        }
      }
      i++;
      continue;
    }

    // Blockquote (consecutive)
    if (isBlockquote(line)) {
      const quoteLines: string[] = [];
      while (i < lines.length && isBlockquote(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(
        <blockquote
          key={`q-${key++}`}
          className="my-8 pl-6 pr-5 py-5 rounded-r-2xl border-l-4 border-cyan-400 bg-blue-50/60 text-slate-700 italic text-lg leading-relaxed"
        >
          {quoteLines.join(" ")}
        </blockquote>
      );
      continue;
    }

    // Ordered list (consecutive)
    if (isOrderedListItem(line)) {
      const items: string[] = [];
      while (i < lines.length && isOrderedListItem(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push(
        <ol key={`ol-${key++}`} className="my-6 space-y-2.5 list-decimal list-outside pl-6 text-slate-600 text-base md:text-lg leading-relaxed marker:text-blue-600 marker:font-bold">
          {items.map((it, idx) => (
            <li key={idx}>{renderFormattedText(it)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Unordered list
    if (isUnorderedListItem(line)) {
      const items: string[] = [];
      while (i < lines.length && isUnorderedListItem(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push(
        <ul key={`ul-${key++}`} className="my-6 space-y-2.5 list-disc list-outside pl-6 text-slate-600 text-base md:text-lg leading-relaxed marker:text-blue-600">
          {items.map((it, idx) => (
            <li key={idx}>{renderFormattedText(it)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Default: paragraph (collect until blank line / structural)
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !isHeading(lines[i]) &&
      !isBlockquote(lines[i]) &&
      !isTableLine(lines[i]) &&
      !isOrderedListItem(lines[i]) &&
      !isUnorderedListItem(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={`p-${key++}`} className="my-5 text-slate-600 text-base md:text-lg leading-[1.75]">
        {renderFormattedText(paraLines.join(" "))}
      </p>
    );
  }

  return blocks;
}

export default async function NewsPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post || post.planned) notFound();

  const livePosts = posts.filter((p) => !p.planned);
  const idx = livePosts.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? livePosts[idx - 1] : null;
  const next = idx < livePosts.length - 1 ? livePosts[idx + 1] : null;

  const cs = categoryStyle[post.category];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.isoDate ?? post.date,
    dateModified: post.isoDate ?? post.date,
    inLanguage: "de-DE",
    author: {
      "@type": "Organization",
      name: "Taskey",
      url: "https://www.taskeyapp.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Taskey",
      logo: { "@type": "ImageObject", url: "https://www.taskeyapp.com/logobittt.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.taskeyapp.com/news/${post.slug}`,
    },
    image: post.heroImage
      ? [`https://www.taskeyapp.com${post.heroImage}`]
      : [`https://www.taskeyapp.com/opengraph-image`],
  };

  return (
    <main className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.06),transparent_60%)] pointer-events-none" />

      {/* ─── HEADER ────────────────────────────────────── */}
      <article className="relative pt-28 md:pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Alle News
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span
              className={`inline-flex text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border ${cs.tone}`}
            >
              {cs.label}
            </span>
            <span className="text-slate-500 text-xs sm:text-sm">{post.date}</span>
          </div>

          <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed pb-10 border-b border-slate-200">
            {post.summary}
          </p>
        </div>

        {/* Hero Image */}
        {post.heroImage ? (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 aspect-[16/9]">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        ) : post.category === "Blog" ? (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 aspect-[16/9] bg-gradient-to-br from-white via-blue-50 to-white">
              <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[64px]" />
              <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[64px]" />
            </div>
          </div>
        ) : null}

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
          {renderBody(post.body)}
        </div>
      </article>

      {/* ─── PREV / NEXT ───────────────────────────────── */}
      {(prev || next) && (
        <section className="relative pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/news/${prev.slug}`}
                  className="group rounded-2xl bg-blue-50/60 hover:bg-blue-50 border border-slate-200 hover:border-slate-300 backdrop-blur-sm p-6 transition-all"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-2 block">
                    ← Vorheriger Beitrag
                  </span>
                  <span className="text-slate-900 font-bold group-hover:text-blue-700 transition-colors leading-snug block">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/news/${next.slug}`}
                  className="group rounded-2xl bg-blue-50/60 hover:bg-blue-50 border border-slate-200 hover:border-slate-300 backdrop-blur-sm p-6 transition-all sm:text-right"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-2 block">
                    Nächster Beitrag →
                  </span>
                  <span className="text-slate-900 font-bold group-hover:text-blue-700 transition-colors leading-snug block">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── BOTTOM CTA ────────────────────────────────── */}
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
