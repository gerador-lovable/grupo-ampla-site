import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, MapPin, Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import UrgencyBar from "@/components/UrgencyBar";
import TestimonialsModule from "@/components/TestimonialsModule";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import { findCidade, cidades } from "@/data/cidades";
import { pragas } from "@/data/pragas";
import { servicosDesentupimento } from "@/data/servicosDesentupimento";
import { bairros } from "@/data/bairros";
import type { DepoimentoTag } from "@/data/depoimentos";

const BASE_URL = "https://grupo-ampla-site.lovable.app";

const CidadePage = () => {
 const { cidade: slug } = useParams();
 const cidade = slug ? findCidade(slug) : undefined;
 if (!cidade) return <Navigate to="/404" replace />;

 const canonical = `${BASE_URL}/atendimento/${cidade.slug}`;
 const whatsapp = buildRedirectUrl({ servico: "dedetizacao" });

 const localBusinessSchema = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 name: `Ampla Dedetizadora e Desentupidora, ${cidade.nome}`,
 telephone: "+5541995121583",
 areaServed: `${cidade.nome} - ${cidade.regiao}`,
 url: canonical,
 description: cidade.description,
 };

 const outras = cidades.filter((c) => c.slug !== cidade.slug);

 return (
 <div className="min-h-screen">
 <Helmet>
 <title>{cidade.title}</title>
 <meta name="description" content={cidade.description} />
 <link rel="canonical" href={canonical} />
 <meta property="og:title" content={cidade.title} />
 <meta property="og:description" content={cidade.description} />
 <meta property="og:url" content={canonical} />
 <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
 </Helmet>

 <Header />

 <section className="relative pt-32 md:pt-40 pb-[30px] md:pb-[30px] bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
 <div className="container px-4">
 <div className="max-w-3xl">
 <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
 <MapPin className="w-4 h-4" /> Atendimento em {cidade.nome} - {cidade.regiao}
 </div>
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
 {cidade.h1}
 </h1>
 <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">{cidade.intro}</p>
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
 <div className="container px-4 max-w-4xl">
 <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Ampla em {cidade.nome}</h2>
 <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{cidade.contexto}</p>
 </div>
 </section>

  <section className="section-py bg-muted/40">
 <div className="container px-4 max-w-5xl">
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Dedetização em {cidade.nome}</h2>
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
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Desentupidora em {cidade.nome}</h2>
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

 <section className="section-py bg-muted/40">
 <div className="container px-4 max-w-4xl">
 <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Bairros atendidos em {cidade.nome}</h2>
 <div className="flex flex-wrap gap-3 justify-center">
 {cidade.bairros.map((b) => {
 const link = cidade.slug === "curitiba"
 ? bairros.find((x) => x.nome.toLowerCase() === b.toLowerCase())
 : undefined;
 return link ? (
 <Link
 key={b}
 to={`/bairros/${link.slug}`}
 className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
 >
 <CheckCircle2 className="w-4 h-4 text-primary" /> {b}
 </Link>
 ) : (
 <span key={b} className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground">
 <CheckCircle2 className="w-4 h-4 text-primary" /> {b}
 </span>
 );
 })}
 </div>
 </div>
 </section>

 <TestimonialsModule
 tags={[cidade.slug as DepoimentoTag]}
 titulo={`Clientes atendidos em ${cidade.nome}`}
 subtitulo="Avaliações reais de clientes da região"
 bg="background"
 />

 <section className="section-py bg-background">
 <div className="container px-4 max-w-5xl">
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Outras cidades atendidas</h2>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
 {outras.map((c) => (
 <Link key={c.slug} to={`/atendimento/${c.slug}`} className="bg-muted/40 rounded-lg p-4 border border-border hover:border-primary hover:shadow-md transition-all flex items-center justify-between gap-2">
 <span className="font-semibold text-foreground text-sm md:text-base">{c.nome}</span>
 <ArrowRight className="w-4 h-4 text-primary shrink-0" />
 </Link>
 ))}
 </div>
 </div>
 </section>

 <section className="section-py bg-primary text-primary-foreground">
 <div className="container px-4 max-w-3xl text-center">
 <h2 className="text-2xl md:text-4xl font-bold mb-4">Precisa de atendimento em {cidade.nome}?</h2>
 <p className="text-primary-foreground/80 mb-8 text-lg">Fale agora pelo WhatsApp e receba orçamento em minutos.</p>
 <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-10 py-7 rounded-xl min-h-[56px]">
 <Link to={whatsapp}>
 <WhatsAppIcon className="w-6 h-6 mr-2" /> Falar no WhatsApp
 </Link>
 </Button>
 </div>
 </section>

 <OutrosServicosBlock bg="background" />
 <FooterSection />
 <WhatsAppFloat />
 </div>
 );
};

export default CidadePage;