"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  ArrowRight,
  ArrowLeft,
  Building2,
  ListChecks,
  UserRound,
  Check,
} from "lucide-react";
import {
  quoteSchema,
  type QuoteValues,
  facilityTypes,
  frequencies,
  serviceOptions,
} from "@/lib/schema";
import { submitLead } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fieldError, selectClass } from "@/components/forms/field";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Your Facility", icon: Building2 },
  { title: "Services Needed", icon: ListChecks },
  { title: "Your Details", icon: UserRound },
];

const stepFields: (keyof QuoteValues)[][] = [
  ["businessName", "facilityType", "squareFootage"],
  ["services", "frequency", "walkthroughTime"],
  ["name", "email", "phone", "notes"],
];

export function QuoteForm() {
  const [step, setStep] = useState(0);

  const form = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { services: [] },
    mode: "onTouched",
  });
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = form;

  async function next() {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function onSubmit(values: QuoteValues) {
    await submitLead({ source: "quote", ...values });
  }

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-2xl border border-brand/20 bg-brand-tint p-10 text-center">
        <CheckCircle2 className="mx-auto size-14 text-brand" />
        <h3 className="mt-4 font-heading text-2xl font-bold text-navy">
          Request received — thank you!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-slate">
          A CLO team member will reach out shortly to confirm details and
          schedule your free on-site walkthrough. We look forward to working
          with you!
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
      {/* Progress */}
      <ol className="mb-8 flex items-center">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const active = i === step;
          const done = i < step;
          return (
            <li key={s.title} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full border-2 transition-colors",
                    done && "border-brand bg-brand text-white",
                    active && "border-brand bg-brand-tint text-brand",
                    !done && !active && "border-border bg-white text-slate",
                  )}
                >
                  {done ? <Check className="size-5" /> : <Icon className="size-5" />}
                </span>
                <span
                  className={cn(
                    "hidden text-xs font-semibold sm:block",
                    active || done ? "text-navy" : "text-slate",
                  )}
                >
                  {s.title}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span
                  className={cn(
                    "mx-2 h-0.5 flex-1 rounded-full transition-colors",
                    i < step ? "bg-brand" : "bg-border",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Step 1 — Facility */}
        {step === 0 && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="businessName">Business name *</Label>
              <Input id="businessName" className="h-11" {...register("businessName")} aria-invalid={!!errors.businessName} />
              {fieldError(errors.businessName?.message)}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="facilityType">Facility type *</Label>
                <select id="facilityType" className={selectClass} defaultValue="" {...register("facilityType")}>
                  <option value="" disabled>
                    Select facility type…
                  </option>
                  {facilityTypes.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
                {fieldError(errors.facilityType?.message)}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="squareFootage">Approx. square footage</Label>
                <Input id="squareFootage" className="h-11" placeholder="e.g. 12,000 sq. ft." {...register("squareFootage")} />
              </div>
            </div>
          </div>
        )}

        {/* Step 2 — Needs */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Services needed * (select all that apply)</Label>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {serviceOptions.map((s) => (
                  <label
                    key={s}
                    className="group flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand-tint"
                  >
                    <input
                      type="checkbox"
                      value={s}
                      className="size-4 accent-[var(--brand)]"
                      {...register("services")}
                    />
                    <span className="text-sm font-medium text-navy">{s}</span>
                  </label>
                ))}
              </div>
              {fieldError(errors.services?.message)}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="frequency">Cleaning frequency *</Label>
                <select id="frequency" className={selectClass} defaultValue="" {...register("frequency")}>
                  <option value="" disabled>
                    Select frequency…
                  </option>
                  {frequencies.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
                {fieldError(errors.frequency?.message)}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="walkthroughTime">Preferred walkthrough time</Label>
                <Input id="walkthroughTime" className="h-11" placeholder="e.g. Weekday mornings" {...register("walkthroughTime")} />
              </div>
            </div>
          </div>
        )}

        {/* Step 3 — Contact */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Your name *</Label>
                <Input id="name" className="h-11" {...register("name")} aria-invalid={!!errors.name} />
                {fieldError(errors.name?.message)}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" type="tel" className="h-11" {...register("phone")} aria-invalid={!!errors.phone} />
                {fieldError(errors.phone?.message)}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Work email *</Label>
              <Input id="email" type="email" className="h-11" {...register("email")} aria-invalid={!!errors.email} />
              {fieldError(errors.email?.message)}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="notes">Anything else we should know?</Label>
              <Textarea id="notes" rows={4} {...register("notes")} />
            </div>
          </div>
        )}

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between gap-3">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-border px-5 text-sm font-semibold text-navy transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowLeft className="size-4" /> Back
            </button>
          ) : (
            <span />
          )}

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-gradient px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-[0.97]"
            >
              Continue <ArrowRight className="size-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-gradient px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-[0.97] disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Submitting…
                </>
              ) : (
                <>
                  Submit Request <CheckCircle2 className="size-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
