import { UserPage } from '@pages/UserPage.js';

describe('Busca de Usuário - Sucesso', () => {
  const userPage = new UserPage();

  beforeEach(() => {
    cy.visit('/user.html');
    cy.fixture('users/editUser').as('editUser');
  });

  it('Pesquisar usuário inexistente', function () {
    const nomeUsuario = this.editUser.nome;
    userPage.searchUser(nomeUsuario);
    userPage.validateUserExistence(nomeUsuario, false);
  });
});