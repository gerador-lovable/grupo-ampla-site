import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useToast } from "@/hooks/use-toast";

const DesContactSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Preencha os campos obrigatórios", description: "Nome e telefone são obrigatórios.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contato" className="py-16 md:py-20 bg-secondary">
        <div className="container px-4">
          <div className="max-w-lg mx-auto text-center py-12">
            <CheckCircle2 className="w-16 h-16 text-trust mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Obrigado pelo contato!</h2>
            <p className="text-muted-foreground mb-6">Recebemos sua solicitação e entraremos em contato em breve.</p>
            <Button asChild className="bg-[#075E54] hover:bg-[#075E54]/90 text-white min-h-[44px] transition-transform duration-200 hover:scale-105">
              <a href="https://wa.me/5541995121583?text=Ol%C3%A1%2C%20enviei%20o%20formul%C3%A1rio%20de%20desentupimento." target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-16 md:py-20 bg-secondary">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Solicite Seu Orçamento Grátis
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Preencha o formulário e receba seu orçamento sem compromisso
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">Nome *</label>
              <Input placeholder="Seu nome completo" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="min-h-[44px]" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">Telefone/WhatsApp *</label>
              <Input placeholder="(41) 99999-9999" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} className="min-h-[44px]" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">E-mail (opcional)</label>
              <Input type="email" placeholder="seu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="min-h-[44px]" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">Tipo de Imóvel</label>
              <Select onValueChange={(v) => setForm({ ...form, propertyType: v })}>
                <SelectTrigger className="min-h-[44px]"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="comercial">Comercial</SelectItem>
                  <SelectItem value="condominio">Condomínio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">Tipo de Serviço</label>
              <Select onValueChange={(v) => setForm({ ...form, serviceType: v })}>
                <SelectTrigger className="min-h-[44px]"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="pia">Desentupimento de Pia</SelectItem>
                  <SelectItem value="vaso">Desentupimento de Vaso</SelectItem>
                  <SelectItem value="esgoto">Desentupimento de Esgoto</SelectItem>
                  <SelectItem value="hidrojateamento">Hidrojateamento</SelectItem>
                  <SelectItem value="fossa">Limpeza de Fossa</SelectItem>
                  <SelectItem value="gordura">Limpeza de Caixa de Gordura</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">Mensagem (opcional)</label>
              <Textarea placeholder="Descreva o problema..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={3} />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg min-h-[52px] transition-transform duration-200 hover:scale-[1.02]">
              Solicitar Orçamento Grátis
            </Button>
          </form>

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
