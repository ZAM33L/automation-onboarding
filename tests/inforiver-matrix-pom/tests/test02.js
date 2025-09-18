const mainPage = require('../pages/mainPage')
const StyleSegment = require('../pages/StyleSegment')

Feature('Test 2 - style segment')
Before(async()=>{
    await StyleSegment.pageLoad()
})
Scenario('Bold , Italic , Underline', async()=>{
    await StyleSegment.makeCellBold()
    await StyleSegment.makeCellItalic()
    await StyleSegment.makeCellUnderlined()
})