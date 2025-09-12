const assert = require('assert');

Feature('inforiver matrix');

Scenario('loading the page', async({ I }) => {
  //test 1
  I.amOnPage('https://inforiver-webtest-premium.azurewebsites.net/?csvLocation=CF_REG-03.csv&config=CF_REG-03.json&URLLoad=true');
})