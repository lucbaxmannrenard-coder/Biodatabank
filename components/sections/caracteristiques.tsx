"use client";

import { BatteryCharging, WifiOff, Droplet, Sparkles, MousePointerClick, CalendarClock } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RevealStagger, RevealItem } from "@/components/reveal";

const features = [
  {
    icon: BatteryCharging,
    title: "Aucune recharge",
    text: "Jusqu'à 5 mois d'autonomie en continu. On l'active une fois et on l'oublie pour toute la saison chaude.",
  },
  {
    icon: WifiOff,
    title: "Sans connexion",
    text: "Ni smartphone, ni Wi-Fi, ni application. Aucune donnée transmise : le bracelet fonctionne seul, partout.",
  },
  {
    icon: Droplet,
    title: "Étanche IP67",
    text: "Résiste à l'eau, à la poussière et aux chocs. Il reste au poignet sous la douche comme au jardin.",
  },
  {
    icon: Sparkles,
    title: "Hygiénique",
    text: "Bracelet détachable et facile à nettoyer, pour un usage sain au quotidien ou partagé entre porteurs.",
  },
  {
    icon: MousePointerClick,
    title: "Simplicité totale",
    text: "Une seule touche pour démarrer. Pas de réglage, pas de paramétrage : utilisable par tous, à tout âge.",
  },
  {
    icon: CalendarClock,
    title: "Toujours en veille",
    text: "Une surveillance 24h/24 de la charge thermique du corps, sans intervention ni rappel à faire.",
  },
];

export function Caracteristiques() {
  return (
    <section id="caracteristiques" className="relative bg-sand py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Les atouts"
          title="Conçu pour être oublié au poignet"
          intro="Toute la technologie tient dans un bracelet de 30 grammes pensé pour ne jamais devenir une contrainte."
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <article className="group h-full rounded-card bg-paper p-7 ring-hairline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(21,33,31,0.35)]">
                <div className="grid size-12 place-items-center rounded-xl bg-flame-500/10 transition-colors duration-300 group-hover:bg-flame-500/15">
                  <f.icon className="size-6 text-flame-600" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{f.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
