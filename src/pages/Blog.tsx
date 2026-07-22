import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import OutrosServicosBlock from "@/components/OutrosServicosBlock";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { blogPosts } from "@/data/blogPosts";

const BASE_URL = "https://grupo-ampla-site.lovable.app";

const Blog = () => {
 const canonical = `${BASE_URL}/blog`;
 return (
 <div className="min-h-screen">
 <Helmet>
 <title>Blog Ampla | Dedetização e Desentupimento em Curitiba</title>
 <meta name="description" content="Guias, preços e dicas sobre dedetização, descupinização e desentupimento em Curitiba e região. Conteúdo do Grupo Ampla." />
 <link rel="canonical" href={canonical} />
 <meta property="og:title" content="Blog Ampla, Dedetização e Desentupimento" />
 <meta property="og:url" content={canonical} />
 </Helmet>

 <Header />

 <section className="pt-32 md:pt-40 pb-12 bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80">
 <div className="container px-4 max-w-4xl">
 <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">Blog Ampla</h1>
 <p className="text-lg text-primary-foreground/90">
 Guias práticos sobre controle de pragas, descupinização e desentupimento em Curitiba.
 </p>
 </div>
 </section>

 <section className="py-16 md:py-20 bg-background">
 <div className="container px-4 max-w-5xl">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {blogPosts.map((p) => (
 <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-muted/40 border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all block">
 <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
 <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{p.categoria}</span>
 <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {p.leitura}</span>
 </div>
 <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug">{p.titulo}</h2>
 <p className="text-muted-foreground mb-4">{p.resumo}</p>
 <span className="inline-flex items-center gap-2 text-primary font-semibold">Ler artigo <ArrowRight className="w-4 h-4" /></span>
 </Link>
 ))}
 </div>
 </div>
 </section>

 <OutrosServicosBlock bg="background" />
 <FooterSection />
 <WhatsAppFloat />
 </div>
 );
};

export default Blog;