import { TicketPage } from '@pages/TicketPage.js';
describe('Exclusão de Ticket - Sucesso', () => {
  const ticketPage = new TicketPage();

  beforeEach(() => {
    cy.visit('/ticket.html');
  });

  it('Deve deletar um tick com sucesso', function () {
    ticketPage.selectStatusFilter('Closed');
  });
});