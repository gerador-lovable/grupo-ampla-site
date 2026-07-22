import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import LazyImage from "@/components/LazyImage";

import piaImg from "@/assets/problems/pia-entupida.webp";
import vasoImg from "@/assets/problems/vaso-sanitario.webp";
import raloImg from "@/assets/problems/ralo-entupido.webp";
import gorduraImg from "@/assets/problems/caixa-gordura.webp";
import esgotoImg from "@/assets/problems/esgoto-entupido.webp";
import colunaImg from "@/assets/problems/coluna-coletora.webp";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "desentupimento" });

const problems = [
 { image: piaImg, name: "Pia não escoa", description: "Cozinha ou banheiro, gordura, cabelo e restos. Resolvido em 30 minutos." },
 { image: vasoImg, name: "Vaso transbordando", description: "Desobstrução imediata, sem quebrar piso nem parede." },
 { image: raloImg, name: "Ralo com água parada", description: "Box, área de serviço e cozinha, acaba com poça e mau cheiro." },
 { image: gorduraImg, name: "Caixa de gordura fedendo", description: "Limpeza, retirada de resíduo e destinação correta." },
 { image: esgotoImg, name: "Esgoto voltando pela pia", description: "Rede externa entupida, hidrojato resolve sem escavação." },
 { image: colunaImg, name: "Prédio com coluna entupida", description: "Prumada e coluna coletora do condomínio. Contrato com síndico." },
];

const DesProblemsSection = () => {
 return (
 <section className="section-py bg-background">
 <div className="container px-4">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
 Qual é o seu problema agora?
 </h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Chama no WhatsApp com uma foto, o técnico já sai com o equipamento certo.
 </p>

 <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-10">
 {problems.map((p) => (
 <div key={p.name} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center">
 <div className="w-full h-32 md:h-40 overflow-hidden">
  <LazyImage
  src={p.image}
  alt={p.name}
  width={512}
  height={512}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
 </div>
 <div className="p-4">
 <h3 className="font-bold text-foreground text-sm md:text-base mb-2">{p.name}</h3>
 <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{p.description}</p>
 </div>
 </div>
 ))}
 </div>

 <div className="text-center">
 <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white font-bold text-lg px-10 min-h-[52px] transition-transform duration-200 hover:scale-105">
 <Link to={WHATSAPP_REDIRECT}>
 <WhatsAppIcon className="w-6 h-6 mr-2" />
 Chamar desentupidor agora
 </Link>
 </Button>
 </div>
 </div>
 </section>
 );
};

export default DesProblemsSection;
