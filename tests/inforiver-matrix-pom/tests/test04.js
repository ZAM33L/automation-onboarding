const FontColor = require('../pages/FontColor')

Feature('Font Color')

Before(async()=>{
    FontColor.pageLoad()
})

Scenario('Font color icon default', async()=>{
    await FontColor.FontColorIconDefault()
    await FontColor.FontColorModalOption()
    await FontColor.FontColorCustomColor()
})