const xpaths04 = require('../xpaths/xpaths04')
const data04 = require('../data/data04')
const { I } = inject()

class FontColor {
    async pageLoad() {
        await I.amOnPage(data04.webPage);
        await I.say("01 . page loaded")
    }
    //test 6 - coloring a font
    //6.1 recent color shown in icon
    async FontColorIconDefault() {
        await I.wait(1);
        await I.seeElement(`(//span[@role='cell' and text()='${data04.matrixCellValue04}'])`);
        await I.click(`(//span[@role='cell' and text()='${data04.matrixCellValue04}'])`);
        await I.wait(1);
        //

        await I.waitForElement(xpaths04.fontcolorIcon, 5);
        await I.moveCursorTo(xpaths04.fontcolorIcon);
        await I.wait(1);
        await I.click(xpaths04.fontcolorIcon);

        await I.wait(1);
        await I.seeElement(`(//span[@role='cell' and text()='${data04.matrixCellValue04}'])[1][contains(@style, 'color: rgb(255, 0, 10)')]`);
    }

    async FontColorModalOption() {
        //my code
        //6.2 color paltte modal
        await I.wait(1);
        await I.seeElement(`(//span[@role='cell' and text()='${data04.matrixCellValue07}'])[1]`);

        await I.click(`(//span[@role='cell' and text()='${data04.matrixCellValue07}'])[1]`);
        await I.wait(1);
        //

        await I.waitForElement(xpaths04.fontColorDropdownArrow, 5);
        await I.moveCursorTo(xpaths04.fontColorDropdownArrow);
        await I.wait(1);
        await I.click(xpaths04.fontColorDropdownArrow);

        await I.wait(1);
        await I.seeElement(xpaths04.fontColorModal);

        //
        await I.waitForElement(xpaths04.fontColorPaletteColor, 5);
        await I.moveCursorTo(xpaths04.fontColorPaletteColor);
        await I.wait(1);
        await I.click(xpaths04.fontColorPaletteColor);

        await I.wait(1);
        //
        await I.seeElement(`(//span[@role='cell' and text()='${data04.matrixCellValue07}'])[1][contains(@style, 'color: rgb(17, 141, 255)')]`);

    }

    async FontColorCustomColor() {
        I.seeElement(`(//span[@role='cell' and text()='${data04.matrixCellValue08}'])[1]`);

        I.click(`(//span[@role='cell' and text()='${data04.matrixCellValue08}'])[1]`);
        I.wait(1);

        I.waitForElement(xpaths04.fontColorDropdownArrow, 5);
        I.moveCursorTo(xpaths04.fontColorDropdownArrow);
        I.wait(1);
        I.click(xpaths04.fontColorDropdownArrow);

        I.wait(1);
        I.seeElement(xpaths04.fontColorModal);

        I.waitForElement(xpaths04.fontColorCustomColorBtn, 5);
        I.moveCursorTo(xpaths04.fontColorCustomColorBtn);
        I.wait(1);
        I.click(xpaths04.fontColorCustomColorBtn);
        
        I.wait(1);
        I.seeElement(xpaths04.fontColorCustomColorModal)
        //entering type

        I.waitForElement(xpaths04.fontColorCustomColorTypeDiv, 5);
        I.moveCursorTo(xpaths04.fontColorCustomColorTypeDiv);
        I.wait(1);
        I.click(xpaths04.fontColorCustomColorTypeDiv);

        I.wait(1);
        I.seeElement(xpaths04.fontColorCustomColorTypeDivMenu);

        const combinedXPath = xpaths04.fontColorCustomColorTypeDivMenu + xpaths04.fontColorCustomColorTypeDivMenuOption;
        I.seeElement(combinedXPath);
        I.click(combinedXPath)
        I.waitont

        //
        I.seeElement(xpaths04.fontColorCustomColorTypeDivMenuResult)

        //entering value

        I.waitForElement(xpaths04.fontColorCustomColorColorCodeInput, 5);
        I.moveCursorTo(xpaths04.fontColorCustomColorColorCodeInput);
        I.wait(1);
        I.click(xpaths04.fontColorCustomColorColorCodeInput);

        I.wait(1);
        I.fillField(xpaths04.fontColorCustomColorColorCodeInput,data04.paletteColor);

        I.seeElement(xpaths04.fontColorModalSaveBtn);
        I.click(xpaths04.fontColorModalSaveBtn);
        //
        I.seeElement(`(//span[@role='cell' and text()='${data04.matrixCellValue08}'])[1][contains(@style, 'color: rgb(17, 141, 255)')]`);
    }

}

module.exports = new FontColor()