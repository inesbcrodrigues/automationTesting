module.exports = {
    '@tags' : ['google'],
    'Google Advanced search: Elon Musk'(browser){
        const mainQuery = 'Elon Musk';

        //anything with a = needs brackets [] on it
        //The selector for searching for name looks like this: '[name="q"]'
        //use of #??

        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]'

        const resultsQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector = '[aria-label="Pesquisar páginas em Italiano"]';
        const resultsPagelastUpdateSelector = '[aria-label=" No último mês"]';
        browser
                .url('https://www.google.com/advanced_search')
                .setValue(mainQueryInputSelector, mainQuery) 
                .click(languageDropdownOpenerSelector)
                .click(languageDropdownValueSelector)
                .click(lastUpdateDropdownOpenerSelector)
                .click(lastUpdateDropdownValueSelector)
                .click(submitButtonSelector)
                .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk') //second parameter is comment to appear on log
                .assert.urlContains('lr=lang_it', 'Language is italian')
                .assert.urlContains('as_qdr=m', 'Results are in past month')

        //browser.expect.element(resultsQuerySelector).to.be.visible
        //could do this but the log wouldnt be as clear so we do:
        browser.assert.visible(resultsQuerySelector, 'UI: Elon Musk is set in the query input')
        browser.assert.containsText(resultsPageLanguageSelector, 'Pesquisar páginas em Italiano', 'UI: Language is set to Italian');
        browser.perform(() => { debugger; })
        //that's the debugger. Next you need to go to chrome://inspect/#devices and click on inspect
        //you'll get the debugger and you can run the code step-by-step
        //it'll stop on the line you set and you can inspect the chrome page(in this case) to see what's what
        browser.assert.containsText(resultsPagelastUpdateSelector, 'No último mês', 'UI: Last update is set to Past Month');        
        browser.saveScreenshot('tests_output/google.png')
    }
}