// O bloco `describe` agrupa os testes relacionados à página inicial e ao carrinho.
describe('Fluxo do Usuário na Loja de Quadrinhos', () => {

  // Teste o fluxo em um viewport de desktop (ex: 1280x720).
  it('Deve carregar a página e adicionar um item ao carrinho em um desktop', () => {
    // Define o tamanho da tela para desktop
    cy.viewport(1280, 720);
    cy.visit('http://localhost:3000');

    // Verifica se a página e os quadrinhos são exibidos corretamente
    cy.title().should('include', 'Comics Marvel Store');
    cy.get('[data-testid="comics-container"]').should('be.visible');
    cy.get('[data-testid="comic-item"]').should('have.length.at.least', 1);
    
    // Adiciona o primeiro quadrinho ao carrinho
    cy.get('[data-testid="add-to-cart-button"]').first().click({ force: true });
    
    // Clica no ícone do carrinho e verifica se ele é exibido
    cy.get('[data-testid="icone-do-carrinho"]').click();
    cy.get('[data-testid="shopping-cart-container"]').should('be.visible');
  });

  // Teste o fluxo em um viewport de tablet (ex: iPad em modo paisagem).
  it('Deve carregar a página e adicionar um item ao carrinho em um tablet', () => {
    // Define o tamanho da tela para um tablet em paisagem
    cy.viewport('ipad-2', 'landscape');
    cy.visit('http://localhost:3000');
    
    // Verifica se a página e os quadrinhos são exibidos corretamente
    cy.title().should('include', 'Comics Marvel Store');
    cy.get('[data-testid="comics-container"]').should('be.visible');
    cy.get('[data-testid="comic-item"]').should('have.length.at.least', 1);

    // Adiciona o primeiro quadrinho ao carrinho
    cy.get('[data-testid="add-to-cart-button"]').first().click({ force: true });

    // Clica no ícone do carrinho e verifica se ele é exibido
    cy.get('[data-testid="icone-do-carrinho"]').click();
    cy.get('[data-testid="shopping-cart-container"]').should('be.visible');
  });
  
  // Teste o fluxo em um viewport de mobile (ex: iPhone 6/7/8).
  it('Deve carregar a página e adicionar um item ao carrinho em um mobile', () => {
    // Define o tamanho da tela para um celular
    cy.viewport('iphone-6');
    cy.visit('http://localhost:3000');

    // Verifica se a página e os quadrinhos são exibidos corretamente
    cy.title().should('include', 'Comics Marvel Store');
    cy.get('[data-testid="comics-container"]').should('be.visible');
    cy.get('[data-testid="comic-item"]').should('have.length.at.least', 1);
    
    // Adiciona o primeiro quadrinho ao carrinho
    cy.get('[data-testid="add-to-cart-button"]').first().click({ force: true });
    
    // Clica no ícone do carrinho e verifica se ele é exibido
    cy.get('[data-testid="icone-do-carrinho"]').click();
    cy.get('[data-testid="shopping-cart-container"]').should('be.visible');
  });
});
