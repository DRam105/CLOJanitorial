"use server";

/**
 * Central lead-submission handler (STUBBED).
 *
 * All site forms (quote, contact, careers, footer) funnel through here. Right
 * now it just logs the payload server-side and returns success so the UI flows
 * work end-to-end.
 *
 * TODO: connect to an email service and/or CRM. Examples:
 *   - Email: Resend (`resend.emails.send(...)`) or SendGrid
 *   - CRM:   HubSpot, GoHighLevel, Salesforce
 *   - Or POST to a webhook via process.env.LEAD_WEBHOOK_URL
 *
 * Careers resume uploads are stubbed — see components/forms/careers-form.tsx.
 */

export type LeadPayload = {
  /** Which form this came from, e.g. "quote", "contact", "careers", "footer-quote" */
  source: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  /** Arbitrary extra fields per form (facility type, services, frequency, etc.) */
  [key: string]: unknown;
};

export type LeadResult = { ok: boolean; message: string };

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  // Simulate a small amount of network latency so loading states are visible.
  await new Promise((r) => setTimeout(r, 600));

  // eslint-disable-next-line no-console
  console.log("[LEAD RECEIVED]", JSON.stringify(payload, null, 2));

  // TODO: forward to email/CRM/webhook here. Example:
  // if (process.env.LEAD_WEBHOOK_URL) {
  //   await fetch(process.env.LEAD_WEBHOOK_URL, {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(payload),
  //   });
  // }

  return {
    ok: true,
    message: "Thanks! Your request was received. We'll be in touch shortly.",
  };
}
