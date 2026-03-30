import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo leva para desentupir?",
    a: "Na maioria dos casos, resolvemos em 30 minutos a 2 horas, dependendo da complexidade do entupimento.",
  },
  {
    q: "Vocês quebram parede ou piso?",
    a: "Não! Utilizamos equipamentos modernos como máquinas rotativas e hidrojateamento que desobstruem sem necessidade de quebrar estruturas.",
  },
  {
    q: "Atendem emergências de madrugada?",
    a: "Sim! Nosso atendimento é 24 horas, incluindo fins de semana e feriados. Ligue ou mande WhatsApp a qualquer momento.",
  },
  {
    q: "Qual o prazo de garantia?",
    a: "Oferecemos 90 dias de garantia para todos os nossos serviços de desentupimento.",
  },
  {
    q: "Fazem limpeza de fossa?",
    a: "Sim! Contamos com caminhão limpa-fossa para esgotamento e limpeza de fossas sépticas com descarte ambientalmente correto.",
  },
  {
    q: "Quais formas de pagamento aceitam?",
    a: "Aceitamos dinheiro, PIX, cartão de débito e crédito. Parcelamos em até 12x no cartão de crédito.",
  },
  {
    q: "Como faço para agendar?",
    a: "Clique no botão do WhatsApp ou ligue para (41) 99512-1583. Respondemos rapidamente e podemos enviar uma equipe imediatamente.",
  },
];

const DesFAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos serviços de desentupimento
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
