"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Faq = { q: string; a: string };

/** Branded FAQ accordion (Base UI under the hood). */
export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <Accordion className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white px-5 shadow-soft">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b-0">
          <AccordionTrigger className="py-5 text-base font-semibold text-navy hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-slate">
            <p className="leading-relaxed">{item.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
