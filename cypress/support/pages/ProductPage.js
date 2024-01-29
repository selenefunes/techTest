class ProductPage {
    addProductToCart(quantity) {
        cy.get('#quantity').clear().type(quantity);
        cy.contains('Add to cart').click();
        return this;
    }
    
    // Other methods related to the Product Page
}
export default ProductPage;
