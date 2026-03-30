import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Água Verde, Curitiba",
    service: "Dedetização Residencial",
    stars: 5,
    text: "A Ampla Dedetizadora resolveu nosso problema de baratas em 24 horas! Profissionais pontuais, educados e o preço foi justo. Recomendo demais!",
  },
  {
    name: "Carlos Oliveira",
    location: "Centro Cívico, Curitiba",
    service: "Dedetização Comercial",
    stars: 5,
    text: "Contratamos para nosso restaurante e o serviço foi impecável. Laudo técnico entregue no prazo e a garantia nos deu muita tranquilidade. Excelente!",
  },
  {
    name: "Ana Rodrigues",
    location: "Bacacheri, Curitiba",
    service: "Dedetização Condominial",
    stars: 5,
    text: "Atenderam todo o nosso condomínio com preço especial. A equipe foi muito profissional e organizada. Estamos livres das pragas há meses!",
  },
];

const TestimonialsSection = () => {
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

export default TestimonialsSection;
