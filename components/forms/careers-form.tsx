"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Upload, Send } from "lucide-react";
import { careersSchema, type CareersValues } from "@/lib/schema";
import { jobPositionOptions } from "@/lib/jobs";
import { submitLead } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fieldError, selectClass } from "@/components/forms/field";

const availabilityOptions = [
  "Full-time",
  "Part-time",
  "Evenings",
  "Weekends",
  "Flexible / Any",
];

export function CareersForm({ defaultPosition }: { defaultPosition?: string }) {
  const [resumeName, setResumeName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CareersValues>({
    resolver: zodResolver(careersSchema),
    defaultValues: { position: defaultPosition ?? "" },
  });

  async function onSubmit(values: CareersValues) {
    // NOTE: resume file is captured for UX only — file upload is stubbed.
    // TODO: handle the actual file (e.g. upload to storage / email attachment).
    await submitLead({ source: "careers", ...values, resume: resumeName });
  }

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-2xl border border-brand/20 bg-brand-tint p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-brand" />
        <h3 className="mt-4 font-heading text-xl font-bold text-navy">
          Application submitted!
        </h3>
        <p className="mt-2 text-slate">
          Thanks for your interest in joining CLO Janitorial. If your experience
          is a match, we&apos;ll reach out to schedule a conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="c-name">Full name *</Label>
          <Input id="c-name" className="h-11" {...register("name")} aria-invalid={!!errors.name} />
          {fieldError(errors.name?.message)}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="c-phone">Phone *</Label>
          <Input id="c-phone" type="tel" className="h-11" {...register("phone")} aria-invalid={!!errors.phone} />
          {fieldError(errors.phone?.message)}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="c-email">Email *</Label>
        <Input id="c-email" type="email" className="h-11" {...register("email")} aria-invalid={!!errors.email} />
        {fieldError(errors.email?.message)}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="position">Position *</Label>
          <select id="position" className={selectClass} defaultValue={defaultPosition ?? ""} {...register("position")}>
            <option value="" disabled>
              Select a position…
            </option>
            {jobPositionOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {fieldError(errors.position?.message)}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="availability">Availability *</Label>
          <select id="availability" className={selectClass} defaultValue="" {...register("availability")}>
            <option value="" disabled>
              Select availability…
            </option>
            {availabilityOptions.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {fieldError(errors.availability?.message)}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="experience">Relevant experience</Label>
        <Textarea id="experience" rows={4} placeholder="Tell us about your cleaning or related work experience…" {...register("experience")} />
      </div>

      {/* Resume upload (stubbed) */}
      <div className="space-y-1.5">
        <Label htmlFor="resume">Resume (optional)</Label>
        <label
          htmlFor="resume"
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-input bg-offwhite px-4 py-4 text-sm text-slate transition-colors hover:border-brand hover:bg-brand-tint/40"
        >
          <Upload className="size-5 text-brand" />
          <span>
            {resumeName ? (
              <span className="font-medium text-navy">{resumeName}</span>
            ) : (
              "Click to upload a resume (PDF or Word)"
            )}
          </span>
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="sr-only"
            onChange={(e) => setResumeName(e.target.files?.[0]?.name ?? null)}
          />
        </label>
        <p className="text-xs text-slate/70">
          {/* TODO: wire up real file uploads (storage or email attachment) */}
          Upload is a placeholder — files aren&apos;t stored yet.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient font-heading font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-[0.97] disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Submitting…
          </>
        ) : (
          <>
            <Send className="size-5" /> Submit Application
          </>
        )}
      </button>
    </form>
  );
}
