import { Page } from "@playwright/test";

export class LoginPage {
    private username;
    private password;
    private loginButton;

    constructor(private page: Page) {
        this.username = this.page.getByPlaceholder('Username');
        this.password = this.page.locator('//input[@id="password"]');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async login(username:string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    

}