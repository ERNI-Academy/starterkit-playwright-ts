import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/orangehrmlive/HomePage';
import {LandingPage} from '../pages/orangehrmlive/LandingPage';
import {SignInPage} from '../pages/orangehrmlive/SigninPage';
import {SettingsPage} from '../pages/orangehrmlive/SettingsPage';

test('Login Conduit test using POM', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);
  const settingsPage = new SettingsPage(page);

  await landingPage.navigateTo('https://opensource-demo.orangehrmlive.com/')
  await signInPage.enterEmailId("Admin");
  await signInPage.enterPassword(process.env.PASSWORD);
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();
  await page.close();
});