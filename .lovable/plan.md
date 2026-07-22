
## Oportunidades encontradas (Semrush, base BR)

Bairros/cidades da RMC têm KDI 0–13 (muito fácil) — ótima janela para ranquear rápido, mesmo com volumes pequenos (soma vale a pena):

| Keyword | Volume/mês | KDI |
|---|---|---|
| dedetizadora são josé dos pinhais | 110 | 13 |
| desentupidora são josé dos pinhais | 590 | ~0 |
| desentupidora pinhais | 480 | ~0 |
| limpa fossa curitiba | 170 | 10 |
| limpa fossa são josé dos pinhais | 70 | 0 |
| desentupidora cic | 70 | 0 |
| desentupidora batel | 40 | 0 |
| dedetizadora santa felicidade | 20 | 0 |
| dedetizadora fazenda rio grande | 20 | 0 |
| desentupidora 24 horas curitiba | 20 | 0 |

Bairros isolados raramente têm volume medido, mas ranqueiam por proximidade + long-tail ("dedetizadora em [bairro]", "dedetização [bairro] preço").

## O que vou construir

### 1. Páginas de bairros de Curitiba (`/bairros/:bairro`)
Novo `src/data/bairros.ts` + template `src/pages/BairroPage.tsx`. 12 bairros com maior densidade populacional/comercial:
Batel, Água Verde, Centro, Boqueirão, Portão, CIC, Cajuru, Santa Felicidade, Bacacheri, Sítio Cercado, Pinheirinho, Uberaba.

Cada página: H1 local, intro geográfica, serviços disponíveis, bairros vizinhos (interlink), FAQ local, depoimentos filtrados, JSON-LD `LocalBusiness` com `areaServed` do bairro + `FAQPage`.

### 2. Novas cidades da RMC (`/atendimento/:cidade`)
Adicionar em `src/data/cidades.ts`: **Fazenda Rio Grande, Piraquara, Quatro Barras, Almirante Tamandaré, Rio Branco do Sul, Bocaiúva do Sul**. Reaproveita template existente.

### 3. Página de emergência (`/emergencia-24h`)
`src/pages/Emergencia24h.tsx` — foco em urgência (esgoto transbordando, fossa cheia, ratos em comércio). Hero vermelho/laranja com CTA WhatsApp + telefone pulsante, "atendimento em até 2h", depoimentos de casos reais de urgência, FAQ de urgência, `EmergencyService` JSON-LD.

### 4. Módulo de depoimentos reutilizável
Extrair depoimentos para `src/data/depoimentos.ts` com tags (`dedetizacao`, `desentupimento`, `emergencia`, `comercial`, cidade/bairro). Componente `<TestimonialsModule filter={...} />` — carrossel filtrado. Injetar em: PragaPage, ServicoDesentupimentoPage, CidadePage, BairroPage, DedetizacaoComercial, Emergencia24h. JSON-LD `Review` agregado onde aplicável.

### 5. Integração de sistema
- Rotas em `src/App.tsx`: `/bairros/:bairro`, `/emergencia-24h`.
- Update `public/sitemap.xml` e `public/llms.txt` com todas as URLs novas (~20).
- Link para "Emergência 24h" no Header e Footer.
- Seção "Bairros que atendemos" na CidadePage de Curitiba com links internos.

## Detalhes técnicos

```text
src/
├── data/
│   ├── bairros.ts          (novo — 12 bairros)
│   ├── cidades.ts          (+ 6 cidades RMC)
│   └── depoimentos.ts      (novo — depoimentos taggeados)
├── pages/
│   ├── BairroPage.tsx      (novo — template dinâmico)
│   └── Emergencia24h.tsx   (novo)
└── components/
    └── TestimonialsModule.tsx  (novo — reutilizável com filtro)
```

Cada template segue o padrão já estabelecido (Helmet + JSON-LD + interlink + CTA WhatsApp verde). Sem novas dependências.

## Fora de escopo (perguntar depois se quiser)

- Páginas por bairro × serviço combinado (multiplicaria 100+ URLs — arriscado sem conteúdo único).
- Bairros de outras cidades da RMC (mantido só Curitiba nessa fase).
- Reviews reais adicionais do Google — usarei os 6 já capturados + variações contextuais.
