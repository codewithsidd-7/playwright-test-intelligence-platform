import { test } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';
import AssertionHelper from '../utils/AssertionHelper.js';

test.describe('Find Transactions', () => {

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

        global.findTransactionsPage =
            await accountsOverviewPage.navigateToFindTransactions();

        await AssertionHelper.verifyVisible(
            global.findTransactionsPage.findTransactionsHeading,
            'Find Transactions Heading'
        );
    });

    test('Find Transaction By Transaction ID', async () => {

        await global.findTransactionsPage.searchByTransactionID(
            testData.findTransactions.byTransactionId.account,
            testData.findTransactions.byTransactionId.transactionId
        );

        await AssertionHelper.verifyVisible(
            global.findTransactionsPage.transactionResultHeading,
            'Transaction Result Heading'
        );

        const transaction =
            await global.findTransactionsPage.getFirstTransaction();

        AssertionHelper.verifyEquals(
            transaction.description,
            testData.findTransactions.byTransactionId.expectedDescription,
            'Transaction Description'
        );
    });

    test('Find Transaction By Date', async () => {

        await global.findTransactionsPage.searchByDate(
            testData.findTransactions.byDate.account,
            testData.findTransactions.byDate.date
        );

        await AssertionHelper.verifyVisible(
            global.findTransactionsPage.transactionResultHeading,
            'Transaction Result Heading'
        );

        const transactionCount =
            await global.findTransactionsPage.getTransactionCount();

        AssertionHelper.verifyEquals(
            transactionCount,
            testData.findTransactions.byDate.expectedTransactionCount,
            'Transaction Count'
        );
    });

//     test('Find Transaction By Date Range', async () => {

//     await global.findTransactionsPage.searchByDateRange(
//         testData.findTransactions.byDateRange.account,
//         testData.findTransactions.byDateRange.fromDate,
//         testData.findTransactions.byDateRange.toDate
//     );

//     await AssertionHelper.verifyVisible(
//         global.findTransactionsPage.transactionResultHeading,
//         'Transaction Result Heading'
//     );

//     const transactionCount =
//         await global.findTransactionsPage.getTransactionCount();

//     AssertionHelper.verifyTrue(
//         transactionCount > 0,
//         'Transaction Count'
//     );
// });

    test('Find Transaction By Amount', async () => {

        await global.findTransactionsPage.searchByAmount(
            testData.findTransactions.byAmount.account,
            testData.findTransactions.byAmount.amount
        );

        await AssertionHelper.verifyVisible(
            global.findTransactionsPage.transactionResultHeading,
            'Transaction Result Heading'
        );

        const transaction =
            await global.findTransactionsPage.getFirstTransaction();

        AssertionHelper.verifyEquals(
            transaction.description,
            testData.findTransactions.byAmount.expectedDescription,
            'Transaction Description'
        );
    });

});