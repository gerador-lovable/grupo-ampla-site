# Hero de pragas com imagem de fundo + Desentupidora replicando a home

## 1. Páginas de pragas: hero com imagem de fundo da praga

**Objetivo:** Cada `/dedetizacao/:praga` mostra uma imagem grande da praga correspondente no hero, aparecendo mais forte na segunda coluna (direita), sem prejudicar a leitura do texto na esquerda.

**Imagens por slug (geradas fotográficas, alta qualidade):**
| Slug | Imagem |
|---|---|
| baratas | barata sobre superfície escura, macro |
| ratos | rato preto em ambiente urbano sombrio |
| cupim | close de cupins em madeira apodrecida |
| escorpiao | escorpião amarelo sobre pedra escura |
| pulgas-e-carrapatos | carrapato macro sobre pele/pelo escuro |
| formigas | formigas em trilha sobre superfície escura |
| percevejo | percevejo de cama macro em tecido escuro |

Geradas em `src/assets/pragas-hero/<slug>.webp` (1600×1000, tom escuro para bater com o gradient azul do hero).

**Alterações em `src/components/PragaHero.tsx` (novo componente, extrai o `<section>` atual do `PragaPage.tsx`):**

- Recebe `praga` como prop e mapeia `slug → imagem` via `import.meta.glob` estático.
- Estrutura de camadas dentro do `<section>` existente (mantém padding e gradient azul):
  ```
  ┌──────────────────────────────────────────────────────┐
  │ gradient azul (base)                                 │
  │                                                      │
  │   [coluna esquerda: texto/CTA]   [imagem da praga]   │
  │                                  posição: right,     │
  │                                  50% da largura no md │
  │                                                      │
  │ overlay: gradient horizontal                         │
  │  from-primary via-primary/85 to-primary/20 (right)   │
  └──────────────────────────────────────────────────────┘
  ```
- CSS:
  - Wrapper da imagem: `absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[55%]`, `bg-cover bg-center` com `mask-image: linear-gradient(to right, transparent, black 30%)` para fundir com o gradient azul da esquerda.
  - Overlay: `absolute inset-0 bg-gradient-to-r from-primary via-primary/90 md:via-primary/70 to-primary/10` — garante contraste do texto no mobile (onde a imagem vai atrás de todo o conteúdo) e libera a imagem à direita no desktop.
  - Conteúdo (`Breadcrumbs`, `<h1>`, CTAs) fica em `relative z-10` dentro de `max-w-3xl` como já está.
- No mobile: overlay mais forte (`md:via-primary/70` → mobile fica quase sólido), imagem some visualmente atrás do texto mas mantém sensação de "esta é a praga X".
- Fallback: quando `slug` não tem imagem no map, o hero volta ao design atual (apenas gradient).

**`PragaPage.tsx`:** substitui o `<section>` hero pelo `<PragaHero praga={praga} whatsapp={whatsapp} />`. Resto da página não muda.

## 2. Página Desentupidora: hero idêntico ao da home + blocos da home adaptados

**Hero (`src/components/desentupidora/DesHeroSection.tsx`):**
Já é praticamente idêntico ao `HeroSection.tsx`. Ajustes para paridade total:
- Adicionar `<AnosBadge />` no topo da section.
- Igualar tipografia do h1 ao da home: `text-[28px] sm:text-[46px] lg:text-[44px] xl:text-[54px]` em três linhas com `whitespace-nowrap`:
  ```
  Pia, ralo ou esgoto
  entupido?
  Chegamos em 1h.  ← accent + underline
  ```
- Padding-bottom da coluna esquerda `pb-10 md:pb-0` (bug da home já corrigido, replicar).
- Mantém `heroTechnician` de `assets/desentupidora-hero.webp` e o mesmo bloco absoluto/gradient/glow.

**Blocos da home replicados na página `/desentupidora`** (`src/pages/Desentupidora.tsx`), adaptados para desentupimento:
1. `StatsSection` (reutiliza componente existente, mesmos números).
2. `DesServicesSection` (já existe, mantém).
3. `DesProblemsSection` (já existe, mantém).
4. Novo `SegmentosDesSection` (residências, condomínios, restaurantes, indústrias, postos, hospitais) — arquivo `src/components/desentupidora/SegmentosDesSection.tsx`, mesma estrutura visual do `SegmentosSection` da home.
5. `DesDifferentialsSection` + `DesTestimonialsSection` + `DesGuaranteeSection` (mantém).
6. `BlogHighlightSection` (reutiliza, já filtra últimos posts).
7. `DesFAQSection` (mantém) — bloco WhatsApp verde no meio, no mesmo padrão do `FAQHomeSection` da home. Ajuste dentro do próprio `DesFAQSection.tsx`.
8. `DesContactSection` (mantém).

Ordem final na página:
```
Header → DesHero → UrgencyBar → StatsSection → DesServices → DesProblems
→ SegmentosDesSection → DesDifferentials → DesTestimonials → DesGuarantee
→ BlogHighlightSection → DesFAQSection (com CTA WhatsApp no meio) → DesContactSection → Footer
```

## 3. Detalhes técnicos

- Geração de imagens via `imagegen--generate_image` com tom escuro/dramático, dimensões 1600×1000, salvas em `src/assets/pragas-hero/`.
- Map de slug→imagem em `src/data/pragas-hero-images.ts` para import estático (evita bundler dinâmico).
- Nenhuma alteração em SEO/sitemap.
- Sem breaking changes na `interface Praga` (imagem fica fora do data).

## 4. Arquivos afetados
- **Criados:** 7 imagens em `src/assets/pragas-hero/`, `src/data/pragas-hero-images.ts`, `src/components/PragaHero.tsx`, `src/components/desentupidora/SegmentosDesSection.tsx`.
- **Editados:** `src/pages/PragaPage.tsx`, `src/components/desentupidora/DesHeroSection.tsx`, `src/pages/Desentupidora.tsx`, `src/components/desentupidora/DesFAQSection.tsx`.
