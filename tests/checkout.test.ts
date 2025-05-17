import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage/loginPage";
import CartPage from "../pages/addToCartPage/addToCartPage";
import CheckOut from "../pages/checkoutPage/checkoutPage";
import * as data from "../test-data/test-data.json";
import { scrollToBottom } from '../utils/scrollUtils';


test.describe('Checkout items scenario', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
      });
    test("Checkout and Order for the items", async ({ page}) => {
    const login = new LoginPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckOut(page);
    await login.validLogin(data.username, data.password);
    await expect(page).toHaveURL('/inventory.html');
    await cart.addItemsToCart();
    await cart.verifyProductIsDisplayed();
    await checkout.clickCheckout();
    await checkout.continueCheckOut(data.firstName, data.lastName, data.postalCode);
    await scrollToBottom(page);
    await checkout.verifyTotalAmount();
    await checkout.clickOnFinishBtn();
    await checkout.verifyCheckOutComplete();
});
});