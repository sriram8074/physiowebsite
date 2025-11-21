import Link from "next/link";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-brand-blue text-white shadow-[0_10px_30px_rgba(75,180,230,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(75,180,230,0.45)]",
  secondary:
    "bg-brand-green text-slate-900 shadow-[0_10px_30px_rgba(140,198,63,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(140,198,63,0.45)]",
  ghost:
    "border border-slate-200 bg-white text-slate-800 hover:-translate-y-0.5 hover:border-brand-blue/70",
};

export default function CTAButton({
  href,
  label,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} href={href}>
      {label}
    </Link>
  );
}
