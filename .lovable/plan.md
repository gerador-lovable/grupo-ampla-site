## Problema

O `ScrollToTop` já existe, mas ao navegar entre páginas o scroll ainda cai no meio. Causas prováveis:

1. As páginas são carregadas via `React.lazy` + `Suspense`. O efeito de scroll dispara no instante da troca de rota, mas quando o chunk termina de baixar e o conteúdo é montado, o navegador restaura a posição anterior (scroll restoration automático do browser).
2. `behavior: "instant"` não é um valor padrão de `window.scrollTo` (o padrão é `"auto"`), então em alguns browsers a chamada é ignorada.
3. `useEffect` roda após o paint: o usuário chega a ver a página nova já rolada antes do scroll ser corrigido.

## Correção

Reescrever `src/components/ScrollToTop.tsx`:

- Desativar restauração automática do browser: `history.scrollRestoration = "manual"` (uma vez).
- Trocar `useEffect` por `useLayoutEffect` para rolar antes do paint.
- Usar `window.scrollTo(0, 0)` (sem options) + também `document.documentElement.scrollTop = 0` e `document.body.scrollTop = 0` para cobrir todos os casos.
- Reagir a `pathname` e também a `key` do `useLocation` (garante reset mesmo em navegações para a mesma rota).
- Rodar novamente após o Suspense resolver: um segundo scroll dentro de `requestAnimationFrame` para cobrir o caso em que a página lazy só monta depois.

Nenhuma outra mudança é necessária, os links já usam `<Link>` do React Router e não há âncoras `#`.

## Arquivos alterados

- `src/components/ScrollToTop.tsx`
