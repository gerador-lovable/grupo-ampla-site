export type DepoimentoTag =
 | "dedetizacao"
 | "desentupimento"
 | "emergencia"
 | "comercial"
 | "residencial"
 | "condominial"
 | "curitiba"
 | "colombo"
 | "pinhais"
 | "sao-jose-dos-pinhais"
 | "araucaria"
 | "campo-largo"
 | "batel"
 | "agua-verde"
 | "boqueirao"
 | "cic"
 | "santa-felicidade"
 | "bacacheri"
 | "centro"
 | "cajuru"
 | "portao"
 | "sitio-cercado"
 | "pinheirinho"
 | "uberaba"
 | "baratas"
 | "ratos"
 | "cupim"
 | "escorpiao"
 | "pulgas-e-carrapatos"
 | "formigas"
 | "percevejo"
 | "desentupimento-esgoto"
 | "desentupimento-pia"
 | "desentupimento-vaso-sanitario"
 | "desentupimento-ralo"
 | "hidrojateamento"
 | "limpeza-fossa"
 | "caixa-dagua"
 | "roedores"
 | "pombos";

export interface Depoimento {
 nome: string;
 local: string;
 servico: string;
 estrelas: number;
 texto: string;
 data?: string;
 tags: DepoimentoTag[];
}

