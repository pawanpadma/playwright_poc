import { Page } from "@playwright/test";
import { LoginPage } from "./login-page";
import { InventoryPage } from "./inventory-page";
import { CartPage } from "./cart-page";
import { HomePage } from "./home-page";
import { BasePage } from "./base-page";
import { Logger } from './logger';

export const Pages = (page: Page,logger: Logger) => {
  return {
    loginPage: new LoginPage(page,logger),
    inventoryPage: new InventoryPage(page,logger),
    cartPage: new CartPage(page,logger),
    homePage: new HomePage(page,logger),
    base: new BasePage(page,logger),
  };
};
