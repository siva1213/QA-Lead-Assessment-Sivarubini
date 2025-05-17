import { expect, Page} from "@playwright/test";
import { locators } from "../addToCartPage/addToCartPageLocators";

export default class addToCartPage {
    constructor(public page: Page) { }

    async addItemsToCart() {
        await this.page.locator(locators.item1).click();
        await this.page.locator(locators.item2).click();
        await this.page.locator(locators.shoppingCartLink).click();
        await this.page.waitForLoadState("domcontentloaded");
      }

    async verifyProductIsDisplayed(){
        expect(this.page.locator(locators.itemName).nth(0)).toHaveText("Sauce Labs Backpack");
        expect(this.page.locator(locators.itemName).nth(1)).toHaveText("Sauce Labs Bike Light");
    }
}