import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { BlogHeader } from "@/components/blog-header";
import { Footer } from "@/components/footer";
import { CtaButton } from "@/components/cta-button";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { SITE_URL, PRODUCT } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "fr-FR",
    image: post.image ? [`${SITE_URL}${post.image}`] : undefined,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <BlogHeader />
      <main className="bg-sand">
        <article className="container-page max-w-3xl pt-12 pb-20 md:pt-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Tous les articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-pill bg-flame-500/10 px-3 py-1 text-xs font-medium text-flame-700"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-h1 mt-4 text-ink">{post.title}</h1>

          <div className="mt-5 flex items-center gap-4 text-sm text-muted">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readingMinutes} min de lecture
            </span>
          </div>

          <hr className="mt-8 border-ink/10" />

          <div
            className="article-prose mt-8"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* CTA produit en fin d'article */}
          <div className="mt-12 rounded-card bg-petrol-900 p-8 text-cream md:p-10">
            <h2 className="font-display text-2xl font-semibold text-cream">
              Anticipez le coup de chaleur avec Canaria+
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-petrol-100/80">
              Le bracelet qui surveille la charge thermique du corps et alerte avant le malaise.
              Sans recharge, sans connexion, étanche IP67.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href={PRODUCT.buyUrl} variant="flame">
                Acheter sur Provence EPI
              </CtaButton>
              <CtaButton href="/" variant="petrol" withArrow={false}>
                Découvrir Canaria+
              </CtaButton>
            </div>
          </div>
        </article>
      </main>
      <Footer linkBase="/" />
    </>
  );
}
