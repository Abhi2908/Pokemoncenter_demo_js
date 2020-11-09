import { Given, When, Then } from 'cucumber';

import LoginPage from '../pages/LogInPage';


Given(
    /^I open the Login page$/, () => {
        LoginPage.open;
    },
);

/*When(
    /^I login with user "([^"]*)?" and password "([^"]*)?"$/, (user: string, password: string) => {
        LoginPage.loginWithCredentials(user, password);
    },
);

Then(
    /^I expect that the flash includes "([^"]*)?"$/, (expectedString: string) => {
        expect(LoginPage.flashElement).toHaveTextContaining(expectedString);
    },
);*/
