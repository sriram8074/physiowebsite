import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import { brand } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MyPhysioFix",
  description:
    "Meet the physiotherapy team behind MyPhysioFix. Senior consultants, specialised training, and a patient-first approach across Bangalore.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: "https://myphysiofix.com/about",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9108110387",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
  ],
};

const pillars = [
  {
    title: "Consultant-led therapy",
    body: "Our senior physiotherapists oversee every plan, ensuring each session builds towards your milestones.",
  },
  {
    title: "Evidence with empathy",
    body: "We combine current research with a calm, respectful clinic environment so you always feel heard.",
  },
  {
    title: "Clear communication",
    body: "Expect honest timelines, session recaps, and progress tracking that keeps you in control.",
  },
];

const team = [
  {
    name: "Dr. Priya Nair (PT)",
    role: "Clinical Lead – Orthopaedics & Women’s Health",
    bio: "12+ years in spine and pelvic floor rehab, certified in manual therapy and postpartum recovery.",
  },
  {
    name: "Dr. Arjun Rao (PT)",
    role: "Sports & Return-to-Play Specialist",
    bio: "Ex-sports medicine physio for semi-pro football clubs; focuses on load management and strength testing.",
  },
  {
    name: "Dr. Aakanksha Gupta (PT)",
    role: "Neuro & Paediatric Physiotherapist",
    bio: "Specialises in stroke and paediatric neuro rehab with family education for at-home support.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="space-y-14 py-12">
        <Container className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            About us
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            The physiotherapy team that sweats the details
          </h1>
          <p className="max-w-3xl text-slate-700">
            MyPhysioFix was born out of a simple idea: recoveries should be
            clear, comfortable, and consistent. We built clinics that feel
            calming, staffed them with specialists, and designed programs that
            keep you moving confidently.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="/services" label="Explore services" />
            <CTAButton href="/contact" label="Meet a therapist" variant="ghost" />
          </div>
        </Container>

        <Container className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{pillar.body}</p>
            </div>
          ))}
        </Container>

        <Container className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Consultants you will meet
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="card rounded-2xl p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
                  {member.role}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-slate-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>

        <Container className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Culture
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Built around patient experience
              </h3>
              <p className="mt-2 max-w-2xl text-slate-200">
                We keep wait times short, explain every step, and share home
                plans that make sense for your schedule. You always leave
                knowing what to do next.
              </p>
            </div>
            <CTAButton href="/contact" label="Book a visit" />
          </div>
        </Container>
      </div>
    </>
  );
}
