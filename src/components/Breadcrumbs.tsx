import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Home } from "lucide-react";

const BASE_URL = "https://www.grupoampladedetiza.com.br";

export interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  items: Crumb[];
  tone?: "light" | "dark";
}

const Breadcrumbs = ({ items, tone = "light" }: Props) => {
  const full: Crumb[] = [{ label: "Início", to: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.to ? `${BASE_URL}${c.to}` : undefined,
    })),
  };

  const textColor = tone === "dark" ? "text-primary-foreground/80" : "text-muted-foreground";
  const linkColor = tone === "dark" ? "text-primary-foreground hover:text-accent" : "text-primary hover:underline";

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className={`text-xs md:text-sm ${textColor} mb-4`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {full.map((c, i) => {
            const isLast = i === full.length - 1;
            return (
              <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                {i === 0 && <Home className="w-3.5 h-3.5" aria-hidden />}
                {c.to && !isLast ? (
                  <Link to={c.to} className={`font-medium ${linkColor}`}>
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-semibold" aria-current={isLast ? "page" : undefined}>
                    {c.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;