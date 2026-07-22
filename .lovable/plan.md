## Objetivo
Aplicar lazy loading e fade-in suave em todas as imagens do site, exceto o logo do Header e Footer.

## Abordagem

### 1. Componente reutilizável `LazyImage`
Criar `src/components/LazyImage.tsx`:
- Wrapper em `<img>` nativo com `loading="lazy"` e `decoding="async"`.
- Prop `eager` para casos onde precisamos `loading="eager"` + `fetchpriority="high"` (LCP das heros principais).
- Fade-in via `onLoad`: começa com `opacity-0`, ao carregar aplica `opacity-100` com `transition-opacity duration-500 ease-out`. Se `complete` já for true no mount (cache), inicia visível.
- Suporta todas as props padrão de `<img>` (className, sizes, width, height, etc.).

### 2. Fundos de hero (`HeroBackground`, `PragaHero`)
Hoje os fundos usam `background-image` em `div`, que não aceita `loading="lazy"`. Ajuste:
- Substituir a `div` de fundo por um `<img>` absoluto (`absolute inset-0 w-full h-full object-cover object-right`) usando `LazyImage` com `eager` (é elemento de hero, above the fold).
- Manter a máscara em gradiente aplicando `maskImage`/`WebkitMaskImage` no próprio `<img>`.
- Overlays de cor continuam como `div`.

### 3. Substituição site-wide
Trocar `<img>` por `<LazyImage>` em:
- `HeroSection`, `DesHeroSection` (foto do técnico), com `eager` (LCP).
- Cards e blocos: `PestsSection`, `PragasCarouselStrip`, `SegmentosSection`, `SegmentosDesSection`, `ServicesSection`, `TestimonialsSection`/`TestimonialsModule`, `BlogHighlightSection`, `Blog.tsx`, `BlogPost.tsx`, `DifferentialsSection`, `AnosBadge` (se usar img), páginas `PragaPage`, `BairroPage`, `CidadePage`, `ServicoEspecialPage`, `ServicoDesentupimentoPage`, `DedetizacaoComercial`, `DedetizadoraPertoDeMim`, `Emergencia24h`.
- Todas com lazy por padrão; fade-in em todas.

### 4. Exceções
- `Header.tsx` e `FooterSection.tsx` mantêm `<img>` do logo como está (sem lazy, sem fade), para não piscar em nenhuma navegação.

### 5. Otimização adicional
- Adicionar `decoding="async"` em todas.
- Adicionar `width` e `height` (ou aspect-ratio via className) onde faltar, para evitar CLS durante o fade.
- Nas heros com `eager`, manter/garantir o `<link rel="preload">` já existente no `index.html` quando aplicável.

## Fora de escopo
- Não alterar formatos (já são WebP).
- Não mexer no logo.
- Sem mudanças de layout, cores ou conteúdo.
