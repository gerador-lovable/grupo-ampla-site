## Objetivo
Revisar e ajustar o site em mobile (375px) e tablet (768px), corrigindo os problemas visuais encontrados sem alterar o desktop.

## Problemas encontrados na revisão

1. **Hero (Home e Desentupidora), tablet 768px**: a foto do técnico só aparece a partir de `lg` (1024px). No tablet a hero fica com `min-h-[92vh]` e uma enorme faixa vazia depois do CTA.
2. **DesHero, tablet**: a headline quebra deixando a vírgula em uma linha só (", sem quebrar piso."). Fica esteticamente ruim.
3. **Header mobile**: o logo é grande demais em relação à altura do header (h-16 vs header py-4), com a "plaqueta" escura ocupando muito espaço vertical após o scroll. Botão "24h" fica encostado no logo.
4. **Barra de urgência mobile**: itens quebram em várias linhas e ficam apertados; horário + telefone competem por espaço.
5. **PestsSection mobile**: o botão "Mandar foto da praga pelo WhatsApp" transborda para fora do container (texto cortado após "WhatsApp"). Um dos cards de praga aparece sem texto porque o layout força altura fixa.
6. **Hero mobile**: sem imagem nenhuma, fica só bloco de texto azul muito longo (min-h 92vh). Faltam respiros e a proporção fica pesada.
7. **Botões de CTA no hero (mobile)**: os dois botões grandes (Emergência + WhatsApp) ficam altos demais (`py-7 min-h-[60px]`) e ocupam área excessiva no viewport pequeno.
8. **Grid de benefícios (hero mobile)**: `grid-cols-2` com textos "Atendimento em até 2h" quebra em 2 linhas por card, criando altura irregular.
9. **Container**: várias seções usam `container` sem `max-w` explícito; em tablet fica com margens laterais inconsistentes vs seções com `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.

## Ajustes propostos (somente CSS/estrutura, sem tocar em lógica)

### Hero (`HeroSection.tsx` e `DesHeroSection.tsx`)
- Trocar `min-h-[92vh]` por `min-h-[92vh] lg:min-h-[92vh]` com `min-h-0` em mobile/tablet, deixando altura natural.
- Reduzir `pt-32 md:pt-40` para `pt-28 sm:pt-32 md:pt-36` (menos espaço morto no topo mobile).
- Mostrar a foto do técnico também no tablet: mudar `hidden lg:block` para `hidden md:block` **em uma versão menor** posicionada à direita, ou manter só no desktop mas remover o `min-h-[92vh]` no tablet para eliminar a faixa vazia. Vou remover o `min-h` em <lg e manter foto só em desktop (mais simples e limpo).
- Botões: reduzir para `py-5 min-h-[52px]` em mobile, mantendo `sm:py-7` no desktop.
- Grid de benefícios: `grid-cols-1 sm:grid-cols-2` (evita quebra em 2 linhas dentro do card em 375px).
- DesHero: reescrever a headline para não deixar vírgula solta: `Chegamos em 1h sem quebrar piso.` (remover vírgula que causa a quebra feia) ou envolver `, sem quebrar piso.` no mesmo span do sublinhado para evitar quebra isolada.

### Header (`Header.tsx`)
- Reduzir logo em mobile: `h-12 md:h-16` (não-scrolled) e `h-10 md:h-14` (scrolled).
- Diminuir a "plaqueta" escura em mobile: `px-2` e `pb-[10px]` menores para não ocupar tanta área.
- Adicionar `gap-2` menor no header em mobile.

### UrgencyBar (`UrgencyBar.tsx`)
- Em mobile, mostrar apenas: bolinha + "Emergência 2h" (versão curta) + telefone; esconder o "Curitiba & Região Metropolitana".
- Ajustar `text-[11px]` em mobile para caber em 1 linha.

### PestsSection (`PestsSection.tsx`)
- Corrigir overflow do botão "Mandar foto da praga pelo WhatsApp": envolver texto em `whitespace-normal text-sm sm:text-base` e reduzir padding horizontal em mobile.
- Verificar altura dos cards para não deixar card vazio: usar `min-h-0` e permitir conteúdo fluir.

### Padding/container global
- Padronizar wrappers: `mx-auto max-w-6xl px-4 sm:px-6 lg:px-8` nas seções que ainda usam só `container`.

## Escopo
- Alterar apenas: `HeroSection.tsx`, `DesHeroSection.tsx`, `Header.tsx`, `UrgencyBar.tsx`, `PestsSection.tsx`.
- Se durante a implementação eu detectar quebra em outras seções (contato, footer, testimonials), corrijo pontualmente sem redesign.
- Sem mudanças no conteúdo textual (exceto ajuste micro na headline do DesHero para evitar quebra feia da vírgula).
- Sem mudanças no desktop além do já observado.

## Verificação
Após as mudanças, capturar screenshots com Playwright em 375px, 414px, 768px e 1024px nas rotas `/`, `/desentupidora`, `/servicos/dedetizacao-comercial`, `/dedetizacao/baratas` e comparar.