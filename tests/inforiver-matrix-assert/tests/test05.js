const MainPage = require('../pages/MainPage')

Feature('Test 1 - asserting main page and elements')
Before(async()=>{
    await MainPage.pageLoad()
})
Scenario('Scenario 1 - visibility of elements', async() =>{
    await MainPage.assertTableHeading()//table heading
    await MainPage.assertTableHeaders()//table headers
    await MainPage.assertCells()       //table cells
    await MainPage.assertTabList()     //tab lists
})
