import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { testData } from '../testdata/testdata.js';


test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login(testData.userName, testData.password);
    await expect(page).toHaveURL(/overview/);
});

test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login(testData.invalidUserName, testData.invalidPassword);
    await expect (page.getByText("The username and password could not be verified.")).toBeVisible();
});