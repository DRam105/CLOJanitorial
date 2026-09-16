import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { featuredServices } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Commercial Cleaning, One Trusted Partner"
          subtitle="From nightly office cleaning to specialized floor care and disinfection, we tailor a program to your facility — and hold it to a consistently high standard."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/services" variant="outline">
            View All Services
            <ArrowRight />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
