import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage/loginPage";
import CartPage from "../pages/addToCartPage/addToCartPage";
import * as data from "../test-data/test-data.json";


test.describe('Add items to cart', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
      });
    test("Add first 2 items to cart test", async ({ page}) => {
    const login = new LoginPage(page);
    const cart = new CartPage(page);
    await login.validLogin(data.username, data.password);
    await expect(page).toHaveURL('/inventory.html');
    await cart.addItemsToCart();
    await cart.verifyProductIsDisplayed();
});
});