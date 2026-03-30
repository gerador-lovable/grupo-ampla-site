import HeroSection from "@/components/HeroSection";
import UrgencyBar from "@/components/UrgencyBar";
import ServicesSection from "@/components/ServicesSection";
import PestsSection from "@/components/PestsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <UrgencyBar />
      <ServicesSection />
      <PestsSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
