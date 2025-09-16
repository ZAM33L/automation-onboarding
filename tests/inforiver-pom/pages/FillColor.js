const xpaths03 = require('../xpaths/xpaths03')
const data03 = require('../data/data03')
const { I } = inject()

class FillColor {
    async pageLoad() {
        await I.amOnPage(data03.webPage);
        await I.say("01 . page loaded")
    }
    //test 5 - coloring a cell
    //5.1 recent color shown in icon
    async FillColorIconDefault() {
        await I.seeElement(`(//span[@role='cell' and text()='${data03.matrixCellValue03}'])[1]`);
        await I.click(`(//span[@role='cell' and text()='${data03.matrixCellValue03}'])[1]`);
        await I.wait(1);
        //

        await I.waitForElement(xpaths03.fillcolorIcon, 5);
        await I.moveCursorTo(xpaths03.fillcolorIcon);
        await I.wait(1);
        await I.click(xpaths03.fillcolorIcon);

        await I.wait(1);

        await I.seeElement(`((//span[@role='cell' and text()='${data03.matrixCellValue03}'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(255, 255, 0)')]`);
    }

    async FillColorModalOption(){
     //my code
     //5.2 color paltte modal
    I.seeElement(`(//span[@role='cell' and text()='${data03.matrixCellValue05}'])[1]`);

    I.click(`(//span[@role='cell' and text()='${data03.matrixCellValue05}'])[1]`);
    I.wait(1);
    //

    I.waitForElement(xpaths03.fillColorDropdownArrow, 5);
    I.moveCursorTo(xpaths03.fillColorDropdownArrow);
    I.wait(1);
    I.click(xpaths03.fillColorDropdownArrow);

    I.wait(1);
    I.seeElement(xpaths03.fillColorModal);

    //
    I.waitForElement(xpaths03.fillColorPaletteColor, 5);
    I.moveCursorTo(xpaths03.fillColorPaletteColor);
    I.wait(1);
    I.click(xpaths03.fillColorPaletteColor);

    I.wait(1);
    //
    I.seeElement(`((//span[@role='cell' and text()='${data03.matrixCellValue05}'])[1]/parent::div/parent::div)[contains(@style, 'background: rgb(17, 141, 255)')]`);

    }
    
}

module.exports = new FillColor()