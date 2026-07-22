import { Link } from "react-router-dom";
import { Bug, Rat, TreePine, Sun, Bird, Skull, Flower2, Moon } from "lucide-react";

const pragas = [
 { slug: "baratas", nome: "Baratas", Icon: Bug },
 { slug: "ratos", nome: "Ratos", Icon: Rat },
 { slug: "cupim", nome: "Cupim", Icon: TreePine },
 { slug: "formigas", nome: "Formigas", Icon: Flower2 },
 { slug: "escorpiao", nome: "Escorpião", Icon: Skull },
 { slug: "pulgas-e-carrapatos", nome: "Pulgas", Icon: Sun },
 { slug: "percevejo", nome: "Percevejo", Icon: Moon },
 { slug: "ratos", nome: "Pombos", Icon: Bird },
];

const loop = [...pragas, ...pragas];

const PragasCarouselStrip = () => {
 return (
  <section className="py-14 bg-primary/5 overflow-hidden">
   <div className="container px-4 mb-8 text-center">
    <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
     Conheça a biologia das
    </span>
    <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
     Pragas que combatemos<span className="text-accent">.</span>
    </h2>
   </div>

   <div className="relative">
    <div
     aria-hidden
     className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-primary/5 to-transparent"
    />
    <div
     aria-hidden
     className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-primary/5 to-transparent"
    />
    <div className="flex gap-6 animate-marquee">
     {loop.map((p, i) => (
      <Link
       key={`${p.slug}-${i}`}
       to={`/dedetizacao/${p.slug}`}
       className="shrink-0 w-32 md:w-36 flex flex-col items-center gap-3 group"
      >
       <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center shadow-card group-hover:border-accent group-hover:shadow-elegant transition-all">
        <p.Icon className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:text-accent transition-colors" strokeWidth={1.5} />
       </div>
       <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
        {p.nome}
       </span>
      </Link>
     ))}
    </div>
   </div>
  </section>
 );
};

export default PragasCarouselStrip;