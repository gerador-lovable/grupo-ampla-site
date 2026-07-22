export interface PragaFAQ {
 q: string;
 a: string;
}

export interface Praga {
 slug: string;
 nome: string;
 h1: string;
 title: string;
 description: string;
 intro: string;
 contexto: string;
 sinais: string[];
 riscos: string[];
 metodo: { titulo: string; texto: string }[];
 garantia: string;
 faqs: PragaFAQ[];
}

export const pragas: Praga[] = [
 {
 slug: "baratas",
 nome: "Baratas",
 h1: "Dedetização de Baratas em Curitiba",
 title: "Dedetização de Baratas em Curitiba | Garantia 6 Meses - Ampla",
 description:
 "Dedetização de baratas em Curitiba e região com produtos ANVISA. Elimina baratas de esgoto e alemãs. Garantia de 6 meses. Orçamento grátis via WhatsApp.",
 intro:
 "As baratas são uma das pragas urbanas mais comuns em Curitiba. Elas se reproduzem rapidamente, transmitem mais de 30 tipos de bactérias e causam alergias respiratórias, especialmente em crianças.",
 contexto:
 "Na Ampla, tratamos os dois tipos mais frequentes na região: a barata de esgoto (Periplaneta americana), que aparece em ralos, tubulações e áreas externas, e a barata alemã (Blattella germanica), que se esconde em cozinhas, atrás de eletrodomésticos e armários. Usamos gel inseticida, pulverização e polvilhamento em pontos estratégicos, com produtos registrados na ANVISA e seguros para crianças e animais após a secagem.",
 sinais: [
 "Barata viva ou morta durante o dia (sinal de infestação avançada)",
 "Fezes escuras parecidas com pó de café em cantos e gavetas",
 "Cheiro adocicado forte na cozinha ou área de serviço",
 "Ovos (ootecas) em rodapés, atrás de móveis e eletrodomésticos",
 "Manchas escuras próximas a ralos e frestas",
 ],
 riscos: [
 "Contaminação de alimentos com Salmonella, E. coli e outros patógenos",
 "Agravamento de asma e alergias respiratórias",
 "Danos a equipamentos elétricos (roem fios)",
 "Reprodução acelerada, uma ooteca gera até 40 novas baratas",
 ],
 metodo: [
 {
 titulo: "Inspeção e diagnóstico",
 texto:
 "Identificamos a espécie, focos de infestação e vias de entrada. Definimos o método mais eficaz para o seu imóvel.",
 },
 {
 titulo: "Aplicação de gel + pulverização",
 texto:
 "Gel inseticida em armários, atrás de eletrodomésticos e frestas + pulverização em ralos, tubulações e áreas externas.",
 },
 {
 titulo: "Barreira preventiva",
 texto:
 "Aplicamos produto residual que continua agindo por até 6 meses, eliminando novas baratas que cheguem pelo esgoto.",
 },
 ],
 garantia: "6 meses de garantia. Se voltarem baratas dentro desse prazo, retornamos sem custo adicional.",
 faqs: [
 {
 q: "Preciso sair de casa durante a dedetização de baratas?",
 a: "Recomendamos permanecer fora por 2 a 4 horas após a aplicação. Depois disso, o ambiente está seguro para crianças e pets.",
 },
 {
 q: "Quanto tempo para acabar com as baratas?",
 a: "As primeiras baratas morrem em 24-48h. A infestação completa costuma ser eliminada em 7 a 15 dias, dependendo do tamanho do imóvel.",
 },
 {
 q: "Vocês eliminam barata de esgoto?",
 a: "Sim. Aplicamos tratamento específico em ralos, caixas de gordura e tubulações para eliminar as baratas americanas que sobem pelo esgoto.",
 },
 {
 q: "Precisa esvaziar armários?",
 a: "Não é obrigatório. Nossa equipe orienta os cuidados durante a visita, na maioria dos casos basta afastar alimentos expostos.",
 },
 ],
 },
 {
 slug: "ratos",
 nome: "Ratos",
 h1: "Desratização e Dedetização de Ratos em Curitiba",
 title: "Desratização em Curitiba | Elimina Ratos com Garantia - Ampla",
 description:
 "Desratização em Curitiba e região. Elimina ratos, camundongos e ratazanas com iscas em porta-iscas seguros. Laudo técnico e garantia. Atendimento 24h.",
 intro:
 "Ratos, camundongos e ratazanas são responsáveis pela transmissão de doenças graves como leptospirose, hantavirose e salmonelose. Uma única fêmea pode gerar mais de 100 filhotes por ano, a infestação evolui rápido.",
 contexto:
 "A Ampla realiza desratização técnica em Curitiba e Região Metropolitana com iscas parafinadas de última geração, colocadas em porta-iscas lacrados e mapeados. O método é seguro para crianças, pets e obrigatório para conformidade sanitária em empresas, condomínios e food service.",
 sinais: [
 "Fezes escuras em forma de grão de arroz em cantos e armários",
 "Fios, embalagens ou móveis roídos",
 "Ruídos noturnos no forro, paredes ou entre lajes",
 "Trilhas de gordura escurecendo rodapés",
 "Ninhos com papel, tecido ou isopor picados",
 ],
 riscos: [
 "Transmissão de leptospirose, hantavirose e salmonelose",
 "Curto-circuito e incêndio por fios roídos",
 "Contaminação de alimentos e água",
 "Danos estruturais em forros, isolamentos e tubulações",
 ],
 metodo: [
 {
 titulo: "Vistoria e mapeamento",
 texto:
 "Identificamos espécie (rato de telhado, camundongo ou ratazana), rotas de circulação e pontos de entrada.",
 },
 {
 titulo: "Iscas em porta-iscas seguros",
 texto:
 "Instalamos porta-iscas lacrados com iscas parafinadas em pontos estratégicos, seguindo o padrão exigido pela vigilância sanitária.",
 },
 {
 titulo: "Monitoramento e reposição",
 texto:
 "Retornos programados para leitura das iscas, retirada de carcaças e reposição até o controle total.",
 },
 ],
 garantia: "Contratos com garantia e monitoramento periódico para empresas, condomínios e residências.",
 faqs: [
 {
 q: "As iscas são seguras para crianças e pets?",
 a: "Sim. Todas as iscas ficam dentro de porta-iscas lacrados, com chave, fixados fora do alcance. É o padrão de segurança exigido pela ANVISA.",
 },
 {
 q: "Vocês retiram os ratos mortos?",
 a: "As iscas são anticoagulantes e ressecam o rato, reduzindo o mau cheiro. Em imóveis comerciais, incluímos retirada de carcaças no plano de monitoramento.",
 },
 {
 q: "Emitem laudo técnico?",
 a: "Sim. Emitimos laudo com croqui dos porta-iscas, produtos utilizados e ART do responsável técnico, aceito por auditorias sanitárias.",
 },
 {
 q: "Atendem emergências?",
 a: "Sim. Atendimento 24h em Curitiba e região para infestações críticas em restaurantes, indústrias e residências.",
 },
 ],
 },
 {
 slug: "cupim",
 nome: "Cupim",
 h1: "Descupinização em Curitiba | Cupim de Madeira e Solo",
 title: "Descupinização em Curitiba | Cupim Seca e Solo - Ampla",
 description:
 "Descupinização em Curitiba: cupim de madeira seca, subterrâneo e de solo. Injeção, pulverização e barreira química com garantia. Orçamento grátis.",
 intro:
 "O cupim causa prejuízos silenciosos que podem comprometer estruturas de madeira, móveis, portas, forros e até vigas. Em Curitiba, os tipos mais comuns são o cupim de madeira seca e o cupim subterrâneo, cada um exige um método específico.",
 contexto:
 "A Ampla realiza descupinização técnica há 35 anos: identificamos a espécie, aplicamos injeção em madeira, pulverização superficial e barreira química no solo. Também executamos descupinização preventiva em obras novas e reformas.",
 sinais: [
 "Pó fino cor de madeira embaixo de móveis e batentes",
 "Pequenos furos redondos em portas, rodapés e forros",
 "Túneis de terra em paredes, muros ou fundações",
 "Revoada de cupins alados (siriris) no início da primavera",
 "Madeira que soa oca ao bater",
 ],
 riscos: [
 "Comprometimento estrutural de vigas, telhados e forros",
 "Perda de móveis, portas e batentes",
 "Custo elevado de reforma quando descoberto tarde",
 "Reinfestação a partir de colônias vizinhas",
 ],
 metodo: [
 {
 titulo: "Diagnóstico da espécie",
 texto:
 "Identificamos se é cupim de madeira seca (colônias isoladas em móveis) ou subterrâneo (colônias no solo com túneis).",
 },
 {
 titulo: "Injeção e pulverização",
 texto:
 "Injetamos produto cupinicida diretamente na madeira infestada e pulverizamos superfície e áreas adjacentes.",
 },
 {
 titulo: "Barreira química no solo",
 texto:
 "Para cupim subterrâneo, criamos barreira química ao redor das fundações que impede o retorno da colônia.",
 },
 ],
 garantia: "Até 5 anos de garantia em barreira química para cupim de solo em obras e reformas.",
 faqs: [
 {
 q: "Qual a diferença entre cupim de madeira seca e cupim de solo?",
 a: "O de madeira seca vive dentro do próprio móvel/estrutura de madeira. O subterrâneo mora no solo e sobe pelas paredes por túneis de terra, mais destrutivo e exige barreira química.",
 },
 {
 q: "Preciso trocar os móveis atacados?",
 a: "Depende do estrago. Se a estrutura ainda estiver íntegra, a injeção elimina o cupim e o móvel é preservado. Nossa vistoria diz o que dá para recuperar.",
 },
 {
 q: "Vocês fazem descupinização em obra nova?",
 a: "Sim. É o momento ideal, aplicamos barreira química preventiva no solo antes da concretagem, com garantia estendida.",
 },
 {
 q: "O produto tem cheiro forte?",
 a: "Usamos produtos modernos de baixo odor, sem manchar madeira ou pintura. O ambiente pode ser reocupado em poucas horas.",
 },
 ],
 },
 {
 slug: "escorpiao",
 nome: "Escorpião",
 h1: "Dedetização de Escorpião em Curitiba | Controle Seguro",
 title: "Dedetização de Escorpião em Curitiba | Ampla Dedetizadora",
 description:
 "Controle de escorpião amarelo em Curitiba e região. Vedação de ralos, tratamento de terrenos e áreas externas. Atendimento urgente. Orçamento grátis.",
 intro:
 "O escorpião amarelo é a espécie mais preocupante em áreas urbanas do Paraná. A picada pode ser grave, principalmente para crianças e idosos, e a espécie se reproduz por partenogênese (sem macho), o que acelera a infestação.",
 contexto:
 "A Ampla realiza controle de escorpião com uma abordagem integrada: eliminação de baratas (principal fonte de alimento), vedação de ralos, tratamento de frestas, muros e áreas externas com produtos residuais. Também orientamos medidas preventivas em terrenos e obras.",
 sinais: [
 "Escorpião visto em áreas de serviço, garagens ou banheiros",
 "Presença frequente de baratas (fonte de alimento)",
 "Terrenos baldios ou entulho próximo ao imóvel",
 "Ralos sem proteção",
 "Muros com muitas frestas ou vegetação encostada",
 ],
 riscos: [
 "Picada grave, atendimento hospitalar imediato",
 "Risco maior para crianças, idosos e pessoas alérgicas",
 "Reprodução acelerada sem necessidade de macho",
 "Difícil detecção, hábito noturno",
 ],
 metodo: [
 {
 titulo: "Controle da fonte de alimento",
 texto:
 "Eliminamos baratas e outros insetos que servem de alimento, sem alimento, o escorpião não se estabelece.",
 },
 {
 titulo: "Tratamento residual em pontos críticos",
 texto:
 "Aplicamos inseticida residual em frestas, muros, áreas externas, caixas de passagem e ralos.",
 },
 {
 titulo: "Vedação e prevenção",
 texto:
 "Orientamos vedação de ralos, remoção de entulhos e manejo de vegetação para reduzir abrigos.",
 },
 ],
 garantia: "Retorno programado e garantia conforme o plano contratado.",
 faqs: [
 {
 q: "Existe produto que 'mata escorpião'?",
 a: "Não existe veneno específico contra escorpião com alta eficácia. O controle real é feito eliminando a fonte de alimento (baratas) e criando barreira química em frestas e ralos.",
 },
 {
 q: "O que faço se encontrar um escorpião?",
 a: "Não tente pegar com as mãos. Use luvas, capture com pote ou vassoura, e leve ao Centro de Zoonoses. Em caso de picada, procure atendimento médico imediato.",
 },
 {
 q: "Vocês atendem terrenos e obras?",
 a: "Sim. Realizamos tratamento em terrenos, canteiros de obra, condomínios em construção e áreas externas de empresas.",
 },
 {
 q: "Quantos retornos são necessários?",
 a: "Normalmente 2 a 3 aplicações em intervalos de 30-60 dias para consolidar a barreira e monitorar o resultado.",
 },
 ],
 },
 {
 slug: "pulgas-e-carrapatos",
 nome: "Pulgas e Carrapatos",
 h1: "Dedetização de Pulgas e Carrapatos em Curitiba",
 title: "Dedetização de Pulgas e Carrapatos em Curitiba | Ampla",
 description:
 "Dedetização de pulgas e carrapatos em Curitiba e região. Trata casa, quintal e canil com produtos seguros para pets após a secagem. Garantia.",
 intro:
 "Pulgas e carrapatos causam coceira, alergias e podem transmitir doenças a humanos e animais. Uma vez instaladas em tapetes, sofás e frestas do piso, a infestação se torna difícil de eliminar sem tratamento profissional.",
 contexto:
 "A Ampla trata pulgas e carrapatos em residências, quintais, canis e condomínios. Usamos pulverização com produtos que atacam adultos, larvas e ovos, quebrando o ciclo reprodutivo. Após a secagem, o ambiente é seguro para pessoas e animais.",
 sinais: [
 "Coceira intensa em pernas e tornozelos",
 "Picadas em fila (linha vermelha) na pele",
 "Pets se coçando muito ou com feridas",
 "Pontos escuros (fezes de pulga) em cobertas e caminha do pet",
 "Carrapatos em paredes, cortinas e frestas",
 ],
 riscos: [
 "Doença do carrapato (febre maculosa), pode ser grave",
 "Alergia à picada (DAPP em cães)",
 "Anemia em pets com infestação alta",
 "Reinfestação rápida se não tratar ambiente + animal",
 ],
 metodo: [
 {
 titulo: "Tratamento de ambiente interno",
 texto:
 "Pulverização em pisos, rodapés, tapetes, sofás e frestas, pontos onde ovos e larvas se escondem.",
 },
 {
 titulo: "Tratamento de área externa",
 texto:
 "Aplicação em quintal, canil, jardim e muros para eliminar focos externos que reinfestam.",
 },
 {
 titulo: "Orientação para o pet",
 texto:
 "Combine com tratamento veterinário no animal, sem isso, a reinfestação é questão de semanas.",
 },
 ],
 garantia: "Garantia conforme protocolo. Retorno preventivo em 30 dias se necessário.",
 faqs: [
 {
 q: "Preciso levar o pet embora?",
 a: "Sim, durante a aplicação e por 4 horas após. Depois da secagem completa, o ambiente é seguro para o animal.",
 },
 {
 q: "Uma aplicação resolve?",
 a: "Na maioria dos casos sim. Em infestações grandes, indicamos um retorno em 15-30 dias para eliminar novos adultos que eclodiram dos ovos.",
 },
 {
 q: "Preciso tirar tapetes e móveis?",
 a: "Não. Aspire bem antes da nossa visita e, no dia, apenas afaste alimentos e utensílios de cozinha.",
 },
 {
 q: "Serve para canil?",
 a: "Sim. Fazemos tratamento em canis, hotéis para pets e áreas externas de residências com muitos animais.",
 },
 ],
 },
 {
 slug: "formigas",
 nome: "Formigas",
 h1: "Dedetização de Formigas em Curitiba",
 title: "Dedetização de Formigas em Curitiba | Elimina Colônia - Ampla",
 description:
 "Dedetização de formigas em Curitiba: doceiras, saúva e carpinteira. Elimina a colônia inteira com gel inseticida. Garantia e orçamento grátis.",
 intro:
 "As formigas parecem inofensivas, mas contaminam alimentos, danificam madeiras e uma trilha visível significa que a colônia já é grande. Matar as formigas que aparecem não resolve, é preciso eliminar a rainha.",
 contexto:
 "A Ampla trata as espécies mais comuns em Curitiba: formiga doceira/fantasma (dentro de casa, atrás de armários), saúva e cortadeira (jardins) e formiga carpinteira (danifica madeira). Usamos gel de ação retardada, as operárias levam para a colônia e eliminam a rainha.",
 sinais: [
 "Trilha de formigas indo e voltando na mesma rota",
 "Formigas em açúcar, mel e alimentos doces",
 "Pequenos montes de terra no jardim ou entre pisos",
 "Serragem fina próxima a móveis (formiga carpinteira)",
 "Formigas aladas em ambientes internos (revoada)",
 ],
 riscos: [
 "Contaminação de alimentos e superfícies",
 "Danos a jardins, mudas e gramados",
 "Danos a móveis de madeira (formiga carpinteira)",
 "Colônias reaparecem se não for tratada a rainha",
 ],
 metodo: [
 {
 titulo: "Identificação da espécie",
 texto:
 "Cada espécie tem comportamento diferente, o tratamento correto depende de saber qual formiga é.",
 },
 {
 titulo: "Gel inseticida com ação retardada",
 texto:
 "As operárias levam o produto para o formigueiro e alimentam a rainha, eliminando a colônia inteira.",
 },
 {
 titulo: "Tratamento em jardins e formigueiros",
 texto:
 "Para saúva e cortadeira, aplicamos pó ou isca granulada diretamente nos formigueiros externos.",
 },
 ],
 garantia: "Garantia conforme espécie tratada. Retorno se a trilha reaparecer no prazo.",
 faqs: [
 {
 q: "Por que aparecem cada vez mais formigas depois do inseticida?",
 a: "Inseticida comum mata só as operárias visíveis e agita a colônia, a rainha continua produzindo. O gel profissional resolve porque atinge a rainha.",
 },
 {
 q: "Quanto tempo para eliminar a colônia?",
 a: "Entre 5 e 15 dias após a aplicação. Nos primeiros dias você ainda vê formigas, é o gel sendo levado para o ninho.",
 },
 {
 q: "Vocês tratam formiga no jardim?",
 a: "Sim. Para saúva e cortadeira aplicamos iscas granuladas ou pó diretamente no formigueiro.",
 },
 {
 q: "É seguro para pets?",
 a: "Sim. O gel é aplicado em pontos discretos fora do alcance de crianças e animais.",
 },
 ],
 },
 {
 slug: "percevejo",
 nome: "Percevejo",
 h1: "Dedetização de Percevejo de Cama em Curitiba",
 title: "Dedetização de Percevejo em Curitiba | Elimina 100% - Ampla",
 description:
 "Dedetização de percevejo de cama em Curitiba. Tratamento térmico e químico para hotéis, pousadas e residências. Discrição e garantia. Orçamento grátis.",
 intro:
 "O percevejo de cama voltou a ser problema no Brasil. Ele se esconde em colchões, sofás, frestas e roupas, pica durante a noite e é extremamente difícil de eliminar sem tratamento profissional específico.",
 contexto:
 "A Ampla realiza dedetização de percevejo com protocolo específico: inspeção detalhada, tratamento químico direcionado em frestas e móveis, e recomendações de higienização. Atendemos residências, hotéis, pousadas e imóveis para locação por temporada com total discrição.",
 sinais: [
 "Picadas em linha ou grupo pelo corpo, com coceira intensa",
 "Pontos escuros (fezes) em costuras de colchão",
 "Cheiro adocicado forte no quarto",
 "Pequenas manchas de sangue nos lençóis",
 "Cascas transparentes (mudas) em frestas de móveis",
 ],
 riscos: [
 "Reações alérgicas nas picadas",
 "Insônia e ansiedade, o percevejo pica durante o sono",
 "Espalhamento para outros cômodos se não tratar rápido",
 "Prejuízo à imagem de hotéis e pousadas",
 ],
 metodo: [
 {
 titulo: "Inspeção milimétrica",
 texto:
 "Vistoria em colchões, box, cabeceiras, sofás, rodapés e frestas, o percevejo se esconde onde parece impossível.",
 },
 {
 titulo: "Tratamento químico específico",
 texto:
 "Aplicação de inseticida com ação sobre adultos, ninfas e ovos, direcionada aos pontos de esconderijo.",
 },
 {
 titulo: "Retorno de confirmação",
 texto:
 "Nova visita em 15-21 dias para eliminar ninfas eclodidas de ovos que sobreviveram à primeira aplicação.",
 },
 ],
 garantia: "Atendimento com discrição total e retorno para confirmação do resultado.",
 faqs: [
 {
 q: "Preciso jogar fora o colchão?",
 a: "Nem sempre. Se o colchão estiver íntegro, o tratamento elimina o percevejo. Colchões muito danificados podem precisar ser substituídos.",
 },
 {
 q: "Quantas visitas são necessárias?",
 a: "Padrão de 2 visitas: primeira aplicação + retorno em 15-21 dias para eliminar ninfas dos ovos remanescentes.",
 },
 {
 q: "Atendem hotéis e pousadas?",
 a: "Sim. Trabalhamos com discrição, laudo técnico e cronograma que não interrompe a operação do estabelecimento.",
 },
 {
 q: "Preciso lavar roupas e roupas de cama?",
 a: "Sim. Lavagem em água quente (60°C) ou secadora em alta temperatura elimina percevejos e ovos em tecidos.",
 },
 ],
 },
];

export const findPraga = (slug: string) => pragas.find((p) => p.slug === slug);