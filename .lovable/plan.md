## Objetivo
Substituir o logotipo atual (`src/assets/logo-ampla.webp`) pela nova imagem enviada via URL do Instagram.

## Passos
1. Baixar a imagem da URL fornecida para `src/assets/logo-ampla-novo.webp` (convertendo para WebP para manter performance).
2. Fazer upload como asset CDN via `lovable-assets` (mantém o repo leve, seguindo padrão do projeto).
3. Atualizar os 2 pontos que importam o logo:
   - `src/components/Header.tsx`
   - `src/components/FooterSection.tsx`
4. Remover o arquivo antigo `src/assets/logo-ampla.webp` se não houver outras referências.
5. Verificar visualmente no preview (header transparente, header scrolled com fundo azul escuro, e footer).

## Observações
- Não altero dimensões nem classes CSS, apenas a `src` da imagem.
- URLs do Instagram expiram, então baixo agora e sirvo pelo nosso CDN.
