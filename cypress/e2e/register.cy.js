import { faker } from '@faker-js/faker';

describe('Register', () => {
  beforeEach(() => {
    cy.visit('/Register.html')
  })

  it('Full Name', () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    cy.get('[placeholder="First Name"]')
      .type(firstName)
      .should('have.value', firstName)

    cy.get('[placeholder="Last Name"]')
      .type(lastName)
      .should('have.value', lastName)
  })

  it('Adress', () => {
    const address = faker.location.streetAddress()

    cy.get('[ng-model="Adress"]')
      .type(address)
      .should('have.value', ' ' + address)
  })

  it('Email', () => {
    const email = faker.internet.email()

    cy.get('[ng-model="EmailAdress"]')
      .type(email)
      .should('have.value', email)
  })

  it('Phone Number', () => {
    const phoneNumber = faker.phone.number()

    cy.get('[ng-model="Phone"]')
      .type(phoneNumber)
      .should('have.value', phoneNumber)
  })

  it('Gender Male', () => {
    cy.get('[name="radiooptions"]')
      .check('Male')
      .should('be.checked')
      .and('have.value', 'Male')
  })

  it('Gender FeMale', () => {
    cy.get('[name="radiooptions"]')
      .check('FeMale')
      .should('be.checked')
      .and('have.value', 'FeMale')
  })

  it('Hobbies', () => {
    cy.get('[type="checkbox"]')
      .should('have.length', 3)
      .check()
      .should('be.checked')
  })

  // it.only('Languages', () => {
  //   cy.get('#msdd').click()
  //   cy.get('ul.ui-autocomplete')
  //   .contains('Arabic').click()
  //   cy.get('ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content.ui-corner-all')
  // })

  it('Skills', () => {
    cy.get('#Skills option')
      .its('length', { log: false }).then(n => {
        const skillIndex = Cypress._.random(n - 1)
        cy.get('#Skills').select(skillIndex)
          .should('have.prop', 'selectedIndex', skillIndex)
      })
  })

  it('Select Country', () => {
    cy.get('.select2-selection__arrow')
      .click()
    
    cy.get('#select2-country-results li.select2-results__option')
      .its('length', { log: false }).then(n => {
        const countryIndex = Cypress._.random(n - 1)
        cy.get('li.select2-results__option', {log: false}).then($options => {
          const countryText = $options[countryIndex].innerText
          cy.get('li.select2-results__option')
            .contains(countryText)
            .click()
          
          cy.get('#select2-country-container')
            .should('have.prop', 'title', countryText)
        })
    })
  })

  it('Date Of Birth', () => {
    cy.get('#yearbox option')
      .its('length', { log: false }).then(n => {
        const yearIndex = Cypress._.random(n - 1)
        cy.get('#yearbox').select(yearIndex)

        cy.get('#yearbox option').then($options => {
          const year = $options[yearIndex].innerText
                    
          cy.get('#yearbox')
            .should('have.value', year)
        })          
      })

    cy.get(':nth-child(11) > :nth-child(3) > .form-control option')
      .as('monthBox')
      .its('length', { log: false }).then(n => {
        const monthIndex = Cypress._.random(n - 1)
       
        cy.get('@monthBox').then($options => {
          const month = $options[monthIndex].innerText

          cy.get(':nth-child(11) > :nth-child(3) > .form-control')
            .select(month)
                    
          cy.get(':nth-child(11) > :nth-child(3) > .form-control')
            .should('have.value', month)
      })          
    })

    cy.get('#daybox option')
      .its('length', { log: false }).then(n => {
        const dayIndex = Cypress._.random(n - 1)
        cy.get('#daybox').select(dayIndex)

        cy.get('#daybox option').then($options => {
          const day = $options[dayIndex].innerText
                    
          cy.get('#daybox')
            .should('have.value', day)
        })          
      })
  })
})