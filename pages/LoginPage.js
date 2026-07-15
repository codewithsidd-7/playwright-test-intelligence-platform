import BasePage from './BasePage.js';
import AccountsOverviewPage from './AccountsOverviewPage.js';

export default class LoginPage extends BasePage {
    constructor(page) {
    super(page);
    
    this.usernameInput = this.page.locator('input[name="username"]');
    this.passwordInput = this.page.locator('input[name="password"]');
    this.submitButton = this.page.getByRole('button', { name: 'Log In' });
}
async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    return new AccountsOverviewPage(this.page);
}
}
