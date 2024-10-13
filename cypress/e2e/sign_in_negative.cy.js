const creeds = require ('../../creeds.json');
const user_data = require ('../../user_data.json');

describe('Реєстрація як ФОП', () => {
  it('positive', () => {
    cy.visit('https://order24-dev.utr.ua/')

    // Check incorrect email
    for (let i = 0; i < creeds.incorrect_login.length; i++ ) {

      cy.get('.mat-form-field.ng-tns-c69-0 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        .type(creeds.incorrect_login[i])

      cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        .type(creeds.password)

      cy.get('.button-left > .mat-focus-indicator') 
        .click() 

      cy.get('.server-error')  
        .should('have.text', ' Некоректні дані користувача. Перевірте коректність введених даних і спробуйте ще раз. ')

      cy.get('#mat-input-0')
        .clear()

      cy.get('#mat-input-1')
        .clear()

    }

    // Check incorrect password
    for (let i = 0; i < creeds.incorrect_password.length; i++ ) {

      cy.get('.mat-form-field.ng-tns-c69-0 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        .type(creeds.login)

      cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        .type(creeds.incorrect_password[i])

      cy.get('.button-left > .mat-focus-indicator') 
        .click() 

      cy.get('.server-error')  
        .should('have.text', ' Некоректні дані користувача. Перевірте коректність введених даних і спробуйте ще раз. ')

      cy.get('#mat-input-0')
        .clear()

      cy.get('#mat-input-1')
        .clear()

    }

  })
})