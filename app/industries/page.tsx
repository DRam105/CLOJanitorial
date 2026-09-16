import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/shared/cta-section";
import { getIcon } from "@/components/shared/icon";
import { buildMetadata } from "@/lib/metadata";
import { industries } from "@/lib/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "CLO Janitorial provides specialized commercial cleaning for offices, medical facilities, schools, retail, industrial, financial, fitness, and more across North County San Diego.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Specialized Cleaning for Every Industry"
        subtitle="Different facilities have different standards. We bring industry-specific expertise and compliance-aware cleaning to keep your space healthy, safe and professional."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />

      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = getIcon(industry.icon);
              return (
                <Reveal key={industry.slug} delay={(i % 3) * 0.05}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft-lg"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="mt-5 font-heading text-lg font-bold text-navy">
                      {industry.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-slate">
                      {industry.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5">
                      Learn more <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
