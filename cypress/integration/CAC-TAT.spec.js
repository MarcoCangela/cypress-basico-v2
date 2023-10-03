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
    it('Verify page title', ()=>{
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Insert data into fields', ()=>{
        const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed viverra. Vitae aliquet nec ullamcorper sit amet risus nullam. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Gravida in fermentum et sollicitudin ac orci. Dolor morbi non arcu risus quis. Dui ut ornare lectus sit. Imperdiet proin fermentum leo vel. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Urna nunc id cursus metus aliquam. Amet nisl purus in mollis nunc sed id. Nisl tincidunt eget nullam non nisi est sit amet. Non curabitur gravida arcu ac tortor dignissim. Pulvinar mattis nunc sed blandit.        Ac orci phasellus egestas tellus rutrum tellus pellentesque. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Sit amet nulla facilisi morbi tempus iaculis urna id. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Ultrices vitae auctor eu augue ut. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Orci a scelerisque purus semper eget duis at. At urna condimentum mattis pellentesque id nibh tortor id. Orci nulla pellentesque dignissim enim. Nibh mauris cursus mattis molestie a. Pulvinar sapien et ligula ullamcorper malesuada proin. Proin fermentum leo vel orci porta non pulvinar. Mi ipsum faucibus vitae aliquet nec. Nam libero justo laoreet sit amet. Tortor pretium viverra suspendisse potenti. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus."
        cy.get('input[id="firstName"]').should('be.visible').type('Marco').should('have.value', 'Marco')
        cy.get('input[id="lastName"]').should('be.visible').type('Garujo').should('have.value', 'Garujo')
        cy.get('input[id="email"]').should('be.visible').type('MarcoCangela@live.com').should('have.value', 'MarcoCangela@live.com')
        cy.get('#open-text-area').type(longText,{delay:0})
        cy.get('button[type=submit]').click()
        cy.get('.success').should('be.visible')
    })

   it('Check email if wrong',()=> {
    cy.get('input[id="firstName"]').should('be.visible').type('Marco').should('have.value', 'Marco')
    cy.get('input[id="lastName"]').should('be.visible').type('Garujo').should('have.value', 'Garujo')
    cy.get('input[id="email"]').type('MarcoCangela.live.com')
    cy.get('#open-text-area').type('testing')
    cy.get('button[type=submit]').click()
    cy.get('.error').should('be.visible')

   })

   it('Validating numerical value on phone field',() => {
    cy.get('#phone').type('marco').should('have.value','')
   })

   it('Check if when phone is required error is displayed', () => {
    cy.get('input[id="firstName"]').should('be.visible').type('Marco').should('have.value', 'Marco')
    cy.get('input[id="lastName"]').should('be.visible').type('Garujo').should('have.value', 'Garujo')
    cy.get('input[id="email"]').type('MarcoCangela@live.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('testing')
    cy.get('button[type=submit]').click()
    
    cy.get('.error').should('be.visible')

   })

   it('Check if the fields are being cleared', () => {
    cy.get('input[id="firstName"]').should('be.visible').type('Marco').should('have.value', 'Marco').clear().should('have.value', '')
    cy.get('input[id="lastName"]').should('be.visible').type('Garujo').should('have.value', 'Garujo').clear().should('have.value', '')
    cy.get('input[id="email"]').type('MarcoCangela@live.com').clear().should('have.value', '')
    cy.get('input[id="phone"]').type('827025827').clear().should('have.value', '')
   })

   it('Check if the submission works if form is empty', ()=> {
    // first argument checks the element type and the second the value attached to it, helping validate even without knowing the element type or more info, uses a different selector to element
    cy.contains('button','Enviar').click()

    cy.get('.error').should('be.visible')

   })

   it('Customized Commands to fill form', () => {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
   })

   it('Using element selector for select element with the written text', () => {
    cy.get('#product').select('YouTube').should('have.value','youtube')
   })

   it('Using element selector for select element with the value', () => {
    cy.get('#product').select('mentoria').should('have.value','mentoria')
   })

   it('Using element selector for select element with the value', () => {
    cy.get('#product').select(2).should('have.value','cursos')
   })

   it('Validating the radio buttons on the webpage, selectin the feedback', () => {
    cy.get('input[type="radio"][value="feedback"]').check().should('have.value','feedback')
   })

   it('Validate each type of feedback', () =>  {
    cy.get('input[type="radio"]').should('have.length', 3).
    each( ($radio) => {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
    })
   })

   it('Check all checkboxes and unchecks the last', () => {
    cy.get('input[type="checkbox"]').check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
    })
    
    it('Uploading files via Cypress', () => {
        cy.get('input[type="file"]').
        should('not.have.value').
        selectFile('cypress/fixtures/example.json').
        should( ($input) => {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('Emulating drag and drop when selecting a file', () => {
        cy.get('input[type="file"]').
        should('not.have.value').
        selectFile('cypress/fixtures/example.json', {action: 'drag-drop'}).
        should( ($input) => {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })
    
    it('Selecting a file and using a feature given the feature', () => {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]').
        selectFile('@sampleFile').
        should( ($input) => {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('Validating privacy policy on new tab', () => {
        cy.get('#privacy a').
        should('have.attr', 'target', '_blank') 
    })

    it('Access privacy policy and remove the target to a new pagr then clicking on link', () => {
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
        cy.contains('Talking About Testing').should('be.visible')
    })
   
})
