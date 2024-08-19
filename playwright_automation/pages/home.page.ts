import { Page } from "@playwright/test";


export class HomePage {

  private page: Page
 
  private productItemSearchTextbox = () => this.page.locator("id=search_product");
  private productSearchButton = () => this.page.locator("id=submit_search");


  private a = () => this.page.locator('div:nth-child(2) > a');
  private b = () => this.page.getByRole('link', { name: 'Get Quote from 11 Banks' });
  private c = () => this.page.getByText('Which is Best Bank with');
  private d = () => this.page.getByRole('link', { name: 'Home Loan', exact: true });
  private e =  () => this.page.getByRole('link', { name: 'Get Quote for Home Loan' });
  private f = () => this.page.getByRole('button', { name: 'Get Quote' });
  private g =() =>  this.page.getByText('Enter Loan Amount!');

  constructor(page: Page,) {
    this.page = page;
   

  }

  public async searchForProduct() {
   
   
    await this.a().first().click();
    await this.b().click();
  }

  


}

export default HomePage;