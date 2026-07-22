Ajustar o logo no cabeçalho para ficar com bordas totalmente redondas (circular).

- Arquivo: `src/components/Header.tsx`
- Aplicar `rounded-full` na imagem do logo dentro do `Link` de navegação, garantindo que a foto/logo apareça como um círculo tanto no estado transparente inicial quanto ao rolar a página.
- Manter os demais comportamentos: tamanho responsivo, aba escura ao scroll e transições.
- Caso a aba escura (container do logo ao scroll) também deva ficar totalmente arredonda, aplicar `rounded-full` no `<span>` envoltório, ajustando paddings para manter proporção visual.

Verificação: visualizar no preview e confirmar que o logo é exibido como círculo em ambos os estados (topo e scroll).