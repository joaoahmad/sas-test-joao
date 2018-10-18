const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
require('babel-core/register');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--compiler', 'js:babel-core/register',
    '--require', 'features/step_definitions',
    'features'
  ]
})

module.exports = {
  src_folders: 'features',
  "output_folder": "./reports",
  "selenium": {
    "start_process": true,
    "server_path": seleniumServer.path,
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      'webdriver.chrome.driver' : chromedriver.path
    }
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      screenshots: {
        enabled: true,
        path: './reports/screenshots',
      },
      globals: {
        waitForConditionTimeout: 5000,
      },
      desiredCapabilities: {
        browserName: 'chrome',
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
      }
    }
  }
};
