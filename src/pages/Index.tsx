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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <UrgencyBar />
      <ServicesSection />
      <PestsSection />
      <DesDifferentialsSection />
      <DesTestimonialsSection />
      <DesGuaranteeSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
