interface Props {
  src: string;
  alt?: string;
  /** "blue" (padrão) usa overlay azul-marinho; "red" usa overlay vinho para emergência. */
  tone?: "blue" | "red";
}

/**
 * Fundo de hero reutilizável, no mesmo padrão do PragaHero:
 * imagem à direita, máscara em gradiente para a esquerda e
 * overlay azul para leitura confortável do texto.
 *
 * Deve ser colocado como primeiro filho de uma <section> com
 * `relative overflow-hidden` e o conteúdo dentro precisa ter `relative z-10`.
 */
const HeroBackground = ({ src, alt = "", tone = "blue" }: Props) => {
  const overlayColor = tone === "red" ? "#4a0a0a" : "#0a1a4a";
  return (
    <>
      <div
        aria-hidden={alt ? undefined : true}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        className="absolute inset-0 pointer-events-none animate-fade-in"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          maskImage:
            "linear-gradient(to right, transparent 0%, transparent 25%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.85) 70%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, transparent 25%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.85) 70%, black 100%)",
          opacity: 0.9,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-r to-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${overlayColor}, ${overlayColor}E6 40%, transparent)`,
        }}
      />
      <div
        aria-hidden
        className="md:hidden absolute inset-0 pointer-events-none"
        style={{ backgroundColor: `${overlayColor}B3` }}
      />
    </>
  );
};

export default HeroBackground;