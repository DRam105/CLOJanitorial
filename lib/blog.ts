import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/** Minimal MDX blog loader: reads /content/blog/*.mdx and parses frontmatter. */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
};

export type Post = PostMeta & { content: string };

function readPostFile(slug: string): Post | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "CLO Janitorial Team",
    category: data.category ?? "News",
    readingTime: data.readingTime ?? "",
    content,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => readPostFile(slug))
    .filter((p): p is Post => Boolean(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...meta }) => meta);
}

export function getPost(slug: string): Post | null {
  return readPostFile(slug);
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
