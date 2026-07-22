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
];

export const findBairro = (slug: string) => bairros.find((b) => b.slug === slug);