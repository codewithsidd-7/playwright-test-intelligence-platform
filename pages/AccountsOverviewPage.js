import BasePage from './BasePage.js';
import OpenNewAccountPage from './OpenNewAccountPage.js';
import TransferFundsPage from './TransferFundsPage.js';
import BillPayPage from './BillPayPage.js';
import logger from '../logger/logger.js';
import FindTransactionsPage from './FindTransactionsPage.js';

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
        this.findTransactionLink = this.page.getByRole('link', { name: 'Find Transactions' });

    }
    async navigateToOpenNewAccount() {
        logger.info('Navigating to Open New Account page');

        await this.openNewAccountLink.click();

        logger.info('Successfully navigated to Open New Account page');

        return new OpenNewAccountPage(this.page);
    }
    async navigateToTransferFunds() {
        logger.info('Navigating to Transfer Funds page');

        await this.transferFundsLink.click();

        logger.info('Successfully navigated to Transfer Funds page');

        return new TransferFundsPage(this.page);
    }

    async navigateToBillPay() {
        logger.info('Navigating to Bill Pay page');

        await this.billPayLink.click();

        logger.info('Successfully navigated to Bill Pay page');

        return new BillPayPage(this.page);
    }

    async navigateToFindTransactions() {
        logger.info('Navigating to Find Transactions page');

        await this.findTransactionLink.click();

        logger.info('Successfully navigated to Find Transactions page');

        return new FindTransactionsPage(this.page);
    }



}