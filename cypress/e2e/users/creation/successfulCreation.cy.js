import { UserPage } from '../../../support/pages/userPage';

describe('Criação de Usuário - Sucesso', () => {
  const userPage = new UserPage();

  beforeEach(() => {
    cy.visit('/user.html');
    cy.fixture('users/validUser').as('validUser');
  });

  it('Deve criar um novo usuário com sucesso', function () {
    const { nome, email } = this.validUser;

    userPage.createUser(nome, email);
    userPage.searchUser(nome);
    userPage.validateUserExistence(nome, true);
  });
  
});