"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import CTAButton from "./CTAButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/sahakar-nagar", label: "Sahakar Nagar" },
  { href: "/kalyan-nagar", label: "Kalyan Nagar" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg">
            <svg
              aria-hidden
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4 12s2-6 8-6 8 6 8 6-2 6-8 6-8-6-8-6Zm4 0h8m-4-4v8"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
              MyPhysioFix
            </span>
            <span className="text-base font-semibold leading-tight">
              Physiotherapy Clinics
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-brand-blue ${
                pathname === link.href ? "text-brand-blue" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton href="tel:+919108110387" label="Call Sahakar Nagar" />
          <CTAButton
            href="https://wa.me/919108110387"
            label="WhatsApp"
            variant="ghost"
          />
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 lg:hidden"
          onClick={() => setOpen((p) => !p)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </div>
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/40 bg-white/95 shadow-lg lg:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition hover:text-brand-blue ${
                  pathname === link.href ? "text-brand-blue" : "text-slate-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-3">
              <CTAButton href="tel:+919108110387" label="Call Sahakar Nagar" />
              <CTAButton
                href="tel:+9180882533291"
                label="Call Kalyan Nagar"
                variant="secondary"
              />
              <CTAButton
                href="https://wa.me/919108110387"
                label="WhatsApp"
                variant="ghost"
              />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
