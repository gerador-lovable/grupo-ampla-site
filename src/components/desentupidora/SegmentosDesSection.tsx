import { Link } from "react-router-dom";
import {
 Home,
 Building2,
 Utensils,
 Factory,
 Fuel,
 Cross,
 ShoppingCart,
 School,
} from "lucide-react";
import { buildRedirectUrl } from "@/lib/whatsapp";

const WHATSAPP = buildRedirectUrl({ servico: "desentupimento" });

const segmentos = [
 { Icon: Home, nome: "Residências", desc: "Pia, ralo, vaso e esgoto entupidos, sem quebrar piso ou parede." },
 { Icon: Building2, nome: "Condomínios", desc: "Prumadas, colunas de esgoto e caixas de gordura, atendimento 24h." },
 { Icon: Utensils, nome: "Restaurantes", desc: "Caixa de gordura saturada e ralos entupidos por resíduos gordurosos." },
 { Icon: Factory, nome: "Indústrias", desc: "Hidrojateamento em tubulações industriais, esgoto e efluentes." },
 { Icon: Fuel, nome: "Postos e oficinas", desc: "Caixa separadora de água e óleo, limpeza e desobstrução completa." },
 { Icon: Cross, nome: "Hospitais e clínicas", desc: "Serviço discreto, sem interromper atendimento nem gerar mau cheiro." },
 { Icon: ShoppingCart, nome: "Supermercados", desc: "Câmeras frias, açougue e padaria, gordura e resíduos removidos por hidrojato." },
 { Icon: School, nome: "Escolas e creches", desc: "Atendimento em finais de semana e feriados, sem contato com alunos." },
];

const SegmentosDesSection = () => {
 return (
  <section className="section-py bg-surface-muted">
   <div className="container px-4 max-w-6xl">
    <div className="max-w-2xl mb-12">
     <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
      Onde atendemos
     </span>
     <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05] text-balance">
      Desentupimento para cada tipo de operação<span className="text-accent">.</span>
     </h2>
     <p className="text-muted-foreground text-lg mt-5">
      Da residência à indústria, equipamento e protocolo próprios, com nota fiscal e garantia por escrito.
     </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
     {segmentos.map((s) => (
      <Link
       key={s.nome}
       to={WHATSAPP}
       className="bg-surface border border-border rounded-2xl p-5 hover:border-primary hover:shadow-elegant transition-all group"
      >
       <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <s.Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
       </div>
       <h3 className="font-display text-base font-semibold text-foreground mb-1.5">{s.nome}</h3>
       <p className="text-muted-foreground text-sm leading-snug">{s.desc}</p>
      </Link>
     ))}
    </div>
   </div>
  </section>
 );
};

export default SegmentosDesSection;