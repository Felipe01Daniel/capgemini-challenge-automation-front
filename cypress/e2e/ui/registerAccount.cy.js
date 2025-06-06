describe('Registro - Sucesso', () => {
  beforeEach(() => {
    cy.visit('/signUp.html');  // ajuste para a url real do seu registro
  });

  it('Deve registrar um novo usuário com sucesso', () => {
    // Preencher o campo nome (input com id="name")
    cy.get('[for="name"]').type('Fulano de Talfd');

    // Preencher o campo email (input com id="email")
    cy.get('[for="email"]').type('fulano@exampflde.com');

    // Preencher o campo senha (input com id="psw")
    cy.get('[for="psw"]').type('senhaSegura123');

    // Clicar no botão para enviar o formulário
    cy.get('button').click();

    // Validar que após o registro, o usuário foi redirecionado ou aparece mensagem de sucesso
    cy.url().should('not.include', '/user.html'); // exemplo: url mudou

    // Ou validar que existe um botão Logout, indicando que está logado
    cy.get('button').contains('Logout').should('exist');
  });
});