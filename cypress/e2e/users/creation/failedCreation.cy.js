import { UserPage } from '../../../support/pages/userPage';

describe('Criação de Usuário - Falha', () => {
  const userPage = new UserPage();

  beforeEach(() => {
    cy.visit('/user.html');
    cy.fixture('users/invalidUser').as('invalidUser');
  });

  it('Deve falhar ao tentar criar um novo usuário', function () {
    const { nome, email } = this.invalidUser;
    userPage.createUser(nome, email);
  });
});