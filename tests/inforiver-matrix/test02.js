const assert = require('assert');

Feature('inforiver matrix - test 2');

Scenario('basic actions', async ({ I }) => {
    //test 1 - page load
    I.amOnPage('https://inforiver-webtest-premium.azurewebsites.net/?csvLocation=CF_REG-03.csv&config=CF_REG-03.json&URLLoad=true');
    console.log('1.page loaded')

    // test 2 - making an element bold
    I.seeElement(`(//span[@role='cell' and text()='14.60'])[1]`);
    console.log("2.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='14.60'])[1]`);
    I.wait(1);
    I.waitForElement("//div[@data-label='Home']//span[contains(@class,'bold')]", 5);
    I.moveCursorTo("//div[@data-label='Home']//span[contains(@class,'bold')]");
    I.wait(1);
    I.click("//div[@data-label='Home']//span[contains(@class,'bold')]");
    console.log("2.2 bold option clicked");
    I.wait(1);
    I.seeElement("(//span[@role='cell' and text()='14.60' and contains(@style, 'font-weight')])[1]");
    console.log("2.3 cell value bolded");

    //test 3 - making an element underlined
    I.seeElement(`(//span[@role='cell' and text()='81.57'])[1]`);
    console.log("3.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='81.57'])[1]`);
    I.wait(1);
    I.waitForElement("//div[@data-label = 'Home']//span[contains(@class,'underline')]", 5);
    I.moveCursorTo("//div[@data-label = 'Home']//span[contains(@class,'underline')]");
    I.wait(1);
    I.click("//div[@data-label = 'Home']//span[contains(@class,'underline')]");
    console.log("3.2 underline option clicked");
    I.wait(1);
    I.seeElement("(//span[@role='cell' and text()='81.57' and contains(@style, 'text-decoration-line: underline')])[1]");
    console.log("3.3 cell value underlined");

    //test 4 - making an element italic
    I.seeElement(`(//span[@role='cell' and text()='2.34'])[1]`);
    console.log("4.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='2.34'])[1]`);
    I.wait(1);
    I.waitForElement("//div[@data-label = 'Home']//span[contains(@class,'italic')]", 5);
    I.moveCursorTo("//div[@data-label = 'Home']//span[contains(@class,'italic')]");
    I.wait(1);
    I.click("//div[@data-label = 'Home']//span[contains(@class,'italic')]");
    console.log("4.2 italic option clicked");
    I.wait(1);
    I.seeElement("(//span[@role='cell' and text()='2.34' and contains(@style, 'font-style: italic')])[1]");
    console.log("4.3 cell value italicized");

    //test 5 - coloring a cell
    I.seeElement(`(//span[@role='cell' and text()='9.65'])[1]`);
    console.log("5.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='9.65'])[1]`);
    I.wait(1);
    //5.1 recent color shown in icon
    console.log("5.1 recent color");
    I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[1]", 5);
    I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[1]");
    I.wait(1);
    I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[1]");
    console.log("5.1.1 fill color>recent color clicked");
    I.wait(1);
    I.seeElement("((//span[@role='cell' and text()='9.65'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(255, 255, 0)')]");
    console.log("5.1.2 cell value colored from recent color shown in icon");

})