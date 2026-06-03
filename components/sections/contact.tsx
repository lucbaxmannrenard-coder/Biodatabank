"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CONTACT } from "@/lib/site";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Demande de devis Canaria+");
    const body = encodeURIComponent(
      `Nom : ${form.name}\nSociété : ${form.company || "—"}\nE-mail : ${form.email}\n\nMessage :\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition focus:border-flame-500/60 focus:ring-2 focus:ring-flame-500/20";

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
            eyebrow="Demander un devis"
            title={
              <>
                Protégez un proche <span className="text-flame-400">dès cet été.</span>
              </>
            }
            intro="Parlez-nous de votre besoin — un proche à protéger ou une équipe à équiper. L'équipe Provence EPI vous répond rapidement avec une proposition adaptée."
          />

          <div className="mt-10 space-y-4">
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

        {/* Formulaire */}
        <Reveal>
          <div className="rounded-card bg-cream p-7 text-ink ring-1 ring-white/10 md:p-9">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <CheckCircle2 className="size-12 text-petrol-500" strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-2xl font-semibold">Merci !</h3>
                <p className="mt-2 max-w-sm text-ink-soft">
                  Votre messagerie va s'ouvrir avec votre demande pré-remplie. Sinon, écrivez-nous
                  directement à <span className="font-medium text-ink">{CONTACT.email}</span>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-soft">
                    Nom complet *
                  </label>
                  <input id="name" required value={form.name} onChange={update("name")} className={inputClass} placeholder="Marie Dupont" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-soft">
                    Société <span className="text-muted">(facultatif)</span>
                  </label>
                  <input id="company" value={form.company} onChange={update("company")} className={inputClass} placeholder="Nom de votre structure" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-soft">
                    E-mail *
                  </label>
                  <input id="email" type="email" required value={form.email} onChange={update("email")} className={inputClass} placeholder="marie@exemple.fr" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-soft">
                    Votre besoin *
                  </label>
                  <textarea id="message" required rows={4} value={form.message} onChange={update("message")} className={`${inputClass} resize-none`} placeholder="Je souhaite protéger un proche âgé / équiper une équipe de…" />
                </div>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-pill bg-flame-500 px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(236,105,37,0.6)] transition-colors hover:bg-flame-600"
                >
                  Envoyer ma demande
                  <Send className="size-4" />
                </motion.button>
                <p className="text-center text-xs text-muted">
                  Réponse sous 48h ouvrées · Sans engagement
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
