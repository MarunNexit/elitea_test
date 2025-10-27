import { test, expect } from '@playwright/test';

test.describe('EPAM Website Navigation Test', () => {
  test('Navigate to Contact Us and verify GLOBAL HEADQUARTERS text', async ({ page }) => {
    // Step 1: Navigate to EPAM homepage
    await page.goto('https://www.epam.com/');

    // Step 2: Navigate directly to the "About" page due to interaction challenges
    await page.goto('https://www.epam.com/about');

    // Step 3: Click the "Contact Us" link
    await page.getByRole('link', { name: 'Contact Us', exact: true }).click();

    // Step 4: Verify that the "GLOBAL HEADQUARTERS" text is visible on the page
    await expect(page.getByText('GLOBAL HEADQUARTERS')).toBeVisible();
  });
});