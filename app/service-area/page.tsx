import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/shared/cta-section";
import { ServiceAreaChecker } from "@/components/forms/service-area-checker";
import { buildMetadata } from "@/lib/metadata";
import { serviceCities } from "@/lib/service-areas";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Service Area",
  description:
    "CLO Janitorial serves Carlsbad, Oceanside, Vista, San Marcos, Escondido, Encinitas, San Diego and communities across North County San Diego. Check if we cover your area.",
  path: "/service-area",
});

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={`Proudly Serving ${site.region}`}
        subtitle="Headquartered in Carlsbad, we provide commercial cleaning throughout North County San Diego and the greater San Diego region. Don't see your city? Just ask — we're growing."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Service Area", path: "/service-area" },
        ]}
      />

      {/* Checker */}
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-navy">
              Do We Serve Your Area?
            </h2>
            <p className="mt-2 text-slate">
              Enter your city or ZIP code to check.
            </p>
            <div className="mt-6">
              <ServiceAreaChecker />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Map placeholder + cities */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full min-h-72 items-center justify-center rounded-2xl border border-dashed border-input bg-white text-center text-sm text-slate">
              [Embedded map placeholder — add a Google Maps iframe of your
              service region here]
            </div>
          </Reveal>
          <Reveal direction="left">
            <SectionHeading
              align="left"
              eyebrow="Cities We Serve"
              title="Communities Across the Region"
            />
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceCities.map((city) => (
                <li
                  key={city.name}
                  className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2.5 text-sm font-medium text-navy shadow-soft"
                >
                  <MapPin className="size-3.5 shrink-0 text-brand" />
                  {city.name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate">
              [Confirm and edit this list to match your exact service area.]
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
