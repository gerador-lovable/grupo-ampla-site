import { Shield, Wrench, ThumbsUp, Clock } from "lucide-react";

const seals = [
  { icon: Shield, title: "90 dias de garantia", description: "Entupiu de novo? Voltamos sem cobrar" },
  { icon: Wrench, title: "Sem quebrar piso", description: "Máquina rotativa e hidrojato pelo ralo" },
  { icon: ThumbsUp, title: "Preço fechado antes", description: "Sem surpresa quando terminar" },
  { icon: Clock, title: "24h — inclusive feriado", description: "Domingo e madrugada, mesmo preço" },
];

const DesGuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-trust text-trust-foreground">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Entupiu de novo em 90 dias? A gente volta.
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
