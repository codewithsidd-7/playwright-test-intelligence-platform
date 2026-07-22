import { test } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';
import AssertionHelper from '../utils/AssertionHelper.js';

test('Transfer Funds', async ({ loginPage }) => {

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

    const transferFundsPage =
        await accountsOverviewPage.navigateToTransferFunds();

    await AssertionHelper.verifyVisible(
        transferFundsPage.transferFundsHeading,
        'Transfer Funds Heading'
    );

    await transferFundsPage.transferFunds(
        testData.transferFunds.amount,
        testData.transferFunds.fromAccount,
        testData.transferFunds.toAccount
    );

    await AssertionHelper.verifyVisible(
        transferFundsPage.transferCompleteHeading,
        'Transfer Complete Heading'
    );

    const transferredAmount =
        await transferFundsPage.getTransferredAmount();

    const fromAccount =
        await transferFundsPage.getFromAccount();

    const toAccount =
        await transferFundsPage.getToAccount();

    AssertionHelper.verifyEquals(
        transferredAmount,
        `$${testData.transferFunds.amount}.00`,
        'Transferred Amount'
    );

    AssertionHelper.verifyEquals(
        fromAccount,
        testData.transferFunds.fromAccount,
        'From Account'
    );

    AssertionHelper.verifyEquals(
        toAccount,
        testData.transferFunds.toAccount,
        'To Account'
    );

});