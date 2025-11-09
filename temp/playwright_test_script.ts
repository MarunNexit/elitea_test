import { test, expect, chromium } from '@playwright/test';

test.describe('EPAM Website Test', () => {
  test('Navigate to Services and verify Client Work text', async ({ page }) => {
    // Launch browser
    const browser = await chromium.launch({
      headless: false,
      args: ['--start-maximized', '--window-size=1920,1080']
    });
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    const newPage = await context.newPage();

    try {
      // Step 1: Navigate to EPAM website
      await newPage.goto('https://www.epam.com/');

      // Step 2: Select "Services" from the header menu
      const servicesMenu = await newPage.locator('.top-navigation__row >> text=Services');
      await servicesMenu.click();

      // Step 3: Click "Explore Our Client Work" link
      const clientWorkLink = await newPage.locator('text=Explore Our Client Work');
      await clientWorkLink.click();

      // Step 4: Verify "Client Work" text is visible
      const clientWorkText = await newPage.locator('text=Client Work');
      await expect(clientWorkText).toBeVisible();
    } finally {
      // Close browser
      await browser.close();
    }
  });
});