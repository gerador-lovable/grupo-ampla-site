import { Link } from "react-router-dom";
import {
 Home,
 Building2,
 BedDouble,
 Utensils,
 ShoppingCart,
 Cross,
 GraduationCap,
 Briefcase,
} from "lucide-react";

const segmentos = [
 { Icon: Home, nome: "Residências", desc: "Casa e apartamento com produto sem cheiro, seguro para crianças e pets.", href: "/servicos/dedetizacao-residencial" },
 { Icon: Building2, nome: "Condomínios", desc: "Áreas comuns, garagem e apartamentos com contrato, laudo e nota fiscal.", href: "/servicos/dedetizacao-condominial" },
 { Icon: BedDouble, nome: "Hotéis e pousadas", desc: "Discrição, protocolo para percevejo e liberação apartamento por apartamento.", href: "/servicos/dedetizacao-hoteis" },
 { Icon: Utensils, nome: "Restaurantes", desc: "MIP com registros, laudo e conformidade para vigilância sanitária.", href: "/servicos/dedetizacao-restaurantes" },
 { Icon: ShoppingCart, nome: "Supermercados", desc: "Controle integrado 24h com rotina noturna e sem parar operação.", href: "/servicos/dedetizacao-supermercados" },
 { Icon: Cross, nome: "Hospitais e clínicas", desc: "Produtos em gel e pó, sem evacuar o ambiente. Laudo por setor.", href: "/servicos/dedetizacao-hospitais-clinicas" },
 { Icon: GraduationCap, nome: "Escolas e creches", desc: "Aplicação em finais de semana e feriados, sem contato com alunos.", href: "/servicos/dedetizacao-escolas" },
 { Icon: Briefcase, nome: "Indústrias e empresas", desc: "Plano MIP para linha de produção, estoque e áreas administrativas.", href: "/servicos/dedetizacao-industrias" },
];

const SegmentosSection = () => {
 return (
  <section className="section-py bg-surface-muted">
   <div className="container px-4 max-w-6xl">
    <div className="max-w-2xl mb-12">
     <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
      Áreas de atuação
     </span>
     <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05] text-balance">
      Onde a Ampla atua<span className="text-accent">.</span>
     </h2>
     <p className="text-muted-foreground text-lg mt-5">
      Do apartamento à indústria, protocolo próprio para cada tipo de operação, com laudo e nota fiscal.
     </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
     {segmentos.map((s) => (
      <Link
       key={s.nome}
       to={s.href}
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

export default SegmentosSection;