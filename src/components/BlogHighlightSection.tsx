import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogHighlightSection = () => {
 const posts = [...blogPosts]
  .sort((a, b) => (b.publicadoEm > a.publicadoEm ? 1 : -1))
  .slice(0, 3);

 return (
  <section className="section-py bg-surface-muted">
   <div className="container px-4 max-w-6xl">
    <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
     <div className="max-w-2xl">
      <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
       Notícias e conteúdo
      </span>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-[1.05] text-balance">
       Guias do blog da Ampla<span className="text-accent">.</span>
      </h2>
     </div>
     <Link to="/blog" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
      Ver todos os posts <ArrowRight className="w-4 h-4" />
     </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
     {posts.map((p) => (
      <Link
       key={p.slug}
       to={`/blog/${p.slug}`}
       className="bg-surface border border-border rounded-2xl p-6 hover:border-primary hover:shadow-elegant transition-all flex flex-col group"
      >
       <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
        {p.categoria}
       </span>
       <h3 className="font-display text-lg font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
        {p.titulo}
       </h3>
       <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
        {p.resumo}
       </p>
       <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
        <span className="inline-flex items-center gap-1.5">
         <Calendar className="w-3.5 h-3.5" /> {p.leitura}
        </span>
        <span className="inline-flex items-center gap-1 text-primary font-semibold">
         Ler <ArrowRight className="w-3.5 h-3.5" />
        </span>
       </div>
      </Link>
     ))}
    </div>
   </div>
  </section>
 );
};

export default BlogHighlightSection;