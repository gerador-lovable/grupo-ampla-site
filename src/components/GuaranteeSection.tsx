import { Shield, BadgeCheck, ThumbsUp, Baby } from "lucide-react";

const seals = [
  { icon: Shield, title: "6 meses de garantia", description: "Em todos os serviços contratados" },
  { icon: BadgeCheck, title: "Produtos ANVISA", description: "Certificados e rastreados" },
  { icon: ThumbsUp, title: "Satisfação garantida", description: "Ou refazemos sem custo" },
  { icon: Baby, title: "Seguro para família", description: "Crianças e pets protegidos" },
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div aria-hidden className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]" />
      <div aria-hidden className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-[120px]" />

      <div className="container px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">
            Compromisso Ampla
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.05] text-balance">
            Sua segurança, garantida por escrito.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {seals.map((s) => (
            <div key={s.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-4 text-accent">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-sm md:text-base mb-1.5">{s.title}</h3>
              <p className="text-primary-foreground/70 text-xs md:text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
