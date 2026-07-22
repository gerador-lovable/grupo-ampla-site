import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import UrgencyBar from "@/components/UrgencyBar";
import TestimonialsModule from "@/components/TestimonialsModule";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import { findBairro, bairros } from "@/data/bairros";
import { pragas } from "@/data/pragas";
import { servicosDesentupimento } from "@/data/servicosDesentupimento";
import type { DepoimentoTag } from "@/data/depoimentos";
import Breadcrumbs from "@/components/Breadcrumbs";
import DesDifferentialsSection from "@/components/desentupidora/DesDifferentialsSection";
import DesGuaranteeSection from "@/components/desentupidora/DesGuaranteeSection";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import BlogHighlightSection from "@/components/BlogHighlightSection";

const BASE_URL = "https://www.grupoampladedetiza.com.br";

const BairroPage = () => {
 const { bairro: slug } = useParams();
 const bairro = slug ? findBairro(slug) : undefined;
 if (!bairro) return <Navigate to="/404" replace />;

 const canonical = `${BASE_URL}/bairros/${bairro.slug}`;
 const whatsapp = buildRedirectUrl({ servico: "dedetizacao" });

 const faqs = [
 {
 q: `A Ampla atende todo o ${bairro.nome}?`,
 a: `Sim. Atendemos ${bairro.nome} inteiro, incluindo ruas comerciais e áreas residenciais, com equipe própria e tempo médio de resposta de 2 horas para emergências.`,
 },
 {
 q: `Quanto custa uma dedetização no ${bairro.nome}?`,
 a: `Cada caso é único: o orçamento varia conforme o tamanho do imóvel, o tipo de praga e o grau de infestação. Enviamos o valor exato no ${bairro.nome} pelo WhatsApp em minutos, sem custo e sem obrigação de fechar.`,
 },
 {
 q: `Vocês emitem nota fiscal e certificado no ${bairro.nome}?`,
 a: `Sim. Todos os serviços incluem nota fiscal, certificado com os produtos aplicados e garantia por escrito.`,
 },
 {
 q: `Fazem atendimento de emergência no ${bairro.nome}?`,
 a: `Sim. Atendemos 24 horas para desentupimento, esgoto transbordando e infestações graves em todo o ${bairro.nome}.`,
 },
 ];

 const localBusinessSchema = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 name: `Ampla Dedetizadora e Desentupidora, ${bairro.nome}`,
 telephone: "+5541995121583",
 areaServed: `${bairro.nome}, ${bairro.cidade} - PR`,
 url: canonical,
 description: bairro.description,
 };

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqs.map((f) => ({
 "@type": "Question",
 name: f.q,
 acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
 };

 const outrosBairros = bairros.filter((b) => b.slug !== bairro.slug).slice(0, 8);

 return (
 <div className="min-h-screen">
 <Helmet>
 <title>{bairro.title}</title>
 <meta name="description" content={bairro.description} />
 <link rel="canonical" href={canonical} />
 <meta property="og:title" content={bairro.title} />
 <meta property="og:description" content={bairro.description} />
 <meta property="og:url" content={canonical} />
 <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>

 <Header />

 <section className="relative pt-32 md:pt-40 pb-[30px] md:pb-[30px] bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
 <div className="container px-4">
 <div className="max-w-3xl">
  <Breadcrumbs
   items={[
    { label: bairro.cidade, to: `/atendimento/${bairro.cidadeSlug}` },
    { label: bairro.nome },
   ]}
   tone="dark"
  />
 <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
 <MapPin className="w-4 h-4" /> {bairro.nome} · {bairro.cidade} - PR
 </div>
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
 {bairro.h1}
 </h1>
 <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
 {bairro.intro}
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
  <StatsSection />

  <section className="section-py bg-background">
 <div className="container px-4 max-w-4xl">
 <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
 Ampla no {bairro.nome}
 </h2>
 <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
 {bairro.contexto}
 </p>
  <div className="mt-8 bg-muted/50 rounded-xl p-5 border border-border">
   <h3 className="font-bold text-foreground mb-2">
    Dedetização barata no {bairro.nome} com nota fiscal e garantia
   </h3>
   <p className="text-sm text-muted-foreground leading-relaxed">
    As pragas mais chamadas no {bairro.nome} são{" "}
    <Link to="/dedetizacao/baratas" className="text-primary font-semibold hover:underline">baratas</Link>,{" "}
    <Link to="/dedetizacao/ratos" className="text-primary font-semibold hover:underline">ratos</Link> e{" "}
    <Link to="/dedetizacao/formigas" className="text-primary font-semibold hover:underline">formigas</Link>.
    Atendemos com técnico próprio em até 2 horas, produtos ANVISA, nota fiscal e certificado válido para síndico e vigilância.
   </p>
  </div>
 </div>
 </section>

  <DesDifferentialsSection />

  <section className="section-py bg-muted/40">
 <div className="container px-4 max-w-5xl">
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
 Dedetização no {bairro.nome}
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {pragas.map((p) => (
 <Link key={p.slug} to={`/dedetizacao/${p.slug}`} className="bg-background rounded-lg p-4 border border-border hover:border-primary hover:shadow-md transition-all flex items-center justify-between gap-2">
 <span className="font-semibold text-foreground text-sm md:text-base">{p.nome}</span>
 <ArrowRight className="w-4 h-4 text-primary shrink-0" />
 </Link>
 ))}
 </div>
 </div>
 </section>

  <section className="section-py bg-background">
 <div className="container px-4 max-w-5xl">
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
 Desentupidora no {bairro.nome}
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
 {servicosDesentupimento.map((s) => (
 <Link key={s.slug} to={`/desentupidora/${s.slug}`} className="bg-muted/40 rounded-lg p-4 border border-border hover:border-primary hover:shadow-md transition-all flex items-center justify-between gap-2">
 <span className="font-semibold text-foreground text-sm md:text-base">{s.nome}</span>
 <ArrowRight className="w-4 h-4 text-primary shrink-0" />
 </Link>
 ))}
 </div>
 </div>
 </section>

 <TestimonialsModule
 tags={[bairro.tag as DepoimentoTag, bairro.cidadeSlug as DepoimentoTag]}
 titulo={`Clientes atendidos no ${bairro.nome}`}
 subtitulo="Avaliações reais de clientes da região"
 bg="muted"
 />

 <DesGuaranteeSection />

  <section className="section-py bg-background">
 <div className="container px-4 max-w-4xl">
 <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
 Bairros vizinhos ao {bairro.nome}
 </h2>
 <div className="flex flex-wrap gap-3 justify-center">
 {bairro.vizinhos.map((v) => (
 <span key={v} className="inline-flex items-center gap-2 bg-muted/40 border border-border rounded-full px-4 py-2 text-sm text-foreground">
 <CheckCircle2 className="w-4 h-4 text-primary" /> {v}
 </span>
 ))}
 </div>
 </div>
 </section>

 <section className="section-py bg-muted/40">
 <div className="container px-4 max-w-3xl">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-10">
 Perguntas frequentes, {bairro.nome}
 </h2>
 <div className="space-y-6">
 {faqs.map((f) => (
 <div key={f.q}>
 <h3 className="font-bold text-foreground text-lg mb-2">{f.q}</h3>
 <p className="text-muted-foreground leading-relaxed">{f.a}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="section-py bg-background">
 <div className="container px-4 max-w-5xl">
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
 Outros bairros que atendemos em Curitiba
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {outrosBairros.map((b) => (
 <Link key={b.slug} to={`/bairros/${b.slug}`} className="bg-muted/40 rounded-lg p-4 border border-border hover:border-primary hover:shadow-md transition-all flex items-center justify-between gap-2">
 <span className="font-semibold text-foreground text-sm md:text-base">{b.nome}</span>
 <ArrowRight className="w-4 h-4 text-primary shrink-0" />
 </Link>
 ))}
 </div>
 </div>
 </section>

 <section className="section-py bg-primary text-primary-foreground">
 <div className="container px-4 max-w-3xl text-center">
 <h2 className="text-2xl md:text-4xl font-bold mb-4">
 Precisa de atendimento no {bairro.nome}?
 </h2>
 <p className="text-primary-foreground/80 mb-8 text-lg">
 Fale agora pelo WhatsApp e receba orçamento em minutos.
 </p>
 <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-10 py-7 rounded-xl min-h-[56px]">
 <Link to={whatsapp}>
 <WhatsAppIcon className="w-6 h-6 mr-2" /> Falar no WhatsApp
 </Link>
 </Button>
 </div>
 </section>

 <OutrosServicosBlock bg="background" />
      <BlogHighlightSection />
 <ContactSection />
 <FooterSection />
 <WhatsAppFloat />
 </div>
 );
};

export default BairroPage;