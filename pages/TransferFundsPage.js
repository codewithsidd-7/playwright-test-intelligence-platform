import BasePage from './BasePage.js';
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
        await this.transferAmountField.fill(amount);
        await this.transferFromAccountDropdown.selectOption(fromAccount);
        await this.transferToAccountDropdown.selectOption(toAccount);
        await this.transferButton.click();
    }
    async getTransferredAmount() {
        return (await this.transferAmountResult.textContent()).trim();
    }

    async getFromAccount() {
        return (await this.fromAccountResult.textContent()).trim();
    }

    async getToAccount() {
        return (await this.toAccountResult.textContent()).trim();
    }
}