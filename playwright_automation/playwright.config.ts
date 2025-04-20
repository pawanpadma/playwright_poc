import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 20 * 1000,
  workers:2,
  

 
  //workers: process.env.CI ? 1 : undefined,
  // reporter: [["list"], 
  // ["html", {outputFolder:'my-report',open:'never'}],
  // ['json', {outputFile: 'my-report/json-report.json' }],
  reporter: [
    ['json', { outputFile: 'test-results/run/report.json' }],
    ['html', { outputFolder: 'test-results/run/playwright-report', open: 'never' }]
  ],
  // ['monocart-reporter', {
  //   name: "My Test Report",
  //   outputFile: './monocart-report/index.html',
  //   includeAnnotations: true, // Include annotations in the report
  // }]
  



  use: {
    //baseURL: 'https://www.saucedemo.com',
    baseURL: 'https://deal4loans.com',
    headless: true,
    actionTimeout: 90 * 1000,
    navigationTimeout: 90 * 1000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        // Browser-specific options
        channel: 'chrome',
        headless:false
      },
    },
    /*
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }, */

    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //     headless:false
    //   },
    // },

   /*
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    */
  ],
  fullyParallel:true
  
});
