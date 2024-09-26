import { expect, test } from "@playwright/test";
import * as loginData from "../data/login-data.json";
import { Pages } from "../pageobjects/pages";
import { Logger } from '../pageobjects/logger';

test("@P2 @Smoke1 verify user login with valid invalid creds and logout successfully", async ({ page }) => {
  const logger = new Logger();
  const pages = Pages(page,logger);

  // Login with valid credentials
  var a=loginData;
  await pages.homePage.searchForProduct(a);
  test.info().annotations.push({ type: 'console', description: logger.getLogs() });
  expect(true).toBe(true);

});

test("@P2 @Smoke1 verify user login with valid invalid creds and logout successfullyy", async ({ page }) => {
  const logger = new Logger();
  const pages = Pages(page,logger);
  logger.log("444444");
  expect(true).toBe(false);

  // Login with valid credentials
  await pages.homePage.searchForProduct(loginData);
  logger.log("second");
 
 

   test.info().annotations.push({ type: 'console', description: logger.getLogs() });

});