import { Home, Building2, Building, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5541995121583?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20dedetiza%C3%A7%C3%A3o.";

const services = [
  {
    icon: Home,
    title: "Dedetização Residencial",
    description: "Proteção completa para sua casa e família. Eliminamos baratas, formigas, aranhas e outros insetos com produtos seguros para crianças e pets.",
  },
  {
    icon: Building2,
    title: "Dedetização Comercial",
    description: "Soluções empresariais para escritórios, lojas, restaurantes e indústrias. Laudo técnico incluso para conformidade com vigilância sanitária.",
  },
  {
    icon: Building,
    title: "Dedetização Condominial",
    description: "Atendimento especializado para condomínios residenciais e comerciais. Áreas comuns, apartamentos e garagens com preços especiais.",
  },
  {
    icon: ShieldCheck,
    title: "Dedetização Preventiva",
    description: "Evite infestações antes que comecem. Tratamentos periódicos que mantêm seu ambiente protegido o ano todo com custo reduzido.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 bg-secondary">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Nossos Serviços de Dedetização
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Soluções completas para todos os tipos de ambiente
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-auto min-h-[44px]">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
