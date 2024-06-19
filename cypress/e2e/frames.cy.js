import 'cypress-iframe' // npm install -D cypress-iframe

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
describe('Frames', () => {
  beforeEach(() => {
    cy.visit('/Frames.html')
  })

  it('Single Iframe', () => {
    cy.get('a[href="#Single"]')
      .click()

    cy.frameLoaded('#singleframe')

    cy.iframe('#singleframe')
      .should('contain', 'iFrame Demo')

    cy.iframe('#singleframe')
      .find('input[type="text"]')
      .type('Test')
      .should('have.value', 'Test')
  })

  it('Iframe within an Iframe', () => {
    cy.get('a[href="#Multiple"]')
      .click()

    cy.frameLoaded('#Multiple > iframe')

    cy.iframe('#Multiple > iframe')
      .should('contain', 'Nested iFrames')

    cy.iframe('#Multiple > iframe')
      .find('.iframe-container > iframe').as('nestedIframe')
      .enter('@nestedIframe').then(getBody => {
        getBody()
          .find('.container')
          .should('contain', 'iFrame Demo')

        getBody()
          .find('input[type="text"]')
          .type('Test')
          .should('have.value', 'Test')
      })
  })
})