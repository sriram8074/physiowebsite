import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import { branches } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MyPhysioFix",
  description:
    "Book physiotherapy at MyPhysioFix clinics in Bangalore. Call Sahakar Nagar or Kalyan Nagar, WhatsApp our care team, or request a call back.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact MyPhysioFix",
  url: "https://myphysiofix.com/contact",
  telephone: "+91-9108110387",
  contactOption: "TollFree",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="space-y-12 py-12">
        <Container className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            Talk to a physiotherapist today
          </h1>
          <p className="max-w-3xl text-slate-700">
            Choose the clinic closest to you or send us a note. We’ll respond in
            under an hour during business hours.
          </p>
        </Container>

        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-slate-900">Call us</h2>
            <div className="mt-3 space-y-2 text-sm font-semibold text-slate-900">
              <a href="tel:+919108110387" className="hover:text-brand-blue">
                Sahakar Nagar: +91 91081 10387
              </a>
              <a href="tel:+9180882533291" className="hover:text-brand-blue">
                Kalyan Nagar: +91 808825 33291
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-700">
              Mon–Sat: 7:00 AM – 9:00 PM · Sun: 8:00 AM – 1:00 PM
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CTAButton href="tel:+919108110387" label="Call Sahakar Nagar" />
              <CTAButton
                href="tel:+9180882533291"
                label="Call Kalyan Nagar"
                variant="ghost"
              />
            </div>
          </div>

          <div className="card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              WhatsApp & email
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Message us for quick clarifications or to share reports.
            </p>
            <div className="mt-3 space-y-2 text-sm font-semibold text-slate-900">
              <a
                href="https://wa.me/919108110387"
                className="block hover:text-brand-blue"
              >
                WhatsApp: +91 91081 10387
              </a>
              <a
                href="mailto:care@myphysiofix.com"
                className="block text-brand-blue"
              >
                care@myphysiofix.com
              </a>
            </div>
            <CTAButton
              className="mt-4"
              href="https://wa.me/919108110387"
              label="Start WhatsApp chat"
            />
          </div>

          <div className="card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Request a call back
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Share your contact and preferred time. We’ll call to schedule your
              evaluation.
            </p>
            <form
              className="mt-4 space-y-3"
              action="https://formspree.io/f/xrbgjnvq"
              method="POST"
            >
              <label className="block text-sm font-medium text-slate-800">
                Name
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-blue"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium text-slate-800">
                Phone
                <input
                  name="phone"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-blue"
                  placeholder="+91"
                />
              </label>
              <label className="block text-sm font-medium text-slate-800">
                Preferred time
                <input
                  name="preferred_time"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-blue"
                  placeholder="E.g., today 6–7 PM"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                Request call back
              </button>
            </form>
          </div>
        </Container>

        <Container className="grid gap-6 lg:grid-cols-2">
          {branches.map((branch) => (
            <div key={branch.slug} className="card rounded-2xl p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {branch.title}
                </h3>
                <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                  Bangalore
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-700">{branch.address}</p>
              <p className="mt-1 text-xs text-slate-500">{branch.hours}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold text-slate-900">
                {branch.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="rounded-full bg-slate-100 px-3 py-1 hover:text-brand-blue"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <CTAButton
                  href={branch.mapUrl}
                  label="Directions"
                  variant="secondary"
                />
                <CTAButton
                  href={`https://wa.me/${branch.whatsapp.replace(/[+ ]/g, "")}`}
                  label="WhatsApp"
                  variant="ghost"
                />
              </div>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}
