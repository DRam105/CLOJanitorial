import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/shared/cta-section";
import { buildMetadata } from "@/lib/metadata";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Cleaning Resources",
  description:
    "Facility cleaning tips, disinfection best practices, and guidance on choosing a janitorial provider from the CLO Janitorial team.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Cleaning Tips & Facility Resources"
        subtitle="Practical guidance to help facility and office managers keep their spaces clean, healthy and professional."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg"
                >
                  {/* Cover placeholder */}
                  <div className="flex h-40 items-center justify-center bg-navy-section">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-3.5 text-brand" />
                        {formatDate(post.date)}
                      </span>
                      {post.readingTime && (
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5 text-brand" />
                          {post.readingTime}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-3 font-heading text-lg font-bold text-navy">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-slate">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5">
                      Read article <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
