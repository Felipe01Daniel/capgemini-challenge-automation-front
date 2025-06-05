import { UserPage } from '../../../support/pages/userPage';

describe('Busca de Usuário - Sucesso', () => {
  const userPage = new UserPage();

  beforeEach(() => {
    cy.visit('/user.html');
    cy.fixture('users/validUser').as('validUser');
  });

  it('Deve pesquisar e validar um usuário específico', function () {
    const nomeUsuario = this.validUser.nome;
    userPage.searchUser(nomeUsuario);
    userPage.validateUserExistence(nomeUsuario, true);
  });
});