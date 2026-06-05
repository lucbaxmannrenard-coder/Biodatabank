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

/** Validité de prix : fin de l'année prochaine (requis par Google pour les résultats enrichis « Offer »). */
const PRICE_VALID_UNTIL = `${new Date().getFullYear() + 1}-12-31`;

/** Caractéristiques techniques exposées en données structurées (lisibles par Google et les IA). */
const PRODUCT_SPECS: { name: string; value: string }[] = [
  { name: "Technologie", value: "Heat Stock Tracker® (capteur breveté)" },
  { name: "Alertes", value: "Vibration, son 74 dB et LED (rouge/verte)" },
  { name: "Autonomie", value: "Jusqu'à 5 mois en continu, sans recharge" },
  { name: "Connectivité", value: "Aucune — fonctionne en totale autonomie" },
  { name: "Étanchéité et résistance", value: "IP67, jusqu'à 80 °C, résistant aux chocs" },
  { name: "Dimensions du module", value: "45 × 27 × 13 mm" },
  { name: "Matériaux", value: "ABS, silicone, acier inoxydable" },
];

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
      weight: { "@type": "QuantitativeValue", value: 30, unitCode: "GRM" },
      material: "ABS, silicone, acier inoxydable",
      additionalProperty: PRODUCT_SPECS.map((s) => ({
        "@type": "PropertyValue",
        name: s.name,
        value: s.value,
      })),
      offers: {
        "@type": "Offer",
        url: PRODUCT.buyUrl,
        priceCurrency: PRODUCT.priceCurrency,
        price: PRODUCT.price,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@id": `${SITE_URL}/#organization` },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "10.50",
            currency: "EUR",
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "FR",
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: 0,
              maxValue: 1,
              unitCode: "DAY",
            },
            transitTime: {
              "@type": "QuantitativeValue",
              minValue: 2,
              maxValue: 3,
              unitCode: "DAY",
            },
          },
        },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "FR",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 14,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/ReturnShippingFees",
        },
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
