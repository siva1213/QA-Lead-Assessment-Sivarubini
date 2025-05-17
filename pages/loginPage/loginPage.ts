import { Page} from "@playwright/test";
import { locators } from "../loginPage/loginPageLocators";

export default class loginPage {
    constructor(public page: Page) { }

    async validLogin(username:string, password:string) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickOnLoginBtn();
      }

      async enterUserName(username:string) {
        await this.page.locator(locators.userName).fill(username);
      }

      async enterPassword(password:string) {
        await this.page.locator(locators.password).fill(password);
      }

      async clickOnLoginBtn() {
        await this.page.locator(locators.logInbutton).click();
        await this.page.waitForLoadState("domcontentloaded");
      }
}