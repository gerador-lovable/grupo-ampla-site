import { Link, useLocation } from "react-router-dom";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const WhatsAppFloat = () => {
  const location = useLocation();
  const servico = location.pathname.startsWith("/desentupidora")
    ? "desentupimento"
    : "dedetizacao";

  const handleClick = () => {
    trackWhatsAppClick({ servico });
  };

  return (
    <div className="fixed bottom-[30px] right-[30px] z-[9999] flex items-center">
      {/* Pulse ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-[#25D366] animate-whatsapp-pulse" />

      {/* Button */}
      <Link
        to={buildRedirectUrl({ servico })}
        onClick={handleClick}
        className="relative z-10 w-[60px] h-[60px] rounded-full bg-[#25D366] hover:bg-[#075E54] shadow-[2px_2px_20px_8px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-200"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <WhatsAppIcon className="w-[30px] h-[30px] text-white" />
      </Link>

      {/* Tooltip */}
      <div className="absolute right-[75px] hidden sm:block">
        <p className="ml-4 border border-border px-3 py-1.5 rounded-md font-medium text-sm bg-background text-foreground relative whitespace-nowrap shadow-sm">
          Fale conosco agora!
          <span className="absolute -right-[5px] top-1/2 -mt-1 w-2 h-2 bg-background border-t border-l border-border rotate-[135deg]" />
        </p>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
