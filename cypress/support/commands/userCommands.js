import { UserPage } from '../pages/userPage';

Cypress.Commands.add('deleteUserByName', (name) => {
  const userPage = new UserPage();
  userPage.searchUser(name);
  userPage.validateUserExistence(name, true);
  userPage.deleteUser(name);
  userPage.searchUser(name);
  userPage.validateUserExistence(name, false);
});

Cypress.Commands.add('createUser', (name, email) => {
  const userPage = new UserPage();
  userPage.elements.addButton().click();
  userPage.elements.nameInput().type(name);
  userPage.elements.emailInput().type(email);
  userPage.elements.modalButton().click();
});

Cypress.Commands.add('editUserByName', (oldName, newName, newEmail) => {
  const userPage = new UserPage();
  userPage.searchUser(oldName);
  userPage.validateUserExistence(oldName, true);
  userPage.editUser(oldName, newName, newEmail);
  userPage.searchUser(newName);
  userPage.validateUserExistence(newName, true);
  userPage.validateUserExistence(oldName, false); // Verifica que o antigo não existe mais
});
