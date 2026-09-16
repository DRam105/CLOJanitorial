import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaSection } from "@/components/shared/cta-section";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { getIcon } from "@/components/shared/icon";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { getService, services, serviceSlugs } from "@/lib/services";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} — Commercial Cleaning`,
    description: service.short,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = getIcon(service.icon);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.intro}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/quote" variant="white">
            Request a Free Quote <ArrowRight />
          </ButtonLink>
          <ButtonLink href="/contact?type=walkthrough" variant="whiteOutline">
            Schedule a Walkthrough
          </ButtonLink>
        </div>
      </PageHero>

      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faq)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />

      {/* What's included */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-tint text-brand">
              <Icon className="size-7" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold text-navy sm:text-3xl">
              What&apos;s Included
            </h2>
            <p className="mt-3 text-slate">
              Every {service.title.toLowerCase()} program is customized, but here&apos;s
              what a typical scope covers:
            </p>
            <ul className="mt-6 grid gap-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-navy/90">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Who it's for */}
          <Reveal direction="left">
            <div className="rounded-2xl border border-border bg-offwhite p-7 shadow-soft">
              <h3 className="font-heading text-xl font-bold text-navy">
                Who It&apos;s For
              </h3>
              <ul className="mt-5 space-y-3">
                {service.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-slate">
                    <ArrowRight className="mt-1 size-4 shrink-0 text-brand" />
                    {w}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-xl bg-white p-5">
                <p className="font-heading font-semibold text-navy">
                  Why CLO?
                </p>
                <p className="mt-1.5 text-sm text-slate">
                  Trained, background-checked crews, customized plans, quality
                  inspections, and a satisfaction guarantee — fully insured and
                  bonded for your protection.
                </p>
                <Link
                  href="/why-clo"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5"
                >
                  See why facility managers choose CLO <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Our process */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Consistent Results"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <span className="font-heading text-3xl font-extrabold text-brand/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10">
            <FaqAccordion items={service.faq} />
          </div>
        </Container>
      </section>

      {/* Related services */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="More Services" title="Explore Related Services" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <ServiceMini key={s.slug} slug={s.slug} title={s.title} icon={s.icon} short={s.short} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}

function ServiceMini({
  slug,
  title,
  icon,
  short,
}: {
  slug: string;
  title: string;
  icon: string;
  short: string;
}) {
  const Icon = getIcon(icon);
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft-lg"
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-4 font-heading text-base font-bold text-navy">{title}</h3>
      <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-slate">{short}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Learn more <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
