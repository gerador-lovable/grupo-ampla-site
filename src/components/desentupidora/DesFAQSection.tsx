import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
 {
 q: "Em quanto tempo vocês desentopem?",
 a: "Entupimento de pia ou vaso: 30 min a 1h. Coluna e esgoto do prédio: até 2h. Chegamos no seu endereço em 1h após você chamar.",
 },
 {
 q: "Vão precisar quebrar meu piso?",
 a: "Não. Usamos máquina rotativa e hidrojato de alta pressão pelo próprio ralo ou caixa de inspeção. Só quebramos se você autorizar, e mesmo assim é raríssimo.",
 },
 {
 q: "Atendem de madrugada e no feriado?",
 a: "Sim, 24 horas, inclusive domingo, feriado e virada de ano. Mesmo preço, mesma equipe.",
 },
 {
 q: "Se entupir de novo, vocês voltam?",
 a: "Voltamos, sem cobrar. Garantia de 90 dias por escrito no comprovante do serviço.",
 },
 {
 q: "Limpam fossa também?",
 a: "Sim. Caminhão limpa-fossa próprio, esgotamento e destinação com licença ambiental. Sem cheiro na sua rua, sem sujar a calçada.",
 },
 {
 q: "Como pago em urgência?",
 a: "PIX na hora, dinheiro, débito ou crédito em até 12x. O técnico já leva a maquininha.",
 },
 {
 q: "Como chamo agora?",
 a: "Manda WhatsApp para (41) 99512-1583 ou liga. Respondemos em minutos e mandamos a equipe imediatamente.",
 },
];

const DesFAQSection = () => {
 return (
 <section id="faq" className="py-16 md:py-20 bg-background">
 <div className="container px-4">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
 Perguntas de quem já ligou
 </h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 As dúvidas mais comuns antes de contratar, respondidas direto.
 </p>

 <div className="max-w-2xl mx-auto">
 <Accordion type="single" collapsible className="w-full">
 {faqs.map((faq, i) => (
 <AccordionItem key={i} value={`item-${i}`}>
 <AccordionTrigger className="text-left text-foreground font-semibold text-sm md:text-base hover:no-underline">
 {faq.q}
 </AccordionTrigger>
 <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
 {faq.a}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </div>
 </section>
 );
};

export default DesFAQSection;
