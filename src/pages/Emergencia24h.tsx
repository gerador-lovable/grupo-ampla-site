import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, Clock, Phone, ShieldCheck, Zap, MapPin } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TestimonialsModule from "@/components/TestimonialsModule";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

const BASE_URL = "https://grupo-ampla-site.lovable.app";
const canonical = `${BASE_URL}/emergencia-24h`;
const whatsapp = buildRedirectUrl({ servico: "desentupimento" });

const situacoes = [
 {
 icon: AlertTriangle,
 titulo: "Esgoto transbordando",
 texto: "Vaso, ralo ou caixa de inspeção transbordando. Enviamos hidrojato em até 2h.",
 },
 {
 icon: AlertTriangle,
 titulo: "Fossa cheia ou vazando",
 texto: "Caminhão limpa-fossa 24h para residências, condomínios e comércios.",
 },
 {
 icon: AlertTriangle,
 titulo: "Pia entupida em comércio",
 texto: "Restaurantes e comércios que não podem parar. Atendemos em regime prioritário.",
 },
 {
 icon: AlertTriangle,
 titulo: "Infestação grave de pragas",
 texto: "Baratas, ratos ou escorpiões em grande quantidade. Deslocamento imediato.",
 },
];

const faqs = [
 {
 q: "Em quanto tempo vocês chegam?",
 a: "Nosso tempo médio de resposta em Curitiba e Região Metropolitana é de 2 horas. Em Colombo, onde fica nossa base, o atendimento é ainda mais rápido.",
 },
 {
 q: "Atendem de madrugada, finais de semana e feriados?",
 a: "Sim. O plantão da Ampla funciona 24 horas por dia, 7 dias por semana, inclusive feriados nacionais.",
 },
 {
 q: "Cobram taxa extra por atendimento fora do horário comercial?",
 a: "Emergências à noite ou em feriados podem ter adicional, sempre informado no orçamento antes de qualquer serviço. Você aprova o valor antes de iniciarmos.",
 },
 {
 q: "Trabalham com hidrojato e caminhão limpa-fossa próprios?",
 a: "Sim. Temos equipamentos próprios de hidrojateamento de alta pressão e caminhões limpa-fossa, o que reduz o tempo de resposta e o custo final.",
 },
 {
 q: "Emitem nota fiscal e garantia mesmo em emergência?",
 a: "Sempre. Todo atendimento emergencial inclui nota fiscal, laudo dos produtos aplicados e garantia por escrito.",
 },
];

const emergencySchema = {
 "@context": "https://schema.org",
 "@type": "EmergencyService",
 name: "Ampla, Emergência 24h em Curitiba",
 telephone: "+5541995121583",
 areaServed: "Curitiba e Região Metropolitana - PR",
 url: canonical,
 description:
 "Atendimento emergencial 24 horas em Curitiba e Região Metropolitana para desentupimento, limpeza de fossa, hidrojateamento e infestações graves.",
 openingHoursSpecification: [
 {
 "@type": "OpeningHoursSpecification",
 dayOfWeek: [
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday",
 "Sunday",
 ],
 opens: "00:00",
 closes: "23:59",
 },
 ],
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

const title = "Emergência 24h em Curitiba | Desentupidora e Dedetizadora Ampla";
const description =
 "Atendimento emergencial 24h em Curitiba e Região Metropolitana. Desentupimento, limpeza de fossa, hidrojato e infestações graves em até 2h. Ligue: (41) 99512-1583.";

const Emergencia24h = () => {
 return (
 <div className="min-h-screen">
 <Helmet>
 <title>{title}</title>
 <meta name="description" content={description} />
 <link rel="canonical" href={canonical} />
 <meta property="og:title" content={title} />
 <meta property="og:description" content={description} />
 <meta property="og:url" content={canonical} />
 <script type="application/ld+json">{JSON.stringify(emergencySchema)}</script>
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>

 <Header />

 <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-gradient-to-br from-[#7a1010] via-destructive to-accent">
 <div className="container px-4">
 <div className="max-w-3xl">
 <div className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
 <Zap className="w-4 h-4" /> Plantão 24 horas · 7 dias por semana
 </div>
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6">
 Emergência 24h em Curitiba e Região
 </h1>
 <p className="text-lg text-white/90 mb-8 leading-relaxed">
 Esgoto transbordando, fossa cheia, ratos no comércio? Envio de equipe em até
 <strong> 2 horas</strong> em Curitiba e RMC. Hidrojato e limpa-fossa próprios.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 border-2 border-white text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px] animate-slow-pulse">
 <a href="tel:+5541995121583">
 <Phone className="w-6 h-6 mr-2" /> LIGUE AGORA (41) 99512-1583
 </a>
 </Button>
 <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]">
 <Link to={whatsapp}>
 <WhatsAppIcon className="w-6 h-6 mr-2" /> WhatsApp Emergência
 </Link>
 </Button>
 </div>
 </div>
 </div>
 </section>

 <section className="bg-primary text-primary-foreground section-py">
 <div className="container px-4 flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-semibold">
 <span className="inline-flex items-center gap-2"><Clock className="w-5 h-5 text-accent" /> Resposta em 2h</span>
 <span className="inline-flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-accent" /> Garantia por escrito</span>
 <span className="inline-flex items-center gap-2"><MapPin className="w-5 h-5 text-accent" /> Toda a RMC</span>
 </div>
 </section>

  <section className="section-py bg-background">
 <div className="container px-4">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
 Quando ligar para a emergência
 </h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Situações que não podem esperar, atendemos imediatamente
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
 {situacoes.map((s) => (
 <div key={s.titulo} className="bg-muted/40 border border-border rounded-xl p-6 flex gap-4">
 <s.icon className="w-8 h-8 text-destructive shrink-0" />
 <div>
 <h3 className="font-bold text-lg text-foreground mb-2">{s.titulo}</h3>
 <p className="text-muted-foreground text-sm leading-relaxed">{s.texto}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 <TestimonialsModule
 tags={["emergencia"]}
 titulo="Casos reais de atendimento emergencial"
 subtitulo="Clientes que precisaram de resposta imediata e foram atendidos pela Ampla"
 bg="muted"
 />

 <section className="section-py bg-background">
 <div className="container px-4 max-w-3xl">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-10">
 Perguntas frequentes sobre emergência
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

 <section className="section-py bg-destructive text-white">
 <div className="container px-4 max-w-3xl text-center">
 <h2 className="text-2xl md:text-4xl font-bold mb-4">Precisa de ajuda agora?</h2>
 <p className="text-white/90 mb-8 text-lg">
 Nossa central de emergência atende 24 horas. Ligue ou chame no WhatsApp.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="bg-white text-destructive hover:bg-white/90 text-lg font-bold px-10 py-7 rounded-xl min-h-[56px] animate-slow-pulse">
 <a href="tel:+5541995121583">
 <Phone className="w-6 h-6 mr-2" /> (41) 99512-1583
 </a>
 </Button>
 <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-10 py-7 rounded-xl min-h-[56px]">
 <Link to={whatsapp}>
 <WhatsAppIcon className="w-6 h-6 mr-2" /> WhatsApp
 </Link>
 </Button>
 </div>
 </div>
 </section>

 <FooterSection />
 <WhatsAppFloat />
 </div>
 );
};

export default Emergencia24h;