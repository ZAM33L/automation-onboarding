const assert = require('assert');

Feature('ToDo');

Scenario('todo item activities', async({ I }) => {
  //create an item
  I.amOnPage('https://todomvc.com/examples/react/dist/');
  I.dontSeeElement('.todo-count')
  I.fillField(`//input[@id='todo-input']`, 'Write a guide');
  I.pressKey('Enter');
  I.fillField(`//input[@id='todo-input']`, 'Correct the guide');
  I.pressKey('Enter');
  I.fillField(`//input[@id='todo-input']`, 'Publish the guide');
  I.pressKey('Enter');
  I.fillField(`//input[@id='todo-input']`, 'Promote the guide');
  I.pressKey('Enter');

  //visibility of items
  I.seeElement(`//li[@data-testid='todo-item']//label[text()='Write a guide']`);
  I.seeElement(`//li[@data-testid='todo-item']//label[text()='Correct the guide']`);
  I.seeElement(`//li[@data-testid='todo-item']//label[text()='Publish the guide']`);
  I.seeElement(`//li[@data-testid='todo-item']//label[text()='Promote the guide']`);

  //checking no of items totally
  I.see('4 items left', '.todo-count');
  
  //complete an item
  I.moveCursorTo(`//li[@data-testid = 'todo-item']//*[text()='Correct the guide']`);
  I.click(`//li[@data-testid = 'todo-item']//label[text()='Correct the guide']/preceding-sibling::input`);  
  I.seeElement(`//label[text()='Correct the guide']/ancestor::li[@data-testid = 'todo-item'  and @class='completed']`);
  
  //checking no of items totally
  I.see('3 items left', '.todo-count');

  //delete an item
  I.moveCursorTo(`//li[@data-testid = 'todo-item']//*[text()='Publish the guide']`);
  I.click(`//li[@data-testid = 'todo-item']//label[text()='Publish the guide']/following-sibling::button`)
  I.dontSeeElement(`//li[@data-testid = 'todo-item']//*[text()='Publish the guide']`)
  
  //checking no of items totally
  I.see('2 items left', '.todo-count');

  //edit an item
  I.moveCursorTo(`//li[@data-testid = 'todo-item']//*[text()='Promote the guide']`);
  I.doubleClick(`//li[@data-testid='todo-item']//label[text()='Promote the guide']/parent::div`);
  I.seeElementInDOM(`//li[@data-testid='todo-item']//input[@data-testid='text-input']`);
  I.fillField(`//li[@data-testid='todo-item']//input[@data-testid='text-input']`,'updated');
  I.pressKey('Enter')
  
  //checking the visibility of edited and removed text of item
  I.seeElement(`//li[@data-testid='todo-item']//label[text()='updated']`);
  I.dontSee(`//li[@data-testid='todo-item']//label[text()='Promote the guide']`);

  //checking no of items in "all"
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  const count1 = await I.grabNumberOfVisibleElements(`//ul[@class='todo-list']//li`)
  assert.strictEqual(count1, 3)

  //checking no of items in "active"
  I.click(`//ul[@class='filters']//li//a[@href='#/active']`)
  const count2 = await I.grabNumberOfVisibleElements(`//ul[@class='todo-list']//li`)
  assert.strictEqual(count2, 2)

  //checking no of items in "completed"
  I.click(`//ul[@class='filters']//li//a[@href='#/completed']`)
  const count3 = await I.grabNumberOfVisibleElements(`//ul[@class='todo-list']//li`)
  assert.strictEqual(count3, 1)

  //in "all tab"
  //toggling all as checked
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 3);
  I.see('0 items left', '.todo-count');

  //untoggling all
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.see('3 items left', '.todo-count'); 

  //checking an item
  I.moveCursorTo(`//li[@data-testid = 'todo-item']//*[text()='Write a guide']`);
  I.click(`//li[@data-testid = 'todo-item']//label[text()='Write a guide']/preceding-sibling::input`);  
  I.seeElement(`//label[text()='Write a guide']/ancestor::li[@data-testid = 'todo-item'  and @class='completed']`);

  //clear completed one
  I.click(`//ul[@class='filters']/following-sibling::button[text()='Clear completed']`)
  I.dontSeeElement(`//li[@data-testid = 'todo-item']//*[text()='Write a guide']`)
  I.see('2 items left', '.todo-count');
  
  //checking all elements
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 2);
  I.seeElement(`//span[text()='0 items left!']`);

  //clear completed one
  I.click(`//ul[@class='filters']/following-sibling::button[text()='Clear completed']`)
  I.dontSeeElement(`//li[@data-testid = 'todo-item']//*[text()='Correct the guide']`)
  I.dontSeeElement(`//li[@data-testid = 'todo-item']//*[text()='Publish the guide']`)
  I.dontSeeElement(`//span[text()='0 items left!']`);

  //repeating the addition of items
  I.fillField(`//input[@id='todo-input']`, 'Write a guide');
  I.pressKey('Enter');
  I.fillField(`//input[@id='todo-input']`, 'Correct the guide');
  I.pressKey('Enter');
  I.fillField(`//input[@id='todo-input']`, 'Publish the guide');
  I.pressKey('Enter');
  I.fillField(`//input[@id='todo-input']`, 'Promote the guide');
  I.pressKey('Enter');

  //repeating visibility of items
  I.seeElement(`//li[@data-testid='todo-item']//label[text()='Write a guide']`);
  I.seeElement(`//li[@data-testid='todo-item']//label[text()='Correct the guide']`);
  I.seeElement(`//li[@data-testid='todo-item']//label[text()='Publish the guide']`);
  I.seeElement(`//li[@data-testid='todo-item']//label[text()='Promote the guide']`);

  //in "active" tab
  //checking "clear completed" and "toggle all and untoggle all"
  //toggle all
  I.click(`//ul[@class='filters']//li//a[@href='#/active']`)

  //checking the count first
  const countActive = await I.grabNumberOfVisibleElements(`//ul[@class='todo-list']//li`)
  assert.strictEqual(countActive, 4)

  //toggle all in active
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)

  //checking visibility
  I.dontSeeElement(`//li[@data-testid = 'todo-item']`)
  I.seeNumberOfVisibleElements(`//li[@data-testid = 'todo-item' and @class='completed']`, 0);
  I.seeElement(`//span[text()='0 items left!']`);

  //checking visibility in all tab
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 4);
  I.see('0 items left', '.todo-count');
  //checking visibility in "completed" tab
  I.click(`//ul[@class='filters']//li//a[@href='#/completed']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 4);
  I.see('0 items left', '.todo-count');

  //clicking "clear completed"
  I.click(`//ul[@class='filters']/following-sibling::button[text()='Clear completed']`)
  I.dontSeeElement(`//span[text()='0 items left!']`);

  //inserting again

  //in "completed" tab
  //checking "clear completed" and "toggle all and untoggle all"
  //toggle all
  I.fillField(`//input[@id='todo-input']`, 'Write a guide');
  I.pressKey('Enter');
  I.fillField(`//input[@id='todo-input']`, 'Correct the guide');
  I.pressKey('Enter');

  //checking if completed items exist
  I.click(`//ul[@class='filters']//li//a[@href='#/completed']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 0);
  I.see('2 items left', '.todo-count');

  //toggling the elements in "all" to completed
  //checking first
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item']", 2);
  I.see('2 items left', '.todo-count');
  //toggling
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 2);
  I.see('0 items left', '.todo-count');
  //coming to completed tab
  I.click(`//ul[@class='filters']//li//a[@href='#/completed']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 2);
  I.see('0 items left', '.todo-count');
  //pressing "clear completed"
  I.click(`//ul[@class='filters']/following-sibling::button[text()='Clear completed']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 0);
  I.dontSeeElement(`//span[text()='0 items left!']`);

  //exploring untoggle
  I.fillField(`//input[@id='todo-input']`, 'Write a guide');
  I.pressKey('Enter');
  I.fillField(`//input[@id='todo-input']`, 'Correct the guide');
  I.pressKey('Enter');

  //checking if completed items exist
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 0);
  I.see('2 items left', '.todo-count');
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 2);
  I.see('0 items left', '.todo-count');
  I.click(`//ul[@class='filters']//li//a[@href='#/completed']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 2);
  I.see('0 items left', '.todo-count');

  //coming to all and untoggling
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.seeNumberOfVisibleElements(`//li[@data-testid = 'todo-item']`, 2);
  I.see('2 items left', '.todo-count');
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 0);

  //also via "completed"
  //being in all page
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 2);
  I.see('0 items left', '.todo-count');
  I.click(`//ul[@class='filters']//li//a[@href='#/active']`)
  I.seeNumberOfVisibleElements(`//li[@data-testid = 'todo-item']`, 0);
  I.see('0 items left', '.todo-count');
  I.click(`//ul[@class='filters']//li//a[@href='#/completed']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 2);
  I.see('0 items left', '.todo-count');

  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item' and @class='completed']", 0);
  I.see('2 items left', '.todo-count');
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.seeNumberOfVisibleElements(`//li[@data-testid = 'todo-item']`, 2);
  I.see('2 items left', '.todo-count');
  I.click(`//ul[@class='filters']//li//a[@href='#/active']`)
  I.seeNumberOfVisibleElements(`//li[@data-testid = 'todo-item']`, 2);
  I.see('2 items left', '.todo-count');

  //also via "active"
  I.click(`//ul[@class='filters']//li//a[@href='#/active']`)
  I.seeNumberOfVisibleElements(`//li[@data-testid = 'todo-item']`, 2);
  I.see('2 items left', '.todo-count');
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item']", 0);
  I.see('0 items left', '.todo-count');
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.seeNumberOfVisibleElements(`//li[@data-testid = 'todo-item' and @class='completed']`, 2);
  I.see('0 items left', '.todo-count');
  I.click(`//ul[@class='filters']//li//a[@href='#/completed']`)
  I.seeNumberOfVisibleElements(`//li[@data-testid = 'todo-item' and @class='completed']`, 2);
  I.see('0 items left', '.todo-count');
  //untoggling for other activity
  I.moveCursorTo(`//div[@class='toggle-all-container']`)
  I.click(`//input[@id='toggle-all']`)
  I.seeNumberOfVisibleElements("//li[@data-testid = 'todo-item']", 0);
  //going back to "all"
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.seeNumberOfVisibleElements(`//li[@data-testid = 'todo-item']`, 2);
  I.see('2 items left', '.todo-count');
  //last two entries are
  //write a guide
  //correct the guide

  //now completing a specific item
  //complete an item
  I.moveCursorTo(`//li[@data-testid = 'todo-item']//*[text()='Correct the guide']`);
  I.click(`//li[@data-testid = 'todo-item']//label[text()='Correct the guide']/preceding-sibling::input`);  
  I.seeElement(`//label[text()='Correct the guide']/ancestor::li[@data-testid = 'todo-item'  and @class='completed']`);
  I.click(`//ul[@class='filters']//li//a[@href='#/active']`)
  I.dontSeeElement(`//label[text()='Correct the guide']/ancestor::li[@data-testid = 'todo-item'  and @class='completed']`);
  I.click(`//ul[@class='filters']//li//a[@href='#/completed']`)
  I.seeElement(`//label[text()='Correct the guide']/ancestor::li[@data-testid = 'todo-item'  and @class='completed']`);
  //uncompleting that specific item
  I.moveCursorTo(`//li[@data-testid = 'todo-item']//*[text()='Correct the guide']`);
  I.click(`//li[@data-testid = 'todo-item']//label[text()='Correct the guide']/preceding-sibling::input`);
  I.dontSeeElement(`//label[text()='Correct the guide']/ancestor::li[@data-testid = 'todo-item'  and @class='completed']`);
  I.see('2 items left', '.todo-count');
  I.click(`//ul[@class='filters']//li//a[@href='#/active']`)
  I.seeElement(`//label[text()='Correct the guide']/ancestor::li[@data-testid = 'todo-item']`);
  I.see('2 items left', '.todo-count');
  I.click(`//ul[@class='filters']//li//a[@href='#/']`)
  I.seeElement(`//label[text()='Correct the guide']/ancestor::li[@data-testid = 'todo-item']`);
  I.see('2 items left', '.todo-count');

  //deleting spcific item and verifying its visibility
  //delete an item in "all" page
  I.moveCursorTo(`//li[@data-testid = 'todo-item']//*[text()='Correct the guide']`);
  I.click(`//li[@data-testid = 'todo-item']//label[text()='Correct the guide']/following-sibling::button`)
  I.dontSeeElement(`//li[@data-testid = 'todo-item']//*[text()='Correct the guide']`)
  I.see('1 item left', '.todo-count');
  //checking in other pages
  I.click(`//ul[@class='filters']//li//a[@href='#/active']`)
  I.dontSeeElement(`//li[@data-testid = 'todo-item']//*[text()='Correct the guide']`)
  I.see('1 item left', '.todo-count');
  //
  I.click(`//ul[@class='filters']//li//a[@href='#/completed']`)
  I.dontSeeElement(`//li[@data-testid = 'todo-item']//*[text()='Correct the guide']`)
  I.see('1 item left', '.todo-count');
  
  
});


