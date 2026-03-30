import { Award, Zap, Shield, BadgeCheck, CreditCard, FileText, Leaf, HardHat } from "lucide-react";

const differentials = [
  { icon: Award, title: "35 Anos de Experiência", description: "Tradição e know-how acumulado desde 1989" },
  { icon: Zap, title: "Atendimento Rápido", description: "Chegamos em até 2 horas na sua região" },
  { icon: Shield, title: "Garantia Real", description: "6 meses de garantia em todos os serviços" },
  { icon: BadgeCheck, title: "Produtos Certificados", description: "Aprovados pela ANVISA, seguros para família e pets" },
  { icon: CreditCard, title: "Parcelamento", description: "Até 12x no cartão de crédito" },
  { icon: FileText, title: "Laudo Técnico", description: "Documentação completa para condomínios e empresas" },
  { icon: Leaf, title: "Eco-friendly", description: "Produtos biodegradáveis quando possível" },
  { icon: HardHat, title: "Equipe Especializada", description: "Técnicos treinados e uniformizados" },
];

const DifferentialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Por que Escolher a Ampla?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Diferenciais que fazem da Ampla referência em dedetização em Curitiba
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

export default DifferentialsSection;
