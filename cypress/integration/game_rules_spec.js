describe('Game evolution', () => {
  it('evolves in ticks', () => {
    cy.visit('http://localhost:3000');
    cy.get('.tick-count')
      .should('contain', 'Tick count: 0')
    cy.get('.step-button').click()
    cy.get('.tick-count')
      .should('contain', 'Tick count: 1')
  });
});

describe('Cell state', () => {
  it('user can click on cell to change state', () => {
    cy.visit('http://localhost:3000');
    cy.get('.cell-container button:first').click()
      .invoke('val').should('eq', 'true')
  }); 
});

describe('Cell death', () => {
  it('live cell dies on next tick if fewer than two neighbors', () => {
    cy.visit('http://localhost:3000');
    cy.get('.cell-container button:first').click()
      .invoke('val').should('eq', 'true')
    cy.get('.step-button').click()
    cy.get('.cell-container button:first')
      .invoke('val').should('eq', 'false')  
    }); 
    it('live cell dies on next tick if more than three', () => {
      cy.visit('http://localhost:3000');
      cy.get('.cell-container button').eq(0).click()
      cy.get('.cell-container button').eq(1).click()
      cy.get('.cell-container button').eq(2).click()
      cy.get('.cell-container button').eq(40).click()
      cy.get('.cell-container button').eq(41).click()
      cy.get('.step-button').click()
      cy.get('.cell-container button').eq(1)
        .invoke('val').should('eq', 'false')  
    }); 
});
