import { Container } from "@/components/shared/container";
import { Swoosh } from "@/components/shared/swoosh";
import { Breadcrumbs, type Crumb } from "@/components/shared/breadcrumbs";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

/**
 * Reusable interior-page hero header (navy, with swoosh accent + breadcrumbs).
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-section text-white",
        className,
      )}
    >
      <Swoosh className="pointer-events-none absolute -right-10 -top-8 h-72 w-72 opacity-10" />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        {crumbs && <Breadcrumbs items={crumbs} light className="mb-6" />}
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-light">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg leading-relaxed text-white/75">
                {subtitle}
              </p>
            </Reveal>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
