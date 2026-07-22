## Objetivo

Garantir que em todas as páginas do site da Dedetizadora apareçam de forma consistente 4 serviços/blocos adicionais:

1. Limpeza e higienização de caixa d'água
2. Controle de roedores (ratos, camundongos, ratazanas)
3. Manejo e afastamento de pombos e morcegos
4. Chamada cruzada para Desentupimento (Grupo Ampla Desentupidora)

## O que será feito

### 1. Ampliar o catálogo de serviços
- Atualizar `src/components/ServicesSection.tsx` incluindo os 3 novos cards:
  - Limpeza de Caixa d'Água (ícone gota/tanque)
  - Controle de Roedores (ícone rato)
  - Manejo de Pombos e Morcegos (ícone pássaro)
- Manter os serviços atuais (residencial, comercial, cupim, etc.) e reorganizar em grid responsivo (3x3 ou 4 colunas).
- Cada card com link interno para a página de detalhe correspondente.

### 2. Criar 3 novas páginas dedicadas
Aproveitando o template dinâmico existente `PragaPage` (ou criando um novo `ServicoEspecialPage` se o modelo de "praga" não couber), criar:
- `/servicos/limpeza-caixa-dagua`
- `/servicos/controle-roedores`
- `/servicos/pombos-e-morcegos`

Cada página contém:
- H1 e meta específicos com foco em Curitiba/RMC
- Descrição do serviço, quando contratar, método/processo
- Frequência recomendada / normas (ex: Portaria 2914 para caixa d'água, ANVISA para roedores)
- FAQ + JSON-LD (Service + FAQPage)
- Módulo `TestimonialsModule` (com tag apropriada)
- CTA WhatsApp

Registrar rotas em `src/App.tsx` e adicionar no `sitemap.xml` e `llms.txt`.

### 3. Bloco "Também oferecemos" em todas as páginas da Dedetizadora
Criar componente `OutrosServicosBlock.tsx` (compacto, 4 tiles) exibindo:
Caixa d'Água • Roedores • Pombos/Morcegos • Desentupimento (link para `/desentupidora`)

Injetar antes do rodapé em:
- `src/pages/Index.tsx` (home dedetizadora)
- `src/pages/DedetizacaoComercial.tsx`
- `src/pages/PragaPage.tsx`
- `src/pages/CidadePage.tsx`
- `src/pages/BairroPage.tsx`
- `src/pages/Blog.tsx` e `BlogPost.tsx`

O tile "Desentupimento" leva para a home da Desentupidora, cumprindo o cross-sell entre as duas verticais.

### 4. Navegação e Footer
- Atualizar `src/components/FooterSection.tsx` com links para as 3 novas páginas.
- Atualizar o menu do Header (se houver dropdown de Serviços) para incluir os novos itens.

### 5. Dados/depoimentos
- Adicionar em `src/data/depoimentos.ts` tags novas: `caixa-dagua`, `roedores`, `pombos`, para o TestimonialsModule filtrar.

## Detalhes técnicos

- Reaproveitar padrão de SEO (react-helmet-async, canonical, JSON-LD) já usado nas outras páginas.
- Sem mudanças de backend; tudo estático/roteado no cliente.
- Typecheck ao final.

## Fora do escopo

- Não alterar as páginas da Desentupidora (apenas receber tráfego cruzado).
- Não criar novos posts de blog agora (posso fazer numa próxima leva se quiser).
