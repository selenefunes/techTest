class HomePage {
    visit() {
        cy.visit(Cypress.env('BASE_URL'));
        cy.scrollTo('center');
    }

    selectProduct(productName) {
        cy.contains('.single-products', productName).parent().contains('View Product').click();
        return this;
    }
    
}
export default HomePage;