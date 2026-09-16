"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/actions";

/**
 * Compact quote-request form for the footer. Fully wired to the stubbed
 * submitLead server action (logs payload + returns success).
 */
export function FooterQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    try {
      const res = await submitLead({
        source: "footer-quote",
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        company: String(form.get("company") ?? ""),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex items-start gap-3 rounded-xl bg-white/10 p-5 text-sm text-white">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-light" />
        <div>
          <p className="font-semibold">Thanks — we&apos;ll be in touch!</p>
          <p className="text-white/70">
            A CLO team member will reach out to schedule your free walkthrough.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          aria-label="Your name"
          className="h-11 rounded-lg border border-white/15 bg-white/10 px-3.5 text-sm text-white placeholder:text-white/50 focus:border-brand-light focus:ring-2 focus:ring-brand-light/40 focus:outline-none"
        />
        <input
          name="company"
          placeholder="Company"
          aria-label="Company"
          className="h-11 rounded-lg border border-white/15 bg-white/10 px-3.5 text-sm text-white placeholder:text-white/50 focus:border-brand-light focus:ring-2 focus:ring-brand-light/40 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          name="email"
          type="email"
          required
          placeholder="Work email"
          aria-label="Work email"
          className="h-11 flex-1 rounded-lg border border-white/15 bg-white/10 px-3.5 text-sm text-white placeholder:text-white/50 focus:border-brand-light focus:ring-2 focus:ring-brand-light/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-gradient px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:opacity-70"
        >
          {status === "sending" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              Get Quote <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-300">
          Something went wrong. Please call or email us instead.
        </p>
      )}
    </form>
  );
}
