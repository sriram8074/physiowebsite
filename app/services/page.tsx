import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapy Services in Bangalore",
  description:
    "Orthopaedic, neuro, sports, paediatric, women’s health, and geriatric physiotherapy delivered by senior therapists at MyPhysioFix clinics in Bangalore.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-14 py-12">
      <Container className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          Services
        </p>
        <h1 className="text-4xl font-bold text-slate-900">
          Every service, delivered with specialist focus
        </h1>
        <p className="max-w-3xl text-slate-700">
          We blend hands-on therapy, movement coaching, and clear milestones so
          you can see progress after each session. Choose the service that fits
          your needs or book an evaluation and we’ll recommend the right plan.
        </p>
        <div className="flex flex-wrap gap-3">
          <CTAButton href="/contact" label="Book an evaluation" />
          <CTAButton
            href="https://wa.me/919108110387"
            label="Chat on WhatsApp"
            variant="ghost"
          />
        </div>
      </Container>

      <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </Container>

      <Container className="rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-slate-900">
          Not sure where to start?
        </h2>
        <p className="mt-2 max-w-3xl text-slate-700">
          Book a 30-minute assessment. We’ll evaluate your movement, understand
          your goals, and suggest the exact plan and number of sessions you
          need.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CTAButton href="tel:+919108110387" label="Call Sahakar Nagar" />
          <CTAButton
            href="tel:+9180882533291"
            label="Call Kalyan Nagar"
            variant="secondary"
          />
        </div>
      </Container>
    </div>
  );
}
