import Link from "next/link";
import { brand, branches } from "@/lib/data";
import Container from "./Container";
import CTAButton from "./CTAButton";

export default function Footer() {
  const [sahakar, kalyan] = branches;

  return (
    <footer className="mt-16 border-t border-white/40 bg-gradient-to-b from-white/80 to-white py-12 text-sm text-slate-700">
      <Container className="grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">
            MyPhysioFix Clinics
          </h3>
          <p className="max-w-sm">
            Premium physiotherapy across Bangalore with specialist-led care,
            transparent plans, and modern clinics designed for comfort.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="https://wa.me/919108110387" label="Chat on WhatsApp" />
            <CTAButton
              href="/contact"
              label="Book an appointment"
              variant="ghost"
            />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-base font-semibold text-slate-900">
            Sahakar Nagar
          </h4>
          <p className="text-slate-600">{sahakar.address}</p>
          <div className="space-y-1">
            {sahakar.phones.map((phone) => (
              <Link
                key={phone}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="block font-semibold text-slate-900 hover:text-brand-blue"
              >
                {phone}
              </Link>
            ))}
          </div>
          <Link
            href={sahakar.mapUrl}
            className="text-brand-blue underline underline-offset-4"
          >
            Get directions
          </Link>
        </div>

        <div className="space-y-3">
          <h4 className="text-base font-semibold text-slate-900">Kalyan Nagar</h4>
          <p className="text-slate-600">{kalyan.address}</p>
          <div className="space-y-1">
            {kalyan.phones.map((phone) => (
              <Link
                key={phone}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="block font-semibold text-slate-900 hover:text-brand-blue"
              >
                {phone}
              </Link>
            ))}
          </div>
          <Link
            href={kalyan.mapUrl}
            className="text-brand-blue underline underline-offset-4"
          >
            Get directions
          </Link>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-brand-blue">
            Privacy (coming soon)
          </Link>
          <Link href="/terms" className="hover:text-brand-blue">
            Terms (coming soon)
          </Link>
        </div>
      </Container>
    </footer>
  );
}
