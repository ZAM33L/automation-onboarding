const assert = require('assert');

Feature('inforiver matrix');

Scenario('loading and visibility', async ({ I }) => {
  //test 1 - page load
  I.amOnPage('https://inforiver-webtest-premium.azurewebsites.net/?csvLocation=CF_REG-03.csv&config=CF_REG-03.json&URLLoad=true');
  console.log('1.page loaded')
  //test 2 - table header being visible
  I.seeElement(`//div[@id='headerEditor']//span[text()='Sum of Profit, Sum of Quantity, Sum of Sales by Category, Sub-Category, Year']`)
  console.log('2 header loaded')
  //test 3 - main column cell visibility
  I.seeElement(`(//span[@role='cell' and text()='Furnishings'])[1]`)
  console.log("3.1 cell loaded")
  I.seeElement(`//span[@role='cell' and text()='Furnishings']/ancestor::div[6]/following-sibling::div[2]//span[@role='cell' and text()='Tables']`)
  console.log("3.2 cell below loaded")
  I.seeElement(`//span[@role='cell' and text()='Furnishings']/ancestor::div[6]/preceding-sibling::div[2]//span[@role='cell' and text()='Chairs']`)
  console.log("3.3 cell above loaded")
  //test 4 - main column cell visibility
  I.seeElement(`(//span[@role='cell' and text()='36.92'])[1]`)
  console.log("4.1 a cell in matrix loaded")
  I.seeElement(`(//span[@role='cell' and text()='81.57'])[1]/ancestor::div[3]/following-sibling::div[2]//span[text()='14.60']`)
  console.log("4.1.1 right to it")
  I.seeElement(`(//span[@role='cell' and text()='81.57'])[1]/ancestor::div[3]/preceding-sibling::div[2]//span[text()='2.34']`)
  console.log("4.1.2 left to it")
  I.seeElement(`(//span[@role='cell' and text()='81.57'])[1]/ancestor::div[3]/preceding-sibling::div[25]//span[text()='294.87']`)
  console.log("4.1.3 above it")
  I.seeElement(`(//span[@role='cell' and text()='81.57'])[1]/ancestor::div[3]/following-sibling::div[25]//span[text()='164.09']`)
  console.log("4.1.4 below it")
  //test 5 - accessing column headers and row header
  I.seeElement(`//span[text()='Category']/ancestor::div[5]/following-sibling::div/div[contains(@id,'2011') and contains(@id,'Profit')]`)
  console.log("5.1 column header accessed")
  I.seeElement(`//span[text()='Category']/ancestor::div[8]/following-sibling::div//span[text()='Chairs']`)
  console.log("5.2 row header accessed")
  //test 5 - accessing main option tabs
  I.seeElement(`//ol//span[1]`)
  console.log("6.1 home tab accessed")
  I.seeElement(`//ol//span[1]`)
  console.log("6.2 insert tab accessed")
  I.seeElement(`//ol//span[1]`)
  console.log("6.3 design tab accessed")
  I.seeElement(`//ol//span[1]`)
  console.log("6.4 explore tab accessed")

})