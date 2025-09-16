const mainPage = require('../pages/mainPage')

Feature('Test 1 - main page and visibility of elements')
Before(async()=>{
    await mainPage.pageLoad()
})
Scenario('Scenario 1 - visibility of elements', async() =>{
    await mainPage.visibleTableHeading()//table heading
    await mainPage.visibleTableHeaders()//table headers
    await mainPage.visibleCells()       //table cells
    await mainPage.visibleTabList()     //tab lists
})