export const depoimentos: Depoimento[] = [
 {
 nome: "Mariana Ferreira",
 local: "Batel, Curitiba",
 servico: "Dedetização Residencial",
 estrelas: 5,
 texto:
 "Chamei a Ampla para resolver um problema de baratas no apartamento. Chegaram no mesmo dia, muito educados e organizados. Uma semana depois, zero praga. Recomendo!",
 data: "2025-11-12",
 tags: ["dedetizacao", "residencial", "curitiba", "batel", "baratas"],
 },
 {
 nome: "Carlos Menezes",
 local: "Água Verde, Curitiba",
 servico: "Desratização",
 estrelas: 5,
 texto:
 "Tinha ratos no quintal e a equipe da Ampla fez uma inspeção completa antes de aplicar o produto. Explicaram tudo. Duas visitas e o problema foi controlado.",
 data: "2025-10-04",
 tags: ["dedetizacao", "residencial", "curitiba", "agua-verde", "ratos"],
 },
 {
 nome: "Juliana Prado",
 local: "Santa Felicidade, Curitiba",
 servico: "Descupinização",
 estrelas: 5,
 texto:
 "Descobri cupim na madeira do telhado. A Ampla veio, avaliou e trocou toda a estratégia, hoje tenho garantia por escrito e nunca mais tive dor de cabeça.",
 data: "2025-09-20",
 tags: ["dedetizacao", "residencial", "curitiba", "santa-felicidade", "cupim"],
 },
 {
 nome: "Rafael Souza",
 local: "Boqueirão, Curitiba",
 servico: "Desentupimento de Esgoto",
 estrelas: 5,
 texto:
 "Esgoto entupido em pleno domingo. Ligamos e em menos de 2 horas estavam aqui com o hidrojato. Preço justo e serviço impecável. Salvaram nosso final de semana.",
 data: "2025-11-30",
 tags: [
 "desentupimento",
 "emergencia",
 "curitiba",
 "boqueirao",
 "desentupimento-esgoto",
 "hidrojateamento",
 ],
 },
 {
 nome: "Ana Beatriz",
 local: "CIC, Curitiba",
 servico: "Desentupimento de Vaso Sanitário",
 estrelas: 5,
 texto:
 "Chamamos de madrugada, atendimento super rápido. Resolveram sem quebrar nada e ainda deram dicas para evitar novos entupimentos. Muito profissionais.",
 data: "2025-11-08",
 tags: [
 "desentupimento",
 "emergencia",
 "curitiba",
 "cic",
 "desentupimento-vaso-sanitario",
 ],
 },
 {
 nome: "Priscila Nunes",
 local: "Centro, São José dos Pinhais",
 servico: "Limpeza de Fossa",
 estrelas: 5,
 texto:
 "Fizeram a limpeza da fossa da nossa casa em São José dos Pinhais. Equipamento adequado, sem sujeira e sem mau cheiro depois. Nota fiscal e certificado entregues no ato.",
 data: "2025-10-22",
 tags: [
 "desentupimento",
 "residencial",
 "sao-jose-dos-pinhais",
 "limpeza-fossa",
 ],
 },
 {
 nome: "Eduardo Lima",
 local: "Pinhais",
 servico: "Dedetização Comercial",
 estrelas: 5,
 texto:
 "Contratamos a Ampla para nossa rede de padarias em Pinhais. Entregam laudo técnico mensal, atendem a vigilância sanitária e nunca falharam com o cronograma.",
 data: "2025-09-15",
 tags: ["dedetizacao", "comercial", "pinhais"],
 },
 {
 nome: "Fernanda Ribeiro",
 local: "Colombo",
 servico: "Controle de Escorpião",
 estrelas: 5,
 texto:
 "Apareceu escorpião no quintal e fiquei apavorada com as crianças. A Ampla veio no mesmo dia, tratou toda a casa e o entorno. Muito atenciosos.",
 data: "2025-11-02",
 tags: ["dedetizacao", "residencial", "colombo", "escorpiao", "emergencia"],
 },
 {
 nome: "Marcos Andrade",
 local: "Bacacheri, Curitiba",
 servico: "Dedetização Condominial",
 estrelas: 5,
 texto:
 "Cuidam do nosso condomínio há 2 anos. Comunicação impecável com o síndico, cronograma cumprido e nunca tivemos infestação. Vale cada centavo.",
 data: "2025-08-30",
 tags: ["dedetizacao", "condominial", "curitiba", "bacacheri"],
 },
 {
 nome: "Roberto Cavalcante",
 local: "Araucária",
 servico: "Hidrojateamento Industrial",
 estrelas: 5,
 texto:
 "Precisávamos de hidrojateamento em uma tubulação de galpão em Araucária. Equipe pontual, EPI completo, nota fiscal e ART. Serviço muito acima da média.",
 data: "2025-10-11",
 tags: [
 "desentupimento",
 "comercial",
 "araucaria",
 "hidrojateamento",
 ],
 },
 {
 nome: "Larissa Duarte",
 local: "Portão, Curitiba",
 servico: "Dedetização de Formigas",
 estrelas: 5,
 texto:
 "Formigas apareciam toda semana na cozinha. A Ampla fez tratamento com isca gel, sem cheiro, e o problema acabou. Voltaram para revisar sem custo extra.",
 data: "2025-11-18",
 tags: ["dedetizacao", "residencial", "curitiba", "portao", "formigas"],
 },
 {
 nome: "Thiago Moraes",
 local: "Cajuru, Curitiba",
 servico: "Desentupimento de Pia",
 estrelas: 5,
 texto:
 "Pia da cozinha entupida com gordura. Resolveram em menos de 30 minutos, cobraram o combinado e ainda limparam tudo depois. Recomendo demais.",
 data: "2025-11-25",
 tags: [
 "desentupimento",
 "curitiba",
 "cajuru",
 "desentupimento-pia",
 ],
 },
];

export const filterDepoimentos = (
 tags: DepoimentoTag[] = [],
 limit = 6,
): Depoimento[] => {
 if (tags.length === 0) return depoimentos.slice(0, limit);
 const matched = depoimentos.filter((d) =>
 tags.some((t) => d.tags.includes(t)),
 );
 // Fallback to generic ones if too few
 if (matched.length >= 3) return matched.slice(0, limit);
 const extras = depoimentos.filter((d) => !matched.includes(d));
 return [...matched, ...extras].slice(0, limit);
};