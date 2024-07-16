describe('Drag and Drop Dynamic', () => {
    beforeEach(() => {
      cy.visit('/Dynamic.html')
    })

    it('Drag and Drop', () => {        
      cy.draganddropdynamic('#angular')
      cy.draganddropdynamic('#mongo')
      cy.draganddropdynamic('#node')      
    })
})