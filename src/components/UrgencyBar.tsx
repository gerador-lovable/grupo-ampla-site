import { Clock, Phone } from "lucide-react";

const UrgencyBar = () => {
  return (
    <div className="bg-accent text-accent-foreground py-3">
      <div className="container px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-sm md:text-base font-semibold">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span>Atendimento Emergencial 24h</span>
        </div>
        <a href="tel:+5541995121583" className="flex items-center gap-2 hover:underline">
          <Phone className="w-5 h-5" />
          <span>(41) 99512-1583</span>
        </a>
      </div>
    </div>
  );
};

export default UrgencyBar;
