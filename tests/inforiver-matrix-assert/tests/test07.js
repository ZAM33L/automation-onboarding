const FillColorAssert = require('../pages/FillColorAssert')

Feature('Fill Color Assert')

Before(async()=>{
    FillColorAssert.pageLoad()
})

Scenario('Fill color options', async()=>{
    await FillColorAssert.assertFillColorIconDefault()
    await FillColorAssert.assertFillColorModalOption()
    await FillColorAssert.assertFillColorCustomColor()
})