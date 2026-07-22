import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import { findPost, blogPosts } from "@/data/blogPosts";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroBackground from "@/components/HeroBackground";
import { heroImages } from "@/data/heros-images";

const BASE_URL = "https://www.grupoampladedetiza.com.br";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? findPost(slug) : undefined;
  if (!post) return <Navigate to="/404" replace />;

  const canonical = `${BASE_URL}/blog/${post.slug}`;
  const whatsapp = buildRedirectUrl({ servico: "dedetizacao" });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    description: post.description,
    datePublished: post.publicadoEm,
    dateModified: post.atualizadoEm ?? post.publicadoEm,
    author: { "@type": "Organization", name: "Ampla Dedetizadora" },
    publisher: { "@type": "Organization", name: "Grupo Ampla" },
    mainEntityOfPage: canonical,
  };

  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const outros = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <Header />

      <section className="relative overflow-hidden pt-32 md:pt-40 pb-[30px] md:pb-[30px] bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
        <HeroBackground src={heroImages.blog} />
        <div className="relative z-10 container px-4 max-w-3xl">
          <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.titulo }]} tone="dark" />
          <div className="flex items-center gap-3 text-xs text-primary-foreground/80 mb-4 mt-2">
            <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold">{post.categoria}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {post.leitura}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">{post.titulo}</h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">{post.resumo}</p>
        </div>
      </section>

      <article className="pt-16 pb-16 bg-background">
        <div className="container px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Voltar ao blog
          </Link>
          <div className="prose prose-lg max-w-none">
            {post.secoes.map((s) => (
              <div key={s.h2} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{s.h2}</h2>
                {s.paragrafos.map((p, i) => (
                  <p key={i} className="text-foreground/90 leading-relaxed mb-4">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="space-y-2 text-foreground/90">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2"><span className="text-primary font-bold">•</span> {b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {post.faqs && post.faqs.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Perguntas frequentes</h2>
                <div className="space-y-5">
                  {post.faqs.map((f) => (
                    <div key={f.q}>
                      <h3 className="font-bold text-foreground text-lg mb-1">{f.q}</h3>
                      <p className="text-foreground/90 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-primary text-primary-foreground rounded-xl p-8 mt-12 text-center">
            <p className="text-lg mb-6">{post.conclusao}</p>
            <Button asChild size="lg" className="bg-[#075E54] hover:bg-[#075E54]/90 text-white text-lg font-bold px-8 py-6 rounded-xl">
              <Link to={whatsapp}>
                <WhatsAppIcon className="w-6 h-6 mr-2" /> Falar no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {outros.length > 0 && (
        <section className="section-py bg-muted/40">
          <div className="container px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Continue lendo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outros.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-background border border-border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
                  <h3 className="font-bold text-foreground mb-2">{p.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{p.resumo}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <OutrosServicosBlock bg="background" />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;