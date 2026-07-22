import { Clock, Phone, MapPin } from "lucide-react";

const UrgencyBar = () => {
  return (
    <div className="bg-primary-deep text-primary-foreground py-2 border-b border-white/10">
      <div className="container px-4 flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-6 text-[12px] md:text-[13px]">
        <div className="flex items-center gap-2 text-primary-foreground/80">
          <span className="inline-flex w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <Clock className="w-3.5 h-3.5" />
          <span className="font-medium tracking-wide">Atendimento 24h · Emergência em até 2h</span>
        </div>
        <div className="flex items-center gap-5 text-primary-foreground/80">
          <span className="hidden md:inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Curitiba & Região Metropolitana
          </span>
          <a href="tel:+5541995121583" className="inline-flex items-center gap-1.5 font-semibold text-primary-foreground hover:text-accent transition-colors">
            <Phone className="w-3.5 h-3.5" />
            (41) 99512-1583
          </a>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
