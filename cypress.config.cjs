const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'http://localhost:5500/view',
    testIsolation: false,

    setupNodeEvents(on, config) {
      // Habilita suporte a aliases com Webpack
      on('file:preprocessor', webpack({
        webpackOptions: {
          resolve: {
            alias: {
              '@pages': path.resolve(__dirname, 'cypress/support/pages'),
              '@support': path.resolve(__dirname, 'cypress/support'),
              '@fixtures': path.resolve(__dirname, 'cypress/fixtures'),
            },
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
            ],
          },
        },
      }));

      // Eventos úteis
      on('after:run', (results) => {
        console.log('⚙️ Todos os testes foram executados.');
        console.log(`✅ Passaram: ${results.totalPassed}`);
        console.log(`❌ Falharam: ${results.totalFailed}`);
      });

      on('task', {
        log(message) {
          console.log('📢 Log do Cypress:', message);
          return null;
        },
      });

      return config;
    },

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/_*.cy.{js,ts}'],
  },

  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  video: true,
  screenshotOnRunFailure: true,
  viewportWidth: 1280,
  viewportHeight: 800,
});
