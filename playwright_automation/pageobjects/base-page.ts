import { Page } from "@playwright/test";
import { Logger } from './logger';

export class BasePage {
   logger: Logger;
  constructor(protected page: Page,logger: Logger) {
    this.page = page;
    this.logger = logger;
  }
}

export { expect, Page } from "@playwright/test";
