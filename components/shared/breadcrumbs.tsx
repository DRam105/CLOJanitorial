import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

/** Visual breadcrumb trail. Pair with breadcrumbJsonLd() for SEO. */
export function Breadcrumbs({
  items,
  light = false,
  className,
}: {
  items: Crumb[];
  light?: boolean;
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1.5 text-sm",
          light ? "text-white/70" : "text-slate",
        )}
      >
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span
                  aria-current="page"
                  className={cn("font-medium", light ? "text-white" : "text-navy")}
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className={cn(
                      "transition-colors",
                      light ? "hover:text-white" : "hover:text-brand",
                    )}
                  >
                    {item.name}
                  </Link>
                  <ChevronRight
                    className={cn(
                      "size-3.5",
                      light ? "text-white/40" : "text-slate/50",
                    )}
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
