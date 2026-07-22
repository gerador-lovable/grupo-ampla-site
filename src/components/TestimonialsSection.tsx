import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Água Verde, Curitiba",
    service: "Dedetização Residencial",
    stars: 5,
    text: "A Ampla resolveu nosso problema de baratas em 24 horas. Profissionais pontuais, educados e o preço foi justo. Recomendo demais!",
  },
  {
    name: "Carlos Oliveira",
    location: "Centro Cívico, Curitiba",
    service: "Dedetização Comercial",
    stars: 5,
    text: "Contratamos para nosso restaurante e o serviço foi impecável. Laudo técnico entregue no prazo e a garantia nos deu muita tranquilidade.",
  },
  {
    name: "Ana Rodrigues",
    location: "Bacacheri, Curitiba",
    service: "Dedetização Condominial",
    stars: 5,
    text: "Atenderam todo o nosso condomínio com preço especial. A equipe foi muito profissional. Estamos livres das pragas há meses.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-muted">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 max-w-6xl mx-auto">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
              Prova social
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05] max-w-xl text-balance">
              +10.000 clientes atendidos<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-display font-semibold text-foreground">4.8/5 no Google</div>
              <div className="text-muted-foreground text-xs">Baseado em avaliações reais</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <article key={t.name} className="relative bg-surface border border-border rounded-2xl p-7 shadow-card hover:shadow-elegant transition-shadow">
              <Quote className="w-10 h-10 text-accent/30 mb-4" strokeWidth={1.5} />
              <p className="text-foreground text-[15px] leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t.location} · {t.service}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
