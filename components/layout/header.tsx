"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { ButtonLink } from "@/components/shared/button-link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300",
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-white",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4 py-2">
        <Logo />

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-brand"
                  : "text-navy/80 hover:bg-offwhite hover:text-brand",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-navy transition-colors hover:text-brand"
          >
            <Phone className="size-4 text-brand" />
            {site.phone}
          </a>
          <ButtonLink href="/quote" size="sm">
            Request a Free Quote
          </ButtonLink>
        </div>

        {/* Mobile trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label="Call us"
            className="inline-flex size-11 items-center justify-center rounded-full bg-offwhite text-brand"
          >
            <Phone className="size-5" />
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open menu"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-navy text-white"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] max-w-sm p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation and contact options
              </SheetDescription>
              <div className="flex h-full flex-col">
                <div className="border-b p-5">
                  <Logo />
                </div>
                <nav
                  aria-label="Mobile"
                  className="flex-1 overflow-y-auto p-3"
                >
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-brand-tint text-brand"
                          : "text-navy hover:bg-offwhite",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-navy hover:bg-offwhite"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="space-y-3 border-t p-5">
                  {site.hiring && (
                    <Link
                      href="/careers"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white"
                    >
                      <Briefcase className="size-4 text-brand-light" />
                      We&apos;re Hiring
                    </Link>
                  )}
                  <ButtonLink
                    href="/quote"
                    onClick={() => setOpen(false)}
                    className="w-full"
                  >
                    Request a Free Quote
                  </ButtonLink>
                  <a
                    href={site.phoneHref}
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-navy"
                  >
                    <Phone className="size-4 text-brand" />
                    {site.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
