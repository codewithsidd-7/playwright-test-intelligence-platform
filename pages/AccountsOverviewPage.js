import BasePage from './BasePage.js';
import OpenNewAccountPage from './OpenNewAccountPage.js';
import TransferFundsPage from './TransferFundsPage.js';
import BillPayPage from './BillPayPage.js';

export default class AccountsOverviewPage extends BasePage {

    constructor(page) {
        super(page);
        this.openNewAccountLink = this.page.getByRole('link', { name: 'Open New Account' });
        this.accountsOverviewHeading = this.page.getByRole('heading', { name: 'Accounts Overview' });
        this.accountServicesHeading = this.page.getByRole('heading', { name: 'Account Services' });
        this.logoutLink = this.page.getByRole('link', { name: 'Log Out' });
        this.accountsTable = this.page.locator('#accountTable');
        this.transferFundsLink = this.page.getByRole('link', { name: 'Transfer Funds' });
        this.billPayLink = this.page.getByRole('link', { name: 'Bill Pay' });
    }
    async navigateToOpenNewAccount() {
        await this.openNewAccountLink.click();
        return new OpenNewAccountPage(this.page);
    }
    async navigateToTransferFunds() {
        await this.transferFundsLink.click();
        return new TransferFundsPage(this.page);
    }

    async navigateToBillPay() {
        await this.billPayLink.click();
        return new BillPayPage(this.page);
    }




}