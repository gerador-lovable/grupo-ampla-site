import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Phone, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import UrgencyBar from "@/components/UrgencyBar";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";
import TestimonialsModule from "@/components/TestimonialsModule";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrecoBlock from "@/components/PrecoBlock";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import { bairros } from "@/data/bairros";
import { cidades } from "@/data/cidades";

const BASE_URL = "https://www.grupoampladedetiza.com.br";

const DedetizadoraPertoDeMim = () => {
  const canonical = `${BASE_URL}/dedetizadora-perto-de-mim`;
  const whatsapp = buildRedirectUrl({ servico: "dedetizacao" });

  const title = "Dedetizadora Perto de Mim em Curitiba | Técnico em 2h · Ampla";
  const description =
    "Procurando dedetizadora perto de você em Curitiba? Ampla atende em até 2h, produtos ANVISA, garantia de 6 meses. Orçamento grátis no WhatsApp.";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": canonical,
    name: "Ampla Dedetizadora - Atendimento em Curitiba e Região",
    url: canonical,
    telephone: "+5541995121583",
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Curitiba" },
      ...cidades.map((c) => ({ "@type": "City", name: c.nome })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. José Beira, 205 - Roça Grande",
      addressLocality: "Colombo",
      addressRegion: "PR",
      postalCode: "83407-320",
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      </Helmet>

      <Header />

      <section className="relative pt-32 md:pt-40 pb-[30px] md:pb-[30px] bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
        <div className="container px-4">
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ label: "Dedetizadora perto de mim" }]} tone="dark" />
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              <MapPin className="w-4 h-4" /> Atendimento em toda Curitiba e RMC
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
              Dedetizadora perto de você em Curitiba, com técnico no seu endereço em até 2 horas
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              A Ampla atende Curitiba inteira e mais 12 cidades da Região Metropolitana com equipe própria, produtos ANVISA e garantia de 6 meses por escrito. Sem intermediário, sem taxa de deslocamento escondida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]">
                <Link to={whatsapp}>
                  <WhatsAppIcon className="w-6 h-6 mr-2" /> Orçamento Grátis no WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]">
                <a href="tel:+5541995121583">
                  <Phone className="w-6 h-6 mr-2" /> (41) 99512-1583
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <UrgencyBar />

      <section className="section-py bg-background">
        <div className="container px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
            Por que somos a dedetizadora mais chamada em Curitiba
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            35 anos de bairro em bairro, com equipe própria e tempo de resposta que ninguém bate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Clock, titulo: "Técnico em até 2h", texto: "Emergência atendida no mesmo dia em Curitiba e Região Metropolitana, 24 horas." },
              { icon: ShieldCheck, titulo: "Garantia de 6 meses", texto: "Voltamos sem custo se a praga aparecer no prazo. Documento por escrito." },
              { icon: CheckCircle2, titulo: "ANVISA + Nota fiscal", texto: "Produto certificado, alvará sanitário e nota em qualquer serviço, do menor ao maior." },
            ].map(({ icon: Icon, titulo, texto }) => (
              <div key={titulo} className="bg-muted/40 rounded-xl p-6 border border-border">
                <Icon className="w-9 h-9 text-primary mb-3" />
                <h3 className="font-bold text-lg text-foreground mb-2">{titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-muted/40">
        <div className="container px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
            Bairros que atendemos em Curitiba
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Clique no seu bairro para ver equipe, tempo médio e depoimentos da região.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {bairros
              .filter((b) => b.cidadeSlug === "curitiba")
              .map((b) => (
                <Link
                  key={b.slug}
                  to={`/bairros/${b.slug}`}
                  className="bg-background rounded-lg p-3 border border-border hover:border-primary hover:shadow-md transition-all flex items-center justify-between gap-2"
                >
                  <span className="font-semibold text-foreground text-sm">{b.nome}</span>
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-background">
        <div className="container px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Cidades da Região Metropolitana
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cidades.map((c) => (
              <Link
                key={c.slug}
                to={`/atendimento/${c.slug}`}
                className="bg-muted/40 rounded-lg p-3 border border-border hover:border-primary hover:shadow-md transition-all flex items-center justify-between gap-2"
              >
                <span className="font-semibold text-foreground text-sm">{c.nome}</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PrecoBlock
        titulo="Quanto custa chamar a dedetizadora em Curitiba"
        faixas={[
          { label: "Apartamento até 60 m²", preco: "R$ 180 a R$ 240" },
          { label: "Casa ou apto 60 a 150 m²", preco: "R$ 240 a R$ 420" },
          { label: "Desentupimento residencial", preco: "R$ 150 a R$ 380" },
          { label: "Comércio ou condomínio", preco: "sob orçamento" },
        ]}
      />

      <TestimonialsModule
        tags={["dedetizacao", "curitiba"]}
        titulo="Clientes atendidos em Curitiba"
        subtitulo="Avaliações reais de quem chamou a Ampla no bairro"
        bg="muted"
      />

      <OutrosServicosBlock bg="background" />

      <section className="section-py bg-primary text-primary-foreground">
        <div className="container px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Precisa de dedetizadora perto de você agora?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Envie o CEP no WhatsApp, mandamos técnico em minutos com orçamento fechado.
          </p>
          <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-10 py-7 rounded-xl min-h-[56px]">
            <Link to={whatsapp}>
              <WhatsAppIcon className="w-6 h-6 mr-2" /> Falar no WhatsApp
            </Link>
          </Button>
        </div>
      </section>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default DedetizadoraPertoDeMim;