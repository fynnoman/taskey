import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, type PostCategory } from "../posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `https://www.taskeyapp.com/news/${slug}`;
  const title = post.metaTitle ?? post.title;
  const description = post.metaDescription ?? post.summary;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Taskey",
      type: "article",
      ...(post.isoDate && { publishedTime: post.isoDate }),
      locale: "de_DE",
    },
  };
}

const categoryStyle: Record<PostCategory, { bg: string; text: string }> = {
  Update:      { bg: "bg-blue-100",   text: "text-blue-900" },
  Feature:     { bg: "bg-violet-100", text: "text-violet-900" },
  Release:     { bg: "bg-green-100",  text: "text-green-900" },
  Unternehmen: { bg: "bg-gray-100",   text: "text-gray-800" },
  Geplant:     { bg: "bg-amber-100",  text: "text-amber-800" },
  Blog:        { bg: "bg-emerald-100", text: "text-emerald-900" },
};

/** Render markdown-style **bold** within a text string */
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/** Check if a paragraph is a heading (starts with ## ) */
function isHeading(text: string) {
  return text.startsWith("## ");
}

/** Check if a paragraph is a blockquote (starts with > ) */
function isBlockquote(text: string) {
  return text.startsWith("> ");
}

/** Check if a paragraph is a table (starts with |||) */
function isTable(text: string) {
  return text.startsWith("|||");
}

/** Render a markdown-style table */
function renderTable(text: string) {
  const lines = text.split("\n").filter(l => l.startsWith("|"));
  // Skip the header marker line (|||)
  const dataLines = lines.filter(l => l !== "|||");
  
  return (
    <div className="overflow-x-auto my-8 rounded-2xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-950 text-white">
            <th className="text-left px-5 py-3.5 font-bold text-sm">Bereich</th>
            <th className="text-left px-5 py-3.5 font-bold text-sm">Vorher</th>
            <th className="text-left px-5 py-3.5 font-bold text-sm">Mit Taskey</th>
          </tr>
        </thead>
        <tbody>
          {dataLines.map((line, i) => {
            const cells = line.split("|").filter(Boolean);
            return (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {cells.map((cell, j) => (
                  <td key={j} className={`px-5 py-3 ${j === 0 ? "font-semibold text-gray-900" : j === 2 ? "text-emerald-700 font-bold" : "text-gray-500"}`}>
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const cs = categoryStyle[post.category];
  const paragraphs = post.body.split("\n\n").filter(Boolean);

  // Find prev/next
  const liveOnly = posts.filter((p) => !p.planned);
  const idx = liveOnly.findIndex((p) => p.slug === slug);
  const prev = liveOnly[idx + 1] ?? null;
  const next = liveOnly[idx - 1] ?? null;

  return (
    <main className="bg-white min-h-screen">

      {/* ── JSON-LD BlogPosting Schema ── */}
      {post.isoDate && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metaTitle ?? post.title,
              description: post.metaDescription ?? post.summary,
              datePublished: post.isoDate,
              author: {
                "@type": "Organization",
                name: "Taskey",
                url: "https://www.taskeyapp.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Taskey",
                url: "https://www.taskeyapp.com",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.taskeyapp.com/news/${slug}`,
              },
            }),
          }}
        />
      )}

      {/* ── BACK ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-0">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors"
        >
          ← Alle Posts
        </Link>
      </div>

      {/* ── HEADER ── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="flex items-center gap-3 mb-10">
          <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${cs.bg} ${cs.text}`}>
            {post.category}
          </span>
          <span className="text-gray-400 text-sm">{post.date}</span>
          {post.planned && (
            <span className="ml-2 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
              Noch nicht verfügbar
            </span>
          )}
        </div>

        <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black text-gray-900 leading-[0.9] tracking-tight mb-10">
          {post.title}
        </h1>

        <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed mb-14 border-b border-gray-100 pb-14">
          {post.summary}
        </p>

        {/* Hero Image Placeholder */}
        {post.heroImage ? (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 border border-gray-200">
            <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        ) : post.category === "Blog" && (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 flex items-center justify-center">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #1e40af 0%, transparent 50%), radial-gradient(circle at 70% 60%, #1e3a8a 0%, transparent 40%)' }} />
            <div className="relative z-10 text-center px-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                Case Study
              </div>
              <p className="text-white/60 text-sm font-medium max-w-md">Platz für ein Hero-Bild — Bild hier als heroImage in posts.ts hinterlegen</p>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="space-y-8">
          {paragraphs.map((para, i) =>
            isHeading(para) ? (
              <div key={i} className="pt-10 pb-2 border-t border-gray-100 mt-12 first:mt-0 first:border-t-0 first:pt-0">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                  {renderFormattedText(para.replace(/^## /, ""))}
                </h2>
              </div>
            ) : isBlockquote(para) ? (
              <blockquote
                key={i}
                className="relative bg-gray-50 border-l-4 border-blue-900 rounded-r-2xl px-8 py-10 my-14"
              >
                <svg className="absolute top-5 right-6 w-12 h-12 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic pr-12">
                  {renderFormattedText(para.replace(/^> /, ""))}
                </p>
              </blockquote>
            ) : isTable(para) ? (
              <div key={i} className="my-12">{renderTable(para)}</div>
            ) : para.startsWith("\u201E") || para.startsWith("„") ? (
              <div key={i} className="bg-blue-50/50 border border-blue-100 rounded-2xl px-7 py-6 my-6">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
                  {renderFormattedText(para)}
                </p>
              </div>
            ) : (
              <p key={i} className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                {renderFormattedText(para)}
              </p>
            )
          )}
        </div>

        {/* ── PREV / NEXT ── */}
        {(prev || next) && (
          <div className="mt-20 pt-10 border-t border-gray-100 grid sm:grid-cols-2 gap-6">
            {prev ? (
              <Link
                href={`/news/${prev.slug}`}
                className="group flex flex-col gap-2 p-6 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">← Älter</span>
                <span className="text-lg font-black text-gray-900 group-hover:text-blue-900 transition-colors leading-tight">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}
            {next && (
              <Link
                href={`/news/${next.slug}`}
                className="group flex flex-col gap-2 p-6 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all sm:text-right"
              >
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Neuer →</span>
                <span className="text-lg font-black text-gray-900 group-hover:text-blue-900 transition-colors leading-tight">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        )}
      </article>

      {/* ── CTA ── */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-3">
              Selbst ausprobieren.
            </h2>
            <p className="text-blue-300 text-lg">14 Tage kostenlos. Kein Risiko.</p>
          </div>
          <Link
            href="https://signup.vars-development.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 bg-white text-blue-900 text-lg font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl hover:scale-[1.02]"
          >
            Jetzt starten →
          </Link>
        </div>
      </section>

    </main>
  );
}
