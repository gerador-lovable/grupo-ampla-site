import { Link } from "react-router-dom";
import { Droplet, Rat, Bird, Wrench, ArrowRight, Clock, Tag } from "lucide-react";

const tiles = [
  {
    to: "/emergencia-24h",
    nome: "Emergência 24h",
    desc: "Técnico no endereço em até 2h, Curitiba e RMC.",
    Icon: Clock,
  },
  {
    to: "/precos",
    nome: "Tabela de Preços",
    desc: "Faixas 2026 de dedetização e desentupimento.",
    Icon: Tag,
  },
  {
    to: "/servicos/limpeza-caixa-dagua",
    nome: "Limpeza de Caixa d'Água",
    desc: "Higienização com certificado válido por 6 meses.",
    Icon: Droplet,
  },
  {
    to: "/servicos/controle-roedores",
    nome: "Controle de Roedores",
    desc: "Desratização técnica com porta-iscas lacrados.",
    Icon: Rat,
  },
  {
    to: "/servicos/pombos-e-morcegos",
    nome: "Pombos e Morcegos",
    desc: "Afastamento humanitário com barreiras físicas.",
    Icon: Bird,
  },
  {
    to: "/desentupidora",
    nome: "Desentupidora",
    desc: "Esgoto, pia, ralo, hidrojateamento e fossa.",
    Icon: Wrench,
  },
];

interface Props {
  titulo?: string;
  subtitulo?: string;
  bg?: "background" | "muted" | "secondary";
}

const bgClass = {
  background: "bg-background",
  muted: "bg-muted/40",
  secondary: "bg-secondary",
};

const OutrosServicosBlock = ({
  titulo = "Também oferecemos",
  subtitulo = "Serviços complementares para manter seu imóvel protegido de ponta a ponta.",
  bg = "background",
}: Props) => {
  return (
    <section className={`section-py ${bgClass[bg]}`}>
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          {titulo}
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          {subtitulo}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {tiles.map(({ to, nome, desc, Icon }) => (
          <Link
              key={to}
              to={to}
              className="group bg-surface border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-elegant hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-base leading-snug">
                {nome}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {desc}
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                Saiba mais <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutrosServicosBlock;