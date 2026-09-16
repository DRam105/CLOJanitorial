import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { Swoosh } from "@/components/shared/swoosh";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-section py-20 text-white sm:py-24">
      <Swoosh className="pointer-events-none absolute -left-16 bottom-0 h-96 w-96 opacity-[0.08]" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready for a Spotless Facility?
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            Get a free, no-obligation quote and on-site walkthrough. We&apos;ll
            build a cleaning plan tailored to your building — and take one more
            thing off your plate.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            <Phone className="size-4 text-brand-light" />
            Prefer to talk? Call {site.phone}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
