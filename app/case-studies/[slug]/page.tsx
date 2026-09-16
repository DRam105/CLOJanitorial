import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Quote } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { getCaseStudy, caseStudySlugs } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return buildMetadata({
    title: cs.title,
    description: cs.summary,
    path: `/case-studies/${cs.slug}`,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <PageHero
        eyebrow={cs.industry}
        title={cs.title}
        subtitle={cs.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: cs.client, path: `/case-studies/${cs.slug}` },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: cs.title, path: `/case-studies/${cs.slug}` },
        ])}
      />

      {/* Results band */}
      <section className="bg-navy-section py-12 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {cs.results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="font-heading text-4xl font-extrabold text-brand-light">
                  {r.stat}
                </p>
                <p className="mt-1 text-sm text-white/70">{r.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Before/after placeholder */}
      <section className="bg-white py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative flex aspect-video items-center justify-center rounded-2xl bg-slate/15 text-sm text-slate">
              <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold text-white">
                Before
              </span>
              [Before photo]
            </div>
            <div className="relative flex aspect-video items-center justify-center rounded-2xl bg-brand-tint text-sm text-brand">
              <span className="absolute left-3 top-3 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                After
              </span>
              [After photo]
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge + solution */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-navy">
              The Challenge
            </h2>
            <p className="mt-4 leading-relaxed text-slate">{cs.challenge}</p>
          </Reveal>
          <Reveal direction="left">
            <h2 className="font-heading text-2xl font-bold text-navy">
              Our Solution
            </h2>
            <ul className="mt-4 space-y-3">
              {cs.solution.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-navy/90">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Quote */}
      {cs.quote && (
        <section className="bg-white py-16">
          <Container>
            <figure className="mx-auto max-w-3xl rounded-2xl border border-border bg-offwhite p-8 text-center shadow-soft">
              <Quote className="mx-auto size-10 text-brand/30" />
              <blockquote className="mt-4 font-heading text-xl font-medium text-navy">
                &ldquo;{cs.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-slate">
                <span className="font-bold text-navy">{cs.quote.name}</span> —{" "}
                {cs.quote.role}, {cs.client}
              </figcaption>
            </figure>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
