describe('Drag and Drop Static', () => {
    beforeEach(() => {
      cy.visit('/Static.html')
    })

    it('Drag and Drop', () => {
      cy.draganddrop('#angular')
      cy.draganddrop('#mongo')
      cy.draganddrop('#node')      
    })

})