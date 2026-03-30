import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceCondominium from "@/assets/service-condominium.jpg";
import servicePreventive from "@/assets/service-preventive.jpg";

const WHATSAPP_URL = "https://wa.me/5541995121583?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20dedetiza%C3%A7%C3%A3o.";

const services = [
  {
    image: serviceResidential,
    title: "Dedetização Residencial",
    description: "Proteção completa para sua casa e família. Eliminamos baratas, formigas, aranhas e outros insetos com produtos seguros para crianças e pets.",
  },
  {
    image: serviceCommercial,
    title: "Dedetização Comercial",
    description: "Soluções empresariais para escritórios, lojas, restaurantes e indústrias. Laudo técnico incluso para conformidade com vigilância sanitária.",
  },
  {
    image: serviceCondominium,
    title: "Dedetização Condominial",
    description: "Atendimento especializado para condomínios residenciais e comerciais. Áreas comuns, apartamentos e garagens com preços especiais.",
  },
  {
    image: servicePreventive,
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
            <Card key={service.title} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <CardContent className="p-6 flex flex-col items-start gap-3">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <Button asChild className="bg-[#075E54] hover:bg-[#075E54]/90 text-white mt-auto min-h-[44px] font-semibold transition-transform duration-200 hover:scale-105">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
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
