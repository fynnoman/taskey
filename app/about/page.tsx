import type { Metadata } from "next";
import AboutClient from "./about-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Über uns – Taskey",
  description:
    "Wer hinter Taskey steckt: unser Team, unsere Mission und warum wir Reinigung & Facility Management digitalisieren.",
  alternates: { canonical: "https://www.taskeyapp.com/about" },
  openGraph: {
    title: "Über uns – Taskey",
    description:
      "Wer hinter Taskey steckt: unser Team, unsere Mission und warum wir Reinigung & Facility Management digitalisieren.",
    url: "https://www.taskeyapp.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Über uns", url: "https://www.taskeyapp.com/about" },
      ]} />
      <AboutClient />
    </>
  )
}
