# playwright_poc
playwright_poc


const options = await page.$$eval('select#dropdownId option', options => options.map(option => option.value));
console.log(options);


Steps to Set Up Playwright with TypeScript and Code Coverage
1. Set Up a New Playwright Project
If you don’t already have a Playwright project, create one:

bash
Copy
npm init playwright@latest
Follow the prompts to set up the project. Choose TypeScript as the language.

2. Install Required Dependencies
Install the necessary dependencies for code coverage:

bash
Copy
npm install --save-dev @istanbuljs/nyc-config-typescript source-map-support ts-node
3. Configure nyc for Code Coverage
Create a .nycrc file in the root of your project to configure nyc (Istanbul's command-line interface):

json
Copy
{
  "extends": "@istanbuljs/nyc-config-typescript",
  "all": true,
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "**/*.spec.ts",
    "**/*.test.ts"
  ],
  "reporter": [
    "html",
    "text"
  ],
  "sourceMap": true,
  "instrument": true
}
4. Update playwright.config.ts
Modify your playwright.config.ts to include the code coverage setup:

typescript
Copy
import { defineConfig } from '@playwright/test';
import * as path from 'path';

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
  // Add the following for code coverage
  globalSetup: require.resolve('./global-setup'),
  globalTeardown: require.resolve('./global-teardown'),
});
5. Create Global Setup and Teardown Files
Create a global-setup.ts file to initialize code coverage:

typescript
Copy
// global-setup.ts
import * as fs from 'fs';
import * as path from 'path';
import { chromium } from '@playwright/test';

export default async function globalSetup() {
  // Start coverage
  await require('nyc').createInstance({
    cwd: __dirname,
    reporter: ['text', 'html'],
  }).wrap();

  // Launch browser and save state
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await context.tracing.start({ screenshots: true, snapshots: true });
  await context.tracing.stop({ path: 'test-trace.zip' });
  await browser.close();
}
Create a global-teardown.ts file to finalize and save the coverage report:

typescript
Copy
// global-teardown.ts
import * as fs from 'fs';
import * as path from 'path';

export default async function globalTeardown() {
  // Save coverage report
  const nycInstance = require('nyc');
  const nyc = nycInstance.createInstance({
    cwd: __dirname,
    reporter: ['text', 'html'],
  });
  nyc.writeCoverageFile();
  nyc.report();
}
6. Write Your Tests
Write your Playwright tests in the tests directory. For example:

typescript
Copy
// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});
7. Run Tests with Coverage
Run your tests with the following command:

bash
Copy
npx playwright test
After the tests run, the coverage report will be generated in the coverage directory. You can open coverage/index.html in your browser to view the detailed report.

8. Add Coverage to CI (Optional)
If you want to integrate coverage into your CI pipeline, you can add the following script to your package.json:

json
Copy
"scripts": {
  "test": "playwright test",
  "coverage": "nyc playwright test"
}
Then run:

bash
Copy
npm run coverage
Final Project Structure
Your project structure should look like this:

Copy
playwright-project/
├── tests/
│   └── example.spec.ts
├── global-setup.ts
├── global-teardown.ts
├── .nycrc
├── playwright.config.ts
├── package.json
└── coverage/
    └── index.html
