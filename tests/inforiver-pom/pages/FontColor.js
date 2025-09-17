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
        I.seeElement(`(//span[@role='cell' and text()='${data03.matrixCellValue06}'])[1]`);

        I.click(`(//span[@role='cell' and text()='${data03.matrixCellValue06}'])[1]`);
        I.wait(1);

        I.waitForElement(xpaths03.fillColorDropdownArrow, 5);
        I.moveCursorTo(xpaths03.fillColorDropdownArrow);
        I.wait(1);
        I.click(xpaths03.fillColorDropdownArrow);

        I.wait(1);
        I.seeElement(xpaths03.fillColorModal);

        I.waitForElement(xpaths03.fillColorCustomColorBtn, 5);
        I.moveCursorTo(xpaths03.fillColorCustomColorBtn);
        I.wait(1);
        I.click(xpaths03.fillColorCustomColorBtn);
        
        I.wait(1);
        I.seeElement(xpaths03.fillColorCustomColorModal);

        //entering type

        I.waitForElement(xpaths03.fillColorCustomColorTypeDiv, 5);
        I.moveCursorTo(xpaths03.fillColorCustomColorTypeDiv);
        I.wait(1);
        I.click(xpaths03.fillColorCustomColorTypeDiv);

        I.wait(1);
        I.seeElement(xpaths03.fillColorCustomColorTypeDivMenu);

        const combinedXPath = xpaths03.fillColorCustomColorTypeDivMenu + xpaths03.fillColorCustomColorTypeDivMenuOption;
        I.seeElement(combinedXPath);
        I.click(combinedXPath)
        I.wait(1)

        //
        I.seeElement(xpaths03.fillColorCustomColorTypeDivMenuResult)

        //entering value

        I.waitForElement(xpaths03.fillColorCustomColorColorCodeInput, 5);
        I.moveCursorTo(xpaths03.fillColorCustomColorColorCodeInput);
        I.wait(1);
        I.click(xpaths03.fillColorCustomColorColorCodeInput);

        I.wait(1);
        I.fillField(xpaths03.fillColorCustomColorColorCodeInput,data03.paletteColor);

        I.seeElement(xpaths03.fillColorModalSaveBtn);
        I.click(xpaths03.fillColorModalSaveBtn);
        //
        I.seeElement(`((//span[@role='cell' and text()='${data03.matrixCellValue06}'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(17, 141, 255)')]`);
    }

}

module.exports = new FontColor()