# Elementos da Heloin Dedetizadora que podemos adaptar

Analisei a home da Heloin. Listo abaixo tudo que ajuda em conversão, marcando o que já temos, o que dá pra reforçar e o que é novo. No fim, o plano de implementação.

## 1. Elementos identificados na Heloin

**Prova social e autoridade**
- Selo "Celebramos 20 anos" no canto do hero (nós temos 35, subutilizado visualmente)
- Bloco de estatísticas: % de avaliações positivas, +chamados atendidos, +clientes satisfeitos
- Carrossel de avaliações do Google com nome, data e nota (147 reviews visíveis)
- Botão "Escreva sua avaliação" ligado ao place-id do Google

**Serviços e cobertura**
- Grid de serviços com ícone circular colorido + descrição curta + link "mais detalhes"
- Serviços que eles têm e nós não destacamos: Sanitização, Limpeza de Telhado, Limpeza de Calha, Limpeza de Sótão, Laudo Bacteriológico
- Seção "Área de Atuação" por segmento (Residências, Condomínios, Hotéis, Supermercados, Restaurantes, Hospitais, Empresas, Escolas) com ícone + texto

**Educação e SEO**
- Faixa "Conheça a biologia das pragas" com carrossel infinito de ícones de pragas linkando para página única
- Bloco de FAQ extenso (7 perguntas) com CTA de WhatsApp no meio
- Seção "Notícias" (blog cards) no fim da home

**CTA e contato**
- Botão "Solicite agora" verde WhatsApp fixo no hero
- Ícones sociais no header (Facebook, Instagram, WhatsApp, YouTube)
- Reforço de CTA WhatsApp entre seções pesadas

## 2. Comparativo com o que já temos

| Elemento | Ampla hoje | Ação |
| --- | --- | --- |
| Hero + CTA WhatsApp | Sim | Manter |
| Botão flutuante WhatsApp | Sim | Manter |
| Grid de serviços | Sim | Adicionar 5 serviços novos |
| Segmentos de atuação (B2B) | Parcial (páginas /servicos/*) | Criar bloco visual na home |
| Pragas com biologia | Parcial (/dedetizacao/:praga) | Criar faixa carrossel de ícones na home |
| Estatísticas numéricas | Não | Adicionar |
| Reviews reais do Google | Depoimentos manuais | Puxar reviews reais |
| Selo aniversário (35 anos) | Fraco | Reforçar visual |
| FAQ na home | Não (só em páginas internas) | Adicionar bloco FAQ |
| Notícias / blog na home | Não | Adicionar 3 cards do blog |
| YouTube no header | Não | Avaliar (só se tiver canal) |

## 3. Plano de implementação

Todas as adições ficam na **home** (`src/pages/Index.tsx`) e nas **landing pages de anúncios** (`PragaPage`, `BairroPage`, `ServicoEspecialPage`) para reforçar conversão.

**Novos componentes**
1. `StatsSection.tsx`: 4 números (35 anos, +10 mil clientes, 98% satisfação, 24h atendimento) com ícones e contador animado ao entrar na viewport.
2. `PragasCarouselStrip.tsx`: faixa horizontal com scroll infinito de ícones das pragas (barata, rato, cupim, escorpião, formiga, pombo, aranha, mosquito), cada um linkando para `/dedetizacao/:praga`.
3. `SegmentosSection.tsx`: grid de 8 segmentos B2B (Residências, Condomínios, Hotéis, Restaurantes, Supermercados, Hospitais, Escolas, Empresas) com ícone Lucide + título + descrição curta + link para a página do serviço correspondente.
4. `FAQHomeSection.tsx`: 7 perguntas frequentes em accordion (baseadas nas nossas páginas atuais + as da Heloin adaptadas), com CTA WhatsApp no meio, gerando FAQPage schema.
5. `BlogHighlightSection.tsx`: 3 cards dos posts mais recentes de `blogPosts.ts` com imagem, título, resumo e link.
6. `AnosBadge.tsx`: selo visual "35 ANOS" estilo fita/medalha para colocar no canto do hero da home (`HeroSection.tsx`).

**Novos serviços a incluir no grid + criar página**
- `sanitizacao` (Sanitização de ambientes)
- `limpeza-de-telhado`
- `limpeza-de-calha`
- `limpeza-de-sotao`
- `laudo-bacteriologico` (complementa Limpeza de Caixa d'Água)

Cada um vira entrada em `src/data/servicosEspeciais.ts` (segue o padrão que já existe) e ganha rota via `/servicos/:slug` (já dinâmica). Sitemap e llms.txt atualizados.

**Depoimentos reais do Google**
Duas opções:
- (A) Manter estático mas atualizar `TestimonialsSection.tsx` com nomes/textos reais copiados do perfil do Google da Ampla (rápido, sem código novo).
- (B) Integrar widget de reviews (Trustindex, Elfsight ou Google Places API) para puxar reviews reais dinamicamente (mais completo, precisa de chave / script externo).

Vou seguir com (A) por default, a menos que você prefira (B).

**Ordem da home após as mudanças**
```text
Hero (com selo 35 anos)
UrgencyBar
StatsSection            NOVO
ServicesSection         (+5 serviços)
PragasCarouselStrip     NOVO
PestsSection
SegmentosSection        NOVO
DifferentialsSection
TestimonialsSection     (atualizado)
BlogHighlightSection    NOVO
FAQHomeSection          NOVO
ContactSection
FooterSection
```

**Reaproveitamento nas LPs de anúncio**
- `PragaPage`, `BairroPage`, `ServicoEspecialPage`: incluir `StatsSection`, `FAQHomeSection` (quando não tiver FAQ próprio) e `BlogHighlightSection` para engrossar o conteúdo e melhorar Ad Quality do Google Ads.

**Atualizações complementares**
- `public/sitemap.xml` e `public/llms.txt`: adicionar os 5 novos serviços.
- Schema.org: `FAQPage` para o FAQ da home, `AggregateRating` só se usarmos reviews reais (nunca inventar).
- Sem alteração no header/footer além de checar link do YouTube (se tiver canal, adicionar; se não, ignorar).

## 4. Fora do escopo
- Widget dinâmico de Google Reviews (a menos que você peça).
- Adicionar canal do YouTube (a menos que exista).
- Mexer no design system atual (cores/tipografia).

Confirma este escopo (com opção A de depoimentos) que eu implemento?
