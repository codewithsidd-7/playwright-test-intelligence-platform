import BasePage from './BasePage.js';

export default class OpenNewAccountPage extends BasePage{
    constructor(page){
        super(page);
        this.openNewAccountLink = this.page.getByRole('link', {name: 'Open New Account'});
        this.openNewAccountHeading = this.page.getByRole('heading', {name: 'Open New Account'});
        this.accountTypeSelect = this.page.locator('#type');
        this.existingAccountSelect = this.page.locator('#fromAccountId');
        this.openNewAccountButton = this.page.getByRole('button', {name: 'Open New Account'});
        this.successMessage = this.page.getByText('Congratulations, your account is now open.');
        this.newAccountNumber = this.page.locator('#newAccountId');

    }

  async createNewAccount(accountType, fromAccount) {
    await this.accountTypeSelect.selectOption(accountType);
    await this.existingAccountSelect.selectOption(fromAccount);
    await this.openNewAccountButton.click();
}
async getNewAccountNumber() {
    return (await this.newAccountNumber.textContent()).trim();
}
}
