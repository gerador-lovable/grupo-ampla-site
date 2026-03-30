import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo dura o serviço de dedetização?",
    a: "Depende do tamanho do imóvel, mas em média 1-2 horas para residências. Para empresas e condomínios, o tempo pode variar conforme a área a ser tratada.",
  },
  {
    q: "Preciso sair de casa durante a dedetização?",
    a: "Recomendamos permanecer fora por 2-4 horas após a aplicação, dependendo do produto utilizado. Nossa equipe orientará sobre os cuidados específicos.",
  },
  {
    q: "Os produtos são seguros para crianças e animais de estimação?",
    a: "Sim! Utilizamos produtos certificados pela ANVISA e aplicamos com técnicas que minimizam riscos. Após o período de segurança, o ambiente estará completamente seguro.",
  },
  {
    q: "Qual o prazo de garantia?",
    a: "Oferecemos 6 meses de garantia para todos os nossos serviços de dedetização. Se houver reincidência, voltamos sem custo adicional.",
  },
  {
    q: "Atendem empresas e condomínios?",
    a: "Sim! Temos equipe especializada para atendimento comercial e condominial, com laudo técnico incluso para conformidade com a vigilância sanitária.",
  },
  {
    q: "Quais formas de pagamento aceitam?",
    a: "Aceitamos dinheiro, PIX, cartão de débito e crédito. Parcelamos em até 12x no cartão de crédito.",
  },
  {
    q: "Como faço para agendar?",
    a: "É muito fácil! Clique no botão do WhatsApp ou ligue para (41) 99512-1583. Respondemos rapidamente e agendamos no melhor horário para você.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos serviços
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
