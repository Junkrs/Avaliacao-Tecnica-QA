# Avaliação Técnica QA - Cotefácil

Este repositório contém os 3 testes que serão utilizados na avaliação técnica para a vaga de estagiário de QA da empresa Cotefácil.

## :large_orange_diamond: Conteúdo

- Ele foi dividido em 3 pastas, cada uma contém um dos testes.
- O arquivo READ.ME contém explicações básicas de uso e a visão técnica usada para resolver cada um dos testes.

## Teste 1 - Conhecimento básico em python ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
> **_TAREFA:_** Escreva um script que receba uma palavra e identifique palíndromos, ou seja, palavras que podem ser lidas da mesma maneira tanto de trás para frente quanto de frente para trás, como "arara", "radar" ou “esse”. **Exemplo de entradas:** sopapos, teste. **Exemplo de saída:** A palavra {palavra} é um palíndromo, A palavra não é um palíndromo.

Para este teste, foi feito um simples *script* em python que recebe uma *string*, verifica, em um *loop*, se a primeira letra é igual a última, depois se a segunda é igual a penúltima e assim por diante até se encerrar. Nisso, ele usa de um contador que é incrementado a cada letra que é igual. Ao final, se a quantidade de letras no contador for igual ao tamanho da palavra, ele confirma que ela é um palíndromo.

- Para rodar esse programa, basta ter a linguagem de programação python corretamente instalada em seu computador. E rodar o arquivo [**palindromos.py**](https://github.com/Junkrs/Avaliacao-Tecnica-QA/blob/main/Teste%201%20-%20Conhecimento%20b%C3%A1sico%20em%20python/palindromos.py), que está na pasta 'Teste 1...'. Ele vai solicitar uma palavra, após o usuário digitar, o programa retornará na própria linha de comando o resultado esperado.
     
## Teste 2 - Conhecimento básico Cypress ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
> **_TAREFA:_** Escreva um teste automatizado usando o framework Cypress para verificar o funcionamento de um botão em uma página simples.
> 1. Acesse uma página com um botão de "Enviar".
> 2. Verifique se o botão está visível.
> 3. Clique no botão.
> 4. Confirme que, após o clique, uma mensagem de "Enviado com sucesso!" aparece na tela.

O segundo teste consiste na criação de um caso automátizado de teste. Para isso, foi necessário instalar o Cypress, criar uma página simples com o botão e também criar o teste em si. A página simples foi feita com HTML puro, ela contém apenas um título, duas *labels* e o botão de envio. Já o arquivo que contém os testes tem o nome e descrição do teste, além de 3 comandos.

- Endereço da página onde serão feitos os testes: ```cy.visit('http://127.0.0.1:8080/index.html')```
- Comando para verificação do botão, se é visível, e em seguida, clicar nele: ```cy.contains('button', 'Enviar').should('be.visible').click()```
- Comando para verificar o conteúdo da mensagem que surge ao clicar no botão: ```cy.on('window:alert', (texto) => {expect(texto).to.equal('Enviado com sucesso!')```

Para usar esse programa é necessário ter o Cypress, NodeJS, NPM e um navegador compátivel instalados em seu computador. Ao fazer isso, salve os arquivos da pasta 'Teste 2...' em sua máquina, sem alterar sua hierárquia. Em seguida, execute os seguintes comandos em ordem, via terminal, na pasta raiz do seu projeto.
1. Instalar dependências:
   ```
   npm install
   ```
2. Iniciar servidor local para a página HTML:
   ```
   npm install -g live-server
   live-server public
   ```
3. Abrir Cypress:
   ```
    npx cypress open
   ```
Uma janela do seu navegador escolhido vai abrir já com o nome do teste. Basta clicar nele e acompanhar os resultados.


## Teste 3 - Conhecimento em fluxo de teste
> **_TAREFA:_** Crie um fluxograma de teste manual para validar o campo de busca de um site. O fluxograma deve incluir os seguintes cenários:.
> 1. Pesquisa com uma palavra válida.
> 2. Pesquisa com uma palavra inválida ou inexistente.
> 3. Pesquisa sem inserir texto.
>    
> Instruções:
> - Informe os passos e decisões para cada cenário.
> - Inclua ações esperadas, como exibir resultados ou mensagens de erro.
> - Use símbolos de decisão para definir os caminhos de teste.
> - Determine dois possíveis fins de fluxo, ok e bug.

Para a criação desse fluxograma, o *software* [Draw.io](https://app.diagrams.net/) foi utilizado, ele é gratuito e possui uma versão diretamente no navegador. Ele foi criado com 3 cenários, descritos na tarefa. Esses 3 cenários começam iguais, apenas com mudanças no que deveria ser inserido no campo de pesquisa. A partir disso, 2 cenários de finalização foram criados, o primeiro, em que o teste é aprovado, retorna o esperado do teste ou retorna o usuário para o campo de pesquisa. Já o segundo, em que os testes são reprovados, apresentam 2 possibilidades de erros encontrados para os 3 cenários, onde resultados estarão incorretos ou vazios.

O resultado incorreto, seria tudo aquilo que não deveria ser visível para o usuário, como erros internos, códigos de problemas ou respostas que deveria ser para outra pesquisa. Já os dados vazios, seriam tudo aquilo que foi retornado sem nenhum conteúdo para o usuário.
- Caso queira abrir uma versão editável, pode baixar o arquivo [**Fluxo de teste.drawio**](https://github.com/Junkrs/Avaliacao-Tecnica-QA/blob/main/Teste%203%20-%20Conhecimento%20em%20fluxo%20de%20teste/Fluxo%20de%20teste.drawio), e abri-lô diretamente no *site* do programa citado anteriormente. Caso contrário, uma versão em .pdf e .jpeg estão disponíveis na pasta 'Teste 3...' deste repositório.


## :large_orange_diamond: Contato
Se tiver alguma dúvida. Por favor, entre em contato comigo :D
- Email: junqueiragvl@gmail.com
- Whatsapp: (19) 99726-2200

#### Obrigado!
