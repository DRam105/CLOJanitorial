import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceCard } from "@/components/shared/service-card";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/shared/cta-section";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Cleaning Services",
  description:
    "Explore CLO Janitorial's full range of commercial cleaning services — office cleaning, janitorial, floor care, carpet cleaning, disinfection, window cleaning and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Commercial Cleaning Services Built Around You"
        subtitle="From nightly janitorial programs to specialized floor care and disinfection, we offer a complete range of commercial cleaning services — each tailored to your facility."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.05}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
