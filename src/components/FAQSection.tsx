import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
 {
 q: "Quanto tempo demora a dedetização em casa?",
 a: "Casa ou apartamento comum: 1h a 2h. Comércio e condomínio: variam com a área. A gente marca hora e cumpre, sem passar do horário combinado.",
 },
 {
 q: "Preciso sair de casa depois da aplicação?",
 a: "Sim, por 2h a 4h dependendo do produto. Depois disso o ambiente está seguro para crianças e pets. Usamos produto sem cheiro forte para você não precisar dormir fora.",
 },
 {
 q: "É seguro para criança e pet?",
 a: "Sim. Todos os produtos são registrados na ANVISA e o lote fica anexado ao laudo. Depois do tempo de secagem, o ambiente pode ser usado normalmente.",
 },
 {
 q: "Se voltar barata, vocês voltam?",
 a: "Voltamos, sem cobrar. A garantia é de 6 meses, vem por escrito no laudo. Se a praga reaparecer no prazo, você chama e a gente resolve.",
 },
 {
 q: "Funciona pra apartamento, restaurante e condomínio?",
 a: "Sim. Atendemos residência, comércio, restaurante, indústria e condomínio. Emitimos laudo técnico aceito pela vigilância sanitária e por síndicos.",
 },
 {
 q: "Como pago?",
 a: "PIX, dinheiro, débito ou cartão de crédito em até 12x. Sem entrada, sem consulta ao SPC.",
 },
 {
 q: "Como agendo?",
 a: "Chama no WhatsApp (41) 99512-1583 ou liga. Respondemos em minutos e agendamos para o mesmo dia, se for urgência.",
 },
];

const FAQSection = () => {
 return (
 <section id="faq" className="section-py bg-background">
 <div className="container px-4">
 <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
 Dúvidas mais comuns
 </h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 O que a gente mais responde no WhatsApp, resumido aqui.
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

export default FAQSection;
