/** Couche de données du blog : lecture et parsing des articles Markdown. */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO court yyyy-mm-dd */
  date: string;
  author: string;
  tags: string[];
  image?: string;
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function parsePost(slug: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);

  const words = content.split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(words / 200));
  const html = marked.parse(content, { async: false }) as string;

  const rawDate = data.date ? new Date(data.date) : new Date(0);
  const date = Number.isNaN(rawDate.getTime())
    ? "1970-01-01"
    : rawDate.toISOString().slice(0, 10);

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    description: typeof data.description === "string" ? data.description : "",
    date,
    author: typeof data.author === "string" ? data.author : "Provence EPI",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    image: typeof data.image === "string" ? data.image : undefined,
    readingMinutes,
    html,
  };
}

/** Tous les articles, du plus récent au plus ancien. */
export function getAllPosts(): Post[] {
  return readSlugs()
    .map(parsePost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllSlugs(): string[] {
  return readSlugs();
}

export function getPostBySlug(slug: string): Post | null {
  try {
    return parsePost(slug);
  } catch {
    return null;
  }
}
