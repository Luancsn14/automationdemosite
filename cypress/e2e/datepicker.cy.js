describe('Datepicker', () => {
  beforeEach(() => {
    cy.visit('/Datepicker.html')
  })

  it('DatePicker Disabled', () => {
    cy.get('#datepicker1').click()
    cy.get('#ui-datepicker-div')

    cy.selectYear(2023)
    cy.selectMonth('May')
    cy.selectOneDay(7)

    cy.get('#datepicker1')
      .should('be.visible')
      .and('have.value', '05/07/2023')
  })

  it('DatePicker Enabled', () => {
    const date = '05/07/2023'

    cy.get('#datepicker2')
      .type(date + '{enter}')
      .should('have.value', date)
  })
})