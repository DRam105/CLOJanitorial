import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Branded link-styled buttons for CTAs across the site. Larger and bolder than
 * the compact shadcn <Button> (which we keep for form controls). Renders an
 * <a>/next-Link so it works for navigation and tel: links.
 */
export const buttonLinkVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold whitespace-nowrap transition-all duration-200 outline-none focus-visible:ring-4 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-[1.1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Bright blue gradient — primary conversion CTA
        primary:
          "bg-brand-gradient text-white shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 bg-brand-gradient-hover",
        // Solid navy
        navy: "bg-navy text-white hover:bg-navy-700 shadow-soft hover:-translate-y-0.5",
        // Outline on light backgrounds
        outline:
          "border-2 border-brand/25 bg-white text-navy hover:border-brand hover:text-brand hover:-translate-y-0.5",
        // Solid white — for dark/navy sections
        white:
          "bg-white text-navy shadow-soft hover:bg-offwhite hover:-translate-y-0.5",
        // Outline white — for dark/navy sections
        whiteOutline:
          "border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70",
        // Text link with arrow
        ghost: "text-brand hover:text-brand-dark hover:gap-3",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        default: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonLinkVariants>;

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonLinkVariants({ variant, size, className }))}
      {...props}
    />
  );
}
