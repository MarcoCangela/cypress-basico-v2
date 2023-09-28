// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT - Casos de Testes e execucoes', function() {
    beforeEach(()=> {
            cy.visit('./src/index.html')
    })
    it('Verify page title', function(){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Insert data into fields', function(){
        cy.get('input[id="firstName"]').should('be.visible').type('Marco').should('have.value', 'Marco')
        cy.get('input[id="lastName"]').should('be.visible').type('Garujo').should('have.value', 'Garujo')
        cy.get('input[id="email"]').should('be.visible').type('MarcoCangela@live.com').should('have.value', 'MarcoCangela@live.com')
        cy.get('#open-text-area').type('Tenho uma grave reclamacao para a sua loja ohh DR Maluco').should('have.value', 'Tenho uma grave reclamacao para a sua loja ohh DR Maluco')
        cy.get('button[type=submit]').click()
        cy.get('.success').should('be.visible')
    })
})
