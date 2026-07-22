
# Expansão de conteúdo SEO, Ampla, com foco em conversão

Fonte: Semrush (base BR). Domínio novo ainda sem histórico, então analisei o nicho. Cada peça terá **CTA direto pra Ampla** (WhatsApp + link pras páginas de serviço/bairro), puxando o tráfego educacional pra conversão local em Curitiba/RMC.

## Bloco 1, Blog "como resolver" (9 posts, KD baixo)

Cada post: intro, sintomas, o que dá pra fazer sozinho (honesto), quando não resolve mais e vira caso pra profissional, CTA forte pra Ampla em Curitiba, FAQ curto.

| Post | KW principal | Volume | KD |
|---|---|---|---|
| Como acabar com baratas em casa (guia definitivo) | como acabar com baratas | 1.600 (+3.600 var) | 29 |
| Como matar cupim de madeira: 7 métodos | como matar cupim | 2.400 (+1.600 var) | 16 |
| Como acabar com ratos em casa e no quintal | como acabar com ratos | 880 (+3.600 var) | 14 |
| Como acabar com formigas na cozinha e nas plantas | como acabar com formigas | 2.400 (+4.400 var) | 30 |
| Como espantar pombos do telhado: o que funciona | como espantar pombos | 3.600 (+1.900 var) | 22 |
| Como acabar com percevejo de cama de vez | percevejo de cama | 22.200 | 23 |
| Escorpião amarelo: como identificar e o que fazer | escorpião amarelo | 22.200 | 28 |
| Como desentupir vaso sanitário (e quando chamar) | como desentupir vaso sanitário | 33.100 | 26 |
| Como limpar caixa d'água passo a passo | limpeza de caixa d'água | 4.400 | 23 |

## Bloco 2, Serviços verticais B2B (6 páginas)

Novas páginas em `/servicos/*` seguindo o padrão de `ServicoEspecialPage`. Foco em conformidade sanitária, laudo, MIP e ANVISA.

- /servicos/dedetizacao-restaurantes
- /servicos/dedetizacao-supermercados
- /servicos/dedetizacao-industrias
- /servicos/dedetizacao-escolas
- /servicos/dedetizacao-hospitais-clinicas
- /servicos/dedetizacao-hoteis

## Bloco 3, Novos bairros e cidades

**Bairros de Curitiba (10)**: Ecoville, Alto da XV, Cristo Rei, Juvevê, Champagnat, Mercês, Rebouças, Cabral, Hauer, Xaxim.

**Cidades RMC (5)**: Contenda, Balsa Nova, Mandirituba, Tijucas do Sul, Agudos do Sul.

## Detalhes técnicos

- Novas entradas em `src/data/blogPosts.ts`, `src/data/servicosEspeciais.ts`, `src/data/bairros.ts`, `src/data/cidades.ts`. As páginas dinâmicas (`BlogPost.tsx`, `ServicoEspecialPage.tsx`, `BairroPage.tsx`, `CidadePage.tsx`) já existem e renderizam automaticamente.
- Atualizar `public/sitemap.xml` (append de todas as novas URLs).
- Atualizar `public/llms.txt` com as novas rotas.
- Header não itera sobre esses dados, então não polui o menu.
- Interlinking: cada blog referencia 2, 3 páginas de serviço/bairro no CTA final.

Aprova pra eu subir tudo?
