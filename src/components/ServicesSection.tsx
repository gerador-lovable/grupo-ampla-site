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
    title: "Praga em casa ou apartamento",
    description: "Eliminamos baratas, formigas, aranhas e mosquitos com produto sem cheiro forte. Você volta pra casa no mesmo dia. Seguro para crianças e pets.",
  },
  {
    image: serviceCommercial,
    title: "Vigilância sanitária no pé",
    description: "Dedetização para restaurante, loja, escritório e indústria com laudo técnico entregue no mesmo dia. Zero risco de multa ou interdição.",
    href: "/servicos/dedetizacao-comercial",
  },
  {
    image: serviceCondominium,
    title: "Condomínio com queixa de morador",
    description: "Tratamos áreas comuns, garagem e apartamentos no mesmo cronograma. Contrato com síndico, preço fechado por unidade e nota fiscal.",
  },
  {
    image: servicePreventive,
    title: "Antes que a praga volte",
    description: "Plano trimestral com visitas programadas. Custa menos que uma dedetização emergencial e mantém o imóvel protegido o ano inteiro.",
  },
  {
    Icon: Droplet,
    title: "Caixa d'água limpa em 2h",
    description: "Higienização com hipoclorito e certificado válido por 6 meses. Aceito pela vigilância sanitária e por síndicos, sem interromper o abastecimento.",
    href: "/servicos/limpeza-caixa-dagua",
  },
  {
    Icon: Rat,
    title: "Rato no forro ou na cozinha",
    description: "Porta-iscas lacrados, laudo técnico e monitoramento mensal. Padrão exigido por auditoria sanitária de restaurante, condomínio e indústria.",
    href: "/servicos/controle-roedores",
  },
  {
    Icon: Bird,
    title: "Pombo sujando a fachada",
    description: "Afastamento humanitário com espículas, telas e barreiras físicas. Limpeza e descontaminação das fezes acumuladas com EPI completo.",
    href: "/servicos/pombos-e-morcegos",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-surface-muted">
      <div className="container px-4">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
            O que resolvemos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05] text-balance">
            Diga qual é o problema<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-5">
            Do apartamento ao restaurante industrial — mesmo técnico, mesma garantia, mesmo laudo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="border border-border bg-surface shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 overflow-hidden group rounded-2xl">
              {service.image ? (
                <div className="h-48 overflow-hidden relative">
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                <div className="h-48 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-center relative overflow-hidden">
                  <div aria-hidden className="absolute inset-0 opacity-30" style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)/0.4) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }} />
                  <service.Icon className="w-20 h-20 text-primary relative" strokeWidth={1.5} />
                </div>
              ) : null}
              <CardContent className="p-6 flex flex-col items-start gap-3">
                <h3 className="font-display text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {service.href && (
                    <Button asChild variant="outline" className="min-h-[44px] font-semibold">
                      <Link to={service.href}>Saiba mais</Link>
                    </Button>
                  )}
                  <Button asChild className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground min-h-[44px] font-semibold transition-transform duration-200 hover:scale-105">
                    <Link to={WHATSAPP_REDIRECT}>
                      <WhatsAppIcon className="w-5 h-5 mr-2" />
                      Pedir orçamento
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
