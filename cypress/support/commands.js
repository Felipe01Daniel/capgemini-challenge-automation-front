// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('createUser', (name, email) => {
  cy.visit('/user.html');
  cy.get('#name').type(name);
  cy.get('#email').type(email);
  cy.contains('Salvar').click();
});

Cypress.Commands.add('deleteUser', (email) => {
  cy.visit('/user.html');
  cy.get('tr').contains(email).parent().contains('Excluir').click();
});

Cypress.Commands.add('createTicket', (title, description) => {
  cy.visit('/tickets');
  cy.get('#title').type(title);
  cy.get('#description').type(description);
  cy.contains('Salvar').click();
});

Cypress.Commands.add('deleteTicket', (title) => {
  cy.visit('/tickets');
  cy.get('tr').contains(title).parent().contains('Excluir').click();
});