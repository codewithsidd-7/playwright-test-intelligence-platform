import BasePage from './BasePage.js';
export default class BillPayPage extends BasePage {
    constructor(page) {
        super(page);
        this.billPayHeading = this.page.getByRole('heading', { name: 'Bill Payment Service' });
        this.payeeNameInput = this.page.locator('input[name="payee.name"]');
        this.addressInput = this.page.locator('input[name="payee.address.street"]');
        this.cityInput = this.page.locator('input[name="payee.address.city"]');
        this.stateInput = this.page.locator('input[name="payee.address.state"]');
        this.zipCodeInput = this.page.locator('input[name="payee.address.zipCode"]');
        this.phoneInput = this.page.locator('input[name="payee.phoneNumber"]');
        this.payeeAccountNumberInput = this.page.locator('input[name="payee.accountNumber"]');
        this.verifyAccountNumberInput = this.page.locator('input[name="verifyAccount"]');
        this.amountInput = this.page.locator('input[name="amount"]');
        this.fromAccountDropdown = this.page.locator('select[name="fromAccountId"]');
        this.sendPaymentButton = this.page.getByRole('button', { name: 'Send Payment' });
        this.billPaymentCompleteHeading = this.page.getByRole('heading', { name: 'Bill Payment Complete' });
        this.payeeNameResult = this.page.locator('#payeeName');
        this.amountResult = this.page.locator('#amount');
        this.fromAccountResult = this.page.locator('#fromAccountId');
    }

    async payBill(billData) {
        await this.payeeNameInput.fill(billData.payeeName);
        await this.addressInput.fill(billData.address);
        await this.cityInput.fill(billData.city);
        await this.stateInput.fill(billData.state);
        await this.zipCodeInput.fill(billData.zipCode);
        await this.phoneInput.fill(billData.phoneNumber);
        await this.payeeAccountNumberInput.fill(billData.accountNumber);
        await this.verifyAccountNumberInput.fill(billData.verifyAccountNumber);
        await this.amountInput.fill(billData.amount);
        await this.fromAccountDropdown.selectOption(billData.fromAccount);
        await this.sendPaymentButton.click();
    }

    async getPayeeName() {
        return (await this.payeeNameResult.innerText()).trim();
    }

    async getAmount() {
        return (await this.amountResult.innerText()).trim();
    }

    async getFromAccount() {
        return (await this.fromAccountResult.innerText()).trim();
    }

}