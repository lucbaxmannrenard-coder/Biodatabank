"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Bell, Droplets } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    n: "01",
    icon: Activity,
    title: "Il détecte la charge thermique",
    text: "Au contact de la peau, le capteur suit en continu l'accumulation de chaleur dans le corps et anticipe la montée du risque.",
    color: "var(--color-petrol-500)",
  },
  {
    n: "02",
    icon: Bell,
    title: "Il alerte avant l'accident",
    text: "Dès que le seuil approche, le bracelet vibre, sonne (74 dB) et passe sa LED au rouge — impossible de l'ignorer.",
    color: "var(--color-amber)",
  },
  {
    n: "03",
    icon: Droplets,
    title: "On s'hydrate et on se met au frais",
    text: "Le porteur (ou son entourage) réagit : boire, se reposer à l'ombre. La LED repasse au vert quand le danger s'éloigne.",
    color: "var(--color-alert)",
  },
];

export function Fonctionnement() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !root.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Remplissage de la jauge thermique au scroll
      gsap.fromTo(
        ".thermal-fill",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".thermal-track",
            start: "top 80%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );
      // Activation successive des points
      gsap.utils.toArray<HTMLElement>(".thermal-node").forEach((node) => {
        gsap.fromTo(
          node,
          { scale: 0.8, opacity: 0.35 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: node,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="fonctionnement" ref={root} className="relative bg-cream py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Comment ça marche"
          title="Trois temps pour éviter le pire"
          intro="Aucune manipulation, aucune application. Le bracelet fait tout, en autonomie."
        />

        {/* Piste thermique */}
        <div className="thermal-track relative mx-auto mt-20 hidden h-1.5 max-w-4xl rounded-pill bg-petrol-100 md:block">
          <div
            className="thermal-fill h-full origin-left rounded-pill"
            style={{
              background:
                "linear-gradient(90deg, var(--color-petrol-500), var(--color-amber) 55%, var(--color-alert))",
            }}
          />
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div
                  className="thermal-node grid size-14 place-items-center rounded-2xl ring-1 ring-ink/10"
                  style={{ backgroundColor: "color-mix(in srgb, " + s.color + " 14%, white)" }}
                >
                  <s.icon className="size-6" strokeWidth={1.8} style={{ color: s.color }} />
                </div>
                <span className="mt-5 font-mono text-sm font-semibold tracking-widest text-muted">
                  {s.n}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
