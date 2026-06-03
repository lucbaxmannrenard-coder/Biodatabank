"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { BatteryFull, Droplets, ShieldCheck, WifiOff } from "lucide-react";
import { CtaButton } from "@/components/cta-button";

const reassurance = [
  { icon: BatteryFull, label: "Jusqu'à 5 mois sans recharge" },
  { icon: WifiOff, label: "Sans connexion ni smartphone" },
  { icon: Droplets, label: "Étanche IP67" },
  { icon: ShieldCheck, label: "Alerte avant l'accident" },
];

export function Hero() {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
  };
  const item: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="top" className="relative overflow-hidden bg-sand pt-28 pb-20 md:pt-36 lg:pb-28">
      {/* Halo de chaleur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(245,137,79,0.28), rgba(245,166,60,0.12) 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(47,93,86,0.18), transparent 70%)",
        }}
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Colonne texte */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-pill bg-flame-500/10 px-4 py-1.5 text-eyebrow text-flame-700 ring-1 ring-flame-500/20">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-flame-500" />
              </span>
              Prévention du coup de chaleur
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-display mt-6 text-ink">
            Anticipez le coup de chaleur{" "}
            <span className="text-gradient-flame">avant qu'il ne frappe.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Pendant les fortes chaleurs, le corps peut basculer en quelques minutes — souvent sans
            signe perceptible. <strong className="font-semibold text-ink">Canaria+</strong>, distribué
            en France par Provence EPI, surveille en continu la charge thermique du corps et alerte
            votre proche <em>avant</em> le malaise, par vibration, son et lumière.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <CtaButton href="#contact" variant="flame">
              Demander un devis
            </CtaButton>
            <CtaButton href="#fonctionnement" variant="outline" withArrow={false}>
              Voir comment ça marche
            </CtaButton>
          </motion.div>

          <motion.ul variants={item} className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
            {reassurance.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <Icon className="size-4 shrink-0 text-petrol-500" />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Colonne visuel */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/3.4] w-full max-w-xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-petrol-50 to-petrol-100 ring-hairline">
            {/* ondes de pulsation thermique */}
            <PulseRings reduced={!!reduced} />

            <Image
              src="/images/canaria-hero.png"
              alt="Bracelet connecté Canaria+ de prévention du coup de chaleur"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className={`object-cover ${reduced ? "" : "animate-float"}`}
            />

            {/* Puce alerte flottante */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute left-5 top-5 flex items-center gap-2 rounded-2xl bg-paper/90 px-3.5 py-2 shadow-lg backdrop-blur-sm ring-hairline"
            >
              <span className="grid size-7 place-items-center rounded-full bg-alert/10">
                <span className="size-2.5 rounded-full bg-alert animate-pulse" />
              </span>
              <div className="leading-tight">
                <p className="text-[0.7rem] font-semibold text-ink">Alerte chaleur</p>
                <p className="text-[0.65rem] text-muted">Hydratez-vous · reposez-vous</p>
              </div>
            </motion.div>

            {/* Jauge thermique */}
            <ThermalGauge reduced={!!reduced} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PulseRings({ reduced }: { reduced: boolean }) {
  if (reduced) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute right-[26%] top-[40%] -z-0">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute size-24 rounded-full ring-2 ring-flame-500/40"
          style={{
            animation: "pulse-ring 3s cubic-bezier(0.16,1,0.3,1) infinite",
            animationDelay: `${i * 1}s`,
          }}
        />
      ))}
    </div>
  );
}

function ThermalGauge({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-5 right-5 flex items-end gap-3 rounded-2xl bg-paper/90 px-4 py-3 shadow-lg backdrop-blur-sm ring-hairline"
    >
      <div className="flex h-16 w-2.5 flex-col-reverse overflow-hidden rounded-pill bg-petrol-100">
        <motion.div
          className="w-full rounded-pill bg-gradient-to-t from-petrol-500 via-amber to-alert"
          initial={{ height: reduced ? "72%" : "10%" }}
          animate={{ height: "72%" }}
          transition={
            reduced
              ? { duration: 0 }
              : { delay: 1.4, duration: 1.6, ease: [0.16, 1, 0.3, 1] }
          }
        />
      </div>
      <div className="leading-tight">
        <p className="text-[0.65rem] uppercase tracking-wider text-muted">Charge thermique</p>
        <p className="font-display text-lg font-semibold text-ink">Surveillée 24/7</p>
      </div>
    </motion.div>
  );
}
