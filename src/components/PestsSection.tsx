import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

import baratasImg from "@/assets/pests/baratas.webp";
import ratosImg from "@/assets/pests/ratos.webp";
import cupinsImg from "@/assets/pests/cupins.webp";
import formigasImg from "@/assets/pests/formigas.webp";
import mosquitosImg from "@/assets/pests/mosquitos.webp";
import aranhasImg from "@/assets/pests/aranhas.webp";
import pulgasImg from "@/assets/pests/pulgas.webp";
import tracasImg from "@/assets/pests/tracas.webp";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "dedetizacao" });

const pests = [
 { image: baratasImg, name: "Baratas", slug: "baratas", description: "Sobem pelo ralo e contaminam o que encontram. Gel + residual eliminam ninho e ovos por até 6 meses." },
 { image: ratosImg, name: "Ratos e roedores", slug: "ratos", description: "Roem fio, fazem ninho no forro e transmitem leptospirose. Iscas em porta-iscas lacrados e monitoramento mensal." },
 { image: cupinsImg, name: "Cupim", slug: "cupim", description: "Come móvel, batente e viga por dentro, quando você vê, o estrago já está feito. Injeção e barreira química no solo." },
 { image: formigasImg, name: "Formigas", slug: "formigas", description: "Uma trilha visível significa colônia grande. Gel de ação retardada mata a rainha e acaba com o formigueiro." },
 { image: mosquitosImg, name: "Mosquitos e pernilongos", description: "Aedes, muriçoca e borrachudo estragam o sono e trazem doença. Nebulização em quintal, jardim e caixa de passagem." },
 { image: aranhasImg, name: "Aranha e escorpião", slug: "escorpiao", description: "Escorpião amarelo é grave para criança e idoso. Vedação de ralos e barreira residual em muros e frestas." },
 { image: pulgasImg, name: "Pulga e carrapato", slug: "pulgas-e-carrapatos", description: "Picam pernas e deixam o pet coçando. Tratamos casa, quintal e canil quebrando o ciclo de ovos e larvas." },
 { image: tracasImg, name: "Traça e percevejo", slug: "percevejo", description: "Estragam roupa, livro e colchão sem barulho. Tratamento controlado que não mancha tecido nem madeira." },
];

const PestsSection = () => {
 return (
 <section className="section-py bg-background">
 <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
 <div className="max-w-2xl mb-14">
 <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
 Qual praga é a sua?
 </span>
 <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05] text-balance">
 Matar a que aparece não resolve<span className="text-accent">.</span>
 </h2>
 <p className="text-muted-foreground text-lg mt-5">
 Cada praga tem ninho, ciclo e produto diferentes. Fazemos o diagnóstico correto para eliminar a colônia inteira, não só o que você vê.
 </p>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12">
 {pests.map((pest) => {
 const CardInner = (
 <>
 <div className="w-full h-36 md:h-44 overflow-hidden relative">
 <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-primary-deep/10 to-transparent z-10" />
 <img
 src={pest.image}
 alt={pest.name}
 loading="lazy"
 width={512}
 height={512}
 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
 />
 <h3 className="absolute bottom-3 left-3 z-20 font-display font-semibold text-primary-foreground text-sm md:text-base drop-shadow">{pest.name}</h3>
 </div>
 <div className="p-4">
 <p className="text-muted-foreground text-xs leading-relaxed hidden md:block mb-2">{pest.description}</p>
 {pest.slug && (
 <span className="text-primary text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
 Ver protocolo →
 </span>
 )}
 </div>
 </>
 );
 const cls =
 "group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/60 hover:shadow-elegant transition-all duration-300 text-left block";
 return pest.slug ? (
 <Link key={pest.name} to={`/dedetizacao/${pest.slug}`} className={cls}>
 {CardInner}
 </Link>
 ) : (
 <div key={pest.name} className={cls}>
 {CardInner}
 </div>
 );
 })}
 </div>

 <div className="text-center">
 <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold text-sm sm:text-base px-4 sm:px-10 min-h-[56px] rounded-xl shadow-elegant transition-transform duration-200 hover:scale-[1.03] whitespace-normal h-auto max-w-full">
  <Link to={WHATSAPP_REDIRECT} className="text-center">
  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 shrink-0" />
  Mandar foto da praga pelo WhatsApp
  </Link>
 </Button>
 </div>
 </div>
 </section>
 );
};

export default PestsSection;
