import { test, expect } from '@playwright/test';

test.describe('EPAM Website Test', () => {
  test('Verify Client Work Text Visibility', async ({ page }) => {
    // Step 1: Navigate to EPAM website
    await page.goto('https://www.epam.com/');

    // Step 2: Select "Services" from the header menu
    const servicesMenu = page.locator('.top-navigation__row >> text=Services');
    await servicesMenu.click();

    // Step 3: Click "Explore Our Client Work" link
    const exploreClientWorkLink = page.locator('text=Explore Our Client Work');
    await exploreClientWorkLink.click();

    // Step 4: Verify "Client Work" text is visible
    const clientWorkText = page.locator('text=Client Work');
    await expect(clientWorkText).toBeVisible();
  });
});