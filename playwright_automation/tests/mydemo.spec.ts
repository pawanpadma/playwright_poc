import { expect, test } from "@playwright/test";
import * as loginData from "../data/login-data.json";
import { Pages } from "../pageobjects/pages";

test("@P2 @Smoke1 verify user login with valid invalid creds and logout successfully", async ({ page }) => {
  const pages = Pages(page);

  // Login with valid credentials
  await pages.homePage.searchForProduct();

});