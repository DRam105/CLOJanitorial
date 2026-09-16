"use client";

import { useState } from "react";
import { MapPin, Search, CheckCircle2, HelpCircle } from "lucide-react";
import { checkServiceArea, type AreaCheckResult } from "@/lib/service-areas";
import { cn } from "@/lib/utils";

/** Client-side ZIP/city checker against the placeholder list in /lib. */
export function ServiceAreaChecker({ className }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<AreaCheckResult | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query.trim()) return;
    setResult(checkServiceArea(query));
  }

  return (
    <div className={cn("w-full", className)}>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <MapPin className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-slate" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your city or ZIP code"
            aria-label="City or ZIP code"
            className="h-12 w-full rounded-full border border-input bg-white pl-11 pr-4 text-sm text-navy shadow-soft placeholder:text-slate/70 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
        >
          <Search className="size-4" />
          Check Availability
        </button>
      </form>

      {result && (
        <div
          role="status"
          className={cn(
            "mt-4 flex items-start gap-3 rounded-xl border p-4 text-sm",
            result.status === "served"
              ? "border-brand/20 bg-brand-tint text-navy"
              : "border-border bg-offwhite text-navy",
          )}
        >
          {result.status === "served" ? (
            <>
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
              <div>
                <p className="font-semibold">
                  Great news — we serve {result.city.name}! 🎉
                </p>
                <p className="text-slate">
                  Request a free quote or schedule an on-site walkthrough and
                  we&apos;ll take it from there.
                </p>
              </div>
            </>
          ) : (
            <>
              <HelpCircle className="mt-0.5 size-5 shrink-0 text-brand" />
              <div>
                <p className="font-semibold">
                  We may still serve &ldquo;{result.query}&rdquo;.
                </p>
                <p className="text-slate">
                  We&apos;re expanding across the region — contact us to confirm
                  availability in your area.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
