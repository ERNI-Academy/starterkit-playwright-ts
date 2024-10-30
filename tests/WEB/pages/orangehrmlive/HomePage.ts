import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class HomePage extends BasePage {
    private readonly settingsButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.settingsButton = page.locator('.oxd-userdropdown');
    }

    async clickSettingsButton() {
        await this.waitForElementVisible(this.settingsButton);
        await this.clickElement(this.settingsButton);
    }
}