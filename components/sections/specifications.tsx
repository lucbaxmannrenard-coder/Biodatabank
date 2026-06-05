"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const specs: { label: string; value: string }[] = [
  { label: "Technologie", value: "Heat Stock Tracker® (capteur breveté)" },
  { label: "Alertes", value: "Vibration · son 74 dB · LED (rouge / verte)" },
  { label: "Autonomie", value: "Jusqu'à 5 mois en continu, sans recharge" },
  { label: "Connectivité", value: "Aucune — fonctionne en totale autonomie" },
  { label: "Étanchéité / résistance", value: "IP67 · jusqu'à 80 °C · résistant aux chocs" },
  { label: "Dimensions", value: "45 × 27 × 13 mm (module capteur)" },
  { label: "Poids", value: "30 g, bracelet inclus" },
  { label: "Matériaux", value: "ABS, silicone, acier inoxydable" },
];

export function Specifications() {
  return (
    <section id="specifications" className="relative bg-sand py-24 lg:py-32">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Spécifications"
            title="Les détails techniques"
            intro="Un concentré de fiabilité, validé pour les environnements les plus exigeants."
          />
          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-card bg-petrol-950 ring-hairline">
              <div className="relative aspect-video">
                <video
                  src="/videos/canaria-spec.mp4"
                  poster="/videos/canaria-spec-poster.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Animation : le bracelet Canaria+ se met en marche et ses caractéristiques techniques"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <dl className="overflow-hidden rounded-card bg-paper ring-hairline">
            {specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                  i % 2 === 1 ? "bg-sand/40" : ""
                }`}
              >
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {s.label}
                </dt>
                <dd className="text-[0.98rem] font-medium text-ink sm:text-right">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 px-1 text-xs leading-relaxed text-muted">
            Caractéristiques communiquées par le fabricant Biodata Bank. Canaria+ n'est pas un
            dispositif médical.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
