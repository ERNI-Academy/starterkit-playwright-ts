import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SignInPage extends BasePage {
    readonly page: Page;
    private readonly emailIdTextBox: Locator;
    private readonly passwordTextBox: Locator;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.emailIdTextBox = page.getByPlaceholder("Username");
        this.passwordTextBox = page.getByPlaceholder("Password")
        this.signInButton = page.locator('button[type="submit"]');
    }

    async enterEmailId(emailId: string) {
        await this.fillFormField(this.emailIdTextBox, emailId);
    }

    async enterPassword(password: string) {
        await this.fillFormField(this.passwordTextBox, password);
    }

    async clickSignInButton() {
        await this.clickElement(this.signInButton);
    }
}