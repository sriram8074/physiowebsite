import Link from "next/link";
import Container from "@/components/Container";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Physiotherapy tips, recovery roadmaps, and clinic updates from the MyPhysioFix team in Bangalore.",
};

export default function BlogPage() {
  return (
    <div className="space-y-10 py-12">
      <Container className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          Blog
        </p>
        <h1 className="text-4xl font-bold text-slate-900">
          Learn from our physiotherapists
        </h1>
        <p className="max-w-3xl text-slate-700">
          Practical advice to help you move better, recover faster, and prevent
          injuries. Written by the clinicians you’ll meet in the clinic.
        </p>
      </Container>

      <Container className="grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card block rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              {post.tags[0]}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-slate-700">{post.description}</p>
            <p className="mt-3 text-xs text-slate-500">
              {post.date} · {post.readTime}
            </p>
          </Link>
        ))}
      </Container>
    </div>
  );
}
