import Image from "next/image";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { NAV_LINKS, CONTACT, PRODUCT } from "@/lib/site";

/**
 * @param linkBase préfixe des ancres de navigation. "" sur la home (#section,
 * géré par le smooth scroll), "/" sur les pages blog (/#section → retour home).
 */
export function Footer({ linkBase = "" }: { linkBase?: string }) {
  return (
    <footer className="bg-petrol-950 text-petrol-100">
      {/* Disclaimer dispositif médical */}
      <div className="border-b border-white/10 bg-amber/10">
        <div className="container-page flex items-start gap-3 py-4">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber" strokeWidth={1.8} />
          <p className="text-sm leading-relaxed text-cream/90">
            <span className="font-semibold text-cream">Canaria+ n'est pas un dispositif médical.</span>{" "}
            Il ne pose aucun diagnostic et ne remplace pas une surveillance médicale. En cas de
            malaise ou de doute, contactez immédiatement un professionnel de santé ou le 15.
          </p>
        </div>
      </div>

      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Image
            src="/brand/provence-epi-logo-blanc.png"
            alt="Provence EPI"
            width={180}
            height={79}
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-petrol-100/70">
            Équipements de protection individuelle &amp; prévention. À l'écoute des professionnels et
            des particuliers depuis {CONTACT.since}.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={`${linkBase}${l.href}`} className="text-sm text-petrol-100/70 transition hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="text-sm text-petrol-100/70 transition hover:text-cream">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-petrol-100/70">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition hover:text-cream">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="transition hover:text-cream">
                {CONTACT.phone}
              </a>
            </li>
            <li>{CONTACT.address}</li>
            <li className="text-petrol-100/50">{CONTACT.hours}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
            Informations
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-petrol-100/70">
            <li><Link href="#mentions-legales" className="transition hover:text-cream">Mentions légales</Link></li>
            <li><Link href="#confidentialite" className="transition hover:text-cream">Confidentialité</Link></li>
            <li><Link href="#cgv" className="transition hover:text-cream">CGV</Link></li>
            <li><a href={PRODUCT.buyUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-cream">Acheter Canaria+</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-petrol-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Provence EPI. Tous droits réservés.</p>
          <p>Canaria+ est une marque de Biodata Bank, distribuée en France par Provence EPI.</p>
        </div>
      </div>
    </footer>
  );
}
