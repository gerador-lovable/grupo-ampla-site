# Roteiros de Reels para Instagram, Ampla Dedetizadora

## Entregável

Um único arquivo `.docx` em `/mnt/documents/reels-ampla-instagram.docx` contendo 18 roteiros de Reels, um para cada página que você listou (7 pragas, 7 serviços, 4 posts de blog).

## Estrutura de cada roteiro

Cada Reel será pensado para 30 a 45 segundos (formato ideal de conversão no Instagram), seguindo esta estrutura fixa:

1. **Título do Reel** (nome da página, ex.: "Dedetização de Baratas")
2. **URL da página** de destino (bio ou link direto)
3. **Gancho / Hook (0 a 3s)**, uma frase de impacto para segurar o scroll
4. **Legenda curta na tela** (texto sobreposto, cena a cena)
5. **Roteiro falado** dividido em cenas:
   - Cena 1: Problema / dor
   - Cena 2: Autoridade Ampla (35 anos, ANVISA, garantia 6 meses)
   - Cena 3: Solução / diferenciais
   - Cena 4: CTA claro para WhatsApp
6. **Sugestão de plano de câmera** (ex.: técnico uniformizado, imagem da praga, antes/depois)
7. **Legenda do post** (com quebras, emojis moderados e 2 a 3 linhas)
8. **Hashtags** (mix nichado Curitiba, praga específica, e amplas)
9. **CTA final falado** (sempre reforçando "orçamento no WhatsApp em minutos")

## Fonte da copy

Vou puxar títulos, dores, benefícios e diferenciais diretamente dos dados já existentes no site, para manter consistência de discurso com a landing page:

- Pragas: `src/data/pragas.ts` (baratas, ratos, cupim, escorpião, pulgas-e-carrapatos, formigas, percevejo)
- Serviços: `src/data/servicosEspeciais.ts` (dedetização comercial, limpeza de caixa d'água, controle de roedores, pombos e morcegos, residencial, condominial, preventiva)
- Blog: `src/data/blogPosts.ts` (quanto custa dedetização, quanto custa desentupimento, baratas de esgoto, como saber se tem cupim)

## Padrões de marca aplicados em todos os roteiros

- Tom: direto, seguro, sem sensacionalismo
- Sem travessões (—), conforme sua regra do site
- Selos sempre presentes: 35 anos, ANVISA, garantia de 6 meses, atendimento em até 2h, parcelamento em 12x
- CTA único: WhatsApp (41) 99512-1583
- Cada Reel terá um gancho diferente para você não repetir abertura entre vídeos

## Detalhes técnicos do documento

- Formato: `.docx` (Word), gerado com `docx-js`
- Fonte: Arial (sem serifa, legível)
- Sumário no topo com links internos para cada roteiro
- Cada roteiro em página própria (page break entre eles), pronto para imprimir ou usar como colinha na hora de gravar
- QA visual: converter para PDF/imagem e revisar todas as páginas antes de entregar

## O que NÃO farei nesta etapa

- Não editarei nada do site nem das campanhas de Google Ads
- Não gerarei vídeos, apenas o roteiro escrito
- Não criarei artes/thumbnails, só texto (posso fazer depois se quiser)
