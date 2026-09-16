import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Briefcase, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { FooterQuoteForm } from "@/components/forms/footer-quote-form";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/shared/social-icons";
import { footerNav } from "@/lib/nav";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-section text-white">
      {/* Top: brand + compact quote form */}
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <Logo variant="white" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            {site.description}
          </p>

          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-light" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-brand-light" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-brand-light" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-light" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.day} className="block">
                    <span className="text-white/60">{h.day}:</span> {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <SocialLink href={site.social.facebook} label="Facebook">
              <FacebookIcon className="size-4" />
            </SocialLink>
            <SocialLink href={site.social.instagram} label="Instagram">
              <InstagramIcon className="size-4" />
            </SocialLink>
            <SocialLink href={site.social.linkedin} label="LinkedIn">
              <LinkedinIcon className="size-4" />
            </SocialLink>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <h2 className="font-heading text-xl font-bold text-white">
            Request a Free Quote
          </h2>
          <p className="mt-1.5 text-sm text-white/70">
            Tell us about your facility and we&apos;ll follow up to schedule a
            free on-site walkthrough.
          </p>
          <div className="mt-5">
            <FooterQuoteForm />
          </div>
        </div>
      </Container>

      {/* Middle: nav columns */}
      <div className="border-t border-white/10">
        <Container className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-brand-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </div>

      {/* Hiring band */}
      {site.hiring && (
        <div className="border-t border-white/10 bg-white/[0.03]">
          <Container className="flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-white/85">
              <Briefcase className="size-4 text-brand-light" />
              CLO Janitorial is hiring dependable, detail-oriented team members.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              View Open Positions
            </Link>
          </Container>
        </div>
      )}

      {/* Bottom: legal */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/55 sm:flex-row">
          <p className="flex items-center gap-2 text-center sm:text-left">
            <ShieldCheck className="size-4 text-brand-light" />
            {site.legal.licenseNote}
          </p>
          <div className="flex items-center gap-5">
            <span>
              © {year} {site.name}. All rights reserved.
            </span>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-light hover:bg-brand-light/10 hover:text-white"
    >
      {children}
    </a>
  );
}
