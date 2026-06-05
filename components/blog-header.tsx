import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CtaButton } from "./cta-button";
import { PRODUCT } from "@/lib/site";

/** En-tête statique des pages du blog (logo + retour au site + CTA d'achat). */
export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.06] bg-cream/80 backdrop-blur-xl supports-[backdrop-filter]:bg-cream/70">
      <nav className="container-page flex h-18 items-center justify-between py-3">
        <Link href="/" aria-label="Provence EPI — accueil" className="shrink-0">
          <Image
            src="/brand/provence-epi-logo.svg"
            alt="Provence EPI"
            width={150}
            height={78}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/blog"
            className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:block"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="hidden items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink md:flex"
          >
            <ArrowLeft className="size-4" />
            Le site
          </Link>
          <CtaButton href={PRODUCT.buyUrl} variant="flame" className="px-5 py-2.5 text-sm">
            Acheter Canaria+
          </CtaButton>
        </div>
      </nav>
    </header>
  );
}
