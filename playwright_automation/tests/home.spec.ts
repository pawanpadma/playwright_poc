import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www.deal4loans.com/');
  await page.locator('div:nth-child(2) > a').first().click();
  await page.getByRole('link', { name: 'Get Quote from 11 Banks' }).click();
  await page.getByText('Which is Best Bank with').click();
  await page.getByRole('link', { name: 'Home Loan', exact: true }).click();
  await page.getByRole('link', { name: 'Get Quote for Home Loan' }).click();
  await page.getByRole('button', { name: 'Get Quote' }).click();
  await page.getByText('Enter Loan Amount!').click();
});