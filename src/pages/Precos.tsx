import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Tag, Phone, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import UrgencyBar from "@/components/UrgencyBar";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

const BASE_URL = "https://www.grupoampladedetiza.com.br";

interface Tabela {
  categoria: string;
  intro: string;
  linhas: { servico: string; preco: string; obs?: string; to?: string }[];
}

const tabelas: Tabela[] = [
  {
    categoria: "Dedetização",
    intro: "Aplicação com produto ANVISA, nota fiscal, certificado e garantia de 6 meses por escrito.",
    linhas: [
      { servico: "Apartamento até 60 m²", preco: "R$ 180 a R$ 240" },
      { servico: "Casa ou apto 60 a 150 m²", preco: "R$ 240 a R$ 420" },
      { servico: "Comércio até 200 m²", preco: "R$ 350 a R$ 700", to: "/servicos/dedetizacao-comercial" },
      { servico: "Descupinização (por m² tratado)", preco: "R$ 25 a R$ 60/m²", to: "/dedetizacao/cupim" },
      { servico: "Controle de escorpião (área externa)", preco: "R$ 280 a R$ 550", to: "/dedetizacao/escorpiao" },
    ],
  },
  {
    categoria: "Desentupimento",
    intro: "Equipamento profissional (mola motorizada e hidrojato), atendimento 24 horas.",
    linhas: [
      { servico: "Desentupimento de pia", preco: "R$ 150 a R$ 300", to: "/desentupidora/desentupimento-pia" },
      { servico: "Desentupimento de vaso sanitário", preco: "R$ 180 a R$ 380", to: "/desentupidora/desentupimento-vaso-sanitario" },
      { servico: "Desentupimento de esgoto", preco: "R$ 250 a R$ 600", to: "/desentupidora/desentupimento-esgoto" },
      { servico: "Hidrojateamento", preco: "R$ 500 a R$ 1.500", obs: "Varia por metragem e obstrução", to: "/desentupidora/hidrojateamento" },
      { servico: "Limpeza de fossa (por caminhão)", preco: "R$ 400 a R$ 900", to: "/desentupidora/limpeza-fossa" },
    ],
  },
  {
    categoria: "Serviços especiais",
    intro: "Serviços com laudo técnico e certificado aceitos por vigilância, síndico e auditoria.",
    linhas: [
      { servico: "Limpeza de caixa d'água (residencial)", preco: "R$ 220 a R$ 380", to: "/servicos/limpeza-caixa-dagua" },
      { servico: "Limpeza de caixa d'água (condomínio)", preco: "sob orçamento", to: "/servicos/limpeza-caixa-dagua" },
      { servico: "Controle de roedores (plano trimestral)", preco: "R$ 350 a R$ 900/visita", to: "/servicos/controle-roedores" },
      { servico: "Manejo de pombos e morcegos", preco: "sob orçamento", to: "/servicos/pombos-e-morcegos" },
    ],
  },
  {
    categoria: "Condomínio e comercial",
    intro: "Contrato mensal ou trimestral com laudo por visita, ideal para vigilância e ISO.",
    linhas: [
      { servico: "Dedetização condominial (áreas comuns)", preco: "R$ 450 a R$ 1.200", to: "/servicos/dedetizacao-condominial" },
      { servico: "Dedetização preventiva (plano trimestral)", preco: "a partir de R$ 180/visita", to: "/servicos/dedetizacao-preventiva" },
      { servico: "Restaurante / supermercado (MIP)", preco: "sob orçamento", to: "/servicos/dedetizacao-restaurantes" },
      { servico: "Indústria / hospital (RDC 52)", preco: "sob orçamento", to: "/servicos/dedetizacao-industrias" },
    ],
  },
];

const Precos = () => {
  const canonical = `${BASE_URL}/precos`;
  const whatsapp = buildRedirectUrl({ servico: "dedetizacao" });

  const title = "Preço de Dedetização e Desentupimento em Curitiba 2026 | Ampla";
  const description =
    "Tabela de preços da Ampla em 2026: dedetização, desentupimento, caixa d'água e serviços comerciais em Curitiba e Região Metropolitana. Orçamento grátis no WhatsApp.";

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <Header />

      <section className="relative pt-32 md:pt-40 pb-[30px] md:pb-[30px] bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
        <div className="container px-4">
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ label: "Preços" }]} tone="dark" />
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              <Tag className="w-4 h-4" /> Tabela de preços 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
              Quanto custa dedetização e desentupimento em Curitiba
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Faixas de preço reais praticadas pela Ampla em Curitiba e Região Metropolitana em 2026. Enviamos o valor exato pelo WhatsApp em minutos, sem custo e sem obrigação de fechar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]">
                <Link to={whatsapp}>
                  <WhatsAppIcon className="w-6 h-6 mr-2" /> Orçamento exato no WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-white text-lg font-bold px-8 py-6 rounded-xl min-h-[56px]">
                <a href="tel:+5541995121583">
                  <Phone className="w-6 h-6 mr-2" /> (41) 99512-1583
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <UrgencyBar />

      {tabelas.map((t, idx) => (
        <section key={t.categoria} className={`section-py ${idx % 2 === 0 ? "bg-background" : "bg-muted/40"}`}>
          <div className="container px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Preço de {t.categoria.toLowerCase()} em Curitiba
            </h2>
            <p className="text-muted-foreground mb-8">{t.intro}</p>
            <div className="bg-background rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-primary/5">
                  <tr>
                    <th className="text-left font-bold text-foreground px-4 py-3">Serviço</th>
                    <th className="text-right font-bold text-foreground px-4 py-3">Faixa</th>
                  </tr>
                </thead>
                <tbody>
                  {t.linhas.map((l) => (
                    <tr key={l.servico} className="border-t border-border">
                      <td className="px-4 py-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <div>
                            {l.to ? (
                              <Link to={l.to} className="font-semibold text-foreground hover:text-primary hover:underline">
                                {l.servico}
                              </Link>
                            ) : (
                              <span className="font-semibold text-foreground">{l.servico}</span>
                            )}
                            {l.obs && <div className="text-xs text-muted-foreground">{l.obs}</div>}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-primary whitespace-nowrap">
                        {l.preco}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      <section className="section-py bg-background">
        <div className="container px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            O que está incluso em qualquer preço da Ampla
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Vistoria antes da aplicação",
              "Produto registrado na ANVISA",
              "Nota fiscal em nome do cliente",
              "Certificado com responsável técnico",
              "Garantia de 6 meses por escrito",
              "Sem taxa de deslocamento em Curitiba e RMC",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-muted/40 rounded-lg p-4 border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OutrosServicosBlock bg="muted" />

      <section className="section-py bg-primary text-primary-foreground">
        <div className="container px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Quer o preço exato para o seu caso?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Envie a metragem e o tipo de serviço no WhatsApp, respondemos em minutos com valor fechado.
          </p>
          <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-10 py-7 rounded-xl min-h-[56px]">
            <Link to={whatsapp}>
              <WhatsAppIcon className="w-6 h-6 mr-2" /> Falar no WhatsApp
            </Link>
          </Button>
        </div>
      </section>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Precos;