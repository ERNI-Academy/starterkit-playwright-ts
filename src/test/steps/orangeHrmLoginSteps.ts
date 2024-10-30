import { Given, When, Then } from '@cucumber/cucumber';
import { Page, expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('I am on the orange hrm login page', async function () {
    loginPage = new LoginPage(pageFixture.page);
    await loginPage.goToLoginPage();  
});

When('I login with username as {string} and password as {string}', async function (username, password) {      
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
});

When('I click on the login button', async function () {
    await loginPage.clickSignInButton()
});

Then('I land to the orange hrm home page', async function () {
    const url = await loginPage.getUrl()
    await expect(url).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});