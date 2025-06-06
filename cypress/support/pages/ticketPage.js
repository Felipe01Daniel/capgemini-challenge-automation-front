export class TicketPage {
    elements = {
    nameInput: () => cy.get('[for="name"]'),
    emailInput: () => cy.get('[for="email"]'),
    pswInput: () => cy.get('[for="psw"]'),
    modalButton: () => cy.get('button')
  }

  selectStatusFilter(status) {
    cy.get('div.filterContainer select').select(status);
  }

  validateAllCardsHaveStatus(expectedStatus) {
    cy.get('.card').then(cards => {
      if (cards.length === 0) {
        cy.log('⚠️ Nenhum card encontrado na página para validar status.');
        return;
      }

      let allMatch = true;

      cards.each((index, card) => {
        const status = Cypress.$(card).find('div.lower').text().trim();
        if (status !== expectedStatus) {
          allMatch = false;
          throw new Error(`❌ BUG: Card #${index + 1} tem status "${status}" diferente do esperado "${expectedStatus}".`);
        }
      });

      if (allMatch) {
        cy.log(`✔️ Todos os ${cards.length} cards possuem status "${expectedStatus}".`);
      }
    });
  }



}