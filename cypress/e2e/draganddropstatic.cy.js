describe('Drag and Drop Static', () => {
    beforeEach(() => {
      cy.visit('/Static.html')
    })

    it('Drag and Drop', () => {
      cy.draganddropstatic('#angular')
      cy.draganddropstatic('#mongo')
      cy.draganddropstatic('#node')      
    })
})