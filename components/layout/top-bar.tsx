import Link from "next/link";
import { Phone, Mail, Briefcase, MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { site } from "@/lib/site";

/** Slim top bar above the header: Now Hiring + quick contact. */
export function TopBar() {
  return (
    <div className="hidden bg-navy text-white/90 lg:block">
      <Container className="flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-brand-light" />
            Serving {site.region}
          </span>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="size-3.5 text-brand-light" />
            {site.email}
          </a>
        </div>
        <div className="flex items-center gap-5">
          {site.hiring && (
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-light transition-colors hover:text-white"
            >
              <Briefcase className="size-3.5" />
              Now Hiring — Join Our Team
            </Link>
          )}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-white"
          >
            <Phone className="size-3.5 text-brand-light" />
            {site.phone}
          </a>
        </div>
      </Container>
    </div>
  );
}
