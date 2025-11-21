import Link from "next/link";
import CTAButton from "./CTAButton";
import { Branch } from "@/lib/data";

type Props = {
  branch: Branch;
};

export default function BranchCard({ branch }: Props) {
  return (
    <div className="card relative overflow-hidden rounded-2xl p-6">
      <div className="absolute -left-24 top-0 h-32 w-48 rotate-6 bg-brand-green/10 blur-2xl" />
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">{branch.title}</h3>
        <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
          Bangalore
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{branch.intro}</p>
      <p className="mt-3 text-sm font-semibold text-slate-900">{branch.address}</p>
      <p className="mt-1 text-xs text-slate-500">{branch.hours}</p>
      <div className="mt-3 space-y-1 text-sm font-semibold text-slate-900">
        {branch.phones.map((phone) => (
          <Link
            key={phone}
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="block hover:text-brand-blue"
          >
            {phone}
          </Link>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CTAButton href={`tel:${branch.phones[0].replace(/\s+/g, "")}`} label="Call clinic" />
        <CTAButton
          href={`https://wa.me/${branch.whatsapp.replace(/[+ ]/g, "")}`}
          label="WhatsApp"
          variant="ghost"
        />
        <CTAButton href={branch.mapUrl} label="Directions" variant="secondary" />
      </div>
    </div>
  );
}
