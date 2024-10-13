const creeds = require ('../../creeds.json');

describe('Password reset', () => {
  it('performs a password reset', () => {
    const serverId = Cypress.env('MAILOSAUR_SERVER_ID');
    const emailAddress = creeds.login;

    // 1 - Request password reset
    cy.visit(`https://order24-dev.utr.ua/password-reset`);
    cy.get('.forget-ps-btn > .mat-focus-indicator > .mat-button-wrapper').click()
    
    cy.get('#mat-input-2').type(emailAddress)

    cy.get('.btn > .mat-button-wrapper').click();

    // 2 - Create the search criteria for the email
    const searchCriteria = {
      sentTo: emailAddress,
    };

    // 3 - Get the email from Mailosaur using the search criteria
    cy.mailosaurGetMessage(serverId, searchCriteria).then((email) => {
      expect(email.subject).to.equal('Set your new password for ACME Product');

      // 4 - Extract the link from the email
      const passwordResetLink = email.html.links[0].href;

      // 5 - Navigate to the link and reset your password
      cy.visit(passwordResetLink);
      const newPassword = 'newRandomPassword123'; // Новый пароль
      cy.get('#password').type(newPassword);
      cy.get('#confirmPassword').type(newPassword);
      cy.get('button[type="submit"]').click();
      cy.get('h1').contains('Your new password has been set!');
   });
  });
});