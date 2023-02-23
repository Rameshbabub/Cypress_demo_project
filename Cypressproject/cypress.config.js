const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  defaultCommandTimeout: 6000,
  experimentalStudio: true,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('@saucelabs/cypress-plugin').default(on, config,
        {
          region: 'us-west-1',
          build: 'myBuild',
          tags: ['example1']
        }
      )
      return config
    },
  },
  reporter: "mochawesome",
  reporterOptions:{
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir:"cypress/reports"
  }
});
