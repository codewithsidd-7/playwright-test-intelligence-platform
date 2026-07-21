import { test, expect } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';

test('Bill Payment', async ({ loginPage }) => {

    const accountsOverviewPage = await loginPage.login(
        testData.validUser.username,
        testData.validUser.password
    );
    await expect(accountsOverviewPage.accountsOverviewHeading).toBeVisible();
    await expect(accountsOverviewPage.logoutLink).toBeVisible();


    const billPayPage = await accountsOverviewPage.navigateToBillPay();

    await expect(billPayPage.billPayHeading).toBeVisible();


    await billPayPage.payBill(testData.billPay);

    await expect(billPayPage.billPaymentCompleteHeading).toBeVisible();

    
    const payeeName = await billPayPage.getPayeeName();
    const amount = await billPayPage.getAmount();
    const fromAccount = await billPayPage.getFromAccount();

    
    expect(payeeName).toBe(testData.billPay.payeeName);
    expect(amount).toBe(`$${testData.billPay.amount}.00`);
    expect(fromAccount).toBe(testData.billPay.fromAccount);

});