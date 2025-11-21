import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myphysiofix.com"),
  title: {
    default: "MyPhysioFix Physiotherapy Clinics in Bangalore",
    template: "%s | MyPhysioFix",
  },
  description:
    "Premium physiotherapy and rehabilitation clinics in Sahakar Nagar and Kalyan Nagar, Bangalore. Book orthopaedic, neuro, sports, paediatric, women’s health, and geriatric physiotherapy today.",
  openGraph: {
    title: "MyPhysioFix Physiotherapy Clinics in Bangalore",
    description:
      "Expert physiotherapy in Sahakar Nagar and Kalyan Nagar with advanced modalities, senior therapists, and personalised recovery roadmaps.",
    url: "https://myphysiofix.com",
    siteName: "MyPhysioFix",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyPhysioFix Physiotherapy Clinics Bangalore",
    description:
      "Personalised physiotherapy for pain relief, recovery, and performance in Bangalore.",
  },
};

export const viewport: Viewport = {
  themeColor: "#4BB4E6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} bg-background text-foreground`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
