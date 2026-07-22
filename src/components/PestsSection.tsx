import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

import baratasImg from "@/assets/pests/baratas.jpg";
import ratosImg from "@/assets/pests/ratos.jpg";
import cupinsImg from "@/assets/pests/cupins.jpg";
import formigasImg from "@/assets/pests/formigas.jpg";
import mosquitosImg from "@/assets/pests/mosquitos.jpg";
import aranhasImg from "@/assets/pests/aranhas.jpg";
import pulgasImg from "@/assets/pests/pulgas.jpg";
import tracasImg from "@/assets/pests/tracas.jpg";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "dedetizacao" });

const pests = [
  { image: baratasImg, name: "Baratas", slug: "baratas", description: "Eliminação completa de baratas americanas e germânicas com tratamento residual de longa duração." },
  { image: ratosImg, name: "Ratos e Roedores", slug: "ratos", description: "Desratização profissional com técnicas de exclusão e controle integrado de roedores." },
  { image: cupinsImg, name: "Cupins", slug: "cupim", description: "Descupinização com tratamento de solo e madeira. Proteção contra cupins subterrâneos e de madeira seca." },
  { image: formigasImg, name: "Formigas", slug: "formigas", description: "Controle de formigas doceiras e cortadeiras com gel atrativo e iscas granuladas." },
  { image: mosquitosImg, name: "Mosquitos e Pernilongos", description: "Nebulização e termonebulização para controle de mosquitos, incluindo Aedes aegypti." },
  { image: aranhasImg, name: "Aranhas e Escorpiões", slug: "escorpiao", description: "Tratamento especializado para aracnídeos perigosos com pulverização residual." },
  { image: pulgasImg, name: "Pulgas e Carrapatos", slug: "pulgas-e-carrapatos", description: "Desinsetização completa para ambientes com animais de estimação, segura para pets." },
  { image: tracasImg, name: "Traças e Brocas", slug: "percevejo", description: "Proteção de tecidos, papéis e madeira contra traças, brocas e percevejos com tratamento controlado." },
];

const PestsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
            Pragas urbanas
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05] text-balance">
            Cada praga exige um protocolo diferente<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-5">
            Do diagnóstico ao tratamento residual — sabemos exatamente o que sua infestação precisa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto mb-12">
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
          <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold text-base px-10 min-h-[56px] rounded-xl shadow-elegant transition-transform duration-200 hover:scale-[1.03]">
            <Link to={WHATSAPP_REDIRECT}>
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Identificar minha praga no WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PestsSection;
