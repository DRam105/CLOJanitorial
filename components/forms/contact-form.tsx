"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactValues } from "@/lib/schema";
import { submitLead } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fieldError, selectClass } from "@/components/forms/field";

export function ContactForm({
  defaultType = "question",
}: {
  defaultType?: ContactValues["type"];
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { type: defaultType },
  });

  async function onSubmit(values: ContactValues) {
    await submitLead({ source: "contact", ...values });
  }

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-2xl border border-brand/20 bg-brand-tint p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-brand" />
        <h3 className="mt-4 font-heading text-xl font-bold text-navy">
          Message sent — thank you!
        </h3>
        <p className="mt-2 text-slate">
          A member of the CLO team will get back to you shortly. For urgent
          needs, please call us directly.
        </p>
        <button
          onClick={() => reset()}
          className="mt-5 text-sm font-semibold text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" className="h-11" {...register("name")} aria-invalid={!!errors.name} />
          {fieldError(errors.name?.message)}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Company</Label>
          <Input id="company" className="h-11" {...register("company")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" className="h-11" {...register("email")} aria-invalid={!!errors.email} />
          {fieldError(errors.email?.message)}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" className="h-11" {...register("phone")} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="type">How can we help?</Label>
        <select id="type" className={selectClass} {...register("type")}>
          <option value="quote">Request a quote</option>
          <option value="walkthrough">Schedule a walkthrough</option>
          <option value="question">General question</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" rows={5} {...register("message")} aria-invalid={!!errors.message} />
        {fieldError(errors.message?.message)}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient font-heading font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-[0.97] disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-5" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
