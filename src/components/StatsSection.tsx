import { useEffect, useRef, useState } from "react";
import { Users, Award, Star, Clock } from "lucide-react";

const stats = [
 { icon: Award, value: 35, suffix: "", label: "anos de mercado em Curitiba" },
 { icon: Users, value: 10000, suffix: "+", label: "clientes atendidos" },
 { icon: Star, value: 98, suffix: "%", label: "avaliações positivas" },
 { icon: Clock, value: 24, suffix: "h", label: "atendimento de emergência" },
];

const format = (n: number) => (n >= 1000 ? n.toLocaleString("pt-BR") : String(n));

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
 const [n, setN] = useState(0);
 const ref = useRef<HTMLSpanElement>(null);
 const started = useRef(false);

 useEffect(() => {
  if (!ref.current) return;
  const io = new IntersectionObserver((entries) => {
   entries.forEach((e) => {
    if (e.isIntersecting && !started.current) {
     started.current = true;
     const duration = 1200;
     const start = performance.now();
     const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
     };
     requestAnimationFrame(tick);
    }
   });
  }, { threshold: 0.3 });
  io.observe(ref.current);
  return () => io.disconnect();
 }, [target]);

 return (
  <span ref={ref} className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight tabular-nums">
   {format(n)}
   <span className="text-accent">{suffix}</span>
  </span>
 );
};

const StatsSection = () => {
 return (
  <section className="section-py bg-background border-y border-border">
   <div className="container px-4 max-w-6xl">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
     {stats.map((s) => (
      <div key={s.label} className="text-center">
       <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
        <s.icon className="w-6 h-6 text-primary" />
       </div>
       <div>
        <Counter target={s.value} suffix={s.suffix} />
       </div>
       <p className="text-muted-foreground text-sm md:text-base mt-2 leading-snug">{s.label}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default StatsSection;