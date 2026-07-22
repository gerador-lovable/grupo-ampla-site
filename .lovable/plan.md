Replicar os dois ajustes recentes nas outras páginas.

## O que já se propaga sozinho

- **Plaqueta do logo no scroll** — o `Header` é compartilhado por todas as páginas, então o efeito já aparece em Desentupidora, blog, páginas de praga, cidade, bairro, comercial etc. Nada a fazer.

## O que precisa ser replicado

- **Foto do técnico colada na borda inferior da hero** — só a `HeroSection` foi ajustada. A `DesHeroSection` (usada em `/desentupidora`) tem a mesma estrutura antiga (coluna direita `hidden lg:flex ... self-stretch` com `<img>` `h-[92vh]`), então a foto do desentupidor ainda "flutua".

## Mudança em `src/components/desentupidora/DesHeroSection.tsx`

Aplicar o mesmo padrão da `HeroSection`:
- Trocar a coluna direita por um espaçador `hidden lg:block` dentro do grid.
- Adicionar, no fim da `<section>`, um bloco `absolute bottom-0 right-0 z-10 hidden lg:block` com o glow + `<img>` `object-bottom` ancorados em `bottom-0`.

## Fora do escopo

As demais páginas (`PragaPage`, `CidadePage`, `BairroPage`, `DedetizacaoComercial`, `Blog`, etc.) usam heros próprios menores, sem foto do técnico em coluna, então não precisam do ajuste. Se quiser padronizar alguma delas depois, é só pedir.
