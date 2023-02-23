/// <reference types="cypress" />

it('Google test', () =>{
    cy.visit('https://www.google.com')
    cy.get('.gLFyf').type('Automation AI{enter}') // timeout of 6 seconds cy.get('.gLFyf', {timeout: 6000})
    cy.contains('Videos').click()
})

it('Login test', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
})