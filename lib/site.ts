/** Données partagées du site Provence EPI. */

/** URL canonique de production. À mettre à jour si un domaine personnalisé est branché. */
export const SITE_URL = "https://siteweb-wheat.vercel.app";

export const NAV_LINKS = [
  { href: "#probleme", label: "Le danger" },
  { href: "#solution", label: "La solution" },
  { href: "#fonctionnement", label: "Comment ça marche" },
  { href: "#caracteristiques", label: "Atouts" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#faq", label: "FAQ" },
] as const;

export const CONTACT = {
  company: "Provence EPI",
  email: "contact@provence-epi.com",
  phone: "04 92 35 41 55",
  phoneHref: "tel:+33492354155",
  address: "ZA des Blâches Gombert, 04160 Château-Arnoux Saint-Auban",
  hours: "Lun – Ven · 8h30–12h / 13h30–17h",
  since: 2012,
} as const;

export const PRODUCT = {
  name: "Canaria+",
  maker: "Biodata Bank",
  patent: "Heat Stock Tracker®",
  /** Fiche produit officielle Provence EPI — achat direct en ligne. */
  buyUrl:
    "https://www.provence-epi.com/produit/bracelet-anti-chaleur-canaria-biodata-bank/",
  /** Prix de vente affiché sur la boutique Provence EPI (à mettre à jour si modifié). */
  price: "49.90",
  priceCurrency: "EUR",
} as const;

/** Questions fréquentes — partagées entre la section FAQ et le balisage FAQPage (SEO). */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "Canaria+ est-il un dispositif médical ?",
    a: "Non. Canaria+ est un outil de prévention qui alerte en cas de risque de coup de chaleur. Il ne pose aucun diagnostic et ne remplace jamais un avis médical. En cas de malaise, contactez un professionnel de santé.",
  },
  {
    q: "Faut-il un smartphone ou une application ?",
    a: "Non. Le bracelet fonctionne en totale autonomie : aucune application, aucun appairage, aucune connexion. C'est ce qui le rend idéal pour une personne âgée ou peu à l'aise avec la technologie.",
  },
  {
    q: "Comment se recharge-t-il ?",
    a: "Il ne se recharge pas. Canaria+ offre jusqu'à 5 mois d'autonomie en continu. On l'active une seule fois au début de la saison chaude et on n'a plus à s'en occuper.",
  },
  {
    q: "Convient-il vraiment à une personne âgée ?",
    a: "Oui, c'est même l'un de ses usages les plus pertinents. Léger (30 g), simple à porter et sans aucune manipulation, il veille en continu et donne une alerte claire (vibration, son, lumière) que l'entourage peut aussi percevoir.",
  },
  {
    q: "Peut-on le porter sous la douche ou au jardin ?",
    a: "Oui. Certifié IP67, il résiste à l'eau, à la poussière et aux chocs. Il peut rester au poignet en toutes circonstances, y compris lors d'activités extérieures.",
  },
  {
    q: "Comment l'obtenir ou équiper plusieurs personnes ?",
    a: "Canaria+ s'achète directement sur la boutique officielle Provence EPI, pour un proche comme pour toute une structure. Cliquez sur « Acheter sur Provence EPI » : vous êtes redirigé vers la fiche produit pour commander en quelques clics.",
  },
];
