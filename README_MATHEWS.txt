Desafio API e Frontend Accenture - Postman & Cypress

Este projeto contém testes automatizados utilizando Cypress e testes de API utilizando Postman.

Estrutura do Projeto

- /e2e → Testes End-to-End com Cypress  
- /support → Configurações e comandos customizados do Cypress  
- /postman → Collection de testes de API (Postman) 

Testes de API (Postman):
O projeto inclui uma collection e um environment do Postman para validação de endpoints.

Como utilizar:

Importar os arquivos localizados na pasta /postman

Executar as requisições diretamente no Postman

Tratamento de Variáveis:

- O Postman não exporta automaticamente valores de variáveis.
- Para contornar isso, os testes foram estruturados para capturar dinamicamente os dados retornados pela API
- Isso garante independência de ambiente e maior robustez

Como Executar os Testes automatizados:

Pré-requisitos:
- Node.js instalado

Instalação:
Digitar no terminal Git Bash: npm install

Execução:
Digitar no terminal Git Bash: npx cypress open

Após abrir o Cypress:

- Selecione o teste desejado

- Execute em modo interativo

Observações:

Durante a execução dos testes, o ambiente do DemoQA pode apresentar instabilidades ocasionais