Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
describe('Windows', () => {
  beforeEach(() => {
    cy.visit('/Windows.html')
  })

  it('Open New Tabbed Windows', () => {
    cy.get('a[href="#Tabbed"]')
      .click()

    cy.get('a[href="http://www.selenium.dev"]')
      .should('have.attr', 'target', '_blank')
  })

  it('Open New Seperate Windows', () => {
    cy.window().then(win => {
        cy.stub(win, 'open').as('open')
      })

    cy.get('a[href="#Seperate"]')
      .click()

    cy.get('.btn.btn-primary')
      .click()
      
    cy.get('@open')
      .should('have.been.calledOnce')
  })

  it('Open Seperate Multiple Windows', () => {
    cy.window().then(win => {
      cy.stub(win, 'open').as('open')
    })

    cy.get('a[href="#Multiple"]')
      .click()

    cy.get('#Multiple > .btn')
      .click()

    cy.get('@open')
      .should('have.been.calledTwice')
  })
})