import { Bug, Rat, TreeDeciduous, Antenna, Spider, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/5541995121583?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20dedetiza%C3%A7%C3%A3o.";

const pests = [
  { icon: Bug, name: "Baratas", description: "Eliminação completa de baratas americanas e germânicas com tratamento residual de longa duração." },
  { icon: Rat, name: "Ratos e Roedores", description: "Desratização profissional com técnicas de exclusão e controle integrado de roedores." },
  { icon: TreeDeciduous, name: "Cupins", description: "Descupinização com tratamento de solo e madeira. Proteção contra cupins subterrâneos e de madeira seca." },
  { icon: Bug, name: "Formigas", description: "Controle de formigas doceiras e cortadeiras com gel atrativo e iscas granuladas." },
  { icon: Antenna, name: "Mosquitos e Pernilongos", description: "Nebulização e termonebulização para controle de mosquitos, incluindo Aedes aegypti." },
  { icon: Bug, name: "Aranhas e Escorpiões", description: "Tratamento especializado para aracnídeos perigosos com pulverização residual." },
  { icon: Bug, name: "Pulgas e Carrapatos", description: "Desinsetização completa para ambientes com animais de estimação, segura para pets." },
  { icon: Bug, name: "Traças e Brocas", description: "Proteção de tecidos, papéis e madeira contra traças e brocas com fumigação controlada." },
];

const PestsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Pragas que Controlamos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Nossa equipe está preparada para combater todos os tipos de pragas urbanas com eficácia comprovada
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
          {pests.map((pest) => (
            <div
              key={pest.name}
              className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                <pest.icon className="w-7 h-7 text-destructive group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base mb-2">{pest.name}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{pest.description}</p>
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

export default PestsSection;
