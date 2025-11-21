import { notFound } from "next/navigation";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://myphysiofix.com/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="space-y-12 py-12">
        <Container className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            {post.tags.join(" · ")}
          </p>
          <h1 className="text-4xl font-bold text-slate-900">{post.title}</h1>
          <p className="text-sm text-slate-500">
            {post.date} · {post.readTime}
          </p>
          <p className="max-w-3xl text-lg text-slate-700">{post.description}</p>
        </Container>

        <Container className="prose max-w-4xl prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700">
          {post.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </Container>

        <Container className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Need personalised advice?
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Book a clinic evaluation in Bangalore
              </h3>
              <p className="mt-2 max-w-2xl text-slate-200">
                Bring your scans or training plan. We’ll map your movement and
                suggest a targeted program.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/contact" label="Book now" />
              <CTAButton
                href="https://wa.me/919108110387"
                label="WhatsApp team"
                variant="ghost"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
