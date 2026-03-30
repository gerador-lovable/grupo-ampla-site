import { Clock, Shield, BadgeCheck, CreditCard, Star, Users, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5541995121583?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20dedetiza%C3%A7%C3%A3o.";
const PHONE_URL = "tel:+5541995121583";

const benefits = [
  { icon: Clock, text: "Atendimento em até 2 horas" },
  { icon: Shield, text: "Garantia de 6 meses" },
  { icon: BadgeCheck, text: "Produtos certificados pela ANVISA" },
  { icon: CreditCard, text: "Parcelamento em até 12x" },
];

const stats = [
  { icon: Users, value: "+10.000", label: "Clientes Atendidos" },
  { icon: Award, value: "35 Anos", label: "de Experiência" },
  { icon: Star, value: "4.8/5", label: "Avaliação Média" },
];

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
      </div>
      <div className="container relative z-10 py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
            Dedetização Profissional em Curitiba
            <span className="block text-accent mt-2">35 Anos de Experiência</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Há 35 anos protegendo lares e empresas com qualidade e confiança. Soluções rápidas e eficazes para um ambiente seguro e saudável. <strong>Orçamento grátis!</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-8">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-primary-foreground/90 text-sm md:text-base">
                <b.icon className="w-5 h-5 text-accent shrink-0" />
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-bold px-8 py-6 rounded-lg shadow-lg min-h-[52px]"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero Orçamento Grátis
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-lg min-h-[52px]"
            >
              <a href={PHONE_URL}>
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora: (41) 99512-1583
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="w-6 h-6 text-accent mx-auto mb-1" />
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
