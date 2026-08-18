import HomeShell from "@/components/home/redesign/HomeShell";

/**
 * Live home. `app/[locale]/page.tsx` re-exports this route.
 * The old copy remains untouched at `page.home.tsx` for archival reference.
 */
export default function HomePage() {
  return <HomeShell />;
}
