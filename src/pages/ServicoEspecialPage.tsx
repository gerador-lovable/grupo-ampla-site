import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
 AlertTriangle,
 CheckCircle2,
 ShieldCheck,
 Phone,
 Droplet,
 Rat,
 Bird,
 Home,
 Building2,
 ShieldPlus,
} from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import UrgencyBar from "@/components/UrgencyBar";
import TestimonialsModule from "@/components/TestimonialsModule";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import { findServicoEspecial } from "@/data/servicosEspeciais";
import type { DepoimentoTag } from "@/data/depoimentos";

const BASE_URL = "https://grupo-ampla-site.lovable.app";

const iconMap = {
 droplet: Droplet,
 rat: Rat,
 bird: Bird,
 home: Home,
 building: Building2,
 shield: ShieldPlus,
};

const tagMap: Record<string, DepoimentoTag[]> = {
 "limpeza-caixa-dagua": ["dedetizacao", "residencial", "condominial"],
 "controle-roedores": ["ratos", "dedetizacao"],
 "pombos-e-morcegos": ["dedetizacao", "comercial"],
 "dedetizacao-residencial": ["dedetizacao", "residencial"],
 "dedetizacao-condominial": ["dedetizacao", "condominial"],
 "dedetizacao-preventiva": ["dedetizacao", "residencial", "comercial"],
};

const ServicoEspecialPage = () => {
 const { slug } = useParams();
 const servico = slug ? findServicoEspecial(slug) : undefined;
 if (!servico) return <Navigate to="/404" replace />;

 const canonical = `${BASE_URL}/servicos/${servico.slug}`;
 const whatsapp = buildRedirectUrl({ servico: "dedetizacao" });
 const Icon = iconMap[servico.icone];

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: servico.faqs.map((f) => ({
 "@type": "Question",
 name: f.q,
 acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
 };

 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 serviceType: servico.nome,
 provider: {
 "@type": "LocalBusiness",
 name: "Ampla Dedetizadora",
 telephone: "+5541995121583",
 areaServed: "Curitiba e Região Metropolitana",
 },
 areaServed: "Curitiba e Região Metropolitana",
 description: servico.description,
 };

 return (
 <div className="min-h-screen">
 <Helmet>
 <title>{servico.title}</title>
 <meta name="description" content={servico.description} />
 <link rel="canonical" href={canonical} />
 <meta property="og:title" content={servico.title} />
 <meta property="og:description" content={servico.description} />
 <meta property="og:url" content={canonical} />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
 </Helmet>

 <Header />

 <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
 <div className="container px-4">
 <div className="max-w-3xl">
 <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
 <Icon className="w-4 h-4" /> Ampla · 35 anos em Curitiba
 </div>
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
 {servico.h1}
 </h1>
 <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
 {servico.intro}
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]">
 <Link to={whatsapp}>
 <WhatsAppIcon className="w-6 h-6 mr-2" />
 {servico.cta}
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

 <section className="py-16 md:py-20 bg-background">
 <div className="container px-4 max-w-4xl">
 <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
 Como a Ampla executa: {servico.nome}
 </h2>
 <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
 {servico.contexto}
 </p>
 </div>
 </section>

 <section className="py-16 md:py-20 bg-muted/40">
 <div className="container px-4">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
 <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
 <div className="flex items-center gap-3 mb-5">
 <AlertTriangle className="w-7 h-7 text-accent" />
 <h2 className="text-xl md:text-2xl font-bold text-foreground">Quando contratar</h2>
 </div>
 <ul className="space-y-3">
 {servico.sinais.map((s) => (
 <li key={s} className="flex items-start gap-3 text-foreground">
 <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
 <span>{s}</span>
 </li>
 ))}
 </ul>
 </div>
 <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
 <div className="flex items-center gap-3 mb-5">
 <AlertTriangle className="w-7 h-7 text-destructive" />
 <h2 className="text-xl md:text-2xl font-bold text-foreground">Riscos de não tratar</h2>
 </div>
 <ul className="space-y-3">
 {servico.riscos.map((r) => (
 <li key={r} className="flex items-start gap-3 text-foreground">
 <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
 <span>{r}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 md:py-20 bg-background">
 <div className="container px-4">
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
 Nosso método
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
 {servico.metodo.map((m, i) => (
 <div key={m.titulo} className="bg-muted/40 rounded-xl p-6 border border-border">
 <div className="flex items-center gap-3 mb-3">
 <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
 {i + 1}
 </span>
 <h3 className="text-lg font-bold text-foreground">{m.titulo}</h3>
 </div>
 <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
 {m.texto}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16 md:py-20 bg-primary text-primary-foreground">
 <div className="container px-4 max-w-3xl text-center">
 <ShieldCheck className="w-14 h-14 mx-auto mb-4 text-accent" />
 <h2 className="text-2xl md:text-3xl font-bold mb-3">Garantia e conformidade</h2>
 <p className="text-primary-foreground/80 text-lg">{servico.garantia}</p>
 </div>
 </section>

 <section className="py-16 md:py-20 bg-background">
 <div className="container px-4 max-w-3xl">
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
 Perguntas frequentes
 </h2>
 <div className="space-y-4">
 {servico.faqs.map((f) => (
 <div key={f.q} className="border border-border rounded-lg p-5 bg-muted/30">
 <h3 className="font-bold text-foreground mb-2">{f.q}</h3>
 <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{f.a}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <TestimonialsModule
 tags={tagMap[servico.slug] || ["dedetizacao"]}
 titulo={`Clientes atendidos, ${servico.nome}`}
 subtitulo="Avaliações reais de clientes da Ampla"
 bg="muted"
 />

 <OutrosServicosBlock bg="background" />

 <section className="py-16 md:py-20 bg-primary text-primary-foreground">
 <div className="container px-4 max-w-3xl text-center">
 <h2 className="text-2xl md:text-4xl font-bold mb-4">
 Precisa de {servico.nome.toLowerCase()}?
 </h2>
 <p className="text-primary-foreground/80 mb-8 text-lg">
 Orçamento grátis em minutos pelo WhatsApp. Atendimento em Curitiba e Região Metropolitana.
 </p>
 <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-10 py-7 rounded-xl min-h-[56px]">
 <Link to={whatsapp}>
 <WhatsAppIcon className="w-6 h-6 mr-2" />
 Falar no WhatsApp
 </Link>
 </Button>
 </div>
 </section>

 <FooterSection />
 <WhatsAppFloat />
 </div>
 );
};

export default ServicoEspecialPage;