#### Problema
Ao trocar de página clicando em links internos (menu/rodapé), o navegador preserva a posição de scroll e o usuário cai no meio da nova página, em vez de no topo.

#### Causa
O projeto usa `BrowserRouter` do React Router, que não reseta scroll automaticamente. Além disso, o rodapé usa tags `<a href="/...">` para links internos, causando recarregamentos completos e comportamento de scroll inconsistente.

#### Solução
1. Criar componente `src/components/ScrollToTop.tsx` que escuta `useLocation` e executa `window.scrollTo(0, 0)` sempre que o `pathname` mudar.
2. Inserir `<ScrollToTop />` dentro de `<BrowserRouter>` em `src/App.tsx`, antes de `<Routes>`.
3. Trocar links internos de `<a href="...">` por `<Link to="...">` do react-router-dom em `src/components/FooterSection.tsx`.
4. Corrigir também o link de voltar para home em `src/pages/NotFound.tsx`.

#### Resultado esperado
Toda navegação interna (React Router) vai abrir a página no topo, sem recarregamento completo. Links para telefone, WhatsApp e Instagram (externos) continuam como `<a>`.