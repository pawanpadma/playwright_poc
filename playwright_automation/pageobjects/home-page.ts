import { BasePage, expect } from "./base-page";

export class HomePage extends BasePage {

     a =  this.page.locator('div:nth-child(2) > a');
     b =  this.page.getByRole('link', { name: 'Get Quote from 11 Banks' });
     c =  this.page.getByText('Which is Best Bank with');
     d =  this.page.getByRole('link', { name: 'Home Loan', exact: true });
     e =   this.page.getByRole('link', { name: 'Get Quote for Home Loan' });
     f =  this.page.getByRole('button', { name: 'Get Quote' });
     g = this.page.getByText('Enter Loan Amount!');

     public async searchForProduct() {
   
        const page = this.page;
        await this.page.goto("/");
        await this.a.first().click();
        await this.b.click();
      }

}