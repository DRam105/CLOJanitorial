import { z } from "zod";

/** Shared zod schemas for the site's forms (react-hook-form + zodResolver). */

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(["quote", "walkthrough", "question", "other"]),
  message: z.string().min(10, "Please add a few details (10+ characters)"),
});
export type ContactValues = z.infer<typeof contactSchema>;

export const facilityTypes = [
  "Office / Corporate",
  "Medical / Healthcare",
  "School / Education",
  "Retail / Shopping Center",
  "Industrial / Warehouse",
  "Bank / Financial",
  "Gym / Fitness",
  "Place of Worship",
  "Auto Dealership",
  "Property Management",
  "Other",
] as const;

export const frequencies = [
  "Nightly (5–7x/week)",
  "Several times a week",
  "Weekly",
  "Bi-weekly",
  "Monthly",
  "One-time / Project",
  "Not sure yet",
] as const;

export const serviceOptions = [
  "Office & Commercial Cleaning",
  "Janitorial Services",
  "Floor Care & Stripping/Waxing",
  "Carpet & Upholstery Cleaning",
  "Disinfection & Sanitization",
  "Window Cleaning",
  "Restroom Sanitation & Restocking",
  "Day Porter / Matron",
  "Post-Construction Cleanup",
  "Green / Eco-Friendly Cleaning",
] as const;

export const quoteSchema = z.object({
  // Step 1 — facility
  businessName: z.string().min(2, "Please enter your business name"),
  facilityType: z.string().min(1, "Select a facility type"),
  squareFootage: z.string().optional(),
  // Step 2 — needs
  services: z.array(z.string()).min(1, "Select at least one service"),
  frequency: z.string().min(1, "Select a cleaning frequency"),
  walkthroughTime: z.string().optional(),
  // Step 3 — contact
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  notes: z.string().optional(),
});
export type QuoteValues = z.infer<typeof quoteSchema>;

export const careersSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  position: z.string().min(1, "Select a position"),
  availability: z.string().min(1, "Select your availability"),
  experience: z.string().optional(),
  // Resume upload is stubbed (file handling requires a backend) — see form.
});
export type CareersValues = z.infer<typeof careersSchema>;
