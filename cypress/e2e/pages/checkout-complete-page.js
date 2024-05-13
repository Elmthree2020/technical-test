class CheckoutCompletePage {
  assertOrderCompleted() {
    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("contain.text", "Thank you for your order!");
  }
}
const checkoutCompletePage = new CheckoutCompletePage();
export default checkoutCompletePage;
