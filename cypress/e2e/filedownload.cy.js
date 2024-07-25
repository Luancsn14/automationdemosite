require('cypress-delete-downloads-folder').addCustomCommand(); // npm i -D cypress-delete-downloads-folder

describe('File Download', () => {
  beforeEach(() => {
    cy.visit('/FileDownload.html')
  })
    
  it('File Download successfully', () => {
    cy.get('.btn.btn-primary')
      .click()

    cy.readFile('cypress/downloads/samplefile.pdf', { log: false })
      .should('exist')

    cy.deleteDownloadsFolder()
  })
})