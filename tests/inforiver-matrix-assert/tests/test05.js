const MainPageAssert = require('../pages/MainPageAssert')

Feature('Test 1 - asserting main page and elements')
Before(async()=>{
    await MainPageAssert.pageLoad()
})
Scenario('Scenario 1 - visibility of elements', async() =>{
    await MainPageAssert.assertTableHeading()//table heading
    await MainPageAssert.assertTableHeaders()//table headers
    await MainPageAssert.assertCells()       //table cells
    await MainPageAssert.assertTabList()     //tab lists
})
