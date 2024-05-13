class CheckoutYourInformationPage {
    submitInformation(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
    }
}
const checkoutYourInformationPage = new CheckoutYourInformationPage();
export default checkoutYourInformationPage;
