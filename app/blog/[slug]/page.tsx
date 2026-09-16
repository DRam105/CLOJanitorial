import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, User, ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaSection } from "@/components/shared/cta-section";
import { Markdown } from "@/components/shared/markdown";
import { buildMetadata } from "@/lib/metadata";
import { getAllPostSlugs, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <User className="size-4 text-brand-light" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 text-brand-light" />
            {formatDate(post.date)}
          </span>
          {post.readingTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-brand-light" />
              {post.readingTime}
            </span>
          )}
        </div>
      </PageHero>

      <article className="bg-white py-14 sm:py-16">
        <Container className="max-w-3xl">
          <div className="text-base">
            <Markdown content={post.content} />
          </div>

          <div className="mt-12 border-t border-border pt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5"
            >
              <ArrowLeft className="size-4" /> Back to all articles
            </Link>
          </div>
        </Container>
      </article>

      <CtaSection />
    </>
  );
}
