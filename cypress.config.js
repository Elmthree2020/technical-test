const { defineConfig } = require('cypress')

module.exports = defineConfig({
  'cypress-cucumber-preprocessor': {
    nonGlobalStepDefinitions: false,
    step_definitions: './cypress/e2e/cucumber/shopping',
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com",
    specPattern: "./cypress/e2e/**/*.feature",
    supportFile:false
  },
})