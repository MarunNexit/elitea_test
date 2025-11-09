import { test, expect, chromium } from '@playwright/test';

test.describe('EPAM Website Test', () => {
  test('Verify Client Work Page', async ({ page }) => {
    const browser = await chromium.launch({
      headless: false,
      args: ['--start-maximized', '--window-size=1920,1080']
    });
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });

    const page = await context.newPage();

    // Step 1: Navigate to https://www.epam.com/
    await page.goto('https://www.epam.com/');

    // Step 2: Select “Services” from the header menu inside the `top-navigation__row` element
    await page.locator('.top-navigation__row >> text=Services').click();

    // Step 3: Click the “Explore Our Client Work” link
    await page.locator('text=Explore Our Client Work').click();

    // Step 4: Verify that the “Client Work” text is visible on the page
    const clientWorkText = await page.locator('text=Client Work');
    await expect(clientWorkText).toBeVisible();

    // Close the browser
    await browser.close();
  });
});