# Otimização e lazy loading de imagens

## Objetivo
Reduzir peso inicial das páginas carregando imagens sob demanda e servindo dimensões/formatos otimizados, sem alterar o visual.

## O que será feito

### 1. Lazy loading nativo em todas as `<img>`
Adicionar `loading="lazy"` e `decoding="async"` em imagens que **não** são LCP (todas as `<img>` fora do hero da home/desentupidora):
- `ServicesSection`, `PestsSection`, `DesProblemsSection`, `DesTestimonialsSection`, `FooterSection`, `Header` (logo fica `eager` pois aparece no topo).

Para os heros LCP (`HeroSection`, `DesHeroSection`) manter `loading="eager"` + `fetchpriority="high"`.

### 2. Lazy loading nos fundos de hero (`HeroBackground` + `PragaHero`)
Hoje o fundo é `background-image` via `style` inline, o browser baixa junto com o CSS e não respeita `loading="lazy"`. Trocar por um `<img>` real posicionado com `absolute inset-0 object-cover` + máscara/overlay por cima:
- `loading="lazy"`, `decoding="async"`, `fetchpriority="low"`.
- Mantém exatamente o mesmo gradient mask e overlay azul/vermelho atual.
- Nas páginas de praga e serviços, o hero não é LCP crítico (usuário chega por rota específica, mas a imagem é secundária ao texto), então lazy é seguro; se quiser priorizar, marco só a primeira dobra como `eager` em `PragaHero`.

### 3. Reencode / redimensionar as WebP existentes
Rodar `sharp` uma vez para reprocessar `src/assets/heros/*.webp` e `src/assets/pragas-hero/*.webp`:
- Redimensionar para no máximo 1280px de largura (hoje algumas estão maiores que o necessário).
- `quality: 72`, `effort: 6`.
- Estimativa: ~40‑50% de redução (de ~1.7MB para ~900KB no conjunto).

### 4. Preload correto do LCP
Revisar `index.html`: manter preload só da imagem do técnico da home (LCP real). Remover preloads de imagens que não aparecem na primeira dobra, se houver.

### 5. Sem mudanças de layout nem de design
Nenhum componente muda visualmente. Só carregamento e peso.

## Fora do escopo
- Não vou adicionar `vite-imagetools` nem gerar AVIF automaticamente (custo/benefício baixo pro tamanho atual).
- Não vou mexer na lógica de rotas nem no `React.lazy` já existente.

## Detalhes técnicos
- `HeroBackground.tsx` passa a renderizar:
  ```tsx
  <img src={src} alt={alt} loading="lazy" decoding="async"
       className="absolute inset-0 w-full h-full object-cover object-right"
       style={{ maskImage: ..., WebkitMaskImage: ..., opacity: .9 }} />
  ```
  seguido dos dois overlays atuais.
- `PragaHero` recebe o mesmo tratamento.
- Script one-shot com `sharp` reprocessa in-place os `.webp` (backup rápido antes).
