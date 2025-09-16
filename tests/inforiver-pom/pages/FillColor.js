const xpaths03

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
    
    // //5.2
    // //with helper function
    // // Hex to RGB converter function
    // function hexToRgb(hex) {
    //     hex = hex.replace(/^#/, '');
    //     if (hex.length === 3) {
    //         hex = hex.split('').map(char => char + char).join('');
    //     }
    //     const bigint = parseInt(hex, 16);
    //     const r = (bigint >> 16) & 255;
    //     const g = (bigint >> 8) & 255;
    //     const b = bigint & 255;
    //     return `rgb(${r}, ${g}, ${b})`;
    // }

    // const fillColorHex = '#118dff';
    // const fillColorRgb = hexToRgb(fillColorHex);

    // //5.2 color palette modal
    // I.seeElement(`(//span[@role='cell' and text()='63.93'])[1]`);
    // console.log("5.1 a cell in matrix loaded");
    // I.click(`(//span[@role='cell' and text()='63.93'])[1]`);
    // I.wait(1);

    // console.log("5.2 color palette modal");
    // I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]", 5);
    // I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    // I.wait(1);
    // I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    // console.log("5.2.1 fill color>dropdown arrow clicked clicked");
    // I.wait(1);
    // I.seeElement("//div[@class='bf-ui-colopicker-modal']");
    // console.log("5.2.2 color palette opened");

    // I.waitForElement(`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${fillColorHex}']`, 5);
    // I.moveCursorTo(`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${fillColorHex}']`);
    // I.wait(1);
    // I.click(`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${fillColorHex}']`);
    // console.log("5.2.3 fill color>dropdown>white color clicked");
    // I.wait(1);

    // // Use dynamic rgb in style attribute filter
    // I.seeElement(`((//span[@role='cell' and text()='63.93'])[1]/parent::div/parent::div)[contains(@style, 'background: ${fillColorRgb}')]`);
    // console.log("5.2.4 cell value colored from dropdown icon");

    // //5.3
    // // Helper function to convert hex to rgb string
    // // Helper function renamed to hexToRgb2
    // function hexToRgb2(hex) {
    //     hex = hex.replace(/^#/, '');
    //     if (hex.length === 3) {
    //         hex = hex.split('').map(c => c + c).join('');
    //     }
    //     const bigint = parseInt(hex, 16);
    //     const r = (bigint >> 16) & 255;
    //     const g = (bigint >> 8) & 255;
    //     const b = bigint & 255;
    //     return `rgb(${r}, ${g}, ${b})`;
    // }

    // // Updated variables with '2' suffix
    // const fillColorHex2 = '#118dff';
    // const fillColorRgb2 = hexToRgb2(fillColorHex2);

    // // Test script
    // I.seeElement(`(//span[@role='cell' and text()='1.98'])[1]`);
    // console.log("5.1 a cell in matrix loaded");
    // I.click(`(//span[@role='cell' and text()='1.98'])[1]`);
    // I.wait(1);

    // console.log("5.3 color palette modal");
    // I.waitForElement("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]", 5);
    // I.moveCursorTo("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    // I.wait(1);
    // I.click("(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]");
    // console.log("5.3.1 fill color>dropdown arrow clicked clicked");
    // I.wait(1);
    // I.seeElement("//div[@class='bf-ui-colopicker-modal']");
    // console.log("5.3.2 color palette opened");

    // console.log("5.3.3 custom color");
    // I.waitForElement("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]", 5);
    // I.moveCursorTo("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]");
    // I.wait(1);
    // I.click("//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]");
    // console.log("5.3.3 fill color>dropdown arrow > custom color clicked");
    // I.wait(1);
    // I.seeElement("//div[contains(@class,'bf-ui-colopicker-custom-modal')]");
    // console.log("5.3.4 custom color modal opened");

    // console.log("5.3.5 custom color");
    // I.waitForElement("//div[@aria-haspopup='listbox']", 5);
    // I.moveCursorTo("//div[@aria-haspopup='listbox']");
    // I.wait(1);
    // I.click("//div[@aria-haspopup='listbox']");
    // console.log("5.3.6 fill color>dropdown arrow > custom color > type clicked");
    // I.wait(1);
    // I.seeElement("//div[@role='menu']");
    // I.click("//div[@role='menu']//span[text()='Hex']");
    // I.wait(1);
    // console.log("5.3.8 type clicked");

    // I.seeElement(`//div[contains(@class,'dropdown-placeholder is-selected') and text()='Hex']`);
    // console.log("5.3.9 type selected");

    // console.log("5.3.10 custom color>value");
    // I.waitForElement("//div[@aria-haspopup='listbox']/../following-sibling::div/input", 5);
    // I.moveCursorTo("//div[@aria-haspopup='listbox']/../following-sibling::div/input");
    // I.wait(1);
    // I.click("//div[@aria-haspopup='listbox']/../following-sibling::div/input");
    // console.log("5.3.11 fill color>dropdown arrow > custom color > code input clicked");
    // I.wait(1);
    // I.fillField("//div[@aria-haspopup='listbox']/../following-sibling::div/input", fillColorHex2);
    // console.log("5.3.12 custom color>code typed");

    // I.seeElement(`//button[text()='Save']`);
    // I.click(`//button[text()='Save']`);

    // I.seeElement(`((//span[@role='cell' and text()='1.98'])[1]/parent::div/parent::div)[contains(@style, 'background: ${fillColorRgb2}')]`);
    // console.log("5.3.13 cell value colored from dropdown icon");
