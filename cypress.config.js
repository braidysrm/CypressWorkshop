const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
specPattern:"test/e2e/scenarios/*.test.js",
  },
  
chromeWebSecurity: false,
});
