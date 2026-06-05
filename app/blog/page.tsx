import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogHeader } from "@/components/blog-header";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Prévention du coup de chaleur et de la canicule",
  description:
    "Conseils et repères pour anticiper le coup de chaleur, protéger les personnes âgées et à risque, et bien réagir pendant la canicule. Par Provence EPI.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Blog Provence EPI — Prévention du coup de chaleur",
    description:
      "Conseils pour anticiper le coup de chaleur et protéger les personnes à risque pendant la canicule.",
  },
};

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default function BlogIndex() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Blog Provence EPI — Prévention du coup de chaleur",
    url: `${SITE_URL}/blog`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${SITE_URL}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <BlogHeader />
      <main className="bg-sand">
        <section className="container-page pt-16 pb-10 md:pt-24">
          <span className="text-eyebrow text-flame-600">Le blog</span>
          <h1 className="text-h1 mt-4 max-w-3xl text-ink">
            Prévenir le coup de chaleur, protéger ceux qui comptent
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Des repères clairs et fiables pour anticiper les risques liés à la chaleur, reconnaître
            les signes d'alerte et bien réagir — pour vos proches comme au travail.
          </p>
        </section>

        <section className="container-page pb-24">
          {posts.length === 0 ? (
            <p className="text-ink-soft">Les premiers articles arrivent très bientôt.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-card bg-paper p-7 ring-hairline transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {p.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-pill bg-flame-500/10 px-3 py-1 text-xs font-medium text-flame-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    {p.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted">
                    <span>{formatDate(p.date)}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5" />
                      {p.readingMinutes} min
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-flame-600">
                    Lire l'article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer linkBase="/" />
    </>
  );
}
