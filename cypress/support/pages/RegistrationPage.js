class RegistrationPage {
    register(details) {
        cy.get('[data-qa="signup-name"]').type(details.name);
        cy.get('[data-qa="signup-email"]').type(details.email);
        cy.get('[data-qa="signup-button"]').click();

        cy.contains('Mrs.').click();
        cy.get('[data-qa="password"]').type(details.password);
        cy.get('[data-qa="days"]').select(details.dayOfBirth);
        cy.get('[data-qa="months"]').select(details.monthOfBirth);
        cy.get('[data-qa="years"]').select(details.yearOfBirth);
        cy.get('[data-qa="first_name"]').type(details.name);
        cy.get('[data-qa="last_name"]').type(details.lastName);
        cy.get('[data-qa="company"]').type(details.company);
        cy.get('[data-qa="address"]').type(details.address);
        cy.get('[data-qa="address2"]').type(details.address2);
        cy.get('[data-qa="country"]').select(details.country);
        cy.get('[data-qa="state"]').type(details.state);
        cy.get('[data-qa="city"]').type(details.city);
        cy.get('[data-qa="zipcode"]').type(details.zipcode);
        cy.get('[data-qa="mobile_number"]').type(details.mobileNumber);
        cy.contains('Create Account').click();

        cy.contains('Continue').click();
        return this;
    }
}
export default RegistrationPage;
