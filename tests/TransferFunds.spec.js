import { test, expect } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';

test('Transfer Funds', async ({ loginPage, page }) => {
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
expect(await transferFundsPage.getTransferredAmount()).toBe(`$${testData.transferFunds.amount}.00`);  
const fromAccount = await transferFundsPage.getFromAccount();
expect(await transferFundsPage.getFromAccount()).toBe(testData.transferFunds.fromAccount); 
const toAccount = await transferFundsPage.getToAccount();
expect(await transferFundsPage.getToAccount()).toBe(testData.transferFunds.toAccount);  

})