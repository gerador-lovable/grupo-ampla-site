import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UrgencyBar from "@/components/UrgencyBar";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import PragasCarouselStrip from "@/components/PragasCarouselStrip";
import PestsSection from "@/components/PestsSection";
import SegmentosSection from "@/components/SegmentosSection";
import DesDifferentialsSection from "@/components/desentupidora/DesDifferentialsSection";
import DesTestimonialsSection from "@/components/desentupidora/DesTestimonialsSection";
import DesGuaranteeSection from "@/components/desentupidora/DesGuaranteeSection";
import BlogHighlightSection from "@/components/BlogHighlightSection";
import FAQHomeSection, { homeFAQSchema } from "@/components/FAQHomeSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dedetização Curitiba | Ampla - 35 Anos de Experiência</title>
        <meta name="description" content="Dedetização profissional em Curitiba e Colombo. Atendimento 24h, garantia de 6 meses. Orçamento grátis via WhatsApp. Há 35 anos protegendo lares." />
        <link rel="canonical" href="https://www.grupoampladedetiza.com.br/" />
        <meta property="og:title" content="Dedetização Curitiba | Ampla - 35 Anos de Experiência" />
        <meta property="og:description" content="Dedetização profissional em Curitiba e Colombo. Atendimento 24h, garantia de 6 meses. Há 35 anos protegendo lares." />
        <meta property="og:url" content="https://www.grupoampladedetiza.com.br/" />
        <script type="application/ld+json">{JSON.stringify(homeFAQSchema)}</script>
      </Helmet>
      <Header />
      <HeroSection />
      <UrgencyBar />
      <StatsSection />
      <ServicesSection />
      <PragasCarouselStrip />
      <PestsSection />
      <SegmentosSection />
      <DesDifferentialsSection />
      <DesTestimonialsSection />
      <DesGuaranteeSection />
      <BlogHighlightSection />
      <FAQHomeSection />
      <OutrosServicosBlock bg="background" />
      <ContactSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
