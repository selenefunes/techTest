class ContactUsPage {
    submitContactForm(contactDetails) {
        cy.contains('Contact us').click();
        cy.get('[data-qa="name"]').type(contactDetails.name);
        cy.get('[data-qa="email"]').type(contactDetails.email);
        cy.get('[data-qa="subject"]').type(contactDetails.subject);
        cy.get('[data-qa="message"]').type(contactDetails.message);
        cy.contains('Submit').click();
        return this;
    }
}
export default ContactUsPage;
