
# Auditoria completa antes de ativar as campanhas

Resposta sincera: **NÃO está tudo pronto**. O site em si está bom, mas encontrei bugs graves no Google Ads que fariam suas campanhas simplesmente não rodarem (ou rodarem errado) e alguns ajustes finos de SEO/tracking que valem a pena antes de gastar mídia.

Abaixo, tudo separado por severidade.

---

## 🔴 CRÍTICO (bloqueia ativação das campanhas)

### 1. Orçamentos das 5 campanhas estão em R$ 0,00003/dia
Ao criar as campanhas, os valores foram gravados em unidades erradas (o Google Ads usa "micros" = valor × 1.000.000). Estão salvos assim:

```text
C01 Genericos          → 30 micros       (deveria ser 30.000.000 = R$ 30/dia)
C02 Especiais          → 15 micros       (R$ 15/dia)
C03 Bairros Dedet.     → 20 micros       (R$ 20/dia)
C04 Desentupidora 24h  → 40 micros       (R$ 40/dia)
C05 Bairros Desent.    → 30 micros       (R$ 30/dia)
```
Ativar assim = zero impressão. Preciso corrigir para os valores em reais que combinamos.

### 2. Lances (CPC máx.) também estão em R$ 0,000005
Mesmo bug de micros em todos os 24 ad groups:

```text
C01/C02/C03  → 5 micros    (deveria 5.000.000 = R$ 5,00)
C04          → 15 micros   (R$ 15,00)
C05          → 12 micros   (R$ 12,00)
```

### 3. Segmentação geográfica só está pegando Curitiba (cidade)
Todas as 5 campanhas estão em `geoTargetConstant 1001773` (Curitiba). Você pediu **Curitiba + Região Metropolitana**. Faltam: São José dos Pinhais, Colombo, Pinhais, Araucária, Campo Largo, Fazenda Rio Grande, Piraquara, Quatro Barras, Almirante Tamandaré, Rio Branco do Sul, Bocaiúva do Sul.

### 4. Duas ações de conversão marcadas como “meta principal” na conta
`WhatsApp Lead - Ampla` (correta, valor R$ 1) **e** `FORM DE LEADS` (valor R$ 80, de outro site/negócio) estão as duas com `primary_for_goal=true`. Isso pode fazer o Google otimizar as campanhas da Ampla mirando na conversão errada. Vou vincular a conversão **somente do WhatsApp Lead** nas 5 campanhas da Ampla (campaign-level conversion goals), isolando das outras.

### 5. Conversão WhatsApp está como MANY_PER_CLICK
Se a mesma pessoa clicar 3× no botão de WhatsApp, conta 3 leads e infla o CPA. O correto para lead é **ONE_PER_CLICK** (1 lead único por clique/sessão).

---

## 🟡 IMPORTANTE (perde CTR e leads se não resolver)

### 6. Nenhum ativo (asset) nas campanhas da Ampla
Zero sitelinks, callouts, structured snippets, chamada telefônica ou logo. Anúncios sem ativos perdem 15–30% de CTR e ficam menores no SERP. Vou criar:
- **Sitelinks** (4–6): "Dedetização Residencial", "Comercial", "Desentupidora 24h", "Bairros atendidos", "Emergência 24h", "Fale no WhatsApp".
- **Callouts** (6+): "35 anos de experiência", "Técnico ANVISA", "Atendimento em até 2h", "6 meses de garantia", "Orçamento grátis", "Sem cheiro, seguro para pets".
- **Structured snippet** – Serviços: baratas, ratos, cupim, escorpião, pombos, caixa d’água.
- **Call asset** – (41) 99512-1583.
- **Business name + Logo**.

### 7. Nenhuma palavra-chave negativa
Vai queimar orçamento com buscas como: `curso dedetização`, `apostila`, `emprego`, `salário`, `download`, `grátis`, `como fazer`, `caseiro`, `receita`, `veneno pra`, `youtube`, `pdf`. Vou adicionar lista negativa compartilhada aplicada às 5 campanhas.

### 8. Ad Schedule e Device bid modifiers não configurados
- Desentupidora 24h deveria rodar 24h; dedetização faz mais sentido priorizar horário comercial estendido (07h–22h).
- Mobile costuma converter mais em urgência, cabe +10% em C04.

---

## 🟠 SEO / Indexação

### 9. Google Search Console não conectado
Sem GSC não vemos o que está sendo indexado, se tem erro de rastreamento, ou submetemos o sitemap oficialmente. Vou:
1. Conectar o connector `google_search_console`.
2. Verificar propriedade de `https://www.grupoampladedetiza.com.br/` (método META).
3. Submeter `/sitemap.xml`.

