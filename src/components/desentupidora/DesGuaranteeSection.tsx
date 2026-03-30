import { Shield, Wrench, ThumbsUp, Clock } from "lucide-react";

const seals = [
  { icon: Shield, title: "90 Dias de Garantia", description: "Em todos os serviços" },
  { icon: Wrench, title: "Sem Quebrar", description: "Técnicas não destrutivas" },
  { icon: ThumbsUp, title: "Satisfação Garantida", description: "Ou seu dinheiro de volta" },
  { icon: Clock, title: "Atendimento 24h", description: "Emergências a qualquer hora" },
];

const DesGuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-trust text-trust-foreground">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Sua Tranquilidade é Nossa Prioridade
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {seals.map((s) => (
            <div key={s.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-trust-foreground/10 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-sm md:text-base mb-1">{s.title}</h3>
              <p className="text-trust-foreground/80 text-xs md:text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesGuaranteeSection;
