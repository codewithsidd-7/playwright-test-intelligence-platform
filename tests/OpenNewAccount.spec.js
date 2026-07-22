import { test } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';
import AssertionHelper from '../utils/AssertionHelper.js';

test('Create New Account', async ({ loginPage }) => {

    const accountsOverviewPage = await loginPage.login(
        testData.validUser.username,
        testData.validUser.password
    );

    await AssertionHelper.verifyVisible(accountsOverviewPage.accountsOverviewHeading,
        'Accounts Overview Heading');

    await AssertionHelper.verifyVisible(accountsOverviewPage.logoutLink, 'Logout Link');

    const openNewAccountPage = await accountsOverviewPage.navigateToOpenNewAccount();

    await AssertionHelper.verifyVisible(openNewAccountPage.openNewAccountHeading,
        'Open New Account Heading');

    await openNewAccountPage.createNewAccount(
        testData.accountTypes.savings,
        testData.accountTypes.existingAccount
    );

    await AssertionHelper.verifyVisible(openNewAccountPage.successMessage,
        'Account Creation Success Message'
    );

    const newAccountNumber = await openNewAccountPage.getNewAccountNumber();

    AssertionHelper.verifyNotEmpty(newAccountNumber,
        'New Account Number');
});