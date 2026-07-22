import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Building2, ClipboardCheck, ShieldCheck, FlaskConical, FileText, Repeat, Phone } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import UrgencyBar from "@/components/UrgencyBar";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "dedetizacao" });

const mipSteps = [
 {
 icon: ClipboardCheck,
 title: "1. Inspeção e Diagnóstico Técnico",
 text: "Nossos técnicos realizam vistoria completa do estabelecimento, identificam pragas-alvo, pontos críticos, focos de infestação e riscos sanitários específicos do seu segmento.",
 },
 {
 icon: FileText,
 title: "2. Plano de Ação (POP) Personalizado",
 text: "Elaboramos Procedimento Operacional Padrão com cronograma, produtos, dosagens, mapas de armadilhas e medidas preventivas, pronto para auditorias da vigilância sanitária.",
 },
 {
 icon: FlaskConical,
 title: "3. Aplicação de Métodos Integrados",
 text: "Combinamos controle químico com produtos registrados na ANVISA, controle mecânico (armadilhas luminosas, iscas monitoradas) e medidas de exclusão para reduzir o uso de químicos.",
 },
 {
 icon: Repeat,
 title: "4. Monitoramento Contínuo",
 text: "Visitas periódicas com registro em check-lists, leitura de armadilhas e relatórios técnicos que comprovam a eficácia do MIP e o histórico sanitário do imóvel.",
 },
];

const compliance = [
 "Alvará sanitário e responsável técnico registrado no CRQ/CRBio",
 "Produtos registrados na ANVISA e Ministério da Saúde",
 "Emissão de certificado, ART e FISPQ dos produtos aplicados",
 "Conformidade com RDC 52/2009 e legislações municipais de Curitiba e Colombo",
 "Laudos técnicos aceitos por auditorias, redes de franquias e órgãos fiscalizadores",
];

const segments = [
 "Indústrias e centros de distribuição",
 "Restaurantes, padarias e food service",
 "Supermercados e comércios de alimentos",
 "Hospitais, clínicas e laboratórios",
 "Escolas, creches e universidades",
 "Hotéis, motéis e pousadas",
 "Condomínios comerciais e residenciais",
 "Escritórios corporativos e coworkings",
];

const faqs = [
 {
 q: "O que é Manejo Integrado de Pragas (MIP)?",
 a: "MIP é uma metodologia técnica que combina inspeção, prevenção, controle mecânico e controle químico responsável para eliminar pragas com o menor uso possível de produtos, atendendo às exigências da ANVISA e da vigilância sanitária.",
 },
 {
 q: "Empresa de dedetização precisa de licença?",
 a: "Sim. Toda empresa de dedetização deve possuir alvará sanitário, responsável técnico registrado (químico, biólogo, agrônomo ou veterinário) e utilizar apenas produtos registrados na ANVISA. A Ampla atende todos esses requisitos há 35 anos.",
 },
 {
 q: "Qual a periodicidade recomendada para empresas?",
 a: "Depende do segmento e do risco sanitário. Food service e hospitais geralmente exigem visitas mensais; escritórios e condomínios costumam trabalhar em ciclos trimestrais ou semestrais dentro de um contrato de MIP.",
 },
 {
 q: "Vocês emitem laudo técnico e certificado?",
 a: "Sim. Emitimos certificado de execução, ART do responsável técnico, FISPQ dos produtos e relatórios de monitoramento, documentação completa para auditorias sanitárias e certificações como APPCC e ISO.",
 },
 {
 q: "Atendem contratos mensais e anuais?",
 a: "Sim. Trabalhamos com contratos de manutenção mensal, trimestral, semestral e anual, com condições especiais e prioridade de atendimento para clientes corporativos.",
 },
];

