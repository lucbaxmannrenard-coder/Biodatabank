"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "flame" | "outline" | "petrol";

const styles: Record<Variant, string> = {
  flame:
    "bg-flame-500 text-white shadow-[0_10px_30px_-8px_rgba(236,105,37,0.6)] hover:bg-flame-600",
  petrol: "bg-petrol-900 text-cream hover:bg-petrol-700",
  outline:
    "bg-transparent text-ink ring-1 ring-ink/15 hover:ring-ink/30 hover:bg-ink/[0.03]",
};

export function CtaButton({
  href,
  children,
  variant = "flame",
  withArrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  const isExternal = /^https?:\/\//.test(href);
  const sharedClass = `group inline-flex items-center gap-2 rounded-pill px-7 py-3.5 text-[0.95rem] font-semibold transition-colors duration-300 ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="inline-block"
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={sharedClass}>
          {content}
        </a>
      ) : (
        <Link href={href} className={sharedClass}>
          {content}
        </Link>
      )}
    </motion.div>
  );
}
