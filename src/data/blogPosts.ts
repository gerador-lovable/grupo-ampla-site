export interface BlogPost {
 slug: string;
 titulo: string;
 title: string;
 description: string;
 resumo: string;
 publicadoEm: string;
 atualizadoEm?: string;
 leitura: string;
 categoria: string;
 secoes: { h2: string; paragrafos: string[]; bullets?: string[] }[];
 conclusao: string;
 faqs?: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
 {
 slug: "quanto-custa-dedetizacao-curitiba",
 titulo: "Como funciona o orçamento de dedetização em Curitiba",
 title: "Orçamento de Dedetização em Curitiba: Como Funciona | Ampla",
 description:
 "Entenda o que influencia o orçamento de uma dedetização em Curitiba: metragem, tipo de praga, método aplicado e o que exigir de qualquer empresa séria.",
 resumo:
 "O orçamento de dedetização depende de vários fatores. Veja o que muda o valor e o que exigir antes de fechar o serviço.",
 publicadoEm: "2026-07-01",
 leitura: "6 min",
 categoria: "Orçamento",
 secoes: [
 {
 h2: "Como o orçamento é calculado",
 paragrafos: [
 "Toda dedetização é única. Em Curitiba, o valor de cada serviço leva em conta a metragem do imóvel, o tipo de praga, o grau de infestação e o método técnico mais indicado para o caso.",
 "Por isso, empresas sérias não trabalham com tabela pronta: enviamos o orçamento formal e fechado antes de qualquer aplicação, sem custo e sem obrigação de contratar.",
 ],
 },
 {
 h2: "O que influencia o valor",
 paragrafos: ["Cinco fatores explicam a maior parte da variação do orçamento:"],
 bullets: [
 "Área total do imóvel (m²)",
 "Tipo de praga (baratas, cupim, ratos, escorpião etc.)",
 "Grau de infestação",
 "Método aplicado (gel, pulverização, iscas, hidrojato)",
 "Necessidade de laudo técnico (comercial/industrial)",
 ],
 },
 {
 h2: "Cuidado com orçamentos muito baixos",
 paragrafos: [
 "Valores muito abaixo da média costumam significar produto vencido, sem registro ANVISA, sem garantia ou aplicação incompleta. Sempre exija: registro da empresa, nota fiscal e garantia por escrito.",
 ],
 },
 ],
 conclusao: "Peça um orçamento grátis pelo WhatsApp, respondemos em minutos com valor fechado e sem compromisso.",
 },
 {
 slug: "quanto-custa-desentupimento-curitiba",
 titulo: "Orçamento de desentupimento em Curitiba: como é feito",
 title: "Orçamento de Desentupimento em Curitiba | Ampla",
 description:
 "Como é feito o orçamento de desentupimento em Curitiba: pia, vaso, esgoto, hidrojateamento e limpeza de fossa. Entenda o que muda o valor.",
 resumo:
 "O orçamento de desentupimento varia por ponto e equipamento. Veja o que impacta o valor e o que exigir antes de contratar.",
 publicadoEm: "2026-07-05",
 leitura: "5 min",
 categoria: "Orçamento",
 secoes: [
 {
 h2: "Tipos de serviço mais comuns",
 paragrafos: ["Cada ponto exige equipamento e tempo diferentes. Estes são os chamados mais frequentes em Curitiba:"],
 bullets: [
 "Desentupimento de pia (cozinha e banheiro)",
 "Desentupimento de vaso sanitário",
 "Desentupimento de esgoto e ramais",
 "Hidrojateamento de tubulações longas",
 "Limpeza de fossa por caminhão vácuo",
 ],
 },
 {
 h2: "Fatores que influenciam o orçamento",
 paragrafos: ["Alguns pontos fazem o valor variar de um chamado para o outro:"],
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
 "Peça sempre orçamento formal antes do início do serviço, com valor fechado. Fuja de empresas que só passam o valor 'no local' ou cobram taxa de visita.",
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
     "Se você tentou desentupidor 2 vezes e não resolveu, se a água sobe até o limite ou se outros pontos do banheiro estão comprometidos: chame. A Ampla atende Curitiba e RMC 24h com equipamento profissional, sem quebrar piso, com orçamento fechado antes do serviço.",
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
  {
   slug: "esgoto-voltando-pelo-ralo-o-que-fazer",
   titulo: "Esgoto voltando pelo ralo: o que fazer agora",
   title: "Esgoto Voltando pelo Ralo: O Que Fazer Agora | Ampla Curitiba",
   description: "Esgoto retornando pelo ralo do banheiro ou cozinha? Veja causas, primeiros passos seguros e quando chamar desentupidora 24h em Curitiba.",
   resumo: "Água escura ou mau cheiro subindo pelo ralo é sinal de esgoto obstruído. Veja como agir sem piorar a situação.",
   publicadoEm: "2026-07-22",
   atualizadoEm: "2026-07-22",
   leitura: "5 min",
   categoria: "Emergência",
   secoes: [
    {
     h2: "Por que o esgoto volta pelo ralo",
     paragrafos: [
      "Quando o ralo do box, da pia ou o vaso libera água escura, esponjosa ou com cheiro forte, o problema quase nunca está no ralo em si, está mais adiante na tubulação. A causa mais comum é obstrução no ramal de esgoto do imóvel ou na rede coletiva do prédio.",
      "Em Curitiba, principalmente em bairros de topografia baixa e em dias de chuva forte, também acontece de a rede pública ficar sobrecarregada e o retorno subir para o imóvel mais baixo do prédio.",
     ],
    },
    {
     h2: "O que fazer nos primeiros 10 minutos",
     paragrafos: ["Antes de chamar a desentupidora, três medidas evitam prejuízo maior:"],
     bullets: [
      "Feche o registro de água do imóvel para não aumentar o volume de esgoto",
      "Não jogue produto químico caseiro (soda, ácido), pode danificar tubos de PVC e agravar o entupimento",
      "Tampe outros ralos com pano molhado para conter o retorno em um único ponto",
     ],
    },
    {
     h2: "Quando chamar a desentupidora 24h",
     paragrafos: [
      "Se o retorno persiste depois de fechar a água, se há vários pontos com refluxo ao mesmo tempo ou se há cheiro de esgoto por toda a casa, a obstrução é séria e exige equipamento profissional (mola motorizada ou hidrojateamento).",
      "A Ampla atende Curitiba e Região Metropolitana 24 horas, com técnico no endereço em até 2 horas para emergências como essa.",
     ],
    },
   ],
   faqs: [
    { q: "Posso usar desentupidor de borracha?", a: "Sim, no ralo da pia ou do banheiro pode ajudar em entupimentos leves. Se a água voltar de novo em minutos, a obstrução está no ramal, precisa de equipamento profissional." },
    { q: "É perigoso deixar esgoto voltando durante a noite?", a: "Sim. Além do risco de contaminação e mau cheiro, o refluxo pode danificar piso, rodapé e móveis. Vale ligar para uma desentupidora 24h no mesmo dia." },
   ],
   conclusao: "Esgoto voltando é emergência, ligue agora pelo WhatsApp e enviamos técnico em minutos.",
  },
  {
   slug: "rato-no-telhado-como-eliminar",
   titulo: "Rato no telhado: como eliminar sem subir no forro",
   title: "Rato no Telhado: Como Eliminar Sem Subir no Forro | Ampla",
   description: "Ouve barulho de rato no telhado ou forro? Veja como identificar a espécie, o método técnico de controle e por que armadilha caseira não resolve.",
   resumo: "Barulho de arranhado à noite no telhado costuma ser rato de telhado. Veja o método técnico que resolve de verdade.",
   publicadoEm: "2026-07-22",
   atualizadoEm: "2026-07-22",
   leitura: "5 min",
   categoria: "Roedores",
   secoes: [
    {
     h2: "É rato mesmo? Como confirmar",
     paragrafos: [
      "O rato de telhado (Rattus rattus) é o mais comum em forros e beirais em Curitiba. Ele é ágil, sobe em fiação, entra por telha quebrada, cumeeira aberta ou beiral sem tela. Faz ninho em isolamento térmico e come tudo que encontra.",
     ],
     bullets: [
      "Barulho de arranhado ou corrida no forro, principalmente à noite",
      "Fezes escuras alongadas em cima de gesso, caixa d'água ou telha",
      "Fios de alta e baixa tensão roídos (risco de curto e incêndio)",
      "Cheiro forte de urina em cômodo próximo à caixa d'água",
     ],
    },
    {
     h2: "Por que armadilha caseira não resolve",
     paragrafos: [
      "Ratoeira, veneno de mercado e ultrassônico até pegam um ou outro, mas não interrompem a colônia. Sem vedar os acessos e sem porta-iscas técnica em pontos de passagem, o problema volta em semanas.",
      "Pior: veneno de mercado sem cápsula faz o rato morrer no forro, gerando cheiro forte por semanas e atraindo moscas.",
     ],
    },
    {
     h2: "Como a Ampla trata rato no telhado",
     paragrafos: [
      "Nosso protocolo tem três etapas: inspeção do forro e do perímetro, vedação de pontos de entrada (telha, beiral, cumeeira, saída de exaustor) e instalação de porta-iscas lacrados em pontos de passagem, com iscas de anticoagulante técnico registrado ANVISA que faz o rato buscar água antes de morrer, evitando cadáver no forro.",
      "Emitimos laudo técnico e certificado válido para vigilância e síndico. Garantia de 6 meses.",
     ],
    },
   ],
   faqs: [
    { q: "Preciso liberar acesso ao forro?", a: "Sim, o técnico precisa inspecionar o forro para achar ninho, pontos de entrada e definir onde colocar os porta-iscas." },
    { q: "Meu pet corre risco?", a: "Não. Trabalhamos com porta-iscas lacrados, cachorro e gato não conseguem acessar o veneno." },
   ],
   conclusao: "Barulho de rato no telhado não some sozinho. Solicite orçamento pelo WhatsApp e visita técnica no mesmo dia.",
  },
  {
   slug: "quanto-tempo-dura-uma-dedetizacao",
   titulo: "Quanto tempo dura uma dedetização?",
   title: "Quanto Tempo Dura Uma Dedetização? Guia Completo | Ampla",
   description: "Descubra por quanto tempo dura o efeito de uma dedetização, o que reduz esse prazo e quando repetir para manter o imóvel livre de pragas.",
   resumo: "Uma dedetização bem feita protege por meses, mas o prazo muda por praga, ambiente e método. Veja o que esperar.",
   publicadoEm: "2026-07-22",
   atualizadoEm: "2026-07-22",
   leitura: "4 min",
   categoria: "Dedetização",
   secoes: [
    {
     h2: "Prazo médio por tipo de praga",
     paragrafos: ["O tempo de proteção varia conforme o produto, a praga e o ambiente:"],
     bullets: [
      "Baratas (gel + pulverização): 3 a 6 meses",
      "Formigas: 4 a 6 meses",
      "Ratos (porta-isca técnica): manutenção contínua, revisão a cada 60 dias",
      "Cupim de madeira (imunização): 5 anos com produto certificado",
      "Cupim de solo (barreira química): 5 a 10 anos",
      "Escorpião: 3 meses (área externa exige reforço trimestral)",
     ],
    },
    {
     h2: "O que reduz o efeito antes do prazo",
     paragrafos: ["Alguns fatores fazem a proteção acabar mais rápido:"],
     bullets: [
      "Lavagem forte de piso com água e sabão nos primeiros dias (dilui o produto)",
      "Umidade excessiva e vazamentos que não foram corrigidos",
      "Vizinhança com infestação ativa (baratas migram)",
      "Uso de inseticida de mercado logo depois (repele o produto profissional)",
     ],
    },
    {
     h2: "Plano preventivo: quando faz sentido",
     paragrafos: [
      "Para imóveis comerciais, restaurantes, condomínios e casas com histórico de infestação, o plano trimestral é mais barato do que a soma de dedetizações avulsas e mantém a garantia contínua.",
     ],
    },
   ],
   faqs: [
    { q: "Preciso repetir mesmo se não vi mais pragas?", a: "Sim, o produto perde efeito gradualmente. Reaplicar dentro do prazo evita nova infestação instalar." },
    { q: "A garantia da Ampla dura quanto?", a: "6 meses por escrito. Se aparecer a mesma praga no prazo, voltamos sem custo." },
   ],
   conclusao: "Quer manter seu imóvel protegido o ano inteiro? Fale conosco no WhatsApp e monte um plano preventivo.",
  },
  {
   slug: "precisa-sair-de-casa-apos-dedetizacao",
   titulo: "Precisa sair de casa depois da dedetização?",
   title: "Precisa Sair de Casa Após Dedetização? Prazo Seguro | Ampla",
   description: "Depois da dedetização é preciso sair de casa? Veja o tempo real de reentrada, o que fazer com pets, crianças e alimentos, e o que a ANVISA exige.",
   resumo: "A resposta curta: sim, mas por pouco tempo, e o prazo depende do produto e da praga. Veja o guia completo.",
   publicadoEm: "2026-07-22",
   atualizadoEm: "2026-07-22",
   leitura: "4 min",
   categoria: "Dedetização",
   secoes: [
    {
     h2: "Prazo médio de reentrada",
     paragrafos: [
      "Com produtos profissionais registrados na ANVISA aplicados corretamente, o prazo de segurança para reentrada varia entre 2 e 4 horas depois da aplicação. Esse tempo permite que a névoa de produto se assente e que o solvente evapore.",
      "Para dedetização só com gel (comum em cozinha de apartamento), o prazo é ainda menor: cerca de 30 minutos, já que o produto não é pulverizado no ambiente.",
     ],
    },
    {
     h2: "Pets, crianças e idosos",
     paragrafos: [
      "O prazo é o mesmo, mas recomendamos deixar por até 4 horas para casas com bebê, gato, cachorro pequeno ou pessoa com sensibilidade respiratória. Passado esse tempo, o ambiente é totalmente seguro.",
     ],
     bullets: [
      "Retire ração e água do pet antes da aplicação, reponha ao voltar",
      "Guarde brinquedo de bebê que fica no chão em armário fechado",
      "Cubra o aquário e desligue a bomba de ar durante a aplicação",
     ],
    },
    {
     h2: "Alimentos e utensílios",
     paragrafos: [
      "Alimentos em embalagem lacrada, geladeira ou freezer não precisam sair. Alimentos abertos e utensílios em cima da bancada devem ser guardados em armário fechado. Ao voltar, basta passar pano úmido nas superfícies que ficam em contato com comida.",
     ],
    },
   ],
   faqs: [
    { q: "Posso voltar antes se o cheiro sumiu?", a: "Não. O cheiro é um marcador, mas o prazo técnico depende do produto. Respeite as 2 a 4 horas indicadas pelo técnico." },
    { q: "Preciso lavar tudo depois?", a: "Não. Basta pano úmido em bancada e mesa. Não lave o piso nos primeiros 7 dias, isso reduz a eficácia do produto." },
   ],
   conclusao: "Quer entender o passo a passo antes de contratar? Fale conosco pelo WhatsApp, tiramos suas dúvidas em minutos.",
  },
  {
   slug: "preco-dedetizacao-apartamento-curitiba",
   titulo: "Dedetização em apartamento em Curitiba: como funciona o orçamento",
   title: "Dedetização em Apartamento em Curitiba: Como Funciona | Ampla",
   description: "Como funciona o orçamento de dedetização em apartamento em Curitiba: o que muda por metragem, tipo de praga e o que exigir de qualquer empresa.",
   resumo: "O valor varia por metragem, praga e método. Veja o que muda o orçamento e o que exigir antes de fechar.",
   publicadoEm: "2026-07-22",
   atualizadoEm: "2026-07-22",
   leitura: "5 min",
   categoria: "Orçamento",
   secoes: [
    {
      h2: "O que muda o orçamento por apartamento",
      paragrafos: ["Cada apartamento em Curitiba tem uma combinação diferente destes fatores, e é isso que define o orçamento:"],
      bullets: [
       "Metragem total do imóvel",
       "Tipo e quantidade de pragas presentes",
       "Necessidade de tratar áreas externas (sacada, box, área de serviço)",
       "Reincidência ou primeira aplicação",
       "Urgência (mesmo dia ou agendado)",
      ],
    },
    {
     h2: "O que deve estar incluso no valor",
      paragrafos: ["Orçamento muito abaixo da média costuma esconder cortes que aparecem depois:"],
     bullets: [
      "Vistoria antes da aplicação (não é opcional)",
      "Produto registrado na ANVISA, com nota fiscal do produto",
      "Aplicação em cozinha, área de serviço, banheiros e ralos",
      "Certificado com data, produto usado e assinatura do responsável técnico",
      "Garantia por escrito de no mínimo 3 meses (Ampla dá 6)",
     ],
    },
    {
      h2: "Sinal de risco: orçamento muito baixo",
     paragrafos: [
       "Se um orçamento vier muito abaixo do que outras empresas sérias praticam, provavelmente falta uma dessas coisas: registro ANVISA da empresa, produto certificado, técnico responsável ou garantia. O barato aqui sai caro, aplicar produto errado em apartamento pode gerar reclamação de vizinho e até multa de condomínio.",
     ],
    },
   ],
   faqs: [
     { q: "O orçamento muda se tiver mais de uma praga?", a: "Depende. Baratas e formigas juntas cabem no mesmo protocolo. Cupim ou rato exige método próprio e entra como item extra." },
    { q: "Emitem nota fiscal para reembolso pelo condomínio?", a: "Sim, todos os serviços saem com nota fiscal e certificado nominal, aceitos por síndico e vigilância." },
   ],
   conclusao: "Quer o orçamento exato para o seu apartamento? Nos envie a metragem no WhatsApp e respondemos em minutos.",
  },
  {
   slug: "cupim-apareceu-do-nada-o-que-fazer",
   titulo: "Cupim apareceu do nada: o que fazer",
   title: "Cupim Apareceu do Nada em Casa: O Que Fazer | Ampla",
   description: "Descobriu cupim de repente em móvel, batente ou parede? Veja o passo a passo do que fazer e o que NÃO fazer para não espalhar a infestação.",
   resumo: "Nuvem de cupins alados ou pó fino em móvel é sinal de infestação já instalada. Veja como agir sem espalhar.",
   publicadoEm: "2026-07-22",
   atualizadoEm: "2026-07-22",
   leitura: "5 min",
   categoria: "Cupim",
   secoes: [
    {
     h2: "Por que parece que apareceu do nada",
     paragrafos: [
      "Cupim raramente aparece de um dia para o outro, a colônia estava lá há meses ou anos, escondida dentro da madeira ou do reboco. O que aparece de repente é a revoada de cupins alados (aleluias) em época de calor com umidade, ou o pó fino de madeira caindo embaixo de rodapé, batente e móvel.",
     ],
    },
    {
     h2: "O que NÃO fazer",
     paragrafos: ["Alguns erros comuns espalham a colônia para o resto do imóvel:"],
     bullets: [
      "Jogar veneno de mercado direto no furinho (espanta o cupim, cria colônia satélite)",
      "Passar verniz ou tinta para tampar (mascara, colônia continua comendo por dentro)",
      "Trocar só o móvel afetado sem tratar o restante",
      "Aspirar aleluias e ignorar (elas saem de uma colônia que continua ali)",
     ],
    },
    {
     h2: "O que fazer no mesmo dia",
     paragrafos: [
      "Isolar o móvel afetado se possível, guardar amostra do pó ou do cupim para o técnico identificar a espécie, e agendar vistoria. A Ampla faz descupinização com injeção de produto direto no ninho e barreira química, com garantia de 5 anos por escrito.",
     ],
    },
   ],
   faqs: [
    { q: "Preciso mudar o móvel do lugar?", a: "Não. O técnico avalia se dá para tratar no local. Mudar antes pode espalhar a colônia." },
    { q: "Cupim de madeira vira cupim de solo?", a: "São espécies diferentes. Mas ter uma facilita a entrada da outra, o tratamento certo cobre as duas vias." },
   ],
   conclusao: "Achou cupim? Não espere piorar. Solicite vistoria pelo WhatsApp e tratamos com garantia de 5 anos.",
  },
  {
   slug: "dedetizacao-em-condominio-e-obrigatoria",
   titulo: "Dedetização em condomínio é obrigatória?",
   title: "Dedetização em Condomínio é Obrigatória? Lei e Prazos | Ampla",
   description: "Síndico é obrigado a fazer dedetização? Veja o que a lei e a vigilância sanitária exigem em Curitiba, prazo, laudo e responsabilidade.",
   resumo: "Sim, e o prazo é mais curto do que muitos síndicos imaginam. Veja a norma e como se proteger de multa.",
   publicadoEm: "2026-07-22",
   atualizadoEm: "2026-07-22",
   leitura: "5 min",
   categoria: "Condomínio",
   secoes: [
    {
     h2: "O que a norma diz",
     paragrafos: [
      "A RDC 52/2009 da ANVISA regula empresas de dedetização e controle de vetores. Já a legislação municipal de Curitiba, seguindo o Código Sanitário Estadual do Paraná, obriga o síndico a manter o condomínio livre de pragas urbanas, com controle periódico documentado.",
      "Na prática, o síndico responde civil e criminalmente por surto de rato, barata ou escorpião em área comum causado por falta de controle preventivo.",
     ],
    },
    {
     h2: "Prazo recomendado",
     paragrafos: ["A frequência depende do porte e da localização, mas o mercado trabalha com:"],
     bullets: [
      "Dedetização geral em áreas comuns: a cada 3 a 6 meses",
      "Desratização com porta-iscas monitoradas: revisão a cada 60 dias",
      "Limpeza de caixa d'água: a cada 6 meses (obrigatório em Curitiba)",
      "Controle de escorpião em condomínios da região sul/leste de Curitiba: reforço trimestral",
     ],
    },
    {
     h2: "Documentos que o síndico deve guardar",
     paragrafos: ["Em fiscalização da vigilância, o síndico precisa apresentar:"],
     bullets: [
      "Nota fiscal do serviço",
      "Certificado com data, produto e responsável técnico",
      "Laudo técnico com mapa de porta-iscas e áreas tratadas",
      "Alvará da empresa contratada",
     ],
    },
   ],
   faqs: [
    { q: "O condomínio precisa avisar os moradores?", a: "Sim, com antecedência mínima de 48 horas, informando data, horário e produto usado, para pessoas com sensibilidade e donos de pet." },
    { q: "Ampla emite todos esses documentos?", a: "Sim. Todo serviço em condomínio sai com nota, certificado, laudo e alvará em nome do condomínio, prontos para vigilância." },
   ],
   conclusao: "É síndico e precisa regularizar? Fale com a Ampla pelo WhatsApp, montamos plano de manutenção com laudo mensal.",
  },
  {
   slug: "quem-pode-emitir-laudo-de-dedetizacao",
   titulo: "Quem pode emitir laudo de dedetização?",
   title: "Quem Pode Emitir Laudo de Dedetização? Responsável Técnico | Ampla",
   description: "Só empresa registrada na ANVISA e com responsável técnico habilitado pode emitir laudo de dedetização válido. Veja o que checar antes de contratar.",
   resumo: "Laudo sem responsável técnico habilitado não vale para vigilância. Veja quem pode assinar e o que o documento precisa ter.",
   publicadoEm: "2026-07-22",
   atualizadoEm: "2026-07-22",
   leitura: "4 min",
   categoria: "Documentação",
   secoes: [
    {
     h2: "Quem é o responsável técnico",
     paragrafos: [
      "A RDC 52/2009 exige que toda empresa de controle de vetores e pragas urbanas tenha um responsável técnico habilitado, que pode ser: biólogo, engenheiro agrônomo, engenheiro florestal, farmacêutico ou químico, com registro ativo no respectivo conselho de classe (CRBio, CREA, CRF, CRQ).",
      "Esse profissional é quem assina o laudo técnico. Sem essa assinatura, o documento não tem validade para vigilância sanitária, ONA, ISO ou plano de manutenção condominial.",
     ],
    },
    {
     h2: "O que o laudo válido precisa ter",
     paragrafos: ["Um laudo aceito por auditoria e vigilância inclui:"],
     bullets: [
      "Razão social, CNPJ e alvará sanitário da empresa",
      "Nome, formação e número de registro do responsável técnico",
      "Data, endereço tratado e áreas cobertas",
      "Produtos usados, número do registro ANVISA e concentração",
      "Mapa de porta-iscas ou pontos de aplicação (quando aplicável)",
      "Assinatura física ou digital ICP-Brasil do responsável técnico",
     ],
    },
    {
     h2: "Como confirmar que a empresa está regular",
     paragrafos: [
      "Peça o alvará sanitário (é público) e confirme o registro do responsável técnico no site do conselho de classe. A Ampla envia esses documentos junto do orçamento, sem burocracia.",
     ],
    },
   ],
   faqs: [
    { q: "Técnico aplicador pode assinar o laudo?", a: "Não. O aplicador executa, mas quem assina é o responsável técnico habilitado da empresa." },
    { q: "Laudo digital vale igual ao impresso?", a: "Sim, desde que tenha assinatura digital com certificado ICP-Brasil." },
   ],
   conclusao: "Precisa de laudo aceito por vigilância ou auditoria? Fale com a Ampla no WhatsApp, emitimos com responsável técnico registrado.",
  },
  {
   slug: "dedetizadora-com-nota-fiscal-e-certificado",
   titulo: "Dedetizadora com nota fiscal e certificado: por que exigir",
   title: "Dedetizadora com Nota Fiscal e Certificado em Curitiba | Ampla",
   description: "Contratar dedetizadora sem nota fiscal e certificado gera risco de multa, perda de garantia e reembolso negado. Veja como confirmar antes de fechar.",
   resumo: "Sem nota e certificado, o serviço não vale para vigilância, síndico nem reembolso. Veja o que checar antes.",
   publicadoEm: "2026-07-22",
   atualizadoEm: "2026-07-22",
   leitura: "4 min",
   categoria: "Documentação",
   secoes: [
    {
     h2: "Por que o documento importa",
     paragrafos: [
      "Serviço pago sem nota fiscal é serviço que não existe legalmente. Se aparecer um problema depois, não há como acionar garantia, exigir reparo ou pedir reembolso pelo condomínio ou pelo plano de saúde ocupacional (no caso de comércios).",
      "Certificado é o documento técnico que comprova o que foi aplicado, quando e por quem. Sem ele, vigilância sanitária pode multar o estabelecimento, e síndico não consegue justificar o gasto na assembleia.",
     ],
    },
    {
     h2: "Checklist antes de fechar",
     paragrafos: ["Antes de aceitar o orçamento, confirme por escrito:"],
     bullets: [
      "Emite nota fiscal em nome de pessoa física ou jurídica",
      "Entrega certificado com produto, data e responsável técnico",
      "Tem alvará sanitário municipal em dia",
      "Dá garantia por escrito de no mínimo 3 meses (Ampla dá 6)",
      "Aceita pagamento em Pix, cartão e boleto (não só dinheiro na hora)",
     ],
    },
    {
     h2: "Como funciona na Ampla",
     paragrafos: [
      "Todo serviço da Ampla sai com nota fiscal enviada por e-mail, certificado impresso ou digital com assinatura do responsável técnico e garantia de 6 meses. Sem burocracia, sem cobrar extra por documentação.",
     ],
    },
   ],
   faqs: [
    { q: "Dedetização pessoa física precisa de nota?", a: "Sim. A nota vale como comprovação de garantia e para reembolso no condomínio (se for infestação em área comum vinda de vizinho)." },
    { q: "Certificado tem prazo de validade?", a: "Sim, igual ao prazo da garantia. Serve como comprovante para vigilância e vistoria durante esse período." },
   ],
   conclusao: "Contratar dedetizadora séria começa antes do serviço. Fale com a Ampla pelo WhatsApp e receba orçamento com nota e certificado inclusos.",
  },
];

export const findPost = (slug: string) => blogPosts.find((p) => p.slug === slug);