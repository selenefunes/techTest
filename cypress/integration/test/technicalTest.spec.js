import HomePage from '../../support/pages/HomePage';
import ProductPage from '../../support/pages/ProductPage';
import CartPage from '../../support/pages/CartPage';
import CheckoutPage from '../../support/pages/CheckoutPage';
import RegistrationPage from '../../support/pages/RegistrationPage';
import ContactUsPage from '../../support/pages/ContactUsPage';
import { userData } from '../../support/data/userData';

describe('technical-test', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const registrationPage = new RegistrationPage();
    const contactUsPage = new ContactUsPage();

    it('challenge', () => {
        homePage.visit();
        homePage.selectProduct('Pure Cotton V-Neck T-Shirt');
        
        productPage.addProductToCart('30');
        cartPage.viewCart()
                .proceedToCheckout();
        
        checkoutPage.proceedToCheckout();
        registrationPage.register(userData);

        cartPage.viewCart2()
                .proceedToCheckout();

        checkoutPage.fillInCheckoutDetails('Put a bow, it\'s a gift')
                   .placeOrder()
                   .completePayment({
                       nameOnCard: 'Selene',
                       cardNumber: '123456789',
                       cvc: '123',
                       expiryMonth: '12',
                       expiryYear: '2030'
                   });

      

        cy.contains('Logout').click();

        cy.contains('Signup / Login').click();
        cy.get('[data-qa="login-email"]').type(userData.email);
        cy.get('[data-qa="login-password"]').type(userData.password);
        cy.get('[data-qa="login-button"]').click();

        contactUsPage.submitContactForm({
            name: 'Selene',
            email: userData.email,
            subject: 'Hello',
            message: 'test'
        });

        cy.contains('Delete Account').click();

    });
});
