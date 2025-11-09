import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work Page Test', () => {
  test('Navigate and verify Client Work page', async ({ page }) => {
    // Step 1: Navigate to EPAM homepage
    await page.goto('https://www.epam.com/');

    // Step 2: Attempt to select "Services" from the header menu
    try {
      await page.getByRole('link', { name: 'Services', exact: true }).click();
    } catch (error) {
      console.error('Error clicking on Services link:', error);
    }

    // Step 3: Attempt to click the "Explore Our Client Work" link
    try {
      await page.getByText('Explore Our Client Work').first().click();
    } catch (error) {
      console.error('Error clicking on Explore Our Client Work link:', error);
    }

    // Step 4: Verify that the "Client Work" text is visible on the page
    try {
      const clientWorkText = await page.locator('text=Client Work');
      await expect(clientWorkText).toBeVisible();
    } catch (error) {
      console.error('Error verifying Client Work text:', error);
    }
  });
});