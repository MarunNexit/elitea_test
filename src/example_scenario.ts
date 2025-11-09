import { test, expect } from '@playwright/test';

test.describe('EPAM Website Client Work Test', () => {
  test('Verify Client Work Page', async ({ page }) => {
    // Step 1: Navigate to EPAM website
    await page.goto('https://www.epam.com/');

    // Step 2: Select "Services" from the header menu
    const servicesMenu = page.locator('.top-navigation__row >> text=Services');
    await servicesMenu.click();

    // Step 3: Click "Explore Our Client Work" link
    const clientWorkLink = page.locator('text=Explore Our Client Work');
    await clientWorkLink.click();

    // Step 4: Verify "Client Work" text is visible on the page
    const clientWorkText = page.locator('text=Client Work');
    await expect(clientWorkText).toBeVisible();
  });
});