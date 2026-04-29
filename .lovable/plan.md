## Objetivo

Remover todos os formulários do site. Em seu lugar, a seção "Solicite Seu Orçamento Grátis" terá um CTA único e destacado que abre direto o WhatsApp. Aplicado nas duas páginas (Home e Desentupidora).

## Escopo

Apenas dois arquivos contêm formulário real:

- `src/components/ContactSection.tsx` (Home)
- `src/components/desentupidora/DesContactSection.tsx` (Desentupidora)

Os demais arquivos que aparecem em buscas por "form/input" são componentes da biblioteca UI (shadcn) e não serão removidos — continuam disponíveis para outros usos.

## Mudanças

### 1. `ContactSection.tsx` (Home)

- Remover: estado `form`, `submitted`, `handleSubmit`, `useToast`, imports de `Input`, `Textarea`, `Select*`, `useState`.
- Remover o bloco `<form>` inteiro e o estado de "Obrigado pelo contato!".
- Manter o título "Solicite Seu Orçamento Grátis" e o subtítulo.
- Substituir o grid de 2 colunas por um layout centralizado com:
  - Card de CTA grande com botão verde WhatsApp ("Falar no WhatsApp Agora") apontando para `https://wa.me/5541995121583?text=...` (mensagem de orçamento dedetização).
  - Bloco lateral/abaixo mantendo: WhatsApp, Telefone, Horário de Atendimento, Endereço e o iframe do Google Maps (preservados).

### 2. `DesContactSection.tsx` (Desentupidora)

- Mesmas remoções e mesma estrutura, com mensagem WhatsApp focada em desentupimento (ex.: "Olá, preciso de um desentupidor urgente.").
- Manter horário "24 horas — todos os dias", endereço e iframe.

### 3. Layout proposto da nova seção

```text
┌───────────────────────────────────────────────┐
│       Solicite Seu Orçamento Grátis           │
│   Atendimento rápido direto pelo WhatsApp     │
│                                               │
│   ┌───────────────────────────────────────┐   │
│   │  [WhatsApp icon]                      │   │
│   │  Fale conosco agora e receba seu      │   │
│   │  orçamento em minutos                 │   │
│   │  [ Falar no WhatsApp Agora ] (verde)  │   │
│   └───────────────────────────────────────┘   │
│                                               │
│   WhatsApp · Telefone · Horário · Endereço    │
│   [ Google Maps iframe ]                      │
└───────────────────────────────────────────────┘
```

## Detalhes técnicos

- Botão WhatsApp: `bg-[#25D366] hover:bg-[#075E54] text-white`, `min-h-[56px]`, ícone `WhatsAppIcon`, `target="_blank"` `rel="noopener noreferrer"`.
- Sem dependência de `useToast` ou `useState` após a refatoração (imports limpos).
- IDs de seção (`id="contato"`) e classes de fundo (`bg-secondary`) preservados para não quebrar âncoras do header e do footer.
- Nenhuma alteração em `Header`, `HeroSection`, `Index.tsx`, `Desentupidora.tsx` — eles já apontam para `#contato` e o WhatsApp flutuante continua igual.

## Fora de escopo

- Não remover componentes shadcn (`ui/input.tsx`, `ui/form.tsx`, etc.) — podem ser reutilizados no futuro.
- Não alterar o botão flutuante do WhatsApp nem a UrgencyBar.
