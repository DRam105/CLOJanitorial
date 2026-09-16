import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaSection } from "@/components/shared/cta-section";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { ServiceCard } from "@/components/shared/service-card";
import { getIcon } from "@/components/shared/icon";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { getIndustry, industrySlugs } from "@/lib/industries";
import { getService } from "@/lib/services";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: `${industry.title} Cleaning Services`,
    description: industry.short,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const Icon = getIcon(industry.icon);
  const related = industry.relatedServices
    .map(getService)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={`${industry.title} Cleaning`}
        subtitle={industry.intro}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ]}
      >
        <ButtonLink href="/quote" variant="white">
          Request a Free Quote <ArrowRight />
        </ButtonLink>
      </PageHero>

      <JsonLd data={faqJsonLd(industry.faq)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ])}
      />

      {/* Needs + compliance */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-tint text-brand">
              <Icon className="size-7" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold text-navy sm:text-3xl">
              What {industry.title} Facilities Need
            </h2>
            <ul className="mt-6 grid gap-3">
              {industry.needs.map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-navy/90">{n}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="left">
            <div className="rounded-2xl border border-border bg-offwhite p-7 shadow-soft">
              <h3 className="flex items-center gap-2 font-heading text-xl font-bold text-navy">
                <ShieldCheck className="size-5 text-brand" />
                Standards &amp; Compliance
              </h3>
              <ul className="mt-5 space-y-3">
                {industry.compliance.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-slate">
                    <ArrowRight className="mt-1 size-4 shrink-0 text-brand" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-offwhite py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Recommended Services"
              title={`Services for ${industry.title}`}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {industry.faq.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
            <div className="mt-10">
              <FaqAccordion items={industry.faq} />
            </div>
          </Container>
        </section>
      )}

      <CtaSection
        title={`Ready for a Cleaner ${industry.title} Facility?`}
        subtitle="Get a free, tailored quote and on-site walkthrough from a team that understands your industry."
      />
    </>
  );
}
