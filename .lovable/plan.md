
## Diagnóstico da estrutura atual

Revisei `PragaPage`, `BairroPage`, `ServicoEspecialPage`, `BlogPost` e `index.html`. A base é sólida (Helmet per-page, FAQPage/Service/Article schema, canonical correto, H1 único, testimonials segmentados, internal linking entre pragas/bairros/serviços). Faltam 6 pontos que hoje travam o ranqueamento:

1. Nenhuma página tem **BreadcrumbList schema** nem breadcrumb visível → Google não gera rich snippet de trilha.
2. `PragaPage` e `ServicoEspecialPage` **não têm bloco de "Preço / Quanto custa"** → perde toda busca BOFU com modificador comercial ("preço", "quanto custa", "valor").
3. Blog posts têm formato Q&A mas **não emitem FAQPage schema** → perde chance de PAA (People Also Ask).
4. `Article` schema não tem `dateModified` → Google prefere conteúdo com sinal de frescor.
5. Nenhuma página gera **`og:image` dinâmico** (só o fallback do hosting).
6. Páginas de bairro não têm H2 combinando bairro + praga específica (perdem long-tail "dedetização barata + [bairro]", "rato + [bairro]").

## Palavras-chave BOFU não óbvias (Semrush BR)

Priorizadas por intenção comercial + baixa concorrência real:

**Volume médio, KD baixo (páginas dedicadas):**
- `dedetizadora perto de mim` — 1.300/mo, KD 12
- `desentupidora 24 horas` — 1.600/mo, KD 27
- `orçamento para esgoto vaso sanitário banheiro entupido` — 1.000/mo, competição 0

**Long-tail zero-KD (posts de blog, ganham rápido):**
- `esgoto voltando pelo ralo` — 40/mo, KD 0
- `rato no telhado o que fazer` — 70/mo, KD 0
- `quem pode emitir/assinar laudo de dedetização` — 40/mo, KD 0 (B2B)
- `preço dedetização apartamento` — 50/mo, KD 0
- `quanto tempo dura dedetização` — cluster de 4 variações, KD 0
- `precisa sair de casa depois da dedetização` — intenção altíssima
- `dedetização condomínio é obrigatória` — B2B síndicos
- `cupim apareceu do nada` — pânico, converte
- `dedetizadora aceita pix / com nota fiscal` — fricção de compra

## O que vamos construir

### Bloco 1 — Correções estruturais nas páginas existentes

Aplicar em `PragaPage`, `BairroPage`, `ServicoEspecialPage`, `BlogPost`:

- **Novo componente `Breadcrumbs.tsx`**: renderiza a trilha visível (Home › Categoria › Página) + injeta `BreadcrumbList` schema no Helmet.
- **Novo componente `PrecoBlock.tsx`**: seção "Quanto custa" com H2 do tipo `Preço da dedetização de [praga] em Curitiba` + tabela de faixas (residencial pequeno/médio/grande, comercial) + CTA. Adicionado em `PragaPage` e `ServicoEspecialPage`.
- **`BairroPage`**: novo H2 dinâmico `Dedetização barata no [bairro] com nota fiscal` + parágrafo mencionando as 3 pragas mais buscadas + link para cada `/dedetizacao/[praga]`. Captura long-tail "praga + bairro".
- **`BlogPost`**: emitir `FAQPage` schema quando o post tiver seção de perguntas; adicionar `dateModified` no `Article` schema.
- **`index.html`**: garantir og:image default apontando para logo (absoluto).

### Bloco 2 — 3 páginas BOFU novas de alto volume

Adicionar rotas em `src/App.tsx` e entradas no sitemap:

1. **`/emergencia-24h`** — página curta, ultra-BOFU, para `desentupidora 24 horas` + `dedetizadora 24h curitiba`. Hero vermelho urgência, tempo médio 2h, telefone gigante, sem seções educacionais.
2. **`/dedetizadora-perto-de-mim`** — otimizada para "dedetizadora perto de mim curitiba" com LocalBusiness schema reforçado, mapa de área de atendimento (lista de bairros com links) e prova social geolocalizada.
3. **`/precos`** — hub com tabela comparativa por serviço (dedetização, desentupimento, caixa d'água, controle roedores) e por porte (residencial/comercial/condomínio). Cross-linka para todas as páginas de serviço e captura o cluster "preço/quanto custa/valor".

### Bloco 3 — 9 posts long-tail zero-KD

Novos entries em `src/data/blogPosts.ts` (mesmo template atual, cada um puxa pro WhatsApp/serviço equivalente):

| Slug | Keyword-alvo |
|---|---|
| `esgoto-voltando-pelo-ralo-o-que-fazer` | esgoto voltando pelo ralo |
| `rato-no-telhado-como-eliminar` | rato no telhado o que fazer |
| `quanto-tempo-dura-uma-dedetizacao` | quanto tempo dura dedetização |
| `precisa-sair-de-casa-apos-dedetizacao` | precisa sair de casa depois da dedetização |
| `preco-dedetizacao-apartamento-curitiba` | preço dedetização apartamento |
| `cupim-apareceu-do-nada-o-que-fazer` | cupim apareceu do nada |
| `dedetizacao-em-condominio-e-obrigatoria` | dedetização em condomínio é obrigatória |
| `quem-pode-emitir-laudo-de-dedetizacao` | quem pode emitir laudo de dedetização (B2B) |
| `dedetizadora-com-nota-fiscal-e-certificado` | dedetizadora com nota fiscal |

### Bloco 4 — Atualização de sitemap, llms.txt e cross-linking

- `public/sitemap.xml`: +12 URLs (3 páginas BOFU + 9 posts) com `priority 0.8` e `changefreq monthly`.
- `public/llms.txt`: adicionar as novas URLs na seção correta.
- `OutrosServicosBlock`: incluir link para `/emergencia-24h` e `/precos`.
- Header: adicionar link "Emergência 24h" em destaque vermelho (mobile e desktop).

## Detalhes técnicos

- Breadcrumbs derivam a trilha do path atual usando `useLocation`; cada segmento vira label humanizado.
- `PrecoBlock` recebe props `servico` e `faixas: {label, preco}[]`, para reaproveitar em Praga/Serviço/Bairro.
- FAQPage schema no blog só é injetado se o post tiver `faqs?: {q,a}[]` no data — não quebra posts atuais.
- `dateModified` cai como `post.atualizadoEm ?? post.publicadoEm` (campo opcional, default = publicação).
- Todas as novas páginas seguem o padrão `HeroSection` azul + `UrgencyBar` + CTAs `#075E54` + `WhatsAppFloat` + `FooterSection`, sem novas dependências.
- Nenhuma mudança em Google Ads, tracking ou performance — só conteúdo + schema.

## Fora deste escopo (fica para depois se você quiser)

- SSR/pré-render (as metas de Helmet já são lidas por Googlebot; social crawlers têm o fallback do hosting).
- Geração de imagens únicas por post (usaríamos hero genérico por categoria).
- Google Business Profile e link-building externo.

Depois de implementado, disparo um rescan SEO e você pede reindexação no Search Console para acelerar o pickup dos 12 novos URLs.
