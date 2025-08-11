// O bloco `describe` agrupa os testes relacionados à página inicial e ao carrinho.
describe('Fluxo do Usuário na Loja de Quadrinhos', () => {

  // Antes de cada teste, o Cypress visita a URL da sua aplicação.
  // Certifique-se de que o seu servidor de desenvolvimento está rodando (`npm start`).
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  // Este teste verifica se a página inicial carrega corretamente e exibe os quadrinhos.
  it('Deve carregar a página inicial e exibir os quadrinhos', () => {
    // Verifica se o título da página está correto.
    cy.title().should('include', 'Comics Marvel Store');

    // Seleciona e verifica se o container de quadrinhos está visível.
    // **Atenção:** Você precisa adicionar `data-testid="comics-container"` no seu HTML.
    cy.get('[data-testid="comics-container"]').should('be.visible');

    // Verifica se há pelo menos um item de quadrinho exibido na lista.
    // **Atenção:** Você precisa adicionar `data-testid="comic-item"` em cada item da sua lista.
    cy.get('[data-testid="comic-item"]').should('have.length.at.least', 1);
  });

  // Este teste simula a adição de um quadrinho ao carrinho.
  it('Deve adicionar um quadrinho ao carrinho', () => {
    // Clica no botão para adicionar o primeiro quadrinho da lista ao carrinho.
    // **Atenção:** Adicione `data-testid="add-to-cart-button"` no seu botão de "Adicionar".
    cy.get('[data-testid="add-to-cart-button"]').first().click();

    // Em seguida, verifica se a visualização do carrinho está visível.
    // **Atenção:** Adicione `data-testid="shopping-cart-container"` no seu componente de carrinho.
    cy.get('[data-testid="shopping-cart-container"]').should('be.visible');
  });
});
