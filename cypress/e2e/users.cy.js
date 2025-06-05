class UserCreate {
  elements = {
    searchInput: () => cy.get('div.filterContainer input[type="search"]'),
    addButton: () => cy.get('button#addButton'),
    nameInput: () => cy.get('input#name'),
    emailInput: () => cy.get('input#email'),
    modalButton: () => cy.get('button#modal-button'),
    userCard: () => cy.get('.card'),
    userName: () => cy.get('.card .upper'),
    userEmail: () => cy.get('.card .lower')
  }


  searchUser(name) {
    this.elements.searchInput()
      .clear()
      .invoke('val', name.toLowerCase())
      .trigger('input')
      .type('{enter}');
  }

  validateUserExists(name) {
    this.elements.userCard()
      .filter((index, el) => {
        const nomeNoCard = Cypress.$(el).find('.upper').text().trim().toLowerCase();
        return nomeNoCard === name.toLowerCase();
      })
      .should('have.length', 1);
  }

    deleteUser(name) {
    this.elements.userCard()
        .filter((index, el) => {
        const nomeNoCard = Cypress.$(el).find('.upper').text().trim().toLowerCase();
        return nomeNoCard === name.toLowerCase();
        })
        .find('[alt="delete button"]')
        .click();
    }

    editUser(oldName, newName, newEmail) {
    this.elements.userCard()
        .filter((index, el) => {
        const nomeNoCard = Cypress.$(el).find('.upper').text().trim().toLowerCase();
        return nomeNoCard === oldName.toLowerCase();
        })
        .find('[alt="edit button"]')
        .click();

    cy.get('[name="name"]').clear().type(newName);
    cy.get('input[type="email"]').clear().type(newEmail);
    cy.get('button#modal-button').click();
    }
}

describe('Testes de Usuários', () => {
  const userCreate = new UserCreate();
  const nomeUsuario = 'usuariosdsa';
  const emailUsuario = 'usuario@fdfdsd.com';
  const nomeNovo = 'fe';
  const emailNovo = 'editado@fe.com';

  beforeEach(() => {
    cy.visit('/user.html');
  });

    it('Deve criar um novo usuário com sucesso', () => {
        // Clicar no botão de adicionar usuário
        userCreate.elements.addButton().click();

        // Preencher os campos
        userCreate.elements.nameInput().type(nomeUsuario);
        userCreate.elements.emailInput().type(emailUsuario);

        // Clicar no botão criar
        userCreate.elements.modalButton()
        .should('be.visible')
        .click();

        // Validar o card do usuário
        userCreate.elements.userCard()
        .filter((index, el) => {
            const cardText = Cypress.$(el).find('.upper').text().trim();
            return cardText.toLowerCase() === nomeUsuario.toLowerCase();
        })
        .should('have.length', 1)
    });

    it('Deve pesquisar e validar um usuário específico', () => {
        userCreate.searchUser(nomeUsuario);
        userCreate.validateUserExists(nomeUsuario);
    });

    it('Deve editar um usuário com sucesso', () => {
    const nomeAntigo = nomeUsuario

    // Buscar e validar que o usuário existe
    userCreate.searchUser(nomeAntigo);
    userCreate.validateUserExists(nomeAntigo);

    // Localizar o card correto e clicar no botão de editar
    userCreate.elements.userCard()
        .filter((index, el) => {
        const nomeNoCard = Cypress.$(el).find('.upper').text().trim().toLowerCase();
        return nomeNoCard === nomeAntigo.toLowerCase();
        })
        .should('have.length', 1) // garante que encontrou
        .first()
        .within(() => {
        cy.get('[alt="edit button"]').click();
        });

    // Preencher os novos dados usando os elementos já mapeados na classe
    userCreate.elements.nameInput().clear().type(nomeNovo);
    userCreate.elements.emailInput().clear().type(emailNovo);

    // Clicar no botão atualizar
    userCreate.elements.modalButton().click();

    // Validar que o nome antigo não existe mais
    userCreate.searchUser(nomeNovo);
    userCreate.elements.userCard()
        .filter((index, el) => {
        const nomeNoCard = Cypress.$(el).find('.upper').text().trim().toLowerCase();
        return nomeNoCard === nomeNovo.toLowerCase();
        })
        .should('have.length', 1);

    // Validar que o nome novo foi atualizado
    userCreate.searchUser(nomeNovo);
    userCreate.validateUserExists(nomeNovo);
    });

    it('Deve deletar um usuário com sucesso', () => {
    userCreate.searchUser(nomeUsuario);
    userCreate.validateUserExists(nomeUsuario);
    userCreate.deleteUser(nomeUsuario);

    // Validar que não existe mais
    userCreate.elements.userCard()
        .filter((index, el) => {
        const nomeNoCard = Cypress.$(el).find('.upper').text().trim().toLowerCase();
        return nomeNoCard === nomeUsuario.toLowerCase();
        })
        .should('have.length', 0);
    });

});