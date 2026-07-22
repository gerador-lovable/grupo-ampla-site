import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import DesHeroSection from "@/components/desentupidora/DesHeroSection";
import UrgencyBar from "@/components/UrgencyBar";
import StatsSection from "@/components/StatsSection";
import DesServicesSection from "@/components/desentupidora/DesServicesSection";
import DesProblemsSection from "@/components/desentupidora/DesProblemsSection";
import SegmentosDesSection from "@/components/desentupidora/SegmentosDesSection";
import DesDifferentialsSection from "@/components/desentupidora/DesDifferentialsSection";
import DesTestimonialsSection from "@/components/desentupidora/DesTestimonialsSection";
import DesGuaranteeSection from "@/components/desentupidora/DesGuaranteeSection";
import BlogHighlightSection from "@/components/BlogHighlightSection";
import DesFAQSection from "@/components/desentupidora/DesFAQSection";
import DesContactSection from "@/components/desentupidora/DesContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const faqs = [
  { q: "Quanto tempo leva para desentupir?", a: "Na maioria dos casos, resolvemos em 30 minutos a 2 horas, dependendo da complexidade do entupimento." },
  { q: "Vocês quebram parede ou piso?", a: "Não! Utilizamos equipamentos modernos como máquinas rotativas e hidrojateamento que desobstruem sem necessidade de quebrar estruturas." },
  { q: "Atendem emergências de madrugada?", a: "Sim! Nosso atendimento é 24 horas, incluindo fins de semana e feriados. Ligue ou mande WhatsApp a qualquer momento." },
  { q: "Qual o prazo de garantia?", a: "Oferecemos 90 dias de garantia para todos os nossos serviços de desentupimento." },
  { q: "Fazem limpeza de fossa?", a: "Sim! Contamos com caminhão limpa-fossa para esgotamento e limpeza de fossas sépticas com descarte ambientalmente correto." },
  { q: "Quais formas de pagamento aceitam?", a: "Aceitamos dinheiro, PIX, cartão de débito e crédito. Parcelamos em até 12x no cartão de crédito." },
  { q: "Como faço para agendar?", a: "Clique no botão do WhatsApp ou ligue para (41) 99512-1583. Respondemos rapidamente e podemos enviar uma equipe imediatamente." },
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

const Desentupidora = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Desentupidora Curitiba 24h | Ampla - 35 Anos de Experiência</title>
        <meta name="description" content="Desentupidora em Curitiba e Região Metropolitana. Atendimento 24h, sem quebrar parede, hidrojateamento e limpa-fossa. Orçamento grátis via WhatsApp." />
        <link rel="canonical" href="https://www.grupoampladedetiza.com.br/desentupidora" />
        <meta property="og:title" content="Desentupidora Curitiba 24h | Ampla - 35 Anos de Experiência" />
        <meta property="og:description" content="Desentupimento 24h em Curitiba: máquinas rotativas, hidrojateamento e limpa-fossa. Sem quebrar parede. Orçamento grátis." />
        <meta property="og:url" content="https://www.grupoampladedetiza.com.br/desentupidora" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <DesHeroSection />
      <UrgencyBar />
      <StatsSection />
      <DesServicesSection />
      <DesProblemsSection />
      <SegmentosDesSection />
      <DesDifferentialsSection />
      <DesTestimonialsSection />
      <DesGuaranteeSection />
      <BlogHighlightSection />
      <DesFAQSection />
      <DesContactSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Desentupidora;
