describe('Home page', () => {
  it('Visits the app', () => {
    cy.visit('/');
    cy.get('[data-testid="app-header"]').contains('News');
  });

  it('Should able to open filter menu', () => {
    cy.wait(1000);
    cy.get('[data-testid="filter-button"]').click();
  });

  it('Should able to close filter menu', () => {
    cy.wait(1000);
    cy.get('[data-testid="close-filter-button"]').click();
  });

  it('Should able to search news by keyword', () => {
    cy.wait(2000);

    cy.get('[data-testid="filter-button"]').click();

    cy.get('[data-testid="keyword"]').type('test');
    cy.get('[data-testid="submit-filter-button"]').click();

    cy.get('[data-testid="home-sub-header"]').contains('test');
  });

  it('Should able to search news by search category', () => {
    cy.wait(2000);

    cy.get('[data-testid="filter-button"]').click();

    cy.get('[data-testid="category"]').click().type('tech{downarrow}{enter}', { focus: true });

    cy.get('[data-testid="country"]').should('be.disabled');
    cy.get('[data-testid="sources"]').should('be.disabled');

    cy.get('[data-testid="submit-filter-button"]').click();

    cy.get('[data-testid="home-sub-header"]').contains('Technology');
  });

  it('Should able to search news by multiple search criteria', () => {
    cy.wait(2000);

    cy.get('[data-testid="filter-button"]').click();

    cy.get('[data-testid="keyword"]').type('test');
    cy.get('[data-testid="country"]').click().type('u{downarrow}{enter}');

    cy.get('[data-testid="sources"]').should('be.disabled');
    cy.get('[data-testid="category"]').should('be.disabled');

    cy.get('[data-testid="submit-filter-button"]').click();

    cy.get('[data-testid="home-sub-header"]').contains('test');
    cy.get('[data-testid="home-sub-header"]').contains('United States');
  });

  it('Should display error from API response when search not found', () => {
    cy.wait(2000);

    cy.get('[data-testid="filter-button"]').click();

    cy.get('[data-testid="keyword"]').type('sdfasefasfeasefasef');
    cy.get('[data-testid="submit-filter-button"]').click();

    cy.get('[data-testid="error-message"]').should('exist');
  });

  it('Should able to clear search', () => {
    cy.wait(1000);
    cy.get('[data-testid="home-button"]').click();
  });
});
