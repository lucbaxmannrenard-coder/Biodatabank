import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Probleme } from "@/components/sections/probleme";
import { Solution } from "@/components/sections/solution";
import { Fonctionnement } from "@/components/sections/fonctionnement";
import { Caracteristiques } from "@/components/sections/caracteristiques";
import { PourQui } from "@/components/sections/pour-qui";
import { Specifications } from "@/components/sections/specifications";
import { References } from "@/components/sections/references";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { SITE_URL, PRODUCT, CONTACT, FAQS } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Provence EPI",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/provence-epi-logo.svg`,
      email: CONTACT.email,
      telephone: CONTACT.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: "ZA des Blâches Gombert",
        postalCode: "04160",
        addressLocality: "Château-Arnoux-Saint-Auban",
        addressCountry: "FR",
      },
      sameAs: ["https://www.provence-epi.com"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Provence EPI — Canaria+",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product`,
      name: "Canaria+",
      image: [`${SITE_URL}/images/canaria-hero.png`],
      description:
        "Bracelet connecté de prévention du coup de chaleur : il surveille en continu la charge thermique du corps et alerte avant le malaise par vibration, son et lumière. Sans recharge (jusqu'à 5 mois d'autonomie), sans connexion ni smartphone, étanche IP67, 30 g. Idéal pour protéger une personne âgée ou à risque pendant la canicule.",
      category: "Bracelet connecté de prévention du coup de chaleur",
      brand: { "@type": "Brand", name: "Biodata Bank" },
      offers: {
        "@type": "Offer",
        url: PRODUCT.buyUrl,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        seller: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Probleme />
        <Solution />
        <Fonctionnement />
        <Caracteristiques />
        <PourQui />
        <Specifications />
        <References />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
