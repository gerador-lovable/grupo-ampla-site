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
 "São José dos Pinhais conta com forte presença industrial e comercial, atendemos indústrias, condomínios e residências com equipe própria, laudo técnico e nota fiscal.",
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
 {
 slug: "fazenda-rio-grande",
 nome: "Fazenda Rio Grande",
 regiao: "PR",
 h1: "Dedetizadora e Desentupidora em Fazenda Rio Grande",
 title: "Dedetizadora Fazenda Rio Grande | Ampla 24h",
 description:
 "Dedetização e desentupimento em Fazenda Rio Grande com atendimento rápido. Ampla, 35 anos. Orçamento grátis pelo WhatsApp.",
 intro:
 "Atendemos Fazenda Rio Grande com controle de pragas, descupinização, desratização, hidrojateamento e limpeza de fossa.",
 contexto:
 "Fazenda Rio Grande é uma das cidades de expansão da Região Metropolitana de Curitiba. Trabalhamos com equipe própria, produtos ANVISA e nota fiscal em todos os serviços.",
 bairros: ["Centro", "Nações", "Eucaliptos", "Iguaçu", "Estados", "Santa Terezinha"],
 },
 {
 slug: "piraquara",
 nome: "Piraquara",
 regiao: "PR",
 h1: "Dedetizadora e Desentupidora em Piraquara",
 title: "Dedetizadora Piraquara | Ampla 24h",
 description:
 "Dedetização e desentupimento em Piraquara com atendimento rápido. Ampla, 35 anos. Orçamento grátis pelo WhatsApp.",
 intro:
 "Atendemos Piraquara com dedetização residencial, comercial e desentupimento 24h.",
 contexto:
 "Piraquara integra a Região Metropolitana de Curitiba. Fazemos controle de pragas, descupinização, desratização e limpeza de fossa com equipe própria e produtos certificados.",
 bairros: ["Centro", "Recanto Boa Vista", "Vila Fuck", "Guarituba", "Vila Militar"],
 },
 {
 slug: "quatro-barras",
 nome: "Quatro Barras",
 regiao: "PR",
 h1: "Dedetizadora e Desentupidora em Quatro Barras",
 title: "Dedetizadora Quatro Barras | Ampla 24h",
 description:
 "Dedetização e desentupimento em Quatro Barras com atendimento rápido. Ampla, 35 anos. Orçamento pelo WhatsApp.",
 intro:
 "Atendemos Quatro Barras com controle de pragas, descupinização, hidrojateamento e limpeza de fossa.",
 contexto:
 "Quatro Barras faz parte da nossa rota diária na RMC. Trabalhamos com controle de pragas urbanas e desentupimento residencial e comercial.",
 bairros: ["Centro", "Jardim das Acácias", "Menino Deus", "Borda do Campo"],
 },
 {
 slug: "almirante-tamandare",
 nome: "Almirante Tamandaré",
 regiao: "PR",
 h1: "Dedetizadora e Desentupidora em Almirante Tamandaré",
 title: "Dedetizadora Almirante Tamandaré | Ampla 24h",
 description:
 "Dedetização e desentupimento em Almirante Tamandaré com atendimento rápido. Ampla, 35 anos. Orçamento pelo WhatsApp.",
 intro:
 "Atendemos Almirante Tamandaré com controle de pragas, desratização, descupinização e desentupimento 24h.",
 contexto:
 "Almirante Tamandaré está próximo à nossa base em Colombo, o que garante tempos de resposta curtos. Executamos dedetização, hidrojateamento e limpeza de fossa com equipe própria.",
 bairros: ["Centro", "Tranqueira", "Cachoeira", "Botiatuva", "Jardim Pinheiros"],
 },
 {
 slug: "rio-branco-do-sul",
 nome: "Rio Branco do Sul",
 regiao: "PR",
 h1: "Dedetizadora e Desentupidora em Rio Branco do Sul",
 title: "Dedetizadora Rio Branco do Sul | Ampla",
 description:
 "Dedetização e desentupimento em Rio Branco do Sul. Ampla, 35 anos. Orçamento grátis pelo WhatsApp.",
 intro:
 "Atendemos Rio Branco do Sul com controle de pragas, desratização e desentupimento sob agendamento.",
 contexto:
 "Rio Branco do Sul integra nossa área de atendimento na Região Metropolitana de Curitiba. Trabalhamos com dedetização residencial, comercial e limpeza de fossa.",
 bairros: ["Centro", "Vila São José", "Botiatuva", "Serra Azul"],
 },
 {
 slug: "bocaiuva-do-sul",
 nome: "Bocaiúva do Sul",
 regiao: "PR",
 h1: "Dedetizadora e Desentupidora em Bocaiúva do Sul",
 title: "Dedetizadora Bocaiúva do Sul | Ampla",
 description:
 "Dedetização e desentupimento em Bocaiúva do Sul. Ampla, 35 anos, atendimento sob agendamento. Orçamento pelo WhatsApp.",
 intro:
 "Atendemos Bocaiúva do Sul com controle de pragas, descupinização e limpeza de fossa.",
 contexto:
 "Bocaiúva do Sul faz parte da nossa rota de atendimento na RMC. Fazemos dedetização residencial, comercial e desentupimento sob agendamento.",
 bairros: ["Centro", "Alto do Amparo", "Vila Nova", "Capivari"],
 },
 {
  slug: "contenda",
  nome: "Contenda",
  regiao: "PR",
  h1: "Dedetizadora e Desentupidora em Contenda",
  title: "Dedetizadora Contenda | Ampla",
  description:
   "Dedetização e desentupimento em Contenda. Ampla, 35 anos. Orçamento grátis pelo WhatsApp.",
  intro:
   "Atendemos Contenda com controle de pragas, descupinização e limpeza de fossa sob agendamento.",
  contexto:
   "Contenda integra nossa área de atendimento na Região Metropolitana de Curitiba. Trabalhamos com dedetização residencial, comercial e desentupimento com equipe própria e produtos certificados pela ANVISA.",
  bairros: ["Centro", "Catanduvas", "Areia Branca", "Campina dos Pintos"],
 },
 {
  slug: "balsa-nova",
  nome: "Balsa Nova",
  regiao: "PR",
  h1: "Dedetizadora e Desentupidora em Balsa Nova",
  title: "Dedetizadora Balsa Nova | Ampla",
  description:
   "Dedetização e desentupimento em Balsa Nova. Ampla, 35 anos, atendimento sob agendamento. Orçamento pelo WhatsApp.",
  intro:
   "Atendemos Balsa Nova com controle de pragas, descupinização, desratização e limpeza de fossa.",
  contexto:
   "Balsa Nova faz parte da nossa rota de atendimento na RMC. Fazemos dedetização, descupinização e desentupimento com equipe própria, laudo técnico e nota fiscal.",
  bairros: ["Centro", "São Luiz do Purunã", "Bugre", "Rodeio Grande"],
 },
 {
  slug: "mandirituba",
  nome: "Mandirituba",
  regiao: "PR",
  h1: "Dedetizadora e Desentupidora em Mandirituba",
  title: "Dedetizadora Mandirituba | Ampla",
  description:
   "Dedetização e desentupimento em Mandirituba. Ampla, 35 anos. Orçamento grátis pelo WhatsApp.",
  intro:
   "Atendemos Mandirituba com controle de pragas, descupinização e limpeza de fossa sob agendamento.",
  contexto:
   "Mandirituba integra nossa rota de atendimento na Região Metropolitana. Trabalhamos com dedetização residencial, comercial e desentupimento com equipe própria e produtos ANVISA.",
  bairros: ["Centro", "Areia Branca", "Quississana", "Rio Pequeno"],
 },
 {
  slug: "tijucas-do-sul",
  nome: "Tijucas do Sul",
  regiao: "PR",
  h1: "Dedetizadora e Desentupidora em Tijucas do Sul",
  title: "Dedetizadora Tijucas do Sul | Ampla",
  description:
   "Dedetização e desentupimento em Tijucas do Sul. Ampla, 35 anos, atendimento sob agendamento. Orçamento pelo WhatsApp.",
  intro:
   "Atendemos Tijucas do Sul com controle de pragas, descupinização e limpeza de fossa.",
  contexto:
   "Tijucas do Sul faz parte da nossa área de atendimento na RMC. Fazemos dedetização residencial, comercial, controle de escorpião e desentupimento sob agendamento, com laudo técnico e nota fiscal.",
  bairros: ["Centro", "Postinho", "Vossoroca", "Rio da Várzea"],
 },
 {
  slug: "agudos-do-sul",
  nome: "Agudos do Sul",
  regiao: "PR",
  h1: "Dedetizadora e Desentupidora em Agudos do Sul",
  title: "Dedetizadora Agudos do Sul | Ampla",
  description:
   "Dedetização e desentupimento em Agudos do Sul. Ampla, 35 anos. Orçamento grátis pelo WhatsApp.",
  intro:
   "Atendemos Agudos do Sul com controle de pragas, descupinização e limpeza de fossa sob agendamento.",
  contexto:
   "Agudos do Sul integra nossa rota de atendimento na Região Metropolitana. Trabalhamos com dedetização residencial e comercial com produtos ANVISA, equipe própria e nota fiscal.",
  bairros: ["Centro", "Turvo", "Poço Grande", "Serra do Facão"],
 },
];

export const findCidade = (slug: string) => cidades.find((c) => c.slug === slug);