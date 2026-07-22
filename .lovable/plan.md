Padronizar o espaçamento vertical de todas as sessões do site para exatamente 30px de padding-top e 30px de padding-bottom, substituindo os valores atuais que variam entre `py-12`, `py-16 md:py-20`, `py-20 md:py-28` e outros.

### Abordagem

1. Criar utilidade CSS em `src/index.css`
   - Adicionar classe `.section-py` com `padding-top: 30px; padding-bottom: 30px;`.
   - Isso garante o valor exato de 30px, já que o Tailwind padrão não possui token para 30px (mais próximo seria `py-8` = 32px).

2. Substituir classes em todas as tags `<section>`
   - Remover todos os `py-*`, `pt-*` e `pb-*` relacionados a espaçamento de sessão em `<section>`.
   - Aplicar `section-py` como substituto padrão.

3. Tratamento das hero sections
   - As hero sections possuem `pt-32 md:pt-40` no container para compensar o header fixo. Esse offset superior será mantido.
   - O padding inferior das hero sections será ajustado para 30px.

4. Arquivos afetados
   - Componentes da home: `HeroSection.tsx`, `ServicesSection.tsx`, `PestsSection.tsx`, `DifferentialsSection.tsx`, `TestimonialsSection.tsx`, `GuaranteeSection.tsx`, `FAQSection.tsx`, `ContactSection.tsx`, `OutrosServicosBlock.tsx`, `TestimonialsModule.tsx`.
   - Componentes da desentupidora: `DesHeroSection.tsx`, `DesServicesSection.tsx`, `DesProblemsSection.tsx`, `DesDifferentialsSection.tsx`, `DesTestimonialsSection.tsx`, `DesGuaranteeSection.tsx`, `DesFAQSection.tsx`, `DesContactSection.tsx`.
   - Páginas de serviço/local: `DedetizacaoComercial.tsx`, `PragaPage.tsx`, `ServicoEspecialPage.tsx`, `ServicoDesentupimentoPage.tsx`, `CidadePage.tsx`, `BairroPage.tsx`, `Emergencia24h.tsx`, `Blog.tsx`, `BlogPost.tsx`.

5. Validação
   - Rodar build para garantir que nenhuma classe sintetizada foi quebrada.
   - Verificar visualmente preview se as sessões ficaram com espaçamento uniforme.

### Nota
A barra de urgência (`UrgencyBar.tsx`) e o header (`Header.tsx`) não serão alterados, pois não são sessões de conteúdo.