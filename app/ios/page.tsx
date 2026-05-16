import type { Metadata } from "next";
import IOSClient from "./ios-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "iOS App – Taskey für iPhone & iPad",
  description:
    "Die Taskey App für iOS: Zeiterfassung, NFC-Scans, Aufgaben und Kommunikation – alles in einer App fürs iPhone.",
  alternates: { canonical: "https://www.taskeyapp.com/ios" },
  openGraph: {
    title: "iOS App – Taskey für iPhone & iPad",
    description:
      "Die Taskey App für iOS: Zeiterfassung, NFC-Scans, Aufgaben und Kommunikation – alles in einer App fürs iPhone.",
    url: "https://www.taskeyapp.com/ios",
  },
};

export default function IOSPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "iOS App", url: "https://www.taskeyapp.com/ios" },
      ]} />
      <IOSClient />
    </>
  )
}
