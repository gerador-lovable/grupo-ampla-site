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
          "Descupinização e tratamentos com barreira química no solo têm faixa própria — normalmente entre R$ 25 e R$ 60 por m² tratado.",
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
    conclusao: "Peça um orçamento grátis pelo WhatsApp — respondemos em minutos com preço fechado.",
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
          "O cupim de madeira seca ataca móveis, batentes e forros. O cupim subterrâneo vem do solo e sobe por dentro das paredes — é o mais destrutivo. O tratamento é diferente para cada tipo.",
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
];

export const findPost = (slug: string) => blogPosts.find((p) => p.slug === slug);