### 10. `aggregateRating` no JSON-LD com 10.000 avaliações e nota 4,8 é falso
Isso é passível de **penalização por dados estruturados enganosos**. O Google já removeu self-ratings e pode até desindexar rich results. Vou remover o bloco `aggregateRating` até termos avaliações reais (ex.: Google Business Profile via terceiros) ou deixar apenas o real.

### 11. Schema LocalBusiness incompleto
Falta `openingHours`, `sameAs` (Instagram), `image` (logo absoluta) e `@id`. Enriquecer melhora painel do Google.

### 12. Sem preload do LCP (imagem do técnico da Hero)
Já tem `fetchpriority=high` na tag `<img>`, mas falta `<link rel="preload" as="image">` no `<head>` para o navegador começar o download antes do JS bootar. Ganha ~200–400ms de LCP em 4G.

### 13. Sem tag `<meta name="google-site-verification">` (adicionada ao verificar GSC no passo 9).

---

## 🟢 Refinamentos (nice-to-have)

- **Bing Webmaster Tools**: submeter sitemap (2% do tráfego, mas grátis).
- **Suspense fallback vazio**: mostra tela branca ~200ms em rotas lazy. Trocar por um spinner discreto.
- **`campaign_id` no evento de conversão**: hoje mando o `utm_campaign` (string) nesse campo. O Google Ads não usa isso; a atribuição real vem do GCLID (que já preservamos). Vou remover pra não confundir logs.
- **Cookie consent (LGPD)**: o site dispara gtag sem banner de consentimento. Se algum dia for questionado, vale um banner básico com Consent Mode v2 (`ad_storage`, `analytics_storage`).
- **`llms.txt`**: já existe, ok.

---

## Plano de execução (na ordem)

1. **Google Ads – corrigir bugs bloqueantes** (via `blendmcp_smart_action_google_ads`):
   - Budgets: C01=30, C02=15, C03=20, C04=40, C05=30 (em reais, deixo o tool converter).
   - CPC máx: C01/C02/C03=R$ 5, C04=R$ 15, C05=R$ 12.
   - Locations: adicionar as 10 cidades da RMC em todas as 5 campanhas.
   - Confirmar/publicar tudo ainda **PAUSED**.

2. **Google Ads – conversão**:
   - Setar `FORM DE LEADS` como secundária (não-primária) e/ou vincular só `WhatsApp Lead - Ampla` como meta das 5 campanhas da Ampla.
   - Alterar `WhatsApp Lead - Ampla` de MANY_PER_CLICK para ONE_PER_CLICK.

3. **Google Ads – assets + negativas + schedule**:
   - Criar sitelinks, callouts, snippet, call, logo, business name.
   - Criar lista de palavras-chave negativas e aplicar às 5 campanhas.
   - Ad schedule diferenciado C04 (24h) vs demais (07–22h). Bid modifier mobile +10% em C04.

4. **Site – SEO/perf**:
   - `index.html`: remover `aggregateRating` falso, enriquecer schema (openingHours, sameAs, image, @id), adicionar `<link rel="preload">` da imagem hero, remover `campaign_id` do evento de conversão.
   - `App.tsx`: fallback do Suspense com spinner.

5. **Google Search Console**:
   - Conectar connector, verificar META, injetar tag no `<head>`, submeter sitemap.

6. **Publicar** o site (frontend precisa de deploy pra as mudanças subirem antes de ativar campanhas) e depois rodar `security--run_security_scan` + `seo_chat--trigger_scan` pra ficha limpa.

7. Só depois disso: **despausar as campanhas**.

## Detalhes técnicos

- Micros conversion: `amount_micros = reais × 1.000.000`. Vou passar valores em reais para o `smart_action_google_ads`, que faz a conversão.
- Location targeting Curitiba RMC (geoTargetConstants): 1001773 (Curitiba), 1001832 (São José dos Pinhais), 1001756 (Colombo), 1001827 (Pinhais), 1001754 (Araucária), 1001765 (Campo Largo), 1001784 (Fazenda Rio Grande), 1001830 (Piraquara), 1001834 (Quatro Barras), 1001750 (Almirante Tamandaré), 1001836 (Rio Branco do Sul), 1001762 (Bocaiúva do Sul). Vou validar cada ID via query antes de aplicar (o Google renumera raramente).
- Alteração de counting_type em conversão existente **reseta** dados de aprendizado. Como ainda não rodou, é o momento certo.
- Vou pedir aprovação sua para conectar o Google Search Console (o connector abre popup OAuth).

---

**Confirme e eu executo do 1 ao 7 na ordem.** Se quiser priorizar só o "crítico" primeiro pra já subir as campanhas com o essencial e deixar assets/SEO fino pra depois, também dá — é só falar.
