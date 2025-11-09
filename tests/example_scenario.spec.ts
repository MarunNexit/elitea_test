import { test, expect, chromium } from '@playwright/test';

test.describe('EPAM Client Work Page Test', () => {
  test('Navigate and verify Client Work page', async () => {
    // Launch browser
    const browser = await chromium.launch({
      headless: false,
      args: ['--start-maximized', '--window-size=1920,1080']
    });
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();

    try {
      // Step 1: Navigate to EPAM homepage
      await page.goto('https://www.epam.com/');

      // Step 2: Select "Services" from the header menu
      const servicesMenu = await page.locator('.top-navigation__row >> text=Services');
      await servicesMenu.click();

      // Step 3: Click "Explore Our Client Work" link
      const clientWorkLink = await page.locator('text=Explore Our Client Work');
      await clientWorkLink.click();

      // Step 4: Verify "Client Work" text is visible on the page
      const clientWorkText = await page.locator('text=Client Work');
      await expect(clientWorkText).toBeVisible();
    } finally {
      // Close browser
      await browser.close();
    }
  });
});