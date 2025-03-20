# playwright_poc
playwright_poc


const options = await page.$$eval('select#dropdownId option', options => options.map(option => option.value));
console.log(options);

export function getPageTitle(title: string): string {
  return `Page Title: ${title}`;
}

import { test, expect } from '@playwright/test';
import { getPageTitle } from '../src/app';

test('example test with code coverage', async ({ page }) => {
  // Navigate to the sample website
  await page.goto('https://example.com');

  // Get the page title
  const title = await page.title();

  // Use the function from src/app.ts
  const formattedTitle = getPageTitle(title);

  // Assert the formatted title
  expect(formattedTitle).toBe('Page Title: Example Domain');
});
