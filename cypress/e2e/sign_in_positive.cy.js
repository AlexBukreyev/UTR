const creeds = require ('../../creeds.json');
const user_data = require ('../../user_data.json');

describe('Реєстрація як ФОП', () => {
  it('positive', () => {
    cy.visit('https://order24-dev.utr.ua/')

    cy.get('.mat-form-field.ng-tns-c69-0 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type(creeds.login)

    cy.get('.mat-form-field.ng-tns-c69-1 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type(creeds.password)

    cy.get('.button-left > .mat-focus-indicator') 
      .click() 

    cy.get('.hamburger')  
      .should('be.visible')  
  })
})