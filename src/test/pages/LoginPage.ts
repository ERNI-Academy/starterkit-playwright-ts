import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export class LoginPage extends BasePage {
    readonly page: Page;
    private readonly signInButton: Locator;
    private readonly usernameTextBox: Locator;
    private readonly passwordTextBox: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.signInButton = page.locator('button[type="submit"]');
        this.usernameTextBox = page.locator('input[placeholder="Username"]');
        this.passwordTextBox = page.locator('input[placeholder="Password"]');
    }

    async goToLoginPage() {
        await this.navigateTo('https://opensource-demo.orangehrmlive.com/');
    }

    async enterUsername(emailId: string) {
        await this.fillFormField(this.usernameTextBox, emailId);
    }

    async enterPassword(password: string) {
        await this.fillFormField(this.passwordTextBox, password);
    }

    async clickSignInButton() {
        await this.clickElement(this.signInButton);
    }
}