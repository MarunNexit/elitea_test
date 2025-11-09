import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work Page Test', () => {
  test('Navigate and verify Client Work text visibility', async ({ page }) => {
    // Step 1: Navigate to EPAM homepage
    await page.goto('https://www.epam.com/');

    // Step 2: Attempt to select "Services" from the header menu
    try {
      await page.getByRole('link', { name: 'Services', exact: true }).click();
    } catch (error) {
      console.error('Failed to click on Services link:', error);
    }

    // Step 3: Attempt to click "Explore Our Client Work" link
    try {
      await page.getByText('Explore Our Client Work').first().click();
    } catch (error) {
      console.error('Failed to click on Explore Our Client Work link:', error);
    }

    // Step 4: Verify "Client Work" text visibility
    const clientWorkVisible = await page.locator('text=Client Work').isVisible();
    expect(clientWorkVisible).toBeTruthy();

    // Close the browser
    await page.close();
  });
});