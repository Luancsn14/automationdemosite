describe('Selectable', () => {
    beforeEach(() => {
      cy.visit('/Selectable.html')
    })

    it('Default functionality', () => {
        cy.get(':nth-child(1) > .analystic')
          .click()

        cy.get('.deaultFunc li.ui-widget-content')
          .should('have.length', 7)
          .each(($item) => {
            cy.wrap($item)
              .click()

            cy.wrap($item)
              .should('have.class', 'ui-widget-content selected')
        })
    })

    it('Serialize - none selected', () => {
      cy.get(':nth-child(2) > .analystic')
        .click()

      cy.get('#feedback')
        .should('contain', "You've selected:")

      cy.get('#result')
        .should('have.text', 'None:')
    })

    it('Serialize - select each option separately', () => {
      cy.get(':nth-child(2) > .analystic')
        .click()

      cy.get('.SerializeFunc li.ui-widget-content')
        .should('have.length', 7)
        .each(($item) => {
          cy.wrap($item)
            .click()

          const result = $item.text().substring(13, $item.text().length)

          cy.wrap($item)
            .should('have.class', 'ui-widget-content selected')

          cy.get('#result')
            .should('contain', result)
        })
    })

    it('Serialize - select all options', () => {
      cy.get(':nth-child(2) > .analystic')
        .click()
      
      cy.get('.SerializeFunc li.ui-widget-content')
        .should('have.length', 7)
        .click({ ctrlKey: true , multiple: true })
        .each(($item) => {
          const result = $item.text().substring(13, $item.text().length)

          cy.wrap($item)
            .should('have.class', 'ui-widget-content selected')

          cy.get('#result')
            .should('contain', result)
        })
            
    })
})