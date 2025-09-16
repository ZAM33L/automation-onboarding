const FillColor = require('../pages/FillColor')

Feature('Fill Color')

Before(async()=>{
    FillColor.pageLoad()
})

Scenario('Fill color icon default', async()=>{
    await FillColor.FillColorIconDefault()
})