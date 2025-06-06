import { TicketPage } from '@pages/ticketPage.js';

describe('Validação de Filtro - Status Open', () => {
  const ticketPage = new TicketPage();

  beforeEach(() => {
    cy.visit('/ticket.html'); // ajuste se necessário
  });

  it('Deve filtrar os tickets pelo status Open com sucesso', () => {
    // Clicar no dropdown e selecionar Open
    ticketPage.selectStatusFilter('Closed');

    ticketPage.validateAllCardsHaveStatus('Closed');

  });
});
