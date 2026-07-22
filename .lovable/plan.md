## Diagnóstico atual

- **Favicon**: ainda é o `public/favicon.ico` padrão da Lovable. Existe a logo em `src/assets/logo-ampla.webp` (1080x1080) pronta para virar favicon.
- **SEO (via scan)**:
  1. Páginas de serviço/desentupidora compartilham título/descrição idênticos, e as `canonical` das páginas apontam para o domínio antigo `grupo-ampla-site.lovable.app` em vez de `www.grupoampladedetiza.com.br`.
  2. `og:image` no `index.html` aponta para uma URL R2 de preview antiga (quebra o preview social depois de qualquer republish).
  3. Contraste: existem trechos com `text-muted-foreground/opacidade` que falham no critério AA.
  4. Google Search Console não conectado (fica como próximo passo opcional).
- **robots.txt**: OK, todos user-agents permitidos e Sitemap correto no domínio novo.
- **sitemap.xml**: OK, 52 URLs no domínio custom.
- **llms.txt**: OK, completo e alinhado ao sitemap.
- **Performance**: assets já em WebP, rotas com `React.lazy`, hero com `fetchpriority=high`. Falta apenas `preload` do hero na home e um `sizes`/`width`/`height` explícitos em algumas imagens para reduzir CLS.

## O que vou fazer

### 1. Favicon (a partir da logo)
- Gerar `public/favicon.png` (512x512, transparência) a partir de `src/assets/logo-ampla.webp` usando `sharp` no sandbox.
- Também gerar `public/apple-touch-icon.png` 180x180.
- Remover `public/favicon.ico` (senão o browser prefere o `.ico`).
- Trocar em `index.html`:
  ```html
  <link rel="icon" href="/favicon.png" type="image/png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  ```

### 2. SEO on-page
- Substituir globalmente `https://grupo-ampla-site.lovable.app` por `https://www.grupoampladedetiza.com.br` em todos os `Helmet` das páginas (`src/pages/*.tsx`), corrigindo `canonical` e `og:url`.
- Ajustar `index.html`:
  - Trocar o `og:image` e `twitter:image` da R2 antiga por `/apple-touch-icon.png` no domínio absoluto (`https://www.grupoampladedetiza.com.br/apple-touch-icon.png`), até termos uma arte 1200x630 dedicada.
  - Corrigir `og:url` já está apontando para o domínio custom.
- Garantir Helmet único (title + description + canonical + og) nas páginas que ainda não têm um bloco próprio: `DedetizacaoComercial`, `NotFound`. As demais dinâmicas (`PragaPage`, `CidadePage`, `BairroPage`, `ServicoEspecialPage`, `ServicoDesentupimentoPage`, `Blog`, `BlogPost`, `Emergencia24h`) já têm — apenas revisar canonical.
- Marcar `agent_metadata:metadata_quality` como fixed após o ajuste.

### 3. Acessibilidade (contraste)
- Varredura por `text-muted-foreground/[0-9]`, `text-white/60`, `text-gray-300|400` em `src/components` e `src/pages`; trocar por tokens do design system (`text-foreground`, `text-muted-foreground` sem opacidade) onde o fundo é claro.
- Marcar `lighthouse:lighthouse_accessibility` como fixed após a varredura.

### 4. Performance
- Adicionar em `index.html`:
  ```html
  <link rel="preload" as="image" href="/src/assets/hero-technician.webp" fetchpriority="high" />
  ```
  (usando o path do build via import não é possível em `index.html`; alternativa: mover o hero para `public/` e apontar direto — vou avaliar no momento e usar o path resolvido).
- Adicionar `width` e `height` explícitos nas `<img>` do hero e das seções de serviço para eliminar CLS.
- Confirmar `bun run build` e reportar o tamanho dos chunks.

### 5. Google Search Console (só apontar caminho)
- Não conecto agora, mas incluo instruções: `standard_connectors--connect` com `google_search_console`, verificar propriedade do domínio custom e submeter `sitemap.xml`. Aguardo confirmação sua para acionar.

## Arquivos que devem mudar

- `public/favicon.png`, `public/apple-touch-icon.png` (novos), `public/favicon.ico` (removido)
- `index.html`
- Todos os `src/pages/*.tsx` que contêm `grupo-ampla-site.lovable.app`
- Componentes com classes de baixo contraste (a listar após o grep)
