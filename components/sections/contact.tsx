import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, Truck, Headset, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CONTACT, PRODUCT } from "@/lib/site";

const reassurance = [
  { icon: ShieldCheck, label: "Paiement sécurisé sur provence-epi.com" },
  { icon: Truck, label: "Expédié et garanti par Provence EPI" },
  { icon: Headset, label: "Conseil et SAV en France" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-petrol-950 py-24 text-cream lg:py-32 grain">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-20 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(236,105,37,0.2), transparent 70%)" }}
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Colonne info */}
        <div>
          <SectionHeading
            tone="cream"
            eyebrow="Commander"
            title={
              <>
                Procurez-vous Canaria+ <span className="text-flame-400">dès aujourd'hui.</span>
              </>
            }
            intro="L'achat se fait directement sur la boutique officielle Provence EPI : commande, paiement et livraison y sont gérés en toute sécurité. Un proche à protéger ou une équipe à équiper — tout part de la fiche produit."
          />

          <div className="mt-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-petrol-100/70">
              Une question avant d'acheter ?
            </p>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <Mail className="size-5 text-flame-400" strokeWidth={1.8} />
                </span>
                <span className="text-petrol-100 transition group-hover:text-cream">{CONTACT.email}</span>
              </a>
              <a href={CONTACT.phoneHref} className="group flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <Phone className="size-5 text-flame-400" strokeWidth={1.8} />
                </span>
                <span className="text-petrol-100 transition group-hover:text-cream">{CONTACT.phone}</span>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <MapPin className="size-5 text-flame-400" strokeWidth={1.8} />
                </span>
                <span className="text-petrol-100">{CONTACT.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carte d'achat */}
        <Reveal>
          <div className="rounded-card bg-cream p-7 text-ink ring-1 ring-white/10 md:p-9">
            <div className="flex items-center gap-5">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-petrol-700 to-petrol-900 ring-1 ring-black/5">
                <Image
                  src="/images/canaria-solution.png"
                  alt="Bracelet connecté Canaria+"
                  fill
                  sizes="96px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted">Bracelet connecté</p>
                <h3 className="font-display text-2xl font-semibold leading-tight">
                  {PRODUCT.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  Prévention du coup de chaleur · {PRODUCT.maker}
                </p>
              </div>
            </div>

            <div className="mt-7">
              <a
                href={PRODUCT.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-pill bg-flame-500 px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(236,105,37,0.6)] transition-colors duration-300 hover:bg-flame-600"
              >
                Acheter sur Provence EPI
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-center text-xs text-muted">
                Vous serez redirigé vers la boutique officielle Provence EPI.
              </p>
            </div>

            <ul className="mt-7 space-y-3 border-t border-ink/10 pt-6">
              {reassurance.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-ink-soft">
                  <Icon className="size-5 shrink-0 text-petrol-500" strokeWidth={1.8} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
