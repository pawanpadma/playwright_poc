import { test, expect } from '@playwright/test';

test('has title @smoke1', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// Get the current date
const currentDate = new Date();

// Subtract 15 years from the current date
const pastDate = new Date();
pastDate.setFullYear(currentDate.getFullYear() - 15);

// Format the past date to MM/YYYY
const formattedPastDate = `${(pastDate.getMonth() + 1).toString().padStart(2, '0')}/${pastDate.getFullYear()}`;

console.log(`15 years back date: ${formattedPastDate}`);
