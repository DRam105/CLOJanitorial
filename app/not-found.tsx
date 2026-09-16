import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/shared/button-link";
import { Swoosh } from "@/components/shared/swoosh";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-section py-20 text-white">
      <Swoosh className="pointer-events-none absolute -right-16 top-10 h-96 w-96 opacity-10" />
      <Container className="relative text-center">
        <p className="font-heading text-7xl font-extrabold text-brand-light sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
          This page couldn&apos;t be found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you&apos;re looking for may have moved or no longer exists.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="white" size="lg">
            <Home className="size-5" />
            Back to Home
          </ButtonLink>
          <ButtonLink href="/services" variant="whiteOutline" size="lg">
            View Our Services <ArrowRight />
          </ButtonLink>
        </div>
        <a
          href={site.phoneHref}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
        >
          <Phone className="size-4 text-brand-light" />
          Need help? Call {site.phone}
        </a>
      </Container>
    </section>
  );
}
