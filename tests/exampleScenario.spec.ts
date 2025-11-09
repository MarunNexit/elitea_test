import { test, expect, chromium } from '@playwright/test';

test.describe('EPAM Website Navigation Test', () => {
  test('Navigate to Services and Verify Client Work', async () => {
    // Step 1: Launch browser and open a new context
    const browser = await chromium.launch({
      headless: false,
      args: ['--start-maximized', '--window-size=1920,1080']
    });
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });

    // Step 2: Open a new page and navigate to EPAM website
    const page = await context.newPage();
    await page.goto('https://www.epam.com/');

    // Step 3: Click on "Services" from the header menu
    await page.locator('.top-navigation__row >> text=Services').click();

    // Step 4: Click on "Explore Our Client Work" link
    await page.locator('text=Explore Our Client Work').click();

    // Step 5: Verify that "Client Work" text is visible on the page
    const clientWorkText = await page.locator('text=Client Work');
    await expect(clientWorkText).toBeVisible();

    // Close the browser
    await browser.close();
  });
});