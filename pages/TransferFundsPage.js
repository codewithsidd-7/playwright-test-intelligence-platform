import BasePage from './BasePage.js';
import logger from '../logger/logger.js';
export default class TransferFundsPage extends BasePage {
    constructor(page) {
        super(page);
        this.transferFundsHeading = this.page.getByRole('heading', { name: 'Transfer Funds' });
        this.transferAmountField = this.page.locator('#amount');
        this.transferFromAccountDropdown = this.page.locator('#fromAccountId');
        this.transferToAccountDropdown = this.page.locator('#toAccountId');
        this.transferButton = this.page.getByRole('button', { name: 'Transfer' });
        this.transferCompleteHeading = this.page.getByRole('heading', { name: 'Transfer Complete!' });
        this.transferAmountResult = this.page.locator('#amountResult');
        this.fromAccountResult = this.page.locator('#fromAccountIdResult');
        this.toAccountResult = this.page.locator('#toAccountIdResult');
    }

    async transferFunds(amount, fromAccount, toAccount) {

        logger.info(
            `Initiating fund transfer | Amount: ${amount}, From: ${fromAccount}, To: ${toAccount}`
        );

        await this.transferAmountField.fill(amount);

        await this.transferFromAccountDropdown.selectOption(fromAccount);

        await this.transferToAccountDropdown.selectOption(toAccount);

        await this.transferButton.click();

        logger.info('Transfer request submitted');
    }
    async getTransferredAmount() {

        const amount = (await this.transferAmountResult.innerText()).trim();

        logger.info(`Transferred Amount: ${amount}`);

        return amount;
    }

    async getFromAccount() {

        const account = (await this.fromAccountResult.innerText()).trim();

        logger.info(`From Account: ${account}`);

        return account;
    }

    async getToAccount() {

        const account = (await this.toAccountResult.innerText()).trim();

        logger.info(`To Account: ${account}`);

        return account;
    }
}