Corrigir tamanho e posição da foto na hero.

## Diagnóstico

No último ajuste, o bloco absoluto da foto ficou:
- **Fora do `container`** → `right-0` gruda na borda da viewport (não na borda do conteúdo), jogando a foto pra direita demais em telas largas.
- Com `h-full` (100% da section, ~92vh) → o `object-contain` escala a foto pela altura, deixando ela alta demais e visualmente desproporcional em relação à coluna de texto.

## Mudanças

Em `src/components/HeroSection.tsx` e `src/components/desentupidora/DesHeroSection.tsx`:

- Mover o bloco `absolute` da imagem para **dentro do `<div className="container ...">`**, para o `right-0` alinhar com a borda do conteúdo (respeitando `px-4`), e não com a borda da tela.
- Reduzir a caixa da foto:
  - `w-[42%] max-w-[720px] h-full` → `w-[40%] max-w-[520px] h-[80vh] max-h-[720px]`.
- Manter `bottom-0`, `object-contain object-bottom` e o glow atrás.

Resultado: foto em escala natural, alinhada com a coluna direita do grid, encostada na borda inferior da hero e sem invadir o espaço central.
