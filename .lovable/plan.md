# Redesign do Site — Confiança Técnica

Repensar o sistema visual de todo o site (Dedetizadora + Desentupidora + páginas dinâmicas de pragas, serviços, cidades, bairros, blog) sob uma direção unificada, moderna e institucional.

## Direção visual

- **Paleta**: Azul profundo `#0A1E4F` (base institucional), Azul primário `#224BD0` (ações/links), Laranja `#F57C00` (destaques e urgência), Off-white `#F5F7FB` (superfícies), com neutros de suporte em cinza-azulado. Verde `#075E54` permanece exclusivo para CTAs de WhatsApp.
- **Tipografia**: Space Grotesk para títulos (peso técnico, geométrico), DM Sans para corpo. Escala tipográfica ampliada — H1 até 72px desktop / 40px mobile.
- **Layout**: Hero + Grid como sistema mestre — hero cheio de personalidade seguido de grid modular de serviços/prova/diferenciais.
- **Densidade**: Mais respiração, seções com padding vertical generoso (96–120px desktop). Cards com bordas sutis 1px em azul-10%, sombras suaves em azul, não cinza.
- **Motion**: Micro-animações discretas em scroll (fade-up), hover states com elevação sutil, urgência 24h com pulso já existente mantido.

## Sistema de design (tokens)

Atualizar `src/index.css` e `tailwind.config.ts`:

- Substituir/refinar tokens HSL: `--background`, `--foreground`, `--primary` (azul 224BD0), `--primary-deep` (0A1E4F), `--accent` (F57C00), `--surface`, `--surface-muted`, `--border-subtle`, `--whatsapp` (075E54).
- Novos tokens: `--gradient-hero` (0A1E4F → 224BD0), `--gradient-accent` (F57C00 → E85D3A), `--shadow-elegant`, `--shadow-card`, `--radius` (14px padrão).
- Fontes carregadas via `<link>` Google Fonts em `index.html`; famílias registradas no Tailwind (`font-display`, `font-sans`).
- Auditar componentes para remover classes hardcoded (`text-white`, `bg-blue-*`, `bg-[#...]`) e substituir por tokens semânticos.

## Componentes que serão reformulados

Reestilização (sem mudança de contrato/props, sem tocar em lógica de negócio):

- `Header.tsx` — nav mais leve, logo com espaço, transição de fundo com blur ao rolar, CTA emergência com nova identidade.
- `HeroSection.tsx` e `DesHeroSection` (dentro de `Desentupidora.tsx`) — grid 2 colunas, headline com destaque tipográfico no diferencial (35 anos / 2h), badges de confiança (ANVISA, CRQ, garantia), imagem do técnico com máscara/glow azul sutil, CTA emergência + WhatsApp lado a lado.
- `UrgencyBar.tsx` — barra fina superior com contraste refinado.
- `ServicesSection.tsx` — grid de cards uniforme com ícone em círculo azul-10%, título Space Grotesk, "Saiba mais" com seta animada.
- `PestsSection.tsx` — grid visual das pragas com hover state e link para páginas dinâmicas.
- `DifferentialsSection.tsx` — layout em 4 blocos com números grandes (01, 02...) tipografados.
- `TestimonialsSection.tsx` / `DesTestimonialsSection.tsx` / `TestimonialsModule.tsx` — carrossel com card mais editorial, aspas grandes em laranja, foto circular, estrelas amarelo-ouro.
- `GuaranteeSection.tsx` — banner com gradiente azul e selo de garantia visual.
- `FAQSection.tsx` — accordions com fundo branco, borda sutil, tipografia hierarquizada.
- `ContactSection.tsx` / `DesContactSection.tsx` — card WhatsApp com background verde 075E54, mapa integrado ao lado.
- `FooterSection.tsx` — 4 colunas, logo + descrição + links + contato, footer bottom com selos.
- `WhatsAppFloat.tsx` — mantido, refinamento visual do pulso.
- `OutrosServicosBlock.tsx` — 4 tiles com nova estética.
- Templates dinâmicos (`PragaPage`, `ServicoEspecialPage`, `ServicoDesentupimentoPage`, `CidadePage`, `BairroPage`, `DedetizacaoComercial`, `Emergencia24h`, `Blog`, `BlogPost`) — herdam o novo sistema automaticamente via tokens e componentes compartilhados; ajustes de layout dos heros específicos e breadcrumbs.

## Fora de escopo

- Nenhuma mudança de conteúdo, copy, SEO, rotas, dados (`src/data/*`), schema JSON-LD ou lógica.
- Formulários continuam removidos, CTAs continuam para WhatsApp.
- Imagens existentes reaproveitadas; nenhuma imagem nova gerada nesta rodada.

## Ordem de execução

1. Tokens: `index.css` + `tailwind.config.ts` + fontes no `index.html`.
2. Primitivos visuais compartilhados (botões, cards, badges via variantes shadcn).
3. Header + Footer + WhatsAppFloat (aparecem em tudo).
4. Home Dedetizadora: Hero → Urgency → Services → Pests → Differentials → Testimonials → Guarantee → FAQ → Contact.
5. Desentupidora (mesmo fluxo).
6. Templates dinâmicos e páginas secundárias.
7. Varredura final: remover cores hardcoded remanescentes, verificar contraste, typecheck.

## Validação

- `tsgo` typecheck limpo.
- Screenshot via Playwright em desktop (1280) e mobile (390) das rotas-chave: `/`, `/desentupidora`, `/dedetizacao/baratas`, `/servicos/limpeza-caixa-dagua`, `/curitiba`, `/emergencia-24h`, `/blog`.
- Checar que nenhuma classe `text-white`, `bg-black`, `bg-[#...]` sobrou nos componentes.
