import { Page } from "@playwright/test";
import { LoginPage } from "./login-page";
import { InventoryPage } from "./inventory-page";
import { CartPage } from "./cart-page";
import { HomePage } from "./home-page";
import { BasePage } from "./base-page";

export const Pages = (page: Page) => {
  return {
    loginPage: new LoginPage(page),
    inventoryPage: new InventoryPage(page),
    cartPage: new CartPage(page),
    homePage: new HomePage(page),
    base: new BasePage(page),
  };
};
