export interface ServicoFAQ { q: string; a: string }

export interface ServicoDes {
  slug: string;
  nome: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  contexto: string;
  sinais: string[];
  metodo: { titulo: string; texto: string }[];
  diferenciais: string[];
  garantia: string;
  faqs: ServicoFAQ[];
}

export const servicosDesentupimento: ServicoDes[] = [
  {
    slug: "desentupimento-esgoto",
    nome: "Desentupimento de Esgoto",
    h1: "Desentupimento de Esgoto em Curitiba 24h",
    title: "Desentupimento de Esgoto em Curitiba 24h | Ampla",
    description:
      "Desentupimento de esgoto em Curitiba e região com equipamento de hidrojateamento. Atendimento 24h, sem quebra-quebra. Orçamento grátis pelo WhatsApp.",
    intro:
      "Esgoto entupido é urgência: risco de contaminação, mau cheiro e refluxo. Nossa equipe atende Curitiba e Região Metropolitana 24 horas, com equipamento profissional e sem quebrar piso ou parede.",
    contexto:
      "Utilizamos máquinas rotativas de alta potência e hidrojateamento para desobstruir redes de esgoto residenciais, comerciais e prediais. Localizamos o entupimento com precisão, sem danificar a estrutura do imóvel, e removemos gordura, raízes e detritos que reduzem o diâmetro da tubulação.",
    sinais: [
      "Vaso sanitário ou pia com refluxo de água escura",
      "Mau cheiro persistente vindo de ralos",
      "Barulho de borbulhas ao dar descarga",
      "Água acumulando no ralo do banheiro ou área de serviço",
    ],
    metodo: [
      { titulo: "Diagnóstico rápido", texto: "Identificamos o ponto exato da obstrução sem quebrar piso ou parede." },
      { titulo: "Desobstrução mecânica", texto: "Máquina rotativa removendo raízes, gordura e detritos acumulados." },
      { titulo: "Hidrojateamento (quando necessário)", texto: "Limpeza completa da tubulação com jato de água de alta pressão." },
    ],
    diferenciais: [
      "Atendimento em até 2h em Curitiba",
      "Equipamento próprio — sem terceirização",
      "Sem quebra-quebra: preservamos piso e parede",
      "Preço fechado antes de iniciar o serviço",
    ],
    garantia: "Garantia de 90 dias no serviço de desobstrução. Se voltar a entupir no mesmo ponto, retornamos sem custo.",
    faqs: [
      { q: "Quanto tempo demora para desentupir?", a: "Na maioria dos casos, entre 30 minutos e 2 horas, dependendo da gravidade e do ponto do entupimento." },
      { q: "Vocês quebram piso ou parede?", a: "Não. Trabalhamos com equipamento que desobstrui pela própria tubulação, sem obra." },
      { q: "Atendem à noite e finais de semana?", a: "Sim, atendimento 24h todos os dias, inclusive feriados." },
      { q: "Qual o valor do desentupimento de esgoto?", a: "O valor depende do tipo de entupimento e do equipamento necessário. Fazemos orçamento grátis pelo WhatsApp antes de iniciar." },
    ],
  },
  {
    slug: "desentupimento-pia",
    nome: "Desentupimento de Pia",
    h1: "Desentupimento de Pia em Curitiba",
    title: "Desentupimento de Pia de Cozinha e Banheiro em Curitiba | Ampla",
    description:
      "Desentupimento de pia de cozinha e banheiro em Curitiba. Remoção de gordura e sabão sem quebra. Atendimento 24h com garantia. Orçamento pelo WhatsApp.",
    intro:
      "Pia entupida é um dos chamados mais comuns em Curitiba, quase sempre causado por acúmulo de gordura, restos de comida ou sabão. Desobstruímos sem danificar o sifão nem a bancada.",
    contexto:
      "Nosso protocolo começa por identificar se o entupimento está no sifão, no ramal ou na coluna de esgoto. Aplicamos equipamento adequado a cada caso, com produtos desengordurantes de uso profissional que dissolvem gordura sem corroer a tubulação.",
    sinais: [
      "Água escoa devagar ou fica parada na pia",
      "Cheiro ruim vindo do ralo da cozinha",
      "Barulho de gorgolejo ao esvaziar a pia",
      "Retorno de água suja pela pia do banheiro",
    ],
    metodo: [
      { titulo: "Inspeção do ponto", texto: "Verificamos sifão, ralo e ramal para localizar a obstrução." },
      { titulo: "Desobstrução com equipamento", texto: "Máquina flexível ou hidrojato de bancada para remover gordura e resíduos." },
      { titulo: "Higienização final", texto: "Aplicação de desengordurante profissional para evitar reincidência." },
    ],
    diferenciais: [
      "Atendimento no mesmo dia",
      "Sem retirar bancada ou gabinete",
      "Preço fechado antes do serviço",
      "Garantia de 90 dias",
    ],
    garantia: "90 dias de garantia. Se voltar a entupir no mesmo ponto, retornamos sem custo adicional.",
    faqs: [
      { q: "Preciso esvaziar o armário embaixo da pia?", a: "Ajuda no acesso, mas nossa equipe orienta e ajuda se necessário." },
      { q: "Aqueles produtos de supermercado resolvem?", a: "Podem aliviar temporariamente, mas costumam agravar entupimentos por gordura e corroer o PVC antigo." },
      { q: "Quanto custa?", a: "O valor varia conforme o tipo de obstrução. Enviamos orçamento pelo WhatsApp antes de iniciar." },
    ],
  },
  {
    slug: "desentupimento-vaso-sanitario",
    nome: "Desentupimento de Vaso Sanitário",
    h1: "Desentupimento de Vaso Sanitário em Curitiba",
    title: "Desentupimento de Vaso Sanitário em Curitiba 24h | Ampla",
    description:
      "Desentupimento de vaso sanitário em Curitiba 24h. Sem retirar o vaso, sem quebrar piso. Atendimento rápido com garantia. Orçamento pelo WhatsApp.",
    intro:
      "Vaso sanitário entupido precisa de solução imediata. Atendemos em Curitiba 24 horas, com equipamento que desobstrui sem retirar o vaso e sem sujeira.",
    contexto:
      "Utilizamos desentupidor a pressão e cabo rotativo específico para vaso sanitário. Removemos papel, absorventes, brinquedos e outros objetos que causam obstrução, preservando a louça e a vedação do vaso.",
    sinais: [
      "Água sobe até a borda ao dar descarga",
      "Descarga não desce completamente",
      "Retorno de sujeira ou papel",
      "Cheiro forte vindo do vaso",
    ],
    metodo: [
      { titulo: "Avaliação da obstrução", texto: "Identificamos o tipo de bloqueio para escolher o método correto." },
      { titulo: "Desobstrução sem retirar o vaso", texto: "Equipamento específico que atua pelo próprio vaso, sem sujeira." },
      { titulo: "Teste de funcionamento", texto: "Testamos várias descargas para garantir escoamento total." },
    ],
    diferenciais: [
      "Atendimento 24h em Curitiba",
      "Sem retirar o vaso na maioria dos casos",
      "Sem sujeira ou mau cheiro após o serviço",
      "Garantia de 90 dias",
    ],
    garantia: "90 dias de garantia no mesmo ponto de entupimento.",
    faqs: [
      { q: "Vão precisar retirar o vaso?", a: "Na grande maioria dos casos, não. Só é necessário quando há objeto sólido preso na saída." },
      { q: "Atendem madrugada?", a: "Sim, 24 horas todos os dias." },
      { q: "Fica sujeira depois do serviço?", a: "Não. Trabalhamos com equipamentos que evitam respingos e higienizamos o local ao final." },
    ],
  },
  {
    slug: "desentupimento-ralo",
    nome: "Desentupimento de Ralo",
    h1: "Desentupimento de Ralo em Curitiba",
    title: "Desentupimento de Ralo de Banheiro e Área em Curitiba | Ampla",
    description:
      "Desentupimento de ralo de banheiro, área de serviço e quintal em Curitiba. Remoção de cabelo, gordura e detritos. Atendimento no mesmo dia. Orçamento pelo WhatsApp.",
    intro:
      "Ralo entupido causa mau cheiro, água acumulada e risco de proliferação de pragas. Desobstruímos ralos de banheiro, área de serviço e quintal com equipamento profissional.",
    contexto:
      "Cabelo, sabão, areia e folhas são as causas mais comuns. Utilizamos furadeira de eixo flexível, hidrojato de bancada e produtos específicos para dissolver o acúmulo sem agredir a tubulação de PVC.",
    sinais: [
      "Água fica parada em volta do ralo",
      "Mau cheiro constante no banheiro ou área",
      "Insetos aparecendo próximo ao ralo",
      "Barulho de gorgolejo no ralo",
    ],
    metodo: [
      { titulo: "Inspeção do ralo e ramal", texto: "Identificamos se a obstrução está no próprio ralo ou no ramal seguinte." },
      { titulo: "Desobstrução mecânica", texto: "Cabo flexível remove cabelo e detritos acumulados." },
      { titulo: "Higienização", texto: "Aplicação de produto para eliminar biofilme e evitar reincidência." },
    ],
    diferenciais: [
      "Atendimento no mesmo dia",
      "Equipamento próprio",
      "Preço fechado antes do serviço",
      "Garantia de 90 dias",
    ],
    garantia: "90 dias de garantia no ponto tratado.",
    faqs: [
      { q: "Só um ralo entupido justifica chamar?", a: "Sim, é um chamado rápido e barato. Evita entupimento maior mais adiante." },
      { q: "Vocês usam soda cáustica?", a: "Não. Soda cáustica corrói o PVC. Usamos produtos profissionais seguros." },
    ],
  },
  {
    slug: "hidrojateamento",
    nome: "Hidrojateamento",
    h1: "Hidrojateamento de Tubulação em Curitiba",
    title: "Hidrojateamento de Tubulação em Curitiba | Ampla Desentupidora",
    description:
      "Hidrojateamento profissional em Curitiba para redes de esgoto, pluviais e industriais. Remove gordura, raízes e incrustações. Orçamento grátis pelo WhatsApp.",
    intro:
      "O hidrojateamento é o método mais eficiente para limpar tubulações por dentro. Utiliza jato de água em alta pressão para remover gordura, raízes, sedimentos e incrustações que reduzem o diâmetro da rede.",
    contexto:
      "Atendemos residências, condomínios, indústrias e comércios em Curitiba e Região Metropolitana. Nossos equipamentos operam de 1.500 a 4.000 PSI, com bicos específicos para cada tipo de tubulação e obstrução, sem danificar PVC, ferro fundido ou concreto.",
    sinais: [
      "Entupimentos recorrentes na mesma tubulação",
      "Redução visível de vazão no esgoto ou pluvial",
      "Rede antiga com histórico de gordura acumulada",
      "Necessidade de manutenção preventiva anual",
    ],
    metodo: [
      { titulo: "Avaliação da rede", texto: "Analisamos diâmetro, extensão e tipo de obstrução para definir pressão e bico ideais." },
      { titulo: "Aplicação do hidrojato", texto: "Jato de alta pressão remove gordura, raízes e incrustações da parede interna da tubulação." },
      { titulo: "Teste de vazão", texto: "Confirmamos escoamento total antes de encerrar o serviço." },
    ],
    diferenciais: [
      "Equipamento próprio de 4.000 PSI",
      "Operadores treinados",
      "Atende residências, condomínios e indústrias",
      "Sem quebra-quebra",
    ],
    garantia: "Garantia contratual conforme escopo — atendemos com laudo técnico quando solicitado.",
    faqs: [
      { q: "Hidrojateamento estraga a tubulação?", a: "Não, quando executado com pressão e bico adequados. Trabalhamos com equipamentos calibrados para cada material." },
      { q: "Precisa de acesso especial?", a: "Utilizamos caixas de inspeção existentes. Só em casos raros é necessário acesso adicional." },
      { q: "Emitem nota fiscal?", a: "Sim, empresa formalizada com emissão de nota e laudo técnico." },
    ],
  },
  {
    slug: "limpeza-fossa",
    nome: "Limpeza de Fossa",
    h1: "Limpeza de Fossa e Caixa de Gordura em Curitiba",
    title: "Limpeza de Fossa Séptica e Caixa de Gordura em Curitiba | Ampla",
    description:
      "Limpeza de fossa séptica, sumidouro e caixa de gordura em Curitiba e região. Caminhão limpa-fossa próprio, destinação correta e nota fiscal. Orçamento pelo WhatsApp.",
    intro:
      "Limpeza de fossa séptica, sumidouro e caixa de gordura em Curitiba e Região Metropolitana. Trabalhamos com caminhão limpa-fossa próprio, destinação ambientalmente correta e emissão de laudo.",
    contexto:
      "Realizamos sucção completa de fossas residenciais, condominiais e comerciais. A destinação do efluente é feita em estação de tratamento licenciada, com manifesto ambiental. Fazemos também limpeza preventiva anual para evitar transbordamento.",
    sinais: [
      "Mau cheiro no quintal ou próximo à fossa",
      "Vaso e ralos com escoamento lento",
      "Fossa transbordando ou aflorando",
      "Mais de 12 meses sem limpeza",
    ],
    metodo: [
      { titulo: "Vistoria e planejamento", texto: "Avaliamos volume, acesso do caminhão e periodicidade recomendada." },
      { titulo: "Sucção com caminhão limpa-fossa", texto: "Remoção completa do lodo e do efluente com equipamento próprio." },
      { titulo: "Destinação e laudo", texto: "Efluente encaminhado a estação licenciada, com laudo/manifesto." },
    ],
    diferenciais: [
      "Caminhão limpa-fossa próprio",
      "Destinação em estação licenciada",
      "Emissão de laudo e nota fiscal",
      "Atendimento em condomínios e indústrias",
    ],
    garantia: "Serviço executado conforme escopo, com laudo e manifesto de destinação.",
    faqs: [
      { q: "Com que frequência devo limpar a fossa?", a: "Em geral, a cada 12 meses. Depende do número de moradores e do volume da fossa." },
      { q: "Vocês limpam caixa de gordura de restaurante?", a: "Sim, com plano de higienização periódica e emissão de nota fiscal." },
      { q: "Levam o resíduo para onde?", a: "Para estação de tratamento licenciada, com manifesto ambiental." },
    ],
  },
];

export const findServicoDes = (slug: string) =>
  servicosDesentupimento.find((s) => s.slug === slug);