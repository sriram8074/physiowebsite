import Link from "next/link";
import CTAButton from "./CTAButton";
import Container from "./Container";
import BranchCard from "./BranchCard";
import { Branch } from "@/lib/data";

type Props = {
  branch: Branch;
};

export default function BranchPageContent({ branch }: Props) {
  return (
    <div className="space-y-12 py-12">
      <Container className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          {branch.title}
        </p>
        <h1 className="text-4xl font-bold text-slate-900">
          Physiotherapy clinic in {branch.title.replace("MyPhysioFix ", "")}
        </h1>
        <p className="max-w-3xl text-slate-700">{branch.intro}</p>
        <div className="flex flex-wrap gap-3">
          <CTAButton
            href={`tel:${branch.phones[0].replace(/\s+/g, "")}`}
            label="Call now"
          />
          <CTAButton
            href={`https://wa.me/${branch.whatsapp.replace(/[+ ]/g, "")}`}
            label="WhatsApp"
            variant="ghost"
          />
          <CTAButton href="/contact" label="Book an appointment" />
        </div>
      </Container>

      <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="card rounded-3xl p-7">
          <h2 className="text-2xl font-semibold text-slate-900">Visit us</h2>
          <p className="mt-2 text-slate-700">{branch.address}</p>
          <p className="mt-2 text-sm text-slate-600">{branch.hours}</p>

          <div className="mt-4 space-y-2 text-sm font-semibold text-slate-900">
            {branch.phones.map((phone) => (
              <Link
                key={phone}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="block hover:text-brand-blue"
              >
                {phone}
              </Link>
            ))}
            <Link
              href={`mailto:${branch.email}`}
              className="block text-sm font-normal text-brand-blue"
            >
              {branch.email}
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {branch.neighborhoodPoints.map((point) => (
              <div
                key={point}
                className="rounded-xl border border-slate-100 bg-white px-3 py-2 text-sm text-slate-700"
              >
                {point}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <CTAButton href={branch.mapUrl} label="Get directions" />
          </div>
        </div>

        <BranchCard branch={branch} />
      </Container>
    </div>
  );
}
