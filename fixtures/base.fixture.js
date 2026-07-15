import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        await page.goto('/');

        const loginPage = new LoginPage(page);

        await use(loginPage);
    }
});

export { expect } from '@playwright/test';