describe('Slider', () => {
    beforeEach(() => {
      cy.visit('/Slider.html')
    })
    
    it('Slider', () => {
        Cypress._.times(101, index => {
            cy.get('#slider')
              .invoke('val', index)
              .should('have.value', index)
        })
    })
})