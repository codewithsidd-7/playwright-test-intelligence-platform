import BasePage from './BasePage.js';
import OpenNewAccountPage from './OpenNewAccountPage.js';

export default class AccountsOverviewPage extends BasePage {

    constructor(page) {
        super(page);
        this.openNewAccountLink = this.page.getByRole('link', {name: 'Open New Account'});
        this.accountsOverviewHeading = this.page.getByRole('heading', { name: 'Accounts Overview' });
        this.accountServicesHeading = this.page.getByRole('heading', {name: 'Account Services' });
        this.logoutLink = this.page.getByRole('link', {name: 'Log Out'});
        this.accountsTable = this.page.locator('#accountTable');
}
    async navigateToOpenNewAccount() {
    await this.openNewAccountLink.click();
    return new OpenNewAccountPage(this.page);
}

}