import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildRedirectUrl } from "@/lib/whatsapp";
import { findPost, blogPosts } from "@/data/blogPosts";

const BASE_URL = "https://grupo-ampla-site.lovable.app";

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
    author: { "@type": "Organization", name: "Ampla Dedetizadora" },
    publisher: { "@type": "Organization", name: "Grupo Ampla" },
    mainEntityOfPage: canonical,
  };

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
      </Helmet>

      <Header />

      <article className="pt-32 md:pt-40 pb-16 bg-background">
        <div className="container px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Voltar ao blog
          </Link>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{post.categoria}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {post.leitura}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">{post.titulo}</h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{post.resumo}</p>

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
        <section className="py-16 bg-muted/40">
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

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;