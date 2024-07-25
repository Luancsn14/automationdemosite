const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = defineConfig({
  
  viewportWidth: 1024,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { removeDirectory })
    },
    baseUrl: 'https://demo.automationtesting.in',
    env: {
      hideCredentials: true,
    },
  },
})
