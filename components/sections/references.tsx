"use client";

import { Quote, MessageSquarePlus } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

/**
 * Faits documentés communiqués par le fabricant Biodata Bank.
 * On ne présente PAS de faux logos clients ni de faux témoignages.
 */
const proofs = [
  {
    org: "Airbus",
    fact: "A testé Canaria+ auprès de 150 collaborateurs (été 2023) et l'a jugé pertinent dans sa démarche de prévention des coups de chaleur.",
  },
  {
    org: "OPP-BTP",
    fact: "L'organisme de prévention du BTP a validé la pertinence technique et médicale du dispositif pour les métiers exposés.",
  },
  {
    org: "Groupe Sumitomo Forestry",
    fact: "Zéro incident lié à la chaleur signalé parmi les porteurs équipés depuis 2022.",
  },
];

export function References() {
  return (
    <section id="references" className="relative bg-cream py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Preuves"
          title="Une technologie déjà éprouvée"
          intro="Avant d'arriver chez les particuliers, Canaria+ a fait ses preuves auprès d'organisations exigeantes en matière de sécurité."
        />

        <RevealStagger className="mt-14 grid gap-5 md:grid-cols-3">
          {proofs.map((p) => (
            <RevealItem key={p.org}>
              <article className="flex h-full flex-col rounded-card bg-paper p-7 ring-hairline">
                <Quote className="size-7 text-flame-500/70" strokeWidth={1.6} />
                <p className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-ink-soft">{p.fact}</p>
                <p className="mt-5 font-display text-base font-semibold text-ink">{p.org}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Espace témoignages clients Provence EPI — honnête, à compléter */}
        <Reveal delay={0.1}>
          <div className="mt-5 flex items-center gap-4 rounded-card border border-dashed border-ink/15 bg-transparent p-7">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-flame-500/10">
              <MessageSquarePlus className="size-5 text-flame-600" strokeWidth={1.8} />
            </div>
            <p className="text-[0.95rem] leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">Vous utilisez déjà Canaria+ ?</span>{" "}
              Votre témoignage prendra place ici. Partagez votre expérience à l'équipe Provence EPI.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            Faits communiqués par le fabricant Biodata Bank à titre informatif. Ces déploiements ne
            constituent pas un avis médical et n'impliquent aucun lien commercial avec Provence EPI.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
