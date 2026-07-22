export interface Bairro {
 slug: string;
 nome: string;
 cidade: string;
 cidadeSlug: string;
 h1: string;
 title: string;
 description: string;
 intro: string;
 contexto: string;
 vizinhos: string[];
 tag: string; // tag used for depoimentos filter
}

export const bairros: Bairro[] = [
 {
 slug: "batel",
 nome: "Batel",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Batel, Curitiba",
 title: "Dedetizadora no Batel, Curitiba | Ampla 35 Anos",
 description:
 "Dedetização e desentupimento no Batel, Curitiba. Atendimento rápido, produtos ANVISA e garantia. Orçamento grátis pelo WhatsApp.",
 intro:
 "Atendemos apartamentos, escritórios, restaurantes e comércios do Batel com dedetização e desentupimento 24h.",
 contexto:
 "O Batel é uma das regiões de maior densidade comercial de Curitiba. Trabalhamos com controle de baratas, ratos e formigas em prédios residenciais, e com desentupimento e limpeza de caixas de gordura em restaurantes e comércios do bairro.",
 vizinhos: ["Água Verde", "Centro", "Bigorrilho", "Rebouças"],
 tag: "batel",
 },
 {
 slug: "agua-verde",
 nome: "Água Verde",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Água Verde, Curitiba",
 title: "Dedetizadora Água Verde Curitiba | Ampla 24h",
 description:
 "Dedetização e desentupimento no Água Verde, Curitiba. Equipe própria, produtos ANVISA, atendimento 24h. Orçamento grátis pelo WhatsApp.",
 intro:
 "Ampla atende o Água Verde com dedetização residencial, controle de pragas em condomínios e desentupimento emergencial.",
 contexto:
 "O Água Verde tem alta concentração de prédios residenciais. Fazemos dedetização com produtos sem cheiro, seguros para crianças e pets, e desentupimento de esgoto e pia em regime de urgência 24h.",
 vizinhos: ["Batel", "Rebouças", "Portão", "Guaíra"],
 tag: "agua-verde",
 },
 {
 slug: "centro",
 nome: "Centro",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Centro de Curitiba",
 title: "Dedetizadora Centro Curitiba | Ampla 24h",
 description:
 "Dedetização e desentupimento no Centro de Curitiba com atendimento rápido. Ampla, 35 anos. Orçamento grátis pelo WhatsApp.",
 intro:
 "Atendemos escritórios, comércios e prédios residenciais do Centro com dedetização e desobstrução 24h.",
 contexto:
 "O Centro de Curitiba concentra comércio e escritórios com grande fluxo de pessoas. Executamos MIP para lojas e restaurantes, com laudo técnico e certificado da vigilância sanitária.",
 vizinhos: ["Batel", "Alto da Glória", "Rebouças", "São Francisco"],
 tag: "centro",
 },
 {
 slug: "boqueirao",
 nome: "Boqueirão",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Boqueirão, Curitiba",
 title: "Dedetizadora Boqueirão Curitiba | Ampla 24h",
 description:
 "Dedetização e desentupimento no Boqueirão. Controle de baratas, ratos, cupim e desobstrução 24h. Orçamento grátis pelo WhatsApp.",
 intro:
 "Atendemos o Boqueirão com dedetização residencial, comercial e desentupimento em regime de urgência.",
 contexto:
 "O Boqueirão é um dos bairros mais populosos de Curitiba. Trabalhamos com controle de pragas em casas, comércios e condomínios, além de limpeza de fossa e desentupimento de esgoto.",
 vizinhos: ["Xaxim", "Hauer", "Cajuru", "Alto Boqueirão"],
 tag: "boqueirao",
 },
 {
 slug: "portao",
 nome: "Portão",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Portão, Curitiba",
 title: "Dedetizadora Portão Curitiba | Ampla 35 Anos",
 description:
 "Dedetização e desentupimento no Portão, Curitiba. Ampla, 35 anos, atendimento 24h. Orçamento grátis pelo WhatsApp.",
 intro:
 "Ampla atende o Portão com controle de pragas, descupinização e desentupimento 24h.",
 contexto:
 "O Portão combina áreas residenciais e comerciais. Fazemos dedetização preventiva em prédios, tratamento de cupim em imóveis antigos e desentupimento de tubulações residenciais e comerciais.",
 vizinhos: ["Água Verde", "Novo Mundo", "Fanny", "Vila Izabel"],
 tag: "portao",
 },
 {
 slug: "cic",
 nome: "CIC",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora na CIC, Curitiba",
 title: "Desentupidora CIC Curitiba | Ampla 24h",
 description:
 "Dedetização e desentupimento na CIC (Cidade Industrial de Curitiba). Atendemos indústrias, galpões e residências. Orçamento pelo WhatsApp.",
 intro:
 "Atendemos toda a Cidade Industrial de Curitiba com controle de pragas, hidrojateamento e limpeza de fossa.",
 contexto:
 "A CIC é a maior região industrial de Curitiba. Executamos MIP para galpões e fábricas, além de desentupimento e hidrojateamento em grande porte, com ART e laudos exigidos por auditorias.",
 vizinhos: ["Fazendinha", "Augusta", "Riviera", "Campo Comprido"],
 tag: "cic",
 },
 {
 slug: "cajuru",
 nome: "Cajuru",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Cajuru, Curitiba",
 title: "Dedetizadora Cajuru Curitiba | Ampla 24h",
 description:
 "Dedetização e desentupimento no Cajuru, Curitiba. Controle de pragas, cupim, ratos e desobstrução 24h. Orçamento grátis.",
 intro:
 "Atendemos o Cajuru com dedetização residencial e desentupimento em regime de urgência.",
 contexto:
 "O Cajuru é um bairro amplo, com fortes áreas residenciais e comerciais. Fazemos desratização em quintais, controle de baratas em casas e desentupimento de esgoto com hidrojateamento.",
 vizinhos: ["Uberaba", "Jardim das Américas", "Boqueirão"],
 tag: "cajuru",
 },
 {
 slug: "santa-felicidade",
 nome: "Santa Felicidade",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora em Santa Felicidade, Curitiba",
 title: "Dedetizadora Santa Felicidade | Ampla Curitiba",
 description:
 "Dedetização e desentupimento em Santa Felicidade, Curitiba. Restaurantes, casas e comércios. Orçamento grátis pelo WhatsApp.",
 intro:
 "Atendemos Santa Felicidade com dedetização de restaurantes, residências e desentupimento 24h.",
 contexto:
 "Santa Felicidade concentra restaurantes tradicionais que exigem MIP e certificado sanitário. Também atendemos as áreas residenciais do bairro com controle de pragas e desentupimento.",
 vizinhos: ["Pilarzinho", "São João", "Cascatinha", "Butiatuvinha"],
 tag: "santa-felicidade",
 },
 {
 slug: "bacacheri",
 nome: "Bacacheri",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Bacacheri, Curitiba",
 title: "Dedetizadora Bacacheri Curitiba | Ampla 35 Anos",
 description:
 "Dedetização e desentupimento no Bacacheri, Curitiba. Casas, prédios e condomínios. Orçamento grátis pelo WhatsApp.",
 intro:
 "Atendemos o Bacacheri com controle de pragas, descupinização e desentupimento 24h.",
 contexto:
 "O Bacacheri combina casas antigas e novos condomínios. Fazemos descupinização preventiva e curativa, controle de escorpião no quintal e desentupimento com hidrojateamento.",
 vizinhos: ["Bairro Alto", "Cabral", "Boa Vista", "Tarumã"],
 tag: "bacacheri",
 },
 {
 slug: "sitio-cercado",
 nome: "Sítio Cercado",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Sítio Cercado, Curitiba",
 title: "Dedetizadora Sítio Cercado Curitiba | Ampla 24h",
 description:
 "Dedetização e desentupimento no Sítio Cercado. Controle de pragas, ratos, baratas e desobstrução 24h. Orçamento pelo WhatsApp.",
 intro:
 "Ampla atende o Sítio Cercado com dedetização residencial e desentupimento em regime de urgência.",
 contexto:
 "O Sítio Cercado tem grande volume residencial. Trabalhamos com desratização, controle de baratas de esgoto e desentupimento de fossa e caixa de inspeção.",
 vizinhos: ["Pinheirinho", "Ganchinho", "Umbará"],
 tag: "sitio-cercado",
 },
 {
 slug: "pinheirinho",
 nome: "Pinheirinho",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Pinheirinho, Curitiba",
 title: "Dedetizadora Pinheirinho Curitiba | Ampla 24h",
 description:
 "Dedetização e desentupimento no Pinheirinho, Curitiba. Ampla, 35 anos, atendimento 24h. Orçamento grátis pelo WhatsApp.",
 intro:
 "Atendemos o Pinheirinho com dedetização residencial, comercial e desentupimento emergencial.",
 contexto:
 "O Pinheirinho tem forte movimento comercial e residencial. Executamos MIP para comércios e controle de pragas urbanas em casas e condomínios, além de hidrojateamento em tubulações comerciais.",
 vizinhos: ["Sítio Cercado", "Capão Raso", "Xaxim"],
 tag: "pinheirinho",
 },
 {
 slug: "uberaba",
 nome: "Uberaba",
 cidade: "Curitiba",
 cidadeSlug: "curitiba",
 h1: "Dedetizadora e Desentupidora no Uberaba, Curitiba",
 title: "Dedetizadora Uberaba Curitiba | Ampla 24h",
 description:
 "Dedetização e desentupimento no Uberaba, Curitiba. Controle de pragas, cupim, ratos e desobstrução 24h. Orçamento grátis.",
 intro:
 "Atendemos o Uberaba com dedetização residencial e desentupimento em regime de urgência.",
 contexto:
 "O Uberaba é um bairro extenso da zona leste de Curitiba. Fazemos controle de pragas, dedetização de escorpião em quintais e desentupimento de esgoto residencial.",
 vizinhos: ["Cajuru", "Boqueirão", "Alto Boqueirão"],
 tag: "uberaba",
 },
 {
  slug: "ecoville",
  nome: "Ecoville",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora no Ecoville, Curitiba",
  title: "Dedetizadora Ecoville Curitiba | Ampla 35 Anos",
  description:
   "Dedetização e desentupimento no Ecoville, Curitiba. Condomínios de alto padrão, produtos ANVISA sem cheiro. Orçamento grátis pelo WhatsApp.",
  intro:
   "Atendemos o Ecoville com dedetização de condomínios de alto padrão, controle de pragas em apartamento e desentupimento 24h.",
  contexto:
   "O Ecoville concentra condomínios de alto padrão e casas em ruas arborizadas. Fazemos dedetização com produtos sem cheiro (aceitos por síndicos e moradores exigentes), controle de escorpião no jardim e desentupimento com hidrojato.",
  vizinhos: ["Campo Comprido", "Mossunguê", "Santo Inácio", "Cascatinha"],
  tag: "ecoville",
 },
 {
  slug: "alto-da-xv",
  nome: "Alto da XV",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora no Alto da XV, Curitiba",
  title: "Dedetizadora Alto da XV Curitiba | Ampla 24h",
  description:
   "Dedetização e desentupimento no Alto da XV, Curitiba. Casas antigas com cupim, escritórios e apartamentos. Orçamento grátis pelo WhatsApp.",
  intro:
   "Ampla atende o Alto da XV com controle de pragas, descupinização em casas antigas e desentupimento 24h.",
  contexto:
   "O Alto da XV mistura casas antigas (com forte demanda por descupinização) e edifícios comerciais. Trabalhamos com tratamento de cupim, dedetização preventiva em prédios e desentupimento residencial e comercial.",
  vizinhos: ["Cristo Rei", "Juvevê", "Alto da Glória", "Centro Cívico"],
  tag: "alto-da-xv",
 },
 {
  slug: "cristo-rei",
  nome: "Cristo Rei",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora no Cristo Rei, Curitiba",
  title: "Dedetizadora Cristo Rei Curitiba | Ampla 35 Anos",
  description:
   "Dedetização e desentupimento no Cristo Rei, Curitiba. Casas, prédios e comércios. Ampla, 35 anos. Orçamento grátis pelo WhatsApp.",
  intro:
   "Atendemos o Cristo Rei com dedetização residencial, comercial e desentupimento em regime de urgência.",
  contexto:
   "O Cristo Rei tem forte área residencial próxima à UFPR. Fazemos controle de baratas em apartamento estudantil, descupinização em casas antigas e desentupimento de esgoto.",
  vizinhos: ["Alto da XV", "Jardim Botânico", "Prado Velho", "Rebouças"],
  tag: "cristo-rei",
 },
 {
  slug: "juveve",
  nome: "Juvevê",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora no Juvevê, Curitiba",
  title: "Dedetizadora Juvevê Curitiba | Ampla 35 Anos",
  description:
   "Dedetização e desentupimento no Juvevê, Curitiba. Prédios residenciais e casas de alto padrão. Orçamento grátis pelo WhatsApp.",
  intro:
   "Atendemos o Juvevê com dedetização de prédios residenciais, controle de pragas em casas de alto padrão e desentupimento 24h.",
  contexto:
   "O Juvevê é um bairro tradicional com casas e edifícios de alto padrão. Fazemos dedetização preventiva com produtos sem cheiro, tratamento de cupim e desentupimento com hidrojato.",
  vizinhos: ["Alto da XV", "Cabral", "Hugo Lange", "Ahú"],
  tag: "juveve",
 },
 {
  slug: "champagnat",
  nome: "Champagnat",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora no Champagnat, Curitiba",
  title: "Dedetizadora Champagnat Curitiba | Ampla 24h",
  description:
   "Dedetização e desentupimento no Champagnat, Curitiba. Condomínios de alto padrão. Produtos ANVISA, seguros para pets. Orçamento pelo WhatsApp.",
  intro:
   "Atendemos o Champagnat com dedetização de condomínios, controle de pragas em apartamento e desentupimento emergencial.",
  contexto:
   "O Champagnat é uma das regiões nobres de Curitiba, com condomínios verticais e casas em ruas arborizadas. Trabalhamos com produtos sem cheiro, seguros para crianças e pets, com laudo técnico para síndicos.",
  vizinhos: ["Bigorrilho", "Mercês", "Batel", "Campina do Siqueira"],
  tag: "champagnat",
 },
 {
  slug: "merces",
  nome: "Mercês",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora nas Mercês, Curitiba",
  title: "Dedetizadora Mercês Curitiba | Ampla 35 Anos",
  description:
   "Dedetização e desentupimento nas Mercês, Curitiba. Casas antigas com cupim e apartamentos. Orçamento grátis pelo WhatsApp.",
  intro:
   "Ampla atende as Mercês com dedetização, descupinização em casas antigas e desentupimento 24h.",
  contexto:
   "As Mercês concentram casas antigas com forte demanda por descupinização, além de prédios residenciais. Fazemos tratamento de cupim de madeira e subterrâneo, controle de baratas e desentupimento residencial.",
  vizinhos: ["Champagnat", "Bigorrilho", "São Francisco", "Bom Jesus"],
  tag: "merces",
 },
 {
  slug: "reboucas",
  nome: "Rebouças",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora no Rebouças, Curitiba",
  title: "Dedetizadora Rebouças Curitiba | Ampla 24h",
  description:
   "Dedetização e desentupimento no Rebouças, Curitiba. Escritórios, comércios e edifícios residenciais. Orçamento grátis pelo WhatsApp.",
  intro:
   "Atendemos o Rebouças com dedetização de comércios, prédios residenciais e desentupimento em regime de urgência.",
  contexto:
   "O Rebouças tem forte movimento comercial e edifícios residenciais. Executamos MIP para escritórios e comércios, com laudo técnico, e desentupimento com hidrojato em prédios.",
  vizinhos: ["Centro", "Batel", "Água Verde", "Prado Velho"],
  tag: "reboucas",
 },
 {
  slug: "cabral",
  nome: "Cabral",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora no Cabral, Curitiba",
  title: "Dedetizadora Cabral Curitiba | Ampla 35 Anos",
  description:
   "Dedetização e desentupimento no Cabral, Curitiba. Condomínios residenciais e casas. Orçamento grátis pelo WhatsApp.",
  intro:
   "Atendemos o Cabral com dedetização de condomínios, controle de pragas em casas e desentupimento 24h.",
  contexto:
   "O Cabral é um bairro tradicional com condomínios residenciais e casas. Fazemos dedetização preventiva, tratamento de cupim e desentupimento de esgoto residencial.",
  vizinhos: ["Juvevê", "Bacacheri", "Hugo Lange", "Ahú"],
  tag: "cabral",
 },
 {
  slug: "hauer",
  nome: "Hauer",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora no Hauer, Curitiba",
  title: "Dedetizadora Hauer Curitiba | Ampla 24h",
  description:
   "Dedetização e desentupimento no Hauer, Curitiba. Casas, comércios e prédios. Ampla, 35 anos. Orçamento grátis pelo WhatsApp.",
  intro:
   "Ampla atende o Hauer com controle de pragas, descupinização e desentupimento 24h.",
  contexto:
   "O Hauer combina residencial e comercial, com boa demanda por dedetização residencial e desentupimento de esgoto. Trabalhamos com produtos ANVISA e garantia por escrito.",
  vizinhos: ["Boqueirão", "Prado Velho", "Fanny", "Guabirotuba"],
  tag: "hauer",
 },
 {
  slug: "xaxim",
  nome: "Xaxim",
  cidade: "Curitiba",
  cidadeSlug: "curitiba",
  h1: "Dedetizadora e Desentupidora no Xaxim, Curitiba",
  title: "Dedetizadora Xaxim Curitiba | Ampla 24h",
  description:
   "Dedetização e desentupimento no Xaxim, Curitiba. Casas, comércios e condomínios. Orçamento grátis pelo WhatsApp.",
  intro:
   "Atendemos o Xaxim com dedetização residencial, comercial e desentupimento em regime de urgência.",
  contexto:
   "O Xaxim é um bairro extenso e movimentado no sul de Curitiba. Fazemos controle de baratas, ratos, cupim e desentupimento de esgoto e hidrojateamento em comércios.",
  vizinhos: ["Boqueirão", "Pinheirinho", "Capão Raso", "Fanny"],
  tag: "xaxim",
 },
];

export const findBairro = (slug: string) => bairros.find((b) => b.slug === slug);