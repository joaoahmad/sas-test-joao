const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const OPERATOR_NAME = 'Hastur';

Given('the browser is at home page', async () => {
  await client.url(client.launch_url);
  await client.pause(500);
});

When('an user name is set', async () => {
  await client.waitForElementVisible('.app', 5000);
  await client.setValue('.operator-login input[name="operator_name"]', OPERATOR_NAME);
  await client.submitForm('.operator-login form');
  await client.pause(500);
});

When('the user type a new call', async () => {
  await client.setValue('.new-call [name="description"]', 'New test call');
  await client.submitForm('.new-call form');
  await client.pause(500);
});

When('the user enter his name', async () => {
  await client.setValue('.operator-login input[name="operator_name"]', OPERATOR_NAME);
  await client.submitForm('.operator-login form');
  await client.pause(500);
});

When('the user select a call in the call\'s list', async () => {
  await client.click('.call-list .call-list-item > a');
});

When('the user clicks on {string} button', async (string) => {
  await client.useXpath().click(`//*[contains(text(),'${string}')]`);
  await client.useCss().pause(500);
});

Then('the app should show the user\'s name', async () => {
  await client.assert.value('.new-call input[name="operator"]', OPERATOR_NAME);
});

Then('the call list is visible', async () => {
  await client.expect.element('.app-list').to.be.visible;
});

Then('the new call form is visible', async () => {
  await client.expect.element('.app-main .new-call').to.be.visible;
});

Then('a new call should be showing in the call list', async () => {
  const selector = '.app-list .call-list-group:nth-child(1) .call-list-group-list .call-list-item:nth-child(1)'
  await client.assert.containsText(selector, 'New test call')
});

Then('the call should be visible in the page', async () => {
  await client.expect.element('.app-main .call-details').to.be.visible;
});
