import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SettingsPage extends BasePage{
    readonly page:Page;
    private readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.logoutButton = page.getByRole("menuitem", { name: /logout/i });
    }

    async clickLogoutButton() {
        await this.clickElement(this.logoutButton);
    }
}