import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Tiny zero-dependency Markdown renderer for the blog.
 *
 * We intentionally avoid next-mdx-remote: on this project's FAT-formatted F:
 * drive, Turbopack can't create the junction/symlink it needs (os error 1),
 * which 500s local dev. Our posts are plain Markdown, so this small renderer
 * covers the subset we use: h2/h3, paragraphs, ordered/unordered lists, links,
 * bold, inline code, and horizontal rules.
 */

/** Inline: **bold**, [text](url), `code`. */
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))|(`(.+?)`)/g;
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;

  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1]) {
      nodes.push(<strong key={key++} className="font-semibold text-navy">{m[2]}</strong>);
    } else if (m[3]) {
      const href = m[5];
      const label = m[4];
      const cls =
        "font-medium text-brand underline underline-offset-2 hover:text-brand-dark";
      nodes.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href} className={cls}>
            {label}
          </Link>
        ) : (
          <a key={key++} href={href} className={cls} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ),
      );
    } else if (m[6]) {
      nodes.push(
        <code key={key++} className="rounded bg-offwhite px-1.5 py-0.5 text-sm text-navy">
          {m[7]}
        </code>,
      );
    }
    last = regex.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function Markdown({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Horizontal rule
    if (/^-{3,}$/.test(trimmed)) {
      blocks.push(<hr key={key++} className="my-10 border-border" />);
      i++;
      continue;
    }

    // Headings
    if (trimmed.startsWith("### ")) {
      blocks.push(
        <h3 key={key++} className="mt-8 font-heading text-xl font-bold text-navy">
          {renderInline(trimmed.slice(4))}
        </h3>,
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="mt-10 font-heading text-2xl font-bold text-navy">
          {renderInline(trimmed.slice(3))}
        </h2>,
      );
      i++;
      continue;
    }

    // Unordered list
    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      blocks.push(
        <ul key={key++} className="mt-4 list-disc space-y-2 pl-6 text-slate marker:text-brand">
          {items.map((it, idx) => (
            <li key={idx} className="pl-1">
              {renderInline(it)}
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i++;
      }
      blocks.push(
        <ol key={key++} className="mt-4 list-decimal space-y-2 pl-6 text-slate marker:text-brand">
          {items.map((it, idx) => (
            <li key={idx} className="pl-1">
              {renderInline(it)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    // Paragraph (gather consecutive non-blank, non-special lines)
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^-{3,}$/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith("#") &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i])
    ) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push(
      <p key={key++} className="mt-4 leading-relaxed text-slate">
        {renderInline(para.join(" "))}
      </p>,
    );
  }

  return <Fragment>{blocks}</Fragment>;
}
