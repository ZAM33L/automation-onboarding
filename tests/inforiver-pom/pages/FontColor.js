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


}

module.exports = new FontColor()