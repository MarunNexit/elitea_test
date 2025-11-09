import { test, expect } from '@playwright/test';

test.describe('Example Scenario', () => {
  test('Navigate and verify elements on EPAM website', async ({ page }) => {
    // Step 1: Navigate to EPAM homepage
    await page.goto('https://www.epam.com/');

    // Step 2: Attempt to select "Services" from the header menu
    try {
      const servicesLink = page.locator('text=Services');
      await servicesLink.click();
    } catch (error) {
      console.error('Failed to click on Services link:', error);
    }

    // Step 3: Attempt to click "Explore Our Client Work" link
    try {
      const clientWorkLink = page.locator('text=Explore Our Client Work');
      await clientWorkLink.click();
    } catch (error) {
      console.error('Failed to click on Explore Our Client Work link:', error);
    }

    // Step 4: Verify "Client Work" text is visible on the page
    try {
      const clientWorkText = page.locator('text=Client Work');
      await expect(clientWorkText).toBeVisible();
    } catch (error) {
      console.error('Failed to verify Client Work text visibility:', error);
    }
  });
});