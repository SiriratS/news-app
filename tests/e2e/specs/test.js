describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#header').contains('News');
  });
});
