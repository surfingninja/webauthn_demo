import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../../src/pages/home-page';

const random = `${new Date().getTime()/1000}`;

Given(/^I go to the (.+)$/, async (page) => {
    await HomePage.open();
});

When (/^I register with (.+)$/, async (username: string) => {
    // await HomePage.authentication(username+`${new Date().getTime()/1000}`);
    await HomePage.registration(username+random);
    await HomePage.successMessage("Success! Now try to authenticate...");
});

When (/^I Authenticate with (.+)$/, async (username: string) => {
    await HomePage.authentication(username+random);
});

Then(/^I should see success message with (.*)$/, async (message) => {
    await HomePage.loggedStatus;
});


