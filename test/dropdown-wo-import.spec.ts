describe('Dropdown', () => {
    it('can be set using selectByVisibleText', () => {
        browser.url('/dropdown');
        $('#dropdown').selectByVisibleText('Option 2');
    });
});
