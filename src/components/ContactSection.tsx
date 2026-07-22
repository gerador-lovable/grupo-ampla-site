import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

const ContactSection = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      buildRedirectUrl({
        servico: "dedetizacao",
        nome: nome.trim(),
        telefone: telefone.trim(),
        mensagem: mensagem.trim(),
      }),
    );
  };

  return (
    <section id="contato" className="py-16 md:py-20 bg-secondary">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Fale com um técnico agora
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Resposta no WhatsApp em minutos. Orçamento na hora, sem visita obrigatória.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl border border-border shadow-sm p-8 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Manda no WhatsApp
              </h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nome">Nome*</Label>
              <Input
                id="nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">WhatsApp / Telefone*</Label>
              <Input
                id="telefone"
                required
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(41) 99999-9999"
                autoComplete="tel"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">Como podemos ajudar?</Label>
              <Textarea
                id="mensagem"
                rows={3}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Conte qual praga ou serviço você precisa..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#075E54] text-white font-bold text-lg min-h-[56px] transition-transform duration-200 hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Chamar no WhatsApp
            </Button>
          </form>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-foreground">WhatsApp</p>
                <a
                  href={buildRedirectUrl({ servico: "dedetizacao" })}
                  className="text-primary hover:underline"
                >
                  (41) 99512-1583
                </a>
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
                <p className="text-muted-foreground text-sm">Seg-Sex: 7h às 19h</p>
                <p className="text-muted-foreground text-sm">Sáb: 8h às 14h</p>
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
                title="Localização Ampla Dedetizadora"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
