import Page from './page.ts';

class HomePage extends Page {

    private get inputUsername() {
        return $('#input-email');
    }

    private get register() {
        return $('#register-button');
    }

    private get authenticate() {
        return $('#login-button');
    }

    public get errorMessage() {
        return $('.alert-danger');
    }

    public successMessage(message: string) {
        // Success! Now try to authenticate...
        return $(`.//div[contains(text(),'${message}')]`)
            .waitForDisplayed({ timeout: 8000, timeoutMsg: 'Success mesage is missing' });
    }

    public loggedStatus(message: string) {
        // You're logged in!
        return $(`.//h3[contains(text(),'${message}')]`)
            .waitForDisplayed({ timeout: 8000, timeoutMsg: 'Logged in status didn\'t appear' });
    }

    public async registration(username: string) {
        await this.inputUsername.setValue(username);
        await this.register.click();
        await browser.addVirtualAuthenticator('ctap2', 'internal', true, true, true, true);
    }

    public async authentication(username: string) {
        await this.inputUsername.setValue(username);
        await this.authenticate.click();
    }

    public async errorMessageValidation(message: string) {
        await this.errorMessage.waitForDisplayed({ timeout: 8000, timeoutMsg: 'Error message is missing!' });
        await expect(this.errorMessage).toHaveTextContaining(message);
    }


}

export default new HomePage();



