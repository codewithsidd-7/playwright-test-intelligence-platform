import { test, expect } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';

test('Transfer Funds', async ({ loginPage }) => {
const accountsOverviewPage = await loginPage.login(
testData.validUser.username, testData.validUser.password);
await expect(accountsOverviewPage.accountsOverviewHeading).toBeVisible();
await expect(accountsOverviewPage.logoutLink).toBeVisible();
const transferFundsPage = await accountsOverviewPage.navigateToTransferFunds();
await expect(transferFundsPage.transferFundsHeading).toBeVisible();
await transferFundsPage.transferFunds(testData.transferFunds.amount, testData.transferFunds.fromAccount,
     testData.transferFunds.toAccount);
await expect(transferFundsPage.transferCompleteHeading).toBeVisible();

const transferredAmount = await transferFundsPage.getTransferredAmount();
const fromAccount = await transferFundsPage.getFromAccount();
const toAccount = await transferFundsPage.getToAccount();   

expect(transferredAmount) .toBe(`$${testData.transferFunds.amount}.00`); 
expect(fromAccount) .toBe(testData.transferFunds.fromAccount);
expect(toAccount) .toBe(testData.transferFunds.toAccount);

})