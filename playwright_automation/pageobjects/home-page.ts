import { BasePage, expect } from "./base-page";




export class HomePage extends BasePage {

     a =  this.page.locator('div:nth-child(2) > a');
     b =  this.page.getByRole('link', { name: 'Get Quote from 11 Banks' });
     c =  this.page.getByText('Which is Best Bank with');
     d =  this.page.getByRole('link', { name: 'Home Loan', exact: true });
     e =   this.page.getByRole('link', { name: 'Get Quote for Home Loan' });
     f =  this.page.getByRole('button', { name: 'Get Quote' });
     g = this.page.getByText('Enter Loan Amount!');

     public async searchForProduct(loginData) {
   
        const page = this.page;
        const logger = this.logger;
        this.logger.log('action action...'+loginData.userName);
        await this.page.goto("/");
        this.logger.log('Performing action...');
        await this.a.first().click();
        this.logger.log('Performing action...');
        await this.b.click();
        this.logger.log('Performing action...');
      }

     function getLocalDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const localDate = getLocalDate();
console.log(localDate); // Output: YYYY-MM-DD


}
