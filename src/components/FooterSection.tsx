import { Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-ampla.webp";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <img src={logo} alt="Grupo Ampla" className="h-16 w-auto mb-3" />
            <p className="text-primary-foreground/70 text-sm">
              Há 35 anos protegendo lares e empresas em Curitiba e Região Metropolitana.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/emergencia-24h" className="hover:text-primary-foreground font-semibold">Emergência 24h</a></li>
              <li><a href="/desentupidora" className="hover:text-primary-foreground">Desentupidora</a></li>
              <li><a href="/servicos/dedetizacao-comercial" className="hover:text-primary-foreground">Dedetização Comercial</a></li>
              <li><a href="/servicos/limpeza-caixa-dagua" className="hover:text-primary-foreground">Limpeza de Caixa d'Água</a></li>
              <li><a href="/servicos/controle-roedores" className="hover:text-primary-foreground">Controle de Roedores</a></li>
              <li><a href="/servicos/pombos-e-morcegos" className="hover:text-primary-foreground">Pombos e Morcegos</a></li>
              <li><a href="/blog" className="hover:text-primary-foreground">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contato</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <a href="tel:+5541995121583" className="flex items-center gap-2 hover:text-primary-foreground">
                <Phone className="w-4 h-4" /> (41) 99512-1583
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                R. José Beira, 205 - Roça Grande, Colombo - PR
              </p>
              <a href="https://instagram.com/grupo_ampla_01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground">
                <Instagram className="w-4 h-4" /> @grupo_ampla_01
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
          © 2026 Ampla Dedetizadora. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
