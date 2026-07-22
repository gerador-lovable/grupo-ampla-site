import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Se true, carrega imediatamente (usar em imagens acima da dobra / LCP). */
  eager?: boolean;
}

/**
 * <img> com lazy loading nativo e fade-in suave ao carregar.
 * Usa `loading="lazy"` por padrão e `loading="eager"` + `fetchpriority="high"`
 * quando `eager` está ativo (para imagens de hero / LCP).
 */
const LazyImage = ({ eager, className, onLoad, ...rest }: LazyImageProps) => {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Caso a imagem já esteja em cache, o onLoad pode não disparar.
    if (ref.current?.complete && ref.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <img
      ref={ref}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      {...(eager ? { fetchPriority: "high" as const } : {})}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={cn(
        "transition-opacity duration-700 ease-out",
        loaded ? "opacity-100" : "opacity-0",
        className,
      )}
      {...rest}
    />
  );
};

export default LazyImage;