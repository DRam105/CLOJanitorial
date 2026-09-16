import { cn } from "@/lib/utils";

/** Consistent max-width page container with responsive gutters. */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("container-page", className)} {...props} />;
}
