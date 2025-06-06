describe('Login - Sucesso', () => {
  beforeEach(() => {
    cy.visit('/login.html');
  });

  it('Deve realizar login com email e senha válidos', () => {
    cy.get('input#user').type('fdaniels@gmail.com');          
    cy.get('input[placeholder="Senha"]').type('senha123'); 
    cy.get('button').click();                          
          
    cy.get('body header button').contains('Logout').should('exist');
  });
});