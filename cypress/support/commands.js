Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

Cypress.Commands.add('selectYear', (yearName) => {

    const currentYear = new Date().getFullYear()

    cy.get('.ui-datepicker-year').then(($year) => {
        if ($year.text() == yearName) {
            cy.log(yearName + ' year is selected')
            return
        }
        else {
            if (yearName < currentYear) {
                cy.get('a.ui-datepicker-prev').click()
            }
            else if (yearName > currentYear) {
                cy.get('a.ui-datepicker-next').click()
            }

        }
        cy.selectYear(yearName)
    })

});

import { DateUtils } from "./dateUtils/DateUtils"
var dateutils = new DateUtils()

Cypress.Commands.add('selectMonth', (monthName) => {

    let currentMonth = new Date().getMonth
    let givenMonth = dateutils.getMonthIndexFromName(monthName)

    cy.get('.ui-datepicker-month').then(($month) => {
        if ($month.text() == monthName) {
            cy.log(monthName + ' month is selected')
            return
        }
        else {
            if (monthName < currentMonth) {
                cy.get('a.ui-datepicker-prev').click()
            }
            else if (monthName > currentMonth) {
                cy.get('a.ui-datepicker-next').click()
            }

        }
        cy.selectMonth(monthName)
    })

});

Cypress.Commands.add('selectOneDay', (dayName) => {

    cy.get('table.ui-datepicker-calendar a.ui-state-default').eq(dayName - 1).click()
    cy.log(dayName + ' day is selected')

});