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
 "Ratos, camundongos e ratazanas transmitem leptospirose, hantavirose e salmonelose. Uma única fêmea gera mais de 100 filhotes por ano, quanto mais cedo o controle, menor o custo.",
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
 "A Ampla instala barreiras físicas, espículas anti-pouso em aço inox, telas de nylon, redes e sistemas de fios tensionados, para afastar pombos e morcegos de fachadas, beirais, sótãos, forros, torres e ambientes industriais em Curitiba e RMC. Também executamos limpeza e descontaminação de fezes acumuladas com EPI completo.",
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
 "Espículas em aço inox, telas de nylon anti-pombos ou anti-morcegos, redes e fios tensionados, método humanitário, sem abate.",
 },
 {
 titulo: "Vedação de acessos",
 texto:
 "Fechamos vãos, respiros e frestas que permitem entrada em forros, sótãos e caixas de escada.",
 },
 ],
 garantia:
 "Garantia sobre a instalação das barreiras e o método é 100% humanitário, sem uso de venenos ou abate dos animais.",
 faqs: [
 {
 q: "É legal matar pombos ou morcegos?",
 a: "Não. Morcegos são protegidos pelo IBAMA e pombos exigem manejo humanitário. A Ampla trabalha apenas com afastamento por barreiras físicas.",
 },
 {
 q: "As espículas machucam as aves?",
 a: "Não. As espículas apenas impedem o pouso, a ave percebe a barreira e busca outro local. É método seguro e amplamente utilizado no mundo.",
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
 title: "Dedetização Residencial em Curitiba | Ampla, Seguro para Pets",
 description:
 "Dedetização residencial em Curitiba com produtos sem cheiro forte, seguros para crianças e pets. Elimina baratas, formigas, aranhas e mosquitos. Volta pra casa no mesmo dia.",
 icone: "home",
 intro:
 "Barata na cozinha, formiga na despensa, aranha no banheiro? A Ampla executa dedetização residencial com produtos registrados na ANVISA, sem cheiro forte e liberação de retorno em poucas horas.",
 contexto:
 "Atendemos casas e apartamentos em Curitiba e RMC com aplicação técnica de gel, spray e pó, dosagem calculada por metragem, aplicação em pontos estratégicos (rodapés, atrás de eletrodomésticos, ralos e frestas) e sem necessidade de retirar móveis ou roupas. Emitimos nota fiscal e certificado com validade de 6 meses.",
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
 "Picadas de aranhas, algumas espécies são perigosas para crianças",
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
 "Deixamos orientações de manutenção e certificado com garantia de 6 meses, voltou praga, voltamos sem cobrar.",
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
 a: "Não é necessário. A aplicação é focada em rodapés, frestas e pontos de abrigo, não pulveriza superfícies de uso direto.",
 },
 ],
 cta: "Pedir orçamento residencial",
 },
 {
 slug: "dedetizacao-condominial",
 nome: "Dedetização Condominial",
 h1: "Dedetização de Condomínio em Curitiba, Contrato com Síndico",
 title: "Dedetização de Condomínio em Curitiba | Ampla, Contrato e Laudo",
 description:
  "Dedetização condominial em Curitiba: áreas comuns, garagem, lixeiras e apartamentos no mesmo cronograma. Contrato com síndico, orçamento por unidade, laudo e nota fiscal.",
 icone: "building",
 intro:
 "Morador reclamando de barata na garagem, rato na lixeira, formiga no hall? A Ampla atende condomínios em Curitiba com cronograma único para áreas comuns e apartamentos, contrato mensal ou avulso e laudo técnico entregue ao síndico.",
 contexto:
  "Trabalhamos com síndicos e administradoras de Curitiba e RMC no controle integrado de pragas em condomínios residenciais e comerciais. Cobrimos garagem, lixeiras, shafts, hall, salão de festas, playground, jardins e, quando contratado, apartamentos individuais no mesmo dia, com orçamento fechado por unidade e emissão de nota fiscal e laudo técnico assinado por responsável.",
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
  "Levantamos plantas, histórico e pontos críticos. Apresentamos escopo, cronograma e orçamento por unidade, sem custo.",
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
 q: "Como funciona o orçamento para condomínio?",
 a: "Áreas comuns têm orçamento fechado pela metragem. Apartamentos têm valor por unidade (com desconto para quem adere no mesmo dia). O síndico aprova em orçamento formal antes de qualquer serviço.",
 },
 {
 q: "Vocês emitem laudo para a vigilância sanitária?",
 a: "Sim. Entregamos laudo técnico com produtos utilizados, áreas tratadas, responsável técnico e validade, no padrão exigido pela vigilância de Curitiba.",
 },
 {
 q: "Precisa evacuar o prédio?",
 a: "Não. As áreas comuns são liberadas em poucas horas e os apartamentos apenas durante a aplicação. Comunicamos moradores com antecedência.",
 },
 {
 q: "Fazem contrato mensal ou só serviço avulso?",
 a: "Ambos. A maioria dos condomínios opta por contrato trimestral com condições reduzidas, mas atendemos também emergências pontuais.",
 },
 ],
 cta: "Falar com técnico para o condomínio",
 },
 {
 slug: "dedetizacao-preventiva",
 nome: "Dedetização Preventiva",
 h1: "Dedetização Preventiva em Curitiba, Plano Trimestral",
 title: "Dedetização Preventiva em Curitiba | Ampla, Plano Trimestral",
 description:
 "Plano preventivo de dedetização em Curitiba com visitas trimestrais programadas. Custa menos que uma emergência e mantém o imóvel protegido o ano inteiro.",
 icone: "shield",
 intro:
 "Cansou de chamar dedetizadora só quando a praga aparece? O plano preventivo da Ampla mantém residência, comércio ou indústria protegidos com visitas trimestrais programadas, mais barato que dedetizações emergenciais avulsas.",
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
 "4 aplicações por ano com produto rotacionado para evitar resistência das pragas, sem esperar aparecer infestação.",
 },
 {
 titulo: "Monitoramento e relatórios",
 texto:
 "Porta-iscas monitorados, checklists e relatórios digitais entregues após cada visita, disponíveis para auditoria.",
 },
 {
 titulo: "Atendimento extra sem custo",
 texto:
 "Se aparecer qualquer praga entre visitas, voltamos ao imóvel sem cobrar, enquanto o contrato estiver ativo.",
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
 a: "Sim, é justamente o momento certo. Prevenir custa menos, evita perdas, e é obrigatório para quem depende de laudo sanitário.",
 },
 {
 q: "Se aparecer barata entre uma visita e outra, cobram extra?",
 a: "Não. Enquanto o contrato estiver ativo, atendimentos extras são sem custo, faz parte do plano.",
 },
 {
 q: "Emite laudo e nota fiscal a cada visita?",
 a: "Sim. Após cada aplicação enviamos relatório digital, laudo técnico e nota fiscal. Padrão aceito por vigilância e auditoria.",
 },
 ],
 cta: "Quero o plano preventivo",
 },
 {
  slug: "dedetizacao-restaurantes",
  nome: "Dedetização para Restaurantes",
  h1: "Dedetização para Restaurantes em Curitiba: MIP com Laudo Sanitário",
  title: "Dedetização para Restaurantes em Curitiba | Ampla, Laudo ANVISA",
  description:
   "Dedetização para restaurantes em Curitiba com laudo técnico aceito pela vigilância sanitária. MIP, cronograma noturno e conformidade ANVISA. Orçamento grátis.",
  icone: "building",
  intro:
   "Restaurante não pode ter praga, uma barata na cozinha vira post viral e vira interdição. A Ampla executa Manejo Integrado de Pragas em restaurantes de Curitiba com aplicação noturna, laudo técnico e certificado aceito pela vigilância.",
  contexto:
   "Atendemos restaurantes, pizzarias, hamburguerias, self-service, cafeterias e cozinhas industriais em Curitiba e RMC. Trabalhamos com Manejo Integrado de Pragas (MIP), cronograma de visitas mensais, produtos ANVISA sem cheiro residual, aplicação fora do horário de operação e emissão de laudo técnico exigido pela vigilância sanitária municipal.",
  sinais: [
   "Baratas ou formigas em cozinha, bancada ou área de manipulação",
   "Ratos ou fezes em estoque, depósito e área externa",
   "Fiscalização apontou não conformidade no laudo",
   "Ausência de contrato de dedetização atualizado",
   "Reclamação de cliente sobre praga ou higiene",
  ],
  riscos: [
   "Interdição pela vigilância sanitária municipal",
   "Multas de vigilância e prefeitura",
   "Contaminação de alimentos por E. coli, Salmonella e coliformes",
   "Post viral em redes sociais e queda de faturamento",
   "Perda de contrato com iFood, Rappi e delivery",
  ],
  metodo: [
   {
    titulo: "Vistoria e escopo técnico",
    texto:
     "Nosso responsável técnico faz vistoria completa: cozinha, estoque, área de lixo, banheiros e área externa. Mapeamos pontos críticos e definimos plano MIP.",
   },
   {
    titulo: "Aplicação noturna",
    texto:
     "Trabalhamos após o fechamento do restaurante para não interromper operação nem exigir liberação do salão no dia seguinte.",
   },
   {
    titulo: "Cronograma MIP mensal",
    texto:
     "Visitas programadas com rotação de produto (evita resistência), monitoramento de porta-iscas e checklist digital entregue ao gerente.",
   },
   {
    titulo: "Laudo e certificado",
    texto:
     "Emitimos laudo técnico com produtos, lotes, responsável técnico e validade, no padrão exigido pela vigilância sanitária de Curitiba.",
   },
  ],
  garantia:
   "Contrato mensal com SLA de 24h para chamados extras sem custo. Substituímos o serviço em caso de reprovação em fiscalização.",
  faqs: [
   {
    q: "Vocês atendem restaurante só de noite?",
    a: "Sim. Trabalhamos após o fechamento para não interferir na operação e liberar a cozinha para o primeiro turno do dia seguinte.",
   },
   {
    q: "O laudo é aceito pela vigilância?",
    a: "Sim. Emitimos laudo técnico com nossa CTF/IBAMA, produtos ANVISA, responsável técnico e validade, no padrão exigido pela vigilância municipal.",
   },
   {
    q: "Preciso de contrato ou pode ser avulso?",
    a: "Restaurante precisa de contrato mensal ou trimestral pra manter conformidade sanitária. Também atendemos avulso, mas o desconto e a garantia são maiores no contrato.",
   },
   {
    q: "Vocês fazem para cozinha industrial e delivery-only?",
    a: "Sim. Atendemos cozinhas industriais, dark kitchens e centrais de produção com mesmo padrão MIP.",
   },
  ],
  cta: "Solicitar cotação para restaurante",
 },
 {
  slug: "dedetizacao-supermercados",
  nome: "Dedetização para Supermercados",
  h1: "Dedetização para Supermercados e Mercados em Curitiba",
  title: "Dedetização para Supermercados em Curitiba | Ampla, MIP",
  description:
   "Dedetização para supermercados, mercados e atacadistas em Curitiba. MIP com monitoramento de roedores, laudo e conformidade sanitária. Orçamento grátis.",
  icone: "building",
  intro:
   "Supermercado tem 3 desafios simultâneos: estoque de alimentos (roedor e barata), padaria (formiga e mosca) e área externa (pombos e ratazana). A Ampla resolve os 3 com um programa MIP único e laudo aceito pela vigilância.",
  contexto:
   "Atendemos supermercados, mercados de bairro, atacadistas, hortifrutis e padarias em Curitiba e RMC. Programa MIP com porta-iscas mapeados em croqui, monitoramento quinzenal, aplicação segmentada (padaria, açougue, hortifruti, estoque, docas) e laudo técnico para vigilância e auditorias de rede.",
  sinais: [
   "Fezes de rato em prateleira, estoque ou área de descarga",
   "Baratas na área da padaria ou depósito",
   "Formigas em prateleira de doces e cereais",
   "Pombos na área externa, doca e telhado",
   "Reprovação em auditoria de rede ou fornecedor",
  ],
  riscos: [
   "Perda de produtos contaminados (roedor e inseto)",
   "Multa e interdição pela vigilância sanitária",
   "Perda de contrato com fornecedores e redes",
   "Reclamação de cliente e queda de reputação",
   "Curto-circuito por fios roídos em freezer e câmara fria",
  ],
  metodo: [
   {
    titulo: "Vistoria e croqui técnico",
    texto:
     "Mapeamos toda a loja: docas, estoque, câmaras frias, padaria, açougue, hortifruti e área externa. Elaboramos croqui com posição de cada porta-iscas.",
   },
   {
    titulo: "MIP com monitoramento quinzenal",
    texto:
     "Aplicação segmentada por setor, produto rotacionado, monitoramento de porta-iscas a cada 15 dias e checklist digital.",
   },
   {
    titulo: "Controle de aves na área externa",
    texto:
     "Instalação de barreiras físicas em beirais, doca e telhado para afastar pombos sem uso de veneno.",
   },
   {
    titulo: "Laudo e auditoria",
    texto:
     "Laudo técnico com croqui, produtos, responsável técnico e histórico de leituras, aceito por vigilância, rede e auditoria externa.",
   },
  ],
  garantia:
   "Contrato mensal com SLA de 24h. Substituímos serviços em caso de reprovação em auditoria ou fiscalização.",
  faqs: [
   {
     q: "Como funciona o orçamento para supermercado?",
    a: "Cobramos por metragem total e número de porta-iscas monitorados. Orçamento formal por escrito antes do início do contrato, sem custo.",
   },
   {
    q: "Vocês atendem rede com várias lojas?",
    a: "Sim. Padronizamos o programa MIP entre lojas, com laudo consolidado por unidade e responsável técnico único para toda a rede.",
   },
   {
    q: "Preciso fechar a loja para a aplicação?",
    a: "Não. Aplicamos em horário programado (madrugada ou pré-abertura) sem interromper operação nem exigir liberação.",
   },
   {
    q: "O laudo serve pra auditoria de rede?",
    a: "Sim. Padrão exigido por auditorias sanitárias e de qualidade de redes nacionais.",
   },
  ],
  cta: "Solicitar cotação para supermercado",
 },
 {
  slug: "dedetizacao-industrias",
  nome: "Dedetização Industrial",
  h1: "Dedetização Industrial em Curitiba: MIP com ART e Laudo",
  title: "Dedetização Industrial em Curitiba | Ampla, MIP com ART",
  description:
   "Dedetização industrial em Curitiba com MIP, ART, laudo técnico e conformidade para auditorias ISO, HACCP e FSSC 22000. Atendemos galpões e fábricas.",
  icone: "building",
  intro:
   "Indústria não trata praga como incômodo, trata como não conformidade. A Ampla executa MIP industrial em Curitiba com ART, croqui técnico, monitoramento contínuo e laudo aceito em auditorias ISO, HACCP e FSSC 22000.",
  contexto:
   "Atendemos indústrias, galpões logísticos, centros de distribuição, farmacêuticas, alimentícias e metalúrgicas em Curitiba, CIC e RMC. Programa MIP com croqui técnico, porta-iscas mapeados com QR code, monitoramento quinzenal, relatórios digitais e ART do responsável técnico.",
  sinais: [
   "Não conformidade em auditoria interna, cliente ou certificação",
   "Roedores ou insetos na área produtiva ou de armazenagem",
   "Ausência de programa MIP formal e croqui atualizado",
   "Vencimento próximo de laudo ou certificação (ISO, HACCP, FSSC)",
   "Troca de fornecedor de controle de pragas",
  ],
  riscos: [
   "Perda de certificação (ISO 22000, FSSC, HACCP, BPF)",
   "Recall e devolução de lote contaminado",
   "Perda de contrato com cliente que exige laudo",
   "Interdição parcial da vigilância sanitária",
   "Multas de vigilância e autuações do MAPA",
  ],
  metodo: [
   {
    titulo: "Vistoria e planta técnica",
    texto:
     "Mapeamento completo com planta baixa, definição de perímetro, zoneamento interno/externo e pontos de monitoramento.",
   },
   {
    titulo: "MIP com monitoramento contínuo",
    texto:
     "Porta-iscas numerados com QR code, leituras quinzenais, rotação de princípio ativo e relatório digital por visita.",
   },
   {
    titulo: "Aplicação técnica por setor",
    texto:
     "Produto específico por área (área produtiva, armazenagem, escritório, área externa) respeitando normas HACCP e BPF.",
   },
   {
    titulo: "ART e laudo para auditoria",
    texto:
     "ART do responsável técnico, laudo consolidado, histórico de leituras, tabela de produtos e MSDS disponível para auditoria.",
   },
  ],
  garantia:
   "Contrato mensal com SLA de 24h para chamados extras. Substituímos serviços em caso de não conformidade em auditoria.",
  faqs: [
   {
    q: "Vocês têm responsável técnico com ART?",
    a: "Sim. Emitimos ART para o contrato e temos responsável técnico registrado no CRQ, exigido para indústria e certificação.",
   },
   {
    q: "Atendem norma HACCP e FSSC 22000?",
    a: "Sim. Programa MIP compatível com HACCP, BPF, FSSC 22000 e auditorias de rede internacional.",
   },
   {
    q: "Como funciona o monitoramento?",
    a: "Porta-iscas com QR code, leitura quinzenal, tendência mensal, relatório digital acessível ao time de qualidade em tempo real.",
   },
   {
    q: "Vocês atendem CIC e Araucária?",
    a: "Sim. CIC, Araucária, São José dos Pinhais e Campo Largo estão na nossa rota diária, com tempo de resposta em até 24h para chamados extras.",
   },
  ],
  cta: "Solicitar cotação industrial",
 },
 {
  slug: "dedetizacao-escolas",
  nome: "Dedetização para Escolas e Creches",
  h1: "Dedetização para Escolas e Creches em Curitiba, Sem Cheiro e Sem Risco",
  title: "Dedetização para Escolas e Creches em Curitiba | Ampla",
  description:
   "Dedetização para escolas e creches em Curitiba com produtos ANVISA sem cheiro, aplicação em feriado e laudo técnico. Seguro para crianças. Orçamento grátis.",
  icone: "building",
  intro:
   "Escola e creche não podem ter cheiro de veneno nem risco para as crianças. A Ampla trabalha com aplicação em feriado ou fim de semana, produtos ANVISA de baixo odor e liberação imediata da área, com laudo técnico exigido pela vigilância.",
  contexto:
   "Atendemos escolas particulares, colégios, creches, CMEIs e cursos livres em Curitiba e RMC. Aplicação em recesso ou fim de semana, produtos ANVISA de baixo odor e baixa toxicidade, foco em pontos que crianças não acessam (rodapés, ralos, atrás de móveis) e laudo técnico exigido pela vigilância sanitária.",
  sinais: [
   "Baratas em cozinha, refeitório, banheiro ou sala",
   "Ratos em pátio, depósito ou área de lixo",
   "Escorpião ou aranha em quintal, jardim ou pátio",
   "Vencimento próximo do laudo exigido pela vigilância",
   "Reclamação de pais ou funcionários sobre praga",
  ],
  riscos: [
   "Multa e interdição pela vigilância sanitária escolar",
   "Reclamação de pais e perda de matrículas",
   "Contaminação de merenda e utensílios",
   "Picada de escorpião ou aranha em criança",
   "Doenças respiratórias por dejetos de pombos",
  ],
  metodo: [
   {
    titulo: "Cronograma em recesso",
    texto:
     "Agendamos aplicações em feriado, fim de semana ou recesso escolar, sem interrupção de aula.",
   },
   {
    titulo: "Produto de baixo odor",
    texto:
     "Uso de gel, microcápsulas e produtos ANVISA de baixa toxicidade, com liberação da área em poucas horas.",
   },
   {
    titulo: "Foco em pontos protegidos",
    texto:
     "Aplicação em rodapés, ralos, atrás de móveis e áreas técnicas, sem contato com brinquedos, sala de aula ou refeitório.",
   },
   {
    titulo: "Laudo para vigilância",
    texto:
     "Laudo técnico com produtos, lotes, áreas e responsável técnico, aceito pela vigilância sanitária escolar.",
   },
  ],
  garantia:
   "6 meses de garantia por escrito. Retorno sem custo em caso de reincidência entre visitas.",
  faqs: [
   {
    q: "É seguro para crianças e bebês?",
    a: "Sim. Trabalhamos com produtos ANVISA de baixa toxicidade, aplicados em pontos que crianças não acessam. Área liberada em poucas horas, sem cheiro residual.",
   },
   {
    q: "Vocês aplicam em recesso escolar?",
    a: "Sim. Nosso cronograma se adapta a feriado, fim de semana ou recesso pra não interromper aula.",
   },
   {
    q: "Emitem laudo pra vigilância?",
    a: "Sim. Laudo técnico completo aceito pela vigilância sanitária escolar de Curitiba.",
   },
   {
    q: "Atendem CMEI e escola particular?",
    a: "Sim. Atendemos escolas particulares, colégios, CMEIs, creches e cursos livres.",
   },
  ],
  cta: "Solicitar cotação para escola",
 },
 {
  slug: "dedetizacao-hospitais-clinicas",
  nome: "Dedetização para Hospitais e Clínicas",
  h1: "Dedetização para Hospitais e Clínicas em Curitiba: Padrão RDC",
  title: "Dedetização Hospital e Clínica em Curitiba | Ampla, RDC",
  description:
   "Dedetização para hospitais, clínicas e laboratórios em Curitiba. Padrão RDC ANVISA, sem cheiro, laudo técnico e cronograma noturno. Orçamento grátis.",
  icone: "building",
  intro:
   "Hospital e clínica exigem controle de pragas em padrão RDC ANVISA, sem interromper atendimento, sem contaminar áreas críticas e com laudo aceito por acreditação. A Ampla executa MIP hospitalar em Curitiba nessa exigência.",
  contexto:
   "Atendemos hospitais, clínicas médicas, odontológicas, veterinárias, laboratórios de análises e centros de diagnóstico em Curitiba e RMC. Programa MIP hospitalar com aplicação noturna, produtos ANVISA compatíveis com RDC, zoneamento de áreas críticas/semicríticas/não críticas e laudo aceito por ONA e acreditação.",
  sinais: [
   "Baratas em cozinha, copa, banheiro ou área de resíduo",
   "Formigas em farmácia, almoxarifado ou centro cirúrgico",
   "Ratos em depósito, lavanderia ou área externa",
   "Vencimento próximo do laudo exigido pela vigilância",
   "Não conformidade em auditoria de acreditação",
  ],
  riscos: [
   "Infecção hospitalar por vetor mecânico",
   "Perda de acreditação (ONA, JCI) e certificação",
   "Interdição parcial de área crítica",
   "Contaminação de material estéril e medicamento",
   "Multa e autuação pela vigilância sanitária",
  ],
  metodo: [
   {
    titulo: "Zoneamento hospitalar",
    texto:
     "Mapeamento por classificação de área: crítica (centro cirúrgico, UTI), semicrítica (enfermaria) e não crítica (administrativo). Produto e método específicos por zona.",
   },
   {
    titulo: "Aplicação noturna",
    texto:
     "Cronograma noturno ou em horário de baixo movimento, sem interromper atendimento, com liberação imediata após aplicação.",
   },
   {
    titulo: "Produtos compatíveis RDC",
    texto:
     "Produtos ANVISA compatíveis com RDC, sem odor residual, aprovados para uso hospitalar e área de saúde.",
   },
   {
    titulo: "Laudo para acreditação",
    texto:
     "Laudo técnico com croqui, produtos, MSDS, ART, responsável técnico e histórico, aceito por acreditação ONA e JCI.",
   },
  ],
  garantia:
   "Contrato mensal com SLA de 24h para chamados extras. Substituímos serviços em caso de não conformidade em auditoria.",
  faqs: [
   {
    q: "Vocês atendem UTI e centro cirúrgico?",
    a: "Sim. Áreas críticas têm protocolo próprio, produto específico e aplicação em horário programado com o time de infecção hospitalar.",
   },
   {
    q: "O laudo serve pra ONA?",
    a: "Sim. Laudo técnico compatível com acreditação hospitalar ONA e JCI, com MSDS e ART do responsável.",
   },
   {
    q: "Precisa fechar a área para aplicação?",
    a: "Não. Trabalhamos em horário de baixo movimento e liberamos a área em poucas horas, sem interromper atendimento.",
   },
   {
    q: "Atendem clínica pequena e consultório?",
    a: "Sim. Atendemos desde consultório odontológico até hospital de médio porte, com o mesmo padrão técnico.",
   },
  ],
  cta: "Solicitar cotação hospital ou clínica",
 },
 {
  slug: "dedetizacao-hoteis",
  nome: "Dedetização para Hotéis e Pousadas",
  h1: "Dedetização para Hotéis e Pousadas em Curitiba, Foco em Percevejo",
  title: "Dedetização para Hotéis em Curitiba | Ampla, Foco em Percevejo",
  description:
   "Dedetização para hotéis, pousadas e hostels em Curitiba com foco em percevejo, MIP, aplicação por apartamento e laudo técnico. Orçamento grátis.",
  icone: "building",
  intro:
   "Hotel com percevejo perde reputação da noite pro dia. Uma reclamação no Booking ou TripAdvisor derruba a ocupação por meses. A Ampla trabalha com prevenção MIP + protocolo de choque em caso de suspeita, em Curitiba e RMC.",
  contexto:
   "Atendemos hotéis, pousadas, hostels, resorts e apart-hotéis em Curitiba e RMC. Programa MIP com foco em percevejo (2 aplicações com 15 dias de intervalo), inspeção por apartamento, aplicação em áreas comuns (recepção, restaurante, cozinha, spa, área externa) e laudo técnico aceito pela vigilância sanitária.",
  sinais: [
   "Hóspede reclamou de picada em fileira ao acordar",
   "Manchinha preta em costura de colchão ou box",
   "Baratas no restaurante, cozinha ou bar",
   "Ratos em depósito, cozinha ou lixeira",
   "Ausência de contrato de dedetização atualizado",
  ],
  riscos: [
   "Avaliação negativa em Booking, Airbnb e TripAdvisor",
   "Perda de credenciamento com OTA e agência corporativa",
   "Interdição de apartamento infestado",
   "Perda de contrato com empresa e evento corporativo",
   "Custo alto de indenização a hóspede",
  ],
  metodo: [
   {
    titulo: "MIP preventivo em áreas comuns",
    texto:
     "Aplicação mensal em recepção, restaurante, cozinha, bar, spa, lavanderia e área externa, com monitoramento e laudo.",
   },
   {
    titulo: "Inspeção de apartamento",
    texto:
     "Vistoria periódica em costuras de colchão, box, cabeceira e rodapé para detectar percevejo antes que hóspede reclame.",
   },
   {
    titulo: "Protocolo de choque para percevejo",
    texto:
     "Se detectado percevejo: bloqueio do apartamento, 2 aplicações com 15 dias de intervalo, tratamento térmico de roupa de cama e liberação com laudo.",
   },
   {
    titulo: "Laudo para vigilância",
    texto:
     "Laudo técnico mensal com produtos, apartamentos vistoriados, responsável técnico e validade, aceito pela vigilância sanitária.",
   },
  ],
  garantia:
   "Contrato mensal com SLA de 12h para caso de percevejo. Retorno sem custo em caso de reincidência dentro do contrato.",
  faqs: [
   {
     q: "Como funciona o orçamento para hotel?",
    a: "Cobramos por número de apartamentos e áreas comuns, com desconto para contrato mensal. Orçamento formal antes de fechar contrato.",
   },
   {
    q: "Vocês têm protocolo específico pra percevejo?",
    a: "Sim. 2 aplicações com 15 dias de intervalo (pra pegar ovos que eclodem depois), tratamento térmico de tecidos e laudo de liberação por apartamento.",
   },
   {
    q: "Precisa fechar apartamento durante aplicação?",
    a: "O apartamento fica bloqueado apenas durante a aplicação (2 a 4 horas). Depois é liberado, sem cheiro residual.",
   },
   {
    q: "Atendem hostel e pousada pequena?",
    a: "Sim. Atendemos desde hostel com dormitório compartilhado até resort, com mesmo padrão técnico e laudo.",
   },
  ],
  cta: "Solicitar cotação para hotel",
 },
 {
  slug: "sanitizacao",
  nome: "Sanitização de Ambientes",
  h1: "Sanitização e Desinfecção de Ambientes em Curitiba",
  title: "Sanitização de Ambientes em Curitiba | ANVISA - Ampla",
  description:
   "Sanitização e desinfecção de ambientes em Curitiba e RMC. Elimina até 99,9% de vírus, bactérias e fungos. Produto ANVISA, laudo e nota fiscal.",
  icone: "shield",
  intro:
   "A sanitização elimina vírus, bactérias e fungos de superfícies e ar em residências, empresas, consultórios, escolas e frotas. É diferente da dedetização, foca em microorganismos, não em pragas.",
  contexto:
   "A Ampla executa sanitização com nebulização a frio (ULV) e pulverização direcionada, usando saneantes registrados no Ministério da Saúde e na ANVISA. Recomendada após surtos de gripe, viroses ou COVID, em escritórios com muita rotatividade, escolas, veículos de aplicativo e ambientes hospitalares. Emitimos certificado com produto, lote e responsável técnico.",
  sinais: [
   "Casos frequentes de gripe ou virose no time",
   "Retomada de escritório ou escola após período fechado",
   "Consultório, clínica ou salão de beleza sob fiscalização",
   "Frota de veículos (Uber, ambulância, transporte escolar)",
   "Reforma recente com poeira e mofo residuais",
  ],
  riscos: [
   "Transmissão de vírus respiratórios em ambientes fechados",
   "Proliferação de fungos causadores de alergia",
   "Contaminação cruzada em consultórios e clínicas",
   "Multa por descumprimento de protocolo sanitário",
  ],
  metodo: [
   { titulo: "Vistoria e cálculo de dosagem", texto: "Medimos o ambiente e definimos volume de produto e método (nebulização, pulverização ou termonebulização)." },
   { titulo: "Aplicação ULV", texto: "Nebulização a frio que atinge superfícies, frestas e ar, sem molhar equipamentos eletrônicos." },
   { titulo: "Tempo de ação e liberação", texto: "Ambiente liberado em 30 a 60 minutos, com boa ventilação. Sem cheiro residual." },
   { titulo: "Certificado técnico", texto: "Emissão de certificado com data, produto, lote e assinatura do responsável, aceito por vigilância." },
  ],
  garantia: "Certificado técnico emitido no ato. Sanitização recomendada trimestralmente para ambientes de alto fluxo.",
  faqs: [
   { q: "Sanitização é a mesma coisa que dedetização?", a: "Não. Dedetização elimina pragas (insetos e roedores). Sanitização elimina microorganismos (vírus, bactérias e fungos)." },
   { q: "Precisa retirar móveis e eletrônicos?", a: "Não. A nebulização ULV é segura para eletrônicos, basta desligar da tomada durante a aplicação." },
   { q: "Em quanto tempo posso usar o ambiente?", a: "Entre 30 e 60 minutos após a aplicação, com ventilação. Sem cheiro forte." },
   { q: "Vocês sanitizam veículos?", a: "Sim. Atendemos frota de aplicativo, transporte escolar, ambulâncias e vans com preço por veículo." },
  ],
  cta: "Solicitar orçamento de sanitização",
 },
 {
  slug: "limpeza-de-telhado",
  nome: "Limpeza de Telhado",
  h1: "Limpeza de Telhado em Curitiba",
  title: "Limpeza de Telhado em Curitiba | Ampla",
  description:
   "Limpeza de telhado em Curitiba e RMC. Remoção de limo, musgo, folhas e sujeira acumulada. Equipe com equipamento de segurança em altura e NR-35.",
  icone: "home",
  intro:
   "Telhados sujos acumulam limo, musgo, folhas e ninhos que entopem calhas, escurecem as telhas e podem gerar infiltrações. A limpeza periódica prolonga a vida útil da cobertura.",
  contexto:
   "A Ampla realiza limpeza técnica de telhados em residências, condomínios, indústrias e comércios de Curitiba e RMC. Nossa equipe é treinada em NR-35 (trabalho em altura), utiliza cinto, linha de vida e EPI completo. Removemos limo, musgo, folhas e detritos, e aplicamos solução biocida para evitar retorno da vegetação em telhas cerâmicas, coloniais e fibrocimento.",
  sinais: [
   "Telhas escurecidas por limo e musgo",
   "Calhas transbordando ou entupidas",
   "Infiltrações no forro após chuva",
   "Acúmulo de folhas e ninhos de aves",
   "Preparo para pintura ou impermeabilização",
  ],
  riscos: [
   "Infiltração e apodrecimento do madeiramento",
   "Curto-circuito por telhas quebradas",
   "Acidentes por tentativa de limpeza sem equipamento",
   "Proliferação de pombos e insetos em ninhos abandonados",
  ],
  metodo: [
   { titulo: "Inspeção e plano de segurança", texto: "Avaliamos telhado, definimos pontos de ancoragem e montamos linha de vida." },
   { titulo: "Remoção mecânica", texto: "Retiramos folhas, galhos, ninhos e detritos com equipamento específico." },
   { titulo: "Lavagem com biocida", texto: "Aplicamos solução que remove limo e musgo sem danificar telhas ou pintura." },
   { titulo: "Vistoria final e laudo", texto: "Identificamos telhas trincadas, indicamos reparos e entregamos laudo." },
  ],
  garantia: "Tratamento com biocida que retarda o retorno de limo e musgo por até 12 meses.",
  faqs: [
   { q: "Atendem casas de qualquer altura?", a: "Sim. Equipe treinada em NR-35 atende de sobrado a prédio, com equipamento próprio." },
   { q: "A limpeza estraga a pintura da telha?", a: "Não. Usamos produtos específicos para cerâmica e fibrocimento que preservam a pintura original." },
   { q: "Fazem também limpeza de calha junto?", a: "Sim, é o mais comum. O combo evita entupimento e aumenta a vida útil da cobertura." },
   { q: "Qual a periodicidade recomendada?", a: "Uma vez por ano é o ideal para Curitiba, região úmida com muita vegetação e formação rápida de limo." },
  ],
  cta: "Solicitar orçamento de limpeza de telhado",
 },
 {
  slug: "limpeza-de-calha",
  nome: "Limpeza de Calha",
  h1: "Limpeza de Calha em Curitiba",
  title: "Limpeza de Calha em Curitiba | Ampla",
  description:
   "Limpeza de calha em Curitiba e RMC. Remoção de folhas, terra e detritos. Prevenção de infiltrações e alagamentos. Equipe com NR-35 e EPI completo.",
  icone: "droplet",
  intro:
   "Calhas entupidas causam infiltração no forro, transbordamento na parede e podem sobrecarregar a estrutura. Uma limpeza rápida antes das chuvas evita reforma cara depois.",
  contexto:
   "A Ampla executa limpeza de calhas, condutores e rufos em residências, condomínios e galpões de Curitiba e RMC. Removemos folhas, terra, galhos e ninhos, desobstruímos condutores verticais e testamos escoamento com água. Trabalho com equipe NR-35, cinto, linha de vida e EPI completo.",
  sinais: [
   "Calha transbordando na chuva",
   "Água descendo pela parede em vez do cano",
   "Infiltração no forro do último pavimento",
   "Mato ou plantas nascendo dentro da calha",
   "Preparo para o período de chuvas de verão",
  ],
  riscos: [
   "Infiltração em forro, madeira e alvenaria",
   "Desabamento parcial de calha por peso",
   "Curto em fiação próxima ao beiral",
   "Foco de Aedes aegypti em água parada",
  ],
  metodo: [
   { titulo: "Ancoragem e acesso", texto: "Instalamos linha de vida e escadas conforme altura e formato do telhado." },
   { titulo: "Remoção manual", texto: "Retiramos folhas, terra e ninhos com ferramenta específica, sem danificar a calha." },
   { titulo: "Desobstrução dos condutores", texto: "Liberamos canos verticais com escova, jato e vareta." },
   { titulo: "Teste de escoamento", texto: "Jogamos água em todos os pontos e conferimos vazão até o esgoto pluvial." },
  ],
  garantia: "Serviço com garantia de escoamento imediato. Recomendamos limpeza semestral em imóveis com árvores próximas.",
  faqs: [
   { q: "Vocês descem pelo telhado ou usam andaime?", a: "Depende da altura. Casas usamos escada e cinto, prédios usamos linha de vida ou plataforma." },
   { q: "Consertam calha rachada ou solta?", a: "Não fazemos reforma, mas indicamos o ponto no laudo para o cliente contratar reparo." },
   { q: "Atendem galpão industrial?", a: "Sim, com plano de trabalho em altura e ART quando necessário." },
   { q: "Precisa desligar energia?", a: "Só quando calha estiver muito próxima da fiação. A equipe avalia e orienta antes." },
  ],
  cta: "Solicitar orçamento de limpeza de calha",
 },
 {
  slug: "limpeza-de-sotao",
  nome: "Limpeza de Sótão e Forro",
  h1: "Limpeza de Sótão, Forro e Subsolo em Curitiba",
  title: "Limpeza de Sótão em Curitiba | Forro e Subsolo - Ampla",
  description:
   "Limpeza de sótão, forro e subsolo em Curitiba e RMC. Retirada de sujeira acumulada, fezes de rato e pombo, com desinfecção. Prevenção de doenças.",
  icone: "home",
  intro:
   "Sótãos, forros e subsolos acumulam anos de poeira, fezes de rato, pombo e morcego, ninhos e detritos. Além do cheiro, geram risco real de doenças respiratórias e infestações.",
  contexto:
   "A Ampla realiza limpeza completa de sótão, forro e subsolo em Curitiba e RMC. Removemos toda a sujeira acumulada com aspiração industrial, sacos lacrados e EPI apropriado (máscara, macacão e luvas). Depois aplicamos desinfecção com produto registrado para eliminar bactérias, fungos e ácaros. Ideal em compra de imóvel usado, reforma ou quando surgem sinais de infestação.",
  sinais: [
   "Barulho de roedor ou pombo no forro",
   "Cheiro forte de urina ou mofo",
   "Manchas escuras no teto do último andar",
   "Compra ou reforma de imóvel antigo",
   "Alergia respiratória de morador sem causa aparente",
  ],
  riscos: [
   "Hantavirose por contato com fezes de rato",
   "Criptococose por fezes de pombo",
   "Ácaros e fungos causando asma e rinite",
   "Infestação silenciosa que se espalha pela casa",
  ],
  metodo: [
   { titulo: "Vistoria e proteção do ambiente", texto: "Isolamos o vão de acesso, protegemos móveis abaixo e definimos rota de remoção." },
   { titulo: "Remoção com EPI", texto: "Equipe entra com macacão descartável, máscara PFF2 e luvas. Sujeira sai em sacos lacrados." },
   { titulo: "Aspiração e limpeza técnica", texto: "Aspiração industrial em todos os cantos, retirada de ninhos e materiais estranhos." },
   { titulo: "Desinfecção final", texto: "Aplicação de sanitizante que elimina bactérias, fungos e ácaros. Ambiente liberado seguro." },
  ],
  garantia: "Trabalho com laudo de conclusão e recomendação de vedação de acessos para evitar novos moradores indesejados.",
  faqs: [
   { q: "Vocês fazem só o sótão ou também o forro fechado?", a: "Ambos. Em forros fechados abrimos ponto técnico de acesso com autorização e refechamos ao final." },
   { q: "Preciso sair de casa durante o serviço?", a: "Não. Isolamos a área. Recomendamos apenas retirar pets e pessoas alérgicas do ambiente próximo." },
   { q: "Quanto tempo demora?", a: "De 4 a 8 horas em residências. Sótãos grandes ou muito sujos podem levar 1 a 2 dias." },
   { q: "Fazem vedação de acessos de rato e pombo?", a: "Sim, complementamos com telas e vedação de frestas, para evitar retorno." },
  ],
  cta: "Solicitar orçamento de limpeza de sótão",
 },
 {
  slug: "laudo-bacteriologico",
  nome: "Laudo Bacteriológico da Água",
  h1: "Laudo Bacteriológico e Análise da Água em Curitiba",
  title: "Laudo Bacteriológico da Água em Curitiba | Ampla",
  description:
   "Análise e laudo bacteriológico de água em Curitiba e RMC. Coleta técnica, laboratório acreditado e relatório completo para vigilância sanitária.",
  icone: "shield",
  intro:
   "O laudo bacteriológico é obrigatório para condomínios, escolas, restaurantes, hospitais e qualquer imóvel que use fonte alternativa de água. Comprova que a água armazenada está própria para consumo.",
  contexto:
   "A Ampla executa coleta técnica de água em Curitiba e RMC e encaminha para laboratório acreditado (ISO/IEC 17025). Analisamos coliformes totais, E. coli, contagem de bactérias heterotróficas, cor, turbidez, pH e cloro residual, conforme Portaria MS 888/2021. O laudo é entregue em até 10 dias úteis, aceito por síndico, vigilância sanitária e órgãos de fiscalização.",
  sinais: [
   "Condomínio sem laudo semestral atualizado",
   "Restaurante, padaria ou lanchonete em fiscalização",
   "Escola, creche ou hospital sob auditoria",
   "Uso de poço artesiano, cisterna ou fonte alternativa",
   "Suspeita de contaminação (gosto, cor ou cheiro alterado)",
  ],
  riscos: [
   "Multa por falta de laudo periódico",
   "Interdição do estabelecimento por vigilância",
   "Casos de gastroenterite entre moradores ou clientes",
   "Ação de responsabilidade contra síndico ou responsável técnico",
  ],
  metodo: [
   { titulo: "Agendamento e coleta", texto: "Técnico coleta em pontos representativos do reservatório e da rede, com frascos esterilizados." },
   { titulo: "Transporte refrigerado", texto: "Amostras vão ao laboratório em caixa térmica dentro do tempo técnico exigido." },
   { titulo: "Análise laboratorial", texto: "Laboratório acreditado executa os parâmetros microbiológicos e físico-químicos." },
   { titulo: "Emissão do laudo", texto: "Relatório completo com resultados, referências e assinatura de responsável técnico." },
  ],
  garantia: "Laudo emitido por laboratório acreditado, aceito por Vigilância Sanitária, síndicos e órgãos fiscalizadores.",
  faqs: [
   { q: "Com que frequência preciso do laudo?", a: "Condomínios: a cada 6 meses. Comércios e serviços de alimentação: conforme exigência da vigilância local (mensal a semestral)." },
   { q: "O laudo vem junto da limpeza da caixa d'água?", a: "Pode ser contratado junto, é o combo mais comum. A coleta é feita antes e depois da higienização." },
   { q: "Quanto tempo demora?", a: "Coleta é feita em até 3 dias após agendamento. Laudo fica pronto em 10 dias úteis." },
   { q: "Vocês analisam água de poço artesiano?", a: "Sim. Coletamos e analisamos água de poço, cisterna, mina e reservatório abastecido por caminhão-pipa." },
  ],
  cta: "Solicitar laudo bacteriológico",
 },
];

export const findServicoEspecial = (slug: string) =>
 servicosEspeciais.find((s) => s.slug === slug);