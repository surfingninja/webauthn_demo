import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../../src/pages/home-page.ts';


Given(/^I open the browser and load the (.+)$/, async (page) => {
    await HomePage.open(page);
});

When (/^I authenticate with (.+)$/, async (username) => {
    await HomePage.authentication(username+`${new Date().getTime()/1000}`);
});

Then(/^I should see an error message with (.*)$/, async (message) => {
    await HomePage.errorMessageValidation(message)
});

