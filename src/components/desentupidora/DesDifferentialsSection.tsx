import { Award, Zap, Shield, Wrench, CreditCard, FileText, Clock, HardHat } from "lucide-react";

const differentials = [
  { icon: Award, title: "35 Anos de Experiência", description: "Tradição e know-how acumulado desde 1989" },
  { icon: Zap, title: "Atendimento em 1 Hora", description: "Chegamos rapidamente na sua região" },
  { icon: Shield, title: "Garantia de 90 Dias", description: "Garantia em todos os serviços realizados" },
  { icon: Wrench, title: "Sem Quebrar", description: "Técnicas modernas que preservam sua estrutura" },
  { icon: CreditCard, title: "Parcelamento", description: "Até 12x no cartão de crédito" },
  { icon: FileText, title: "Orçamento Grátis", description: "Avaliação sem compromisso antes de executar" },
  { icon: Clock, title: "24 Horas", description: "Atendimento emergencial a qualquer hora" },
  { icon: HardHat, title: "Equipe Especializada", description: "Técnicos treinados e equipados" },
];

const DesDifferentialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Por que Escolher a Ampla?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Diferenciais que fazem da Ampla referência em desentupimento em Curitiba
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {differentials.map((d) => (
            <div key={d.title} className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <d.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">{d.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesDifferentialsSection;
