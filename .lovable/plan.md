## 1. Remover todas as faixas de preço do site

O site nunca deveria ter exibido valores em R$. Vou eliminar 100% dos preços e substituir por linguagem de orçamento sob medida.

**Arquivos a alterar:**

- **Excluir** `src/pages/Precos.tsx` e `src/components/PrecoBlock.tsx`.
- **`src/App.tsx`**: remover a rota `/precos` e o import lazy de `Precos`.
- **`src/components/OutrosServicosBlock.tsx`**: remover o card que aponta para `/precos`.
- **`src/pages/PragaPage.tsx`**: remover `<PrecoBlock ... />` e o import.
- **`src/pages/BairroPage.tsx`**: remover `<PrecoBlock ... />` e o import.
- **`src/pages/ServicoEspecialPage.tsx`**: remover `<PrecoBlock ... />` e o import.
- **`src/pages/DedetizadoraPertoDeMim.tsx`**: remover `<PrecoBlock ... />` e o import; ajustar a copy próxima para “orçamento grátis em minutos”.
- **`src/data/servicosDesentupimento.ts`**: substituir os bullets "Preço fechado antes do serviço" por "Orçamento fechado antes do serviço, sem surpresas".
- **`src/data/servicosEspeciais.ts`**: reescrever FAQs e trechos que citam "preço fechado por unidade" / "Como funciona o preço" para "Como funciona o orçamento" e trocar "preço" por "orçamento" nas descrições de condomínio, supermercado e hotel (sem valores).
- **`public/sitemap.xml`** e **`public/llms.txt`**: remover a entrada `/precos`.

Depois disso, uma varredura final `rg "R\$|faixa de preço|PrecoBlock|/precos"` em `src/` e `public/` deve retornar vazio.

## 2. Adaptar páginas de destino dos anúncios (mesmo padrão da home)

As URLs dos anúncios permanecem: `/dedetizacao/:praga`, `/servicos/:slug`, `/bairros/:bairro`. Vou adicionar às três os blocos de conversão que hoje só existem na home, mantendo a ordem coerente.

**Blocos novos a inserir (na ordem):**

```text
Hero (existente)
UrgencyBar (já presente em Praga; adicionar em Bairro e ServicoEspecial)
Contexto/Serviço (existente)
DesDifferentialsSection  ← NOVO (5 diferenciais Ampla)
Sinais + Riscos / Método (existente)
DesGuaranteeSection      ← NOVO (garantia 6 meses + selos)
TestimonialsModule (existente em Praga; adicionar em Bairro e ServicoEspecial)
FAQ (existente)
ContactSection           ← NOVO (form/telefone/mapa reforçando conversão)
CTA final (existente)
OutrosServicosBlock (existente)
Footer + WhatsAppFloat
```

Nenhum bloco novo trará preço; todos falam em “orçamento grátis pelo WhatsApp”. Reaproveito componentes já existentes para não inflar o bundle.

**Arquivos a alterar:**

- `src/pages/PragaPage.tsx`: adicionar `DesDifferentialsSection`, `DesGuaranteeSection`, `ContactSection` nas posições acima; remover o `PrecoBlock`.
- `src/pages/BairroPage.tsx`: adicionar `UrgencyBar`, `DesDifferentialsSection`, `DesGuaranteeSection`, `TestimonialsModule` (com tag do bairro/cidade caindo em “dedetizacao”), `ContactSection`; remover `PrecoBlock`.
- `src/pages/ServicoEspecialPage.tsx`: mesmo tratamento (Urgency + Differentials + Guarantee + Testimonials + Contact); remover `PrecoBlock`.
- Validar que cada página segue com H1 único, breadcrumbs, `FAQPage` schema e `Service` schema já existentes (nenhum schema com `offers`/`price`).

## 3. Validação

- `rg "R\$|preço|preco|Precos|PrecoBlock|/precos|faixa" src public` → sem ocorrências residuais (exceto substituições legítimas por "orçamento").
- Abrir `/`, `/dedetizacao/baratas`, `/bairros/batel` e `/servicos/dedetizacao-condominial` no preview e conferir a nova sequência de seções e ausência de valores.
- `sitemap.xml` sem `/precos`; build passa sem erro de import.

## 4. Google Ads

Não é necessário alterar as URLs finais dos anúncios: continuam apontando para essas mesmas rotas, que agora estarão muito mais completas. Nenhuma mudança no MCP para este passo.
