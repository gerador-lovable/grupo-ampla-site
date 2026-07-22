import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

const WHATSAPP_REDIRECT = buildRedirectUrl({ servico: "dedetizacao" });

export const homeFAQs = [
 {
  q: "O que é dedetização, desratização e descupinização?",
  a: "Dedetização elimina insetos como baratas, formigas e mosquitos. Desratização controla ratos e camundongos. Descupinização trata cupins e brocas de madeira. A Ampla executa os três com produtos certificados pela ANVISA e laudo técnico.",
 },
 {
  q: "Quanto tempo depois do serviço posso voltar ao ambiente?",
  a: "Em geral, entre 2 e 4 horas após a aplicação, com boa ventilação. Em descupinização estrutural o prazo pode ser maior, a equipe orienta antes de aplicar.",
 },
 {
  q: "Os produtos são seguros para crianças, idosos e pets?",
  a: "Sim. Usamos produtos de baixa toxicidade, registrados na ANVISA e no Ministério da Saúde. Mantenha pessoas sensíveis e animais fora do local durante o tempo de segurança indicado pelo técnico.",
 },
 {
  q: "Com que frequência devo fazer o controle de pragas?",
  a: "Residências e condomínios: a cada 6 meses. Restaurantes, comércios e empresas: manutenção trimestral para prevenção contínua e conformidade sanitária.",
 },
 {
  q: "O serviço causa sujeira ou precisa quebrar paredes?",
  a: "Não. A aplicação é limpa e direcionada em ralos, rodapés, frestas e áreas estratégicas. Não deixa resíduos visíveis e não exige reformas.",
 },
 {
  q: "A Ampla oferece garantia?",
  a: "Sim. Todos os serviços têm garantia por escrito, com prazo definido conforme praga e ambiente. Se o problema retornar dentro do prazo, voltamos sem custo adicional.",
 },
 {
  q: "Em quanto tempo o técnico chega após o agendamento?",
  a: "Em atendimentos agendados chegamos no horário combinado. Para emergências, atendemos em até 2 horas em Curitiba e Região Metropolitana.",
 },
 {
  q: "Como funciona o orçamento?",
  a: "Enviamos o orçamento pelo WhatsApp em minutos, ou fazemos avaliação técnica presencial gratuita para casos maiores. Sem custo e sem compromisso.",
 },
];

export const homeFAQSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: homeFAQs.map((f) => ({
  "@type": "Question",
  name: f.q,
  acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
};

const FAQHomeSection = () => {
 return (
  <section className="section-py bg-background">
   <div className="container px-4 max-w-4xl">
    <div className="text-center mb-12">
     <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
      Perguntas frequentes
     </span>
     <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05]">
      Ficou alguma dúvida<span className="text-accent">?</span>
     </h2>
    </div>

    <Accordion type="single" collapsible className="w-full">
     {homeFAQs.slice(0, 4).map((f, i) => (
      <AccordionItem key={f.q} value={`i-${i}`} className="border-border">
       <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
        {f.q}
       </AccordionTrigger>
       <AccordionContent className="text-muted-foreground leading-relaxed">
        {f.a}
       </AccordionContent>
      </AccordionItem>
     ))}
    </Accordion>

    <div className="my-8 rounded-2xl bg-primary text-primary-foreground p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
     <div className="flex-1">
      <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">
       Prefere falar direto com um técnico?
      </h3>
      <p className="text-primary-foreground/80 text-sm md:text-base">
       Orçamento no WhatsApp em minutos, sem compromisso.
      </p>
     </div>
     <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white font-semibold px-6 py-6 rounded-xl">
      <Link to={WHATSAPP_REDIRECT}>
       <WhatsAppIcon className="w-5 h-5 mr-2" />
       Falar no WhatsApp
      </Link>
     </Button>
    </div>

    <Accordion type="single" collapsible className="w-full">
     {homeFAQs.slice(4).map((f, i) => (
      <AccordionItem key={f.q} value={`j-${i}`} className="border-border">
       <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
        {f.q}
       </AccordionTrigger>
       <AccordionContent className="text-muted-foreground leading-relaxed">
        {f.a}
       </AccordionContent>
      </AccordionItem>
     ))}
    </Accordion>
   </div>
  </section>
 );
};

export default FAQHomeSection;