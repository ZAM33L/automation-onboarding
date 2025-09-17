const xpaths08 = require('../xpaths/xpaths08')
const data08 = require('../data/data08')
const { I } = inject()
const assert = require('assert')

class FontColorAssert {
    async pageLoad() {
        await I.amOnPage(data08.webPage);
        await I.say("01 . page loaded")
    }
    //test 6 - coloring a font
    //6.1 recent color shown in icon
    async assertFontColorIconDefault() {
        await I.wait(1);
        await I.seeElement(`(//span[@role='cell' and text()='${data08.matrixCellValue04}'])`);
        await I.click(`(//span[@role='cell' and text()='${data08.matrixCellValue04}'])`);
        await I.wait(1);
        //

        await I.waitForElement(xpaths08.fontcolorIcon, 5);
        await I.moveCursorTo(xpaths08.fontcolorIcon);
        await I.wait(1);
        await I.click(xpaths08.fontcolorIcon);

        await I.wait(1);
        //plain assertion
        // await I.seeElement(`(//span[@role='cell' and text()='${data08.matrixCellValue04}'])[1][contains(@style, 'color: rgb(255, 0, 10)')]`);

        //strict assertion
        const actualColorFont = await I.grabAttributeFrom(`(//span[@role='cell' and text()='${data08.matrixCellValue04}'])[1]`,'style')
        const expectedColorFont = actualColorFont.includes(data08.defaultFontColorStyle)
        assert.equal(expectedColorFont,true,'error - value mismatch')
    }

    async assertFontColorModalOption() {
        //my code
        //6.2 color paltte modal
        await I.wait(1);
        await I.seeElement(`(//span[@role='cell' and text()='${data08.matrixCellValue07}'])[1]`);

        await I.click(`(//span[@role='cell' and text()='${data08.matrixCellValue07}'])[1]`);
        await I.wait(1);
        //

        await I.waitForElement(xpaths08.fontColorDropdownArrow, 5);
        await I.moveCursorTo(xpaths08.fontColorDropdownArrow);
        await I.wait(1);
        await I.click(xpaths08.fontColorDropdownArrow);

        await I.wait(1);
        await I.seeElement(xpaths08.fontColorModal);

        //
        await I.waitForElement(xpaths08.fontColorPaletteColor, 5);
        await I.moveCursorTo(xpaths08.fontColorPaletteColor);
        await I.wait(1);
        await I.click(xpaths08.fontColorPaletteColor);

        await I.wait(1);

        //plain assertion
        // await I.seeElement(`(//span[@role='cell' and text()='${data08.matrixCellValue07}'])[1][contains(@style, 'color: rgb(17, 141, 255)')]`);
        const actualColorModalFont = await I.grabAttributeFrom(`(//span[@role='cell' and text()='${data08.matrixCellValue07}'])[1]`,'style')
        const expectedColorModalFont  = actualColorModalFont.includes(data08.paletteFontColorRGB)
        assert.strictEqual(expectedColorModalFont,true,'error - value mismatch')

    }

    async assertFontColorCustomColor() {
        I.seeElement(`(//span[@role='cell' and text()='${data08.matrixCellValue08}'])[1]`);

        I.click(`(//span[@role='cell' and text()='${data08.matrixCellValue08}'])[1]`);
        I.wait(1);

        I.waitForElement(xpaths08.fontColorDropdownArrow, 5);
        I.moveCursorTo(xpaths08.fontColorDropdownArrow);
        I.wait(1);
        I.click(xpaths08.fontColorDropdownArrow);

        I.wait(1);
        I.seeElement(xpaths08.fontColorModal);

        I.waitForElement(xpaths08.fontColorCustomColorBtn, 5);
        I.moveCursorTo(xpaths08.fontColorCustomColorBtn);
        I.wait(1);
        I.click(xpaths08.fontColorCustomColorBtn);
        
        I.wait(1);
        I.seeElement(xpaths08.fontColorCustomColorModal)
        //entering type

        I.waitForElement(xpaths08.fontColorCustomColorTypeDiv, 5);
        I.moveCursorTo(xpaths08.fontColorCustomColorTypeDiv);
        I.wait(1);
        I.click(xpaths08.fontColorCustomColorTypeDiv);

        I.wait(1);
        I.seeElement(xpaths08.fontColorCustomColorTypeDivMenu);

        const combinedXPath = xpaths08.fontColorCustomColorTypeDivMenu + xpaths08.fontColorCustomColorTypeDivMenuOption;
        I.seeElement(combinedXPath);
        I.click(combinedXPath)
        I.waitont

        //
        I.seeElement(xpaths08.fontColorCustomColorTypeDivMenuResult)

        //entering value

        I.waitForElement(xpaths08.fontColorCustomColorColorCodeInput, 5);
        I.moveCursorTo(xpaths08.fontColorCustomColorColorCodeInput);
        I.wait(1);
        I.click(xpaths08.fontColorCustomColorColorCodeInput);

        I.wait(1);
        I.fillField(xpaths08.fontColorCustomColorColorCodeInput,data08.paletteColor);

        I.seeElement(xpaths08.fontColorModalSaveBtn);
        I.click(xpaths08.fontColorModalSaveBtn);

        //plain assertion
        // I.seeElement(`(//span[@role='cell' and text()='${data08.matrixCellValue08}'])[1][contains(@style, 'color: rgb(17, 141, 255)')]`);

        const actualColorCustomFont = await I.grabAttributeFrom(`(//span[@role='cell' and text()='${data08.matrixCellValue08}'])[1]`,'style')
        const expectedColorCustomFont  = actualColorCustomFont.includes(data08.paletteFontColorRGB)
        assert.strictEqual(expectedColorCustomFont,true,'error - value mismatch')
    }

}

module.exports = new FontColorAssert()