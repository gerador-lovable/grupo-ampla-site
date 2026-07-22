
# Otimização de peso do site

Estado atual: bundle JS 603KB, CSS 80KB, assets ~1.4MB (11 JPGs pesados). Todas as rotas carregam no bundle inicial (17 páginas) mesmo quando o usuário só visita `/`.

## 1. Code-splitting de rotas
Converter todos os imports em `src/App.tsx` para `React.lazy()` e envolver `<Routes>` em `<Suspense>` com fallback simples. Impacto esperado: reduzir o JS inicial de 603KB para ~200KB (só Home + shared).

## 2. Converter JPGs para WebP
Reprocessar os 11 arquivos JPG em `src/assets/` (services + pests + problems) para WebP com qualidade 80 usando `sharp` via script one-off no sandbox. Atualizar imports (`.jpg` para `.webp`). Redução esperada: ~60-70% no peso das imagens (de ~1MB para ~350KB).

Arquivos alvo:
- `service-*.jpg` (7 arquivos, 623KB total)
- `pests/*.jpg` (8 arquivos, 313KB)
- `problems/*.jpg` (6 arquivos, 199KB)
- `hero-bg.jpg` (108KB)

## 3. Lazy loading e prioridade LCP
- Adicionar `loading="lazy"` e `decoding="async"` em todas as `<img>` abaixo da dobra (serviços, pragas, testimonials, blog).
- Marcar as imagens hero (`hero-technician.webp` e `desentupidora-hero.webp`) com `fetchpriority="high"` e `loading="eager"`.
- Adicionar `<link rel="preload" as="image">` para a hero da home em `index.html`.

## 4. Migrar assets grandes para CDN
Rodar `lovable-assets create` nos WebPs resultantes (após conversão) que ainda ficarem >80KB. Isso remove do bundle e serve via CDN com cache agressivo. Manter em `src/assets` só ícones/logos pequenos.

## 5. Ajustes menores
- Remover `public/placeholder.svg` (28KB, não usado).
- Verificar se `favicon.ico` (20KB) pode virar 16x16+32x32 PNG menor.

## Detalhes técnicos

- Vite já faz tree-shaking; o ganho grande vem do `React.lazy` porque hoje `App.tsx` importa 17 páginas estaticamente.
- Conversão WebP: script Node com `sharp` rodando `.webp({ quality: 80 })` sobre cada JPG, depois `sed`/rewrite dos imports.
- `vite-imagetools` não é necessário aqui, os assets são estáticos e a conversão pode ser feita uma vez.
- Não alterar layout, copy nem funcionalidade, só peso e carregamento.

## Verificação final
Rodar `bun run build` e comparar tamanhos de `dist/assets/index-*.js` e das imagens antes/depois.
