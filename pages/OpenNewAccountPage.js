import BasePage from './BasePage.js';
import logger from '../logger/logger.js';

export default class OpenNewAccountPage extends BasePage {
    constructor(page) {
        super(page);
        this.openNewAccountLink = this.page.getByRole('link', { name: 'Open New Account' });
        this.openNewAccountHeading = this.page.getByRole('heading', { name: 'Open New Account' });
        this.accountTypeSelect = this.page.locator('#type');
        this.existingAccountSelect = this.page.locator('#fromAccountId');
        this.openNewAccountButton = this.page.getByRole('button', { name: 'Open New Account' });
        this.successMessage = this.page.getByText('Congratulations, your account is now open.');
        this.newAccountNumber = this.page.locator('#newAccountId');

    }

    async createNewAccount(accountType, existingAccount) {

        logger.info(`Creating ${accountType} account`);

        await this.accountTypeSelect.selectOption(accountType);
        logger.info(`Selected account type: ${accountType}`);

        await this.existingAccountSelect.selectOption(existingAccount);
        logger.info(`Selected existing account: ${existingAccount}`);

        await this.openNewAccountButton.click();
        logger.info('Clicked Open New Account button');
    }
    async getNewAccountNumber() {
        const accountNumber = (await this.newAccountNumber.innerText()).trim();

        logger.info(`New Account Created: ${accountNumber}`);

        return accountNumber;
    }
}
