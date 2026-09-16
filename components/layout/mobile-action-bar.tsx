import { Phone, CalendarCheck } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Fixed bottom action bar on mobile only: tap-to-call + Get a Quote.
 * Hidden on lg+ where the header CTAs are visible.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(10,27,61,0.08)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={site.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-brand/20 text-sm font-semibold text-navy"
        >
          <Phone className="size-4 text-brand" />
          Call Now
        </a>
        <a
          href="/quote"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient text-sm font-semibold text-white"
        >
          <CalendarCheck className="size-4" />
          Get a Quote
        </a>
      </div>
    </div>
  );
}
