import { Clock, Shield, BadgeCheck, CreditCard, Star, Users, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import heroBg from "@/assets/hero-bg.jpg";
import heroTechnician from "@/assets/hero-technician.webp";

const WHATSAPP_URL = "https://wa.me/5541995121583?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20dedetiza%C3%A7%C3%A3o.";

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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Técnico profissional de dedetização aplicando tratamento em residência"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a4a]/95 via-primary/90 to-primary/75" />
      </div>

      <div className="container relative z-10 pt-32 md:pt-40 pb-16 md:pb-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Content */}
          <div>
            <div className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              ⭐ Referência em Curitiba há 35 anos
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up">
              Dedetização Profissional
              <span className="block text-accent mt-2">em Curitiba e Região</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Há 35 anos protegendo lares e empresas com qualidade e confiança. Soluções rápidas e eficazes para um ambiente seguro e saudável. <strong className="text-accent">Orçamento grátis!</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 animate-fade-in-up animation-delay-300">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-2.5 text-primary-foreground/90">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <b.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm md:text-base">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-10 py-7 rounded-xl shadow-2xl shadow-[#075E54]/30 min-h-[56px] transition-transform duration-200 hover:scale-105"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Quero Orçamento Grátis
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-md animate-fade-in-up animation-delay-500">
              {stats.map((s) => (
                <div key={s.label} className="text-center bg-primary-foreground/10 rounded-xl py-4 px-2 backdrop-blur-sm">
                  <s.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                  <div className="text-xl md:text-2xl font-bold text-primary-foreground">{s.value}</div>
                  <div className="text-xs text-primary-foreground/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Technician image */}
          <div className="hidden lg:flex justify-center items-end self-stretch animate-fade-in animation-delay-300 -mb-24">
            <img
              src={heroTechnician}
              alt="Técnico profissional da Ampla Dedetizadora"
              className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
