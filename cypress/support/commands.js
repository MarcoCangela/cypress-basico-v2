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

Cypress.Commands.add('fillMandatoryFieldsAndSubmit',() => {
    cy.get('input[id="firstName"]').should('be.visible').type('Marco').should('have.value', 'Marco')
    cy.get('input[id="lastName"]').should('be.visible').type('Garujo').should('have.value', 'Garujo')
    cy.get('input[id="email"]').should('be.visible').type('MarcoCangela@live.com').should('have.value', 'MarcoCangela@live.com')
    cy.get('input[id="phone"]').type('258827025827')
    cy.get('#open-text-area').type('This is a message that I am sending to you in order to test this field and send this to check it')
    cy.get('button[type=submit]').click()
})