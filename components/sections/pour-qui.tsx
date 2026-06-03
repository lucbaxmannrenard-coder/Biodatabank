"use client";

import { Users, HomeIcon, HeartPulse, Bike, HardHat, Tractor } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

const particuliers = [
  {
    icon: Users,
    title: "Les personnes âgées",
    text: "Plus sensibles à la chaleur et ressentant moins la soif, elles sont les premières victimes des canicules.",
  },
  {
    icon: HomeIcon,
    title: "Les personnes isolées",
    text: "Vivant seules ou loin de leurs proches, elles n'ont personne pour repérer les premiers signes à temps.",
  },
  {
    icon: HeartPulse,
    title: "Les personnes à risque",
    text: "Maladies chroniques, traitements ou fragilités qui rendent la régulation de la température plus difficile.",
  },
  {
    icon: Bike,
    title: "Les actifs & sportifs",
    text: "Travail physique, jardinage, sport en plein été : l'effort sous la chaleur multiplie le risque.",
  },
];

const pro = [
  { icon: HardHat, label: "BTP & chantiers" },
  { icon: Tractor, label: "Agriculture & espaces verts" },
  { icon: Users, label: "Industrie & logistique" },
];

export function PourQui() {
  return (
    <section id="pour-qui" className="relative bg-cream py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pour qui"
          title={
            <>
              D'abord pour ceux <span className="text-flame-600">qu'on aime protéger</span>
            </>
          }
          intro="Canaria+ a été pensé pour veiller sur les personnes les plus exposées — à la maison comme à l'extérieur."
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {particuliers.map((p) => (
            <RevealItem key={p.title}>
              <article className="flex h-full flex-col rounded-card bg-paper p-7 ring-hairline">
                <div className="grid size-12 place-items-center rounded-xl bg-petrol-50">
                  <p.icon className="size-6 text-petrol-500" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{p.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Volet professionnel */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-5 rounded-card bg-petrol-900 p-7 text-cream md:flex-row md:items-center md:justify-between md:p-9">
            <div className="max-w-md">
              <h3 className="font-display text-xl font-semibold text-cream">
                Et aussi sur le terrain professionnel
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-petrol-100/80">
                En tant que distributeur d'équipements de protection, Provence EPI accompagne aussi
                les entreprises dont les équipes travaillent à la chaleur.
              </p>
            </div>
            <ul className="flex flex-wrap gap-3">
              {pro.map((p) => (
                <li
                  key={p.label}
                  className="flex items-center gap-2 rounded-pill bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/10"
                >
                  <p.icon className="size-4 text-flame-400" strokeWidth={1.8} />
                  {p.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
