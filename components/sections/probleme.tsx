"use client";

import { Thermometer, HeartPulse, Clock, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { AnimatedNumber } from "@/components/animated-number";

const stats = [
  {
    value: 15000,
    suffix: "",
    label: "décès lors de la canicule de 2003 en France",
    note: "majoritairement des personnes âgées et isolées",
    icon: HeartPulse,
  },
  {
    value: 75,
    suffix: "%",
    label: "des victimes de la chaleur ont plus de 65 ans",
    note: "le corps régule moins bien la température avec l'âge",
    icon: Thermometer,
  },
  {
    value: 30,
    suffix: " min",
    label: "suffisent pour qu'un coup de chaleur s'installe",
    note: "souvent sans signe d'alerte ressenti à temps",
    icon: Clock,
  },
];

export function Probleme() {
  return (
    <section id="probleme" className="relative bg-sand py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="L'enjeu"
          title={
            <>
              La chaleur frappe en silence —{" "}
              <span className="text-flame-600">surtout les plus fragiles.</span>
            </>
          }
          intro="Pendant une vague de chaleur, le corps d'une personne âgée, malade ou isolée peut se mettre en danger sans qu'elle s'en rende compte. La soif disparaît, la fatigue masque les signaux, et l'entourage n'est pas toujours là pour réagir à temps."
        />

        <RevealStagger className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <article className="h-full rounded-card bg-paper p-7 ring-hairline transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(21,33,31,0.35)]">
                <s.icon className="size-7 text-flame-500" strokeWidth={1.6} />
                <p className="mt-6 font-display text-5xl font-semibold text-ink">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 font-medium text-ink">{s.label}</p>
                <p className="mt-2 text-sm text-muted">{s.note}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-petrol-900 p-6 text-cream md:items-center">
            <AlertTriangle className="mt-0.5 size-6 shrink-0 text-amber md:mt-0" strokeWidth={1.8} />
            <p className="text-[0.95rem] leading-relaxed text-petrol-100">
              Le vrai problème n'est pas la chaleur elle-même, c'est de ne pas être prévenu{" "}
              <span className="font-semibold text-cream">à temps</span>. Quand les symptômes
              apparaissent, il est souvent déjà tard.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
