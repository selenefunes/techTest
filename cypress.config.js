const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Haz que las variables de entorno estén disponibles en la configuración de Cypress
      config.env = config.env || {};
      Object.keys(process.env).forEach((key) => {
        if (key.startsWith('CYPRESS_')) {
          config.env[key.substring('CYPRESS_'.length)] = process.env[key];
        }
      });

      return config;
    },
    specPattern: 'cypress/integration/**/*.spec.js',
  },
});
