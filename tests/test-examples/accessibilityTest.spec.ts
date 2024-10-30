import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; 

// Scanning an entire page:  how to test an entire page for automatically detectable accessibility violations.
test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://your-site.com/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]); 
  });
});

// Configuring axe to scan a specific part of a page
test('navigation menu should not have automatically detectable accessibility violations', async ({
    page,
  }) => {
    await page.goto('https://your-site.com/');
  
    await page.getByRole('button', { name: 'Navigation Menu' }).click();
  
    // It is important to waitFor() the page to be in the desired
    // state *before* running analyze(). Otherwise, axe might not
    // find all the elements your test expects it to scan.
    await page.locator('#navigation-menu-flyout').waitFor();
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include('#navigation-menu-flyout')
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });

//   Scanning for WCAG violations
  test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    await page.goto('https://your-site.com/');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });

//   Excluding individual elements from a scan
  test('should not have any accessibility violations outside of elements with known issues', async ({
    page,
  }) => {
    await page.goto('https://your-site.com/page-with-known-issues');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .exclude('#element-with-known-issue')
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });

//   Disabling individual scan rules
  test('should not have any accessibility violations outside of rules with known issues', async ({
    page,
  }) => {
    await page.goto('https://your-site.com/page-with-known-issues');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['duplicate-id'])
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });

//   Exporting scan results as a test attachment
  test('example with attachment', async ({ page }, testInfo) => {
    await page.goto('https://your-site.com/');
  
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  
    await testInfo.attach('accessibility-scan-results', {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: 'application/json'
    });
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });