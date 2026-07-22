export interface ServicoEspecialFAQ {
  q: string;
  a: string;
}

export interface ServicoEspecial {
  slug: string;
  nome: string;
  h1: string;
  title: string;
  description: string;
  icone: "droplet" | "rat" | "bird" | "home" | "building" | "shield";
  intro: string;
  contexto: string;
  sinais: string[];
  riscos: string[];
  metodo: { titulo: string; texto: string }[];
  garantia: string;
  faqs: ServicoEspecialFAQ[];
  cta: string;
}

export const servicosEspeciais: ServicoEspecial[] = [
  {
    slug: "limpeza-caixa-dagua",
    nome: "Limpeza de Caixa d'Água",
    h1: "Limpeza e Higienização de Caixa d'Água em Curitiba",
    title: "Limpeza de Caixa d'Água em Curitiba | Certificado - Ampla",
    description:
      "Limpeza e higienização de caixa d'água em Curitiba e Região Metropolitana. Técnicos treinados, produtos ANVISA e certificado entregue no ato. Orçamento grátis.",
    icone: "droplet",
    intro:
      "A água armazenada em caixas sem manutenção acumula sedimentos, algas e microorganismos que causam gastroenterite, hepatite A e outras doenças. O Ministério da Saúde recomenda higienização a cada 6 meses.",
    contexto:
      "A Ampla realiza limpeza técnica de caixas d'água em residências, condomínios e empresas em Curitiba e RMC. O processo segue as diretrizes da Portaria MS nº 888/2021 (antiga 2914/2011): esvaziamento, remoção de sedimentos, escovação, desinfecção com hipoclorito e enxágue. Ao final entregamos certificado com data, produto utilizado e assinatura do responsável técnico.",
    sinais: [
      "Água com cor, gosto ou cheiro alterados",
      "Sedimentos ou partículas nas torneiras e chuveiros",
      "Última limpeza há mais de 6 meses (ou sem registro)",
      "Condomínio sem certificado atualizado para a vigilância sanitária",
      "Casos recentes de diarreia ou infecção intestinal em moradores",
    ],
    riscos: [
      "Contaminação por E. coli, Salmonella e amebas",
      "Proliferação do Aedes aegypti em caixas mal vedadas",
      "Multas para condomínios sem certificado válido",
      "Danos a torneiras, chuveiros e aparelhos por sedimentação",
    ],
    metodo: [
      {
        titulo: "Esvaziamento e reserva",
        texto:
          "Fechamos o registro de entrada e reservamos parte da água limpa para o consumo essencial durante o serviço.",
      },
      {
        titulo: "Escovação e retirada de sedimentos",
        texto:
          "Removemos lodo, sedimentos e biofilme das paredes e do fundo, sem uso de sabão ou detergente.",
      },
      {
        titulo: "Desinfecção com hipoclorito",
        texto:
          "Aplicação de solução clorada seguindo diluição recomendada pelo Ministério da Saúde, com tempo de contato adequado.",
      },
      {
        titulo: "Enxágue e certificado",
        texto:
          "Enxaguamos, reabastecemos e entregamos certificado técnico com validade de 6 meses para a vigilância sanitária.",
      },
    ],
    garantia:
      "Certificado válido por 6 meses, aceito por síndicos, vigilância sanitária e planos de manutenção predial.",
    faqs: [
      {
        q: "De quanto em quanto tempo devo limpar a caixa d'água?",
        a: "O Ministério da Saúde recomenda a cada 6 meses. Em condomínios é obrigatório manter o certificado atualizado.",
      },
      {
        q: "Preciso ficar sem água durante o serviço?",
        a: "Sim, por 2 a 4 horas. Orientamos reservar água para consumo essencial antes de iniciarmos.",
      },
      {
        q: "Usam produtos seguros para consumo?",
        a: "Sim. Utilizamos hipoclorito de sódio na concentração recomendada, seguido de enxágue. A água volta a ser potável imediatamente.",
      },
      {
        q: "Emitem nota fiscal e certificado?",
        a: "Sim. Entregamos nota fiscal e certificado com data, produto, lote e assinatura do técnico responsável.",
      },
    ],
    cta: "Solicitar limpeza de caixa d'água",
  },
  {
    slug: "controle-roedores",
    nome: "Controle de Roedores",
    h1: "Controle de Roedores em Curitiba - Ratos, Camundongos e Ratazanas",
    title: "Controle de Roedores em Curitiba | Desratização - Ampla",
    description:
      "Controle de roedores em Curitiba: ratos, camundongos e ratazanas. Iscas em porta-iscas seguros, laudo técnico e monitoramento contínuo. Orçamento grátis.",
    icone: "rat",
    intro:
      "Ratos, camundongos e ratazanas transmitem leptospirose, hantavirose e salmonelose. Uma única fêmea gera mais de 100 filhotes por ano — quanto mais cedo o controle, menor o custo.",
    contexto:
      "A Ampla implanta programas de controle de roedores em residências, condomínios, indústrias e food service em Curitiba e Região Metropolitana. Utilizamos iscas parafinadas em porta-iscas lacrados, mapeados em croqui, com monitoramento periódico exigido pela vigilância sanitária.",
    sinais: [
      "Fezes escuras em forma de grão de arroz",
      "Fios elétricos, embalagens ou móveis roídos",
      "Ruídos noturnos em forros, paredes ou entre lajes",
      "Trilhas de gordura escurecendo rodapés",
      "Ninhos com papel, tecido ou isopor picados",
    ],
    riscos: [
      "Transmissão de leptospirose, hantavirose e salmonelose",
      "Curto-circuito e incêndio por fios roídos",
      "Contaminação de alimentos, água e superfícies",
      "Autuação em food service e condomínios sem controle",
    ],
    metodo: [
      {
        titulo: "Vistoria e mapeamento",
        texto:
          "Identificamos a espécie, rotas de circulação, pontos de entrada e locais de abrigo. Elaboramos croqui técnico.",
      },
      {
        titulo: "Porta-iscas lacrados",
        texto:
          "Instalamos porta-iscas com chave e iscas parafinadas em pontos estratégicos, seguros para crianças e pets.",
      },
      {
        titulo: "Monitoramento contínuo",
        texto:
          "Retornos programados para leitura das iscas, retirada de carcaças e reposição até o controle total.",
      },
      {
        titulo: "Laudo técnico",
        texto:
          "Emitimos laudo com croqui, produtos, lotes e responsável técnico para a vigilância sanitária.",
      },
    ],
    garantia:
      "Contratos com garantia e monitoramento periódico para empresas, condomínios e residências.",
    faqs: [
      {
        q: "As iscas são seguras para crianças e pets?",
        a: "Sim. Ficam dentro de porta-iscas lacrados com chave, fixados fora do alcance. É o padrão de segurança exigido pela ANVISA.",
      },
      {
        q: "Vocês retiram os ratos mortos?",
        a: "As iscas são anticoagulantes e ressecam o roedor, reduzindo mau cheiro. Em contratos comerciais incluímos retirada de carcaças.",
      },
      {
        q: "Quanto tempo para eliminar a infestação?",
        a: "Em geral entre 15 e 30 dias, dependendo do tamanho da colônia e da estrutura do imóvel.",
      },
      {
        q: "Emitem laudo técnico?",
        a: "Sim. Emitimos laudo com croqui dos porta-iscas, produtos utilizados e responsável técnico.",
      },
    ],
    cta: "Solicitar controle de roedores",
  },
  {
    slug: "pombos-e-morcegos",
    nome: "Manejo de Pombos e Morcegos",
    h1: "Afastamento de Pombos e Morcegos em Curitiba",
    title: "Afastamento de Pombos e Morcegos em Curitiba | Ampla",
    description:
      "Manejo e afastamento de pombos e morcegos em Curitiba. Instalação de espículas, telas e barreiras físicas. Método humanitário, sem abate. Orçamento grátis.",
    icone: "bird",
    intro:
      "Pombos e morcegos são vetores de criptococose, histoplasmose e ornitose. Suas fezes corroem estruturas, entopem calhas e contaminam caixas d'água. O manejo é feito por afastamento, sem abate.",
    contexto:
      "A Ampla instala barreiras físicas — espículas anti-pouso em aço inox, telas de nylon, redes e sistemas de fios tensionados — para afastar pombos e morcegos de fachadas, beirais, sótãos, forros, torres e ambientes industriais em Curitiba e RMC. Também executamos limpeza e descontaminação de fezes acumuladas com EPI completo.",
    sinais: [
      "Fezes acumuladas em beirais, sacadas, ar-condicionado e caixas d'água",
      "Ninhos em telhados, calhas, forros e sótãos",
      "Barulhos noturnos no forro (morcegos)",
      "Cheiro forte de amônia em ambientes fechados",
      "Pombos pousando repetidamente em parapeitos e antenas",
    ],
    riscos: [
      "Criptococose, histoplasmose e ornitose (doenças respiratórias graves)",
      "Ácaros e pulgas transportados pelas aves",
      "Corrosão de calhas, telhas e estruturas metálicas",
      "Entupimento de calhas e ralos por fezes e ninhos",
      "Contaminação de caixas d'água e sistemas de captação",
    ],
    metodo: [
      {
        titulo: "Vistoria técnica",
        texto:
          "Identificamos os pontos de pouso, entrada e abrigo. Fotografamos e definimos a barreira física mais adequada para cada superfície.",
      },
      {
        titulo: "Limpeza e descontaminação",
        texto:
          "Remoção de fezes e ninhos com EPI completo, seguida de desinfecção da superfície antes da instalação das barreiras.",
      },
      {
        titulo: "Instalação de barreiras",
        texto:
          "Espículas em aço inox, telas de nylon anti-pombos ou anti-morcegos, redes e fios tensionados — método humanitário, sem abate.",
      },
      {
        titulo: "Vedação de acessos",
        texto:
          "Fechamos vãos, respiros e frestas que permitem entrada em forros, sótãos e caixas de escada.",
      },
    ],
    garantia:
      "Garantia sobre a instalação das barreiras e o método é 100% humanitário — sem uso de venenos ou abate dos animais.",
    faqs: [
      {
        q: "É legal matar pombos ou morcegos?",
        a: "Não. Morcegos são protegidos pelo IBAMA e pombos exigem manejo humanitário. A Ampla trabalha apenas com afastamento por barreiras físicas.",
      },
      {
        q: "As espículas machucam as aves?",
        a: "Não. As espículas apenas impedem o pouso — a ave percebe a barreira e busca outro local. É método seguro e amplamente utilizado no mundo.",
      },
      {
        q: "Vocês fazem a limpeza das fezes acumuladas?",
        a: "Sim. Executamos a descontaminação completa com EPI antes de instalar as barreiras. Fezes secas soltam esporos perigosos, exigem manejo técnico.",
      },
      {
        q: "Atendem sótãos e forros com morcegos?",
        a: "Sim. Fazemos vedação dos acessos ao entardecer (após saída dos morcegos), impedindo o retorno sem prejudicar os animais.",
      },
    ],
    cta: "Solicitar orçamento de manejo",
  },
  {
    slug: "dedetizacao-residencial",
    nome: "Dedetização Residencial",
    h1: "Dedetização Residencial em Curitiba e Região Metropolitana",
    title: "Dedetização Residencial em Curitiba | Ampla — Seguro para Pets",
    description:
      "Dedetização residencial em Curitiba com produtos sem cheiro forte, seguros para crianças e pets. Elimina baratas, formigas, aranhas e mosquitos. Volta pra casa no mesmo dia.",
    icone: "home",
    intro:
      "Barata na cozinha, formiga na despensa, aranha no banheiro? A Ampla executa dedetização residencial com produtos registrados na ANVISA, sem cheiro forte e liberação de retorno em poucas horas.",
    contexto:
      "Atendemos casas e apartamentos em Curitiba e RMC com aplicação técnica de gel, spray e pó — dosagem calculada por metragem, aplicação em pontos estratégicos (rodapés, atrás de eletrodomésticos, ralos e frestas) e sem necessidade de retirar móveis ou roupas. Emitimos nota fiscal e certificado com validade de 6 meses.",
    sinais: [
      "Baratas aparecendo à noite na cozinha ou banheiro",
      "Formigas em trilha na despensa ou pia",
      "Aranhas em cantos altos, atrás de quadros ou no forro",
      "Mosquitos e mosquitinhos em ralos e vasos de planta",
      "Traças ou lepismas em livros, roupas e closet",
    ],
    riscos: [
      "Contaminação de alimentos por bactérias transportadas pelas baratas",
      "Alergias respiratórias por dejetos de ácaros e baratas",
      "Picadas de aranhas — algumas espécies são perigosas para crianças",
      "Aedes aegypti em água parada dentro de casa",
    ],
    metodo: [
      {
        titulo: "Vistoria e diagnóstico",
        texto:
          "O técnico identifica focos, espécies e pontos de entrada antes de aplicar qualquer produto.",
      },
      {
        titulo: "Aplicação segura",
        texto:
          "Gel e microcápsulas em pontos estratégicos, sem cheiro forte. Você pode voltar pra casa no mesmo dia com crianças e pets.",
      },
      {
        titulo: "Orientação e garantia",
        texto:
          "Deixamos orientações de manutenção e certificado com garantia de 6 meses — voltou praga, voltamos sem cobrar.",
      },
    ],
    garantia:
      "6 meses de garantia por escrito. Se qualquer praga tratada reaparecer nesse período, voltamos ao imóvel sem cobrança adicional.",
    faqs: [
      {
        q: "É seguro para crianças e pets?",
        a: "Sim. Usamos produtos ANVISA de baixa toxicidade e aplicação em pontos que animais e crianças não acessam. Após 2 a 4 horas o ambiente já está liberado.",
      },
      {
        q: "Preciso sair de casa? Por quanto tempo?",
        a: "Você fica fora apenas durante a aplicação (cerca de 1 a 2 horas). Depois basta ventilar o ambiente por mais 1 hora antes de retornar.",
      },
      {
        q: "Tem cheiro forte?",
        a: "Não. Trabalhamos com produtos de baixo odor. Diferente do que se usava há 20 anos, hoje a dedetização não deixa cheiro persistente.",
      },
      {
        q: "Preciso guardar roupas, alimentos e utensílios?",
        a: "Não é necessário. A aplicação é focada em rodapés, frestas e pontos de abrigo — não pulveriza superfícies de uso direto.",
      },
    ],
    cta: "Pedir orçamento residencial",
  },
  {
    slug: "dedetizacao-condominial",
    nome: "Dedetização Condominial",
    h1: "Dedetização de Condomínio em Curitiba — Contrato com Síndico",
    title: "Dedetização de Condomínio em Curitiba | Ampla — Contrato e Laudo",
    description:
      "Dedetização condominial em Curitiba: áreas comuns, garagem, lixeiras e apartamentos no mesmo cronograma. Contrato com síndico, preço por unidade, laudo e nota fiscal.",
    icone: "building",
    intro:
      "Morador reclamando de barata na garagem, rato na lixeira, formiga no hall? A Ampla atende condomínios em Curitiba com cronograma único para áreas comuns e apartamentos, contrato mensal ou avulso e laudo técnico entregue ao síndico.",
    contexto:
      "Trabalhamos com síndicos e administradoras de Curitiba e RMC no controle integrado de pragas em condomínios residenciais e comerciais. Cobrimos garagem, lixeiras, shafts, hall, salão de festas, playground, jardins e — quando contratado — apartamentos individuais no mesmo dia, com preço fechado por unidade e emissão de nota fiscal e laudo técnico assinado por responsável.",
    sinais: [
      "Reclamação recorrente de moradores sobre baratas ou ratos",
      "Presença de pombos, morcegos ou insetos na área comum",
      "Vencimento próximo do laudo exigido pela vigilância",
      "Troca de administradora ou nova gestão do síndico",
      "Obra recente que expôs shafts, tubulações ou telhado",
    ],
    riscos: [
      "Ações judiciais de moradores por infestação recorrente",
      "Autuação sanitária em áreas comuns de uso coletivo",
      "Desvalorização do imóvel e reclamações em assembleia",
      "Contaminação de alimentos armazenados em áreas comuns e churrasqueira",
    ],
    metodo: [
      {
        titulo: "Reunião técnica com o síndico",
        texto:
          "Levantamos plantas, histórico e pontos críticos. Apresentamos escopo, cronograma e preço por unidade — sem custo.",
      },
      {
        titulo: "Aplicação em áreas comuns",
        texto:
          "Garagem, lixeiras, shafts, salão, playground e jardins tratados em um único dia, com comunicado prévio aos moradores.",
      },
      {
        titulo: "Apartamentos (opcional)",
        texto:
          "Agendamos janelas por bloco para atender unidades que aderirem, mantendo o mesmo padrão técnico e a mesma garantia.",
      },
      {
        titulo: "Laudo e cronograma",
        texto:
          "Entrega de laudo técnico, nota fiscal e cronograma de retorno trimestral para manutenção contínua.",
      },
    ],
    garantia:
      "6 meses de garantia para as áreas tratadas e retorno sem custo em caso de reincidência. Contratos de manutenção têm SLA de atendimento em até 24h para chamados extras.",
    faqs: [
      {
        q: "Como funciona o preço para condomínio?",
        a: "Áreas comuns têm preço fechado pela metragem. Apartamentos têm valor por unidade (com desconto para quem adere no mesmo dia). O síndico aprova em orçamento formal antes de qualquer serviço.",
      },
      {
        q: "Vocês emitem laudo para a vigilância sanitária?",
        a: "Sim. Entregamos laudo técnico com produtos utilizados, áreas tratadas, responsável técnico e validade — no padrão exigido pela vigilância de Curitiba.",
      },
      {
        q: "Precisa evacuar o prédio?",
        a: "Não. As áreas comuns são liberadas em poucas horas e os apartamentos apenas durante a aplicação. Comunicamos moradores com antecedência.",
      },
      {
        q: "Fazem contrato mensal ou só serviço avulso?",
        a: "Ambos. A maioria dos condomínios opta por contrato trimestral com preço reduzido, mas atendemos também emergências pontuais.",
      },
    ],
    cta: "Falar com técnico para o condomínio",
  },
  {
    slug: "dedetizacao-preventiva",
    nome: "Dedetização Preventiva",
    h1: "Dedetização Preventiva em Curitiba — Plano Trimestral",
    title: "Dedetização Preventiva em Curitiba | Ampla — Plano Trimestral",
    description:
      "Plano preventivo de dedetização em Curitiba com visitas trimestrais programadas. Custa menos que uma emergência e mantém o imóvel protegido o ano inteiro.",
    icone: "shield",
    intro:
      "Cansou de chamar dedetizadora só quando a praga aparece? O plano preventivo da Ampla mantém residência, comércio ou indústria protegidos com visitas trimestrais programadas — mais barato que dedetizações emergenciais avulsas.",
    contexto:
      "O programa preventivo é baseado no protocolo de Manejo Integrado de Pragas (MIP). Fazemos vistoria inicial, cronograma de 4 visitas anuais, aplicação sazonal (o produto e o alvo mudam conforme a época do ano em Curitiba) e monitoramento com relatórios. Ideal para casas, escritórios, restaurantes e indústrias que dependem de padrão sanitário.",
    sinais: [
      "Histórico de infestação nos últimos 12 meses",
      "Imóvel próximo a terrenos baldios, mata ou lixeira coletiva",
      "Restaurantes, padarias e cozinhas industriais",
      "Áreas de estoque, depósitos e almoxarifados",
      "Contratos com clientes que exigem certificação sanitária",
    ],
    riscos: [
      "Custo maior com dedetização emergencial no meio da temporada",
      "Perda de estoque contaminado por roedores ou insetos",
      "Interdição parcial ou multa da vigilância sanitária",
      "Perda de contrato com clientes B2B que exigem laudo",
    ],
    metodo: [
      {
        titulo: "Vistoria e plano personalizado",
        texto:
          "Mapeamos pontos críticos e definimos calendário de visitas conforme sazonalidade e uso do imóvel.",
      },
      {
        titulo: "Visitas trimestrais programadas",
        texto:
          "4 aplicações por ano com produto rotacionado para evitar resistência das pragas — sem esperar aparecer infestação.",
      },
      {
        titulo: "Monitoramento e relatórios",
        texto:
          "Porta-iscas monitorados, checklists e relatórios digitais entregues após cada visita, disponíveis para auditoria.",
      },
      {
        titulo: "Atendimento extra sem custo",
        texto:
          "Se aparecer qualquer praga entre visitas, voltamos ao imóvel sem cobrar — enquanto o contrato estiver ativo.",
      },
    ],
    garantia:
      "Enquanto o plano estiver ativo, atendimentos extras são gratuitos. Cancelamento simples, sem multa, com aviso de 30 dias.",
    faqs: [
      {
        q: "Quanto custa o plano preventivo?",
        a: "Depende da metragem e do tipo de imóvel. Em média, custa 30% a 40% menos que fazer 4 dedetizações avulsas no ano. Orçamento personalizado gratuito.",
      },
      {
        q: "Vale a pena mesmo sem infestação hoje?",
        a: "Sim — é justamente o momento certo. Prevenir custa menos, evita perdas, e é obrigatório para quem depende de laudo sanitário.",
      },
      {
        q: "Se aparecer barata entre uma visita e outra, cobram extra?",
        a: "Não. Enquanto o contrato estiver ativo, atendimentos extras são sem custo — faz parte do plano.",
      },
      {
        q: "Emite laudo e nota fiscal a cada visita?",
        a: "Sim. Após cada aplicação enviamos relatório digital, laudo técnico e nota fiscal. Padrão aceito por vigilância e auditoria.",
      },
    ],
    cta: "Quero o plano preventivo",
  },
];

export const findServicoEspecial = (slug: string) =>
  servicosEspeciais.find((s) => s.slug === slug);