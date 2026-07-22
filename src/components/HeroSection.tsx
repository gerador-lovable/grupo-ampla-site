import { Link } from "react-router-dom";
import { Clock, Shield, BadgeCheck, CreditCard, Star, Users, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import heroTechnician from "@/assets/hero-technician.webp";
import { buildRedirectUrl } from "@/lib/whatsapp";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "dedetizacao" });

const benefits = [
  { icon: Clock, text: "Atendimento em até 2h" },
  { icon: Shield, text: "Garantia de 6 meses" },
  { icon: BadgeCheck, text: "Certificado ANVISA" },
  { icon: CreditCard, text: "Parcelamos em 12x" },
];

const stats = [
  { icon: Users, value: "+10 mil", label: "clientes atendidos" },
  { icon: Award, value: "35", label: "anos de mercado" },
  { icon: Star, value: "4.8", label: "avaliação Google" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-0 lg:min-h-[92vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Ambient glow */}
      <div aria-hidden className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-primary-glow/20 blur-[120px]" />
      <div aria-hidden className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-accent/20 blur-[140px]" />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 30% 40%, black 40%, transparent 75%)",
        }}
      />

      <div className="container relative z-10 pt-28 sm:pt-32 md:pt-40 pb-[30px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-8 items-center">
          {/* Left column */}
          <div className="text-primary-foreground pb-10 md:pb-0">
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm text-primary-foreground/90 text-xs font-medium tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-8 animate-fade-in">
              <span className="inline-flex w-1.5 h-1.5 rounded-full bg-accent" />
              Dedetizadora em Curitiba · 35 anos
            </div>

            <h1 className="font-display text-[40px] sm:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.02] tracking-[-0.03em] font-semibold mb-6 animate-fade-up text-balance">
              Barata, rato ou cupim
              <span className="block mt-1">em casa?</span>
              <span className="block mt-1">
                <span className="relative inline-block text-accent">Resolvemos em até 2h
                  <span aria-hidden className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-accent rounded-full" />
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/75 max-w-xl mb-9 leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Técnico ANVISA no seu endereço no mesmo dia. Produto sem cheiro forte, seguro para crianças e pets, com laudo assinado e 6 meses de garantia por escrito.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10 max-w-lg animate-fade-up" style={{ animationDelay: "0.25s" }}>
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-2.5 text-primary-foreground/85">
                  <div className="w-7 h-7 rounded-md bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <Button
                asChild
                size="lg"
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold px-5 sm:px-6 py-5 sm:py-7 rounded-xl shadow-elegant min-h-[52px] sm:min-h-[60px] transition-transform hover:scale-[1.02] animate-slow-pulse"
              >
                <a href="tel:+5541995121583">
                  <Phone className="w-5 h-5 mr-2.5" />
                  <span className="flex flex-col items-start leading-tight text-left">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] opacity-90">Emergência 24h</span>
                    <span className="text-base font-bold font-display">(41) 99512-1583</span>
                  </span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold px-6 sm:px-8 py-5 sm:py-7 rounded-xl shadow-elegant min-h-[52px] sm:min-h-[60px] text-base transition-transform hover:scale-[1.02]"
              >
                <Link to={WHATSAPP_REDIRECT}>
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Falar com técnico agora
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-lg pt-8 mb-8 border-t border-white/10 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground tracking-tight">{s.value}</span>
                    {s.label.includes("Google") && (
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    )}
                  </div>
                  <div className="text-xs md:text-sm text-primary-foreground/60 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column spacer (imagem posicionada absolutamente na section) */}
          <div className="hidden lg:block" aria-hidden />
        </div>

        {/* Foto do técnico colada na borda inferior da hero (desktop) */}
        <div className="hidden lg:block absolute bottom-0 right-4 z-10 w-[calc(40%+50px)] max-w-[570px] h-[94vh] max-h-[860px] -mb-[30px] pointer-events-none animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[85%] bg-gradient-to-t from-accent/25 via-primary-glow/10 to-transparent rounded-t-[50%] blur-2xl" />
          <img
            src={heroTechnician}
            alt="Técnico profissional da Ampla Dedetizadora"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom drop-shadow-[0_30px_50px_hsl(226_78%_5%/0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
