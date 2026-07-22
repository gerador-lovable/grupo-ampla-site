export interface Cidade {
  slug: string;
  nome: string;
  regiao: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  bairros: string[];
  contexto: string;
}

export const cidades: Cidade[] = [
  {
    slug: "curitiba",
    nome: "Curitiba",
    regiao: "PR",
    h1: "Dedetizadora e Desentupidora em Curitiba",
    title: "Dedetizadora e Desentupidora em Curitiba | Ampla 35 Anos",
    description:
      "Dedetização e desentupimento em Curitiba com atendimento 24h, 35 anos de experiência e produtos ANVISA. Orçamento grátis pelo WhatsApp.",
    intro:
      "Ampla atende toda Curitiba com serviços de dedetização e desentupimento. Equipe própria, atendimento 24h e garantia em todos os serviços.",
    contexto:
      "Atendemos todos os bairros de Curitiba, do Centro à CIC, com técnicos treinados e produtos registrados na ANVISA. Somos referência local há 35 anos em controle de pragas urbanas, descupinização, desratização e desobstrução de esgoto.",
    bairros: [
      "Batel", "Água Verde", "Centro", "Boqueirão", "Portão", "CIC", "Cajuru",
      "Santa Felicidade", "Bacacheri", "Sítio Cercado", "Pinheirinho", "Uberaba",
    ],
  },
  {
    slug: "pinhais",
    nome: "Pinhais",
    regiao: "PR",
    h1: "Dedetizadora e Desentupidora em Pinhais",
    title: "Dedetizadora e Desentupidora em Pinhais | Ampla 24h",
    description:
      "Dedetização e desentupimento em Pinhais com atendimento em até 2h. Empresa Ampla, 35 anos de experiência. Orçamento grátis pelo WhatsApp.",
    intro:
      "Atendemos Pinhais com dedetização residencial, comercial e desentupimento 24h. Equipe local, resposta rápida e garantia.",
    contexto:
      "Pinhais está entre nossas cidades de atendimento diário na Região Metropolitana de Curitiba. Trabalhamos com controle de pragas, descupinização, desratização, hidrojateamento e limpeza de fossa em toda a cidade.",
    bairros: ["Centro", "Weissópolis", "Vargem Grande", "Jardim Karla", "Emiliano Perneta", "Alto Tarumã"],
  },
  {
    slug: "colombo",
    nome: "Colombo",
    regiao: "PR",
    h1: "Dedetizadora e Desentupidora em Colombo",
    title: "Dedetizadora e Desentupidora em Colombo | Ampla 35 Anos",
    description:
      "Dedetização e desentupimento em Colombo com atendimento rápido. Ampla é referência local há 35 anos. Orçamento grátis pelo WhatsApp.",
    intro:
      "Colombo é nossa cidade sede: base operacional da Ampla há 35 anos. Atendemos com prioridade em toda a cidade.",
    contexto:
      "Nossa central fica em Colombo, o que garante os menores tempos de resposta em toda a cidade. Executamos dedetização, descupinização, desratização, desentupimento 24h e limpeza de fossa com equipe própria.",
    bairros: ["Centro", "Guaraituba", "Maracanã", "Osasco", "São Gabriel", "Roça Grande", "Rio Verde"],
  },
  {
    slug: "sao-jose-dos-pinhais",
    nome: "São José dos Pinhais",
    regiao: "PR",
    h1: "Dedetizadora e Desentupidora em São José dos Pinhais",
    title: "Dedetizadora e Desentupidora em São José dos Pinhais | Ampla",
    description:
      "Dedetização e desentupimento em São José dos Pinhais 24h. Empresa Ampla, atendimento residencial, comercial e industrial. Orçamento grátis.",
    intro:
      "Atendemos São José dos Pinhais com serviços completos de controle de pragas, desentupimento e limpeza de fossa.",
    contexto:
      "São José dos Pinhais conta com forte presença industrial e comercial — atendemos indústrias, condomínios e residências com equipe própria, laudo técnico e nota fiscal.",
    bairros: ["Centro", "Afonso Pena", "Boneca do Iguaçu", "Braga", "Cidade Jardim", "Cristal", "Ipê", "Ouro Fino"],
  },
  {
    slug: "araucaria",
    nome: "Araucária",
    regiao: "PR",
    h1: "Dedetizadora e Desentupidora em Araucária",
    title: "Dedetizadora e Desentupidora em Araucária | Ampla",
    description:
      "Dedetização, descupinização e desentupimento em Araucária. Atendimento residencial, comercial e industrial. Ampla, 35 anos. Orçamento pelo WhatsApp.",
    intro:
      "Atendemos Araucária com serviços de dedetização, descupinização, desratização e desentupimento 24h.",
    contexto:
      "Araucária integra nossa rota de atendimento diário. Trabalhamos com indústrias, residências e comércio, com laudo técnico e produtos certificados pela ANVISA.",
    bairros: ["Centro", "Fazenda Velha", "Iguaçu", "Sabiá", "Boqueirão", "Passaúna", "Tindiquera"],
  },
  {
    slug: "campo-largo",
    nome: "Campo Largo",
    regiao: "PR",
    h1: "Dedetizadora e Desentupidora em Campo Largo",
    title: "Dedetizadora e Desentupidora em Campo Largo | Ampla",
    description:
      "Dedetização e desentupimento em Campo Largo com atendimento rápido. Ampla, 35 anos de experiência. Orçamento grátis pelo WhatsApp.",
    intro:
      "Atendemos Campo Largo com dedetização residencial, comercial e desentupimento 24h.",
    contexto:
      "Campo Largo faz parte da nossa área de atendimento diário. Executamos controle de pragas, descupinização, desratização, hidrojateamento e limpeza de fossa com equipe própria.",
    bairros: ["Centro", "Rondinha", "Cercadinho", "Ferraria", "Vila Solene", "Jardim Bandeirantes"],
  },
];

export const findCidade = (slug: string) => cidades.find((c) => c.slug === slug);