import { Droplets, ShowerHead, Pipette, Bath, Waves, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/5541995121583?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20desentupimento.";

const problems = [
  { icon: Bath, name: "Pia Entupida", description: "Desentupimento de pias de cozinha e banheiro com equipamento profissional." },
  { icon: Droplets, name: "Vaso Sanitário", description: "Desobstrução de vasos sanitários sem quebrar pisos ou paredes." },
  { icon: Waves, name: "Ralo Entupido", description: "Limpeza e desobstrução de ralos de chão, box e área de serviço." },
  { icon: Pipette, name: "Caixa de Gordura", description: "Limpeza e manutenção preventiva de caixas de gordura residenciais e comerciais." },
  { icon: ShowerHead, name: "Esgoto Entupido", description: "Desentupimento de redes de esgoto com hidrojateamento de alta pressão." },
  { icon: Plug, name: "Coluna Coletora", description: "Desobstrução de colunas coletoras de prédios e condomínios." },
];

const DesProblemsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Problemas que Resolvemos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Nossa equipe está preparada para resolver qualquer tipo de entupimento com rapidez
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-10">
          {problems.map((p) => (
            <div key={p.name} className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/10 transition-colors duration-300">
                <p.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white font-bold text-lg px-10 min-h-[52px] transition-transform duration-200 hover:scale-105">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Solicitar Orçamento Grátis
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesProblemsSection;
