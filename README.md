# playwright_poc
playwright_poc


const options = await page.$$eval('select#dropdownId option', options => options.map(option => option.value));
console.log(options);

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
