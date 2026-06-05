import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE_URL } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Canaria+ : bracelet anti coup de chaleur | Provence EPI",
    template: "%s · Provence EPI",
  },
  alternates: {
    canonical: "/",
  },
  description:
    "Canaria+, le bracelet connecté anti coup de chaleur distribué par Provence EPI : il alerte un proche âgé ou à risque avant le malaise. Sans recharge, sans connexion, étanche IP67.",
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
    images: [{ url: "/images/canaria-hero.png", width: 1800, height: 874, alt: "Bracelet Canaria+ de prévention du coup de chaleur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canaria+ par Provence EPI",
    description:
      "Le bracelet qui anticipe le coup de chaleur. Sans recharge, sans connexion, étanche IP67.",
    images: [{ url: "/images/canaria-hero.png", alt: "Bracelet Canaria+ de prévention du coup de chaleur" }],
  },
  category: "Santé & prévention",
  verification: {
    google: "3GwxJOES-vTQD_f4TrYwDovqx8oU9_0kDT5DW5c0iRk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#f6efe4",
  colorScheme: "light",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
