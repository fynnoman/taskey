import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/videos";

const META_COPY: PageCopy = {
  de: {
    title: "Erklärungsvideos | Taskey",
    description:
      "Weitere Erklärungsvideos zu Taskey: NFC-Tags einrichten und Überblick über die Mobile App.",
  },
  en: {
    title: "Erklärungsvideos | Taskey",
    description:
      "Weitere Erklärungsvideos zu Taskey: NFC-Tags einrichten und Überblick über die Mobile App.",
  },
  fr: {
    title: "Erklärungsvideos | Taskey",
    description:
      "Weitere Erklärungsvideos zu Taskey: NFC-Tags einrichten und Überblick über die Mobile App.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META_COPY,
    locale: pickLocale(locale),
    path,
  });
}

type VideoEntry = {
  title: string;
  description: string;
  src: string;
};

const VIDEOS: VideoEntry[] = [
  {
    title: "NFC-Tags einrichten",
    description:
      "Schritt für Schritt: NFC-Tags am Objekt anbringen, in Taskey registrieren und für die Zeiterfassung scharfschalten.",
    src: "/videos/nfc-tags-einrichten.mp4",
  },
  {
    title: "Überblick zur Mobile App",
    description:
      "Allgemeine Einführung in die Taskey Mobile App – wichtigste Funktionen, Navigation und Alltagsabläufe für dein Team.",
    src: "/videos/mobile-app-ueberblick.mp4",
  },
];

export default function VideosPage() {
  return (
    <main className="relative min-h-screen bg-slate-950 py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[55%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 text-sm transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Zur Startseite</span>
          </Link>
        </div>

        <h1 className="text-center text-white/90 text-3xl md:text-4xl font-black tracking-tight mb-3">
          Erklärungsvideos
        </h1>
        <p className="text-center text-white/60 text-sm md:text-base mb-12 md:mb-16 max-w-2xl mx-auto">
          Zwei kurze Videos zu zentralen Themen rund um Taskey – einfach abspielen und mitschauen.
        </p>

        <div className="space-y-12 md:space-y-16">
          {VIDEOS.map((video) => (
            <article key={video.src}>
              <h2 className="text-white/90 text-xl md:text-2xl font-bold tracking-tight mb-2">
                {video.title}
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-5 max-w-2xl">
                {video.description}
              </p>
              <div className="relative mx-auto aspect-video w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-black ring-1 ring-white/5">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover bg-black"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
