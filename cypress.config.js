const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  e2e: {
    baseUrl: 'https://demo.automationtesting.in',
    env: {
      hideCredentials: true,
    },
  },
})
