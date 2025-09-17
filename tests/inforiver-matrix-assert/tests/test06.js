
const StyleSegmentAssert = require('../pages/StyleSegmentAssert')

Feature('Test 2 - style segment assert')
Before(async()=>{
    await StyleSegmentAssert.pageLoad()
})
Scenario('Bold , Italic , Underline', async()=>{
    await StyleSegmentAssert.assertCellBold()
    await StyleSegmentAssert.assertCellItalic()
    await StyleSegmentAssert.assertCellUnderlined()
})