"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Floating live-chat placeholder.
 *
 * TODO: Replace this stub with a real live-chat provider (e.g. Intercom,
 * Tawk.to, Drift, HubSpot, or a GoHighLevel chat widget). Drop their script in
 * app/layout.tsx and remove this component, or wire the button to open theirs.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-40 lg:bottom-6 lg:right-6">
      {open && (
        <div className="mb-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-white shadow-soft-lg">
          <div className="bg-navy-section p-4 text-white">
            <p className="font-heading font-semibold">Chat with CLO</p>
            <p className="text-xs text-white/70">
              We typically reply within a few minutes.
            </p>
          </div>
          <div className="space-y-3 p-4 text-sm">
            <p className="text-slate">
              👋 Thanks for stopping by! This is a live-chat placeholder. For now,
              reach us directly:
            </p>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-lg bg-offwhite px-3 py-2.5 font-medium text-navy transition-colors hover:bg-brand-tint"
            >
              <Phone className="size-4 text-brand" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 rounded-lg bg-offwhite px-3 py-2.5 font-medium text-navy transition-colors hover:bg-brand-tint"
            >
              <Mail className="size-4 text-brand" />
              {site.email}
            </a>
            <p className="text-[11px] text-slate/70">
              {/* TODO: integrate a real chat provider here */}
              Developer note: connect a chat provider in{" "}
              <code>components/shared/chat-widget.tsx</code>.
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="ml-auto flex size-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-soft-lg transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
