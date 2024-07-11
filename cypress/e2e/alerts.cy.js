describe('Alerts', () => {
  beforeEach(() => {
    cy.visit('/Alerts.html')
  })

  it('Alert with OK', () => {
    const alertShown = cy.stub().as("alertShown")

    cy.get(':nth-child(1) > .analystic')
      .click()

    cy.on ('window:alert', alertShown)
      
    cy.get('#OKTab > .btn')
      .click()
      
    cy.get("@alertShown")
      .should("have.been.calledOnceWith", "I am an alert box!")
  })

  it('Alert with OK and Cancel - OK', () => {
    const alertShown = cy.stub().as("alertShown")

    cy.get(':nth-child(2) > .analystic')
      .click()

    cy.on('window:confirm', alertShown)

    cy.get('#CancelTab > .btn')
      .click()

    cy.get("@alertShown")
      .should("have.been.calledOnceWith", "Press a Button !")

    cy.get('#demo')
      .should('have.text', 'You pressed Ok')
  })

  it('Alert with OK and Cancel - Cancel', () => {
    cy.get(':nth-child(2) > .analystic')
      .click()

    cy.on('window:confirm', () => {
      return false;
    })

    cy.get('#CancelTab > .btn')
      .click()

    cy.get('#demo')
      .should('have.text', 'You Pressed Cancel')
  })

  it('Alert with Textbox', () => {
    cy.get(':nth-child(3) > .analystic')
      .click()

    cy.window().then((PromptAlert) => {
      cy.stub(PromptAlert, "prompt")
        .returns("User test")

      cy.get('#Textbox > .btn')
        .click()

      cy.get('#demo1')
        .should('have.text', 'Hello User test How are you today')
    })
  })
})