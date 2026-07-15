import { test, expect } from '../fixtures/base.fixture.js';
import { testData } from '../testdata/testdata.js';

let loginPage;

test('Valid Login', async ({loginPage}) => {
    const accountsOverviewPage = await loginPage.login(
    testData.validUser.username, testData.validUser.password);
    await expect(accountsOverviewPage.accountsOverviewHeading).toBeVisible();
    await expect(accountsOverviewPage.logoutLink).toBeVisible();
});


test('Invalid Login', async ({ loginPage, page }) => {
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    await expect (page.getByText("The username and password could not be verified.")).toBeVisible();
});

test('Login without Username', async({ loginPage, page })=>{
    await loginPage.login(testData.emptyUser.username,testData.validUser.password)
    await expect (page.getByText("Please enter a username and password.")).toBeVisible();
})

test('Login without Password', async({ loginPage, page })=>{
    await loginPage.login(testData.validUser.username,testData.emptyUser.password)
    await expect (page.getByText("Please enter a username and password.")).toBeVisible();
})