"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { FAQS } from "@/lib/site";

const faqs = FAQS;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-sand py-24 lg:py-32">
      <div className="container-page max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Les questions que vous vous posez"
        />

        <Reveal delay={0.1}>
          <ul className="mt-12 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="overflow-hidden rounded-2xl bg-paper ring-hairline">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-ink">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-flame-500/10"
                    >
                      <Plus className="size-4 text-flame-600" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-6 text-[0.97rem] leading-relaxed text-ink-soft">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
