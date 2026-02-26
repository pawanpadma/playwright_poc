import { test as base } from '@playwright/test';
import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });

  // This is incognito
  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto('https://your-url.com');
})();
type MyFixtures = {
  accessToken: string;
};
//export const test = base.extend<MyFixtures>({});
export const test = base.extend({
  accessToken: async ({}, use) => {
    const token = await getAccessToken();
    await use(token);
  }
});

// Global hooks for entire project
test.beforeAll(async () => {
  console.log('>>> BEFORE ALL TESTS IN FILE');
});

test.afterAll(async () => {
  console.log('>>> AFTER ALL TESTS IN FILE');
});

//test.beforeEach(async ({ page }) => {
//  console.log('>>> BEFORE EACH TEST');
  // Example: Navigate to base URL
//  await page.goto('/');
//});
test.beforeEach(async ({ page, accessToken }) => {
  await page.addInitScript((token) => {
    localStorage.setItem('access_token', token);
  }, accessToken);

  await page.goto('/');
});

test.afterEach(async ({ page }) => {
  console.log('>>> AFTER EACH TEST');
  // Example: Screenshot on failure
});


import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    // Runs before each test
    await page.goto('https://your-url.com');

    await use(page);

    // Optional cleanup after each
  }
});

export { expect } from '@playwright/test';

export const expect = test.expect;
