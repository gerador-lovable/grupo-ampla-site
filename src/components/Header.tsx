import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import logo from "@/assets/logo-ampla.webp";
import { buildRedirectUrl } from "@/lib/whatsapp";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "dedetizacao" });

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 flex items-center justify-between">
        <a href="#" className="shrink-0">
          <img
            src={logo}
            alt="Grupo Ampla - Dedetizadora"
            className={`transition-all duration-300 ${scrolled ? "h-14 md:h-16" : "h-16 md:h-20"}`}
          />
        </a>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="bg-destructive hover:bg-destructive/90 text-white font-bold min-h-[44px] px-4 transition-transform duration-200 hover:scale-105 rounded-lg shadow-md animate-slow-pulse"
          >
            <a href="tel:+5541995121583">
              <Phone className="w-4 h-4 mr-1.5" />
              <span className="hidden sm:flex flex-col items-start leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-wider opacity-90">Emergência 24h</span>
                <span className="text-sm font-extrabold">(41) 99512-1583</span>
              </span>
              <span className="sm:hidden text-xs font-bold">24h</span>
            </a>
          </Button>
          <Button
            asChild
            className="bg-[#075E54] hover:bg-[#075E54]/90 text-white font-semibold min-h-[44px] px-5 transition-transform duration-200 hover:scale-105 rounded-lg shadow-md"
          >
            <Link to={WHATSAPP_REDIRECT}>
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Orçamento Grátis</span>
              <span className="sm:hidden">WhatsApp</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
