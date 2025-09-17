const xpaths07 = require('../xpaths/xpaths07')
const data07 = require('../data/data07')
const { I } = inject()
const assert = require('assert')

class FillColorAssert {
    async pageLoad() {
        await I.amOnPage(data07.webPage);
        await I.say("01 . page loaded")
    }
    //test 5 - coloring a cell
    //5.1 recent color shown in icon
    async assertFillColorIconDefault() {
        await I.seeElement(`(//span[@role='cell' and text()='${data07.matrixCellValue03}'])[1]`);
        await I.click(`(//span[@role='cell' and text()='${data07.matrixCellValue03}'])[1]`);
        await I.wait(1);
        //

        await I.waitForElement(xpaths07.fillcolorIcon, 5);
        await I.moveCursorTo(xpaths07.fillcolorIcon);
        await I.wait(1);
        await I.click(xpaths07.fillcolorIcon);

        await I.wait(1);
        //plain assertion
        //await I.seeElement(`((//span[@role='cell' and text()='${data07.matrixCellValue03}'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(255, 255, 0)')]`);

        const actualColorFill = await I.grabAttributeFrom(`((//span[@role='cell' and text()='${data07.matrixCellValue03}'])[1]/parent::div/parent::div)`,'style')
        const expectedColorFill  = actualColorFill.includes(data07.defaultFillColorStyle)
        assert.equal(expectedColorFill,true,'error - value mismatch')
        
    }

    async assertFillColorModalOption() {
        //my code
        //5.2 color paltte modal
        I.seeElement(`(//span[@role='cell' and text()='${data07.matrixCellValue05}'])[1]`);

        I.click(`(//span[@role='cell' and text()='${data07.matrixCellValue05}'])[1]`);
        I.wait(1);
        //

        I.waitForElement(xpaths07.fillColorDropdownArrow, 5);
        I.moveCursorTo(xpaths07.fillColorDropdownArrow);
        I.wait(1);
        I.click(xpaths07.fillColorDropdownArrow);

        I.wait(1);
        I.seeElement(xpaths07.fillColorModal);

        //
        I.waitForElement(xpaths07.fillColorPaletteColor, 5);
        I.moveCursorTo(xpaths07.fillColorPaletteColor);
        I.wait(1);
        I.click(xpaths07.fillColorPaletteColor);

        I.wait(1);
        //plain assertion
        // I.seeElement(`((//span[@role='cell' and text()='${data07.matrixCellValue05}'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(17, 141, 255)')]`);

        //strict assertion
        const actualColorModalFill = await I.grabAttributeFrom(`((//span[@role='cell' and text()='${data07.matrixCellValue05}'])[1]/parent::div/parent::div)`,'style')
        const expectedColorModalFill  = actualColorModalFill.includes(data07.paletteFillColorRGB)
        assert.strictEqual(expectedColorModalFill,true,'error - value mismatch')


    }

    async assertFillColorCustomColor() {
        I.seeElement(`(//span[@role='cell' and text()='${data07.matrixCellValue06}'])[1]`);

        I.click(`(//span[@role='cell' and text()='${data07.matrixCellValue06}'])[1]`);
        I.wait(1);

        I.waitForElement(xpaths07.fillColorDropdownArrow, 5);
        I.moveCursorTo(xpaths07.fillColorDropdownArrow);
        I.wait(1);
        I.click(xpaths07.fillColorDropdownArrow);

        I.wait(1);
        I.seeElement(xpaths07.fillColorModal);

        I.waitForElement(xpaths07.fillColorCustomColorBtn, 5);
        I.moveCursorTo(xpaths07.fillColorCustomColorBtn);
        I.wait(1);
        I.click(xpaths07.fillColorCustomColorBtn);
        
        I.wait(1);
        I.seeElement(xpaths07.fillColorCustomColorModal);

        //entering type

        I.waitForElement(xpaths07.fillColorCustomColorTypeDiv, 5);
        I.moveCursorTo(xpaths07.fillColorCustomColorTypeDiv);
        I.wait(1);
        I.click(xpaths07.fillColorCustomColorTypeDiv);

        I.wait(1);
        I.seeElement(xpaths07.fillColorCustomColorTypeDivMenu);

        // fillColorCustomColorTypeDivMenu: `//div[@role='menu']`,
        // fillColorCustomColorTypeDivMenuOption: `//span[text()='${data07.colorCode01}']`,
        const combinedXPath = xpaths07.fillColorCustomColorTypeDivMenu + xpaths07.fillColorCustomColorTypeDivMenuOption;
        I.seeElement(combinedXPath);
        I.click(combinedXPath)
        I.wait(1)

        //
        I.seeElement(xpaths07.fillColorCustomColorTypeDivMenuResult)

        //entering value

        I.waitForElement(xpaths07.fillColorCustomColorColorCodeInput, 5);
        I.moveCursorTo(xpaths07.fillColorCustomColorColorCodeInput);
        I.wait(1);
        I.click(xpaths07.fillColorCustomColorColorCodeInput);

        I.wait(1);
        I.fillField(xpaths07.fillColorCustomColorColorCodeInput,data07.paletteColor);

        I.seeElement(xpaths07.fillColorModalSaveBtn);
        I.click(xpaths07.fillColorModalSaveBtn);

        //plain assertion
        // I.seeElement(`((//span[@role='cell' and text()='${data07.matrixCellValue06}'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(17, 141, 255)')]`);
        const actualColorCustomFill = await I.grabAttributeFrom(`((//span[@role='cell' and text()='${data07.matrixCellValue06}'])[1]/parent::div/parent::div)`,'style')
        const expectedColorCustomFill  = actualColorCustomFill.includes(data07.paletteFillColorRGB)
        assert.strictEqual(expectedColorCustomFill,true,'error - value mismatch')
    }

}

module.exports = new FillColorAssert()