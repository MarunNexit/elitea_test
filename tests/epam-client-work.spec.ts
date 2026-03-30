import { test, expect } from '@playwright/test';

test.describe('EPAM Website Navigation Test', () => {
  test('Navigate to Client Work page and verify text', async ({ page }) => {
    // Step 1: Navigate to https://www.epam.com/
    await page.goto('https://www.epam.com/');
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Step 2: Select “Services” from the header menu
    await page.getByRole('link', { name: 'Services' }).nth(1).click();
    await expect(page).toHaveURL('https://www.epam.com/services');

    // Step 3: Click the “Explore Our Client Work” link
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
    await expect(page).toHaveURL('https://www.epam.com/services/client-work');

    // Step 4: Verify that the “Client Work” text is visible on the page
    await expect(page.getByText('Client Work')).toBeVisible();
  });
});