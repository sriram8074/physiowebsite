import Image from "next/image";
import { notFound } from "next/navigation";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/data";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | MyPhysioFix`,
      description: service.metaDescription,
    },
  };
}

export default function ServiceDetails({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: `${service.title} - MyPhysioFix`,
    description: service.metaDescription,
    areaServed: "Bangalore",
    medicalSpecialty: service.title,
    url: `https://myphysiofix.com/services/${service.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="space-y-12 py-12">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              {service.title}
            </p>
            <h1 className="text-4xl font-bold text-slate-900">
              {service.title} in Bangalore
            </h1>
            <p className="text-lg text-slate-700">{service.description}</p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/contact" label="Book this service" />
              <CTAButton
                href="https://wa.me/919108110387"
                label="Ask a question"
                variant="ghost"
              />
            </div>
          </div>
          <div className="card overflow-hidden rounded-3xl">
            <Image
              src={service.image}
              alt={service.title}
              width={900}
              height={650}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </Container>

        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="card rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              What to expect
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {service.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Treatments you may receive
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {service.treatments.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-100 bg-white px-3 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <Container className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Ready for change
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Start {service.title} with a clear roadmap
              </h3>
              <p className="mt-2 max-w-2xl text-slate-200">
                We blend hands-on therapy, corrective exercise, and progress
                tracking so you stay motivated week after week.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/contact" label="Book now" />
              <CTAButton
                href="tel:+919108110387"
                label="Call a therapist"
                variant="ghost"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
