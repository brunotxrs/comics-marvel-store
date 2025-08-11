// O bloco `describe` agrupa os testes relacionados à página inicial e ao carrinho.
describe('Fluxo do Usuário na Loja de Quadrinhos', () => {

  // Antes de cada teste, o Cypress visita a URL da sua aplicação.
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  // Este teste verifica se a página inicial carrega corretamente e exibe os quadrinhos.
  it('Deve carregar a página inicial e exibir os quadrinhos', () => {
    cy.title().should('include', 'Comics Marvel Store');
    cy.get('[data-testid="comics-container"]').should('be.visible');
    cy.get('[data-testid="comic-item"]').should('have.length.at.least', 1);
  });

  // Este teste simula a adição de um quadrinho ao carrinho.
  it('Deve adicionar um quadrinho ao carrinho', () => {
    // Garante que o primeiro item da lista de quadrinhos esteja visível.
    cy.get('[data-testid="comic-item"]').first().should('be.visible');

    // Agora, em vez de `mouseover`, vamos clicar no botão de adicionar ao carrinho
    // com a opção `{ force: true }`. Isso força o clique mesmo que o elemento não
    // esteja visível.
    cy.get('[data-testid="add-to-cart-button"]').first().click({ force: true });

    // Clica no ícone do carrinho para abri-lo.
    cy.get('[data-testid="icone-do-carrinho"]').click();

    // Em seguida, verifica se a visualização do carrinho está visível.
    cy.get('[data-testid="shopping-cart-container"]').should('be.visible');
  });
});

