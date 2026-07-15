import BasePage from './BasePage.js';
import LoginPage from './LoginPage.js';

export default class AccountsOverviewPage extends BasePage {

    constructor(page) {
        super(page);
        this.accountsOverviewHeading = this.page.getByRole('heading', { name: 'Accounts Overview' });
        this.accountServicesHeading = this.page.getByRole('heading', {name: 'Account Services' });
        this.logoutLink = this.page.getByRole('link', {name: 'Log Out'});
        this.accountsTable = this.page.locator('#accountTable');
}

}