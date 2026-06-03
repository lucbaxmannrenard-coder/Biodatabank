/** Données partagées du site Provence EPI. */

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
} as const;
