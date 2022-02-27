describe('Error page', () => {
  it('visits the app with invalid path', () => {
    cy.visit('/invalid-path');
    cy.get('[data-testid="app-header"]').contains('News');
  });

  it('should be display correct message', () => {
    cy.visit('/invalid-path');
    cy.get('[data-testid="error-message"]').contains('404 Page not found');
  });
});
