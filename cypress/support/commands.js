// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from "../pages/login.page";

const loginPage = new LoginPage();

Cypress.Commands.add('login', (email = Cypress.env('email'), password = Cypress.env('password')) => {
    loginPage.fillLoginPassword(email, password);
    loginPage.clickLoginButton();
});

Cypress.Commands.add('navigateToLoginPage', () => {
    cy.visit('https://todoist.com/auth/login');
    cy.url().should('include', 'https://todoist.com/auth/login');
})