"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Cpu, BellRing, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const points = [
  {
    icon: Cpu,
    title: "Une technologie brevetée",
    text: "Le capteur Heat Stock Tracker® mesure l'accumulation de chaleur dans le corps — pas la température de l'air — et anticipe le risque réel.",
  },
  {
    icon: BellRing,
    title: "Une alerte qui ne s'ignore pas",
    text: "Vibration, alarme sonore (74 dB) et LED rouge se déclenchent ensemble, bien avant le malaise, pour inciter à réagir.",
  },
  {
    icon: ShieldCheck,
    title: "Distribué et accompagné en France",
    text: "Provence EPI sélectionne, fournit et conseille : un interlocuteur français pour équiper un proche ou toute une structure.",
  },
];

export function Solution() {
  const reduced = useReducedMotion();
  return (
    <section id="solution" className="relative overflow-hidden bg-petrol-950 py-24 text-cream lg:py-32 grain">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(236,105,37,0.18), transparent 70%)" }}
      />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2">
        {/* Visuel produit */}
        <Reveal>
          <div className="relative">
            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-petrol-700 to-petrol-900 ring-1 ring-white/10"
            >
              <Image
                src="/images/canaria-module.png"
                alt="Module capteur du bracelet Canaria+"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-pill bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
                Capteur au contact de la peau
              </div>
            </motion.div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-flame-500 px-5 py-4 shadow-xl sm:block">
              <p className="font-display text-3xl font-bold leading-none">30 g</p>
              <p className="text-xs text-white/90">léger, on l'oublie</p>
            </div>
          </div>
        </Reveal>

        {/* Texte */}
        <div>
          <SectionHeading
            tone="cream"
            eyebrow="La solution"
            title={
              <>
                Canaria+, le veilleur discret porté{" "}
                <span className="text-flame-400">au poignet.</span>
              </>
            }
            intro="Pensé pour les environnements exigeants et adopté par de grandes industries, Canaria+ devient aussi un allié précieux à la maison : un petit bracelet qui veille en continu et donne l'alerte au bon moment."
          />

          <div className="mt-10 space-y-6">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    <p.icon className="size-5 text-flame-400" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-cream">{p.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-petrol-100/80">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
