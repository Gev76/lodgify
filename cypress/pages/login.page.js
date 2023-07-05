import assertions from "../fixtures/assertions.json"

class LoginPage {
    constructor() {
        this.loginTitle = 'h1';
        this.googleButton = '[data-gtm-id="google-provider-link"]';
        this.facebookButton = '[data-gtm-id="facebook-provider-link"]';
        this.appleButton = '[data-gtm-id="apple-provider-link"]';
        this.emailField = 'input[id="element-0"]';
        this.passwordField = 'input[id="element-3"]';
        this.loginButton = '[data-gtm-id="start-email-login"]'; 
    }

    verifyPageIsLoaded = () => {
        cy.contains(this.loginTitle, assertions.loginTitleText).should('be.visible');
        cy.get(this.googleButton).should('be.visible');
        cy.get(this.facebookButton).should('be.visible');
        cy.get(this.appleButton).should('be.visible');
        cy.get(this.emailField).should('be.visible');
        cy.get(this.passwordField).should('be.visible');
        cy.get(this.loginButton).should('be.visible');
    }
  
    fillLoginPassword = (email, password) => {
        cy.get(this.emailField).type(email);
        cy.get(this.passwordField).type(password);
    }

    clickLoginButton = () => {
        cy.get(this.loginButton).click();
        cy.get(this.loginButton).should('not.exist');

    }
  }
  
  export default LoginPage;