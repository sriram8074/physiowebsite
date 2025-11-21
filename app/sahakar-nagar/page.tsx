import BranchPageContent from "@/components/BranchPageContent";
import JsonLd from "@/components/JsonLd";
import { branches } from "@/lib/data";
import type { Metadata } from "next";

const branch = branches.find((b) => b.slug === "sahakar-nagar")!;

export const metadata: Metadata = {
  title: branch.title,
  description: branch.metaDescription,
  keywords: branch.keywords,
  openGraph: {
    title: `${branch.title} | MyPhysioFix`,
    description: branch.metaDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: branch.title,
  address: branch.address,
  telephone: branch.phones[0],
  url: `https://myphysiofix.com/${branch.slug}`,
  openingHours: branch.hours,
  geo: {
    "@type": "GeoCoordinates",
    latitude: branch.coordinates.lat,
    longitude: branch.coordinates.lng,
  },
};

export default function SahakarNagarPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <BranchPageContent branch={branch} />
    </>
  );
}
