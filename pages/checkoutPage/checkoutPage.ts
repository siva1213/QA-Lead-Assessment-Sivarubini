import { expect, Page} from "@playwright/test";
import { locators } from "../checkoutPage/checkoutPageLocators";

export default class checkoutPage {
    constructor(public page: Page) { }

    async clickCheckout() {
        await this.page.locator(locators.checkOut).click();
        await this.page.waitForLoadState("domcontentloaded");
      }

    async enterFirstName(firstname:string) {
        await this.page.locator(locators.firstName).fill(firstname);
      }

    async enterLastName(lastname:string) {
        await this.page.locator(locators.lastName).fill(lastname);
      }

    async enterPostalCode(postalcode:string) {
        await this.page.locator(locators.postalCode).fill(postalcode);
      }

    async clickOnContinueBtn() {
        await this.page.locator(locators.continue).click();
        await this.page.waitForLoadState("domcontentloaded");
      }

    async continueCheckOut(firstname:string, lastname:string, postalcode:string) {
        await this.enterFirstName(firstname);
        await this.enterLastName(lastname);
        await this.enterPostalCode(postalcode);
        await this.clickOnContinueBtn();
      }

    async verifyTotalAmount() {
        const totalAmount = this.page.locator(locators.totalAmount);
        // Get the text and assert
        const priceText = await totalAmount.textContent();
        expect(priceText).not.toBeNull();
        // Remove $ and parse
        const numericTotalPrice = parseFloat(priceText!.replace(/[^0-9.]/g, ''));
        expect(numericTotalPrice).toBeCloseTo(43.18, 2);
      }

    async clickOnFinishBtn() {
        await this.page.locator(locators.finish).click();
        await this.page.waitForLoadState("domcontentloaded");
      }

    async verifyCheckOutComplete() {
        expect(this.page.locator(locators.checkoutComplete)).toContainText("Thank you for your order!");
      }

}