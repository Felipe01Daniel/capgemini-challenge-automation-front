import { UserPage } from '../../../support/pages/userPage';

describe('Exclusão de Usuário - Sucesso', () => {
  const userPage = new UserPage();

  beforeEach(() => {
    cy.visit('/user.html');
    cy.fixture('users/editUser').as('editUser');
  });

  it('Deve falhar ao tentar deletar um usuário', function () {
    const nomeUsuario = this.editUser.nome;

    userPage.searchUser(nomeUsuario);
    userPage.validateUserExistence(nomeUsuario, true);
    userPage.deleteUser(nomeUsuario);
    userPage.searchUser(nomeUsuario);
    userPage.validateUserExistence(nomeUsuario, true);
  });
});