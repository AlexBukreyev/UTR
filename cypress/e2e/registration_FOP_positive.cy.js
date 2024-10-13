const creeds = require ('../../creeds.json');
const user_data = require ('../../user_data.json');

describe('Реєстрація як ФОП', () => {
  it('positive', () => {
    cy.visit('https://order24-dev.utr.ua/')

    cy.get('strong')
      .click() 
    
    cy.get('.mat-select-placeholder')  
      .click()

    cy.get('#mat-option-0 > .mat-option-text')  
      .click()

    //Surname  
    cy.get(':nth-child(1) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')  
      .type(user_data.surname)

    //Name
    cy.get(':nth-child(1) > :nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type(user_data.name)

    //Patronymic  
    cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type(user_data.patronymic)

    //Region
    cy.get(':nth-child(2) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .click()
      
      cy.get('#mat-option-4 > .mat-option-text')
        .click()  
      

    //registration_address
    cy.get(':nth-child(2) > :nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type(user_data.registration_address)  

    //contact_person
    cy.get(':nth-child(3) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type(user_data.contact_person)  

    //delivery_address
    cy.get(':nth-child(3) > :nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type(user_data.delivery_address)  

    //phone
    cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type  (user_data.phone)

    //email
    cy.get(':nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type(user_data.email)

    //identification_code
    cy.get(':nth-child(4) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .type(user_data.identification_code)  

    cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container')
      .click()

    cy.get('.btn')
      .should('be.visible')    

    cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container')
      .click()

    cy.get('.btn')
      .should('be.visible')       
      
    cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container')
      .click()
      
    //submit
    cy.get('.btn')
      .click() 

    cy.get('.main-title')  
      .should('be.visible')

  })
})