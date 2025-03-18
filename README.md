# playwright_poc
playwright_poc


const options = await page.$$eval('select#dropdownId option', options => options.map(option => option.value));
console.log(options);

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
