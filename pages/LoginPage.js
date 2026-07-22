import BasePage from './BasePage.js';
import AccountsOverviewPage from './AccountsOverviewPage.js';
import logger from '../logger/logger.js';

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.usernameInput = this.page.locator('input[name="username"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.submitButton = this.page.getByRole('button', { name: 'Log In' });
    }
    async login(username, password) {

        logger.info(`Logging in with username: ${username}`);

        await this.usernameInput.fill(username);
        logger.info('Entered username');

        await this.passwordInput.fill(password);
        logger.info('Entered password');

        await this.submitButton.click();
        logger.info('Clicked Login button');

        return new AccountsOverviewPage(this.page);
    }
}
