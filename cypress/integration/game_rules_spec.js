describe('Game evolution', () => {
  it('evolves in ticks', () => {
    cy.visit('http://localhost:3000');
    cy.get('p')
      .should('contain', 'Tick count: 0')
    cy.get('.step-button').click()
    cy.get('p')
      .should('contain', 'Tick count: 1')
  });
});

