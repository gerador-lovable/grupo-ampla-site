import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pragasHeroImages } from "@/data/pragas-hero-images";
import type { Praga } from "@/data/pragas";

interface Props {
 praga: Praga;
 whatsapp: string;
}

const PragaHero = ({ praga, whatsapp }: Props) => {
 const bg = pragasHeroImages[praga.slug];

 return (
  <section className="relative pt-32 md:pt-40 pb-[30px] md:pb-[30px] bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80 overflow-hidden">
   {/* Imagem de fundo da praga, mais forte na direita */}
   {bg && (
    <>
     <div
      aria-hidden
      className="absolute inset-0 pointer-events-none animate-fade-in"
      style={{
       backgroundImage: `url(${bg})`,
       backgroundSize: "cover",
       backgroundPosition: "right center",
       backgroundRepeat: "no-repeat",
       maskImage:
        "linear-gradient(to right, transparent 0%, transparent 25%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.85) 70%, black 100%)",
       WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, transparent 25%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.85) 70%, black 100%)",
       opacity: 0.9,
      }}
     />
     {/* Overlay para contraste do texto */}
     <div
      aria-hidden
      className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0a1a4a] via-[#0a1a4a]/90 md:via-[#0a1a4a]/70 to-transparent"
     />
     {/* Overlay extra no mobile para leitura */}
     <div
      aria-hidden
      className="md:hidden absolute inset-0 pointer-events-none bg-[#0a1a4a]/70"
     />
    </>
   )}

   <div className="container px-4 relative z-10">
    <div className="max-w-3xl">
     <Breadcrumbs
      items={[
       { label: "Dedetização", to: "/#servicos" },
       { label: praga.nome },
      ]}
      tone="dark"
     />
     <div className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
      Ampla · 35 anos em Curitiba
     </div>
     <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
      {praga.h1}
     </h1>
     <p className="text-lg text-primary-foreground/95 mb-8 leading-relaxed max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
      {praga.intro}
     </p>
     <div className="flex flex-col sm:flex-row gap-4">
      <Button
       asChild
       size="lg"
       className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]"
      >
       <Link to={whatsapp}>
        <WhatsAppIcon className="w-6 h-6 mr-2" />
        Orçamento Grátis no WhatsApp
       </Link>
      </Button>
      <Button
       asChild
       size="lg"
       className="bg-destructive hover:bg-destructive/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]"
      >
       <a href="tel:+5541995121583">
        <Phone className="w-6 h-6 mr-2" />
        (41) 99512-1583
       </a>
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
};

export default PragaHero;