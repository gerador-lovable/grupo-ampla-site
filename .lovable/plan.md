#### Problema
O título principal da Hero foi dividido em 3 frases, mas em alguns tamanhos de tela uma das frases quebra para uma segunda linha, fazendo o título ocupar 4 ou mais linhas.

#### Diagnóstico
A Hero atualmente usa três `<span>` em bloco dentro do `h1`, um para cada frase. O texto já está estruturado em 3 linhas, mas sem controle de quebra de linha, palavras longas podem estourar em telas menores.

#### Solução
1. Verificar o tamanho real de cada frase nos breakpoints mobile, tablet e desktop.
2. Aplicar `whitespace-nowrap` nos três `<span>` de frase para forçar cada uma a ocupar uma única linha.
3. Ajustar o tamanho da fonte para garantir que cada frase caiba na largura disponível, sem gerar overflow horizontal. Se necessário, reduzir levemente o tamanho do título em telas pequenas (`sm` e abaixo) usando `text-[clamp(...)]` ou classes responsivas finas.
4. Manter a legibilidade, o efeito de destaque laranja na última frase e a hierarquia visual.

#### Resultado esperado
O título da Hero sempre ocupará exatamente 3 linhas, independente do dispositivo, sem corte de texto nem overflow.