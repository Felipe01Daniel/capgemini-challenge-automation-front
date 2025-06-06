import { faker } from '@faker-js/faker';

describe('Registro - Sucesso', () => {
  let nome, email, senha;

  beforeEach(() => {
    nome = faker.person.fullName();
    email = faker.internet.email();
    senha = faker.internet.password({ length: 12 });

    cy.visit('/signUp.html');
  });

  it('Deve registrar um novo usuário com sucesso', () => {
    cy.get('[for="name"]').type(nome);
    cy.get('[for="email"]').type(email);
    cy.get('[for="psw"]').type(senha);

    cy.get('button').click();

    cy.url().should('not.include', '/user.html');
    cy.get('button').contains('Logout').should('exist');
  });
});
