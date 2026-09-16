import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/shared/cta-section";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies & Results",
  description:
    "See how CLO Janitorial delivers results for commercial clients — from corporate offices to medical facilities and multi-building property portfolios.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real Results for Real Businesses"
        subtitle="A look at how we solve cleaning challenges for facility managers across industries. [Replace with your real client results.]"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ]}
      />

      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <div className="grid gap-8">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.05}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg"
                >
                  <div className="p-7">
                    <span className="inline-block rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand">
                      {cs.industry}
                    </span>
                    <h2 className="mt-3 font-heading text-xl font-bold text-navy">
                      {cs.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate">{cs.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-5">
                      {cs.results.map((r) => (
                        <div key={r.label}>
                          <p className="font-heading text-2xl font-extrabold text-brand">
                            {r.stat}
                          </p>
                          <p className="text-xs text-slate">{r.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5">
                      Read case study <ArrowRight className="size-4" />
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
