import { Link } from "react-router-dom";
import { Home, Building2, Building, Droplets, ShowerHead, PipetteIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "desentupimento" });

const services = [
 {
 icon: Home,
 title: "Pia, vaso ou ralo entupido",
 description: "Casa ou apartamento, desobstruímos pelo próprio ralo em 30 minutos, sem quebrar piso nem parede.",
 },
 {
 icon: Building2,
 title: "Cozinha comercial parada",
 description: "Restaurante, hotel e padaria: mandamos equipe imediata para você não fechar a cozinha nem perder cliente.",
 },
 {
 icon: Building,
 title: "Esgoto voltando no prédio",
 description: "Coluna coletora, prumada e caixa de inspeção do condomínio. Contrato com síndico e nota fiscal.",
 },
 {
 icon: Droplets,
 title: "Caixa de gordura fedendo",
 description: "Limpeza e retirada de resíduo com destinação correta. Acaba com mau cheiro e evita o próximo entupimento.",
 },
 {
 icon: ShowerHead,
 title: "Hidrojateamento de tubulação",
 description: "Jato de água a alta pressão que desobstrui e ainda limpa incrustação de gordura, raiz e sabão dentro do cano.",
 },
 {
 icon: PipetteIcon,
 title: "Limpa-fossa e esgotamento",
 description: "Caminhão próprio, fossa séptica esgotada em 1h e destinação com licença ambiental, sem cheiro na sua rua.",
 },
];

const DesServicesSection = () => {
 return (
 <section id="servicos" className="section-py bg-secondary">
 <div className="container px-4">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
 O que a gente desentope
 </h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Da pia da cozinha ao esgoto do prédio, mesma equipe, mesmo caminhão, 24 horas.
 </p>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
 {services.map((service) => (
 <Card key={service.title} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
 <CardContent className="p-6 flex flex-col items-start gap-4">
 <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
 <service.icon className="w-7 h-7 text-primary" />
 </div>
 <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
 <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
 <Button asChild className="bg-[#075E54] hover:bg-[#075E54]/90 text-white mt-auto min-h-[44px] font-semibold transition-transform duration-200 hover:scale-105">
 <Link to={WHATSAPP_REDIRECT}>
 <WhatsAppIcon className="w-5 h-5 mr-2" />
 Chamar agora
 </Link>
 </Button>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>
 );
};

export default DesServicesSection;
