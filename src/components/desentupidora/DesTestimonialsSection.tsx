import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Milena Pinto",
    stars: 5,
    text: "Atendimento de excelência, cumpri prazo e entrega o que promete. Super educados.",
  },
  {
    name: "Eugenio Monteiro",
    stars: 5,
    text: "Excelente trabalho realizado em nosso Condomínio. Eles realizaram a limpeza das 2 caixas d'água. Atendimento de qualidade, equipe eficiente. O serviço foi feito dentro da normalidade e nos prazos firmados. Há anos que temos essa parceria!",
  },
  {
    name: "Luiz Eduardo Scremin",
    stars: 5,
    text: "Equipe de vendas tanto que presta o serviço na casa com extrema experiência e profissionalismo.",
  },
  {
    name: "Larissa Cavalcanti Dias",
    stars: 5,
    text: "Dias antes do vencimento dos laudos a colaboradora Jocelene já entra em contato conosco nos lembrando e sendo bastante solicita para agendarmos a contratação dos serviços. Recomendamos!",
  },
  {
    name: "Keila Ferreira",
    stars: 5,
    text: "Recomendamos. Em nossa empresa até apareceu aranhas após 3 semanas, porém eles vieram prontamente e executaram novamente o serviço. Sempre fechamos com eles em todas as empresas que administramos.",
  },
  {
    name: "Bruno Inàcio",
    stars: 5,
    text: "Empresa com ótimo atendimento, documentos da empresa em dia e conforme legislação. Empresa atende regularmente os serviços necessários, quanto de limpeza de caixas e dedetização.",
  },
];

const DesTestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="h-6"
            loading="lazy"
          />
          <span className="text-foreground font-semibold text-lg">Avaliações</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-2">
          O que Nossos Clientes Dizem
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-accent text-accent" : "fill-accent/50 text-accent/50"}`} />
            ))}
          </div>
          <span className="text-foreground font-bold text-lg">4.5/5</span>
          <span className="text-muted-foreground text-sm">baseado em 75+ avaliações no Google</span>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Avaliações reais de clientes verificados no Google Meu Negócio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">Avaliação no Google</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesTestimonialsSection;
