import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, CheckCircle2, ShieldCheck, Phone, ArrowRight, Wrench } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import UrgencyBar from "@/components/UrgencyBar";
import TestimonialsModule from "@/components/TestimonialsModule";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import { findServicoDes, servicosDesentupimento } from "@/data/servicosDesentupimento";
import type { DepoimentoTag } from "@/data/depoimentos";

const BASE_URL = "https://grupo-ampla-site.lovable.app";

const ServicoDesentupimentoPage = () => {
 const { servico: slug } = useParams();
 const servico = slug ? findServicoDes(slug) : undefined;
 if (!servico) return <Navigate to="/404" replace />;

 const canonical = `${BASE_URL}/desentupidora/${servico.slug}`;
 const whatsapp = buildRedirectUrl({ servico: "desentupimento" });

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
 name: "Ampla Desentupidora",
 telephone: "+5541995121583",
 areaServed: "Curitiba e Região Metropolitana",
 },
 areaServed: "Curitiba e Região Metropolitana",
 description: servico.description,
 };

 const relacionados = servicosDesentupimento.filter((s) => s.slug !== servico.slug).slice(0, 4);

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

 <section className="relative pt-32 md:pt-40 pb-[30px] md:pb-[30px] bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
 <div className="container px-4">
 <div className="max-w-3xl">
 <div className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
 Ampla · Atendimento 24h em Curitiba
 </div>
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
 {servico.h1}
 </h1>
 <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">{servico.intro}</p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]">
 <Link to={whatsapp}>
 <WhatsAppIcon className="w-6 h-6 mr-2" />
 Orçamento Grátis no WhatsApp
 </Link>
 </Button>
 <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]">
 <a href="tel:+5541995121583">
 <Phone className="w-6 h-6 mr-2" />
 (41) 99512-1583
 </a>
 </Button>
 </div>
 </div>
 </div>
 </section>

 <UrgencyBar />

  <section className="section-py bg-background">
 <div className="container px-4 max-w-4xl">
 <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Como executamos o serviço</h2>
 <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{servico.contexto}</p>
 </div>
 </section>

  <section className="section-py bg-muted/40">
 <div className="container px-4">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
 <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
 <div className="flex items-center gap-3 mb-5">
 <AlertTriangle className="w-7 h-7 text-accent" />
 <h2 className="text-xl md:text-2xl font-bold text-foreground">Sinais de que você precisa chamar</h2>
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
 <Wrench className="w-7 h-7 text-primary" />
 <h2 className="text-xl md:text-2xl font-bold text-foreground">Diferenciais Ampla</h2>
 </div>
 <ul className="space-y-3">
 {servico.diferenciais.map((d) => (
 <li key={d} className="flex items-start gap-3 text-foreground">
 <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
 <span>{d}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>

  <section className="section-py bg-background">
 <div className="container px-4">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">Nosso método</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Protocolo técnico, sem quebra-quebra</p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
 {servico.metodo.map((m, i) => (
 <div key={m.titulo} className="bg-muted/40 rounded-xl p-6 border border-border">
 <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">{i + 1}</div>
 <h3 className="font-bold text-lg text-foreground mb-2">{m.titulo}</h3>
 <p className="text-muted-foreground text-sm leading-relaxed">{m.texto}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="section-py bg-primary text-primary-foreground">
 <div className="container px-4 max-w-3xl text-center">
 <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
 <h2 className="text-2xl md:text-3xl font-bold mb-3">Garantia Ampla</h2>
 <p className="text-primary-foreground/90 text-lg">{servico.garantia}</p>
 </div>
 </section>

 <section className="section-py bg-background">
 <div className="container px-4 max-w-3xl">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-10">Perguntas frequentes</h2>
 <div className="space-y-6">
 {servico.faqs.map((f) => (
 <div key={f.q}>
 <h3 className="font-bold text-foreground text-lg mb-2">{f.q}</h3>
 <p className="text-muted-foreground leading-relaxed">{f.a}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="section-py bg-muted/40">
 <div className="container px-4">
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Outros serviços de desentupimento</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
 {relacionados.map((r) => (
 <Link
 key={r.slug}
 to={`/desentupidora/${r.slug}`}
 className="bg-background rounded-lg p-4 border border-border hover:border-primary hover:shadow-md transition-all flex items-center justify-between gap-2"
 >
 <span className="font-semibold text-foreground text-sm md:text-base">{r.nome}</span>
 <ArrowRight className="w-4 h-4 text-primary shrink-0" />
 </Link>
 ))}
 </div>
 </div>
 </section>

 <TestimonialsModule
 tags={[servico.slug as DepoimentoTag, "desentupimento"]}
 titulo={`Clientes atendidos, ${servico.nome}`}
 subtitulo="Avaliações reais de clientes que contrataram este serviço"
 bg="muted"
 />

 <section className="section-py bg-primary text-primary-foreground">
 <div className="container px-4 max-w-3xl text-center">
 <h2 className="text-2xl md:text-4xl font-bold mb-4">Precisa de {servico.nome.toLowerCase()} agora?</h2>
 <p className="text-primary-foreground/80 mb-8 text-lg">
 Atendimento 24h em Curitiba e Região Metropolitana. Orçamento grátis pelo WhatsApp.
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

export default ServicoDesentupimentoPage;