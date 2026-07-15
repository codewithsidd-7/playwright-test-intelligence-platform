import { test, expect } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';



test('Create New Account', async ({loginPage}) => {
    const accountsOverviewPage = await loginPage.login(
    testData.validUser.username, testData.validUser.password);
    await expect(accountsOverviewPage.accountsOverviewHeading).toBeVisible();
    await expect(accountsOverviewPage.logoutLink).toBeVisible();
    const openNewAccountPage = await accountsOverviewPage.navigateToOpenNewAccount();
    await expect(openNewAccountPage.openNewAccountHeading).toBeVisible();
    await openNewAccountPage.createNewAccount(testData.accountTypes.savings
        ,testData.accountTypes.existingAccount);
    await expect(openNewAccountPage.successMessage).toBeVisible();
    const newAccountNumber = await openNewAccountPage.getNewAccountNumber();
    console.log(`New Account Number Created: ${newAccountNumber}`);
    expect(newAccountNumber).not.toBe('');
});


