import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import logo from "@/assets/logo-ampla.webp";

const WHATSAPP_URL = "https://wa.me/5541995121583?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20dedetiza%C3%A7%C3%A3o.";

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

        <Button
          asChild
          className="bg-[#075E54] hover:bg-[#075E54]/90 text-white font-semibold min-h-[44px] px-5 transition-transform duration-200 hover:scale-105 rounded-lg shadow-md"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Orçamento Grátis</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
