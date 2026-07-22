
# Oportunidades de palavras-chave — Ampla (mercado BR)

Baseado em pesquisa Semrush para Curitiba e região. Foquei em palavras com **volume real + baixa dificuldade (KDI < 30)**, que são as vitórias mais rápidas para um site novo/em crescimento.

## O que já temos

- `/` — Dedetização Curitiba (home)
- `/desentupidora` — Desentupidora Curitiba
- `/servicos/dedetizacao-comercial` — MIP para empresas

## Recomendação: 4 clusters de páginas novas

### Cluster 1 — Páginas por praga (dedetização) — PRIORIDADE ALTA

Rota sugerida: `/dedetizacao/{praga}`. Alto volume, KDI baixíssimo (6–13). Cada página: sintomas, riscos, método de tratamento, garantia, FAQ, CTA WhatsApp.

| Página | Keyword principal | Volume/mês | KDI |
|---|---|---|---|
| Dedetização de baratas em Curitiba | dedetização de baratas | 1.000 | 12 |
| Dedetização de ratos / desratização | dedetização de ratos + desratização | 1.000 + 4.400 | 9–12 |
| Descupinização em Curitiba | descupinização + dedetização de cupim | 4.400 + 880 | 9–13 |
| Dedetização de escorpião | dedetização de escorpião | 210 | 6 |
| Dedetização de pulgas e carrapatos | dedetização de pulgas | 140 | 7 |
| Dedetização de formigas | dedetização de formigas | 260 | 7 |
| Dedetização de percevejo | dedetização de percevejo | 40 | 0 |

### Cluster 2 — Páginas por serviço de desentupimento — PRIORIDADE ALTA

Rota sugerida: `/desentupidora/{servico}`. Volume forte e intent altíssimo (CPC R$2–4).

| Página | Keyword principal | Volume/mês | KDI |
|---|---|---|---|
| Desentupimento de esgoto | desentupimento de esgoto | 2.400 | 12 |
| Desentupimento de pia e cozinha | desentupimento de pia | 1.900 | 25 |
| Desentupimento de vaso sanitário | desentupimento de vaso sanitário | 590 | 19 |
| Desentupimento de ralo | desentupimento de ralo | 320 | 15 |
| Hidrojateamento | hidrojateamento | 2.400 | 18 |
| Limpa-fossa Curitiba | limpa fossa curitiba | 170 | 10 |
| Caça vazamento | caça vazamento | 12.100 | 25 |
| Limpeza de caixa d'água | limpeza de caixa d'água | 4.400 | 31 |

### Cluster 3 — Páginas por bairro/cidade — PRIORIDADE MÉDIA

Rota sugerida: `/desentupidora/{cidade-ou-bairro}` e `/dedetizacao/{cidade}`. KDI 0–18. Padrão de "SEO local" — cada página com endereço/mapa, prova social local, CTA.

Desentupidora (maior demanda):
- Pinhais (480/mês, KDI 18)
- São José dos Pinhais (260/mês, KDI 9)
- Colombo (210/mês, KDI 7)
- Araucária (210/mês, KDI 8)
- Boqueirão (170/mês, KDI 7)
- CIC, Batel, Portão (menor volume, KDI 0 — fáceis)

Dedetização por cidade (Colombo/Pinhais/SJP): volume 20–70/mês, mas KDI 0 e alinhado à sede em Colombo.

### Cluster 4 — Conteúdo informativo / "quanto custa" — PRIORIDADE MÉDIA

Rota sugerida: `/blog/{slug}` ou `/guia/{slug}`. Captura intent de pesquisa (topo de funil) e alimenta autoridade do domínio.

| Página | Keyword | Volume/mês | KDI |
|---|---|---|---|
| Quanto custa uma dedetização | quanto custa dedetização | 480 | 7 |
| Como acabar com baratas em casa | como acabar com baratas | 1.600 | 29 |
| Como acabar com ratos em casa | como acabar com ratos | 880 | 14 |
| Como acabar com escorpião | como acabar com escorpião | 1.000 | 16 |
| O que é controle de pragas urbanas | pragas urbanas / controle de pragas | 590 + 3.600 | 24 |

## Ordem sugerida de execução

1. **Fase 1 — Cluster 1 (pragas)**: 7 páginas. Maior conversão e mais fácil ranquear.
2. **Fase 2 — Cluster 2 (serviços desentupidora)**: 6–8 páginas. Ticket alto (CPC R$2–4 indica intent comercial forte).
3. **Fase 3 — Cluster 3 (bairros)**: começar pelos 4 municípios (Pinhais, SJP, Colombo, Araucária) e expandir para bairros de Curitiba.
4. **Fase 4 — Cluster 4 (blog/guias)**: alimenta autoridade e captura topo de funil.

## Detalhes técnicos

- Cada página nova entra em `src/pages/`, com rota em `App.tsx`, entrada em `public/sitemap.xml` e link em `public/llms.txt`.
- Metadata por rota via `react-helmet-async` (já instalado): título único, description, canonical, og:*, JSON-LD `Service` + `FAQPage`.
- Reutilizar componentes existentes (`Header`, `FooterSection`, `WhatsAppFloat`, `UrgencyBar`, cards).
- Interlinking: home lista as páginas de praga; página `/desentupidora` lista os serviços; páginas de bairro linkam para os serviços correspondentes.
- Padrão de conteúdo por página: H1 com keyword, intro (2 parágrafos), seção de sinais/problema, método de tratamento, garantia, FAQ (3–5 perguntas), CTA WhatsApp.

## O que preciso de você antes de codar

- **Escopo da fase 1**: implemento as 7 páginas de praga do Cluster 1 de uma vez, ou prefere começar por 2–3 (baratas, ratos, cupim) e avaliar?
- **Blog**: quer que eu já monte a estrutura `/blog` com listagem, ou os guias do Cluster 4 podem ficar como páginas soltas por enquanto?
