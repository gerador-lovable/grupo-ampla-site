Objetivo: tornar o rastreamento de leads do WhatsApp 100% mensurável, preservando a origem de cada campanha e permitindo que o Google Ads atribua corretamente as conversões.

Situção atual verificada no código:
- A página `/redirecionando` existe e dispara `gtag('event', 'conversion', ...)`.
- `index.html` usa placeholders `AW-XXXXXXXXXX` e `XXXXXXXXXXXXXXXXXX` no lugar do ID real de conversão do Google Ads.
- A função `buildRedirectUrl` (src/lib/whatsapp.ts) não lê nem repassa UTM, GCLID, campanha, grupo de anúncio ou palavra-chave.
- A mensagem enviada para o WhatsApp não indica a origem do lead.
- Não há eventos do Google Analytics 4 no clique em botões de WhatsApp.

O que será implementado:

1. Configurar ação de conversão real no Google Ads
   - Criar (ou usar, se já existir) uma ação de conversão do tipo "Website" com categoria "Submit lead form" nomeada "WhatsApp Lead - Ampla".
   - Obter o `send_to` no formato `AW-XXXXXXXXXX/YYYYYYYYYYYYYYYYYY`.
   - Substituir os placeholders no `index.html` e em `window.__ADS_CONVERSIONS__`.

2. Preservar UTM e GCLID no fluxo de redirecionamento
   - Alterar `buildRedirectUrl` para capturar os parâmetros `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `gbraid`, `wbraid` e `servico` da URL atual e incluí-los na query string de `/redirecionando`.
   - Garantir que o redirecionamento para WhatsApp leia esses parâmetros e os repasse na mensagem final, quando relevante.

3. Enriquecer a mensagem do WhatsApp com a origem do lead
   - Na mensagem enviada ao WhatsApp (em `buildWhatsAppUrl`), adicionar uma linha com a origem do lead, por exemplo:
     "Origem: Google Ads - Curitiba Baratas - gclid: abc123..."
   - Isso permite que a equipe de vendas saiba de qual campanha/bairro/praga veio o lead, mesmo sem acessar o Google Ads.

4. Adicionar eventos de clique no Google Analytics 4
   - Criar função utilitária para disparar evento `generate_lead` quando o usuário clicar em qualquer botão de WhatsApp.
   - Incluir parâmetros: `campaign`, `source`, `medium`, `gclid`, `servico`.

5. Melhorar a página `/redirecionando`
   - Continuar disparando o evento de conversão do Google Ads.
   - Adicionar fallback para caso o `gtag` falhe ou o usuário tenha bloqueador.
   - Garantir que a URL final do WhatsApp carregue com a mensagem personalizada e os parâmetros de origem.

6. Testar o fluxo end-to-end
   - Simular um clique de anúncio com `?utm_source=google&utm_medium=cpc&utm_campaign=c01_baratas&gclid=teste123`.
   - Verificar se a página de redirecionamento recebe os parâmetros, se a mensagem do WhatsApp inclui a origem e se o evento de conversão é disparado.

Arquivos que serão alterados:
- `index.html` (substituir placeholders do Google Ads)
- `src/lib/whatsapp.ts` (capturar e repassar UTM/GCLID)
- `src/pages/RedirectWhatsApp.tsx` (ler parâmetros e disparar conversão corretamente)
- `src/components/ContactSection.tsx` (garantir que o form passa UTM)
- `src/components/WhatsAppFloat.tsx` (garantir que o botão flutuante passa UTM)
- `src/components/Header.tsx` (garantir que o botão do header passa UTM)
- Possivelmente criar um utilitário `src/lib/analytics.ts` para centralizar eventos GA4.

Pendência de decisão:
- Preciso do ID real de conversão (`AW-XXXXXXXXXX`) e label do Google Ads, ou autorização para criar uma nova ação de conversão "WhatsApp Lead - Ampla" diretamente na conta conectada "Darlei Cordeiro".