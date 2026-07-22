export interface BlogPost {
 slug: string;
 titulo: string;
 title: string;
 description: string;
 resumo: string;
 publicadoEm: string;
 leitura: string;
 categoria: string;
 secoes: { h2: string; paragrafos: string[]; bullets?: string[] }[];
 conclusao: string;
}

export const blogPosts: BlogPost[] = [
 {
 slug: "quanto-custa-dedetizacao-curitiba",
 titulo: "Quanto custa uma dedetização em Curitiba em 2026?",
 title: "Quanto Custa Dedetização em Curitiba 2026? Preços e Fatores | Ampla",
 description:
 "Descubra quanto custa uma dedetização em Curitiba em 2026: faixas de preço por m², tipo de praga e fatores que influenciam o orçamento.",
 resumo:
 "Preços de dedetização em Curitiba variam por área, tipo de praga e método. Veja a faixa média e o que influencia o orçamento.",
 publicadoEm: "2026-07-01",
 leitura: "6 min",
 categoria: "Preços",
 secoes: [
 {
 h2: "Faixa de preço média em Curitiba",
 paragrafos: [
 "Uma dedetização residencial padrão em Curitiba (apartamento ou casa até 100 m²) fica em média entre R$ 180 e R$ 450, dependendo do tipo de praga e do método aplicado. Serviços comerciais e industriais são cotados por m² e escopo.",
 "Descupinização e tratamentos com barreira química no solo têm faixa própria, normalmente entre R$ 25 e R$ 60 por m² tratado.",
 ],
 },
 {
 h2: "O que influencia o valor",
 paragrafos: ["Cinco fatores explicam a maior parte da variação de preço:"],
 bullets: [
 "Área total do imóvel (m²)",
 "Tipo de praga (baratas, cupim, ratos, escorpião etc.)",
 "Grau de infestação",
 "Método aplicado (gel, pulverização, iscas, hidrojato)",
 "Necessidade de laudo técnico (comercial/industrial)",
 ],
 },
 {
 h2: "Cuidado com preços muito baixos",
 paragrafos: [
 "Preços muito abaixo da faixa de mercado costumam significar produto vencido, sem registro ANVISA, sem garantia ou aplicação incompleta. Sempre exija: registro da empresa, nota fiscal e garantia por escrito.",
 ],
 },
 ],
 conclusao: "Peça um orçamento grátis pelo WhatsApp, respondemos em minutos com preço fechado.",
 },
 {
 slug: "quanto-custa-desentupimento-curitiba",
 titulo: "Quanto custa um desentupimento em Curitiba?",
 title: "Quanto Custa Desentupimento em Curitiba? Preços 2026 | Ampla",
 description:
 "Veja quanto custa desentupimento em Curitiba em 2026: pia, vaso, esgoto, hidrojateamento e limpeza de fossa. Faixas de preço e o que influencia.",
 resumo:
 "Desentupimento varia por tipo de ponto e equipamento. Veja faixas médias em Curitiba e o que impacta o orçamento.",
 publicadoEm: "2026-07-05",
 leitura: "5 min",
 categoria: "Preços",
 secoes: [
 {
 h2: "Preço médio por tipo de serviço",
 paragrafos: ["Estas são as faixas mais comuns em Curitiba em 2026:"],
 bullets: [
 "Desentupimento de pia: R$ 150 a R$ 300",
 "Desentupimento de vaso sanitário: R$ 180 a R$ 380",
 "Desentupimento de esgoto: R$ 250 a R$ 600",
 "Hidrojateamento: R$ 500 a R$ 1.500 (varia por metragem)",
 "Limpeza de fossa: R$ 400 a R$ 900 por caminhão",
 ],
 },
 {
 h2: "Fatores que aumentam o preço",
 paragrafos: ["Alguns fatores fazem o valor subir dentro da faixa:"],
 bullets: [
 "Atendimento 24h ou finais de semana",
 "Necessidade de hidrojateamento",
 "Distância do centro de Curitiba",
 "Acesso difícil (subsolo, cobertura, poço de visita)",
 ],
 },
 {
 h2: "Como evitar surpresas",
 paragrafos: [
 "Peça sempre orçamento antes do início do serviço, com preço fechado. Fuja de empresas que só passam o valor 'no local'.",
 ],
 },
 ],
 conclusao: "Envie sua situação pelo WhatsApp e receba um orçamento fechado antes do atendimento.",
 },
 {
 slug: "como-eliminar-baratas-de-esgoto",
 titulo: "Como eliminar baratas de esgoto de vez",
 title: "Como Eliminar Baratas de Esgoto de Vez | Guia Ampla",
 description:
 "Aprenda como eliminar baratas de esgoto (Periplaneta americana) de forma definitiva: prevenção, produtos e quando chamar dedetização profissional.",
 resumo:
 "Baratas de esgoto voltam sempre? Veja o passo a passo para eliminá-las e evitar reinfestação em casa ou no comércio.",
 publicadoEm: "2026-07-10",
 leitura: "7 min",
 categoria: "Guia",
 secoes: [
 {
 h2: "Por que voltam mesmo depois da dedetização",
 paragrafos: [
 "Baratas de esgoto não vivem dentro do imóvel: sobem pela tubulação. Se o tratamento não protege ralos, caixas de gordura e caixas de inspeção, elas retornam em semanas.",
 ],
 },
 {
 h2: "O que fazer hoje",
 paragrafos: ["Ações imediatas que reduzem a infestação:"],
 bullets: [
 "Mantenha ralos com tampa cega ou vedação abre-fecha",
 "Elimine gordura acumulada em ralos e sifões",
 "Vede pequenas frestas em rodapés e atrás de móveis",
 "Não deixe alimentos expostos e lixo aberto",
 ],
 },
 {
 h2: "Quando chamar dedetização",
 paragrafos: [
 "Se você viu barata durante o dia, encontrou ootecas ou tem cheiro adocicado persistente, o foco já é maior do que dá para tratar sozinho. Nesse ponto, dedetização profissional com gel + pulverização + tratamento de ralos costuma resolver com garantia.",
 ],
 },
 ],
 conclusao: "Se as baratas voltaram mais de uma vez, fale conosco pelo WhatsApp e receba um plano com garantia.",
 },
 {
 slug: "como-saber-se-tem-cupim",
 titulo: "Como saber se sua casa tem cupim",
 title: "Como Saber se Sua Casa Tem Cupim: 8 Sinais | Ampla",
 description:
 "Descubra os 8 sinais de que sua casa tem cupim: pó de madeira, revoada, ninhos e mais. Aprenda quando chamar descupinização profissional.",
 resumo: "Cupim age em silêncio. Conheça os 8 sinais mais comuns em casas de Curitiba antes que o dano estrutural apareça.",
 publicadoEm: "2026-07-15",
 leitura: "5 min",
 categoria: "Guia",
 secoes: [
 {
 h2: "Os 8 sinais que indicam cupim",
 paragrafos: ["Fique atento a qualquer um destes indícios:"],
 bullets: [
 "Pó fino cor de madeira embaixo de móveis ou batentes",
 "Furinhos redondos em madeira, com pó saindo",
 "Revoada de insetos alados após dias de chuva",
 "Túneis de terra em paredes, muros ou pisos",
 "Madeira que soa oca ao toque",
 "Pintura estufada em locais isolados",
 "Asas transparentes soltas em janelas e frestas",
 "Ninhos visíveis em forros e telhados",
 ],
 },
 {
 h2: "Cupim de madeira seca x subterrâneo",
 paragrafos: [
 "O cupim de madeira seca ataca móveis, batentes e forros. O cupim subterrâneo vem do solo e sobe por dentro das paredes, é o mais destrutivo. O tratamento é diferente para cada tipo.",
 ],
 },
 {
 h2: "Não perca tempo",
 paragrafos: [
 "Quanto mais cedo detectar, menor o custo. Cupim tratado no início não exige troca de estrutura. Descupinização profissional com produtos ANVISA elimina a colônia e cria barreira preventiva.",
 ],
 },
 ],
 conclusao: "Suspeitou de cupim? Fale conosco pelo WhatsApp e agendamos uma vistoria.",
 },
 {
  slug: "como-acabar-com-baratas-em-casa",
  titulo: "Como acabar com baratas em casa: guia definitivo",
  title: "Como Acabar com Baratas em Casa: Guia Definitivo | Ampla",
  description: "Aprenda como acabar com baratas em casa: sinais de infestação, o que funciona, o que é mito e quando chamar dedetização profissional em Curitiba.",
  resumo: "Barata sumiu depois do inseticida e voltou em uma semana? O problema é o ninho, e não a barata que você viu. Veja o passo a passo real.",
  publicadoEm: "2026-07-20",
  leitura: "8 min",
  categoria: "Guia",
  secoes: [
   {
    h2: "Por que as baratas sempre voltam",
    paragrafos: [
     "Cada barata que você vê andando é 1 de cada 30 ou 40 escondidas em frestas, atrás da geladeira, no motor do fogão e dentro do armário. Matar a que apareceu não elimina o ninho.",
     "As duas espécies mais comuns em casa são a francesinha (pequena, marrom-clara, vive em armários e eletrodomésticos) e a barata de esgoto (grande, sobe pelos ralos à noite). O tratamento é diferente para cada uma.",
    ],
   },
   {
    h2: "O que funciona de verdade (e o que é mito)",
    paragrafos: ["Antes de gastar com produto errado, entenda o que realmente reduz a colônia:"],
    bullets: [
     "Gel inseticida em pontos estratégicos: funciona, é o melhor para francesinha",
     "Vedar ralos e frestas com tampa cega ou vedação abre-fecha: essencial para barata de esgoto",
     "Manter cozinha limpa e sem restos de alimento: reduz muito, mas não elimina",
     "Louro, pepino, folha de louro: mito, não funciona",
     "Spray comum: mata a que aparece mas não atinge o ninho",
    ],
   },
   {
    h2: "Sinais de que já virou infestação",
    paragrafos: ["Se você tem 2 ou mais desses sinais, o caseiro não vai mais resolver:"],
    bullets: [
     "Ver barata durante o dia (elas são noturnas, aparecer no claro = população grande)",
     "Fezes pequenas parecidas com pó de café atrás de móveis",
     "Cheiro adocicado desagradável na cozinha",
     "Ootecas (cápsulas marrons com ovos) grudadas em frestas",
     "Barata pequena andando em bando dentro do armário",
    ],
   },
   {
    h2: "Quando chamar a Ampla",
    paragrafos: [
     "Se as baratas voltaram mais de uma vez, mesmo com você limpando e vedando, o foco já está protegido dentro da estrutura da casa. Nesse ponto, o tratamento profissional com gel + microcápsulas + vedação de ralos elimina a colônia com garantia de 6 meses.",
     "A Ampla atende Curitiba e RMC com dedetização residencial sem cheiro forte, segura para crianças e pets, com retorno ao imóvel no mesmo dia.",
    ],
   },
  ],
  conclusao: "Cansou de barata voltando? Envie um WhatsApp e agendamos vistoria grátis em Curitiba.",
 },
 {
  slug: "como-matar-cupim-de-madeira",
  titulo: "Como matar cupim de madeira: 7 métodos e o que realmente funciona",
  title: "Como Matar Cupim de Madeira: 7 Métodos que Funcionam | Ampla",
  description: "Cupim em móvel, batente ou telhado? Veja 7 métodos para matar cupim de madeira, o que dá pra fazer sozinho e quando chamar descupinização profissional.",
  resumo: "Cupim de madeira come por dentro e só aparece o pó. Veja o que funciona pra cada caso e quando o problema exige tratamento profissional.",
  publicadoEm: "2026-07-22",
  leitura: "7 min",
  categoria: "Guia",
  secoes: [
   {
    h2: "Cupim de madeira seca x cupim subterrâneo",
    paragrafos: [
     "O cupim de madeira seca ataca móveis, batentes, forros e telhados. Faz furinhos redondos e joga pó fino cor de madeira embaixo. A colônia toda vive dentro da peça.",
     "O cupim subterrâneo vem do solo, sobe por dentro das paredes e faz túneis de terra. É o mais destrutivo, e mata cupim caseiro não resolve.",
    ],
   },
   {
    h2: "7 métodos e o que esperar de cada um",
    paragrafos: ["Do mais barato ao mais definitivo:"],
    bullets: [
     "Óleo de neem ou vinagre em pequenos focos: alivia, não elimina colônia",
     "Cupinicida líquido de aplicação por seringa em furinhos: funciona em peça pequena e localizada",
     "Isca cupinicida (Sentricon e similares): elimina colônia inteira, exige aplicação técnica",
     "Injeção de cupinicida por perfuração da madeira: para batentes, portas e forros com foco maior",
     "Barreira química no solo: essencial para cupim subterrâneo",
     "Termonebulização em forro/telhado: elimina revoada e foco em madeiramento",
     "Substituição da peça infestada: só quando o dano estrutural já comprometeu",
    ],
   },
   {
    h2: "O erro que faz o cupim voltar",
    paragrafos: [
     "Aplicar produto só onde apareceu pó não resolve. A colônia se espalha por metros dentro do madeiramento. Sem tratar toda a estrutura de risco, o cupim reaparece em outro ponto em 6 a 12 meses.",
    ],
   },
   {
    h2: "Quando chamar descupinização profissional",
    paragrafos: [
     "Móvel, batente ou piso com furinhos e pó: chame se aparecer em mais de um cômodo, se for madeira estrutural (telhado, viga) ou se você já tentou produto e voltou.",
     "A Ampla faz descupinização em Curitiba e RMC com produtos ANVISA, aplicação por injeção e barreira química, com garantia de 5 anos para cupim subterrâneo.",
    ],
   },
  ],
  conclusao: "Achou pó de madeira em casa? Envie foto pelo WhatsApp e nosso técnico avalia sem custo.",
 },
 {
  slug: "como-acabar-com-ratos-em-casa",
  titulo: "Como acabar com ratos em casa e no quintal",
  title: "Como Acabar com Ratos em Casa e no Quintal | Guia Ampla",
  description: "Rato no forro, quintal ou cozinha? Veja como acabar com ratos de forma segura, o que funciona e quando chamar desratização profissional em Curitiba.",
  resumo: "Rato transmite leptospirose e se multiplica rápido. Veja o que fazer hoje pra reduzir e quando o caso vira desratização profissional.",
  publicadoEm: "2026-07-24",
  leitura: "7 min",
  categoria: "Guia",
  secoes: [
   {
    h2: "Uma fêmea = mais de 100 filhotes por ano",
    paragrafos: [
     "Rato se reproduz em ciclo curto. Se você viu um, provavelmente já tem 5 a 10 no imóvel. Quanto mais cedo agir, mais barato o controle.",
     "Em Curitiba, as três espécies comuns são: ratazana (grande, esgoto e quintal), rato de telhado (médio, forro) e camundongo (pequeno, dentro da casa).",
    ],
   },
   {
    h2: "O que fazer hoje pra reduzir",
    paragrafos: ["Ações que já cortam a maior parte do problema:"],
    bullets: [
     "Fechar TODOS os buracos maiores que 1cm em paredes, portas e forros",
     "Retirar entulho, mato alto e madeira acumulada no quintal",
     "Lixo em lixeira com tampa vedada, nunca em saco no chão",
     "Ração de pet só na hora da refeição, nunca durante a noite",
     "Iscas seladas em porta-iscas com chave (crianças e pets não acessam)",
    ],
   },
   {
    h2: "Por que o veneno de mercado costuma falhar",
    paragrafos: [
     "Iscas soltas no chão são recusadas se houver comida melhor por perto, matam pet e criança por acidente e não têm registro para uso profissional. Além disso, ratos aprendem a evitar iscas que mataram companheiros da colônia (esperteza da colônia).",
    ],
   },
   {
    h2: "Quando chamar a Ampla",
    paragrafos: [
     "Se você viu rato duas ou mais vezes, ouve barulho no forro à noite, encontrou fezes escuras em vários pontos ou tem infestação em comércio/condomínio: é caso pra desratização profissional.",
     "A Ampla atende Curitiba e RMC com porta-iscas lacrados, mapeamento em croqui, monitoramento e laudo técnico exigido pela vigilância sanitária.",
    ],
   },
  ],
  conclusao: "Viu rato? Fale conosco pelo WhatsApp, quanto antes tratar, menor o custo.",
 },
 {
  slug: "como-acabar-com-formigas",
  titulo: "Como acabar com formigas na cozinha e nas plantas",
  title: "Como Acabar com Formigas na Cozinha e Plantas | Ampla",
  description: "Formigas em trilha na cozinha ou destruindo plantas? Veja como acabar com formigas de forma segura e quando o problema exige dedetização profissional.",
  resumo: "Cortar a trilha não resolve, o ninho está escondido. Veja o que realmente funciona pra cada tipo de formiga em Curitiba.",
  publicadoEm: "2026-07-26",
  leitura: "6 min",
  categoria: "Guia",
  secoes: [
   {
    h2: "Os 3 tipos que mais aparecem em casa",
    paragrafos: ["Cada tipo pede um tratamento diferente:"],
    bullets: [
     "Formiga doceira (pequena, marrom): açúcar, adocicado, cozinha e despensa",
     "Formiga fantasma (miúda, quase transparente): correr por rejunte, difícil de ver",
     "Formiga cortadeira / saúva (grande, ruiva): destrói plantas, folhagem, jardim",
    ],
   },
   {
    h2: "O que funciona (e o erro clássico)",
    paragrafos: [
     "O erro é matar a trilha com pano molhado ou spray. Isso mata algumas operárias, mas a rainha e o ninho continuam intactos, e novas trilhas aparecem em dias.",
     "O que resolve é isca envenenada em gel: a formiga leva pra rainha, e a colônia inteira morre em 7 a 15 dias.",
    ],
    bullets: [
     "Gel de cozinha em pontos de passagem: funciona para doceira e fantasma",
     "Isca granulada com fipronil (Blitzz e similares): funciona para saúva e cortadeira",
     "Vedar rejunte, rachadura e ponto de entrada: previne novas colônias",
     "Vinagre, canela, borra de café: alivia trilha, não elimina ninho",
    ],
   },
   {
    h2: "Formiga cortadeira no jardim é caso técnico",
    paragrafos: [
     "Saúva e cortadeira formam colônias com túneis subterrâneos e milhões de operárias. Isca de mercado ajuda pouco. Se você tem monte de terra fresca no quintal ou plantas desfolhadas em uma noite, precisa de dedetização profissional com formicida específico e aplicação no olheiro certo.",
    ],
   },
   {
    h2: "Quando chamar a Ampla",
    paragrafos: [
     "Se as trilhas voltam depois do gel, se tem formiga em vários cômodos ao mesmo tempo ou se o jardim está sendo destruído: é caso pra dedetização. A Ampla atende Curitiba com produto ANVISA sem cheiro, seguro pra pets, com garantia de 6 meses.",
    ],
   },
  ],
  conclusao: "Formiga voltando toda semana? Chame a Ampla no WhatsApp e agendamos avaliação grátis.",
 },
 {
  slug: "como-espantar-pombos-do-telhado",
  titulo: "Como espantar pombos do telhado: o que funciona de verdade",
  title: "Como Espantar Pombos do Telhado: O Que Funciona | Ampla",
  description: "Pombos no telhado, sacada ou ar-condicionado? Veja como espantar pombos de forma humanitária e legal, e como funciona o afastamento profissional.",
  resumo: "Pombo pousa, faz ninho, contamina caixa d'água e corrói calha. Espantar de vez exige barreira física, sem veneno.",
  publicadoEm: "2026-07-28",
  leitura: "6 min",
  categoria: "Guia",
  secoes: [
   {
    h2: "Por que pombo é problema sério",
    paragrafos: [
     "Pombo transmite criptococose, histoplasmose e ornitose (doenças respiratórias graves). Também carrega ácaros e pulgas. As fezes secas soltam esporos perigosos e ainda corroem calha, telha e ar-condicionado.",
     "Matar pombo é ilegal no Brasil. O caminho correto é afastar, com barreira física.",
    ],
   },
   {
    h2: "O que espanta e o que só atrapalha",
    paragrafos: ["Do menos ao mais eficaz:"],
    bullets: [
     "CD refletindo, corujas de plástico: pombo se acostuma em dias",
     "Naftalina, pimenta, canela: cheiro incomoda, não afasta",
     "Fita reflexiva e som ultrassônico: efeito temporário, pombo aprende",
     "Espículas anti-pouso em aço inox: definitivo, pombo não consegue pousar",
     "Tela de nylon anti-pombos: para sacada e vãos abertos",
     "Sistema de fios tensionados: para parapeitos longos e beirais",
    ],
   },
   {
    h2: "Fezes acumuladas não podem ser varridas em seco",
    paragrafos: [
     "Se já tem fezes secas em beiral, sacada ou ar-condicionado, NÃO varra sem umedecer, os esporos ficam no ar e podem causar doença respiratória. A remoção correta é feita com EPI, umidificação e desinfecção química.",
    ],
   },
   {
    h2: "Como funciona o afastamento da Ampla",
    paragrafos: [
     "Fazemos vistoria, definimos a barreira correta pra cada superfície (espícula, tela ou fio), removemos e desinfetamos as fezes e vedamos os acessos. Método 100% humanitário, sem veneno, com garantia sobre a instalação. Atendemos casa, condomínio, indústria e comércio em Curitiba e RMC.",
    ],
   },
  ],
  conclusao: "Pombos voltaram esse ano? Envie foto pelo WhatsApp, o técnico avalia e cotamos sem custo.",
 },
 {
  slug: "como-acabar-com-percevejo-de-cama",
  titulo: "Como acabar com percevejo de cama de vez",
  title: "Como Acabar com Percevejo de Cama de Vez | Guia Ampla",
  description: "Acordou com picadas em fileira? Pode ser percevejo de cama. Veja como identificar, o que faz sentido tentar e por que a dedetização é sempre necessária.",
  resumo: "Percevejo de cama picar em fila, se esconde em costura de colchão e resiste a inseticida comum. Veja como eliminar de vez.",
  publicadoEm: "2026-07-30",
  leitura: "7 min",
  categoria: "Guia",
  secoes: [
   {
    h2: "Como saber se é percevejo (e não pulga ou mosquito)",
    paragrafos: ["Sinais quase certos de percevejo de cama:"],
    bullets: [
     "Picadas em fileira (3, 4 seguidas), coçam muito, aparecem só à noite",
     "Manchinhas pretas (fezes) na costura do colchão, cabeceira ou frestas da cama",
     "Manchinhas de sangue no lençol pela manhã",
     "Cheiro adocicado desagradável perto da cama em infestação grande",
     "Cascas transparentes (mudas) em rodapés e frestas de móveis",
    ],
   },
   {
    h2: "Por que caseiro quase nunca resolve",
    paragrafos: [
     "Percevejo se esconde em costura de colchão, atrás de cabeceira, em rodapé, em tomada, em livro e até em roupa. Uma fêmea põe 5 ovos por dia por até 6 meses. Inseticida comum não penetra nos esconderijos, e os ovos são resistentes a maioria dos produtos.",
     "O que ajuda: lavar toda roupa de cama a 60°C ou mais, secar no sol forte, encapar colchão e travesseiro com capa antiácaro (barreira física). Isso reduz, mas não elimina.",
    ],
   },
   {
    h2: "O único tratamento que elimina",
    paragrafos: [
     "Percevejo exige tratamento profissional com aplicação em 2 rodadas (15 dias de intervalo) para pegar os ovos que eclodem depois da primeira. Usa-se inseticida residual em costuras, frestas, tomadas, rodapés e móveis, com produto específico ANVISA.",
    ],
   },
   {
    h2: "Quando chamar a Ampla",
    paragrafos: [
     "Se apareceram picadas em fileira em mais de uma pessoa da casa, ou se você já viu percevejo vivo, chame imediatamente. Cada semana que passa é dezenas de novos ovos. A Ampla atende Curitiba e RMC com protocolo de 2 aplicações e garantia por escrito.",
    ],
   },
  ],
  conclusao: "Acordou com picadas em fileira? Fale conosco pelo WhatsApp hoje, quanto antes, menor a colônia.",
 },
 {
  slug: "escorpiao-amarelo-como-identificar",
  titulo: "Escorpião amarelo: como identificar e o que fazer se aparecer",
  title: "Escorpião Amarelo: Como Identificar e O Que Fazer | Ampla",
  description: "Escorpião amarelo é venenoso e comum em Curitiba. Veja como identificar, o que fazer em caso de picada e como controlar antes que apareça.",
  resumo: "O escorpião amarelo é o mais perigoso do Brasil e está avançando na RMC. Veja como identificar, prevenir e agir se aparecer em casa.",
  publicadoEm: "2026-08-01",
  leitura: "6 min",
  categoria: "Guia",
  secoes: [
   {
    h2: "Como identificar o escorpião amarelo",
    paragrafos: [
     "O Tityus serrulatus é claro, com pernas e cauda amarelas e corpo mais escuro. Mede 5 a 7 cm. É o escorpião mais venenoso do Brasil e o único que se reproduz sozinho (partenogênese), 1 fêmea gera colônia inteira.",
     "Se aparecer em casa, não é isolado. Existe abrigo próximo (entulho, telha, muro, ralo, mata).",
    ],
   },
   {
    h2: "O que fazer se aparecer",
    paragrafos: ["Passo a passo seguro:"],
    bullets: [
     "Não pise nem toque sem luva grossa e calçado fechado",
     "Capture com vasilha e tampa (se for possível, sem risco), leve morto para identificação",
     "Sacuda calçado, roupa e cama toda manhã",
     "Feche ralo com tampa cega abre-fecha (escorpião sobe por ralo)",
     "Elimine entulho, telha empilhada, madeira e mato alto no quintal",
    ],
   },
   {
    h2: "Em caso de picada",
    paragrafos: [
     "Vá imediatamente ao pronto-socorro. Não amarre o membro, não corte, não sugue. Se possível, leve o escorpião (morto) para identificação. Crianças, idosos e cardíacos têm risco maior, o soro precisa ser aplicado rápido.",
     "Em Curitiba, o Hospital do Trabalhador e o Hospital de Clínicas têm o soro antiescorpiônico.",
    ],
   },
   {
    h2: "Como a Ampla trata escorpião",
    paragrafos: [
     "Escorpião não morre com inseticida comum, ele se esconde e o veneno não pega. O tratamento correto envolve inspeção completa (ralos, muros, entulho, jardim, forro), aplicação em pó em frestas e tocas, vedação de ralos e orientação de eliminação de abrigo.",
     "Atendemos Curitiba e RMC com produto ANVISA, retorno em 30 dias e monitoramento.",
    ],
   },
  ],
  conclusao: "Escorpião em casa é urgência. Fale conosco pelo WhatsApp hoje, atendemos rápido em Curitiba.",
 },
 {
  slug: "como-desentupir-vaso-sanitario",
  titulo: "Como desentupir vaso sanitário (e quando chamar profissional)",
  title: "Como Desentupir Vaso Sanitário: Passo a Passo | Ampla",
  description: "Vaso sanitário entupido? Veja 5 métodos para desentupir em casa, o que evitar e quando chamar desentupidora 24h em Curitiba.",
  resumo: "Vaso entupido pode ser papel demais ou obstrução no ramal. Veja o que tentar antes e quando é hora de chamar desentupidora.",
  publicadoEm: "2026-08-03",
  leitura: "5 min",
  categoria: "Guia",
  secoes: [
   {
    h2: "5 métodos para tentar em casa",
    paragrafos: ["Do mais simples ao mais forte:"],
    bullets: [
     "Água quente (não fervendo) com detergente líquido: derrete gordura e amolece papel",
     "Desentupidor de borracha (bomba de sucção): funciona pra obstrução leve",
     "Garrafa PET cortada usada como bomba de vácuo: alternativa ao desentupidor",
     "Bicarbonato + vinagre + água quente: aliado do detergente em papel acumulado",
     "Mola de aço pra vaso (snake): resolve obstrução até uns 3 metros dentro do ramal",
    ],
   },
   {
    h2: "O que NÃO fazer",
    paragrafos: ["Erros que pioram e podem quebrar o vaso:"],
    bullets: [
     "Água fervendo direto no vaso: pode trincar a louça",
     "Soda cáustica: corrói tubulação, queima pele e não desentope obstrução sólida",
     "Ácido muriático: perigoso e ilegal jogar em esgoto",
     "Bater com pau ou vassoura: risco de furar o vaso",
    ],
   },
   {
    h2: "Sinais de que a obstrução não é no vaso",
    paragrafos: [
     "Se além do vaso a pia e o ralo do banheiro também estão entupidos ou dando refluxo, o problema é no esgoto (ramal ou caixa de inspeção), e nada de casa vai resolver. Nesse caso é hidrojateamento.",
    ],
   },
   {
    h2: "Quando chamar a Ampla",
    paragrafos: [
     "Se você tentou desentupidor 2 vezes e não resolveu, se a água sobe até o limite ou se outros pontos do banheiro estão comprometidos: chame. A Ampla atende Curitiba e RMC 24h com equipamento profissional, sem quebrar piso, com preço fechado antes do serviço.",
    ],
   },
  ],
  conclusao: "Vaso entupido não espera. Fale conosco pelo WhatsApp, atendemos em até 1h em Curitiba.",
 },
 {
  slug: "como-limpar-caixa-dagua",
  titulo: "Como limpar caixa d'água passo a passo (e quando chamar empresa)",
  title: "Como Limpar Caixa d'Água Passo a Passo | Ampla Curitiba",
  description: "Ministério da Saúde recomenda limpar caixa d'água a cada 6 meses. Veja o passo a passo correto e por que condomínio precisa do certificado técnico.",
  resumo: "Limpar caixa d'água exige processo correto pra não contaminar a água. Veja como fazer, quando precisa de empresa e por que ter certificado.",
  publicadoEm: "2026-08-05",
  leitura: "6 min",
  categoria: "Guia",
  secoes: [
   {
    h2: "Por que limpar a cada 6 meses",
    paragrafos: [
     "Água parada acumula sedimentos, algas e microorganismos que causam gastroenterite, hepatite A e outras infecções. O Ministério da Saúde (Portaria MS nº 888/2021) recomenda higienização a cada 6 meses, e para condomínios é obrigatório manter certificado atualizado para a vigilância sanitária.",
    ],
   },
   {
    h2: "Passo a passo para caixa residencial pequena",
    paragrafos: ["Se sua caixa é acessível e você tem segurança pra subir no telhado:"],
    bullets: [
     "Fechar registro de entrada, esvaziar reservando pouca água pro fundo",
     "Escovar paredes e fundo SEM sabão ou detergente (só com pano e água)",
     "Retirar sedimentos com balde ou pano",
     "Preparar solução de 1 litro de água sanitária por 1000 litros da caixa",
     "Deixar agir por 2 horas com registro fechado",
     "Enxaguar até a água sair limpa, abrir registro e reabastecer",
    ],
   },
   {
    h2: "Quando NÃO tente fazer sozinho",
    paragrafos: ["Chame empresa se:"],
    bullets: [
     "É condomínio (exige certificado técnico da vigilância)",
     "Caixa fica em local de difícil acesso ou altura sem segurança",
     "Caixa é industrial ou de grande volume (acima de 2000 litros)",
     "Última limpeza foi há mais de 2 anos (biofilme grosso, exige produto técnico)",
     "Você precisa do certificado para vigilância, síndico ou auditoria",
    ],
   },
   {
    h2: "Como a Ampla faz",
    paragrafos: [
     "Nossos técnicos fazem esvaziamento, escovação, remoção de sedimentos, desinfecção com hipoclorito na concentração correta e enxágue. Entregamos certificado válido por 6 meses, aceito por síndicos, vigilância sanitária e planos de manutenção predial.",
    ],
   },
  ],
  conclusao: "Precisa do certificado da caixa d'água? Fale conosco pelo WhatsApp, orçamento em minutos.",
 },
];

export const findPost = (slug: string) => blogPosts.find((p) => p.slug === slug);