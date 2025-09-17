const FontColorAssert = require('../pages/FontColorAssert')

Feature('Font Color Assert')

Before(async()=>{
    FontColorAssert.pageLoad()
})

Scenario('Font color options', async()=>{
    await FontColorAssert.assertFontColorIconDefault()
    await FontColorAssert.assertFontColorModalOption()
    await FontColorAssert.assertFontColorCustomColor()
})