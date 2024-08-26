import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
  userName = this.page.locator('//input[@id="user-name"]');
  password = this.page.locator('//input[@id="password"]');
  loginButton = this.page.locator('//input[@id="login-button"]');
  errorMessage = this.page.locator('//h3[@data-test="error"]');

  fb = this.page.locator('//a[text()="Facebook"]');
  cookies = this.page.locator('(//span[text()="Decline optional cookies"])[1]');

  async login(userName: string, password: string) {
    const page = this.page;
    await this.page.goto("/");
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
  }



  async fbLink() {
    await this.fb.click();
  }
  async cooks() {
    const page = this.page;
    await this.cookies.click();

  }
}
