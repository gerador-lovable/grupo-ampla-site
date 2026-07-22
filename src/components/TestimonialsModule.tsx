import { Star, Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { filterDepoimentos, type DepoimentoTag } from "@/data/depoimentos";

interface Props {
  tags?: DepoimentoTag[];
  titulo?: string;
  subtitulo?: string;
  bg?: "background" | "muted" | "secondary";
  includeSchema?: boolean;
}

const bgClass = {
  background: "bg-background",
  muted: "bg-muted/40",
  secondary: "bg-secondary",
};

const TestimonialsModule = ({
  tags = [],
  titulo = "O que nossos clientes dizem",
  subtitulo = "Avaliações reais de clientes atendidos pela Ampla",
  bg = "secondary",
  includeSchema = true,
}: Props) => {
  const items = filterDepoimentos(tags, 8);
  if (items.length === 0) return null;

  const avg =
    items.reduce((s, i) => s + i.estrelas, 0) / items.length;

  const reviewSchema = includeSchema
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Ampla Dedetizadora e Desentupidora",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: avg.toFixed(1),
          reviewCount: items.length,
          bestRating: "5",
        },
        review: items.slice(0, 5).map((d) => ({
          "@type": "Review",
          author: { "@type": "Person", name: d.nome },
          reviewRating: {
            "@type": "Rating",
            ratingValue: d.estrelas,
            bestRating: "5",
          },
          reviewBody: d.texto,
          ...(d.data ? { datePublished: d.data } : {}),
        })),
      }
    : null;

  return (
    <section className={`section-py ${bgClass[bg]}`}>
      {reviewSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(reviewSchema)}
          </script>
        </Helmet>
      )}
      <div className="container px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          {titulo}
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          {subtitulo}
        </p>

        <Carousel opts={{ align: "start", loop: true }} className="max-w-5xl mx-auto">
          <CarouselContent>
            {items.map((d) => (
              <CarouselItem key={d.nome + d.servico} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border border-border bg-surface shadow-card hover:shadow-elegant transition-shadow h-full rounded-2xl">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-9 h-9 text-accent/30 mb-4" strokeWidth={1.5} />
                    <p className="text-foreground text-[15px] leading-relaxed mb-5 flex-1">
                      "{d.texto}"
                    </p>
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: d.estrelas }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="font-display font-semibold text-foreground text-sm">{d.nome}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{d.local} · {d.servico}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsModule;