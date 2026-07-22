import { test } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';
import AssertionHelper from '../utils/AssertionHelper.js';

test('Bill Payment', async ({ loginPage }) => {

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

    const billPayPage = await accountsOverviewPage.navigateToBillPay();

    await AssertionHelper.verifyVisible(
        billPayPage.billPayHeading,
        'Bill Pay Heading'
    );

    await billPayPage.payBill(testData.billPay);

    await AssertionHelper.verifyVisible(
        billPayPage.billPaymentCompleteHeading,
        'Bill Payment Complete Heading'
    );

    const payeeName = await billPayPage.getPayeeName();
    const amount = await billPayPage.getAmount();
    const fromAccount = await billPayPage.getFromAccount();

    AssertionHelper.verifyEquals(
        payeeName,
        testData.billPay.payeeName,
        'Payee Name'
    );

    AssertionHelper.verifyEquals(
        amount,
        `$${testData.billPay.amount}.00`,
        'Bill Amount'
    );

    AssertionHelper.verifyEquals(
        fromAccount,
        testData.billPay.fromAccount,
        'From Account'
    );

});