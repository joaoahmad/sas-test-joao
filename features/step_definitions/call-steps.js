const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given('the browser is at home page', async () => {
  await client.url(client.launch_url);
  await client.pause(500);
});

When('the user type his name', async () => {
  return 'pending';
});

Then('the app should show the user\'s name', async () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('an user name is set', async () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the call list is visible', async () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new call form is visible', async () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user type a new call', async () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('a new call should be showing in the call list', async () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
