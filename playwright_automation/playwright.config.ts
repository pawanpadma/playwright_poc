import { defineConfig, devices } from '@playwright/test';
import * as process from 'process';

export default defineConfig({
  testDir: './tests',
  timeout: 20 * 1000,
  workers:2,
  
  

 
 
  reporter: [
    ['json', { outputFile: `test-results/test-results-${process.env.SHARD_INDEX || 'local'}.json` }],
    ['html', { open: 'never' }],
  ],




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
