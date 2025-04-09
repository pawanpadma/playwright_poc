import { expect, test } from "@playwright/test";
import * as loginData from "../data/login-data.json";
import { Pages } from "../pageobjects/pages";
import { Logger } from '../pageobjects/logger';
test("@P1 @Smoke verify user login with valid credentials and logout successfully", async ({ page }) => {
  const logger = new Logger();
  const pages = Pages(page,logger);

  // Login with valid credentials
  await pages.loginPage.login(loginData.userName, loginData.password);
  await expect(page).toHaveURL("/inventory.html");

  // Logout to page
  await pages.inventoryPage.burgerMenu.click();
  await pages.inventoryPage.logoutOption.click();
  await expect(page).toHaveURL("/");
});

test("@P1 @Regression verify user is unable to login with invalid credentials", async ({ page }) => {
  const logger = new Logger();
  const pages = Pages(page,logger);

  // Login with invalid credentials
  await pages.loginPage.login(loginData.invalidUserName, loginData.invalidPassword);
  await expect(page).not.toHaveURL("/inventory.html");

  // Verify error message displayed
  await expect(pages.loginPage.errorMessage).toHaveText(loginData.errorMessage);
});
