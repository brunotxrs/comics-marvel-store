# Comics Marvel Store

Este projeto é uma loja virtual de quadrinhos, desenvolvida para um desafio técnico. A aplicação consome a API do Comic Vine para exibir uma lista de quadrinhos, permitindo ao usuário explorar os itens e adicioná-los a um carrinho de compras.
A aplicação foi desenvolvida com foco em uma experiência de usuário fluida e responsiva, garantindo que o layout se adapte a diferentes tamanhos de tela (desktop, tablet e mobile) utilizando uma abordagem "mobile-first".

## 🚀 Tecnologias e Dependências Utilizadas
O projeto utiliza uma série de bibliotecas e ferramentas para construir a aplicação. Abaixo estão as principais tecnologias e os comandos de instalação:

- **Front-end:** React, JavaScript, HTML5 e CSS3.
- **Gerenciamento de Estado:** Redux Toolkit para gerenciar o estado global da aplicação.
``npm install @reduxjs/toolkit react-redux``

- **Estilização:** Styled Components para estilização e adaptação de componentes.
``npm install styled-components``

- **Requisições HTTP:** O projeto utiliza o fetch API nativo do navegador para fazer as requisições à API do Comic Vine.
- **Ícones:** As bibliotecas React Icons e Font Awesome para adicionar ícones à interface.
``npm install react-icons npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons``

- **API:** A aplicação utiliza a API do Comic Vine. Para facilitar as requisições, foi adicionado um proxy no arquivo package.json:
``"proxy": "https://comicvine.gamespot.com",``

- **Conteinerização:** Docker e NGINX para empacotar a aplicação e garantir que ela rode de forma consistente em qualquer ambiente.
- **Testes:** Cypress para testes de ponta a ponta (E2E), validando o fluxo do usuário em diferentes viewports.
``npm install cypress --save-dev``

## 🎨 Design e Estilo
- **Fontes:**
    - Nuckle Semi-bold
    - Cabinet Grotesk Exta-bold
- **Estrutura de Estilização:** A abordagem "mobile-first" foi utilizada, com media queries implementadas no ``index.css`` para adaptar o layout em telas maiores (tablets e desktops). O ``Header`` é um exemplo de componente estilizado com Styled Components e totalmente responsivo.

## 💻 Como Rodar a Aplicação Localmente
Para rodar a aplicação em modo de desenvolvimento na sua máquina, siga os passos abaixo:
1. Clone o repositório.
2. Instale as dependências do projeto:
``npm install``
3. Inicie o servidor de desenvolvimento:
``npm start``
A aplicação estará disponível em ``http://localhost:3000.``

## 🐳 Como Rodar a Aplicação com Docker
A aplicação foi conteinerizada para garantir a portabilidade. Certifique-se de ter o Docker instalado e rodando.

1. Na raiz do projeto (onde está o ``Dockerfile``), construa a imagem Docker:
``docker build -t comics-store .``

2. Após a imagem ser construída, execute o contêiner:
``docker run -p 8080:80 -d comics-store``

A aplicação estará disponível em ``http://localhost:8080``.

## 🎁 Cupons de Desconto
Como parte do desafio, foram criados os seguintes cupons de desconto para serem implementados na aplicação. Estes códigos podem ser utilizados pelos clientes durante o checkout.

```
Código do Cupom             Desconto

NORMAL10                    10% de desconto

RARE20                      20% de desconto 

```

Nota: A lógica para a aplicação desses cupons deve ser implementada no código front-end, validando o código inserido pelo usuário e aplicando o desconto correspondente ao carrinho de compras.


## ✅ Como Rodar os Testes E2E com Cypress
O projeto inclui uma suíte de testes de ponta a ponta para validar o fluxo do usuário em desktop, tablet e mobile.

1. Inicie o servidor de desenvolvimento da aplicação (veja "Como Rodar a Aplicação Localmente" acima).

2. Abra a interface do Cypress para rodar os testes de forma interativa:
``npx cypress open``

3. Alternativamente, para rodar os testes em modo "headless" (sem interface gráfica), execute:
``npx cypress run``

O Cypress irá executar os testes e gerar um relatório no terminal.

### Conclusão do Desafio
Este projeto demonstra a capacidade de construir uma aplicação React completa, com testes de integração e conteinerização. Todos os requisitos do desafio foram atendidos com sucesso, garantindo uma aplicação robusta, responsiva e pronta para ser implantada.