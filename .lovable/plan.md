Colar a foto do técnico na borda inferior da hero (desktop).

Hoje a coluna direita fica dentro do grid centralizado verticalmente pelo `items-center` da section, então a imagem "flutua" acima da borda inferior. Vou trocar essa coluna por um posicionamento absoluto ancorado ao fundo da section em telas `lg+`, mantendo a coluna do grid apenas como espaço reservado.

## Mudanças em `src/components/HeroSection.tsx`

- Remover `min-h-[92vh]` isolado e manter `overflow-hidden` — a section continua com altura definida por conteúdo + `min-h`.
- Na coluna direita (hoje `hidden lg:flex ... self-stretch`):
  - Tirar do fluxo do grid em `lg+`: usar `hidden lg:block` e posicionar a imagem via `absolute bottom-0 right-0` relativo à section.
  - Manter um espaçador (coluna vazia) no grid em `lg+` para preservar o layout de duas colunas do texto.
- A `<img>` passa a ter `object-bottom` + `bottom-0` para encostar exatamente na borda inferior; o glow atrás dela acompanha (também ancorado em `bottom-0`).
- Mobile continua igual (imagem escondida).

## Resultado

- Foto do técnico grudada na borda inferior da hero, sem gap.
- Altura do header e das demais seções inalteradas.
- Layout do texto à esquerda preservado.
