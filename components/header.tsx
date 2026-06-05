"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PRODUCT } from "@/lib/site";
import { CtaButton } from "./cta-button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Verrouille le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/[0.06] bg-cream/80 backdrop-blur-xl supports-[backdrop-filter]:bg-cream/70"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-page flex h-18 items-center justify-between py-3">
          <Link href="#top" aria-label="Provence EPI — accueil" className="relative z-10 shrink-0">
            <Image
              src="/brand/provence-epi-logo.svg"
              alt="Provence EPI"
              width={150}
              height={78}
              priority
              className="h-9 w-auto md:h-10"
            />
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-flame-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                Blog
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-flame-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          </ul>

          <div className="hidden lg:block">
            <CtaButton href={PRODUCT.buyUrl} variant="flame">
              Acheter sur Provence EPI
            </CtaButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 grid size-11 place-items-center rounded-full ring-1 ring-ink/10 text-ink lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-0 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex h-full flex-col justify-center gap-2 pt-20">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-3xl font-semibold text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * NAV_LINKS.length + 0.1 }}
              >
                <Link
                  href="/blog"
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-3xl font-semibold text-ink"
                >
                  Blog
                </Link>
              </motion.div>
              <div className="mt-6">
                <CtaButton href={PRODUCT.buyUrl} variant="flame" className="text-base">
                  Acheter sur Provence EPI
                </CtaButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
