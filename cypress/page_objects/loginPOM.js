class LoginPage {
    get loginButton() {
      return cy.get("a[href='/login']");
    }
  
    get emailInput() {
      return cy.get("#email");
    }
  
    get passwordInput() {
      return cy.get("#password");
    }
  
    get submitButton() {
      return cy.get("button");
    }

    get alertMessage() {
      return cy.get(".alert");
    }
  
    login(email, password) {
      this.emailInput.type(email);
      this.passwordInput.type(password);
      this.submitButton.click();
    }
  }
  
  export const loginPage = new LoginPage();