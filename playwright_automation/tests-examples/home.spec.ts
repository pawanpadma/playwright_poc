import { test, expect } from '@playwright/test';
import  HomePage  from '../pages/home.page';

test('test', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('https://www.deal4loans.com/');
  homePage.searchForProduct()
});