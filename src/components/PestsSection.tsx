import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

import baratasImg from "@/assets/pests/baratas.jpg";
import ratosImg from "@/assets/pests/ratos.jpg";
import cupinsImg from "@/assets/pests/cupins.jpg";
import formigasImg from "@/assets/pests/formigas.jpg";
import mosquitosImg from "@/assets/pests/mosquitos.jpg";
import aranhasImg from "@/assets/pests/aranhas.jpg";
import pulgasImg from "@/assets/pests/pulgas.jpg";
import tracasImg from "@/assets/pests/tracas.jpg";

const WHATSAPP_URL = "https://wa.me/5541995121583?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20dedetiza%C3%A7%C3%A3o.";

const pests = [
  { image: baratasImg, name: "Baratas", description: "Eliminação completa de baratas americanas e germânicas com tratamento residual de longa duração." },
  { image: ratosImg, name: "Ratos e Roedores", description: "Desratização profissional com técnicas de exclusão e controle integrado de roedores." },
  { image: cupinsImg, name: "Cupins", description: "Descupinização com tratamento de solo e madeira. Proteção contra cupins subterrâneos e de madeira seca." },
  { image: formigasImg, name: "Formigas", description: "Controle de formigas doceiras e cortadeiras com gel atrativo e iscas granuladas." },
  { image: mosquitosImg, name: "Mosquitos e Pernilongos", description: "Nebulização e termonebulização para controle de mosquitos, incluindo Aedes aegypti." },
  { image: aranhasImg, name: "Aranhas e Escorpiões", description: "Tratamento especializado para aracnídeos perigosos com pulverização residual." },
  { image: pulgasImg, name: "Pulgas e Carrapatos", description: "Desinsetização completa para ambientes com animais de estimação, segura para pets." },
  { image: tracasImg, name: "Traças e Brocas", description: "Proteção de tecidos, papéis e madeira contra traças e brocas com fumigação controlada." },
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
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-full h-32 md:h-40 overflow-hidden">
                <img
                  src={pest.image}
                  alt={pest.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground text-sm md:text-base mb-2">{pest.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{pest.description}</p>
              </div>
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
