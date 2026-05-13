import { Link } from "react-router-dom";
import { Home, Building2, Building, Droplets, ShowerHead, PipetteIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "desentupimento" });

const services = [
  {
    icon: Home,
    title: "Desentupimento Residencial",
    description: "Desentupimento de pias, vasos sanitários, ralos, caixas de gordura e tubulações residenciais com rapidez e sem quebrar.",
  },
  {
    icon: Building2,
    title: "Desentupimento Comercial",
    description: "Soluções para restaurantes, hotéis, escritórios e indústrias. Atendimento rápido para não parar seu negócio.",
  },
  {
    icon: Building,
    title: "Desentupimento Condominial",
    description: "Manutenção preventiva e emergencial para condomínios. Limpeza de colunas coletoras e redes de esgoto.",
  },
  {
    icon: Droplets,
    title: "Limpeza de Caixa de Gordura",
    description: "Limpeza e manutenção de caixas de gordura residenciais e comerciais. Evite entupimentos e mau cheiro.",
  },
  {
    icon: ShowerHead,
    title: "Hidrojateamento",
    description: "Limpeza de tubulações com jato de água de alta pressão. Remove incrustações e desobstrui com total eficácia.",
  },
  {
    icon: PipetteIcon,
    title: "Limpeza de Fossa",
    description: "Serviço de esgotamento e limpeza de fossas sépticas com caminhão limpa-fossa. Descarte ambientalmente correto.",
  },
];

const DesServicesSection = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 bg-secondary">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Nossos Serviços de Desentupimento
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Soluções completas para todos os tipos de entupimento
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <Button asChild className="bg-[#075E54] hover:bg-[#075E54]/90 text-white mt-auto min-h-[44px] font-semibold transition-transform duration-200 hover:scale-105">
                  <Link to={WHATSAPP_REDIRECT}>
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesServicesSection;
