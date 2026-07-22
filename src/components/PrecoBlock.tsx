import { Link } from "react-router-dom";
import { CheckCircle2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";

export interface Faixa {
  label: string;
  preco: string;
  detalhe?: string;
}

interface Props {
  titulo: string;
  subtitulo?: string;
  faixas: Faixa[];
  observacao?: string;
  servico?: "dedetizacao" | "desentupimento";
}

const PrecoBlock = ({
  titulo,
  subtitulo = "Faixas médias praticadas em Curitiba e Região Metropolitana em 2026. Enviamos o valor exato pelo WhatsApp em minutos, sem custo.",
  faixas,
  observacao = "Preço final depende da metragem, do grau de infestação e da urgência. Todos os serviços incluem nota fiscal, certificado e garantia por escrito.",
  servico = "dedetizacao",
}: Props) => {
  const whatsapp = buildRedirectUrl({ servico });

  return (
    <section className="section-py bg-muted/40">
      <div className="container px-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-accent/15 text-accent font-semibold text-xs px-3 py-1 rounded-full mb-4">
          <Tag className="w-3.5 h-3.5" /> Quanto custa
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{titulo}</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">{subtitulo}</p>

        <div className="bg-background rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-primary/5">
              <tr>
                <th className="text-left font-bold text-foreground px-4 py-3">Tipo</th>
                <th className="text-right font-bold text-foreground px-4 py-3">Faixa de preço</th>
              </tr>
            </thead>
            <tbody>
              {faixas.map((f) => (
                <tr key={f.label} className="border-t border-border">
                  <td className="px-4 py-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">{f.label}</div>
                        {f.detalhe && (
                          <div className="text-xs text-muted-foreground">{f.detalhe}</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-primary whitespace-nowrap">
                    {f.preco}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground mt-4">{observacao}</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            size="lg"
            className="bg-[#075E54] hover:bg-[#075E54]/90 text-white font-bold rounded-xl min-h-[52px]"
          >
            <Link to={whatsapp}>
              <WhatsAppIcon className="w-5 h-5 mr-2" /> Receber orçamento exato no WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PrecoBlock;