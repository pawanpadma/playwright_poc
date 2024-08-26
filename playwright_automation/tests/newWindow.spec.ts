import { expect, test,Page } from "@playwright/test";
import * as loginData from "../data/login-data.json";
import { Pages } from "../pageobjects/pages"

test('Switch to a new window and perform actions', async ({ page }) => {
  
    const pages = Pages(page);
    // Navigate to your initial page
    await pages.loginPage.login(loginData.userName, loginData.password);
    
  
    // Click the link that opens the new window
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'), // Waits for the new page event
     // page.click('//a[text()="Facebook"]') // Clicks the link
     await pages.loginPage.fbLink()
    ]);
  
   // await page.bringToFront();
    
    await newPage.waitForLoadState();
  
    const newpages = Pages(newPage);
    await newPage.waitForTimeout(3000);
    await newpages.loginPage.cooks()
    await newPage.waitForTimeout(3000);
    await newPage.close();
   // await page.waitForTimeout(3000);
    //const pages1 = Pages(originalPage);
    //const oldPage = Pages(page);
    await pages.loginPage.fbLink();
    // Perform actions on the new page
   // await newPage.fill('#inputField', 'Some text');
    //await newPage.click('(//span[text()="Decline optional cookies"])[1]');
  
    // Optionally, close the new page
    //await newPage.close();
  });