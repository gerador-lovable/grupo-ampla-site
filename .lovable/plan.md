## Objetivo

Reescrever a copy do site aplicando **Problema → Agitação → Solução rápida com confiança**, seguindo os princípios da skill de copywriting: clareza sobre criatividade, específico sobre vago, linguagem do cliente, uma ideia por seção, verbos ativos, sem exclamações nem jargão de marketing vazio ("soluções completas", "excelência", "qualidade superior").

Escopo: **apenas texto** (headlines, subheads, bullets, CTAs, FAQ, meta tags). Não mexe em layout, cores, componentes nem lógica.

## Princípios aplicados a este negócio

- **Problema concreto**: barata na cozinha, esgoto voltando pela pia, rato no forro, cupim no rodapé — não "controle de pragas".
- **Agitação curta**: consequência real (contaminação, prejuízo, vergonha, risco à saúde), sem drama exagerado.
- **Solução com prova**: prazo específico ("em até 2h", "em 1 hora"), método ("hidrojateamento", "MIP ANVISA"), garantia ("6 meses"), 35 anos, +10 mil clientes, 4.8 Google.
- **CTA forte**: verbo + o que recebe. "Falar com técnico agora", "Pedir orçamento no WhatsApp", "Ligar para emergência 24h" — nunca "Saiba mais" ou "Enviar".

## Reescritas por página / seção

### 1. Hero — Dedetizadora (`HeroSection.tsx`)
- **H1 (opções)**:
  - A: "Barata, rato, cupim ou formiga em casa? Resolvemos em até 2 horas." — direto ao problema
  - B: "Praga na sua casa hoje. Sem praga amanhã." — antes/depois
  - C: "Dedetização técnica com garantia de 6 meses — ou voltamos sem cobrar."
- **Subhead**: "Técnico ANVISA no seu endereço em até 2h, produto sem cheiro forte e laudo assinado. Atendemos Curitiba e região metropolitana desde 1989."
- **Bullets**: manter os 4 (já bons), reforçar especificidade.
- **CTAs**: "Falar com técnico no WhatsApp" / "Emergência 24h — (41) 99512-1583"

### 2. Hero — Desentupidora (`DesHeroSection.tsx`)
- **H1**: "Pia entupida, esgoto voltando ou vaso transbordando? Chegamos em 1 hora." (ou "Desentupimos em 1 hora, sem quebrar piso nem parede.")
- **Subhead**: "Hidrojateamento de alta pressão e câmera de inspeção. Atendemos 24h, inclusive fins de semana e feriados, em toda a região de Curitiba."
- **Bullets** já ok, ajustar copy.

### 3. Urgency Bar (`UrgencyBar.tsx`)
- De "Atendimento 24h · Emergência em até 2h" → "Emergência agora? Ligue (41) 99512-1583 — atendimento em até 2h"

### 4. Services / Pests / Differentials / Guarantee
- **ServicesSection**: cada card com problema no título ou primeira linha. Ex.: "Baratas na cozinha", "Cupim comendo os móveis", "Rato no forro". Corpo: o que fazemos + prazo.
- **PestsSection**: nome da praga + 1 linha de agitação (risco/dano concreto) + "Como eliminamos".
- **DifferentialsSection**: transformar features em benefícios. Ex.: "Produto sem cheiro forte → você volta pra casa no mesmo dia".
- **GuaranteeSection**: "Voltou praga em 6 meses? Voltamos sem cobrar. Por escrito, no laudo." (risk reversal explícito)
- **TestimonialsSection / Module**: manter depoimentos reais, ajustar apenas headline da seção: "O que dizem quem já resolveu com a gente".

### 5. FAQ (`FAQSection.tsx`)
- Reescrever perguntas na voz do cliente: "Preciso sair de casa depois da dedetização?", "Quanto tempo demora?", "Funciona pra apartamento?", "Se voltar barata, vocês voltam?".

### 6. ContactSection (dedet + desent)
- Headline: "Fale com um técnico agora" (não "Solicite seu orçamento")
- Sub: "Resposta no WhatsApp em minutos. Orçamento na hora, sem visita obrigatória."

### 7. OutrosServicosBlock
- Títulos dos 4 cards em linguagem-problema: "Caixa d'água suja", "Rato no forro", "Pombo sujando a fachada", "Cano entupido".

### 8. Páginas dinâmicas de conteúdo
- **PragaPage** (`src/data/pragas.ts` + template): abrir cada praga com pergunta-problema ("Encontrou barata na cozinha?"), agitação de 2 linhas (risco à saúde/prejuízo), depois protocolo.
- **BairroPage / CidadePage**: H1 local + primeira linha específica ("Atendemos [bairro] em até 2h. Base própria a X km."). Prova social local.
- **ServicoDesentupimentoPage / ServicoEspecialPage**: mesmo padrão problema → método → garantia.
- **Emergencia24h**: já é urgência — apertar copy no PAS puro.
- **BlogPost**: apenas revisar títulos/leads dos 4 posts existentes; corpo não muda.

### 9. Meta tags (SEO — `index.html` e Helmet por rota)
- Reescrever `<title>` e `<meta description>` de cada rota com formato: [problema/serviço] + [cidade] + [prova/prazo]. Ex.: "Dedetizadora em Curitiba — Atendimento em 2h e Garantia 6 meses | Ampla".

## Diretrizes de estilo (aplicadas em tudo)

- Sem "!" (exceto em citações reais de clientes).
- Sem "soluções", "excelência", "qualidade", "completo", "diferenciado".
- Prazos e números sempre concretos (2h, 1h, 6 meses, 35 anos, 12x).
- CTA sempre com verbo + benefício: "Falar no WhatsApp", "Ligar agora", "Pedir orçamento grátis".
- Manter 100% do layout, componentes e SEO técnico existentes.

## Entregável

Um PR de "copy pass" que toca ~15 componentes + templates dinâmicos + `index.html` + meta helmets, sem mudança visual nem estrutural. Ao final, typecheck e verificação de screenshot rápida da home + desentupidora + 1 página de praga.

## Perguntas antes de executar

1. Prefere H1 do hero da Dedetizadora na **opção A** (pergunta-problema), **B** (antes/depois curto) ou **C** (garantia)?
2. Posso reescrever também as **perguntas do FAQ** (não só as respostas), ou manter as perguntas atuais?
3. Nas 4+ posts do blog, quer que eu **reescreva também o corpo** dos artigos ou só título/lead/meta?
