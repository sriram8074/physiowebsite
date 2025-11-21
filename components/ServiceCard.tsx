import Link from "next/link";
import { Service } from "@/lib/data";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <div className="card relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-blue/10 blur-2xl" />
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
        <span className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green">
          Specialist-led
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {service.highlights.slice(0, 2).map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
      >
        Explore service
        <svg
          aria-hidden
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
