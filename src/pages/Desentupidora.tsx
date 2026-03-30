import Header from "@/components/Header";
import DesHeroSection from "@/components/desentupidora/DesHeroSection";
import UrgencyBar from "@/components/UrgencyBar";
import DesServicesSection from "@/components/desentupidora/DesServicesSection";
import DesProblemsSection from "@/components/desentupidora/DesProblemsSection";
import DesDifferentialsSection from "@/components/desentupidora/DesDifferentialsSection";
import DesTestimonialsSection from "@/components/desentupidora/DesTestimonialsSection";
import DesGuaranteeSection from "@/components/desentupidora/DesGuaranteeSection";
import DesFAQSection from "@/components/desentupidora/DesFAQSection";
import DesContactSection from "@/components/desentupidora/DesContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Desentupidora = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <DesHeroSection />
      <UrgencyBar />
      <DesServicesSection />
      <DesProblemsSection />
      <DesDifferentialsSection />
      <DesTestimonialsSection />
      <DesGuaranteeSection />
      <DesFAQSection />
      <DesContactSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Desentupidora;
