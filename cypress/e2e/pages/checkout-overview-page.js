class CheckoutOverviewPage {
  finish() {
    cy.get('[data-test="finish"]').click();
  }
}
const checkoutOverviewPage = new CheckoutOverviewPage();
export default checkoutOverviewPage;
