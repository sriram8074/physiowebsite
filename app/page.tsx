import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import BranchCard from "@/components/BranchCard";
import TestimonialList from "@/components/TestimonialList";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import {
  brand,
  branches,
  modalities,
  services,
  whyChooseUs,
} from "@/lib/data";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: brand.name,
    url: "https://myphysiofix.com",
    telephone: brand.phones[0],
    email: brand.email,
    areaServed: "Bangalore",
    serviceOfferings: services.map((service) => service.title),
  },
  ...branches.map((branch) => ({
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: branch.title,
    address: branch.address,
    telephone: branch.phones[0],
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.coordinates.lat,
      longitude: branch.coordinates.lng,
    },
    url: `https://myphysiofix.com/${branch.slug}`,
    openingHours: branch.hours,
    areaServed: "Bangalore",
  })),
];

export default function Home() {
  const [sahakar, kalyan] = branches;

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="relative overflow-hidden pb-24">
        <Container className="relative z-10 grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Better care. Faster recovery.
            </div>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              {brand.heroHeading}
            </h1>
            <p className="max-w-2xl text-lg text-slate-700">
              Personalised physiotherapy for pain relief, post-surgery recovery,
              and athletic performance. Two premium clinics in Sahakar Nagar and
              Kalyan Nagar, Bangalore.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/contact" label="Book an appointment" />
              <CTAButton
                href="tel:+919108110387"
                label="Call Sahakar Nagar"
                variant="secondary"
              />
              <CTAButton
                href="tel:+9180882533291"
                label="Call Kalyan Nagar"
                variant="ghost"
              />
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-700">
              <div className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">15k+</p>
                <p>Successful rehab sessions</p>
              </div>
              <div className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">4.9/5</p>
                <p>Average patient rating</p>
              </div>
              <div className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">2</p>
                <p>Clinics across Bangalore</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 top-6 h-20 w-20 rounded-full bg-brand-blue/20 blur-2xl" />
            <div className="absolute -right-10 -bottom-4 h-24 w-24 rounded-full bg-brand-green/20 blur-2xl" />
            <div className="card overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80"
                alt="Physiotherapist working with a patient"
                width={900}
                height={700}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="glass absolute -left-6 -bottom-6 max-w-xs rounded-2xl p-4 text-sm shadow-lg">
              <p className="font-semibold text-slate-900">Clinician’s note</p>
              <p className="text-slate-700">
                “We combine hands-on therapy, smart strength work, and honest
                education so progress feels clear after every session.”
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container className="space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Specialist care for every stage of recovery
            </h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              From acute pain relief to high-performance rehab, each pathway is
              delivered by therapists with deep expertise in the condition you
              are facing.
            </p>
          </div>
          <CTAButton href="/services" label="View all services" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>

      <Container className="mt-16 space-y-8 rounded-3xl bg-gradient-to-r from-brand-blue/10 via-white to-brand-green/10 p-8 shadow-inner lg:p-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Advanced modalities
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Modern tools that amplify great therapy
          </h2>
          <p className="max-w-3xl text-slate-700">
            Precision treatment rooms, neuro & balance tools, and strength
            corners built to accelerate recovery with measurable gains.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modalities.map((item) => (
            <div
              key={item.title}
              className="card h-full rounded-2xl p-5 text-sm text-slate-700"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="mt-16 space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Why patients choose us
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Clear roadmaps. Calm clinics. Real results.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="card rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="mt-16 space-y-8">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              Clinics
            </p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Two premium clinics in Bangalore
            </h2>
            <p className="max-w-2xl text-slate-700">
              Choose the location closest to you. Both clinics share the same
              treatment standards, equipment, and experienced team.
            </p>
          </div>
          <div className="flex gap-3">
            <CTAButton href="/sahakar-nagar" label="Sahakar Nagar" />
            <CTAButton
              href="/kalyan-nagar"
              label="Kalyan Nagar"
              variant="ghost"
            />
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <BranchCard branch={sahakar} />
          <BranchCard branch={kalyan} />
        </div>
      </Container>

      <Container className="mt-16 space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Patients love us
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            What recovery feels like with MyPhysioFix
          </h2>
        </div>
        <TestimonialList />
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            FAQs
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Answers before you book
          </h2>
          <p className="mt-2 text-slate-700">
            Not sure what you need? Browse common questions. We keep things
            transparent so you always know what’s next.
          </p>
        </div>
        <FAQAccordion />
      </Container>

      <Container className="my-20 rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Start now
            </p>
            <h3 className="text-3xl font-bold">Ready to move without pain?</h3>
            <p className="max-w-2xl text-slate-200">
              Book an evaluation at Sahakar Nagar or Kalyan Nagar. We will map
              your movement, set clear milestones, and start treatment on day
              one.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="/contact" label="Book evaluation" />
            <CTAButton
              href="https://wa.me/919108110387"
              label="WhatsApp care team"
              variant="ghost"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
