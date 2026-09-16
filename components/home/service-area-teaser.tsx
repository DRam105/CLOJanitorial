import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ServiceAreaChecker } from "@/components/forms/service-area-checker";
import { serviceCities } from "@/lib/service-areas";
import { site } from "@/lib/site";

export function ServiceAreaTeaser() {
  const featured = serviceCities.filter((c) => c.featured);

  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Service Area"
          title={`Proudly Serving ${site.region}`}
          subtitle="Based in Carlsbad and serving businesses throughout North County San Diego and beyond. Check if we cover your area."
        />

        <Reveal className="mx-auto mt-10 max-w-2xl">
          <ServiceAreaChecker />
        </Reveal>

        <Reveal className="mt-10">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {featured.map((city) => (
              <li
                key={city.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-navy shadow-soft"
              >
                <MapPin className="size-3.5 text-brand" />
                {city.name}
              </li>
            ))}
            <li className="inline-flex items-center rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-medium text-brand">
              <Link href="/service-area">+ more areas</Link>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
