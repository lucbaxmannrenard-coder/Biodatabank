import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.provence-epi.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Provence EPI — Canaria+ : le bracelet qui prévient le coup de chaleur",
    template: "%s · Provence EPI",
  },
  description:
    "Provence EPI distribue Canaria+, le bracelet connecté qui détecte la surchauffe du corps et alerte avant l'accident. Idéal pour protéger un proche âgé ou à risque pendant la canicule. Sans recharge, sans connexion, étanche IP67.",
  keywords: [
    "coup de chaleur",
    "canicule",
    "bracelet anti coup de chaleur",
    "personne âgée canicule",
    "Canaria",
    "Provence EPI",
    "prévention chaleur",
    "protection personnes à risque",
  ],
  authors: [{ name: "Provence EPI" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Provence EPI",
    title: "Canaria+ par Provence EPI — anticipez le coup de chaleur",
    description:
      "Le bracelet qui surveille la charge thermique du corps et alerte avant le malaise. Protégez vos proches pendant les fortes chaleurs.",
    images: [{ url: "/images/canaria-hero.png", width: 1800, height: 875, alt: "Bracelet Canaria+" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canaria+ par Provence EPI",
    description:
      "Le bracelet qui anticipe le coup de chaleur. Sans recharge, sans connexion, étanche IP67.",
    images: ["/images/canaria-hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-sand text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
