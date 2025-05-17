import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage/loginPage";
import * as data from "../test-data/test-data.json";


test.describe('User login scenarios', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
      });
test("Valid User Login test", async ({ page}) => {
    const login = new LoginPage(page);
    await login.validLogin(data.username, data.password);
    await expect(page).toHaveURL('/inventory.html');
});
});