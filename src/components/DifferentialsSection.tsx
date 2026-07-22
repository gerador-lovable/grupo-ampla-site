import { Award, Zap, Shield, BadgeCheck, CreditCard, FileText, Leaf, HardHat } from "lucide-react";

const differentials = [
  { icon: Award, title: "35 anos de experiência", description: "Tradição e know-how técnico acumulado desde 1989." },
  { icon: Zap, title: "Atendimento rápido", description: "Chegamos em até 2h em toda Curitiba e região." },
  { icon: Shield, title: "Garantia real", description: "6 meses de garantia formal em todos os serviços." },
  { icon: BadgeCheck, title: "Produtos certificados", description: "Aprovados pela ANVISA, seguros para família e pets." },
  { icon: CreditCard, title: "Parcelamento em 12x", description: "No cartão de crédito, sem burocracia." },
  { icon: FileText, title: "Laudo técnico", description: "Documentação completa para vigilância e síndicos." },
  { icon: Leaf, title: "Eco-friendly", description: "Biodegradáveis sempre que a operação permite." },
  { icon: HardHat, title: "Equipe especializada", description: "Técnicos treinados, uniformizados e certificados." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="container px-4 relative">
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
            Por que a Ampla
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05] text-balance">
            Padrão técnico que faz diferença<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-xl">
            Cada visita segue protocolo escrito, produto rastreado e laudo assinado. Nada de improviso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-card">
          {differentials.map((d, i) => (
            <div
              key={d.title}
              className="group bg-surface p-7 md:p-8 transition-colors hover:bg-surface-muted relative"
            >
              <span className="absolute top-4 right-5 font-display text-xs font-medium text-muted-foreground/50 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <d.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-base mb-1.5">{d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
