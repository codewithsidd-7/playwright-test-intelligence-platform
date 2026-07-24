import BasePage from './BasePage.js';
import logger from '../logger/logger.js';

export default class FindTransactionsPage extends BasePage {

    constructor(page) {
        super(page);

        this.findTransactionsHeading = this.page.getByRole('heading', {
            name: 'Find Transactions'
        });

        this.transactionResultHeading = this.page.getByRole('heading', {
            name: 'Transaction Results'
        });

        this.accountDropdown = this.page.locator('#accountId');

        this.transactionIdInput = this.page.locator('#transactionId');
        this.findByTransactionIdButton = this.page.locator('#findById');

        this.transactionDateInput = this.page.locator('#transactionDate');
        this.findByDateButton = this.page.locator('#findByDate');

        this.fromDateInput = this.page.locator('#fromDate');
        this.toDateInput = this.page.locator('#toDate');
        this.findByDateRangeButton = this.page.locator('#findByDateRange');

        this.amountInput = this.page.locator('#amount');
        this.findByAmountButton = this.page.locator('#findByAmount');

        this.transactionTable = this.page.locator('#transactionTable');
        this.transactionRows = this.page.locator('#transactionBody tr');
    }

    async searchByTransactionID(accountNumber, transactionId) {
        logger.info(`Searching transaction by ID: ${transactionId}`);

        await this.accountDropdown.selectOption(accountNumber);
        await this.transactionIdInput.fill(transactionId);
        await this.findByTransactionIdButton.click();

        await this.transactionResultHeading.waitFor();

        logger.info('Transaction search completed');
    }

    async searchByDate(accountNumber, date) {
        logger.info(`Searching transactions for date: ${date}`);

        await this.accountDropdown.selectOption(accountNumber);
        await this.transactionDateInput.fill(date);
        await this.findByDateButton.click();

        await this.transactionResultHeading.waitFor();

        logger.info('Transaction search completed');
    }

    async searchByDateRange(accountNumber, fromDate, toDate) {
        logger.info(`Searching transactions from ${fromDate} to ${toDate}`);

        await this.accountDropdown.selectOption(accountNumber);
        await this.fromDateInput.fill(fromDate);
        await this.toDateInput.fill(toDate);
        await this.findByDateRangeButton.click();

        await this.transactionResultHeading.waitFor();

        logger.info('Transaction search completed');
    }

    async searchByAmount(accountNumber, amount) {
        logger.info(`Searching transactions for amount: ${amount}`);

        await this.accountDropdown.selectOption(accountNumber);
        await this.amountInput.fill(amount);
        await this.findByAmountButton.click();

        await this.transactionResultHeading.waitFor();

        logger.info('Transaction search completed');
    }

    async getTransactionCount() {
        return await this.transactionRows.count();
    }

    async getFirstTransaction() {

        const row = this.transactionRows.first();

        return {
            date: (await row.locator('td').nth(0).textContent())?.trim(),
            description: (await row.locator('td').nth(1).textContent())?.trim(),
            debit: (await row.locator('td').nth(2).textContent())?.trim(),
            credit: (await row.locator('td').nth(3).textContent())?.trim()
        };
    }

    async getTransactionByRow(index) {

        const row = this.transactionRows.nth(index);

        return {
            date: (await row.locator('td').nth(0).textContent())?.trim(),
            description: (await row.locator('td').nth(1).textContent())?.trim(),
            debit: (await row.locator('td').nth(2).textContent())?.trim(),
            credit: (await row.locator('td').nth(3).textContent())?.trim()
        };
    }

}