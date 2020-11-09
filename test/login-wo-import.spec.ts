describe('Login page', () => {
    it('displays message with invalid credentials', () => {
        browser.url('/login');

        $('#username').setValue('foo');
        $('#password').setValue('bar');
        $('#login > button').click();
    });
});
