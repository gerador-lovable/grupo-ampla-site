import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Roberto Santos",
    location: "Batel, Curitiba",
    service: "Desentupimento Residencial",
    stars: 5,
    text: "Minha pia da cozinha entupiu em um domingo e a Ampla veio em menos de 1 hora! Resolveram rápido, sem quebrar nada. Super recomendo!",
  },
  {
    name: "Fernanda Costa",
    location: "Portão, Curitiba",
    service: "Hidrojateamento",
    stars: 5,
    text: "O esgoto do nosso restaurante travou na hora do almoço. Ligamos para a Ampla e em 40 minutos estavam aqui. Serviço impecável e preço justo!",
  },
  {
    name: "José Pereira",
    location: "Santa Felicidade, Curitiba",
    service: "Limpeza de Fossa",
    stars: 5,
    text: "Precisávamos limpar a fossa do condomínio urgente. A equipe foi muito profissional, com caminhão equipado. Resolveram tudo no mesmo dia!",
  },
];

const DesTestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          O que Nossos Clientes Dizem
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Mais de 10.000 clientes satisfeitos em Curitiba e região
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-0 shadow-md">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
                <p className="text-primary text-xs font-semibold mt-1">{t.service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesTestimonialsSection;
