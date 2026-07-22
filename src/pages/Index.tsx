import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UrgencyBar from "@/components/UrgencyBar";
import ServicesSection from "@/components/ServicesSection";
import PestsSection from "@/components/PestsSection";
import DesDifferentialsSection from "@/components/desentupidora/DesDifferentialsSection";
import DesTestimonialsSection from "@/components/desentupidora/DesTestimonialsSection";
import DesGuaranteeSection from "@/components/desentupidora/DesGuaranteeSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";

const faqs = [
  { q: "Quanto tempo dura o serviço de dedetização?", a: "Depende do tamanho do imóvel, mas em média 1-2 horas para residências. Para empresas e condomínios, o tempo pode variar conforme a área a ser tratada." },
  { q: "Preciso sair de casa durante a dedetização?", a: "Recomendamos permanecer fora por 2-4 horas após a aplicação, dependendo do produto utilizado. Nossa equipe orientará sobre os cuidados específicos." },
  { q: "Os produtos são seguros para crianças e animais de estimação?", a: "Sim! Utilizamos produtos certificados pela ANVISA e aplicamos com técnicas que minimizam riscos. Após o período de segurança, o ambiente estará completamente seguro." },
  { q: "Qual o prazo de garantia?", a: "Oferecemos 6 meses de garantia para todos os nossos serviços de dedetização. Se houver reincidência, voltamos sem custo adicional." },
  { q: "Atendem empresas e condomínios?", a: "Sim! Temos equipe especializada para atendimento comercial e condominial, com laudo técnico incluso para conformidade com a vigilância sanitária." },
  { q: "Quais formas de pagamento aceitam?", a: "Aceitamos dinheiro, PIX, cartão de débito e crédito. Parcelamos em até 12x no cartão de crédito." },
  { q: "Como faço para agendar?", a: "É muito fácil! Clique no botão do WhatsApp ou ligue para (41) 99512-1583. Respondemos rapidamente e agendamos no melhor horário para você." },
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dedetização Curitiba | Ampla - 35 Anos de Experiência</title>
        <meta name="description" content="Dedetização profissional em Curitiba e Colombo. Atendimento 24h, garantia de 6 meses. Orçamento grátis via WhatsApp. Há 35 anos protegendo lares." />
        <link rel="canonical" href="https://grupo-ampla-site.lovable.app/" />
        <meta property="og:title" content="Dedetização Curitiba | Ampla - 35 Anos de Experiência" />
        <meta property="og:description" content="Dedetização profissional em Curitiba e Colombo. Atendimento 24h, garantia de 6 meses. Há 35 anos protegendo lares." />
        <meta property="og:url" content="https://grupo-ampla-site.lovable.app/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <HeroSection />
      <UrgencyBar />
      <ServicesSection />
      <PestsSection />
      <DesDifferentialsSection />
      <DesTestimonialsSection />
      <DesGuaranteeSection />
      <FAQSection />
      <OutrosServicosBlock bg="background" />
      <ContactSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
