import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { IndustryCard } from "@/components/shared/industry-card";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { industries } from "@/lib/industries";
import { ArrowRight } from "lucide-react";

export function IndustriesStrip() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Cleaning Built Around Your Industry"
          subtitle="Every facility has different needs and standards. We bring industry-specific expertise to keep your space clean, safe and compliant."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 3) * 0.05}>
              <IndustryCard industry={industry} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/industries" variant="outline">
            Explore All Industries
            <ArrowRight />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
