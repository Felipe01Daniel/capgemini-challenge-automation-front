export class LoginPage {
  elements = {
    emailInput: () => cy.get('input#user'),
    passwordInput: () => cy.get('input[placeholder="Senha"]'),
    loginButton: () => cy.get('div.input-container button')
  };

  preencherEmail(email) {
    this.elements.emailInput().should('be.visible').type(email);
  }

  preencherSenha(senha) {
    this.elements.passwordInput().should('be.visible').type(senha);
  }

  cliqueSeguro(element) {
    element
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }

  clicarLogin() {
    this.cliqueSeguro(this.elements.loginButton());
  }

  login(email, senha) {
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.clicarLogin();
  }
}
