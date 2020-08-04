const { client } = require('nightwatch-api');
//browser and client are the same thing
const { Given, Then } = require('cucumber');

Given(/^I open Hacker News's home page$/, () => {
  return client
                .url('https://news.ycombinator.com/').waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
    //you don't have to change the javascript you can change the title only in the gherkin script
    return client
                .assert.title(title);
});

Then(/^the Hacker News search form exists$/, () => {
  return client
                .assert.visible('input[name="q"]');
});