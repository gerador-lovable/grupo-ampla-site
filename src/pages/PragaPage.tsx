import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, CheckCircle2, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import UrgencyBar from "@/components/UrgencyBar";
import TestimonialsModule from "@/components/TestimonialsModule";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import { findPraga, pragas } from "@/data/pragas";
import type { DepoimentoTag } from "@/data/depoimentos";

const BASE_URL = "https://grupo-ampla-site.lovable.app";

const PragaPage = () => {
 const { praga: slug } = useParams();
 const praga = slug ? findPraga(slug) : undefined;

 if (!praga) return <Navigate to="/404" replace />;

 const canonical = `${BASE_URL}/dedetizacao/${praga.slug}`;
 const whatsapp = buildRedirectUrl({ servico: "dedetizacao" });

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: praga.faqs.map((f) => ({
 "@type": "Question",
 name: f.q,
 acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
 };

 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 serviceType: `Dedetização de ${praga.nome}`,
 provider: {
 "@type": "LocalBusiness",
 name: "Ampla Dedetizadora",
 telephone: "+5541995121583",
 areaServed: "Curitiba e Região Metropolitana",
 },
 areaServed: "Curitiba e Região Metropolitana",
 description: praga.description,
 };

 const relacionadas = pragas.filter((p) => p.slug !== praga.slug).slice(0, 4);

 return (
 <div className="min-h-screen">
 <Helmet>
 <title>{praga.title}</title>
 <meta name="description" content={praga.description} />
 <link rel="canonical" href={canonical} />
 <meta property="og:title" content={praga.title} />
 <meta property="og:description" content={praga.description} />
 <meta property="og:url" content={canonical} />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
 </Helmet>

 <Header />

 {/* Hero */}
 <section className="relative pt-32 md:pt-40 pb-[30px] md:pb-[30px] bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
 <div className="container px-4">
 <div className="max-w-3xl">
 <div className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
 Ampla · 35 anos em Curitiba
 </div>
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
 {praga.h1}
 </h1>
 <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">{praga.intro}</p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Button
 asChild
 size="lg"
 className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]"
 >
 <Link to={whatsapp}>
 <WhatsAppIcon className="w-6 h-6 mr-2" />
 Orçamento Grátis no WhatsApp
 </Link>
 </Button>
 <Button
 asChild
 size="lg"
 className="bg-destructive hover:bg-destructive/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]"
 >
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

 {/* Contexto */}
  <section className="section-py bg-background">
 <div className="container px-4 max-w-4xl">
 <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
 Como tratamos {praga.nome.toLowerCase()} na Ampla
 </h2>
 <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{praga.contexto}</p>
 </div>
 </section>

 {/* Sinais + Riscos */}
 <section className="section-py bg-muted/40">
 <div className="container px-4">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
 <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
 <div className="flex items-center gap-3 mb-5">
 <AlertTriangle className="w-7 h-7 text-accent" />
 <h2 className="text-xl md:text-2xl font-bold text-foreground">Sinais de infestação</h2>
 </div>
 <ul className="space-y-3">
 {praga.sinais.map((s) => (
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
 <h2 className="text-xl md:text-2xl font-bold text-foreground">Riscos à saúde e ao imóvel</h2>
 </div>
 <ul className="space-y-3">
 {praga.riscos.map((r) => (
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

 {/* Método */}
  <section className="section-py bg-background">
 <div className="container px-4">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
 Nosso método de tratamento
 </h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Protocolo técnico com produtos ANVISA
 </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
 {praga.metodo.map((m, i) => (
 <div key={m.titulo} className="bg-muted/40 rounded-xl p-6 border border-border">
 <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
 {i + 1}
 </div>
 <h3 className="font-bold text-lg text-foreground mb-2">{m.titulo}</h3>
 <p className="text-muted-foreground text-sm leading-relaxed">{m.texto}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Garantia */}
 <section className="section-py bg-primary text-primary-foreground">
 <div className="container px-4 max-w-3xl text-center">
 <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
 <h2 className="text-2xl md:text-3xl font-bold mb-3">Garantia Ampla</h2>
 <p className="text-primary-foreground/90 text-lg">{praga.garantia}</p>
 </div>
 </section>

 {/* FAQ */}
  <section className="section-py bg-background">
 <div className="container px-4 max-w-3xl">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-10">
 Perguntas frequentes sobre {praga.nome.toLowerCase()}
 </h2>
 <div className="space-y-6">
 {praga.faqs.map((f) => (
 <div key={f.q}>
 <h3 className="font-bold text-foreground text-lg mb-2">{f.q}</h3>
 <p className="text-muted-foreground leading-relaxed">{f.a}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Relacionadas */}
 <TestimonialsModule
 tags={[praga.slug as DepoimentoTag, "dedetizacao"]}
 titulo={`Clientes atendidos, ${praga.nome}`}
 subtitulo="Avaliações reais de quem contratou a Ampla para o mesmo problema"
 bg="muted"
 />

 <section className="section-py bg-background">
 <div className="container px-4">
 <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
 Outras pragas que controlamos
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
 {relacionadas.map((r) => (
 <Link
 key={r.slug}
 to={`/dedetizacao/${r.slug}`}
 className="bg-background rounded-lg p-4 border border-border hover:border-primary hover:shadow-md transition-all flex items-center justify-between gap-2"
 >
 <span className="font-semibold text-foreground text-sm md:text-base">{r.nome}</span>
 <ArrowRight className="w-4 h-4 text-primary shrink-0" />
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* CTA final */}
 <section className="section-py bg-primary text-primary-foreground">
 <div className="container px-4 max-w-3xl text-center">
 <h2 className="text-2xl md:text-4xl font-bold mb-4">
 Precisa eliminar {praga.nome.toLowerCase()} agora?
 </h2>
 <p className="text-primary-foreground/80 mb-8 text-lg">
 Orçamento grátis em minutos pelo WhatsApp. Atendimento em Curitiba e Região Metropolitana.
 </p>
 <Button
 asChild
 size="lg"
 className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-10 py-7 rounded-xl min-h-[56px]"
 >
 <Link to={whatsapp}>
 <WhatsAppIcon className="w-6 h-6 mr-2" />
 Falar no WhatsApp
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

export default PragaPage;