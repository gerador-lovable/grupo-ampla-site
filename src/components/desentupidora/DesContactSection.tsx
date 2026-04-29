import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/5541995121583?text=Ol%C3%A1%2C%20preciso%20de%20um%20desentupidor%20urgente.";

const DesContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-20 bg-secondary">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Solicite Seu Orçamento Grátis
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Atendimento 24h direto pelo WhatsApp — resposta imediata
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl border border-border shadow-sm p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mb-4">
              <WhatsAppIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Atendimento 24 horas
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale com um desentupidor agora mesmo pelo WhatsApp.
            </p>
            <Button
              asChild
              className="w-full bg-[#25D366] hover:bg-[#075E54] text-white font-bold text-lg min-h-[56px] transition-transform duration-200 hover:scale-[1.02]"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Falar no WhatsApp Agora
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-foreground">WhatsApp</p>
                <a href="https://wa.me/5541995121583" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(41) 99512-1583</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Telefone</p>
                <a href="tel:+5541995121583" className="text-primary hover:underline">(41) 99512-1583</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Horário de Atendimento</p>
                <p className="text-muted-foreground text-sm">24 horas — todos os dias</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Endereço</p>
                <p className="text-muted-foreground text-sm">R. José Beira, 205 - Roça Grande<br />Colombo - PR, 83407-320</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-sm mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8!2d-49.2226!3d-25.3735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5b1c1e1e1e1%3A0x1234567890abcdef!2sR.%20Jos%C3%A9%20Beira%2C%20205%20-%20Ro%C3%A7a%20Grande%2C%20Colombo%20-%20PR%2C%2083407-320!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Ampla Desentupidora"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesContactSection;
