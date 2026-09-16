import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { Swoosh } from "@/components/shared/swoosh";
import { site } from "@/lib/site";

/** Reusable closing CTA band for interior pages. */
export function CtaSection({
  title = "Ready for a Spotless Facility?",
  subtitle = "Get a free, no-obligation quote and on-site walkthrough. We'll build a cleaning plan tailored to your building.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-section py-16 text-white sm:py-20">
      <Swoosh className="pointer-events-none absolute -left-14 bottom-0 h-80 w-80 opacity-[0.08]" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/quote" variant="white" size="lg">
              Request a Free Quote
              <ArrowRight />
            </ButtonLink>
            <ButtonLink
              href="/contact?type=walkthrough"
              variant="whiteOutline"
              size="lg"
            >
              <CalendarCheck />
              Schedule a Walkthrough
            </ButtonLink>
          </div>
          <a
            href={site.phoneHref}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            <Phone className="size-4 text-brand-light" />
            Or call {site.phone}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