const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqs.map((f) => ({
 "@type": "Question",
 name: f.q,
 acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
};

const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 serviceType: "Dedetização Comercial e Industrial",
 provider: {
 "@type": "LocalBusiness",
 name: "Ampla Dedetizadora",
 telephone: "+5541995121583",
 areaServed: "Curitiba e Região Metropolitana",
 },
 areaServed: "Curitiba e Região Metropolitana",
 description:
 "Empresa de dedetização com Manejo Integrado de Pragas (MIP) para indústrias, restaurantes, hospitais, condomínios e comércios em Curitiba.",
};

const DedetizacaoComercial = () => {
 return (
 <div className="min-h-screen">
 <Helmet>
 <title>Empresa de Dedetização Comercial em Curitiba | MIP - Ampla</title>
 <meta
 name="description"
 content="Empresa de dedetização comercial e industrial em Curitiba com Manejo Integrado de Pragas (MIP). Conformidade ANVISA, laudo técnico e contratos para restaurantes, indústrias, hospitais e condomínios."
 />
 <link rel="canonical" href="https://grupo-ampla-site.lovable.app/servicos/dedetizacao-comercial" />
 <meta property="og:title" content="Empresa de Dedetização Comercial em Curitiba | MIP - Ampla" />
 <meta
 property="og:description"
 content="Manejo Integrado de Pragas (MIP) para empresas em Curitiba: conformidade ANVISA, laudo técnico e contratos de manutenção. 35 anos de experiência."
 />
 <meta property="og:url" content="https://grupo-ampla-site.lovable.app/servicos/dedetizacao-comercial" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
 </Helmet>

 <Header />

 {/* Hero */}
 <section className="relative pt-32 md:pt-40 pb-[30px] md:pb-[30px] bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
 <div className="container px-4">
 <div className="max-w-3xl">
 <div className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
 Empresa de Dedetização · MIP para empresas
 </div>
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
 Dedetização Comercial em Curitiba com Manejo Integrado de Pragas (MIP)
 </h1>
 <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
 Somos uma empresa de dedetização com 35 anos de atuação em Curitiba e Região Metropolitana.
 Implementamos protocolos de MIP com conformidade ANVISA, laudo técnico e monitoramento contínuo
 para indústrias, food service, hospitais, condomínios e escritórios.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Button
 asChild
 size="lg"
 className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]"
 >
 <Link to={WHATSAPP_REDIRECT}>
 <WhatsAppIcon className="w-6 h-6 mr-2" />
 Solicitar Proposta Comercial
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

 {/* What is MIP */}
  <section className="section-py bg-background">
 <div className="container px-4 max-w-4xl">
 <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
 O que é Manejo Integrado de Pragas (MIP)?
 </h2>
 <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
 O <strong>Manejo Integrado de Pragas (MIP)</strong> é a metodologia recomendada pela ANVISA e pela
 Organização Mundial da Saúde para o controle de pragas urbanas em ambientes empresariais.
 Diferente de uma dedetização pontual, o MIP combina inspeção técnica, medidas preventivas,
 controle mecânico e aplicação criteriosa de produtos registrados, reduzindo o uso de químicos
 e garantindo resultado sustentável.
 </p>
 <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
 Para uma empresa, adotar o MIP significa proteger colaboradores, clientes e produtos, evitar
 interdições da vigilância sanitária e cumprir exigências de auditorias como APPCC, ISO 22000
 e programas de qualidade de redes e franquias.
 </p>
 </div>
 </section>

 {/* MIP Steps */}
  <section className="section-py bg-muted/40">
 <div className="container px-4">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
 Como funciona nosso protocolo MIP
 </h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Um processo técnico, documentado e auditável em 4 etapas
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
 {mipSteps.map((s) => (
 <div key={s.title} className="bg-background rounded-xl p-6 shadow-sm border border-border">
 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
 <s.icon className="w-6 h-6 text-primary" />
 </div>
 <h3 className="font-bold text-lg text-foreground mb-2">{s.title}</h3>
 <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Compliance */}
  <section className="section-py bg-background">
 <div className="container px-4 max-w-4xl">
 <div className="flex items-center gap-3 mb-6">
 <ShieldCheck className="w-8 h-8 text-primary" />
 <h2 className="text-2xl md:text-4xl font-bold text-foreground">
 Conformidade sanitária e legal
 </h2>
 </div>
 <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
 Atendemos integralmente às exigências da vigilância sanitária, do Ministério da Saúde e das
 normas da ANVISA aplicáveis a empresas de dedetização.
 </p>
 <ul className="space-y-3">
 {compliance.map((c) => (
 <li key={c} className="flex items-start gap-3 text-foreground">
 <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
 <span>{c}</span>
 </li>
 ))}
 </ul>
 </div>
 </section>

 {/* Segments */}
 <section className="section-py bg-muted/40">
 <div className="container px-4 max-w-5xl">
 <div className="flex items-center gap-3 mb-6 justify-center">
 <Building2 className="w-8 h-8 text-primary" />
 <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center">
 Segmentos atendidos em Curitiba e Região
 </h2>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8">
 {segments.map((seg) => (
 <div
 key={seg}
 className="bg-background rounded-lg p-4 border border-border text-foreground text-sm font-medium"
 >
 {seg}
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="section-py bg-background">
 <div className="container px-4 max-w-3xl">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-10">
 Perguntas frequentes sobre dedetização comercial
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

 {/* CTA */}
 <section className="section-py bg-primary text-primary-foreground">
 <div className="container px-4 max-w-3xl text-center">
 <h2 className="text-2xl md:text-4xl font-bold mb-4">
 Solicite uma proposta de MIP para sua empresa
 </h2>
 <p className="text-primary-foreground/80 mb-8 text-lg">
 Atendimento comercial dedicado, visita técnica sem compromisso e proposta personalizada em até 24h.
 </p>
 <Button
 asChild
 size="lg"
 className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-10 py-7 rounded-xl min-h-[56px]"
 >
 <Link to={WHATSAPP_REDIRECT}>
 <WhatsAppIcon className="w-6 h-6 mr-2" />
 Falar com um especialista
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

export default DedetizacaoComercial;