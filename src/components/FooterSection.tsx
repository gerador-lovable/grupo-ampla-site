import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Shield, BadgeCheck, Clock } from "lucide-react";
import logo from "@/assets/logo-ampla.webp";

const FooterSection = () => {
  return (
    <footer className="bg-primary-deep text-primary-foreground pt-16 pb-8 relative overflow-hidden">
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div aria-hidden className="absolute -top-20 right-10 w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px]" />

      <div className="container px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="md:col-span-1">
            <img src={logo} alt="Grupo Ampla" loading="lazy" decoding="async" width={128} height={128} className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5">
              Há 35 anos protegendo lares e empresas em Curitiba e Região Metropolitana.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-primary-foreground/80">
                <BadgeCheck className="w-3 h-3 text-accent" /> ANVISA
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-primary-foreground/80">
                <Shield className="w-3 h-3 text-accent" /> Garantia 6m
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-primary-foreground/80">
                <Clock className="w-3 h-3 text-accent" /> 24h
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-[0.14em] text-primary-foreground/90 mb-4">Serviços</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><Link to="/servicos/dedetizacao-comercial" className="hover:text-accent transition-colors">Dedetização Comercial</Link></li>
              <li><Link to="/servicos/limpeza-caixa-dagua" className="hover:text-accent transition-colors">Limpeza de Caixa d'Água</Link></li>
              <li><Link to="/servicos/controle-roedores" className="hover:text-accent transition-colors">Controle de Roedores</Link></li>
              <li><Link to="/servicos/pombos-e-morcegos" className="hover:text-accent transition-colors">Pombos e Morcegos</Link></li>
              <li><Link to="/desentupidora" className="hover:text-accent transition-colors">Desentupidora</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-[0.14em] text-primary-foreground/90 mb-4">Institucional</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><Link to="/emergencia-24h" className="text-accent hover:text-accent/80 font-semibold transition-colors">⚡ Emergência 24h</Link></li>
              <li><Link to="/curitiba" className="hover:text-accent transition-colors">Atendimento em Curitiba</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-[0.14em] text-primary-foreground/90 mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <a href="tel:+5541995121583" className="flex items-center gap-2.5 hover:text-accent transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                (41) 99512-1583
              </a>
              <div className="flex items-start gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="pt-1.5">R. José Beira, 205 · Roça Grande<br />Colombo - PR</span>
              </div>
              <a href="https://www.instagram.com/grupoampladedetizadora/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-accent transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Instagram className="w-4 h-4" />
                </span>
                @grupoampladedetizadora
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <p>© 2026 Grupo Ampla · Dedetizadora & Desentupidora. Todos os direitos reservados.</p>
          <p className="font-display tracking-wide">CNPJ · CRQ-PR</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
