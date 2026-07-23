import { test } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';
import AssertionHelper from '../utils/AssertionHelper.js';

test.describe('Find Transactions', () => {

    let findTransactionsPage;

    test.beforeEach(async ({ loginPage }) => {

        const accountsOverviewPage = await loginPage.login(
            testData.validUser.username,
            testData.validUser.password
        );

        await AssertionHelper.verifyVisible(
            accountsOverviewPage.accountsOverviewHeading,
            'Accounts Overview Heading'
        );

        await AssertionHelper.verifyVisible(
            accountsOverviewPage.logoutLink,
            'Logout Link'
        );

        findTransactionsPage =
            await accountsOverviewPage.navigateToFindTransactions();

        await AssertionHelper.verifyVisible(
            findTransactionsPage.findTransactionsHeading,
            'Find Transactions Heading'
        );

    });

    test('Find Transaction By Transaction ID', async () => {

        await findTransactionsPage.searchByTransactionId(
            testData.findTransactions.byTransactionId.account,
            testData.findTransactions.byTransactionId.transactionId
        );

        await AssertionHelper.verifyVisible(
            findTransactionsPage.transactionResultHeading,
            'Transaction Result Heading'
        );

        const transaction = await findTransactionsPage.getFirstTransaction();
        const count = await findTransactionsPage.getTransactionCount();

        AssertionHelper.verifyEquals(
            transaction.description,
            testData.findTransactions.byTransactionId.expectedDescription,
            'Transaction Description'
        );

        AssertionHelper.verifyEquals(
            transaction.debit,
            testData.findTransactions.byTransactionId.expectedDebit,
            'Debit Amount'
        );

        AssertionHelper.verifyEquals(
            transaction.credit,
            testData.findTransactions.byTransactionId.expectedCredit,
            'Credit Amount'
        );

        AssertionHelper.verifyEquals(
            count,
            testData.findTransactions.byTransactionId.expectedCount,
            'Transaction Count'
        );

    });

    test('Find Transaction By Date', async () => {

        await findTransactionsPage.searchByDate(
            testData.findTransactions.byDate.account,
            testData.findTransactions.byDate.date
        );

        await AssertionHelper.verifyVisible(
            findTransactionsPage.transactionResultHeading,
            'Transaction Result Heading'
        );

        AssertionHelper.verifyEquals(
            await findTransactionsPage.getTransactionCount(),
            testData.findTransactions.byDate.expectedCount,
            'Transaction Count'
        );

    });

    test('Find Transaction By Date Range', async () => {

        await findTransactionsPage.searchByDateRange(
            testData.findTransactions.byDateRange.account,
            testData.findTransactions.byDateRange.fromDate,
            testData.findTransactions.byDateRange.toDate
        );

        await AssertionHelper.verifyVisible(
            findTransactionsPage.transactionResultHeading,
            'Transaction Result Heading'
        );

        AssertionHelper.verifyEquals(
            await findTransactionsPage.getTransactionCount(),
            testData.findTransactions.byDateRange.expectedCount,
            'Transaction Count'
        );

    });

    test('Find Transaction By Amount', async () => {

        await findTransactionsPage.searchByAmount(
            testData.findTransactions.byAmount.account,
            testData.findTransactions.byAmount.amount
        );

        await AssertionHelper.verifyVisible(
            findTransactionsPage.transactionResultHeading,
            'Transaction Result Heading'
        );

        const transaction = await findTransactionsPage.getFirstTransaction();

        AssertionHelper.verifyEquals(
            transaction.description,
            testData.findTransactions.byAmount.expectedDescription,
            'Transaction Description'
        );

        AssertionHelper.verifyEquals(
            transaction.debit,
            testData.findTransactions.byAmount.expectedDebit,
            'Debit Amount'
        );

    });

});