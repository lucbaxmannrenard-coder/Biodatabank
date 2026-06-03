# Provence EPI — Site vitrine Canaria+

Site vitrine haut de gamme pour **Provence EPI**, distributeur français du bracelet connecté de
prévention des coups de chaleur **Canaria+** (fabriqué par Biodata Bank).

Le site cible **avant tout les particuliers** souhaitant protéger un proche exposé — personne âgée,
isolée ou à risque — tout en présentant un volet professionnel (BTP, industrie, agriculture…).

> ⚠️ **Mention obligatoire** : Canaria+ n'est pas un dispositif médical. En cas de malaise,
> consulter un professionnel de santé.

---

## Stack technique

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (design tokens CSS-first dans `app/globals.css`)
- **Framer Motion** — révélations au scroll, micro-interactions, accordéon, compteurs
- **GSAP + ScrollTrigger** — jauge thermique animée au scroll (section « Comment ça marche »)
- **Lenis** — smooth scroll (désactivé si `prefers-reduced-motion`)
- **lucide-react** — icônes

L'ensemble du motion design respecte `prefers-reduced-motion` (animations atténuées/désactivées).

---

## Démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → http://localhost:3000

# 3. Build de production
npm run build

# 4. Lancer le build de production
npm start
```

---

## Structure

```
app/
  layout.tsx          # fonts (Bricolage Grotesque + Inter), métadonnées SEO/OG
  page.tsx            # assemblage des sections
  globals.css         # design system (palette, typo, utilitaires, reduced-motion)
  icon.svg            # favicon de marque
components/
  header.tsx          # header sticky translucide + menu mobile
  footer.tsx          # footer + disclaimer « pas un dispositif médical »
  smooth-scroll.tsx   # provider Lenis (respecte reduced-motion)
  reveal.tsx          # primitives de révélation au scroll
  animated-number.tsx # compteurs animés
  cta-button.tsx      # bouton CTA réutilisable
  section-heading.tsx # en-tête de section (eyebrow + titre + intro)
  sections/
    hero.tsx          # accroche + visuel produit + ondes de pulsation
    probleme.tsx      # enjeu canicule + chiffres animés
    solution.tsx      # Canaria+ distribué par Provence EPI
    fonctionnement.tsx# 3 étapes + jauge thermique GSAP
    caracteristiques.tsx
    pour-qui.tsx      # particuliers (prioritaire) + volet pro
    specifications.tsx# tableau specs techniques
    references.tsx    # preuves (faits fabricant, sans faux logos)
    faq.tsx           # accordéon animé
    contact.tsx       # formulaire de devis (mailto)
lib/
  site.ts             # données partagées (nav, coordonnées, produit)
public/
  brand/              # logos Provence EPI
  images/             # visuels Canaria (Biodata Bank)
```

---

## Identité de marque

- **Couleurs** : orange Provence EPI `#EC6925`, pétrole profond (confiance), sable chaud (fond),
  ambre/rouge (alerte). Palette extraite du logo officiel + du produit.
- **Typographie** : Bricolage Grotesque (titres) · Inter (corps).
- **Coordonnées** : contact@provence-epi.com · 04 92 35 41 55 · Château-Arnoux Saint-Auban.

---

## À compléter / personnaliser

- **Visuels** : les images Canaria proviennent du site fabricant (`biodatabank.co.jp`). Vérifier les
  droits d'usage en tant que distributeur et remplacer par le media kit officiel si disponible.
- **Témoignages clients** : la section « Preuves » contient un emplacement honnête à compléter avec
  de vrais retours clients Provence EPI (ne pas inventer de fausses références).
- **Formulaire** : il ouvre actuellement le client mail (`mailto:`). Brancher un backend
  (API route + service d'envoi) pour un envoi sans client mail.
- **Pages légales** : créer Mentions légales / Confidentialité / CGV (liens présents en footer).
- **Open Graph** : remplacer `SITE_URL` dans `app/layout.tsx` par l'URL de production réelle.

---

## Performance & accessibilité

- `next/image` (conversion WebP automatique, lazy-loading).
- Animations GPU-friendly (transform/opacity), `prefers-reduced-motion` respecté partout.
- Hiérarchie sémantique des titres, `alt` sur les images, focus visibles, navigation clavier.
- Build entièrement statique (prerender), idéal pour un bon score Lighthouse.
