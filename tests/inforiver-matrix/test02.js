const assert = require('assert');

Feature('inforiver matrix - test 2');

Scenario('basic actions', async ({ I }) => {
    //test 1 - page load
    I.amOnPage('https://inforiver-webtest-premium.azurewebsites.net/?csvLocation=CF_REG-03.csv&config=CF_REG-03.json&URLLoad=true');
    console.log('1.page loaded')

    // test 2 - making an element bold
    I.seeElement(`(//span[@role='cell' and text()='14.60'])[1]`);
    console.log("2.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='14.60'])[1]`);
    I.wait(1);
    I.waitForElement("//div[@data-label='Home']//span[contains(@class,'bold')]", 5);
    I.moveCursorTo("//div[@data-label='Home']//span[contains(@class,'bold')]");
    I.wait(1);
    I.click("//div[@data-label='Home']//span[contains(@class,'bold')]");
    console.log("2.2 bold option clicked");
    I.wait(1);
    I.seeElement("(//span[@role='cell' and text()='14.60' and contains(@style, 'font-weight')])[1]");
    console.log("2.3 cell value bolded");

    //test 3 - making an element underlined
    I.seeElement(`(//span[@role='cell' and text()='81.57'])[1]`);
    console.log("3.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='81.57'])[1]`);
    I.wait(1);
    I.waitForElement("//div[@data-label = 'Home']//span[contains(@class,'underline')]", 5);
    I.moveCursorTo("//div[@data-label = 'Home']//span[contains(@class,'underline')]");
    I.wait(1);
    I.click("//div[@data-label = 'Home']//span[contains(@class,'underline')]");
    console.log("3.2 underline option clicked");
    I.wait(1);
    I.seeElement("(//span[@role='cell' and text()='81.57' and contains(@style, 'text-decoration-line: underline')])[1]");
    console.log("3.3 cell value underlined");

    //test 4 - making an element italic
    I.seeElement(`(//span[@role='cell' and text()='2.34'])[1]`);
    console.log("4.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='2.34'])[1]`);
    I.wait(1);
    I.waitForElement("//div[@data-label = 'Home']//span[contains(@class,'italic')]", 5);
    I.moveCursorTo("//div[@data-label = 'Home']//span[contains(@class,'italic')]");
    I.wait(1);
    I.click("//div[@data-label = 'Home']//span[contains(@class,'italic')]");
    console.log("4.2 italic option clicked");
    I.wait(1);
    I.seeElement("(//span[@role='cell' and text()='2.34' and contains(@style, 'font-style: italic')])[1]");
    console.log("4.3 cell value italicized");

    //test 5 - coloring a cell
    //5.1 recent color shown in icon
    I.seeElement(`(//span[@role='cell' and text()='9.65'])[1]`);
    console.log("5.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='9.65'])[1]`);
    I.wait(1);
    //
    console.log("5.1 recent color");
    I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[1]", 5);
    I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[1]");
    I.wait(1);
    I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[1]");
    console.log("5.1.1 fill color>recent color clicked");
    I.wait(1);
    I.seeElement("((//span[@role='cell' and text()='9.65'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(255, 255, 0)')]");
    console.log("5.1.2 cell value colored from recent color shown in icon");
    //my code
    //  //5.2 color paltte modal
    // I.seeElement(`(//span[@role='cell' and text()='63.93'])[1]`);
    // console.log("5.1 a cell in matrix loaded");
    // I.click(`(//span[@role='cell' and text()='63.93'])[1]`);
    // I.wait(1);
    // //
    // console.log("5.2 color palette modal");
    // I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]", 5);
    // I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    // I.wait(1);
    // I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    // console.log("5.2.1 fill color>dropdown arrow clicked clicked");
    // I.wait(1);
    // I.seeElement("//div[@class='bf-ui-colopicker-modal']");
    // console.log("5.2.2 color palette opened");
    // //
    // I.waitForElement("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='#118dff']", 5);
    // I.moveCursorTo("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='#118dff']");
    // I.wait(1);
    // I.click("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='#118dff']");
    // console.log("5.2.3 fill color>dropdown>white color clicked");
    // I.wait(1);
    // //
    // I.seeElement(`((//span[@role='cell' and text()='63.93'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(17, 141, 255)')]`);
    // console.log("5.2.4 cell value colored from dropdown icon");
    
    //5.2
    //with helper function
    // Hex to RGB converter function
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    }

    const fillColorHex = '#118dff';
    const fillColorRgb = hexToRgb(fillColorHex);

    //5.2 color palette modal
    I.seeElement(`(//span[@role='cell' and text()='63.93'])[1]`);
    console.log("5.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='63.93'])[1]`);
    I.wait(1);

    console.log("5.2 color palette modal");
    I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]", 5);
    I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    I.wait(1);
    I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    console.log("5.2.1 fill color>dropdown arrow clicked clicked");
    I.wait(1);
    I.seeElement("//div[@class='bf-ui-colopicker-modal']");
    console.log("5.2.2 color palette opened");

    I.waitForElement(`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${fillColorHex}']`, 5);
    I.moveCursorTo(`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${fillColorHex}']`);
    I.wait(1);
    I.click(`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${fillColorHex}']`);
    console.log("5.2.3 fill color>dropdown>white color clicked");
    I.wait(1);

    // Use dynamic rgb in style attribute filter
    I.seeElement(`((//span[@role='cell' and text()='63.93'])[1]/parent::div/parent::div)[contains(@style, 'background: ${fillColorRgb}')]`);
    console.log("5.2.4 cell value colored from dropdown icon");

    //my code
    // //5.3 custom color option
    // I.seeElement(`(//span[@role='cell' and text()='1.98'])[1]`);
    // console.log("5.1 a cell in matrix loaded");
    // I.click(`(//span[@role='cell' and text()='1.98'])[1]`);
    // I.wait(1);
    // //
    // console.log("5.3 color palette modal");
    // I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]", 5);
    // I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    // I.wait(1);
    // I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    // console.log("5.3.1 fill color>dropdown arrow clicked clicked");
    // I.wait(1);
    // I.seeElement("//div[@class='bf-ui-colopicker-modal']");
    // console.log("5.3.2 color palette opened");
    // //clicking custom color
    // console.log("5.3.3 custom color");
    // I.waitForElement("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]", 5);
    // I.moveCursorTo("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]");
    // I.wait(1);
    // I.click("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]");
    // console.log("5.3.3 fill color>dropdown arrow > custom color  clicked");
    // I.wait(1);
    // I.seeElement("//div[contains(@class,'bf-ui-colopicker-custom-modal')]");
    // console.log("5.3.4 custom color modal opened");
    // //entering type
    // console.log("5.3.5 custom color");
    // I.waitForElement("//div[@aria-haspopup='listbox']", 5);
    // I.moveCursorTo("//div[@aria-haspopup='listbox']");
    // I.wait(1);
    // I.click("//div[@aria-haspopup='listbox']");
    // console.log("5.3.6 fill color>dropdown arrow > custom color > type clicked");
    // I.wait(1);
    // I.seeElement("//div[@role='menu']");
    // console.log("5.3.7 custom color>type>menu opened");
    // I.seeElement("//div[@role='menu']//span[text()='Hex']");
    // I.click("//div[@role='menu']//span[text()='Hex']")
    // I.wait(1)
    // console.log("5.3.8 type clicked")
    // //
    // I.seeElement(`//div[contains(@class,'dropdown-placeholder is-selected') and text()='Hex']`)
    // console.log("5.3.9 type selected")
    // //entering value
    // console.log("5.3.10 custom color>value");
    // I.waitForElement("//div[@aria-haspopup='listbox']/../following-sibling::div/input", 5);
    // I.moveCursorTo("//div[@aria-haspopup='listbox']/../following-sibling::div/input");
    // I.wait(1);
    // I.click("//div[@aria-haspopup='listbox']/../following-sibling::div/input");
    // console.log("5.3.11 fill color>dropdown arrow > custom color >code input clicked");
    // I.wait(1);
    // I.fillField("//div[@aria-haspopup='listbox']/../following-sibling::div/input", '#118dff');
    // console.log("5.3.12 custom color>code typed");
    // I.seeElement(`//button[text()='Save']`);
    // I.click(`//button[text()='Save']`)
    // //
    // I.seeElement(`((//span[@role='cell' and text()='1.98'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(17, 141, 255)')]`);
    // console.log("5.3.13 cell value colored from dropdown icon");

    //5.3
    // Helper function to convert hex to rgb string
    // Helper function renamed to hexToRgb2
    function hexToRgb2(hex) {
        hex = hex.replace(/^#/, '');
        if (hex.length === 3) {
            hex = hex.split('').map(c => c + c).join('');
        }
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Updated variables with '2' suffix
    const fillColorHex2 = '#118dff';
    const fillColorRgb2 = hexToRgb2(fillColorHex2);

    // Test script
    I.seeElement(`(//span[@role='cell' and text()='1.98'])[1]`);
    console.log("5.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='1.98'])[1]`);
    I.wait(1);

    console.log("5.3 color palette modal");
    I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]", 5);
    I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    I.wait(1);
    I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    console.log("5.3.1 fill color>dropdown arrow clicked clicked");
    I.wait(1);
    I.seeElement("//div[@class='bf-ui-colopicker-modal']");
    console.log("5.3.2 color palette opened");

    console.log("5.3.3 custom color");
    I.waitForElement("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]", 5);
    I.moveCursorTo("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]");
    I.wait(1);
    I.click("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]");
    console.log("5.3.3 fill color>dropdown arrow > custom color clicked");
    I.wait(1);
    I.seeElement("//div[contains(@class,'bf-ui-colopicker-custom-modal')]");
    console.log("5.3.4 custom color modal opened");

    console.log("5.3.5 custom color");
    I.waitForElement("//div[@aria-haspopup='listbox']", 5);
    I.moveCursorTo("//div[@aria-haspopup='listbox']");
    I.wait(1);
    I.click("//div[@aria-haspopup='listbox']");
    console.log("5.3.6 fill color>dropdown arrow > custom color > type clicked");
    I.wait(1);
    I.seeElement("//div[@role='menu']");
    I.click("//div[@role='menu']//span[text()='Hex']");
    I.wait(1);
    console.log("5.3.8 type clicked");

    I.seeElement(`//div[contains(@class,'dropdown-placeholder is-selected') and text()='Hex']`);
    console.log("5.3.9 type selected");

    console.log("5.3.10 custom color>value");
    I.waitForElement("//div[@aria-haspopup='listbox']/../following-sibling::div/input", 5);
    I.moveCursorTo("//div[@aria-haspopup='listbox']/../following-sibling::div/input");
    I.wait(1);
    I.click("//div[@aria-haspopup='listbox']/../following-sibling::div/input");
    console.log("5.3.11 fill color>dropdown arrow > custom color > code input clicked");
    I.wait(1);
    I.fillField("//div[@aria-haspopup='listbox']/../following-sibling::div/input", fillColorHex2);
    console.log("5.3.12 custom color>code typed");

    I.seeElement(`//button[text()='Save']`);
    I.click(`//button[text()='Save']`);

    I.seeElement(`((//span[@role='cell' and text()='1.98'])[1]/parent::div/parent::div)[contains(@style, 'background: ${fillColorRgb2}')]`);
    console.log("5.3.13 cell value colored from dropdown icon");

    //test 6 - font color
    //6.1 recent color shown in icon
    I.seeElement(`(//span[@role='cell' and text()='3.20'])[1]`);
    console.log("6.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='3.20'])[1]`);
    I.wait(1);
    //
    console.log("6.1 recent color");
    I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[3]", 5);
    I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[3]");
    I.wait(1);
    I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[3]");
    console.log("6.1.1 font color>recent color clicked");
    I.wait(1);
    I.seeElement("//span[@role='cell' and text()='3.20' and contains(@style, 'color: rgb(255, 0, 10)')]");
    console.log("6.1.2 cell value colored from recent color shown in icon");

    //6.2
    //with helper function
    // Hex to RGB converter function
    function hexToRgb3(hex) {
        hex = hex.replace(/^#/, '');
        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    }

    const fillColorHex3 = '#118dff';
    const fillColorRgb3 = hexToRgb3(fillColorHex);

    //6.2 color palette modal
    I.seeElement(`(//span[@role='cell' and text()='111.82'])[1]`);
    console.log("6.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='111.82'])[1]`);
    I.wait(1);

    console.log("6.2 color palette modal");
    I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[4]", 5);
    I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[4]");
    I.wait(1);
    I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[4]");
    console.log("6.2.1 fill color>dropdown arrow clicked clicked");
    I.wait(1);
    I.seeElement("//div[@class='bf-ui-colopicker-modal']");
    console.log("6.2.2 color palette opened");

    I.waitForElement(`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${fillColorHex3}']`, 5);
    I.moveCursorTo(`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${fillColorHex3}']`);
    I.wait(1);
    I.click(`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${fillColorHex3}']`);
    console.log("6.2.3 fill color>dropdown>white color clicked");
    I.wait(1);

    // Use dynamic rgb in style attribute filter
    I.seeElement(`//span[@role='cell' and text()='111.82' and contains(@style, 'color: ${fillColorRgb3}')]`);
    console.log("6.2.4 cell value colored from dropdown icon");

    
    //6.3
    // Helper function to convert hex to rgb string
    // Helper function renamed to hexToRgb2
    function hexToRgb4(hex) {
        hex = hex.replace(/^#/, '');
        if (hex.length === 3) {
            hex = hex.split('').map(c => c + c).join('');
        }
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Updated variables with '2' suffix
    const fillColorHex4 = '#118dff';
    const fillColorRgb4 = hexToRgb4(fillColorHex4);

    // Test script
    I.seeElement(`(//span[@role='cell' and text()='15.39'])[1]`);
    console.log("6.1 a cell in matrix loaded");
    I.click(`(//span[@role='cell' and text()='15.39'])[1]`);
    I.wait(1);

    console.log("6.3 color palette modal");
    I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[4]", 5);
    I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[4]");
    I.wait(1);
    I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[4]");
    console.log("6.3.1 fill color>dropdown arrow clicked clicked");
    I.wait(1);
    I.seeElement("//div[@class='bf-ui-colopicker-modal']");
    console.log("6.3.2 color palette opened");

    console.log("6.3.3 custom color");
    I.waitForElement("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]", 5);
    I.moveCursorTo("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]");
    I.wait(1);
    I.click("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]");
    console.log("6.3.3 fill color>dropdown arrow > custom color clicked");
    I.wait(1);
    I.seeElement("//div[contains(@class,'bf-ui-colopicker-custom-modal')]");
    console.log("6.3.4 custom color modal opened");

    console.log("6.3.5 custom color");
    I.waitForElement("//div[@aria-haspopup='listbox']", 5);
    I.moveCursorTo("//div[@aria-haspopup='listbox']");
    I.wait(1);
    I.click("//div[@aria-haspopup='listbox']");
    console.log("6.3.6 fill color>dropdown arrow > custom color > type clicked");
    I.wait(1);
    I.seeElement("//div[@role='menu']");
    I.click("//div[@role='menu']//span[text()='Hex']");
    I.wait(1);
    console.log("6.3.8 type clicked");

    I.seeElement(`//div[contains(@class,'dropdown-placeholder is-selected') and text()='Hex']`);
    console.log("6.3.9 type selected");

    console.log("6.3.10 custom color>value");
    I.waitForElement("//div[@aria-haspopup='listbox']/../following-sibling::div/input", 5);
    I.moveCursorTo("//div[@aria-haspopup='listbox']/../following-sibling::div/input");
    I.wait(1);
    I.click("//div[@aria-haspopup='listbox']/../following-sibling::div/input");
    console.log("6.3.11 fill color>dropdown arrow > custom color > code input clicked");
    I.wait(1);
    I.fillField("//div[@aria-haspopup='listbox']/../following-sibling::div/input", fillColorHex4);
    console.log("6.3.12 custom color>code typed");

    I.seeElement(`//button[text()='Save']`);
    I.click(`//button[text()='Save']`);

    I.seeElement(`//span[@role='cell' and text()='15.39' and contains(@style, 'color: ${fillColorRgb4}')]`);
    console.log("6.3.13 cell value colored from dropdown icon");

})