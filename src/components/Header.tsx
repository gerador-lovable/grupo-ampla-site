import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import logoAsset from "@/assets/logo-ampla-novo.webp.asset.json";
const logo = logoAsset.url;
import { buildRedirectUrl } from "@/lib/whatsapp";

const Header = () => {
  const location = useLocation();
  const servico = location.pathname.startsWith("/desentupidora")
    ? "desentupimento"
    : "dedetizacao";
  const whatsappRedirect = buildRedirectUrl({ servico });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary-deep/90 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container px-4 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0 flex items-center">
          <span
            className={`inline-flex items-center transition-all duration-500 ${
              scrolled
                ? "bg-[#050f24] px-2 md:px-3 rounded-b-[6px] shadow-lg mt-[-8px] pt-[8px] pb-[10px] mb-[-10px] md:mt-[-10px] md:pt-[10px] md:pb-[14px] md:mb-[-14px]"
                : ""
            }`}
          >
            <img
              src={logo}
              alt="Grupo Ampla - Dedetizadora"
              className={`rounded-full transition-all duration-500 ${scrolled ? "h-9 md:h-14" : "h-11 md:h-[74px]"}`}
            />
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            asChild
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold min-h-[44px] px-3 md:px-4 rounded-xl shadow-elegant animate-slow-pulse transition-transform hover:scale-[1.03]"
          >
            <a href="tel:+5541995121583">
              <Phone className="w-4 h-4 md:mr-1.5" />
              <span className="hidden md:flex flex-col items-start leading-tight">
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] opacity-90">Emergência 24h</span>
                <span className="text-sm font-bold font-display">(41) 99512-1583</span>
              </span>
              <span className="md:hidden text-xs font-bold ml-1">24h</span>
            </a>
          </Button>
          <Button
            asChild
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold min-h-[44px] px-4 md:px-5 rounded-xl shadow-card transition-transform hover:scale-[1.03]"
          >
            <Link to={whatsappRedirect}>
              <WhatsAppIcon className="w-5 h-5 md:mr-2" />
              <span className="hidden sm:inline">Orçamento Grátis</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
