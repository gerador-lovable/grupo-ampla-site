## Objetivo

Finalizar as 5 campanhas do Google Ads da Ampla adicionando **keywords + 1 RSA por ad group** nas 22 ad groups que ainda estão vazias (AG Genericos e AG Baratas já têm keywords; só AG Genericos tem RSA). Tudo permanece **PAUSED**.

## URLs de destino (por ad group)

Uso página específica quando existe (melhora Quality Score, reduz CPC). Todas com UTMs `utm_source=google&utm_medium=cpc&utm_campaign=<id>`.

- Pragas → `/pragas/<slug>` (baratas, ratos, cupim, escorpiao, formigas)
- Serviços especiais → `/servicos-especiais/<slug>` (caixa-dagua, pombos-morcegos)
- Comercial/Condomínio → `/dedetizacao-comercial`
- Bairros dedetização → `/dedetizadora/<bairro>` quando existir, senão `/`
- Desentupidora emergência → `/desentupidora` + `/emergencia-24h`
- Bairros desentupidora → `/desentupidora/<bairro>` quando existir, senão `/desentupidora`

## Keywords por ad group (todas com CPC teto da campanha)

**C01 Dedetização Genéricos** (CPC $5):
- AG Cupim: "descupinização curitiba", "dedetização de cupim curitiba", "empresa de descupinização curitiba", "matar cupim madeira curitiba"
- AG Escorpião: "dedetização escorpião curitiba", "controle de escorpião curitiba", "eliminar escorpião curitiba"
- AG Formigas: "dedetização de formigas curitiba", "matar formigas curitiba", "controle de formigas curitiba"
- AG Ratos: "desratização curitiba", "dedetização de ratos curitiba", "controle de roedores curitiba", "eliminar ratos curitiba"

**C02 Serviços Especiais** (CPC $5):
- AG Caixa d'Água: "limpeza de caixa d'água curitiba", "empresa limpeza caixa d'água curitiba", "higienização caixa d'água curitiba"
- AG Comercial/Condomínio: "dedetização comercial curitiba", "dedetização condomínio curitiba", "MIP curitiba", "controle de pragas empresas curitiba"
- AG Pombos/Morcegos: "afastamento de pombos curitiba", "controle de pombos curitiba", "remoção de morcegos curitiba"

**C03 Bairros Dedetização** (CPC $5) — já tem AG Colombo:
- AG Colombo: "dedetizadora colombo", "dedetização colombo pr"
- AG Pinhais: "dedetizadora pinhais", "dedetização pinhais"
- AG SJP: "dedetizadora são josé dos pinhais", "dedetização sjp"
- AG Santa Felicidade/Uberaba: "dedetizadora santa felicidade", "dedetizadora uberaba curitiba"
- AG Boqueirão/Cajuru: "dedetizadora boqueirão", "dedetizadora cajuru"
- AG CIC/Portão/Batel: "dedetizadora cic curitiba", "dedetizadora portão curitiba", "dedetizadora batel"
- AG Sítio Cercado/Tatuquara/Pinheirinho: "dedetizadora sítio cercado", "dedetizadora pinheirinho", "dedetizadora tatuquara"

**C04 Desentupidora 24h** (CPC $15):
- AG Emergência: "desentupidora curitiba" EXACT, "desentupidora 24 horas curitiba" PHRASE, "desentupidora curitiba urgente" PHRASE, "desentupimento de esgoto curitiba" PHRASE, "desentupidora perto de mim" PHRASE
- AG Limpa Fossa: "limpa fossa curitiba", "caça vazamento curitiba", "desentupimento de pia curitiba", "desentupimento de vaso sanitário curitiba"

**C05 Bairros Desentupidora** (CPC $12):
- AG Cajuru: "desentupidora cajuru"
- AG Boqueirão: "desentupidora boqueirão"
- AG Colombo/Pinhais/SJP: "desentupidora colombo", "desentupidora pinhais", "desentupidora são josé dos pinhais"
- AG Santa Felicidade/Água Verde/Batel/Portão: "desentupidora santa felicidade", "desentupidora água verde", "desentupidora batel", "desentupidora portão"
- AG CIC/Pinheirinho/Sítio Cercado/Centro: "desentupidora cic", "desentupidora pinheirinho", "desentupidora sítio cercado", "desentupidora centro curitiba"
- AG Araucária/Fazenda RG: "desentupidora araucária", "desentupidora fazenda rio grande"

## RSAs (1 por ad group, todas PAUSED)

Template consistente: 15 headlines (≤30 chars) e 4 descriptions (≤90 chars), path1/path2 adaptados. Cada RSA menciona: serviço específico + Curitiba/bairro, 35 anos, 2h de atendimento, garantia 6 meses, ANVISA, WhatsApp, CTA.

Descentupidora usa ângulo emergência: "24h", "sem hora marcada", "chega em 1 hora", "sem quebrar piso".

## Execução

MCP limita 10 ops/chamada. Estimativa: ~55 keywords restantes + 23 RSAs = ~78 ops → **~9 chamadas MCP**, distribuídas por campanha. Após cada batch confirmo `success: true` via response da própria chamada; ao fim, uma query GAQL agregada valida contagem de keywords/ads por AG.

## Fora do escopo

- Ativação de campanhas (permanecem PAUSED)
- Extensions (sitelinks, callouts, structured snippets), negative keywords, audiências — próxima etapa após você revisar
- Configuração do ID de conversão real (`AW-XXXX`) — pendente do seu lado
