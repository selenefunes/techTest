class CartPage {
    viewCart() {
        cy.contains('View Cart').click();
        return this;
    }

    viewCart2 () {
        cy.contains('Cart').click();
        return this; 
    }

    proceedToCheckout() {
        cy.contains('Proceed To Checkout').click();
        return this;
    }
}
export default CartPage
