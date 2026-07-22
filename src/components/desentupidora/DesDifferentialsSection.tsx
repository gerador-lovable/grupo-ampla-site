import { Award, Zap, Shield, Wrench, CreditCard, FileText, Clock, HardHat } from "lucide-react";

const differentials = [
 { icon: Award, title: "35 anos desentupindo Curitiba", description: "Empresa familiar fundada em 1989. Você fala com quem executa." },
 { icon: Zap, title: "1h no seu endereço", description: "Equipe de plantão em Colombo, Curitiba e RMC." },
 { icon: Shield, title: "Entupiu de novo? Voltamos", description: "90 dias de garantia por escrito, sem cobrar retorno." },
 { icon: Wrench, title: "Sem quebrar piso", description: "Máquina rotativa e hidrojato pelo próprio ralo." },
 { icon: CreditCard, title: "Paga em 12x", description: "PIX, dinheiro, débito ou crédito na hora." },
 { icon: FileText, title: "Preço antes do serviço", description: "Orçamento fechado no WhatsApp, sem surpresa na conta." },
 { icon: Clock, title: "24h, incluindo feriado", description: "Madrugada e domingo pelo mesmo preço." },
 { icon: HardHat, title: "Uniformizado e identificado", description: "Técnico com crachá, EPI e caminhão da empresa." },
];

const DesDifferentialsSection = () => {
 return (
 <section className="py-16 md:py-20 bg-background">
 <div className="container px-4">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
 Por que chamar a Ampla
 </h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Quem chama uma vez, chama de novo, e indica pro vizinho.
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
