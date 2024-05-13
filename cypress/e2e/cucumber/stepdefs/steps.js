import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../pages/login-page";
import inventoryPage from "../../pages/inventory-page";
import checkoutYourInformationPage from "../../pages/checkout-your-information-page";
import checkoutOverviewPage from "../../pages/checkout-overview-page";
import checkoutCompletePage from "../../pages/checkout-complete-page";
import cartPage from "../../pages/cart-page";

Given("I am logged as a {string}", (user) => {
  loginPage.login(user, "secret_sauce");
});

When("I add the following items to my cart", (datatable) => {
  datatable.hashes().forEach(({ item }) => {
    inventoryPage.addToCart(item);
  });
});

Then("there should be {int} items in my cart", (expectedCount) => {
  inventoryPage.clickCart();
  cartPage.assertCountEq(expectedCount);
});

When("I proceed to checkout", () => {
  cartPage.checkout();
});

When("I provide my contact information", () => {
  checkoutYourInformationPage.submitInformation("John", "Doe", "N1 4RT");
});

When("I proceed to finish my order", () => {
  checkoutOverviewPage.finish();
});

Then("I should complete my order sucessfully", () => {
  checkoutCompletePage.assertOrderCompleted();
});
