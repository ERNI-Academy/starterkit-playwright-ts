import { test } from 'tests/fixtures/pomFixtures';
import { globalTextContext } from '../../hooks/global_hooks'; 
import '../../hooks/global_hooks';

test('Login open source orange hrm live demo test using POM and fixture', async ({ page, landingPage, homePage, signinPage, settingsPage }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await signinPage.enterEmailId("Admin");
  await signinPage.enterPassword(process.env.PASSWORD);
  await signinPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();
  globalTextContext.reset();
  await page.close();
});