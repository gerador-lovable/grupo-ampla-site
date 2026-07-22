import { Award, Zap, Shield, BadgeCheck, CreditCard, FileText, Leaf, HardHat } from "lucide-react";

const differentials = [
 { icon: Award, title: "35 anos na mesma família", description: "Fundada em 1989 em Curitiba. Você fala com o técnico, não com um call center." },
 { icon: Zap, title: "Técnico no seu endereço em 2h", description: "Base própria em Colombo cobre Curitiba e RMC no mesmo dia útil." },
 { icon: Shield, title: "Voltou praga? Voltamos sem cobrar", description: "6 meses de garantia por escrito no laudo. Sem letra miúda." },
 { icon: BadgeCheck, title: "Produto sem cheiro forte", description: "Registrado na ANVISA. Você volta pra casa no mesmo dia, criança e pet inclusos." },
 { icon: CreditCard, title: "Parcela em 12x no cartão", description: "PIX, débito, crédito e dinheiro. Sem entrada, sem burocracia." },
 { icon: FileText, title: "Laudo assinado no ato", description: "Documento aceito por vigilância sanitária, síndico e auditoria." },
 { icon: Leaf, title: "Menos veneno onde dá", description: "Usamos gel e isca em vez de spray sempre que o alvo permite." },
 { icon: HardHat, title: "Técnico uniformizado e treinado", description: "Mesma equipe da última visita. Chega quando marcou, sai só quando terminou." },
];

const DifferentialsSection = () => {
 return (
 <section className="py-20 md:py-28 bg-background relative overflow-hidden">
 <div aria-hidden className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
 <div className="container px-4 relative">
 <div className="max-w-2xl mb-16">
 <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
 Por que Ampla
 </span>
 <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05] text-balance">
 Não é o mais barato. É o que resolve<span className="text-accent">.</span>
 </h2>
 <p className="text-muted-foreground text-lg mt-5 max-w-xl">
 Cada visita tem protocolo escrito, produto rastreado e laudo assinado. Se voltar praga em 6 meses, voltamos sem cobrar.
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
