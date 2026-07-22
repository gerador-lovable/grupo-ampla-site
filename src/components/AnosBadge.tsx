const AnosBadge = () => {
 return (
  <div
   aria-hidden
   className="pointer-events-none absolute top-24 sm:top-28 md:top-32 right-4 sm:right-6 md:right-10 z-20 select-none animate-fade-in"
   style={{ animationDelay: "0.4s" }}
  >
   <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent via-accent to-accent/70 shadow-elegant flex flex-col items-center justify-center text-center rotate-[-8deg] border-4 border-white/20">
    <span className="font-display text-3xl md:text-4xl font-extrabold text-primary-deep leading-none">
     35
    </span>
    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.14em] text-primary-deep mt-0.5">
     Anos
    </span>
    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-primary-deep/70 mt-0.5">
     em Curitiba
    </span>
   </div>
  </div>
 );
};

export default AnosBadge;