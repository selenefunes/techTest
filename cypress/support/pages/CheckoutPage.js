class CheckoutPage {
    proceedToCheckout() {
        cy.contains('Proceed To Checkout').click();
        return this;
    }

    fillInCheckoutDetails(message) {
        cy.get('textarea.form-control[name="message"]').type(message);
        return this;
    }

    placeOrder() {
        cy.contains('Place Order').click();
        return this;
    }

    completePayment(details) {
        cy.get('[data-qa="name-on-card"]').type(details.nameOnCard);
        cy.get('[data-qa="card-number"]').type(details.cardNumber);
        cy.get('[data-qa="cvc"]').type(details.cvc);
        cy.get('[data-qa="expiry-month"]').type(details.expiryMonth);
        cy.get('[data-qa="expiry-year"]').type(details.expiryYear);
        cy.contains('Pay and Confirm Order').click();
        return this;
    }
}
export default CheckoutPage;
