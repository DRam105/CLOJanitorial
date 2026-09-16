import { AlertCircle } from "lucide-react";

/** Shared bits for the site's forms (kept DRY across contact/quote/careers). */

/** Consistent styled class for native <select> elements. */
export const selectClass =
  "h-11 w-full rounded-lg border border-input bg-white px-3 text-sm text-navy shadow-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/40 focus:outline-none";

/** Renders an inline field error message, or nothing. */
export function fieldError(message?: string) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
      <AlertCircle className="size-3.5" />
      {message}
    </p>
  );
}
