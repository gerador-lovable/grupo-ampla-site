import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, Rat, Bird } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceCondominium from "@/assets/service-condominium.jpg";
import servicePreventive from "@/assets/service-preventive.jpg";
import { buildRedirectUrl } from "@/lib/whatsapp";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "dedetizacao" });

type ServiceCard = {
  image?: string;
  Icon?: typeof Droplet;
  title: string;
  description: string;
  href?: string;
};

const services: ServiceCard[] = [
  {
    image: serviceResidential,
    title: "Dedetização Residencial",
    description: "Proteção completa para sua casa e família. Eliminamos baratas, formigas, aranhas e outros insetos com produtos seguros para crianças e pets.",
  },
  {
    image: serviceCommercial,
    title: "Dedetização Comercial",
    description: "Soluções empresariais para escritórios, lojas, restaurantes e indústrias. Laudo técnico incluso para conformidade com vigilância sanitária.",
    href: "/servicos/dedetizacao-comercial",
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
  {
    Icon: Droplet,
    title: "Limpeza de Caixa d'Água",
    description: "Higienização técnica com hipoclorito, certificado válido por 6 meses aceito pela vigilância sanitária e por síndicos.",
    href: "/servicos/limpeza-caixa-dagua",
  },
  {
    Icon: Rat,
    title: "Controle de Roedores",
    description: "Desratização com iscas em porta-iscas lacrados, laudo técnico e monitoramento periódico para residências, condomínios e empresas.",
    href: "/servicos/controle-roedores",
  },
  {
    Icon: Bird,
    title: "Pombos e Morcegos",
    description: "Afastamento humanitário com espículas, telas e barreiras físicas. Limpeza e descontaminação de fezes acumuladas com EPI completo.",
    href: "/servicos/pombos-e-morcegos",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {service.image ? (
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
              ) : service.Icon ? (
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <service.Icon className="w-20 h-20 text-primary" strokeWidth={1.5} />
                </div>
              ) : null}
              <CardContent className="p-6 flex flex-col items-start gap-3">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {service.href && (
                    <Button asChild variant="outline" className="min-h-[44px] font-semibold">
                      <Link to={service.href}>Saiba mais</Link>
                    </Button>
                  )}
                  <Button asChild className="bg-[#075E54] hover:bg-[#075E54]/90 text-white min-h-[44px] font-semibold transition-transform duration-200 hover:scale-105">
                    <Link to={WHATSAPP_REDIRECT}>
                      <WhatsAppIcon className="w-5 h-5 mr-2" />
                      Orçamento
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
