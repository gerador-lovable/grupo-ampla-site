interface Props {
  src: string;
  alt?: string;
}

/**
 * Fundo de hero reutilizável, no mesmo padrão do PragaHero:
 * imagem à direita, máscara em gradiente para a esquerda e
 * overlay azul para leitura confortável do texto.
 *
 * Deve ser colocado como primeiro filho de uma <section> com
 * `relative overflow-hidden` e o conteúdo dentro precisa ter `relative z-10`.
 */
const HeroBackground = ({ src, alt = "" }: Props) => {
  return (
    <>
      <div
        aria-hidden={alt ? undefined : true}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        className="absolute inset-0 pointer-events-none"
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
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0a1a4a] via-[#0a1a4a]/90 md:via-[#0a1a4a]/70 to-transparent"
      />
      <div
        aria-hidden
        className="md:hidden absolute inset-0 pointer-events-none bg-[#0a1a4a]/70"
      />
    </>
  );
};

export default HeroBackground;