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
  icone: "droplet" | "rat" | "bird";
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
];

export const findServicoEspecial = (slug: string) =>
  servicosEspeciais.find((s) => s.slug === slug);