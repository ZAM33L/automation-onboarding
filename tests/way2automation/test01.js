Feature('way2automation')

Scenario('scene 1', async ({I})=>{
    await I.amOnPage('http://way2automation.com/way2auto_jquery/datepicker.php#load_box')
    await I.wait(5)
    await I.switchTo(`//iframe[@src='datepicker/defult1.html']`)
    await I.waitForElement(`//input[@type = 'text' and @id='datepicker']`)
    await I.click(`//input[@type = 'text' and @id='datepicker']`)
    await I.fillField(`//input[@type = 'text' and @id='datepicker']`,'04/08/2025')
    await I.wait(5)
})

