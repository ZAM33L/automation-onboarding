const FillColor = require('../pages/FillColor')

Feature('Fill Color')

Before(async()=>{
    FillColor.pageLoad()
})

Scenario('Fill color options', async()=>{
    await FillColor.FillColorIconDefault()
    await FillColor.FillColorModalOption()
})