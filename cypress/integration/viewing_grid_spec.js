describe('Viewing the grid', () => {
  it('visits the page and sees grid', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1')
      .should('contain', 'Game of Life')
    cy.get('.dead').should('have.length', 840)
  });
});
