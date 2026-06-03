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

export default function Home() {
  return (
    <>
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
