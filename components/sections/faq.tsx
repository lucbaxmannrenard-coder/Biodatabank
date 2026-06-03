"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const faqs = [
  {
    q: "Canaria+ est-il un dispositif médical ?",
    a: "Non. Canaria+ est un outil de prévention qui alerte en cas de risque de coup de chaleur. Il ne pose aucun diagnostic et ne remplace jamais un avis médical. En cas de malaise, contactez un professionnel de santé.",
  },
  {
    q: "Faut-il un smartphone ou une application ?",
    a: "Non. Le bracelet fonctionne en totale autonomie : aucune application, aucun appairage, aucune connexion. C'est ce qui le rend idéal pour une personne âgée ou peu à l'aise avec la technologie.",
  },
  {
    q: "Comment se recharge-t-il ?",
    a: "Il ne se recharge pas. Canaria+ offre jusqu'à 5 mois d'autonomie en continu. On l'active une seule fois au début de la saison chaude et on n'a plus à s'en occuper.",
  },
  {
    q: "Convient-il vraiment à une personne âgée ?",
    a: "Oui, c'est même l'un de ses usages les plus pertinents. Léger (30 g), simple à porter et sans aucune manipulation, il veille en continu et donne une alerte claire (vibration, son, lumière) que l'entourage peut aussi percevoir.",
  },
  {
    q: "Peut-on le porter sous la douche ou au jardin ?",
    a: "Oui. Certifié IP67, il résiste à l'eau, à la poussière et aux chocs. Il peut rester au poignet en toutes circonstances, y compris lors d'activités extérieures.",
  },
  {
    q: "Comment l'obtenir ou équiper plusieurs personnes ?",
    a: "Provence EPI vous conseille et vous fournit le nombre d'unités souhaité, pour un proche comme pour toute une structure. Demandez un devis via le formulaire ci-dessous : nous revenons vers vous rapidement.",
  },
];

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
